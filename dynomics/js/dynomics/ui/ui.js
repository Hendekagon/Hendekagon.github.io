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
dynomics.ui.ui.keydown = (function dynomics$ui$ui$keydown(p__104214,e){
var map__104219 = p__104214;
var map__104219__$1 = ((((!((map__104219 == null)))?((((map__104219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104219):map__104219);
var state = map__104219__$1;
var map__104220 = cljs.core.get.call(null,map__104219__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__104220__$1 = ((((!((map__104220 == null)))?((((map__104220.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104220.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104220):map__104220);
var msgs = cljs.core.get.call(null,map__104220__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
return cljs.core.async.put_BANG_.call(null,msgs,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),dynomics.ui.core.keycode_to_keyword.call(null,e.keyCode),new cljs.core.Keyword(null,"keycode","keycode",-47989070),e.keyCode,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"event","event",301435442)], null));
});
dynomics.ui.ui.keyup = (function dynomics$ui$ui$keyup(p__104223,e){
var map__104228 = p__104223;
var map__104228__$1 = ((((!((map__104228 == null)))?((((map__104228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104228):map__104228);
var state = map__104228__$1;
var map__104229 = cljs.core.get.call(null,map__104228__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__104229__$1 = ((((!((map__104229 == null)))?((((map__104229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104229):map__104229);
var msgs = cljs.core.get.call(null,map__104229__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
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
if(typeof dynomics.ui.ui.t_dynomics$ui$ui104239 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui104239 = (function (make_function_selector_view,state,owner,functions,state_updates,meta104240){
this.make_function_selector_view = make_function_selector_view;
this.state = state;
this.owner = owner;
this.functions = functions;
this.state_updates = state_updates;
this.meta104240 = meta104240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui104239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (functions,state_updates){
return (function (_104241,meta104240__$1){
var self__ = this;
var _104241__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui104239(self__.make_function_selector_view,self__.state,self__.owner,self__.functions,self__.state_updates,meta104240__$1));
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui104239.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (functions,state_updates){
return (function (_104241){
var self__ = this;
var _104241__$1 = this;
return self__.meta104240;
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui104239.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui104239.prototype.om$core$IRender$render$arity$1 = ((function (functions,state_updates){
return (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return om.dom.div.call(null,{"className": "function_selector"},cljs.core.map.call(null,((function (this__44434__auto____$1,functions,state_updates){
return (function (p__104242){
var vec__104243 = p__104242;
var k = cljs.core.nth.call(null,vec__104243,(0),null);
var map__104244 = cljs.core.nth.call(null,vec__104243,(1),null);
var map__104244__$1 = ((((!((map__104244 == null)))?((((map__104244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104244):map__104244);
var naym = cljs.core.get.call(null,map__104244__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__104244__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return om.dom.div.call(null,{"className": "function_selector_item", "id": [cljs.core.str(cljs.core.name.call(null,k))].join(''), "onClick": ((function (vec__104243,k,map__104244,map__104244__$1,naym,description,this__44434__auto____$1,functions,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__104243,k,map__104244,map__104244__$1,naym,description,this__44434__auto____$1,functions,state_updates){
return (function (s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"current-function","current-function",1894670892)], null),k);
});})(vec__104243,k,map__104244,map__104244__$1,naym,description,this__44434__auto____$1,functions,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"id","id",-1388402092),k,new cljs.core.Keyword(null,"description","description",-1428560544),naym], null)], null));

return null;
});})(vec__104243,k,map__104244,map__104244__$1,naym,description,this__44434__auto____$1,functions,state_updates))
},naym);
});})(this__44434__auto____$1,functions,state_updates))
,self__.functions));
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui104239.getBasis = ((function (functions,state_updates){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-function-selector-view","make-function-selector-view",516344898,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for selecting the current function"], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"functions","functions",1825482993,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"meta104240","meta104240",473694482,null)], null);
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui104239.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui104239.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui104239";

dynomics.ui.ui.t_dynomics$ui$ui104239.cljs$lang$ctorPrWriter = ((function (functions,state_updates){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.ui.ui/t_dynomics$ui$ui104239");
});})(functions,state_updates))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui104239 = ((function (functions,state_updates){
return (function dynomics$ui$ui$make_function_selector_view_$___GT_t_dynomics$ui$ui104239(make_function_selector_view__$1,state__$1,owner__$1,functions__$1,state_updates__$1,meta104240){
return (new dynomics.ui.ui.t_dynomics$ui$ui104239(make_function_selector_view__$1,state__$1,owner__$1,functions__$1,state_updates__$1,meta104240));
});})(functions,state_updates))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui104239(dynomics$ui$ui$make_function_selector_view,state,owner,functions,state_updates,null));
});
/**
 * Return a component to display a list
 *   of historical states which select a historical
 *   state on mouseover
 */
dynomics.ui.ui.make_history_selector_view = (function dynomics$ui$ui$make_history_selector_view(p__104246,owner){
var map__104257 = p__104246;
var map__104257__$1 = ((((!((map__104257 == null)))?((((map__104257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104257):map__104257);
var state = map__104257__$1;
var map__104258 = cljs.core.get.call(null,map__104257__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__104258__$1 = ((((!((map__104258 == null)))?((((map__104258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104258):map__104258);
var state_updates = cljs.core.get.call(null,map__104258__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var sh = cljs.core.get.call(null,map__104257__$1,new cljs.core.Keyword(null,"show-history","show-history",1972567130));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui104261 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui104261 = (function (make_history_selector_view,p__104246,owner,map__104257,state,map__104258,state_updates,sh,meta104262){
this.make_history_selector_view = make_history_selector_view;
this.p__104246 = p__104246;
this.owner = owner;
this.map__104257 = map__104257;
this.state = state;
this.map__104258 = map__104258;
this.state_updates = state_updates;
this.sh = sh;
this.meta104262 = meta104262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui104261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh){
return (function (_104263,meta104262__$1){
var self__ = this;
var _104263__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui104261(self__.make_history_selector_view,self__.p__104246,self__.owner,self__.map__104257,self__.state,self__.map__104258,self__.state_updates,self__.sh,meta104262__$1));
});})(map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui104261.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh){
return (function (_104263){
var self__ = this;
var _104263__$1 = this;
return self__.meta104262;
});})(map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui104261.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui104261.prototype.om$core$IRender$render$arity$1 = ((function (map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh){
return (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return om.dom.div.call(null,{"className": "history_selector", "onClick": ((function (this__44434__auto____$1,map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh){
return (function (e){
return cljs.core.async.put_BANG_.call(null,self__.state_updates,((function (this__44434__auto____$1,map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh){
return (function (s){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (this__44434__auto____$1,map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh){
return (function (s__$1){
return cljs.core.update_in.call(null,s__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-history","show-history",1972567130)], null),cljs.core.not);
});})(this__44434__auto____$1,map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh))
], null);
});})(this__44434__auto____$1,map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh))
);
});})(this__44434__auto____$1,map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh))
},om.dom.div.call(null,{"className": "history_selector_text"},"History"),om.dom.div.call(null,{"className": (cljs.core.truth_(self__.sh)?"history_selector_visible":"history_selector_hidden")},cljs.core.map.call(null,((function (this__44434__auto____$1,map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh){
return (function (p__104264){
var map__104265 = p__104264;
var map__104265__$1 = ((((!((map__104265 == null)))?((((map__104265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104265):map__104265);
var history_item = map__104265__$1;
var action = cljs.core.get.call(null,map__104265__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var version = cljs.core.get.call(null,map__104265__$1,new cljs.core.Keyword(null,"version","version",425292698));
var previous_action = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item),(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item)) - (1))));
var previous_version = new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item)));
return om.dom.div.call(null,{"className": [cljs.core.str("history_selector_item "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"history-item","history-item",-894421182),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(previous_action)))?"historical":""))].join(''), "id": [cljs.core.str("history_version_"),cljs.core.str(previous_version)].join(''), "onMouseOver": ((function (previous_action,previous_version,map__104265,map__104265__$1,history_item,action,version,this__44434__auto____$1,map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,((function (previous_action,previous_version,map__104265,map__104265__$1,history_item,action,version,this__44434__auto____$1,map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh){
return (function (s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (previous_action,previous_version,map__104265,map__104265__$1,history_item,action,version,this__44434__auto____$1,map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh){
return (function (s__$1){
return cljs.core.merge.call(null,om.core.value.call(null,history_item),cljs.core.select_keys.call(null,s__$1,cljs.core.conj.call(null,new cljs.core.Keyword(null,"dont-record","dont-record",577283045).cljs$core$IFn$_invoke$arity$1(s__$1),new cljs.core.Keyword(null,"history","history",-247395220))));
});})(previous_action,previous_version,map__104265,map__104265__$1,history_item,action,version,this__44434__auto____$1,map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"desccription","desccription",-1060114044),[cljs.core.str(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(previous_action))].join(''),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"history-item","history-item",-894421182),new cljs.core.Keyword(null,"id","id",-1388402092),version], null)], null);
});})(previous_action,previous_version,map__104265,map__104265__$1,history_item,action,version,this__44434__auto____$1,map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh))
);

return null;
});})(previous_action,previous_version,map__104265,map__104265__$1,history_item,action,version,this__44434__auto____$1,map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh))
},new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(previous_action));
});})(this__44434__auto____$1,map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh))
,cljs.core.filter.call(null,((function (this__44434__auto____$1,map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh){
return (function (hi){
return new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(hi),(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(hi)) - (1)))));
});})(this__44434__auto____$1,map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh))
,cljs.core.reverse.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(self__.state),self__.state))))));
});})(map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui104261.getBasis = ((function (map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-history-selector-view","make-history-selector-view",1677763159,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Symbol(null,"sh","sh",958087520,null),new cljs.core.Keyword(null,"show-history","show-history",1972567130),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a component to display a list\n  of historical states which select a historical\n  state on mouseover"], null)),new cljs.core.Symbol(null,"p__104246","p__104246",1156830917,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__104257","map__104257",2096220323,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__104258","map__104258",-24145065,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"sh","sh",958087520,null),new cljs.core.Symbol(null,"meta104262","meta104262",1396638962,null)], null);
});})(map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui104261.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui104261.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui104261";

dynomics.ui.ui.t_dynomics$ui$ui104261.cljs$lang$ctorPrWriter = ((function (map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.ui.ui/t_dynomics$ui$ui104261");
});})(map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui104261 = ((function (map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh){
return (function dynomics$ui$ui$make_history_selector_view_$___GT_t_dynomics$ui$ui104261(make_history_selector_view__$1,p__104246__$1,owner__$1,map__104257__$2,state__$1,map__104258__$2,state_updates__$1,sh__$1,meta104262){
return (new dynomics.ui.ui.t_dynomics$ui$ui104261(make_history_selector_view__$1,p__104246__$1,owner__$1,map__104257__$2,state__$1,map__104258__$2,state_updates__$1,sh__$1,meta104262));
});})(map__104257,map__104257__$1,state,map__104258,map__104258__$1,state_updates,sh))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui104261(dynomics$ui$ui$make_history_selector_view,p__104246,owner,map__104257__$1,state,map__104258__$1,state_updates,sh,null));
});
dynomics.ui.ui.make_context_menu = (function dynomics$ui$ui$make_context_menu(p__104267){
var map__104280 = p__104267;
var map__104280__$1 = ((((!((map__104280 == null)))?((((map__104280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104280):map__104280);
var map__104281 = cljs.core.get.call(null,map__104280__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__104281__$1 = ((((!((map__104281 == null)))?((((map__104281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104281):map__104281);
var vec__104282 = cljs.core.get.call(null,map__104281__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__104282,(0),null);
var y = cljs.core.nth.call(null,vec__104282,(1),null);
var o = cljs.core.get.call(null,map__104281__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var options = cljs.core.get.call(null,map__104281__$1,new cljs.core.Keyword(null,"options","options",99638489));
var msgs = cljs.core.get.call(null,map__104280__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui104285 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui104285 = (function (options,x,y,o,map__104280,vec__104282,map__104281,msgs,make_context_menu,p__104267,meta104286){
this.options = options;
this.x = x;
this.y = y;
this.o = o;
this.map__104280 = map__104280;
this.vec__104282 = vec__104282;
this.map__104281 = map__104281;
this.msgs = msgs;
this.make_context_menu = make_context_menu;
this.p__104267 = p__104267;
this.meta104286 = meta104286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui104285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__104280,map__104280__$1,map__104281,map__104281__$1,vec__104282,x,y,o,options,msgs){
return (function (_104287,meta104286__$1){
var self__ = this;
var _104287__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui104285(self__.options,self__.x,self__.y,self__.o,self__.map__104280,self__.vec__104282,self__.map__104281,self__.msgs,self__.make_context_menu,self__.p__104267,meta104286__$1));
});})(map__104280,map__104280__$1,map__104281,map__104281__$1,vec__104282,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui104285.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__104280,map__104280__$1,map__104281,map__104281__$1,vec__104282,x,y,o,options,msgs){
return (function (_104287){
var self__ = this;
var _104287__$1 = this;
return self__.meta104286;
});})(map__104280,map__104280__$1,map__104281,map__104281__$1,vec__104282,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui104285.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui104285.prototype.om$core$IRender$render$arity$1 = ((function (map__104280,map__104280__$1,map__104281,map__104281__$1,vec__104282,x,y,o,options,msgs){
return (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return React.createElement("div",{"style": {"transform": [cljs.core.str("translate("),cljs.core.str(self__.x),cljs.core.str("px,"),cljs.core.str(self__.y),cljs.core.str("px)")].join('')}, "id": "context-menu", "className": "context_menu", "onMouseDown": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseUp": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseLeave": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),self__.msgs,cljs.core.PersistentArrayMap.EMPTY)},React.createElement("div",{"className": "context_menu_title"},sablono.interpreter.interpret.call(null,[cljs.core.str("Options for "),cljs.core.str(cljs.core.name.call(null,self__.o))].join(''))),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (this__44434__auto____$1,map__104280,map__104280__$1,map__104281,map__104281__$1,vec__104282,x,y,o,options,msgs){
return (function (p__104288){
var vec__104289 = p__104288;
var k = cljs.core.nth.call(null,vec__104289,(0),null);
var map__104290 = cljs.core.nth.call(null,vec__104289,(1),null);
var map__104290__$1 = ((((!((map__104290 == null)))?((((map__104290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104290):map__104290);
var naym = cljs.core.get.call(null,map__104290__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var kb = cljs.core.get.call(null,map__104290__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
var f = cljs.core.get.call(null,map__104290__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"context_menu_option",new cljs.core.Keyword(null,"onMouseUp","onMouseUp",-180363297),dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),k], null),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),f], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str(naym),cljs.core.str("  ")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"keyboard_shortcut"], null),[cljs.core.str(kb)].join('')], null)], null);
});})(this__44434__auto____$1,map__104280,map__104280__$1,map__104281,map__104281__$1,vec__104282,x,y,o,options,msgs))
,self__.options)));
});})(map__104280,map__104280__$1,map__104281,map__104281__$1,vec__104282,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui104285.getBasis = ((function (map__104280,map__104280__$1,map__104281,map__104281__$1,vec__104282,x,y,o,options,msgs){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Symbol(null,"map__104280","map__104280",275226318,null),new cljs.core.Symbol(null,"vec__104282","vec__104282",-840379952,null),new cljs.core.Symbol(null,"map__104281","map__104281",-935715783,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-context-menu","make-context-menu",-526000036,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Keyword(null,"options","options",99638489)], true, false),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)], true, false)], null)))], null)),new cljs.core.Symbol(null,"p__104267","p__104267",1950284445,null),new cljs.core.Symbol(null,"meta104286","meta104286",1815592558,null)], null);
});})(map__104280,map__104280__$1,map__104281,map__104281__$1,vec__104282,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui104285.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui104285.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui104285";

dynomics.ui.ui.t_dynomics$ui$ui104285.cljs$lang$ctorPrWriter = ((function (map__104280,map__104280__$1,map__104281,map__104281__$1,vec__104282,x,y,o,options,msgs){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.ui.ui/t_dynomics$ui$ui104285");
});})(map__104280,map__104280__$1,map__104281,map__104281__$1,vec__104282,x,y,o,options,msgs))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui104285 = ((function (map__104280,map__104280__$1,map__104281,map__104281__$1,vec__104282,x,y,o,options,msgs){
return (function dynomics$ui$ui$make_context_menu_$___GT_t_dynomics$ui$ui104285(options__$1,x__$1,y__$1,o__$1,map__104280__$2,vec__104282__$1,map__104281__$2,msgs__$1,make_context_menu__$1,p__104267__$1,meta104286){
return (new dynomics.ui.ui.t_dynomics$ui$ui104285(options__$1,x__$1,y__$1,o__$1,map__104280__$2,vec__104282__$1,map__104281__$2,msgs__$1,make_context_menu__$1,p__104267__$1,meta104286));
});})(map__104280,map__104280__$1,map__104281,map__104281__$1,vec__104282,x,y,o,options,msgs))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui104285(options,x,y,o,map__104280__$1,vec__104282,map__104281__$1,msgs,dynomics$ui$ui$make_context_menu,p__104267,null));
});
/**
 * Returns a component for the top header
 */
dynomics.ui.ui.make_header_view = (function dynomics$ui$ui$make_header_view(p__104292){
var map__104298 = p__104292;
var map__104298__$1 = ((((!((map__104298 == null)))?((((map__104298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104298):map__104298);
var state = map__104298__$1;
var logo_text = cljs.core.get.call(null,map__104298__$1,new cljs.core.Keyword(null,"logo-text","logo-text",-580816517));
var app_name = cljs.core.get.call(null,map__104298__$1,new cljs.core.Keyword(null,"app-name","app-name",-268811251));
var app_version = cljs.core.get.call(null,map__104298__$1,new cljs.core.Keyword(null,"app-version","app-version",361554836));
var state_version = cljs.core.get.call(null,map__104298__$1,new cljs.core.Keyword(null,"state-version","state-version",1282692697));
var action = cljs.core.get.call(null,map__104298__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui104300 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui104300 = (function (make_header_view,p__104292,map__104298,state,logo_text,app_name,app_version,state_version,action,meta104301){
this.make_header_view = make_header_view;
this.p__104292 = p__104292;
this.map__104298 = map__104298;
this.state = state;
this.logo_text = logo_text;
this.app_name = app_name;
this.app_version = app_version;
this.state_version = state_version;
this.action = action;
this.meta104301 = meta104301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui104300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__104298,map__104298__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (_104302,meta104301__$1){
var self__ = this;
var _104302__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui104300(self__.make_header_view,self__.p__104292,self__.map__104298,self__.state,self__.logo_text,self__.app_name,self__.app_version,self__.state_version,self__.action,meta104301__$1));
});})(map__104298,map__104298__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui104300.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__104298,map__104298__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (_104302){
var self__ = this;
var _104302__$1 = this;
return self__.meta104301;
});})(map__104298,map__104298__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui104300.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui104300.prototype.om$core$IRender$render$arity$1 = ((function (map__104298,map__104298__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return om.dom.div.call(null,{"className": "top_component"},null,null);
});})(map__104298,map__104298__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui104300.getBasis = ((function (map__104298,map__104298__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-header-view","make-header-view",2348093,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"logo-text","logo-text",1059715010,null),new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"app-version","app-version",2002086363,null),new cljs.core.Symbol(null,"state-version","state-version",-1371743072,null),new cljs.core.Symbol(null,"action","action",829293503,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the top header"], null)),new cljs.core.Symbol(null,"p__104292","p__104292",748143762,null),new cljs.core.Symbol(null,"map__104298","map__104298",-1547781557,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"logo-text","logo-text",1059715010,null),new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"app-version","app-version",2002086363,null),new cljs.core.Symbol(null,"state-version","state-version",-1371743072,null),new cljs.core.Symbol(null,"action","action",829293503,null),new cljs.core.Symbol(null,"meta104301","meta104301",-135357185,null)], null);
});})(map__104298,map__104298__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui104300.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui104300.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui104300";

dynomics.ui.ui.t_dynomics$ui$ui104300.cljs$lang$ctorPrWriter = ((function (map__104298,map__104298__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.ui.ui/t_dynomics$ui$ui104300");
});})(map__104298,map__104298__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui104300 = ((function (map__104298,map__104298__$1,state,logo_text,app_name,app_version,state_version,action){
return (function dynomics$ui$ui$make_header_view_$___GT_t_dynomics$ui$ui104300(make_header_view__$1,p__104292__$1,map__104298__$2,state__$1,logo_text__$1,app_name__$1,app_version__$1,state_version__$1,action__$1,meta104301){
return (new dynomics.ui.ui.t_dynomics$ui$ui104300(make_header_view__$1,p__104292__$1,map__104298__$2,state__$1,logo_text__$1,app_name__$1,app_version__$1,state_version__$1,action__$1,meta104301));
});})(map__104298,map__104298__$1,state,logo_text,app_name,app_version,state_version,action))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui104300(dynomics$ui$ui$make_header_view,p__104292,map__104298__$1,state,logo_text,app_name,app_version,state_version,action,null));
});
dynomics.ui.ui.evaluate = (function dynomics$ui$ui$evaluate(s,sexp,f){
return null;
});
dynomics.ui.ui.make_footer_view = (function dynomics$ui$ui$make_footer_view(p__104303){
var map__104313 = p__104303;
var map__104313__$1 = ((((!((map__104313 == null)))?((((map__104313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104313):map__104313);
var state = map__104313__$1;
var map__104314 = cljs.core.get.call(null,map__104313__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__104314__$1 = ((((!((map__104314 == null)))?((((map__104314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104314):map__104314);
var state_updates = cljs.core.get.call(null,map__104314__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var map__104315 = cljs.core.get.call(null,map__104313__$1,new cljs.core.Keyword(null,"eval","eval",-1103567905));
var map__104315__$1 = ((((!((map__104315 == null)))?((((map__104315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104315):map__104315);
var last_result = cljs.core.get.call(null,map__104315__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var last_exps = cljs.core.get.call(null,map__104315__$1,new cljs.core.Keyword(null,"exps","exps",-877274249));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui104319 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui104319 = (function (make_footer_view,p__104303,map__104313,state,map__104314,state_updates,map__104315,last_result,last_exps,meta104320){
this.make_footer_view = make_footer_view;
this.p__104303 = p__104303;
this.map__104313 = map__104313;
this.state = state;
this.map__104314 = map__104314;
this.state_updates = state_updates;
this.map__104315 = map__104315;
this.last_result = last_result;
this.last_exps = last_exps;
this.meta104320 = meta104320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui104319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__104313,map__104313__$1,state,map__104314,map__104314__$1,state_updates,map__104315,map__104315__$1,last_result,last_exps){
return (function (_104321,meta104320__$1){
var self__ = this;
var _104321__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui104319(self__.make_footer_view,self__.p__104303,self__.map__104313,self__.state,self__.map__104314,self__.state_updates,self__.map__104315,self__.last_result,self__.last_exps,meta104320__$1));
});})(map__104313,map__104313__$1,state,map__104314,map__104314__$1,state_updates,map__104315,map__104315__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui104319.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__104313,map__104313__$1,state,map__104314,map__104314__$1,state_updates,map__104315,map__104315__$1,last_result,last_exps){
return (function (_104321){
var self__ = this;
var _104321__$1 = this;
return self__.meta104320;
});})(map__104313,map__104313__$1,state,map__104314,map__104314__$1,state_updates,map__104315,map__104315__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui104319.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui104319.prototype.om$core$IRender$render$arity$1 = ((function (map__104313,map__104313__$1,state,map__104314,map__104314__$1,state_updates,map__104315,map__104315__$1,last_result,last_exps){
return (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return om.dom.div.call(null,{"className": "bottom_component"},om.dom.input.call(null,{"className": "eval_input", "type": "text", "size": (64), "onKeyDown": ((function (this__44434__auto____$1,map__104313,map__104313__$1,state,map__104314,map__104314__$1,state_updates,map__104315,map__104315__$1,last_result,last_exps){
return (function (e){
e.stopPropagation();


return null;
});})(this__44434__auto____$1,map__104313,map__104313__$1,state,map__104314,map__104314__$1,state_updates,map__104315,map__104315__$1,last_result,last_exps))
}),om.dom.div.call(null,{"className": "eval_result"},[cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.last_result))].join('')));
});})(map__104313,map__104313__$1,state,map__104314,map__104314__$1,state_updates,map__104315,map__104315__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui104319.getBasis = ((function (map__104313,map__104313__$1,state,map__104314,map__104314__$1,state_updates,map__104315,map__104315__$1,last_result,last_exps){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-footer-view","make-footer-view",-746293906,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"last-result","last-result",608012457,null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Symbol(null,"last-exps","last-exps",-1587487039,null),new cljs.core.Keyword(null,"exps","exps",-877274249)], null),new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)))], null)),new cljs.core.Symbol(null,"p__104303","p__104303",-1853363756,null),new cljs.core.Symbol(null,"map__104313","map__104313",-294593353,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__104314","map__104314",-316535358,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"map__104315","map__104315",558878420,null),new cljs.core.Symbol(null,"last-result","last-result",608012457,null),new cljs.core.Symbol(null,"last-exps","last-exps",-1587487039,null),new cljs.core.Symbol(null,"meta104320","meta104320",-1704305376,null)], null);
});})(map__104313,map__104313__$1,state,map__104314,map__104314__$1,state_updates,map__104315,map__104315__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui104319.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui104319.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui104319";

dynomics.ui.ui.t_dynomics$ui$ui104319.cljs$lang$ctorPrWriter = ((function (map__104313,map__104313__$1,state,map__104314,map__104314__$1,state_updates,map__104315,map__104315__$1,last_result,last_exps){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.ui.ui/t_dynomics$ui$ui104319");
});})(map__104313,map__104313__$1,state,map__104314,map__104314__$1,state_updates,map__104315,map__104315__$1,last_result,last_exps))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui104319 = ((function (map__104313,map__104313__$1,state,map__104314,map__104314__$1,state_updates,map__104315,map__104315__$1,last_result,last_exps){
return (function dynomics$ui$ui$make_footer_view_$___GT_t_dynomics$ui$ui104319(make_footer_view__$1,p__104303__$1,map__104313__$2,state__$1,map__104314__$2,state_updates__$1,map__104315__$2,last_result__$1,last_exps__$1,meta104320){
return (new dynomics.ui.ui.t_dynomics$ui$ui104319(make_footer_view__$1,p__104303__$1,map__104313__$2,state__$1,map__104314__$2,state_updates__$1,map__104315__$2,last_result__$1,last_exps__$1,meta104320));
});})(map__104313,map__104313__$1,state,map__104314,map__104314__$1,state_updates,map__104315,map__104315__$1,last_result,last_exps))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui104319(dynomics$ui$ui$make_footer_view,p__104303,map__104313__$1,state,map__104314__$1,state_updates,map__104315__$1,last_result,last_exps,null));
});
dynomics.ui.ui.add_components = (function dynomics$ui$ui$add_components(state){
var seq__104326_104330 = cljs.core.seq.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.vals.call(null,cljs.core.dissoc.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null))))));
var chunk__104327_104331 = null;
var count__104328_104332 = (0);
var i__104329_104333 = (0);
while(true){
if((i__104329_104333 < count__104328_104332)){
var component_104334 = cljs.core._nth.call(null,chunk__104327_104331,i__104329_104333);
dynomics.ui.messaging.subscribe_BANG_.call(null,state,component_104334);

var G__104335 = seq__104326_104330;
var G__104336 = chunk__104327_104331;
var G__104337 = count__104328_104332;
var G__104338 = (i__104329_104333 + (1));
seq__104326_104330 = G__104335;
chunk__104327_104331 = G__104336;
count__104328_104332 = G__104337;
i__104329_104333 = G__104338;
continue;
} else {
var temp__4657__auto___104339 = cljs.core.seq.call(null,seq__104326_104330);
if(temp__4657__auto___104339){
var seq__104326_104340__$1 = temp__4657__auto___104339;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__104326_104340__$1)){
var c__36203__auto___104341 = cljs.core.chunk_first.call(null,seq__104326_104340__$1);
var G__104342 = cljs.core.chunk_rest.call(null,seq__104326_104340__$1);
var G__104343 = c__36203__auto___104341;
var G__104344 = cljs.core.count.call(null,c__36203__auto___104341);
var G__104345 = (0);
seq__104326_104330 = G__104342;
chunk__104327_104331 = G__104343;
count__104328_104332 = G__104344;
i__104329_104333 = G__104345;
continue;
} else {
var component_104346 = cljs.core.first.call(null,seq__104326_104340__$1);
dynomics.ui.messaging.subscribe_BANG_.call(null,state,component_104346);

var G__104347 = cljs.core.next.call(null,seq__104326_104340__$1);
var G__104348 = null;
var G__104349 = (0);
var G__104350 = (0);
seq__104326_104330 = G__104347;
chunk__104327_104331 = G__104348;
count__104328_104332 = G__104349;
i__104329_104333 = G__104350;
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
var args104351 = [];
var len__36461__auto___104358 = arguments.length;
var i__36462__auto___104359 = (0);
while(true){
if((i__36462__auto___104359 < len__36461__auto___104358)){
args104351.push((arguments[i__36462__auto___104359]));

var G__104360 = (i__36462__auto___104359 + (1));
i__36462__auto___104359 = G__104360;
continue;
} else {
}
break;
}

var G__104353 = args104351.length;
switch (G__104353) {
case 1:
return dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args104351.length)].join('')));

}
});

dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$1 = (function (state){
return dynomics.ui.ui.add_keybindings.call(null,state,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990)], null)));
});

dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$2 = (function (state,tools){
return cljs.core.reduce.call(null,(function (r,p__104354){
var vec__104355 = p__104354;
var k = cljs.core.nth.call(null,vec__104355,(0),null);
var map__104356 = cljs.core.nth.call(null,vec__104355,(1),null);
var map__104356__$1 = ((((!((map__104356 == null)))?((((map__104356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104356):map__104356);
var f = cljs.core.get.call(null,map__104356__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var kb = cljs.core.get.call(null,map__104356__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
var naym = cljs.core.get.call(null,map__104356__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var tools__$1 = cljs.core.get.call(null,map__104356__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
if(cljs.core.truth_(f)){
return cljs.core.assoc_in.call(null,r,dynomics.ui.ui.make_kb_path.call(null,kb),((function (vec__104355,k,map__104356,map__104356__$1,f,kb,naym,tools__$1){
return (function (s){
cljs.core.println.call(null,naym);

return ((cljs.core.delay_QMARK_.call(null,f))?cljs.core.deref.call(null,f):f).call(null,s);
});})(vec__104355,k,map__104356,map__104356__$1,f,kb,naym,tools__$1))
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
dynomics.ui.ui.where_they_were = (function dynomics$ui$ui$where_they_were(p__104362){
var map__104367 = p__104362;
var map__104367__$1 = ((((!((map__104367 == null)))?((((map__104367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104367):map__104367);
var state = map__104367__$1;
var map__104368 = cljs.core.get.call(null,map__104367__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__104368__$1 = ((((!((map__104368 == null)))?((((map__104368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104368):map__104368);
var space = map__104368__$1;
var selected_nodes = cljs.core.get.call(null,map__104368__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.reduce.call(null,((function (map__104367,map__104367__$1,state,map__104368,map__104368__$1,space,selected_nodes){
return (function (s,path){
return cljs.core.assoc_in.call(null,s,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position-at-start-of-move","position-at-start-of-move",530469056)),cljs.core.get_in.call(null,state,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position","position",-2011731912))));
});})(map__104367,map__104367__$1,state,map__104368,map__104368__$1,space,selected_nodes))
,state,cljs.core.remove.call(null,cljs.core.nil_QMARK_,selected_nodes));
});
dynomics.ui.ui.relative_to_cursor = (function dynomics$ui$ui$relative_to_cursor(var_args){
var args104371 = [];
var len__36461__auto___104374 = arguments.length;
var i__36462__auto___104375 = (0);
while(true){
if((i__36462__auto___104375 < len__36461__auto___104374)){
args104371.push((arguments[i__36462__auto___104375]));

var G__104376 = (i__36462__auto___104375 + (1));
i__36462__auto___104375 = G__104376;
continue;
} else {
}
break;
}

var G__104373 = args104371.length;
switch (G__104373) {
case 3:
return dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args104371.length)].join('')));

}
});

dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (p,pth,state){
return dynomics.ui.ui.relative_to_cursor.call(null,p,pth,cljs.core.get_in.call(null,state,cljs.core.conj.call(null,pth,new cljs.core.Keyword(null,"position-at-start-of-move","position-at-start-of-move",530469056))),new cljs.core.Keyword(null,"mouse-position-at-start-of-move","mouse-position-at-start-of-move",1825524089).cljs$core$IFn$_invoke$arity$1(state));
});

dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$4 = (function (p,pth,pws,pasom){
return cljs.core.map.call(null,cljs.core._PLUS_,p,cljs.core.map.call(null,cljs.core._,pws,pasom));
});

dynomics.ui.ui.relative_to_cursor.cljs$lang$maxFixedArity = 4;
dynomics.ui.ui.toggle_select = (function dynomics$ui$ui$toggle_select(p__104378){
var map__104383 = p__104378;
var map__104383__$1 = ((((!((map__104383 == null)))?((((map__104383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104383):map__104383);
var state = map__104383__$1;
var map__104384 = cljs.core.get.call(null,map__104383__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__104384__$1 = ((((!((map__104384 == null)))?((((map__104384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104384):map__104384);
var p = cljs.core.get.call(null,map__104384__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__104384__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__104384__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"toggle select",path);

return dynomics.space.core.add_curve_between_nodes.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),((function (map__104383,map__104383__$1,state,map__104384,map__104384__$1,p,id,path){
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
});})(map__104383,map__104383__$1,state,map__104384,map__104384__$1,p,id,path))
));
});
dynomics.ui.ui.toggle_select_curve = (function dynomics$ui$ui$toggle_select_curve(p__104387){
var map__104392 = p__104387;
var map__104392__$1 = ((((!((map__104392 == null)))?((((map__104392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104392):map__104392);
var state = map__104392__$1;
var map__104393 = cljs.core.get.call(null,map__104392__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__104393__$1 = ((((!((map__104393 == null)))?((((map__104393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104393):map__104393);
var p = cljs.core.get.call(null,map__104393__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__104393__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__104393__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"(de)select curve",path);

return dynomics.space.core.toggle_select_curve.call(null,state,path);
});
dynomics.ui.ui.toggle_active = (function dynomics$ui$ui$toggle_active(p__104396){
var map__104402 = p__104396;
var map__104402__$1 = ((((!((map__104402 == null)))?((((map__104402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104402):map__104402);
var state = map__104402__$1;
var map__104403 = cljs.core.get.call(null,map__104402__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__104403__$1 = ((((!((map__104403 == null)))?((((map__104403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104403):map__104403);
var vec__104404 = cljs.core.get.call(null,map__104403__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__104404,(0),null);
var y = cljs.core.nth.call(null,vec__104404,(1),null);
var id = cljs.core.get.call(null,map__104403__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__104403__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"toggle active",path);

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891)], null),((function (map__104402,map__104402__$1,state,map__104403,map__104403__$1,vec__104404,x,y,id,path){
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
});})(map__104402,map__104402__$1,state,map__104403,map__104403__$1,vec__104404,x,y,id,path))
);
});
/**
 * Select node to move
 */
dynomics.ui.ui.select_node_for_move = (function dynomics$ui$ui$select_node_for_move(p__104407){
var map__104412 = p__104407;
var map__104412__$1 = ((((!((map__104412 == null)))?((((map__104412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104412):map__104412);
var state = map__104412__$1;
var map__104413 = cljs.core.get.call(null,map__104412__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__104413__$1 = ((((!((map__104413 == null)))?((((map__104413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104413):map__104413);
var p = cljs.core.get.call(null,map__104413__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__104413__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"select node to move ",path);

return cljs.core.assoc.call(null,dynomics.ui.ui.where_they_were.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.conj,path),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position-when-selected","position-when-selected",1681219792)),cljs.core.get_in.call(null,state,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position","position",-2011731912))))),new cljs.core.Keyword(null,"mouse-position-at-start-of-move","mouse-position-at-start-of-move",1825524089),p,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
/**
 * Select curve to move
 */
dynomics.ui.ui.select_curve_for_move = (function dynomics$ui$ui$select_curve_for_move(p__104416){
var map__104421 = p__104416;
var map__104421__$1 = ((((!((map__104421 == null)))?((((map__104421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104421):map__104421);
var state = map__104421__$1;
var map__104422 = cljs.core.get.call(null,map__104421__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__104422__$1 = ((((!((map__104422 == null)))?((((map__104422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104422):map__104422);
var p = cljs.core.get.call(null,map__104422__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__104422__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"select curve for move ",path,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null)));

return cljs.core.assoc.call(null,dynomics.ui.ui.where_they_were.call(null,dynomics.space.core.toggle_select_curve.call(null,state,path)),new cljs.core.Keyword(null,"mouse-position-at-start-of-move","mouse-position-at-start-of-move",1825524089),p,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
/**
 * Select object
 */
dynomics.ui.ui.select_object = (function dynomics$ui$ui$select_object(p__104425){
var map__104430 = p__104425;
var map__104430__$1 = ((((!((map__104430 == null)))?((((map__104430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104430):map__104430);
var state = map__104430__$1;
var map__104431 = cljs.core.get.call(null,map__104430__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__104431__$1 = ((((!((map__104431 == null)))?((((map__104431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104431):map__104431);
var path = cljs.core.get.call(null,map__104431__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var tipe = cljs.core.get.call(null,map__104431__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
cljs.core.println.call(null,"select object",path,tipe);

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.Keyword(null,"curve","curve",-569677866),new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-space","selected-space",613834726)], null).call(null,tipe)], null),cljs.core.conj,path);
});
/**
 * Deselect object
 */
dynomics.ui.ui.deselect_object = (function dynomics$ui$ui$deselect_object(p__104434){
var map__104443 = p__104434;
var map__104443__$1 = ((((!((map__104443 == null)))?((((map__104443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104443):map__104443);
var state = map__104443__$1;
var map__104444 = cljs.core.get.call(null,map__104443__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__104444__$1 = ((((!((map__104444 == null)))?((((map__104444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104444):map__104444);
var o = cljs.core.get.call(null,map__104444__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var map__104445 = cljs.core.get.call(null,map__104444__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__104445__$1 = ((((!((map__104445 == null)))?((((map__104445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104445):map__104445);
var p1 = cljs.core.get.call(null,map__104445__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var t1 = cljs.core.get.call(null,map__104445__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
var map__104446 = cljs.core.get.call(null,map__104443__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__104446__$1 = ((((!((map__104446 == null)))?((((map__104446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104446):map__104446);
var p2 = cljs.core.get.call(null,map__104446__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var t2 = cljs.core.get.call(null,map__104446__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
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
dynomics.ui.ui.deselect_node = (function dynomics$ui$ui$deselect_node(p__104451){
var map__104456 = p__104451;
var map__104456__$1 = ((((!((map__104456 == null)))?((((map__104456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104456):map__104456);
var state = map__104456__$1;
var map__104457 = cljs.core.get.call(null,map__104456__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__104457__$1 = ((((!((map__104457 == null)))?((((map__104457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104457):map__104457);
var path = cljs.core.get.call(null,map__104457__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.disj,path),new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),false,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115),false);
});
/**
 * Deselect curve
 */
dynomics.ui.ui.deselect_curve = (function dynomics$ui$ui$deselect_curve(p__104460){
var map__104465 = p__104460;
var map__104465__$1 = ((((!((map__104465 == null)))?((((map__104465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104465):map__104465);
var state = map__104465__$1;
var map__104466 = cljs.core.get.call(null,map__104465__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__104466__$1 = ((((!((map__104466 == null)))?((((map__104466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104466):map__104466);
var p = cljs.core.get.call(null,map__104466__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__104466__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.assoc.call(null,dynomics.space.core.deselect_curve.call(null,state,path),new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),false,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p);
});
dynomics.ui.ui.hide_context_menu = (function dynomics$ui$ui$hide_context_menu(state){
return cljs.core.assoc.call(null,dynomics.ui.ui.deselect_object.call(null,state),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),null,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
dynomics.ui.ui.show_context_menu = (function dynomics$ui$ui$show_context_menu(p__104469){
var map__104477 = p__104469;
var map__104477__$1 = ((((!((map__104477 == null)))?((((map__104477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104477):map__104477);
var state = map__104477__$1;
var map__104478 = cljs.core.get.call(null,map__104477__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__104478__$1 = ((((!((map__104478 == null)))?((((map__104478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104478):map__104478);
var event = map__104478__$1;
var ep = cljs.core.get.call(null,map__104478__$1,new cljs.core.Keyword(null,"position-local","position-local",250779944));
var mp = cljs.core.get.call(null,map__104478__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var o = cljs.core.get.call(null,map__104478__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
var context_menu = cljs.core.get.call(null,map__104478__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
cljs.core.println.call(null,"show cm",o);

return cljs.core.assoc.call(null,dynomics.ui.ui.add_keybindings.call(null,dynomics.ui.ui.select_object.call(null,state),cljs.core.map.call(null,((function (map__104477,map__104477__$1,state,map__104478,map__104478__$1,event,ep,mp,o,context_menu){
return (function (p__104481){
var map__104482 = p__104481;
var map__104482__$1 = ((((!((map__104482 == null)))?((((map__104482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104482):map__104482);
var option = map__104482__$1;
var f = cljs.core.get.call(null,map__104482__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
if(cljs.core.truth_(f)){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.assoc,option,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.deref.call(null,f)], true, false);
} else {
return option;
}
});})(map__104477,map__104477__$1,state,map__104478,map__104478__$1,event,ep,mp,o,context_menu))
,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"options","options",99638489),o], null)))),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__35392__auto__ = ep;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return mp;
}
})(),new cljs.core.Keyword(null,"object","object",1474613949),o,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"options","options",99638489),o], null))], null));
});
dynomics.ui.ui.toggle_context_menu = (function dynomics$ui$ui$toggle_context_menu(p__104484){
var map__104487 = p__104484;
var map__104487__$1 = ((((!((map__104487 == null)))?((((map__104487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104487):map__104487);
var state = map__104487__$1;
var context_menu = cljs.core.get.call(null,map__104487__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
if(cljs.core.truth_(context_menu)){
return dynomics.ui.ui.hide_context_menu.call(null,state);
} else {
return dynomics.ui.ui.show_context_menu.call(null,state);
}
});
dynomics.ui.ui.toggle_left_panel = (function dynomics$ui$ui$toggle_left_panel(p__104489){
var map__104492 = p__104489;
var map__104492__$1 = ((((!((map__104492 == null)))?((((map__104492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104492):map__104492);
var state = map__104492__$1;
var left_panel_QMARK_ = cljs.core.get.call(null,map__104492__$1,new cljs.core.Keyword(null,"left-panel?","left-panel?",1385519317));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"left-panel?","left-panel?",1385519317),cljs.core.not.call(null,left_panel_QMARK_));
});
dynomics.ui.ui.switch_styles = (function dynomics$ui$ui$switch_styles(p__104494){
var map__104497 = p__104494;
var map__104497__$1 = ((((!((map__104497 == null)))?((((map__104497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104497):map__104497);
var state = map__104497__$1;
var style = cljs.core.get.call(null,map__104497__$1,new cljs.core.Keyword(null,"style","style",-496642736));
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
dynomics.ui.ui.move_objects = (function dynomics$ui$ui$move_objects(p__104499){
var map__104509 = p__104499;
var map__104509__$1 = ((((!((map__104509 == null)))?((((map__104509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104509):map__104509);
var state = map__104509__$1;
var map__104510 = cljs.core.get.call(null,map__104509__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__104510__$1 = ((((!((map__104510 == null)))?((((map__104510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104510):map__104510);
var space = map__104510__$1;
var selected_nodes = cljs.core.get.call(null,map__104510__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var zoom = cljs.core.get.call(null,map__104510__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__104511 = cljs.core.get.call(null,map__104509__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__104511__$1 = ((((!((map__104511 == null)))?((((map__104511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104511):map__104511);
var vec__104512 = cljs.core.get.call(null,map__104511__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__104512,(0),null);
var y = cljs.core.nth.call(null,vec__104512,(1),null);
var ck = cljs.core.get.call(null,map__104511__$1,new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989));
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,((function (map__104509,map__104509__$1,state,map__104510,map__104510__$1,space,selected_nodes,zoom,map__104511,map__104511__$1,vec__104512,x,y,ck){
return (function (r,path){
var tfn = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"connection","connection",-123599300),cljs.core.get_in.call(null,state,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"point","point",1813198264))))?(cljs.core.truth_(ck)?dynomics.space.core.to_space:dynomics.space.core.mirror_node):((function (map__104509,map__104509__$1,state,map__104510,map__104510__$1,space,selected_nodes,zoom,map__104511,map__104511__$1,vec__104512,x,y,ck){
return (function (p,pth,_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,dynomics.ui.ui.relative_to_cursor.call(null,p,pth,state)], null)], null);
});})(map__104509,map__104509__$1,state,map__104510,map__104510__$1,space,selected_nodes,zoom,map__104511,map__104511__$1,vec__104512,x,y,ck))
);
return cljs.core.reduce.call(null,((function (tfn,map__104509,map__104509__$1,state,map__104510,map__104510__$1,space,selected_nodes,zoom,map__104511,map__104511__$1,vec__104512,x,y,ck){
return (function (r__$1,p__104516){
var vec__104517 = p__104516;
var cpath = cljs.core.nth.call(null,vec__104517,(0),null);
var cpoint = cljs.core.nth.call(null,vec__104517,(1),null);
return cljs.core.assoc_in.call(null,r__$1,cljs.core.conj.call(null,cpath,new cljs.core.Keyword(null,"position","position",-2011731912)),cpoint);
});})(tfn,map__104509,map__104509__$1,state,map__104510,map__104510__$1,space,selected_nodes,zoom,map__104511,map__104511__$1,vec__104512,x,y,ck))
,r,tfn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),path,space));
});})(map__104509,map__104509__$1,state,map__104510,map__104510__$1,space,selected_nodes,zoom,map__104511,map__104511__$1,vec__104512,x,y,ck))
,state,selected_nodes),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Pan
 */
dynomics.ui.ui.pan = (function dynomics$ui$ui$pan(p__104518){
var map__104524 = p__104518;
var map__104524__$1 = ((((!((map__104524 == null)))?((((map__104524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104524):map__104524);
var state = map__104524__$1;
var pp = cljs.core.get.call(null,map__104524__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var pan__$1 = cljs.core.get.call(null,map__104524__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var sp = cljs.core.get.call(null,map__104524__$1,new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305));
var zoom = cljs.core.get.call(null,map__104524__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__104525 = cljs.core.get.call(null,map__104524__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__104525__$1 = ((((!((map__104525 == null)))?((((map__104525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104525):map__104525);
var p = cljs.core.get.call(null,map__104525__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var pl = cljs.core.get.call(null,map__104525__$1,new cljs.core.Keyword(null,"position-local","position-local",250779944));
var vec__104526 = cljs.core.get.call(null,map__104525__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__104526,(0),null);
var p2 = cljs.core.nth.call(null,vec__104526,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p,new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"pan","pan",-307712792),cljs.core.map.call(null,cljs.core._,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,((1) / zoom)),p2),sp));
});
/**
 * Start zoom
 */
dynomics.ui.ui.start_zoom = (function dynomics$ui$ui$start_zoom(p__104529){
var map__104535 = p__104529;
var map__104535__$1 = ((((!((map__104535 == null)))?((((map__104535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104535):map__104535);
var state = map__104535__$1;
var zoom = cljs.core.get.call(null,map__104535__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var pz = cljs.core.get.call(null,map__104535__$1,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303));
var map__104536 = cljs.core.get.call(null,map__104535__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__104536__$1 = ((((!((map__104536 == null)))?((((map__104536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104536):map__104536);
var p = cljs.core.get.call(null,map__104536__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__104537 = cljs.core.get.call(null,map__104536__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__104537,(0),null);
var p2 = cljs.core.nth.call(null,vec__104537,(1),null);
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
dynomics.ui.ui.zoom = (function dynomics$ui$ui$zoom(p__104540){
var map__104546 = p__104540;
var map__104546__$1 = ((((!((map__104546 == null)))?((((map__104546.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104546.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104546):map__104546);
var state = map__104546__$1;
var zoom__$1 = cljs.core.get.call(null,map__104546__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var pan = cljs.core.get.call(null,map__104546__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var sp = cljs.core.get.call(null,map__104546__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var map__104547 = cljs.core.get.call(null,map__104546__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__104547__$1 = ((((!((map__104547 == null)))?((((map__104547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104547):map__104547);
var dy = cljs.core.get.call(null,map__104547__$1,new cljs.core.Keyword(null,"deltaY","deltaY",-879493966));
var p = cljs.core.get.call(null,map__104547__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__104548 = cljs.core.get.call(null,map__104547__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__104548,(0),null);
var p2 = cljs.core.nth.call(null,vec__104548,(1),null);
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
dynomics.ui.ui.move_cursor = (function dynomics$ui$ui$move_cursor(p__104551){
var map__104557 = p__104551;
var map__104557__$1 = ((((!((map__104557 == null)))?((((map__104557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104557):map__104557);
var state = map__104557__$1;
var map__104558 = cljs.core.get.call(null,map__104557__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__104558__$1 = ((((!((map__104558 == null)))?((((map__104558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104558):map__104558);
var vec__104559 = cljs.core.get.call(null,map__104558__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__104559,(0),null);
var _ = cljs.core.nth.call(null,vec__104559,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305),p1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p1);
});
/**
 * Start pan
 */
dynomics.ui.ui.start_pan = (function dynomics$ui$ui$start_pan(p__104562){
var map__104568 = p__104562;
var map__104568__$1 = ((((!((map__104568 == null)))?((((map__104568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104568):map__104568);
var state = map__104568__$1;
var map__104569 = cljs.core.get.call(null,map__104568__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__104569__$1 = ((((!((map__104569 == null)))?((((map__104569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104569):map__104569);
var p = cljs.core.get.call(null,map__104569__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__104570 = cljs.core.get.call(null,map__104569__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__104570,(0),null);
var _ = cljs.core.nth.call(null,vec__104570,(1),null);
cljs.core.println.call(null,"start pan",p,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492).cljs$core$IFn$_invoke$arity$1(state));

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),true,new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305),p1);
});
/**
 * End pan
 */
dynomics.ui.ui.end_pan = (function dynomics$ui$ui$end_pan(p__104573){
var map__104578 = p__104573;
var map__104578__$1 = ((((!((map__104578 == null)))?((((map__104578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104578):map__104578);
var state = map__104578__$1;
var map__104579 = cljs.core.get.call(null,map__104578__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__104579__$1 = ((((!((map__104579 == null)))?((((map__104579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104579):map__104579);
var p = cljs.core.get.call(null,map__104579__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p);
});
/**
 * Add node
 */
dynomics.ui.ui.add_node = (function dynomics$ui$ui$add_node(p__104582){
var map__104587 = p__104582;
var map__104587__$1 = ((((!((map__104587 == null)))?((((map__104587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104587):map__104587);
var state = map__104587__$1;
var map__104588 = cljs.core.get.call(null,map__104587__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__104588__$1 = ((((!((map__104588 == null)))?((((map__104588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104588):map__104588);
var p = cljs.core.get.call(null,map__104588__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
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
dynomics.ui.ui.set_node_type = (function dynomics$ui$ui$set_node_type(p__104591){
var map__104596 = p__104591;
var map__104596__$1 = ((((!((map__104596 == null)))?((((map__104596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104596):map__104596);
var state = map__104596__$1;
var map__104597 = cljs.core.get.call(null,map__104596__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__104597__$1 = ((((!((map__104597 == null)))?((((map__104597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104597):map__104597);
var id = cljs.core.get.call(null,map__104597__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return dynomics.space.core.set_node_type.call(null,id).call(null,state);
});
dynomics.ui.ui.make_new_node = (function dynomics$ui$ui$make_new_node(p__104600){
var map__104607 = p__104600;
var map__104607__$1 = ((((!((map__104607 == null)))?((((map__104607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104607):map__104607);
var state = map__104607__$1;
var making_node_QMARK_ = cljs.core.get.call(null,map__104607__$1,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115));
var map__104608 = cljs.core.get.call(null,map__104607__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__104608__$1 = ((((!((map__104608 == null)))?((((map__104608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104608):map__104608);
var event = map__104608__$1;
var p = cljs.core.get.call(null,map__104608__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__104608__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.println.call(null,"make node type",id);

if(cljs.core.truth_(making_node_QMARK_)){
return state;
} else {
var map__104611 = dynomics.space.core.add_node.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),true,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115),true,new cljs.core.Keyword(null,"node-position","node-position",-542959703),p,new cljs.core.Keyword(null,"selected-node-type","selected-node-type",-1717725489),id));
var map__104611__$1 = ((((!((map__104611 == null)))?((((map__104611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104611):map__104611);
var s = map__104611__$1;
var n = cljs.core.get.call(null,map__104611__$1,new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673));
return dynomics.ui.ui.select_node_for_move.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),n], null))));
}
});
/**
 * Returns a function var to handle the given event
 */
dynomics.ui.ui.match_event = (function dynomics$ui$ui$match_event(p__104613){
var map__104842 = p__104613;
var map__104842__$1 = ((((!((map__104842 == null)))?((((map__104842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104842):map__104842);
var state = map__104842__$1;
var event = cljs.core.get.call(null,map__104842__$1,new cljs.core.Keyword(null,"event","event",301435442));
try{if(((!((event == null)))?((((event.cljs$lang$protocol_mask$partition0$ & (256))) || (event.cljs$core$ILookup$))?true:(((!event.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event))){
try{var event_verb__104866 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__104866,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"connector","connector",-1517293248))){
try{var event_shift_key_QMARK___104869 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___104869 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select","dynomics.ui.ui/toggle-select",-1932459058,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select","toggle-select",-120958040,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",16,1,278,280,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select)?dynomics.ui.ui.toggle_select.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e105069){if((e105069 instanceof Error)){
var e__48376__auto__ = e105069;
if((e__48376__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto__;
}
} else {
throw e105069;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105063){if((e105063 instanceof Error)){
var e__48376__auto__ = e105063;
if((e__48376__auto__ === cljs.core.match.backtrack)){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"node","node",581201198))){
try{var event_shift_key_QMARK___104869 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___104869 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select","dynomics.ui.ui/toggle-select",-1932459058,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select","toggle-select",-120958040,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",16,1,278,280,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select)?dynomics.ui.ui.toggle_select.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e105065){if((e105065 instanceof Error)){
var e__48376__auto____$1 = e105065;
if((e__48376__auto____$1 === cljs.core.match.backtrack)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___104873 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___104873 === false)){
return (new cljs.core.Delay(((function (state_moving_things_QMARK___104873,e__48376__auto____$1,event_noun__104870,e__48376__auto__,event_verb__104866,map__104842,map__104842__$1,state,event){
return (function (){
return cljs.core.comp.call(null,dynomics.ui.ui.deselect_node,dynomics.ui.ui.toggle_active);
});})(state_moving_things_QMARK___104873,e__48376__auto____$1,event_noun__104870,e__48376__auto__,event_verb__104866,map__104842,map__104842__$1,state,event))
,null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e105068){if((e105068 instanceof Error)){
var e__48376__auto____$2 = e105068;
if((e__48376__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$2;
}
} else {
throw e105068;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105066){if((e105066 instanceof Error)){
var e__48376__auto____$2 = e105066;
if((e__48376__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$2;
}
} else {
throw e105066;

}
}} else {
throw e__48376__auto____$1;
}
} else {
throw e105065;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105064){if((e105064 instanceof Error)){
var e__48376__auto____$1 = e105064;
if((e__48376__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$1;
}
} else {
throw e105064;

}
}} else {
throw e__48376__auto__;
}
} else {
throw e105063;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104941){if((e104941 instanceof Error)){
var e__48376__auto__ = e104941;
if((e__48376__auto__ === cljs.core.match.backtrack)){
try{var event_verb__104866 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__104866,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_button__104867 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_button__104867 === (0))){
try{var event_id__104868 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_id__104868,new cljs.core.Keyword(null,"add-node-button","add-node-button",-722090690))){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451))){
return new cljs.core.Var(function(){return dynomics.ui.ui.add_node;},new cljs.core.Symbol("dynomics.ui.ui","add-node","dynomics.ui.ui/add-node",175703617,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"add-node","add-node",-428722461,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",11,1,530,534,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Add node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Add node",(cljs.core.truth_(dynomics.ui.ui.add_node)?dynomics.ui.ui.add_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e105062){if((e105062 instanceof Error)){
var e__48376__auto____$1 = e105062;
if((e__48376__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$1;
}
} else {
throw e105062;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105061){if((e105061 instanceof Error)){
var e__48376__auto____$1 = e105061;
if((e__48376__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$1;
}
} else {
throw e105061;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105056){if((e105056 instanceof Error)){
var e__48376__auto____$1 = e105056;
if((e__48376__auto____$1 === cljs.core.match.backtrack)){
try{var event_button__104867 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_button__104867 === (2))){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"node","node",581201198))){
return new cljs.core.Var(function(){return dynomics.ui.ui.show_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","show-context-menu","dynomics.ui.ui/show-context-menu",-497950288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"show-context-menu","show-context-menu",374878238,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",20,1,387,389,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"description","description",-1428560544),"Show context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"ep","ep",-1371606811,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Symbol(null,"mp","mp",1159923684,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.show_context_menu)?dynomics.ui.ui.show_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e105058){if((e105058 instanceof Error)){
var e__48376__auto____$2 = e105058;
if((e__48376__auto____$2 === cljs.core.match.backtrack)){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"curve","curve",-569677866))){
return new cljs.core.Var(function(){return dynomics.ui.ui.show_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","show-context-menu","dynomics.ui.ui/show-context-menu",-497950288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"show-context-menu","show-context-menu",374878238,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",20,1,387,389,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"description","description",-1428560544),"Show context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"ep","ep",-1371606811,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Symbol(null,"mp","mp",1159923684,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.show_context_menu)?dynomics.ui.ui.show_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e105059){if((e105059 instanceof Error)){
var e__48376__auto____$3 = e105059;
if((e__48376__auto____$3 === cljs.core.match.backtrack)){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"space","space",348133475))){
return new cljs.core.Var(function(){return dynomics.ui.ui.show_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","show-context-menu","dynomics.ui.ui/show-context-menu",-497950288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"show-context-menu","show-context-menu",374878238,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",20,1,387,389,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"description","description",-1428560544),"Show context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"ep","ep",-1371606811,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Symbol(null,"mp","mp",1159923684,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.show_context_menu)?dynomics.ui.ui.show_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e105060){if((e105060 instanceof Error)){
var e__48376__auto____$4 = e105060;
if((e__48376__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$4;
}
} else {
throw e105060;

}
}} else {
throw e__48376__auto____$3;
}
} else {
throw e105059;

}
}} else {
throw e__48376__auto____$2;
}
} else {
throw e105058;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105057){if((e105057 instanceof Error)){
var e__48376__auto____$2 = e105057;
if((e__48376__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$2;
}
} else {
throw e105057;

}
}} else {
throw e__48376__auto____$1;
}
} else {
throw e105056;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104942){if((e104942 instanceof Error)){
var e__48376__auto____$1 = e104942;
if((e__48376__auto____$1 === cljs.core.match.backtrack)){
try{var event_verb__104866 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__104866,new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964))){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451))){
return new cljs.core.Var(function(){return dynomics.ui.ui.hide_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","hide-context-menu","dynomics.ui.ui/hide-context-menu",-829551965,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"hide-context-menu","hide-context-menu",-210420991,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",20,1,378,380,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Hide context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.hide_context_menu)?dynomics.ui.ui.hide_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e105055){if((e105055 instanceof Error)){
var e__48376__auto____$2 = e105055;
if((e__48376__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$2;
}
} else {
throw e105055;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104943){if((e104943 instanceof Error)){
var e__48376__auto____$2 = e104943;
if((e__48376__auto____$2 === cljs.core.match.backtrack)){
try{var event_verb__104866 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__104866,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_shift_key_QMARK___104869 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___104869 === false)){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"connector","connector",-1517293248))){
return new cljs.core.Var(function(){return dynomics.ui.ui.select_node_for_move;},new cljs.core.Symbol("dynomics.ui.ui","select-node-for-move","dynomics.ui.ui/select-node-for-move",1244197998,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"select-node-for-move","select-node-for-move",-1238252352,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",23,1,304,308,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Select node to move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Select node to move",(cljs.core.truth_(dynomics.ui.ui.select_node_for_move)?dynomics.ui.ui.select_node_for_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e105051){if((e105051 instanceof Error)){
var e__48376__auto____$3 = e105051;
if((e__48376__auto____$3 === cljs.core.match.backtrack)){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"node","node",581201198))){
return new cljs.core.Var(function(){return dynomics.ui.ui.select_node_for_move;},new cljs.core.Symbol("dynomics.ui.ui","select-node-for-move","dynomics.ui.ui/select-node-for-move",1244197998,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"select-node-for-move","select-node-for-move",-1238252352,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",23,1,304,308,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Select node to move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Select node to move",(cljs.core.truth_(dynomics.ui.ui.select_node_for_move)?dynomics.ui.ui.select_node_for_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e105052){if((e105052 instanceof Error)){
var e__48376__auto____$4 = e105052;
if((e__48376__auto____$4 === cljs.core.match.backtrack)){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_buttons__104865 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__104865 === (1))){
return new cljs.core.Var(function(){return dynomics.ui.ui.select_curve_for_move;},new cljs.core.Symbol("dynomics.ui.ui","select-curve-for-move","dynomics.ui.ui/select-curve-for-move",67176701,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"select-curve-for-move","select-curve-for-move",268851359,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",24,1,319,323,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Select curve to move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Select curve to move",(cljs.core.truth_(dynomics.ui.ui.select_curve_for_move)?dynomics.ui.ui.select_curve_for_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e105054){if((e105054 instanceof Error)){
var e__48376__auto____$5 = e105054;
if((e__48376__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$5;
}
} else {
throw e105054;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105053){if((e105053 instanceof Error)){
var e__48376__auto____$5 = e105053;
if((e__48376__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$5;
}
} else {
throw e105053;

}
}} else {
throw e__48376__auto____$4;
}
} else {
throw e105052;

}
}} else {
throw e__48376__auto____$3;
}
} else {
throw e105051;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105050){if((e105050 instanceof Error)){
var e__48376__auto____$3 = e105050;
if((e__48376__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$3;
}
} else {
throw e105050;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104944){if((e104944 instanceof Error)){
var e__48376__auto____$3 = e104944;
if((e__48376__auto____$3 === cljs.core.match.backtrack)){
try{var event_verb__104866 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__104866,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_shift_key_QMARK___104869 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___104869 === false)){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"connector","connector",-1517293248))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___104876 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___104876 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.deselect_node;},new cljs.core.Symbol("dynomics.ui.ui","deselect-node","dynomics.ui.ui/deselect-node",-1231289549,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"deselect-node","deselect-node",-2105191523,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",16,1,354,358,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"description","description",-1428560544),"Deselect node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Deselect node",(cljs.core.truth_(dynomics.ui.ui.deselect_node)?dynomics.ui.ui.deselect_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e105049){if((e105049 instanceof Error)){
var e__48376__auto____$4 = e105049;
if((e__48376__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$4;
}
} else {
throw e105049;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105047){if((e105047 instanceof Error)){
var e__48376__auto____$4 = e105047;
if((e__48376__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$4;
}
} else {
throw e105047;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105037){if((e105037 instanceof Error)){
var e__48376__auto____$4 = e105037;
if((e__48376__auto____$4 === cljs.core.match.backtrack)){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"node","node",581201198))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___104879 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___104879 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.deselect_node;},new cljs.core.Symbol("dynomics.ui.ui","deselect-node","dynomics.ui.ui/deselect-node",-1231289549,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"deselect-node","deselect-node",-2105191523,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",16,1,354,358,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"description","description",-1428560544),"Deselect node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Deselect node",(cljs.core.truth_(dynomics.ui.ui.deselect_node)?dynomics.ui.ui.deselect_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e105046){if((e105046 instanceof Error)){
var e__48376__auto____$5 = e105046;
if((e__48376__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$5;
}
} else {
throw e105046;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105044){if((e105044 instanceof Error)){
var e__48376__auto____$5 = e105044;
if((e__48376__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$5;
}
} else {
throw e105044;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105038){if((e105038 instanceof Error)){
var e__48376__auto____$5 = e105038;
if((e__48376__auto____$5 === cljs.core.match.backtrack)){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"connector","connector",-1517293248))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___104882 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___104882 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select","dynomics.ui.ui/toggle-select",-1932459058,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select","toggle-select",-120958040,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",16,1,278,280,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select)?dynomics.ui.ui.toggle_select.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e105043){if((e105043 instanceof Error)){
var e__48376__auto____$6 = e105043;
if((e__48376__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$6;
}
} else {
throw e105043;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105041){if((e105041 instanceof Error)){
var e__48376__auto____$6 = e105041;
if((e__48376__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$6;
}
} else {
throw e105041;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105039){if((e105039 instanceof Error)){
var e__48376__auto____$6 = e105039;
if((e__48376__auto____$6 === cljs.core.match.backtrack)){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"curve","curve",-569677866))){
return new cljs.core.Var(function(){return dynomics.ui.ui.deselect_curve;},new cljs.core.Symbol("dynomics.ui.ui","deselect-curve","dynomics.ui.ui/deselect-curve",-758858976,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"deselect-curve","deselect-curve",-29652158,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",17,1,366,370,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Deselect curve"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Deselect curve",(cljs.core.truth_(dynomics.ui.ui.deselect_curve)?dynomics.ui.ui.deselect_curve.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e105040){if((e105040 instanceof Error)){
var e__48376__auto____$7 = e105040;
if((e__48376__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$7;
}
} else {
throw e105040;

}
}} else {
throw e__48376__auto____$6;
}
} else {
throw e105039;

}
}} else {
throw e__48376__auto____$5;
}
} else {
throw e105038;

}
}} else {
throw e__48376__auto____$4;
}
} else {
throw e105037;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105036){if((e105036 instanceof Error)){
var e__48376__auto____$4 = e105036;
if((e__48376__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$4;
}
} else {
throw e105036;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104945){if((e104945 instanceof Error)){
var e__48376__auto____$4 = e104945;
if((e__48376__auto____$4 === cljs.core.match.backtrack)){
try{var event_verb__104866 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__104866,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223))){
try{var event_buttons__104865 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__104865 === (1))){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"node","node",581201198))){
try{var event_shift_key_QMARK___104869 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___104869 === false)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___104886 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___104886 === false)){
try{var state_moving_things_QMARK___104887 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___104887 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_move;},new cljs.core.Symbol("dynomics.ui.ui","start-move","dynomics.ui.ui/start-move",-1875395781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-move","start-move",-331822183,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",13,1,490,494,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Start move objects",(cljs.core.truth_(dynomics.ui.ui.start_move)?dynomics.ui.ui.start_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e105035){if((e105035 instanceof Error)){
var e__48376__auto____$5 = e105035;
if((e__48376__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$5;
}
} else {
throw e105035;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105034){if((e105034 instanceof Error)){
var e__48376__auto____$5 = e105034;
if((e__48376__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$5;
}
} else {
throw e105034;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105032){if((e105032 instanceof Error)){
var e__48376__auto____$5 = e105032;
if((e__48376__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$5;
}
} else {
throw e105032;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105031){if((e105031 instanceof Error)){
var e__48376__auto____$5 = e105031;
if((e__48376__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$5;
}
} else {
throw e105031;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105003){if((e105003 instanceof Error)){
var e__48376__auto____$5 = e105003;
if((e__48376__auto____$5 === cljs.core.match.backtrack)){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_shift_key_QMARK___104869 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___104869 === false)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___104891 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___104891 === false)){
try{var state_moving_things_QMARK___104892 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___104892 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_move;},new cljs.core.Symbol("dynomics.ui.ui","start-move","dynomics.ui.ui/start-move",-1875395781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-move","start-move",-331822183,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",13,1,490,494,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Start move objects",(cljs.core.truth_(dynomics.ui.ui.start_move)?dynomics.ui.ui.start_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e105030){if((e105030 instanceof Error)){
var e__48376__auto____$6 = e105030;
if((e__48376__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$6;
}
} else {
throw e105030;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105029){if((e105029 instanceof Error)){
var e__48376__auto____$6 = e105029;
if((e__48376__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$6;
}
} else {
throw e105029;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105027){if((e105027 instanceof Error)){
var e__48376__auto____$6 = e105027;
if((e__48376__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$6;
}
} else {
throw e105027;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105026){if((e105026 instanceof Error)){
var e__48376__auto____$6 = e105026;
if((e__48376__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$6;
}
} else {
throw e105026;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105004){if((e105004 instanceof Error)){
var e__48376__auto____$6 = e105004;
if((e__48376__auto____$6 === cljs.core.match.backtrack)){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"space","space",348133475))){
try{var event_shift_key_QMARK___104869 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___104869 === false)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___104896 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___104896 === false)){
try{var state_moving_things_QMARK___104897 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___104897 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_move;},new cljs.core.Symbol("dynomics.ui.ui","start-move","dynomics.ui.ui/start-move",-1875395781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-move","start-move",-331822183,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",13,1,490,494,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Start move objects",(cljs.core.truth_(dynomics.ui.ui.start_move)?dynomics.ui.ui.start_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e105025){if((e105025 instanceof Error)){
var e__48376__auto____$7 = e105025;
if((e__48376__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$7;
}
} else {
throw e105025;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105024){if((e105024 instanceof Error)){
var e__48376__auto____$7 = e105024;
if((e__48376__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$7;
}
} else {
throw e105024;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105022){if((e105022 instanceof Error)){
var e__48376__auto____$7 = e105022;
if((e__48376__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$7;
}
} else {
throw e105022;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105021){if((e105021 instanceof Error)){
var e__48376__auto____$7 = e105021;
if((e__48376__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$7;
}
} else {
throw e105021;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105005){if((e105005 instanceof Error)){
var e__48376__auto____$7 = e105005;
if((e__48376__auto____$7 === cljs.core.match.backtrack)){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"node","node",581201198))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___104901 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___104901 === false)){
try{var state_moving_things_QMARK___104902 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___104902 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_objects;},new cljs.core.Symbol("dynomics.ui.ui","move-objects","dynomics.ui.ui/move-objects",1652444350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-objects","move-objects",1315020048,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",15,1,431,435,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"ck","ck",929899510,null),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move objects",(cljs.core.truth_(dynomics.ui.ui.move_objects)?dynomics.ui.ui.move_objects.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e105020){if((e105020 instanceof Error)){
var e__48376__auto____$8 = e105020;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$8;
}
} else {
throw e105020;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105019){if((e105019 instanceof Error)){
var e__48376__auto____$8 = e105019;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$8;
}
} else {
throw e105019;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105017){if((e105017 instanceof Error)){
var e__48376__auto____$8 = e105017;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$8;
}
} else {
throw e105017;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105006){if((e105006 instanceof Error)){
var e__48376__auto____$8 = e105006;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___104906 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___104906 === false)){
try{var state_moving_things_QMARK___104907 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___104907 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_objects;},new cljs.core.Symbol("dynomics.ui.ui","move-objects","dynomics.ui.ui/move-objects",1652444350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-objects","move-objects",1315020048,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",15,1,431,435,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"ck","ck",929899510,null),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move objects",(cljs.core.truth_(dynomics.ui.ui.move_objects)?dynomics.ui.ui.move_objects.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e105016){if((e105016 instanceof Error)){
var e__48376__auto____$9 = e105016;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$9;
}
} else {
throw e105016;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105015){if((e105015 instanceof Error)){
var e__48376__auto____$9 = e105015;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$9;
}
} else {
throw e105015;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105013){if((e105013 instanceof Error)){
var e__48376__auto____$9 = e105013;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$9;
}
} else {
throw e105013;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105007){if((e105007 instanceof Error)){
var e__48376__auto____$9 = e105007;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___104911 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___104911 === false)){
try{var state_moving_things_QMARK___104912 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___104912 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_objects;},new cljs.core.Symbol("dynomics.ui.ui","move-objects","dynomics.ui.ui/move-objects",1652444350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-objects","move-objects",1315020048,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",15,1,431,435,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"ck","ck",929899510,null),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move objects",(cljs.core.truth_(dynomics.ui.ui.move_objects)?dynomics.ui.ui.move_objects.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e105012){if((e105012 instanceof Error)){
var e__48376__auto____$10 = e105012;
if((e__48376__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$10;
}
} else {
throw e105012;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105011){if((e105011 instanceof Error)){
var e__48376__auto____$10 = e105011;
if((e__48376__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$10;
}
} else {
throw e105011;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105009){if((e105009 instanceof Error)){
var e__48376__auto____$10 = e105009;
if((e__48376__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$10;
}
} else {
throw e105009;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105008){if((e105008 instanceof Error)){
var e__48376__auto____$10 = e105008;
if((e__48376__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$10;
}
} else {
throw e105008;

}
}} else {
throw e__48376__auto____$9;
}
} else {
throw e105007;

}
}} else {
throw e__48376__auto____$8;
}
} else {
throw e105006;

}
}} else {
throw e__48376__auto____$7;
}
} else {
throw e105005;

}
}} else {
throw e__48376__auto____$6;
}
} else {
throw e105004;

}
}} else {
throw e__48376__auto____$5;
}
} else {
throw e105003;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104985){if((e104985 instanceof Error)){
var e__48376__auto____$5 = e104985;
if((e__48376__auto____$5 === cljs.core.match.backtrack)){
try{var event_buttons__104865 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__104865 === (0))){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"node","node",581201198))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___104915 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___104915 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",14,1,498,502,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e105002){if((e105002 instanceof Error)){
var e__48376__auto____$6 = e105002;
if((e__48376__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$6;
}
} else {
throw e105002;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e105000){if((e105000 instanceof Error)){
var e__48376__auto____$6 = e105000;
if((e__48376__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$6;
}
} else {
throw e105000;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104987){if((e104987 instanceof Error)){
var e__48376__auto____$6 = e104987;
if((e__48376__auto____$6 === cljs.core.match.backtrack)){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___104918 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___104918 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",14,1,498,502,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e104999){if((e104999 instanceof Error)){
var e__48376__auto____$7 = e104999;
if((e__48376__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$7;
}
} else {
throw e104999;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104997){if((e104997 instanceof Error)){
var e__48376__auto____$7 = e104997;
if((e__48376__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$7;
}
} else {
throw e104997;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104988){if((e104988 instanceof Error)){
var e__48376__auto____$7 = e104988;
if((e__48376__auto____$7 === cljs.core.match.backtrack)){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___104921 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___104921 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",14,1,498,502,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e104996){if((e104996 instanceof Error)){
var e__48376__auto____$8 = e104996;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$8;
}
} else {
throw e104996;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104994){if((e104994 instanceof Error)){
var e__48376__auto____$8 = e104994;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$8;
}
} else {
throw e104994;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104989){if((e104989 instanceof Error)){
var e__48376__auto____$8 = e104989;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"node-type","node-type",129492462))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___104924 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___104924 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",14,1,498,502,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e104993){if((e104993 instanceof Error)){
var e__48376__auto____$9 = e104993;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$9;
}
} else {
throw e104993;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104991){if((e104991 instanceof Error)){
var e__48376__auto____$9 = e104991;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$9;
}
} else {
throw e104991;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104990){if((e104990 instanceof Error)){
var e__48376__auto____$9 = e104990;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$9;
}
} else {
throw e104990;

}
}} else {
throw e__48376__auto____$8;
}
} else {
throw e104989;

}
}} else {
throw e__48376__auto____$7;
}
} else {
throw e104988;

}
}} else {
throw e__48376__auto____$6;
}
} else {
throw e104987;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104986){if((e104986 instanceof Error)){
var e__48376__auto____$6 = e104986;
if((e__48376__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$6;
}
} else {
throw e104986;

}
}} else {
throw e__48376__auto____$5;
}
} else {
throw e104985;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104946){if((e104946 instanceof Error)){
var e__48376__auto____$5 = e104946;
if((e__48376__auto____$5 === cljs.core.match.backtrack)){
try{var event_verb__104866 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__104866,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_buttons__104865 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__104865 === (1))){
try{var event_shift_key_QMARK___104869 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___104869 === false)){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___104928 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___104928 === false)){
try{var state_moving_things_QMARK___104929 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___104929 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_pan;},new cljs.core.Symbol("dynomics.ui.ui","start-pan","dynomics.ui.ui/start-pan",-310203637,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-pan","start-pan",-778345239,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",12,1,508,512,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start pan"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Start pan",(cljs.core.truth_(dynomics.ui.ui.start_pan)?dynomics.ui.ui.start_pan.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e104984){if((e104984 instanceof Error)){
var e__48376__auto____$6 = e104984;
if((e__48376__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$6;
}
} else {
throw e104984;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104983){if((e104983 instanceof Error)){
var e__48376__auto____$6 = e104983;
if((e__48376__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$6;
}
} else {
throw e104983;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104981){if((e104981 instanceof Error)){
var e__48376__auto____$6 = e104981;
if((e__48376__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$6;
}
} else {
throw e104981;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104980){if((e104980 instanceof Error)){
var e__48376__auto____$6 = e104980;
if((e__48376__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$6;
}
} else {
throw e104980;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104979){if((e104979 instanceof Error)){
var e__48376__auto____$6 = e104979;
if((e__48376__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$6;
}
} else {
throw e104979;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104978){if((e104978 instanceof Error)){
var e__48376__auto____$6 = e104978;
if((e__48376__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$6;
}
} else {
throw e104978;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104947){if((e104947 instanceof Error)){
var e__48376__auto____$6 = e104947;
if((e__48376__auto____$6 === cljs.core.match.backtrack)){
try{var event_verb__104866 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__104866,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223))){
try{var event_buttons__104865 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__104865 === (1))){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___104932 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___104932 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.pan;},new cljs.core.Symbol("dynomics.ui.ui","pan","dynomics.ui.ui/pan",1533936577,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"pan","pan",1332818735,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",6,1,450,454,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Pan"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"pp","pp",927842543,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"pan","pan",1332818735,null),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Symbol(null,"sp","sp",-1631085811,null),new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Pan",(cljs.core.truth_(dynomics.ui.ui.pan)?dynomics.ui.ui.pan.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e104977){if((e104977 instanceof Error)){
var e__48376__auto____$7 = e104977;
if((e__48376__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$7;
}
} else {
throw e104977;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104975){if((e104975 instanceof Error)){
var e__48376__auto____$7 = e104975;
if((e__48376__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$7;
}
} else {
throw e104975;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104974){if((e104974 instanceof Error)){
var e__48376__auto____$7 = e104974;
if((e__48376__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$7;
}
} else {
throw e104974;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104973){if((e104973 instanceof Error)){
var e__48376__auto____$7 = e104973;
if((e__48376__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$7;
}
} else {
throw e104973;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104948){if((e104948 instanceof Error)){
var e__48376__auto____$7 = e104948;
if((e__48376__auto____$7 === cljs.core.match.backtrack)){
try{var event_verb__104866 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__104866,new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439))){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___104935 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___104935 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_zoom;},new cljs.core.Symbol("dynomics.ui.ui","start-zoom","dynomics.ui.ui/start-zoom",-413183448,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-zoom","start-zoom",-748395954,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",13,1,466,470,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start zoom"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Start zoom",(cljs.core.truth_(dynomics.ui.ui.start_zoom)?dynomics.ui.ui.start_zoom.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e104970){if((e104970 instanceof Error)){
var e__48376__auto____$8 = e104970;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
try{var state_pan_zoom_QMARK___104935 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,state_pan_zoom_QMARK___104935,new cljs.core.Keyword(null,"starting","starting",-1852141466))){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_zoom;},new cljs.core.Symbol("dynomics.ui.ui","start-zoom","dynomics.ui.ui/start-zoom",-413183448,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-zoom","start-zoom",-748395954,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",13,1,466,470,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start zoom"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Start zoom",(cljs.core.truth_(dynomics.ui.ui.start_zoom)?dynomics.ui.ui.start_zoom.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e104971){if((e104971 instanceof Error)){
var e__48376__auto____$9 = e104971;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
try{var state_pan_zoom_QMARK___104935 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___104935 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.zoom;},new cljs.core.Symbol("dynomics.ui.ui","zoom","dynomics.ui.ui/zoom",-926900565,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",7,1,477,481,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Zoom"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Symbol(null,"pan","pan",1332818735,null),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Symbol(null,"sp","sp",-1631085811,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"dy","dy",-934888526,null),new cljs.core.Keyword(null,"deltaY","deltaY",-879493966),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Zoom",(cljs.core.truth_(dynomics.ui.ui.zoom)?dynomics.ui.ui.zoom.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e104972){if((e104972 instanceof Error)){
var e__48376__auto____$10 = e104972;
if((e__48376__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$10;
}
} else {
throw e104972;

}
}} else {
throw e__48376__auto____$9;
}
} else {
throw e104971;

}
}} else {
throw e__48376__auto____$8;
}
} else {
throw e104970;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104968){if((e104968 instanceof Error)){
var e__48376__auto____$8 = e104968;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$8;
}
} else {
throw e104968;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104967){if((e104967 instanceof Error)){
var e__48376__auto____$8 = e104967;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$8;
}
} else {
throw e104967;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104949){if((e104949 instanceof Error)){
var e__48376__auto____$8 = e104949;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
try{var event_verb__104866 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__104866,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_buttons__104865 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__104865 === (0))){
try{var event_shift_key_QMARK___104869 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___104869 === false)){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___104938 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___104938 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.end_pan;},new cljs.core.Symbol("dynomics.ui.ui","end-pan","dynomics.ui.ui/end-pan",-5094220,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"end-pan","end-pan",-474409646,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",10,1,520,524,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"End pan"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"End pan",(cljs.core.truth_(dynomics.ui.ui.end_pan)?dynomics.ui.ui.end_pan.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e104966){if((e104966 instanceof Error)){
var e__48376__auto____$9 = e104966;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$9;
}
} else {
throw e104966;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104964){if((e104964 instanceof Error)){
var e__48376__auto____$9 = e104964;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$9;
}
} else {
throw e104964;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104963){if((e104963 instanceof Error)){
var e__48376__auto____$9 = e104963;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$9;
}
} else {
throw e104963;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104962){if((e104962 instanceof Error)){
var e__48376__auto____$9 = e104962;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$9;
}
} else {
throw e104962;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104961){if((e104961 instanceof Error)){
var e__48376__auto____$9 = e104961;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$9;
}
} else {
throw e104961;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104950){if((e104950 instanceof Error)){
var e__48376__auto____$9 = e104950;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
try{var event_verb__104866 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__104866,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_buttons__104865 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__104865 === (1))){
try{var event_shift_key_QMARK___104869 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___104869 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select_curve;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select-curve","dynomics.ui.ui/toggle-select-curve",1188080702,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select-curve","toggle-select-curve",1792572560,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",22,1,287,289,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select curve"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select_curve)?dynomics.ui.ui.toggle_select_curve.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e104960){if((e104960 instanceof Error)){
var e__48376__auto____$10 = e104960;
if((e__48376__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$10;
}
} else {
throw e104960;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104959){if((e104959 instanceof Error)){
var e__48376__auto____$10 = e104959;
if((e__48376__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$10;
}
} else {
throw e104959;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104957){if((e104957 instanceof Error)){
var e__48376__auto____$10 = e104957;
if((e__48376__auto____$10 === cljs.core.match.backtrack)){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"node-type","node-type",129492462))){
return new cljs.core.Var(function(){return dynomics.ui.ui.set_node_type;},new cljs.core.Symbol("dynomics.ui.ui","set-node-type","dynomics.ui.ui/set-node-type",776460294,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"set-node-type","set-node-type",306219192,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",16,1,560,564,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"description","description",-1428560544),"Set node type "], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.set_node_type)?dynomics.ui.ui.set_node_type.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e104958){if((e104958 instanceof Error)){
var e__48376__auto____$11 = e104958;
if((e__48376__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$11;
}
} else {
throw e104958;

}
}} else {
throw e__48376__auto____$10;
}
} else {
throw e104957;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104951){if((e104951 instanceof Error)){
var e__48376__auto____$10 = e104951;
if((e__48376__auto____$10 === cljs.core.match.backtrack)){
try{var event_verb__104866 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__104866,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223))){
try{var event_buttons__104865 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__104865 === (1))){
try{var event_noun__104870 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__104870,new cljs.core.Keyword(null,"node-type","node-type",129492462))){
return new cljs.core.Var(function(){return dynomics.ui.ui.make_new_node;},new cljs.core.Symbol("dynomics.ui.ui","make-new-node","dynomics.ui.ui/make-new-node",1777852426,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"make-new-node","make-new-node",2047793128,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",17,1,568,571,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"description","description",-1428560544),"Make new node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"making-node?","making-node?",-141094588,null),new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.make_new_node)?dynomics.ui.ui.make_new_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e104956){if((e104956 instanceof Error)){
var e__48376__auto____$11 = e104956;
if((e__48376__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$11;
}
} else {
throw e104956;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104955){if((e104955 instanceof Error)){
var e__48376__auto____$11 = e104955;
if((e__48376__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$11;
}
} else {
throw e104955;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104952){if((e104952 instanceof Error)){
var e__48376__auto____$11 = e104952;
if((e__48376__auto____$11 === cljs.core.match.backtrack)){
try{var event_verb__104866 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__104866,new cljs.core.Keyword(null,"keydown","keydown",-629268186))){
return (new cljs.core.Delay(((function (event_verb__104866,e__48376__auto____$11,e__48376__auto____$10,e__48376__auto____$9,e__48376__auto____$8,e__48376__auto____$7,e__48376__auto____$6,e__48376__auto____$5,e__48376__auto____$4,e__48376__auto____$3,e__48376__auto____$2,e__48376__auto____$1,e__48376__auto__,map__104842,map__104842__$1,state,event){
return (function (){
return dynomics.ui.core.fn_for_event.call(null,state);
});})(event_verb__104866,e__48376__auto____$11,e__48376__auto____$10,e__48376__auto____$9,e__48376__auto____$8,e__48376__auto____$7,e__48376__auto____$6,e__48376__auto____$5,e__48376__auto____$4,e__48376__auto____$3,e__48376__auto____$2,e__48376__auto____$1,e__48376__auto__,map__104842,map__104842__$1,state,event))
,null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e104953){if((e104953 instanceof Error)){
var e__48376__auto____$12 = e104953;
if((e__48376__auto____$12 === cljs.core.match.backtrack)){
try{var event_verb__104866 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__104866,new cljs.core.Keyword(null,"keyup","keyup",-794526927))){
return (new cljs.core.Delay(((function (event_verb__104866,e__48376__auto____$12,e__48376__auto____$11,e__48376__auto____$10,e__48376__auto____$9,e__48376__auto____$8,e__48376__auto____$7,e__48376__auto____$6,e__48376__auto____$5,e__48376__auto____$4,e__48376__auto____$3,e__48376__auto____$2,e__48376__auto____$1,e__48376__auto__,map__104842,map__104842__$1,state,event){
return (function (){
return dynomics.ui.core.fn_for_event.call(null,state);
});})(event_verb__104866,e__48376__auto____$12,e__48376__auto____$11,e__48376__auto____$10,e__48376__auto____$9,e__48376__auto____$8,e__48376__auto____$7,e__48376__auto____$6,e__48376__auto____$5,e__48376__auto____$4,e__48376__auto____$3,e__48376__auto____$2,e__48376__auto____$1,e__48376__auto__,map__104842,map__104842__$1,state,event))
,null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e104954){if((e104954 instanceof Error)){
var e__48376__auto____$13 = e104954;
if((e__48376__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$13;
}
} else {
throw e104954;

}
}} else {
throw e__48376__auto____$12;
}
} else {
throw e104953;

}
}} else {
throw e__48376__auto____$11;
}
} else {
throw e104952;

}
}} else {
throw e__48376__auto____$10;
}
} else {
throw e104951;

}
}} else {
throw e__48376__auto____$9;
}
} else {
throw e104950;

}
}} else {
throw e__48376__auto____$8;
}
} else {
throw e104949;

}
}} else {
throw e__48376__auto____$7;
}
} else {
throw e104948;

}
}} else {
throw e__48376__auto____$6;
}
} else {
throw e104947;

}
}} else {
throw e__48376__auto____$5;
}
} else {
throw e104946;

}
}} else {
throw e__48376__auto____$4;
}
} else {
throw e104945;

}
}} else {
throw e__48376__auto____$3;
}
} else {
throw e104944;

}
}} else {
throw e__48376__auto____$2;
}
} else {
throw e104943;

}
}} else {
throw e__48376__auto____$1;
}
} else {
throw e104942;

}
}} else {
throw e__48376__auto__;
}
} else {
throw e104941;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104939){if((e104939 instanceof Error)){
var e__48376__auto__ = e104939;
if((e__48376__auto__ === cljs.core.match.backtrack)){
return null;
} else {
throw e__48376__auto__;
}
} else {
throw e104939;

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
}),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),(function (p__105081){
var map__105082 = p__105081;
var map__105082__$1 = ((((!((map__105082 == null)))?((((map__105082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__105082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__105082):map__105082);
var map__105083 = cljs.core.get.call(null,map__105082__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__105083__$1 = ((((!((map__105083 == null)))?((((map__105083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__105083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__105083):map__105083);
var state_updates = cljs.core.get.call(null,map__105083__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__105082,map__105082__$1,map__105083,map__105083__$1,state_updates){
return (function (p__105086){
var map__105087 = p__105086;
var map__105087__$1 = ((((!((map__105087 == null)))?((((map__105087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__105087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__105087):map__105087);
var event = map__105087__$1;
var h = cljs.core.get.call(null,map__105087__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return cljs.core.async.put_BANG_.call(null,state_updates,((function (map__105087,map__105087__$1,event,h,map__105082,map__105082__$1,map__105083,map__105083__$1,state_updates){
return (function (s){
var f = (function (){var or__35392__auto__ = h;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return dynomics.ui.ui.match_event.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"event","event",301435442),event));
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (f,map__105087,map__105087__$1,event,h,map__105082,map__105082__$1,map__105083,map__105083__$1,state_updates){
return (function (ss){
if(cljs.core.truth_(f)){
return cljs.core.deref.call(null,f).call(null,cljs.core.assoc.call(null,ss,new cljs.core.Keyword(null,"event","event",301435442),event));
} else {
return ss;
}
});})(f,map__105087,map__105087__$1,event,h,map__105082,map__105082__$1,map__105083,map__105083__$1,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1((function (){var or__35392__auto__ = cljs.core.meta.call(null,f);
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null);
}
})()),new cljs.core.Keyword(null,"fn","fn",-1175266204),(cljs.core.truth_(f)?cljs.core.deref.call(null,f):null),new cljs.core.Keyword(null,"event","event",301435442),event)], null);
});})(map__105087,map__105087__$1,event,h,map__105082,map__105082__$1,map__105083,map__105083__$1,state_updates))
);
});})(map__105082,map__105082__$1,map__105083,map__105083__$1,state_updates))
], null)], null);
}),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),new cljs.core.Keyword(null,"nothing","nothing",-1022703296),new cljs.core.Keyword(null,"tools-order","tools-order",-615877648),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-nodes","add-nodes",935752478),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380),new cljs.core.Keyword(null,"select-nodes","select-nodes",-1990890851),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.Keyword(null,"remove-selected","remove-selected",1393328073),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"load","load",-1318641184)], null),new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load","load",-1318641184),new cljs.core.Keyword(null,"toggle-quadrants","toggle-quadrants",-163483615),new cljs.core.Keyword(null,"curve-types","curve-types",1650772099),new cljs.core.Keyword(null,"print-state","print-state",-1235922711),new cljs.core.Keyword(null,"remove-selected","remove-selected",1393328073),new cljs.core.Keyword(null,"toggle-quadrant-icons","toggle-quadrant-icons",1640510955),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"node-types","node-types",1539943342),new cljs.core.Keyword(null,"toggle-node-types","toggle-node-types",-2069291601),new cljs.core.Keyword(null,"toggle-left-panel","toggle-left-panel",-240911951),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"switch-styles","switch-styles",-1139342249),new cljs.core.Keyword(null,"deactivate-all","deactivate-all",-1221569027)],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load space",new cljs.core.Keyword(null,"description","description",-1428560544),"Restores the last saved space",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26C3",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.persistence.get_state_BANG_], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"toggle quadrants",new cljs.core.Keyword(null,"description","description",-1428560544),"Toggle show quadrants",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.make_toggle_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295)], null))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Curve types",new cljs.core.Keyword(null,"description","description",-1428560544),"Choose the type of the selected curves",new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.reduce.call(null,(function (r,id){
return cljs.core.assoc.call(null,r,id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str("Curve type "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Set the node type of the selected curves to "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.keyword.call(null,[cljs.core.str(id)].join('')),cljs.core.keyword.call(null,[cljs.core.str(id)].join(''))], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.set_curve_type.call(null,id)], null));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"print",new cljs.core.Keyword(null,"name","name",1843675177),"println state",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.print_state], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Remove selected",new cljs.core.Keyword(null,"description","description",-1428560544),"Removes selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2612",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"minus","minus",-1683561492),new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.comp.call(null,dynomics.space.core.deselect_all,dynomics.space.core.remove_selected)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"toggle quadrant icons",new cljs.core.Keyword(null,"description","description",-1428560544),"Toggle show quadrant icons",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.make_toggle_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quadrant-icons","quadrant-icons",737862449)], null))], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Deselect all",new cljs.core.Keyword(null,"description","description",-1428560544),"Deselects all selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2205",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.deselect_all], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"connect nodes",new cljs.core.Keyword(null,"description","description",-1428560544),"Connect selected nodes",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.curve_between_nodes], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Save space",new cljs.core.Keyword(null,"description","description",-1428560544),"Saves the space in your browser for later (sorry I will swap this icon for the familiar\n                                    floppy-disk icon when I find it",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26C1",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.persistence.persist_BANG_], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Node types",new cljs.core.Keyword(null,"description","description",-1428560544),"Choose the type of the selected nodes",new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.reduce.call(null,(function (r,p__105089){
var map__105090 = p__105089;
var map__105090__$1 = ((((!((map__105090 == null)))?((((map__105090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__105090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__105090):map__105090);
var id = cljs.core.get.call(null,map__105090__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc.call(null,r,id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str("Node type "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Set the node type of the selected nodes to "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.keyword.call(null,[cljs.core.str(id)].join('')),cljs.core.keyword.call(null,[cljs.core.str(id)].join(''))], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.set_node_type.call(null,id)], null));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,dynomics.space.core.node_types))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"toggle types",new cljs.core.Keyword(null,"description","description",-1428560544),"Toggle show types",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.make_toggle_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-types","node-types",1539943342)], null))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Toggle left panel",new cljs.core.Keyword(null,"description","description",-1428560544),"Shows/hides the left panel",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.toggle_left_panel], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Context menu",new cljs.core.Keyword(null,"description","description",-1428560544),"Display context menu",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.toggle_context_menu,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option1","option1",-243284328),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Option1"], null)], null),new cljs.core.Keyword(null,"curve","curve",-569677866),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set-curve-type1","set-curve-type1",2042367308),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"set curve type Nullcline 1",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"fn","fn",-1175266204),(new cljs.core.Delay((function (){
return dynomics.space.core.set_curve_type.call(null,(1));
}),null))], null),new cljs.core.Keyword(null,"set-curve-type2","set-curve-type2",1286708706),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"set curve type Nullcline 2",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"fn","fn",-1175266204),(new cljs.core.Delay((function (){
return dynomics.space.core.set_curve_type.call(null,(2));
}),null))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"switch styles",new cljs.core.Keyword(null,"description","description",-1428560544),"change style",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"tilde","tilde",-306005780),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.switch_styles], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Deactivate all",new cljs.core.Keyword(null,"description","description",-1428560544),"Deactivates all active nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2205",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.deactivate_all], null)])], null)], null));
});
dynomics.ui.ui.left_right_top_view = (function dynomics$ui$ui$left_right_top_view(p__105092){
var map__105104 = p__105092;
var map__105104__$1 = ((((!((map__105104 == null)))?((((map__105104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__105104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__105104):map__105104);
var state = map__105104__$1;
var context_menu = cljs.core.get.call(null,map__105104__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__105105 = cljs.core.get.call(null,map__105104__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__105105__$1 = ((((!((map__105105 == null)))?((((map__105105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__105105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__105105):map__105105);
var selected_nodes = cljs.core.get.call(null,map__105105__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var map__105106 = cljs.core.get.call(null,map__105104__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__105106__$1 = ((((!((map__105106 == null)))?((((map__105106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__105106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__105106):map__105106);
var msgs = cljs.core.get.call(null,map__105106__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui105110 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui105110 = (function (left_right_top_view,p__105092,map__105104,state,context_menu,map__105105,selected_nodes,map__105106,msgs,meta105111){
this.left_right_top_view = left_right_top_view;
this.p__105092 = p__105092;
this.map__105104 = map__105104;
this.state = state;
this.context_menu = context_menu;
this.map__105105 = map__105105;
this.selected_nodes = selected_nodes;
this.map__105106 = map__105106;
this.msgs = msgs;
this.meta105111 = meta105111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui105110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__105104,map__105104__$1,state,context_menu,map__105105,map__105105__$1,selected_nodes,map__105106,map__105106__$1,msgs){
return (function (_105112,meta105111__$1){
var self__ = this;
var _105112__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui105110(self__.left_right_top_view,self__.p__105092,self__.map__105104,self__.state,self__.context_menu,self__.map__105105,self__.selected_nodes,self__.map__105106,self__.msgs,meta105111__$1));
});})(map__105104,map__105104__$1,state,context_menu,map__105105,map__105105__$1,selected_nodes,map__105106,map__105106__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui105110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__105104,map__105104__$1,state,context_menu,map__105105,map__105105__$1,selected_nodes,map__105106,map__105106__$1,msgs){
return (function (_105112){
var self__ = this;
var _105112__$1 = this;
return self__.meta105111;
});})(map__105104,map__105104__$1,state,context_menu,map__105105,map__105105__$1,selected_nodes,map__105106,map__105106__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui105110.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui105110.prototype.om$core$IRender$render$arity$1 = ((function (map__105104,map__105104__$1,state,context_menu,map__105105,map__105105__$1,selected_nodes,map__105106,map__105106__$1,msgs){
return (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return om.dom.div.call(null,{"className": "ui"},om.dom.div.call(null,{"className": "main_ui"},om.dom.div.call(null,{"className": [cljs.core.str("left_component "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"left-panel?","left-panel?",1385519317).cljs$core$IFn$_invoke$arity$1(self__.state))?"hidden_function":null))].join('')},null,om.dom.div.call(null,{"className": "node_types_box"},null,om.core.build.call(null,dynomics.space.ui.make_node_types_palette_component,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state))),null),om.dom.div.call(null,{"className": "right_component selectable", "key": "right_component"},cljs.core.map.call(null,((function (this__44434__auto____$1,map__105104,map__105104__$1,state,context_menu,map__105105,map__105105__$1,selected_nodes,map__105106,map__105106__$1,msgs){
return (function (p__105113){
var vec__105114 = p__105113;
var id = cljs.core.nth.call(null,vec__105114,(0),null);
var component = cljs.core.nth.call(null,vec__105114,(1),null);
return om.core.build.call(null,new cljs.core.Keyword(null,"om-builder","om-builder",1876809590).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(component).call(null,self__.state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
});})(this__44434__auto____$1,map__105104,map__105104__$1,state,context_menu,map__105105,map__105105__$1,selected_nodes,map__105106,map__105106__$1,msgs))
,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.every_QMARK_,cljs.core.identity),cljs.core.juxt.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"om-builder","om-builder",1876809590)),cljs.core.val),cljs.core.dissoc.call(null,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null)),new cljs.core.Keyword(null,"function-selector","function-selector",-969376268),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"history","history",-247395220))))),(cljs.core.truth_(self__.context_menu)?om.core.build.call(null,dynomics.ui.ui.make_context_menu,cljs.core.assoc.call(null,cljs.core.select_keys.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451)], null)),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs)):null)),om.core.build.call(null,dynomics.ui.ui.make_header_view,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state)));
});})(map__105104,map__105104__$1,state,context_menu,map__105105,map__105105__$1,selected_nodes,map__105106,map__105106__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui105110.getBasis = ((function (map__105104,map__105104__$1,state,context_menu,map__105105,map__105105__$1,selected_nodes,map__105106,map__105106__$1,msgs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"left-right-top-view","left-right-top-view",150328751,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null)], null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"message-channel","message-channel",-227831873)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)))], null)),new cljs.core.Symbol(null,"p__105092","p__105092",-657012100,null),new cljs.core.Symbol(null,"map__105104","map__105104",1119048887,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Symbol(null,"map__105105","map__105105",-965988214,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"map__105106","map__105106",421730959,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"meta105111","meta105111",20589159,null)], null);
});})(map__105104,map__105104__$1,state,context_menu,map__105105,map__105105__$1,selected_nodes,map__105106,map__105106__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui105110.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui105110.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui105110";

dynomics.ui.ui.t_dynomics$ui$ui105110.cljs$lang$ctorPrWriter = ((function (map__105104,map__105104__$1,state,context_menu,map__105105,map__105105__$1,selected_nodes,map__105106,map__105106__$1,msgs){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.ui.ui/t_dynomics$ui$ui105110");
});})(map__105104,map__105104__$1,state,context_menu,map__105105,map__105105__$1,selected_nodes,map__105106,map__105106__$1,msgs))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui105110 = ((function (map__105104,map__105104__$1,state,context_menu,map__105105,map__105105__$1,selected_nodes,map__105106,map__105106__$1,msgs){
return (function dynomics$ui$ui$left_right_top_view_$___GT_t_dynomics$ui$ui105110(left_right_top_view__$1,p__105092__$1,map__105104__$2,state__$1,context_menu__$1,map__105105__$2,selected_nodes__$1,map__105106__$2,msgs__$1,meta105111){
return (new dynomics.ui.ui.t_dynomics$ui$ui105110(left_right_top_view__$1,p__105092__$1,map__105104__$2,state__$1,context_menu__$1,map__105105__$2,selected_nodes__$1,map__105106__$2,msgs__$1,meta105111));
});})(map__105104,map__105104__$1,state,context_menu,map__105105,map__105105__$1,selected_nodes,map__105106,map__105106__$1,msgs))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui105110(dynomics$ui$ui$left_right_top_view,p__105092,map__105104__$1,state,context_menu,map__105105__$1,selected_nodes,map__105106__$1,msgs,null));
});
dynomics.ui.ui.main_view = (function dynomics$ui$ui$main_view(){
return (function (p__105123,owner){
var map__105124 = p__105123;
var map__105124__$1 = ((((!((map__105124 == null)))?((((map__105124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__105124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__105124):map__105124);
var state = map__105124__$1;
var style = cljs.core.get.call(null,map__105124__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui105126 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillReceiveProps}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui105126 = (function (main_view,p__105123,owner,map__105124,state,style,meta105127){
this.main_view = main_view;
this.p__105123 = p__105123;
this.owner = owner;
this.map__105124 = map__105124;
this.state = state;
this.style = style;
this.meta105127 = meta105127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui105126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__105124,map__105124__$1,state,style){
return (function (_105128,meta105127__$1){
var self__ = this;
var _105128__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui105126(self__.main_view,self__.p__105123,self__.owner,self__.map__105124,self__.state,self__.style,meta105127__$1));
});})(map__105124,map__105124__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui105126.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__105124,map__105124__$1,state,style){
return (function (_105128){
var self__ = this;
var _105128__$1 = this;
return self__.meta105127;
});})(map__105124,map__105124__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui105126.prototype.om$core$IWillMount$ = true;

dynomics.ui.ui.t_dynomics$ui$ui105126.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__105124,map__105124__$1,state,style){
return (function (_){
var self__ = this;
var ___$1 = this;
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"style-element","style-element",918957936),goog.style.installStyles(dynomics.ui.css.make_main_gui_style.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999),self__.style))?dynomics.ui.css.dark_style.call(null):dynomics.ui.css.light_style.call(null)))));

dynomics.ui.ui.add_events_BANG_.call(null,self__.state);

return dynomics.ui.messaging.setup_updates.call(null,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839)], null)),((function (___$1,map__105124,map__105124__$1,state,style){
return (function (g){
if(cljs.core.truth_(g)){
return om.core.transact_BANG_.call(null,self__.state,((function (___$1,map__105124,map__105124__$1,state,style){
return (function (s){
var map__105129 = g.call(null,s);
var map__105129__$1 = ((((!((map__105129 == null)))?((((map__105129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__105129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__105129):map__105129);
var f = cljs.core.get.call(null,map__105129__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var a = cljs.core.get.call(null,map__105129__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var ss = dynomics.ui.core.update_state.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"action","action",-811238024),(function (){var or__35392__auto__ = a;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),cljs.core.PersistentArrayMap.EMPTY,f);
return ss;
});})(___$1,map__105124,map__105124__$1,state,style))
);
} else {
return null;
}
});})(___$1,map__105124,map__105124__$1,state,style))
);
});})(map__105124,map__105124__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui105126.prototype.om$core$IWillReceiveProps$ = true;

dynomics.ui.ui.t_dynomics$ui$ui105126.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__105124,map__105124__$1,state,style){
return (function (this$,pp){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not_EQ_.call(null,self__.style,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(pp))){
var temp__4655__auto___105131 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"style-element","style-element",918957936));
if(cljs.core.truth_(temp__4655__auto___105131)){
var s_105132 = temp__4655__auto___105131;
goog.style.uninstallStyles(s_105132);
} else {
}

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"style-element","style-element",918957936),goog.style.installStyles(dynomics.ui.css.make_main_gui_style.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999),self__.style))?dynomics.ui.css.dark_style.call(null):dynomics.ui.css.light_style.call(null)))));
} else {
return null;
}
});})(map__105124,map__105124__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui105126.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui105126.prototype.om$core$IRender$render$arity$1 = ((function (map__105124,map__105124__$1,state,style){
return (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.call(null,dynomics.ui.ui.left_right_top_view,self__.state);
});})(map__105124,map__105124__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui105126.getBasis = ((function (map__105124,map__105124__$1,state,style){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"p__105123","p__105123",68641096,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__105124","map__105124",769526465,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"meta105127","meta105127",-209780771,null)], null);
});})(map__105124,map__105124__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui105126.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui105126.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui105126";

dynomics.ui.ui.t_dynomics$ui$ui105126.cljs$lang$ctorPrWriter = ((function (map__105124,map__105124__$1,state,style){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.ui.ui/t_dynomics$ui$ui105126");
});})(map__105124,map__105124__$1,state,style))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui105126 = ((function (map__105124,map__105124__$1,state,style){
return (function dynomics$ui$ui$main_view_$___GT_t_dynomics$ui$ui105126(main_view__$1,p__105123__$1,owner__$1,map__105124__$2,state__$1,style__$1,meta105127){
return (new dynomics.ui.ui.t_dynomics$ui$ui105126(main_view__$1,p__105123__$1,owner__$1,map__105124__$2,state__$1,style__$1,meta105127));
});})(map__105124,map__105124__$1,state,style))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui105126(dynomics$ui$ui$main_view,p__105123,owner,map__105124__$1,state,style,cljs.core.PersistentArrayMap.EMPTY));
});
});
/**
 * Start the application!
 */
dynomics.ui.ui.start = (function dynomics$ui$ui$start(var_args){
var args105133 = [];
var len__36461__auto___105136 = arguments.length;
var i__36462__auto___105137 = (0);
while(true){
if((i__36462__auto___105137 < len__36461__auto___105136)){
args105133.push((arguments[i__36462__auto___105137]));

var G__105138 = (i__36462__auto___105137 + (1));
i__36462__auto___105137 = G__105138;
continue;
} else {
}
break;
}

var G__105135 = args105133.length;
switch (G__105135) {
case 0:
return dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args105133.length)].join('')));

}
});

dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return dynomics.ui.ui.start.call(null,dynomics.ui.ui.add_components.call(null,dynomics.ui.ui.add_keybindings.call(null,dynomics.ui.ui.add_functions.call(null,dynomics.ui.ui.add_messaging.call(null,dynomics.ui.ui.add_browser_info.call(null,dynomics.ui.core.make_state.call(null)))))));
});

dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$1 = (function (state){
return om.core.root.call(null,dynomics.ui.ui.main_view.call(null),state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("ui")], null));
});

dynomics.ui.ui.start.cljs$lang$maxFixedArity = 1;
