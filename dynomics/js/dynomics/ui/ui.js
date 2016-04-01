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
dynomics.ui.ui.animation_frame = (function (){var or__25827__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
var or__25827__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__25827__auto____$1)){
return or__25827__auto____$1;
} else {
var or__25827__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__25827__auto____$2)){
return or__25827__auto____$2;
} else {
var or__25827__auto____$3 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__25827__auto____$3)){
return or__25827__auto____$3;
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
dynomics.ui.ui.keydown = (function dynomics$ui$ui$keydown(p__93634,e){
var map__93639 = p__93634;
var map__93639__$1 = ((((!((map__93639 == null)))?((((map__93639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93639):map__93639);
var state = map__93639__$1;
var map__93640 = cljs.core.get.call(null,map__93639__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__93640__$1 = ((((!((map__93640 == null)))?((((map__93640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93640):map__93640);
var msgs = cljs.core.get.call(null,map__93640__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
return cljs.core.async.put_BANG_.call(null,msgs,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),dynomics.ui.core.keycode_to_keyword.call(null,e.keyCode),new cljs.core.Keyword(null,"keycode","keycode",-47989070),e.keyCode,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"event","event",301435442)], null));
});
dynomics.ui.ui.keyup = (function dynomics$ui$ui$keyup(p__93643,e){
var map__93648 = p__93643;
var map__93648__$1 = ((((!((map__93648 == null)))?((((map__93648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93648):map__93648);
var state = map__93648__$1;
var map__93649 = cljs.core.get.call(null,map__93648__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__93649__$1 = ((((!((map__93649 == null)))?((((map__93649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93649):map__93649);
var msgs = cljs.core.get.call(null,map__93649__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
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
if(typeof dynomics.ui.ui.t_dynomics$ui$ui93659 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui93659 = (function (make_function_selector_view,state,owner,functions,state_updates,meta93660){
this.make_function_selector_view = make_function_selector_view;
this.state = state;
this.owner = owner;
this.functions = functions;
this.state_updates = state_updates;
this.meta93660 = meta93660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui93659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (functions,state_updates){
return (function (_93661,meta93660__$1){
var self__ = this;
var _93661__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui93659(self__.make_function_selector_view,self__.state,self__.owner,self__.functions,self__.state_updates,meta93660__$1));
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui93659.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (functions,state_updates){
return (function (_93661){
var self__ = this;
var _93661__$1 = this;
return self__.meta93660;
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui93659.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui93659.prototype.om$core$IRender$render$arity$1 = ((function (functions,state_updates){
return (function (this__37314__auto__){
var self__ = this;
var this__37314__auto____$1 = this;
return om.dom.div.call(null,{"className": "function_selector"},cljs.core.map.call(null,((function (this__37314__auto____$1,functions,state_updates){
return (function (p__93662){
var vec__93663 = p__93662;
var k = cljs.core.nth.call(null,vec__93663,(0),null);
var map__93664 = cljs.core.nth.call(null,vec__93663,(1),null);
var map__93664__$1 = ((((!((map__93664 == null)))?((((map__93664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93664):map__93664);
var naym = cljs.core.get.call(null,map__93664__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__93664__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return om.dom.div.call(null,{"className": "function_selector_item", "id": [cljs.core.str(cljs.core.name.call(null,k))].join(''), "onClick": ((function (vec__93663,k,map__93664,map__93664__$1,naym,description,this__37314__auto____$1,functions,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__93663,k,map__93664,map__93664__$1,naym,description,this__37314__auto____$1,functions,state_updates){
return (function (s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"current-function","current-function",1894670892)], null),k);
});})(vec__93663,k,map__93664,map__93664__$1,naym,description,this__37314__auto____$1,functions,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"id","id",-1388402092),k,new cljs.core.Keyword(null,"description","description",-1428560544),naym], null)], null));

return null;
});})(vec__93663,k,map__93664,map__93664__$1,naym,description,this__37314__auto____$1,functions,state_updates))
},naym);
});})(this__37314__auto____$1,functions,state_updates))
,self__.functions));
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui93659.getBasis = ((function (functions,state_updates){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-function-selector-view","make-function-selector-view",516344898,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for selecting the current function"], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"functions","functions",1825482993,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"meta93660","meta93660",-726902795,null)], null);
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui93659.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui93659.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui93659";

dynomics.ui.ui.t_dynomics$ui$ui93659.cljs$lang$ctorPrWriter = ((function (functions,state_updates){
return (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"dynomics.ui.ui/t_dynomics$ui$ui93659");
});})(functions,state_updates))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui93659 = ((function (functions,state_updates){
return (function dynomics$ui$ui$make_function_selector_view_$___GT_t_dynomics$ui$ui93659(make_function_selector_view__$1,state__$1,owner__$1,functions__$1,state_updates__$1,meta93660){
return (new dynomics.ui.ui.t_dynomics$ui$ui93659(make_function_selector_view__$1,state__$1,owner__$1,functions__$1,state_updates__$1,meta93660));
});})(functions,state_updates))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui93659(dynomics$ui$ui$make_function_selector_view,state,owner,functions,state_updates,null));
});
/**
 * Return a component to display a list
 *   of historical states which select a historical
 *   state on mouseover
 */
dynomics.ui.ui.make_history_selector_view = (function dynomics$ui$ui$make_history_selector_view(p__93666,owner){
var map__93677 = p__93666;
var map__93677__$1 = ((((!((map__93677 == null)))?((((map__93677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93677):map__93677);
var state = map__93677__$1;
var map__93678 = cljs.core.get.call(null,map__93677__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__93678__$1 = ((((!((map__93678 == null)))?((((map__93678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93678):map__93678);
var state_updates = cljs.core.get.call(null,map__93678__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var sh = cljs.core.get.call(null,map__93677__$1,new cljs.core.Keyword(null,"show-history","show-history",1972567130));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui93681 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui93681 = (function (make_history_selector_view,p__93666,owner,map__93677,state,map__93678,state_updates,sh,meta93682){
this.make_history_selector_view = make_history_selector_view;
this.p__93666 = p__93666;
this.owner = owner;
this.map__93677 = map__93677;
this.state = state;
this.map__93678 = map__93678;
this.state_updates = state_updates;
this.sh = sh;
this.meta93682 = meta93682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui93681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh){
return (function (_93683,meta93682__$1){
var self__ = this;
var _93683__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui93681(self__.make_history_selector_view,self__.p__93666,self__.owner,self__.map__93677,self__.state,self__.map__93678,self__.state_updates,self__.sh,meta93682__$1));
});})(map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui93681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh){
return (function (_93683){
var self__ = this;
var _93683__$1 = this;
return self__.meta93682;
});})(map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui93681.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui93681.prototype.om$core$IRender$render$arity$1 = ((function (map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh){
return (function (this__37314__auto__){
var self__ = this;
var this__37314__auto____$1 = this;
return om.dom.div.call(null,{"className": "history_selector", "onClick": ((function (this__37314__auto____$1,map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh){
return (function (e){
return cljs.core.async.put_BANG_.call(null,self__.state_updates,((function (this__37314__auto____$1,map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh){
return (function (s){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (this__37314__auto____$1,map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh){
return (function (s__$1){
return cljs.core.update_in.call(null,s__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-history","show-history",1972567130)], null),cljs.core.not);
});})(this__37314__auto____$1,map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh))
], null);
});})(this__37314__auto____$1,map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh))
);
});})(this__37314__auto____$1,map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh))
},om.dom.div.call(null,{"className": "history_selector_text"},"History"),om.dom.div.call(null,{"className": (cljs.core.truth_(self__.sh)?"history_selector_visible":"history_selector_hidden")},cljs.core.map.call(null,((function (this__37314__auto____$1,map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh){
return (function (p__93684){
var map__93685 = p__93684;
var map__93685__$1 = ((((!((map__93685 == null)))?((((map__93685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93685):map__93685);
var history_item = map__93685__$1;
var action = cljs.core.get.call(null,map__93685__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var version = cljs.core.get.call(null,map__93685__$1,new cljs.core.Keyword(null,"version","version",425292698));
var previous_action = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item),(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item)) - (1))));
var previous_version = new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item)));
return om.dom.div.call(null,{"className": [cljs.core.str("history_selector_item "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"history-item","history-item",-894421182),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(previous_action)))?"historical":""))].join(''), "id": [cljs.core.str("history_version_"),cljs.core.str(previous_version)].join(''), "onMouseOver": ((function (previous_action,previous_version,map__93685,map__93685__$1,history_item,action,version,this__37314__auto____$1,map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,((function (previous_action,previous_version,map__93685,map__93685__$1,history_item,action,version,this__37314__auto____$1,map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh){
return (function (s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (previous_action,previous_version,map__93685,map__93685__$1,history_item,action,version,this__37314__auto____$1,map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh){
return (function (s__$1){
return cljs.core.merge.call(null,om.core.value.call(null,history_item),cljs.core.select_keys.call(null,s__$1,cljs.core.conj.call(null,new cljs.core.Keyword(null,"dont-record","dont-record",577283045).cljs$core$IFn$_invoke$arity$1(s__$1),new cljs.core.Keyword(null,"history","history",-247395220))));
});})(previous_action,previous_version,map__93685,map__93685__$1,history_item,action,version,this__37314__auto____$1,map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"desccription","desccription",-1060114044),[cljs.core.str(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(previous_action))].join(''),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"history-item","history-item",-894421182),new cljs.core.Keyword(null,"id","id",-1388402092),version], null)], null);
});})(previous_action,previous_version,map__93685,map__93685__$1,history_item,action,version,this__37314__auto____$1,map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh))
);

return null;
});})(previous_action,previous_version,map__93685,map__93685__$1,history_item,action,version,this__37314__auto____$1,map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh))
},new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(previous_action));
});})(this__37314__auto____$1,map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh))
,cljs.core.filter.call(null,((function (this__37314__auto____$1,map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh){
return (function (hi){
return new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(hi),(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(hi)) - (1)))));
});})(this__37314__auto____$1,map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh))
,cljs.core.reverse.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(self__.state),self__.state))))));
});})(map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui93681.getBasis = ((function (map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-history-selector-view","make-history-selector-view",1677763159,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Symbol(null,"sh","sh",958087520,null),new cljs.core.Keyword(null,"show-history","show-history",1972567130),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a component to display a list\n  of historical states which select a historical\n  state on mouseover"], null)),new cljs.core.Symbol(null,"p__93666","p__93666",-894026374,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__93677","map__93677",1442304529,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__93678","map__93678",-396499837,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"sh","sh",958087520,null),new cljs.core.Symbol(null,"meta93682","meta93682",1287696656,null)], null);
});})(map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui93681.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui93681.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui93681";

dynomics.ui.ui.t_dynomics$ui$ui93681.cljs$lang$ctorPrWriter = ((function (map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh){
return (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"dynomics.ui.ui/t_dynomics$ui$ui93681");
});})(map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui93681 = ((function (map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh){
return (function dynomics$ui$ui$make_history_selector_view_$___GT_t_dynomics$ui$ui93681(make_history_selector_view__$1,p__93666__$1,owner__$1,map__93677__$2,state__$1,map__93678__$2,state_updates__$1,sh__$1,meta93682){
return (new dynomics.ui.ui.t_dynomics$ui$ui93681(make_history_selector_view__$1,p__93666__$1,owner__$1,map__93677__$2,state__$1,map__93678__$2,state_updates__$1,sh__$1,meta93682));
});})(map__93677,map__93677__$1,state,map__93678,map__93678__$1,state_updates,sh))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui93681(dynomics$ui$ui$make_history_selector_view,p__93666,owner,map__93677__$1,state,map__93678__$1,state_updates,sh,null));
});
dynomics.ui.ui.make_context_menu = (function dynomics$ui$ui$make_context_menu(p__93687){
var map__93700 = p__93687;
var map__93700__$1 = ((((!((map__93700 == null)))?((((map__93700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93700):map__93700);
var map__93701 = cljs.core.get.call(null,map__93700__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__93701__$1 = ((((!((map__93701 == null)))?((((map__93701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93701):map__93701);
var vec__93702 = cljs.core.get.call(null,map__93701__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__93702,(0),null);
var y = cljs.core.nth.call(null,vec__93702,(1),null);
var o = cljs.core.get.call(null,map__93701__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var options = cljs.core.get.call(null,map__93701__$1,new cljs.core.Keyword(null,"options","options",99638489));
var msgs = cljs.core.get.call(null,map__93700__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui93705 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui93705 = (function (vec__93702,options,x,y,o,p__93687,map__93700,msgs,make_context_menu,map__93701,meta93706){
this.vec__93702 = vec__93702;
this.options = options;
this.x = x;
this.y = y;
this.o = o;
this.p__93687 = p__93687;
this.map__93700 = map__93700;
this.msgs = msgs;
this.make_context_menu = make_context_menu;
this.map__93701 = map__93701;
this.meta93706 = meta93706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui93705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__93700,map__93700__$1,map__93701,map__93701__$1,vec__93702,x,y,o,options,msgs){
return (function (_93707,meta93706__$1){
var self__ = this;
var _93707__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui93705(self__.vec__93702,self__.options,self__.x,self__.y,self__.o,self__.p__93687,self__.map__93700,self__.msgs,self__.make_context_menu,self__.map__93701,meta93706__$1));
});})(map__93700,map__93700__$1,map__93701,map__93701__$1,vec__93702,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui93705.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__93700,map__93700__$1,map__93701,map__93701__$1,vec__93702,x,y,o,options,msgs){
return (function (_93707){
var self__ = this;
var _93707__$1 = this;
return self__.meta93706;
});})(map__93700,map__93700__$1,map__93701,map__93701__$1,vec__93702,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui93705.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui93705.prototype.om$core$IRender$render$arity$1 = ((function (map__93700,map__93700__$1,map__93701,map__93701__$1,vec__93702,x,y,o,options,msgs){
return (function (this__37314__auto__){
var self__ = this;
var this__37314__auto____$1 = this;
return React.createElement("div",{"style": {"transform": [cljs.core.str("translate("),cljs.core.str(self__.x),cljs.core.str("px,"),cljs.core.str(self__.y),cljs.core.str("px)")].join('')}, "id": "context-menu", "className": "context_menu", "onMouseDown": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseUp": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseLeave": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),self__.msgs,cljs.core.PersistentArrayMap.EMPTY)},React.createElement("div",{"className": "context_menu_title"},sablono.interpreter.interpret.call(null,[cljs.core.str("Options for "),cljs.core.str(cljs.core.name.call(null,self__.o))].join(''))),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (this__37314__auto____$1,map__93700,map__93700__$1,map__93701,map__93701__$1,vec__93702,x,y,o,options,msgs){
return (function (p__93708){
var vec__93709 = p__93708;
var k = cljs.core.nth.call(null,vec__93709,(0),null);
var map__93710 = cljs.core.nth.call(null,vec__93709,(1),null);
var map__93710__$1 = ((((!((map__93710 == null)))?((((map__93710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93710):map__93710);
var naym = cljs.core.get.call(null,map__93710__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var kb = cljs.core.get.call(null,map__93710__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
var f = cljs.core.get.call(null,map__93710__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"context_menu_option",new cljs.core.Keyword(null,"onMouseUp","onMouseUp",-180363297),dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),k], null),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),f], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str(naym),cljs.core.str("  ")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"keyboard_shortcut"], null),[cljs.core.str(kb)].join('')], null)], null);
});})(this__37314__auto____$1,map__93700,map__93700__$1,map__93701,map__93701__$1,vec__93702,x,y,o,options,msgs))
,self__.options)));
});})(map__93700,map__93700__$1,map__93701,map__93701__$1,vec__93702,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui93705.getBasis = ((function (map__93700,map__93700__$1,map__93701,map__93701__$1,vec__93702,x,y,o,options,msgs){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec__93702","vec__93702",1502526816,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Symbol(null,"p__93687","p__93687",-1709598611,null),new cljs.core.Symbol(null,"map__93700","map__93700",1705990362,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-context-menu","make-context-menu",-526000036,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Keyword(null,"options","options",99638489)], true, false),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)], true, false)], null)))], null)),new cljs.core.Symbol(null,"map__93701","map__93701",-51191523,null),new cljs.core.Symbol(null,"meta93706","meta93706",-1707109826,null)], null);
});})(map__93700,map__93700__$1,map__93701,map__93701__$1,vec__93702,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui93705.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui93705.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui93705";

dynomics.ui.ui.t_dynomics$ui$ui93705.cljs$lang$ctorPrWriter = ((function (map__93700,map__93700__$1,map__93701,map__93701__$1,vec__93702,x,y,o,options,msgs){
return (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"dynomics.ui.ui/t_dynomics$ui$ui93705");
});})(map__93700,map__93700__$1,map__93701,map__93701__$1,vec__93702,x,y,o,options,msgs))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui93705 = ((function (map__93700,map__93700__$1,map__93701,map__93701__$1,vec__93702,x,y,o,options,msgs){
return (function dynomics$ui$ui$make_context_menu_$___GT_t_dynomics$ui$ui93705(vec__93702__$1,options__$1,x__$1,y__$1,o__$1,p__93687__$1,map__93700__$2,msgs__$1,make_context_menu__$1,map__93701__$2,meta93706){
return (new dynomics.ui.ui.t_dynomics$ui$ui93705(vec__93702__$1,options__$1,x__$1,y__$1,o__$1,p__93687__$1,map__93700__$2,msgs__$1,make_context_menu__$1,map__93701__$2,meta93706));
});})(map__93700,map__93700__$1,map__93701,map__93701__$1,vec__93702,x,y,o,options,msgs))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui93705(vec__93702,options,x,y,o,p__93687,map__93700__$1,msgs,dynomics$ui$ui$make_context_menu,map__93701__$1,null));
});
/**
 * Returns a component for the top header
 */
dynomics.ui.ui.make_header_view = (function dynomics$ui$ui$make_header_view(p__93712){
var map__93718 = p__93712;
var map__93718__$1 = ((((!((map__93718 == null)))?((((map__93718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93718):map__93718);
var state = map__93718__$1;
var logo_text = cljs.core.get.call(null,map__93718__$1,new cljs.core.Keyword(null,"logo-text","logo-text",-580816517));
var app_name = cljs.core.get.call(null,map__93718__$1,new cljs.core.Keyword(null,"app-name","app-name",-268811251));
var app_version = cljs.core.get.call(null,map__93718__$1,new cljs.core.Keyword(null,"app-version","app-version",361554836));
var state_version = cljs.core.get.call(null,map__93718__$1,new cljs.core.Keyword(null,"state-version","state-version",1282692697));
var action = cljs.core.get.call(null,map__93718__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui93720 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui93720 = (function (make_header_view,p__93712,map__93718,state,logo_text,app_name,app_version,state_version,action,meta93721){
this.make_header_view = make_header_view;
this.p__93712 = p__93712;
this.map__93718 = map__93718;
this.state = state;
this.logo_text = logo_text;
this.app_name = app_name;
this.app_version = app_version;
this.state_version = state_version;
this.action = action;
this.meta93721 = meta93721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui93720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__93718,map__93718__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (_93722,meta93721__$1){
var self__ = this;
var _93722__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui93720(self__.make_header_view,self__.p__93712,self__.map__93718,self__.state,self__.logo_text,self__.app_name,self__.app_version,self__.state_version,self__.action,meta93721__$1));
});})(map__93718,map__93718__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui93720.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__93718,map__93718__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (_93722){
var self__ = this;
var _93722__$1 = this;
return self__.meta93721;
});})(map__93718,map__93718__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui93720.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui93720.prototype.om$core$IRender$render$arity$1 = ((function (map__93718,map__93718__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (this__37314__auto__){
var self__ = this;
var this__37314__auto____$1 = this;
return om.dom.div.call(null,{"className": "top_component"},null,null);
});})(map__93718,map__93718__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui93720.getBasis = ((function (map__93718,map__93718__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-header-view","make-header-view",2348093,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"logo-text","logo-text",1059715010,null),new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"app-version","app-version",2002086363,null),new cljs.core.Symbol(null,"state-version","state-version",-1371743072,null),new cljs.core.Symbol(null,"action","action",829293503,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the top header"], null)),new cljs.core.Symbol(null,"p__93712","p__93712",-368602685,null),new cljs.core.Symbol(null,"map__93718","map__93718",-1700937091,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"logo-text","logo-text",1059715010,null),new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"app-version","app-version",2002086363,null),new cljs.core.Symbol(null,"state-version","state-version",-1371743072,null),new cljs.core.Symbol(null,"action","action",829293503,null),new cljs.core.Symbol(null,"meta93721","meta93721",2020845990,null)], null);
});})(map__93718,map__93718__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui93720.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui93720.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui93720";

dynomics.ui.ui.t_dynomics$ui$ui93720.cljs$lang$ctorPrWriter = ((function (map__93718,map__93718__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"dynomics.ui.ui/t_dynomics$ui$ui93720");
});})(map__93718,map__93718__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui93720 = ((function (map__93718,map__93718__$1,state,logo_text,app_name,app_version,state_version,action){
return (function dynomics$ui$ui$make_header_view_$___GT_t_dynomics$ui$ui93720(make_header_view__$1,p__93712__$1,map__93718__$2,state__$1,logo_text__$1,app_name__$1,app_version__$1,state_version__$1,action__$1,meta93721){
return (new dynomics.ui.ui.t_dynomics$ui$ui93720(make_header_view__$1,p__93712__$1,map__93718__$2,state__$1,logo_text__$1,app_name__$1,app_version__$1,state_version__$1,action__$1,meta93721));
});})(map__93718,map__93718__$1,state,logo_text,app_name,app_version,state_version,action))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui93720(dynomics$ui$ui$make_header_view,p__93712,map__93718__$1,state,logo_text,app_name,app_version,state_version,action,null));
});
dynomics.ui.ui.evaluate = (function dynomics$ui$ui$evaluate(s,sexp,f){
return null;
});
dynomics.ui.ui.make_footer_view = (function dynomics$ui$ui$make_footer_view(p__93723){
var map__93733 = p__93723;
var map__93733__$1 = ((((!((map__93733 == null)))?((((map__93733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93733):map__93733);
var state = map__93733__$1;
var map__93734 = cljs.core.get.call(null,map__93733__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__93734__$1 = ((((!((map__93734 == null)))?((((map__93734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93734):map__93734);
var state_updates = cljs.core.get.call(null,map__93734__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var map__93735 = cljs.core.get.call(null,map__93733__$1,new cljs.core.Keyword(null,"eval","eval",-1103567905));
var map__93735__$1 = ((((!((map__93735 == null)))?((((map__93735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93735):map__93735);
var last_result = cljs.core.get.call(null,map__93735__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var last_exps = cljs.core.get.call(null,map__93735__$1,new cljs.core.Keyword(null,"exps","exps",-877274249));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui93739 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui93739 = (function (make_footer_view,p__93723,map__93733,state,map__93734,state_updates,map__93735,last_result,last_exps,meta93740){
this.make_footer_view = make_footer_view;
this.p__93723 = p__93723;
this.map__93733 = map__93733;
this.state = state;
this.map__93734 = map__93734;
this.state_updates = state_updates;
this.map__93735 = map__93735;
this.last_result = last_result;
this.last_exps = last_exps;
this.meta93740 = meta93740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui93739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__93733,map__93733__$1,state,map__93734,map__93734__$1,state_updates,map__93735,map__93735__$1,last_result,last_exps){
return (function (_93741,meta93740__$1){
var self__ = this;
var _93741__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui93739(self__.make_footer_view,self__.p__93723,self__.map__93733,self__.state,self__.map__93734,self__.state_updates,self__.map__93735,self__.last_result,self__.last_exps,meta93740__$1));
});})(map__93733,map__93733__$1,state,map__93734,map__93734__$1,state_updates,map__93735,map__93735__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui93739.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__93733,map__93733__$1,state,map__93734,map__93734__$1,state_updates,map__93735,map__93735__$1,last_result,last_exps){
return (function (_93741){
var self__ = this;
var _93741__$1 = this;
return self__.meta93740;
});})(map__93733,map__93733__$1,state,map__93734,map__93734__$1,state_updates,map__93735,map__93735__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui93739.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui93739.prototype.om$core$IRender$render$arity$1 = ((function (map__93733,map__93733__$1,state,map__93734,map__93734__$1,state_updates,map__93735,map__93735__$1,last_result,last_exps){
return (function (this__37314__auto__){
var self__ = this;
var this__37314__auto____$1 = this;
return om.dom.div.call(null,{"className": "bottom_component"},om.dom.input.call(null,{"className": "eval_input", "type": "text", "size": (64), "onKeyDown": ((function (this__37314__auto____$1,map__93733,map__93733__$1,state,map__93734,map__93734__$1,state_updates,map__93735,map__93735__$1,last_result,last_exps){
return (function (e){
e.stopPropagation();


return null;
});})(this__37314__auto____$1,map__93733,map__93733__$1,state,map__93734,map__93734__$1,state_updates,map__93735,map__93735__$1,last_result,last_exps))
}),om.dom.div.call(null,{"className": "eval_result"},[cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.last_result))].join('')));
});})(map__93733,map__93733__$1,state,map__93734,map__93734__$1,state_updates,map__93735,map__93735__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui93739.getBasis = ((function (map__93733,map__93733__$1,state,map__93734,map__93734__$1,state_updates,map__93735,map__93735__$1,last_result,last_exps){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-footer-view","make-footer-view",-746293906,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"last-result","last-result",608012457,null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Symbol(null,"last-exps","last-exps",-1587487039,null),new cljs.core.Keyword(null,"exps","exps",-877274249)], null),new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)))], null)),new cljs.core.Symbol(null,"p__93723","p__93723",-856095014,null),new cljs.core.Symbol(null,"map__93733","map__93733",-1910229189,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__93734","map__93734",-474676669,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"map__93735","map__93735",1477659760,null),new cljs.core.Symbol(null,"last-result","last-result",608012457,null),new cljs.core.Symbol(null,"last-exps","last-exps",-1587487039,null),new cljs.core.Symbol(null,"meta93740","meta93740",-1498311954,null)], null);
});})(map__93733,map__93733__$1,state,map__93734,map__93734__$1,state_updates,map__93735,map__93735__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui93739.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui93739.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui93739";

dynomics.ui.ui.t_dynomics$ui$ui93739.cljs$lang$ctorPrWriter = ((function (map__93733,map__93733__$1,state,map__93734,map__93734__$1,state_updates,map__93735,map__93735__$1,last_result,last_exps){
return (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"dynomics.ui.ui/t_dynomics$ui$ui93739");
});})(map__93733,map__93733__$1,state,map__93734,map__93734__$1,state_updates,map__93735,map__93735__$1,last_result,last_exps))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui93739 = ((function (map__93733,map__93733__$1,state,map__93734,map__93734__$1,state_updates,map__93735,map__93735__$1,last_result,last_exps){
return (function dynomics$ui$ui$make_footer_view_$___GT_t_dynomics$ui$ui93739(make_footer_view__$1,p__93723__$1,map__93733__$2,state__$1,map__93734__$2,state_updates__$1,map__93735__$2,last_result__$1,last_exps__$1,meta93740){
return (new dynomics.ui.ui.t_dynomics$ui$ui93739(make_footer_view__$1,p__93723__$1,map__93733__$2,state__$1,map__93734__$2,state_updates__$1,map__93735__$2,last_result__$1,last_exps__$1,meta93740));
});})(map__93733,map__93733__$1,state,map__93734,map__93734__$1,state_updates,map__93735,map__93735__$1,last_result,last_exps))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui93739(dynomics$ui$ui$make_footer_view,p__93723,map__93733__$1,state,map__93734__$1,state_updates,map__93735__$1,last_result,last_exps,null));
});
dynomics.ui.ui.add_components = (function dynomics$ui$ui$add_components(state){
var seq__93746_93750 = cljs.core.seq.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.vals.call(null,cljs.core.dissoc.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null))))));
var chunk__93747_93751 = null;
var count__93748_93752 = (0);
var i__93749_93753 = (0);
while(true){
if((i__93749_93753 < count__93748_93752)){
var component_93754 = cljs.core._nth.call(null,chunk__93747_93751,i__93749_93753);
dynomics.ui.messaging.subscribe_BANG_.call(null,state,component_93754);

var G__93755 = seq__93746_93750;
var G__93756 = chunk__93747_93751;
var G__93757 = count__93748_93752;
var G__93758 = (i__93749_93753 + (1));
seq__93746_93750 = G__93755;
chunk__93747_93751 = G__93756;
count__93748_93752 = G__93757;
i__93749_93753 = G__93758;
continue;
} else {
var temp__4657__auto___93759 = cljs.core.seq.call(null,seq__93746_93750);
if(temp__4657__auto___93759){
var seq__93746_93760__$1 = temp__4657__auto___93759;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__93746_93760__$1)){
var c__26638__auto___93761 = cljs.core.chunk_first.call(null,seq__93746_93760__$1);
var G__93762 = cljs.core.chunk_rest.call(null,seq__93746_93760__$1);
var G__93763 = c__26638__auto___93761;
var G__93764 = cljs.core.count.call(null,c__26638__auto___93761);
var G__93765 = (0);
seq__93746_93750 = G__93762;
chunk__93747_93751 = G__93763;
count__93748_93752 = G__93764;
i__93749_93753 = G__93765;
continue;
} else {
var component_93766 = cljs.core.first.call(null,seq__93746_93760__$1);
dynomics.ui.messaging.subscribe_BANG_.call(null,state,component_93766);

var G__93767 = cljs.core.next.call(null,seq__93746_93760__$1);
var G__93768 = null;
var G__93769 = (0);
var G__93770 = (0);
seq__93746_93750 = G__93767;
chunk__93747_93751 = G__93768;
count__93748_93752 = G__93769;
i__93749_93753 = G__93770;
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
var args93771 = [];
var len__26896__auto___93778 = arguments.length;
var i__26897__auto___93779 = (0);
while(true){
if((i__26897__auto___93779 < len__26896__auto___93778)){
args93771.push((arguments[i__26897__auto___93779]));

var G__93780 = (i__26897__auto___93779 + (1));
i__26897__auto___93779 = G__93780;
continue;
} else {
}
break;
}

var G__93773 = args93771.length;
switch (G__93773) {
case 1:
return dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args93771.length)].join('')));

}
});

dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$1 = (function (state){
return dynomics.ui.ui.add_keybindings.call(null,state,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990)], null)));
});

dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$2 = (function (state,tools){
return cljs.core.reduce.call(null,(function (r,p__93774){
var vec__93775 = p__93774;
var k = cljs.core.nth.call(null,vec__93775,(0),null);
var map__93776 = cljs.core.nth.call(null,vec__93775,(1),null);
var map__93776__$1 = ((((!((map__93776 == null)))?((((map__93776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93776):map__93776);
var f = cljs.core.get.call(null,map__93776__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var kb = cljs.core.get.call(null,map__93776__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
var naym = cljs.core.get.call(null,map__93776__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var tools__$1 = cljs.core.get.call(null,map__93776__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
if(cljs.core.truth_(f)){
return cljs.core.assoc_in.call(null,r,dynomics.ui.ui.make_kb_path.call(null,kb),((function (vec__93775,k,map__93776,map__93776__$1,f,kb,naym,tools__$1){
return (function (s){
cljs.core.println.call(null,naym);

return ((cljs.core.delay_QMARK_.call(null,f))?cljs.core.deref.call(null,f):f).call(null,s);
});})(vec__93775,k,map__93776,map__93776__$1,f,kb,naym,tools__$1))
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
dynomics.ui.ui.toggle_select = (function dynomics$ui$ui$toggle_select(state,p__93782){
var map__93785 = p__93782;
var map__93785__$1 = ((((!((map__93785 == null)))?((((map__93785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93785):map__93785);
var p = cljs.core.get.call(null,map__93785__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__93785__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__93785__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return dynomics.space.core.add_curve_between_nodes.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),((function (map__93785,map__93785__$1,p,id,path){
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
});})(map__93785,map__93785__$1,p,id,path))
));
});
dynomics.ui.ui.end_move = (function dynomics$ui$ui$end_move(state){
cljs.core.println.call(null,"end move");

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),false,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
dynomics.ui.ui.toggle_select_curve = (function dynomics$ui$ui$toggle_select_curve(state,p__93787){
var map__93790 = p__93787;
var map__93790__$1 = ((((!((map__93790 == null)))?((((map__93790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93790):map__93790);
var p = cljs.core.get.call(null,map__93790__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__93790__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__93790__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"(de)select curve",path);

return dynomics.space.core.toggle_select_curve.call(null,state,path);
});
dynomics.ui.ui.toggle_active = (function dynomics$ui$ui$toggle_active(state,p__93792){
var map__93796 = p__93792;
var map__93796__$1 = ((((!((map__93796 == null)))?((((map__93796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93796):map__93796);
var vec__93797 = cljs.core.get.call(null,map__93796__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__93797,(0),null);
var y = cljs.core.nth.call(null,vec__93797,(1),null);
var id = cljs.core.get.call(null,map__93796__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__93796__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891)], null),((function (map__93796,map__93796__$1,vec__93797,x,y,id,path){
return (function (an){
var n = (function (){var or__25827__auto__ = an;
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.truth_(n.call(null,path))){
return cljs.core.disj.call(null,n,path);
} else {
return cljs.core.conj.call(null,n,path);
}
});})(map__93796,map__93796__$1,vec__93797,x,y,id,path))
);
});
/**
 * Returns the given state with the
 *   selected-nodes' positions saved
 *   to use for move offsets
 */
dynomics.ui.ui.where_they_were = (function dynomics$ui$ui$where_they_were(p__93799){
var map__93804 = p__93799;
var map__93804__$1 = ((((!((map__93804 == null)))?((((map__93804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93804):map__93804);
var state = map__93804__$1;
var map__93805 = cljs.core.get.call(null,map__93804__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__93805__$1 = ((((!((map__93805 == null)))?((((map__93805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93805):map__93805);
var space = map__93805__$1;
var selected_nodes = cljs.core.get.call(null,map__93805__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.reduce.call(null,((function (map__93804,map__93804__$1,state,map__93805,map__93805__$1,space,selected_nodes){
return (function (s,path){
return cljs.core.assoc_in.call(null,s,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position-at-start-of-move","position-at-start-of-move",530469056)),cljs.core.get_in.call(null,state,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position","position",-2011731912))));
});})(map__93804,map__93804__$1,state,map__93805,map__93805__$1,space,selected_nodes))
,state,cljs.core.remove.call(null,cljs.core.nil_QMARK_,selected_nodes));
});
/**
 * Select node to move
 */
dynomics.ui.ui.select_node_for_move = (function dynomics$ui$ui$select_node_for_move(state,p__93808){
var map__93811 = p__93808;
var map__93811__$1 = ((((!((map__93811 == null)))?((((map__93811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93811):map__93811);
var p = cljs.core.get.call(null,map__93811__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__93811__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"select node to move ",path);

return cljs.core.assoc.call(null,dynomics.ui.ui.where_they_were.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.conj,path),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position-when-selected","position-when-selected",1681219792)),cljs.core.get_in.call(null,state,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position","position",-2011731912))))),new cljs.core.Keyword(null,"mouse-position-at-start-of-move","mouse-position-at-start-of-move",1825524089),p,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
/**
 * Select curve to move
 */
dynomics.ui.ui.select_curve_for_move = (function dynomics$ui$ui$select_curve_for_move(state,p__93813){
var map__93816 = p__93813;
var map__93816__$1 = ((((!((map__93816 == null)))?((((map__93816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93816):map__93816);
var p = cljs.core.get.call(null,map__93816__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__93816__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"select curve for move ",path,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null)));

return cljs.core.assoc.call(null,dynomics.ui.ui.where_they_were.call(null,dynomics.space.core.toggle_select_curve.call(null,state,path)),new cljs.core.Keyword(null,"mouse-position-at-start-of-move","mouse-position-at-start-of-move",1825524089),p,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
/**
 * Select node
 */
dynomics.ui.ui.select_node = (function dynomics$ui$ui$select_node(state,p__93818){
var map__93821 = p__93818;
var map__93821__$1 = ((((!((map__93821 == null)))?((((map__93821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93821):map__93821);
var path = cljs.core.get.call(null,map__93821__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.conj,path);
});
/**
 * Select object
 */
dynomics.ui.ui.select_object = (function dynomics$ui$ui$select_object(state,p__93823){
var map__93826 = p__93823;
var map__93826__$1 = ((((!((map__93826 == null)))?((((map__93826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93826):map__93826);
var path = cljs.core.get.call(null,map__93826__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var tipe = cljs.core.get.call(null,map__93826__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
cljs.core.println.call(null,"select object",path,tipe);

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.Keyword(null,"curve","curve",-569677866),new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-space","selected-space",613834726)], null).call(null,tipe)], null),cljs.core.conj,path);
});
/**
 * Deselect object
 */
dynomics.ui.ui.deselect_object = (function dynomics$ui$ui$deselect_object(p__93828,p__93829){
var map__93838 = p__93828;
var map__93838__$1 = ((((!((map__93838 == null)))?((((map__93838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93838):map__93838);
var state = map__93838__$1;
var map__93839 = cljs.core.get.call(null,map__93838__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__93839__$1 = ((((!((map__93839 == null)))?((((map__93839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93839):map__93839);
var o = cljs.core.get.call(null,map__93839__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var map__93840 = cljs.core.get.call(null,map__93839__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__93840__$1 = ((((!((map__93840 == null)))?((((map__93840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93840):map__93840);
var p1 = cljs.core.get.call(null,map__93840__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var t1 = cljs.core.get.call(null,map__93840__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
var map__93841 = p__93829;
var map__93841__$1 = ((((!((map__93841 == null)))?((((map__93841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93841):map__93841);
var p2 = cljs.core.get.call(null,map__93841__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var t2 = cljs.core.get.call(null,map__93841__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
cljs.core.println.call(null,"deselect object",p1,t1,p2,t2);

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.Keyword(null,"curve","curve",-569677866),new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-space","selected-space",613834726)], null).call(null,(function (){var or__25827__auto__ = t1;
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return t2;
}
})())], null),cljs.core.disj,(function (){var or__25827__auto__ = p1;
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return p2;
}
})());
});
/**
 * Deselect node
 */
dynomics.ui.ui.deselect_node = (function dynomics$ui$ui$deselect_node(state,p__93846){
var map__93849 = p__93846;
var map__93849__$1 = ((((!((map__93849 == null)))?((((map__93849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93849):map__93849);
var path = cljs.core.get.call(null,map__93849__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.disj,path),new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),false,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115),false);
});
/**
 * Deselect curve
 */
dynomics.ui.ui.deselect_curve = (function dynomics$ui$ui$deselect_curve(state,p__93851){
var map__93854 = p__93851;
var map__93854__$1 = ((((!((map__93854 == null)))?((((map__93854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93854):map__93854);
var p = cljs.core.get.call(null,map__93854__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__93854__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.assoc.call(null,dynomics.space.core.deselect_curve.call(null,state,path),new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),false,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p);
});
dynomics.ui.ui.hide_context_menu = (function dynomics$ui$ui$hide_context_menu(state,event){
return cljs.core.assoc.call(null,dynomics.ui.ui.deselect_object.call(null,state,event),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),null,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
dynomics.ui.ui.show_context_menu = (function dynomics$ui$ui$show_context_menu(state,p__93856){
var map__93862 = p__93856;
var map__93862__$1 = ((((!((map__93862 == null)))?((((map__93862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93862):map__93862);
var event = map__93862__$1;
var ep = cljs.core.get.call(null,map__93862__$1,new cljs.core.Keyword(null,"position-local","position-local",250779944));
var mp = cljs.core.get.call(null,map__93862__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var o = cljs.core.get.call(null,map__93862__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
var context_menu = cljs.core.get.call(null,map__93862__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
cljs.core.println.call(null,"show cm",o);

return cljs.core.assoc.call(null,dynomics.ui.ui.add_keybindings.call(null,dynomics.ui.ui.select_object.call(null,state,event),cljs.core.map.call(null,((function (map__93862,map__93862__$1,event,ep,mp,o,context_menu){
return (function (p__93864){
var map__93865 = p__93864;
var map__93865__$1 = ((((!((map__93865 == null)))?((((map__93865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93865):map__93865);
var option = map__93865__$1;
var f = cljs.core.get.call(null,map__93865__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
if(cljs.core.truth_(f)){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.assoc,option,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.deref.call(null,f)], true, false);
} else {
return option;
}
});})(map__93862,map__93862__$1,event,ep,mp,o,context_menu))
,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"options","options",99638489),o], null)))),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__25827__auto__ = ep;
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return mp;
}
})(),new cljs.core.Keyword(null,"object","object",1474613949),o,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"options","options",99638489),o], null))], null));
});
dynomics.ui.ui.toggle_context_menu = (function dynomics$ui$ui$toggle_context_menu(p__93867,event){
var map__93870 = p__93867;
var map__93870__$1 = ((((!((map__93870 == null)))?((((map__93870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93870):map__93870);
var state = map__93870__$1;
var context_menu = cljs.core.get.call(null,map__93870__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
if(cljs.core.truth_(context_menu)){
return dynomics.ui.ui.hide_context_menu.call(null,state,event);
} else {
return dynomics.ui.ui.show_context_menu.call(null,state,event);
}
});
dynomics.ui.ui.toggle_left_panel = (function dynomics$ui$ui$toggle_left_panel(p__93872,event){
var map__93875 = p__93872;
var map__93875__$1 = ((((!((map__93875 == null)))?((((map__93875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93875):map__93875);
var state = map__93875__$1;
var left_panel_QMARK_ = cljs.core.get.call(null,map__93875__$1,new cljs.core.Keyword(null,"left-panel?","left-panel?",1385519317));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"left-panel?","left-panel?",1385519317),cljs.core.not.call(null,left_panel_QMARK_));
});
dynomics.ui.ui.switch_styles = (function dynomics$ui$ui$switch_styles(p__93877,_){
var map__93880 = p__93877;
var map__93880__$1 = ((((!((map__93880 == null)))?((((map__93880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93880):map__93880);
var state = map__93880__$1;
var style = cljs.core.get.call(null,map__93880__$1,new cljs.core.Keyword(null,"style","style",-496642736));
cljs.core.println.call(null,"switch style",style);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.call(null,style,new cljs.core.Keyword(null,"light","light",1918998747)))?new cljs.core.Keyword(null,"dark","dark",1818973999):new cljs.core.Keyword(null,"light","light",1918998747)));
});
dynomics.ui.ui.relative_to_cursor = (function dynomics$ui$ui$relative_to_cursor(var_args){
var args93882 = [];
var len__26896__auto___93885 = arguments.length;
var i__26897__auto___93886 = (0);
while(true){
if((i__26897__auto___93886 < len__26896__auto___93885)){
args93882.push((arguments[i__26897__auto___93886]));

var G__93887 = (i__26897__auto___93886 + (1));
i__26897__auto___93886 = G__93887;
continue;
} else {
}
break;
}

var G__93884 = args93882.length;
switch (G__93884) {
case 3:
return dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args93882.length)].join('')));

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
dynomics.ui.ui.move_objects = (function dynomics$ui$ui$move_objects(p__93889,p__93890){
var map__93900 = p__93889;
var map__93900__$1 = ((((!((map__93900 == null)))?((((map__93900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93900):map__93900);
var state = map__93900__$1;
var map__93901 = cljs.core.get.call(null,map__93900__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__93901__$1 = ((((!((map__93901 == null)))?((((map__93901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93901):map__93901);
var space = map__93901__$1;
var selected_nodes = cljs.core.get.call(null,map__93901__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var zoom = cljs.core.get.call(null,map__93901__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__93902 = p__93890;
var map__93902__$1 = ((((!((map__93902 == null)))?((((map__93902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93902):map__93902);
var vec__93903 = cljs.core.get.call(null,map__93902__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__93903,(0),null);
var y = cljs.core.nth.call(null,vec__93903,(1),null);
var ck = cljs.core.get.call(null,map__93902__$1,new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989));
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,((function (map__93900,map__93900__$1,state,map__93901,map__93901__$1,space,selected_nodes,zoom,map__93902,map__93902__$1,vec__93903,x,y,ck){
return (function (r,path){
var tfn = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"connection","connection",-123599300),cljs.core.get_in.call(null,state,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"point","point",1813198264))))?(cljs.core.truth_(ck)?dynomics.space.core.to_space:dynomics.space.core.mirror_node):((function (map__93900,map__93900__$1,state,map__93901,map__93901__$1,space,selected_nodes,zoom,map__93902,map__93902__$1,vec__93903,x,y,ck){
return (function (p,pth,_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,dynomics.ui.ui.relative_to_cursor.call(null,p,pth,state)], null)], null);
});})(map__93900,map__93900__$1,state,map__93901,map__93901__$1,space,selected_nodes,zoom,map__93902,map__93902__$1,vec__93903,x,y,ck))
);
return cljs.core.reduce.call(null,((function (tfn,map__93900,map__93900__$1,state,map__93901,map__93901__$1,space,selected_nodes,zoom,map__93902,map__93902__$1,vec__93903,x,y,ck){
return (function (r__$1,p__93907){
var vec__93908 = p__93907;
var cpath = cljs.core.nth.call(null,vec__93908,(0),null);
var cpoint = cljs.core.nth.call(null,vec__93908,(1),null);
return cljs.core.assoc_in.call(null,r__$1,cljs.core.conj.call(null,cpath,new cljs.core.Keyword(null,"position","position",-2011731912)),cpoint);
});})(tfn,map__93900,map__93900__$1,state,map__93901,map__93901__$1,space,selected_nodes,zoom,map__93902,map__93902__$1,vec__93903,x,y,ck))
,r,tfn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),path,space));
});})(map__93900,map__93900__$1,state,map__93901,map__93901__$1,space,selected_nodes,zoom,map__93902,map__93902__$1,vec__93903,x,y,ck))
,state,selected_nodes),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Pan
 */
dynomics.ui.ui.pan = (function dynomics$ui$ui$pan(p__93909,p__93910){
var map__93916 = p__93909;
var map__93916__$1 = ((((!((map__93916 == null)))?((((map__93916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93916):map__93916);
var state = map__93916__$1;
var pp = cljs.core.get.call(null,map__93916__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var pan__$1 = cljs.core.get.call(null,map__93916__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var sp = cljs.core.get.call(null,map__93916__$1,new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305));
var zoom = cljs.core.get.call(null,map__93916__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__93917 = p__93910;
var map__93917__$1 = ((((!((map__93917 == null)))?((((map__93917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93917):map__93917);
var p = cljs.core.get.call(null,map__93917__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var pl = cljs.core.get.call(null,map__93917__$1,new cljs.core.Keyword(null,"position-local","position-local",250779944));
var vec__93918 = cljs.core.get.call(null,map__93917__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__93918,(0),null);
var p2 = cljs.core.nth.call(null,vec__93918,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p,new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"pan","pan",-307712792),cljs.core.map.call(null,cljs.core._,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,((1) / zoom)),p2),sp));
});
/**
 * Start zoom
 */
dynomics.ui.ui.start_zoom = (function dynomics$ui$ui$start_zoom(p__93921,p__93922){
var map__93928 = p__93921;
var map__93928__$1 = ((((!((map__93928 == null)))?((((map__93928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93928):map__93928);
var state = map__93928__$1;
var zoom = cljs.core.get.call(null,map__93928__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var pz = cljs.core.get.call(null,map__93928__$1,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303));
var map__93929 = p__93922;
var map__93929__$1 = ((((!((map__93929 == null)))?((((map__93929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93929):map__93929);
var p = cljs.core.get.call(null,map__93929__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__93930 = cljs.core.get.call(null,map__93929__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__93930,(0),null);
var p2 = cljs.core.nth.call(null,vec__93930,(1),null);
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
dynomics.ui.ui.zoom = (function dynomics$ui$ui$zoom(p__93933,p__93934){
var map__93940 = p__93933;
var map__93940__$1 = ((((!((map__93940 == null)))?((((map__93940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93940):map__93940);
var state = map__93940__$1;
var zoom__$1 = cljs.core.get.call(null,map__93940__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var pan = cljs.core.get.call(null,map__93940__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var sp = cljs.core.get.call(null,map__93940__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var map__93941 = p__93934;
var map__93941__$1 = ((((!((map__93941 == null)))?((((map__93941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93941):map__93941);
var dy = cljs.core.get.call(null,map__93941__$1,new cljs.core.Keyword(null,"deltaY","deltaY",-879493966));
var p = cljs.core.get.call(null,map__93941__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__93942 = cljs.core.get.call(null,map__93941__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__93942,(0),null);
var p2 = cljs.core.nth.call(null,vec__93942,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(function (){var x__26158__auto__ = 0.5;
var y__26159__auto__ = (zoom__$1 + (-0.01 * dy));
return ((x__26158__auto__ > y__26159__auto__) ? x__26158__auto__ : y__26159__auto__);
})(),new cljs.core.Keyword(null,"pan","pan",-307712792),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(-1)),sp),new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),p2);
});
/**
 * Start move objects
 */
dynomics.ui.ui.start_move = (function dynomics$ui$ui$start_move(p__93945,event){
var map__93948 = p__93945;
var map__93948__$1 = ((((!((map__93948 == null)))?((((map__93948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93948):map__93948);
var state = map__93948__$1;
var pan_zoom_QMARK_ = cljs.core.get.call(null,map__93948__$1,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),true);
});
/**
 * Move
 */
dynomics.ui.ui.move_cursor = (function dynomics$ui$ui$move_cursor(p__93950,p__93951){
var map__93957 = p__93950;
var map__93957__$1 = ((((!((map__93957 == null)))?((((map__93957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93957):map__93957);
var state = map__93957__$1;
var zoom = cljs.core.get.call(null,map__93957__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__93958 = p__93951;
var map__93958__$1 = ((((!((map__93958 == null)))?((((map__93958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93958):map__93958);
var p = cljs.core.get.call(null,map__93958__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__93959 = cljs.core.get.call(null,map__93958__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__93959,(0),null);
var p2 = cljs.core.nth.call(null,vec__93959,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305),p1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p1);
});
/**
 * Start pan
 */
dynomics.ui.ui.start_pan = (function dynomics$ui$ui$start_pan(p__93962,p__93963){
var map__93969 = p__93962;
var map__93969__$1 = ((((!((map__93969 == null)))?((((map__93969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93969):map__93969);
var state = map__93969__$1;
var zoom = cljs.core.get.call(null,map__93969__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__93970 = p__93963;
var map__93970__$1 = ((((!((map__93970 == null)))?((((map__93970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93970):map__93970);
var p = cljs.core.get.call(null,map__93970__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__93971 = cljs.core.get.call(null,map__93970__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__93971,(0),null);
var p2 = cljs.core.nth.call(null,vec__93971,(1),null);
cljs.core.println.call(null,"start pan",p,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492).cljs$core$IFn$_invoke$arity$1(state));

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),true,new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305),p1);
});
/**
 * End pan
 */
dynomics.ui.ui.end_pan = (function dynomics$ui$ui$end_pan(state,p__93974){
var map__93977 = p__93974;
var map__93977__$1 = ((((!((map__93977 == null)))?((((map__93977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93977):map__93977);
var p = cljs.core.get.call(null,map__93977__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p);
});
/**
 * Add node
 */
dynomics.ui.ui.add_node = (function dynomics$ui$ui$add_node(state,p__93979){
var map__93982 = p__93979;
var map__93982__$1 = ((((!((map__93982 == null)))?((((map__93982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93982):map__93982);
var p = cljs.core.get.call(null,map__93982__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return dynomics.space.core.add_node.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"node-position","node-position",-542959703),p));
});
dynomics.ui.ui.connect_nodes = (function dynomics$ui$ui$connect_nodes(state,p__93984){
var map__93988 = p__93984;
var map__93988__$1 = ((((!((map__93988 == null)))?((((map__93988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93988):map__93988);
var vec__93989 = cljs.core.get.call(null,map__93988__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__93989,(0),null);
var y = cljs.core.nth.call(null,vec__93989,(1),null);
var id = cljs.core.get.call(null,map__93988__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__93988__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
}),(function (){var or__25827__auto__ = s;
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),keyz);
}));
});
});
dynomics.ui.ui.set_node_type = (function dynomics$ui$ui$set_node_type(state,p__93991){
var map__93994 = p__93991;
var map__93994__$1 = ((((!((map__93994 == null)))?((((map__93994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93994):map__93994);
var id = cljs.core.get.call(null,map__93994__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return dynomics.space.core.set_node_type.call(null,id).call(null,state);
});
dynomics.ui.ui.make_new_node = (function dynomics$ui$ui$make_new_node(p__93996,p__93997){
var map__94004 = p__93996;
var map__94004__$1 = ((((!((map__94004 == null)))?((((map__94004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__94004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94004):map__94004);
var state = map__94004__$1;
var making_node_QMARK_ = cljs.core.get.call(null,map__94004__$1,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115));
var map__94005 = p__93997;
var map__94005__$1 = ((((!((map__94005 == null)))?((((map__94005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__94005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94005):map__94005);
var event = map__94005__$1;
var p = cljs.core.get.call(null,map__94005__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__94005__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.println.call(null,"make node type",id);

if(cljs.core.truth_(making_node_QMARK_)){
return state;
} else {
var map__94008 = dynomics.space.core.add_node.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),true,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115),true,new cljs.core.Keyword(null,"node-position","node-position",-542959703),p,new cljs.core.Keyword(null,"selected-node-type","selected-node-type",-1717725489),id));
var map__94008__$1 = ((((!((map__94008 == null)))?((((map__94008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__94008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94008):map__94008);
var s = map__94008__$1;
var n = cljs.core.get.call(null,map__94008__$1,new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673));
return dynomics.ui.ui.select_node_for_move.call(null,s,cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),n], null)));
}
});
/**
 * Returns a function var to handle the given event
 */
dynomics.ui.ui.match_event = (function dynomics$ui$ui$match_event(state,event){
try{if(((!((event == null)))?((((event.cljs$lang$protocol_mask$partition0$ & (256))) || (event.cljs$core$ILookup$))?true:(((!event.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event))){
try{var event_verb__94233 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94233,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_shift_key_QMARK___94236 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___94236 === true)){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"node","node",581201198))){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select","dynomics.ui.ui/toggle-select",-1932459058,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select","toggle-select",-120958040,null),"src/dynomics/ui/ui.cljs",16,1,255,257,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select)?dynomics.ui.ui.toggle_select.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94405){if((e94405 instanceof Error)){
var e__39798__auto__ = e94405;
if((e__39798__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto__;
}
} else {
throw e94405;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94404){if((e94404 instanceof Error)){
var e__39798__auto__ = e94404;
if((e__39798__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto__;
}
} else {
throw e94404;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94294){if((e94294 instanceof Error)){
var e__39798__auto__ = e94294;
if((e__39798__auto__ === cljs.core.match.backtrack)){
try{var event_verb__94233 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94233,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"node","node",581201198))){
try{var event_alt_key_QMARK___94237 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"alt-key?","alt-key?",234827606),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_alt_key_QMARK___94237 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_active;},new cljs.core.Symbol("dynomics.ui.ui","toggle-active","dynomics.ui.ui/toggle-active",167070151,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-active","toggle-active",368885345,null),"src/dynomics/ui/ui.cljs",16,1,278,280,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"description","description",-1428560544),"(de)activate"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_active)?dynomics.ui.ui.toggle_active.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94403){if((e94403 instanceof Error)){
var e__39798__auto____$1 = e94403;
if((e__39798__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$1;
}
} else {
throw e94403;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94393){if((e94393 instanceof Error)){
var e__39798__auto____$1 = e94393;
if((e__39798__auto____$1 === cljs.core.match.backtrack)){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451))){
try{var event_button__94234 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_button__94234 === (0))){
try{var event_id__94235 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_id__94235,new cljs.core.Keyword(null,"add-node-button","add-node-button",-722090690))){
return new cljs.core.Var(function(){return dynomics.ui.ui.add_node;},new cljs.core.Symbol("dynomics.ui.ui","add-node","dynomics.ui.ui/add-node",175703617,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"add-node","add-node",-428722461,null),"src/dynomics/ui/ui.cljs",11,1,537,541,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Add node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912)], null)], null)),"Add node",(cljs.core.truth_(dynomics.ui.ui.add_node)?dynomics.ui.ui.add_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94402){if((e94402 instanceof Error)){
var e__39798__auto____$2 = e94402;
if((e__39798__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$2;
}
} else {
throw e94402;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94401){if((e94401 instanceof Error)){
var e__39798__auto____$2 = e94401;
if((e__39798__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$2;
}
} else {
throw e94401;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94394){if((e94394 instanceof Error)){
var e__39798__auto____$2 = e94394;
if((e__39798__auto____$2 === cljs.core.match.backtrack)){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"node","node",581201198))){
try{var event_button__94234 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_button__94234 === (2))){
return new cljs.core.Var(function(){return dynomics.ui.ui.show_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","show-context-menu","dynomics.ui.ui/show-context-menu",-497950288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"show-context-menu","show-context-menu",374878238,null),"src/dynomics/ui/ui.cljs",20,1,390,392,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"description","description",-1428560544),"Show context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"ep","ep",-1371606811,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Symbol(null,"mp","mp",1159923684,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.show_context_menu)?dynomics.ui.ui.show_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94400){if((e94400 instanceof Error)){
var e__39798__auto____$3 = e94400;
if((e__39798__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$3;
}
} else {
throw e94400;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94395){if((e94395 instanceof Error)){
var e__39798__auto____$3 = e94395;
if((e__39798__auto____$3 === cljs.core.match.backtrack)){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_button__94234 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_button__94234 === (2))){
return new cljs.core.Var(function(){return dynomics.ui.ui.show_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","show-context-menu","dynomics.ui.ui/show-context-menu",-497950288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"show-context-menu","show-context-menu",374878238,null),"src/dynomics/ui/ui.cljs",20,1,390,392,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"description","description",-1428560544),"Show context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"ep","ep",-1371606811,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Symbol(null,"mp","mp",1159923684,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.show_context_menu)?dynomics.ui.ui.show_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94399){if((e94399 instanceof Error)){
var e__39798__auto____$4 = e94399;
if((e__39798__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$4;
}
} else {
throw e94399;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94396){if((e94396 instanceof Error)){
var e__39798__auto____$4 = e94396;
if((e__39798__auto____$4 === cljs.core.match.backtrack)){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"space","space",348133475))){
try{var event_button__94234 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_button__94234 === (2))){
return new cljs.core.Var(function(){return dynomics.ui.ui.show_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","show-context-menu","dynomics.ui.ui/show-context-menu",-497950288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"show-context-menu","show-context-menu",374878238,null),"src/dynomics/ui/ui.cljs",20,1,390,392,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"description","description",-1428560544),"Show context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"ep","ep",-1371606811,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Symbol(null,"mp","mp",1159923684,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.show_context_menu)?dynomics.ui.ui.show_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94398){if((e94398 instanceof Error)){
var e__39798__auto____$5 = e94398;
if((e__39798__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$5;
}
} else {
throw e94398;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94397){if((e94397 instanceof Error)){
var e__39798__auto____$5 = e94397;
if((e__39798__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$5;
}
} else {
throw e94397;

}
}} else {
throw e__39798__auto____$4;
}
} else {
throw e94396;

}
}} else {
throw e__39798__auto____$3;
}
} else {
throw e94395;

}
}} else {
throw e__39798__auto____$2;
}
} else {
throw e94394;

}
}} else {
throw e__39798__auto____$1;
}
} else {
throw e94393;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94295){if((e94295 instanceof Error)){
var e__39798__auto____$1 = e94295;
if((e__39798__auto____$1 === cljs.core.match.backtrack)){
try{var event_verb__94233 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94233,new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964))){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451))){
return new cljs.core.Var(function(){return dynomics.ui.ui.hide_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","hide-context-menu","dynomics.ui.ui/hide-context-menu",-829551965,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"hide-context-menu","hide-context-menu",-210420991,null),"src/dynomics/ui/ui.cljs",20,1,381,383,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Hide context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.hide_context_menu)?dynomics.ui.ui.hide_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94392){if((e94392 instanceof Error)){
var e__39798__auto____$2 = e94392;
if((e__39798__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$2;
}
} else {
throw e94392;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94296){if((e94296 instanceof Error)){
var e__39798__auto____$2 = e94296;
if((e__39798__auto____$2 === cljs.core.match.backtrack)){
try{var event_verb__94233 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94233,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_shift_key_QMARK___94236 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___94236 === false)){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"node","node",581201198))){
return new cljs.core.Var(function(){return dynomics.ui.ui.select_node_for_move;},new cljs.core.Symbol("dynomics.ui.ui","select-node-for-move","dynomics.ui.ui/select-node-for-move",1244197998,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"select-node-for-move","select-node-for-move",-1238252352,null),"src/dynomics/ui/ui.cljs",23,1,299,303,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"description","description",-1428560544),"Select node to move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null)], null)),"Select node to move",(cljs.core.truth_(dynomics.ui.ui.select_node_for_move)?dynomics.ui.ui.select_node_for_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94389){if((e94389 instanceof Error)){
var e__39798__auto____$3 = e94389;
if((e__39798__auto____$3 === cljs.core.match.backtrack)){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_buttons__94232 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__94232 === (1))){
return new cljs.core.Var(function(){return dynomics.ui.ui.select_curve_for_move;},new cljs.core.Symbol("dynomics.ui.ui","select-curve-for-move","dynomics.ui.ui/select-curve-for-move",67176701,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"select-curve-for-move","select-curve-for-move",268851359,null),"src/dynomics/ui/ui.cljs",24,1,314,318,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-curve","phase-space-curve",-744456807),new cljs.core.Keyword(null,"description","description",-1428560544),"Select curve to move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null)], null)),"Select curve to move",(cljs.core.truth_(dynomics.ui.ui.select_curve_for_move)?dynomics.ui.ui.select_curve_for_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94391){if((e94391 instanceof Error)){
var e__39798__auto____$4 = e94391;
if((e__39798__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$4;
}
} else {
throw e94391;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94390){if((e94390 instanceof Error)){
var e__39798__auto____$4 = e94390;
if((e__39798__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$4;
}
} else {
throw e94390;

}
}} else {
throw e__39798__auto____$3;
}
} else {
throw e94389;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94388){if((e94388 instanceof Error)){
var e__39798__auto____$3 = e94388;
if((e__39798__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$3;
}
} else {
throw e94388;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94297){if((e94297 instanceof Error)){
var e__39798__auto____$3 = e94297;
if((e__39798__auto____$3 === cljs.core.match.backtrack)){
try{var event_verb__94233 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94233,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_shift_key_QMARK___94236 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___94236 === false)){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"node","node",581201198))){
return new cljs.core.Var(function(){return dynomics.ui.ui.deselect_node;},new cljs.core.Symbol("dynomics.ui.ui","deselect-node","dynomics.ui.ui/deselect-node",-1231289549,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"deselect-node","deselect-node",-2105191523,null),"src/dynomics/ui/ui.cljs",16,1,357,361,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"description","description",-1428560544),"Deselect node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null)], null)),"Deselect node",(cljs.core.truth_(dynomics.ui.ui.deselect_node)?dynomics.ui.ui.deselect_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94386){if((e94386 instanceof Error)){
var e__39798__auto____$4 = e94386;
if((e__39798__auto____$4 === cljs.core.match.backtrack)){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"curve","curve",-569677866))){
return new cljs.core.Var(function(){return dynomics.ui.ui.deselect_curve;},new cljs.core.Symbol("dynomics.ui.ui","deselect-curve","dynomics.ui.ui/deselect-curve",-758858976,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"deselect-curve","deselect-curve",-29652158,null),"src/dynomics/ui/ui.cljs",17,1,369,373,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Deselect curve"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null)], null)),"Deselect curve",(cljs.core.truth_(dynomics.ui.ui.deselect_curve)?dynomics.ui.ui.deselect_curve.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94387){if((e94387 instanceof Error)){
var e__39798__auto____$5 = e94387;
if((e__39798__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$5;
}
} else {
throw e94387;

}
}} else {
throw e__39798__auto____$4;
}
} else {
throw e94386;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94385){if((e94385 instanceof Error)){
var e__39798__auto____$4 = e94385;
if((e__39798__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$4;
}
} else {
throw e94385;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94298){if((e94298 instanceof Error)){
var e__39798__auto____$4 = e94298;
if((e__39798__auto____$4 === cljs.core.match.backtrack)){
try{var event_verb__94233 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94233,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223))){
try{var event_buttons__94232 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__94232 === (1))){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"node","node",581201198))){
try{var event_shift_key_QMARK___94236 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___94236 === false)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___94242 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___94242 === false)){
try{var state_moving_things_QMARK___94243 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___94243 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_move;},new cljs.core.Symbol("dynomics.ui.ui","start-move","dynomics.ui.ui/start-move",-1875395781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-move","start-move",-331822183,null),"src/dynomics/ui/ui.cljs",13,1,497,501,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pan-zoom?","pan-zoom?",488009224,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)),"Start move objects",(cljs.core.truth_(dynomics.ui.ui.start_move)?dynomics.ui.ui.start_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94384){if((e94384 instanceof Error)){
var e__39798__auto____$5 = e94384;
if((e__39798__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$5;
}
} else {
throw e94384;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94383){if((e94383 instanceof Error)){
var e__39798__auto____$5 = e94383;
if((e__39798__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$5;
}
} else {
throw e94383;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94381){if((e94381 instanceof Error)){
var e__39798__auto____$5 = e94381;
if((e__39798__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$5;
}
} else {
throw e94381;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94380){if((e94380 instanceof Error)){
var e__39798__auto____$5 = e94380;
if((e__39798__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$5;
}
} else {
throw e94380;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94352){if((e94352 instanceof Error)){
var e__39798__auto____$5 = e94352;
if((e__39798__auto____$5 === cljs.core.match.backtrack)){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_shift_key_QMARK___94236 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___94236 === false)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___94247 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___94247 === false)){
try{var state_moving_things_QMARK___94248 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___94248 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_move;},new cljs.core.Symbol("dynomics.ui.ui","start-move","dynomics.ui.ui/start-move",-1875395781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-move","start-move",-331822183,null),"src/dynomics/ui/ui.cljs",13,1,497,501,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pan-zoom?","pan-zoom?",488009224,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)),"Start move objects",(cljs.core.truth_(dynomics.ui.ui.start_move)?dynomics.ui.ui.start_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94379){if((e94379 instanceof Error)){
var e__39798__auto____$6 = e94379;
if((e__39798__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$6;
}
} else {
throw e94379;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94378){if((e94378 instanceof Error)){
var e__39798__auto____$6 = e94378;
if((e__39798__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$6;
}
} else {
throw e94378;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94376){if((e94376 instanceof Error)){
var e__39798__auto____$6 = e94376;
if((e__39798__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$6;
}
} else {
throw e94376;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94375){if((e94375 instanceof Error)){
var e__39798__auto____$6 = e94375;
if((e__39798__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$6;
}
} else {
throw e94375;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94353){if((e94353 instanceof Error)){
var e__39798__auto____$6 = e94353;
if((e__39798__auto____$6 === cljs.core.match.backtrack)){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"space","space",348133475))){
try{var event_shift_key_QMARK___94236 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___94236 === false)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___94252 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___94252 === false)){
try{var state_moving_things_QMARK___94253 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___94253 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_move;},new cljs.core.Symbol("dynomics.ui.ui","start-move","dynomics.ui.ui/start-move",-1875395781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-move","start-move",-331822183,null),"src/dynomics/ui/ui.cljs",13,1,497,501,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pan-zoom?","pan-zoom?",488009224,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)),"Start move objects",(cljs.core.truth_(dynomics.ui.ui.start_move)?dynomics.ui.ui.start_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94374){if((e94374 instanceof Error)){
var e__39798__auto____$7 = e94374;
if((e__39798__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$7;
}
} else {
throw e94374;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94373){if((e94373 instanceof Error)){
var e__39798__auto____$7 = e94373;
if((e__39798__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$7;
}
} else {
throw e94373;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94371){if((e94371 instanceof Error)){
var e__39798__auto____$7 = e94371;
if((e__39798__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$7;
}
} else {
throw e94371;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94370){if((e94370 instanceof Error)){
var e__39798__auto____$7 = e94370;
if((e__39798__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$7;
}
} else {
throw e94370;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94354){if((e94354 instanceof Error)){
var e__39798__auto____$7 = e94354;
if((e__39798__auto____$7 === cljs.core.match.backtrack)){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"node","node",581201198))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___94257 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___94257 === false)){
try{var state_moving_things_QMARK___94258 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___94258 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_objects;},new cljs.core.Symbol("dynomics.ui.ui","move-objects","dynomics.ui.ui/move-objects",1652444350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-objects","move-objects",1315020048,null),"src/dynomics/ui/ui.cljs",15,1,439,443,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"ck","ck",929899510,null),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989)], true, false)], null)),"Move objects",(cljs.core.truth_(dynomics.ui.ui.move_objects)?dynomics.ui.ui.move_objects.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94369){if((e94369 instanceof Error)){
var e__39798__auto____$8 = e94369;
if((e__39798__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$8;
}
} else {
throw e94369;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94368){if((e94368 instanceof Error)){
var e__39798__auto____$8 = e94368;
if((e__39798__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$8;
}
} else {
throw e94368;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94366){if((e94366 instanceof Error)){
var e__39798__auto____$8 = e94366;
if((e__39798__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$8;
}
} else {
throw e94366;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94355){if((e94355 instanceof Error)){
var e__39798__auto____$8 = e94355;
if((e__39798__auto____$8 === cljs.core.match.backtrack)){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___94262 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___94262 === false)){
try{var state_moving_things_QMARK___94263 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___94263 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_objects;},new cljs.core.Symbol("dynomics.ui.ui","move-objects","dynomics.ui.ui/move-objects",1652444350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-objects","move-objects",1315020048,null),"src/dynomics/ui/ui.cljs",15,1,439,443,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"ck","ck",929899510,null),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989)], true, false)], null)),"Move objects",(cljs.core.truth_(dynomics.ui.ui.move_objects)?dynomics.ui.ui.move_objects.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94365){if((e94365 instanceof Error)){
var e__39798__auto____$9 = e94365;
if((e__39798__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$9;
}
} else {
throw e94365;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94364){if((e94364 instanceof Error)){
var e__39798__auto____$9 = e94364;
if((e__39798__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$9;
}
} else {
throw e94364;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94362){if((e94362 instanceof Error)){
var e__39798__auto____$9 = e94362;
if((e__39798__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$9;
}
} else {
throw e94362;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94356){if((e94356 instanceof Error)){
var e__39798__auto____$9 = e94356;
if((e__39798__auto____$9 === cljs.core.match.backtrack)){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___94267 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___94267 === false)){
try{var state_moving_things_QMARK___94268 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___94268 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_objects;},new cljs.core.Symbol("dynomics.ui.ui","move-objects","dynomics.ui.ui/move-objects",1652444350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-objects","move-objects",1315020048,null),"src/dynomics/ui/ui.cljs",15,1,439,443,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"ck","ck",929899510,null),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989)], true, false)], null)),"Move objects",(cljs.core.truth_(dynomics.ui.ui.move_objects)?dynomics.ui.ui.move_objects.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94361){if((e94361 instanceof Error)){
var e__39798__auto____$10 = e94361;
if((e__39798__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$10;
}
} else {
throw e94361;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94360){if((e94360 instanceof Error)){
var e__39798__auto____$10 = e94360;
if((e__39798__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$10;
}
} else {
throw e94360;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94358){if((e94358 instanceof Error)){
var e__39798__auto____$10 = e94358;
if((e__39798__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$10;
}
} else {
throw e94358;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94357){if((e94357 instanceof Error)){
var e__39798__auto____$10 = e94357;
if((e__39798__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$10;
}
} else {
throw e94357;

}
}} else {
throw e__39798__auto____$9;
}
} else {
throw e94356;

}
}} else {
throw e__39798__auto____$8;
}
} else {
throw e94355;

}
}} else {
throw e__39798__auto____$7;
}
} else {
throw e94354;

}
}} else {
throw e__39798__auto____$6;
}
} else {
throw e94353;

}
}} else {
throw e__39798__auto____$5;
}
} else {
throw e94352;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94338){if((e94338 instanceof Error)){
var e__39798__auto____$5 = e94338;
if((e__39798__auto____$5 === cljs.core.match.backtrack)){
try{var event_buttons__94232 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__94232 === (0))){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"node","node",581201198))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___94271 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___94271 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"src/dynomics/ui/ui.cljs",14,1,505,509,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94351){if((e94351 instanceof Error)){
var e__39798__auto____$6 = e94351;
if((e__39798__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$6;
}
} else {
throw e94351;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94349){if((e94349 instanceof Error)){
var e__39798__auto____$6 = e94349;
if((e__39798__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$6;
}
} else {
throw e94349;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94340){if((e94340 instanceof Error)){
var e__39798__auto____$6 = e94340;
if((e__39798__auto____$6 === cljs.core.match.backtrack)){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___94274 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___94274 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"src/dynomics/ui/ui.cljs",14,1,505,509,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94348){if((e94348 instanceof Error)){
var e__39798__auto____$7 = e94348;
if((e__39798__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$7;
}
} else {
throw e94348;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94346){if((e94346 instanceof Error)){
var e__39798__auto____$7 = e94346;
if((e__39798__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$7;
}
} else {
throw e94346;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94341){if((e94341 instanceof Error)){
var e__39798__auto____$7 = e94341;
if((e__39798__auto____$7 === cljs.core.match.backtrack)){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___94277 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___94277 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"src/dynomics/ui/ui.cljs",14,1,505,509,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94345){if((e94345 instanceof Error)){
var e__39798__auto____$8 = e94345;
if((e__39798__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$8;
}
} else {
throw e94345;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94343){if((e94343 instanceof Error)){
var e__39798__auto____$8 = e94343;
if((e__39798__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$8;
}
} else {
throw e94343;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94342){if((e94342 instanceof Error)){
var e__39798__auto____$8 = e94342;
if((e__39798__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$8;
}
} else {
throw e94342;

}
}} else {
throw e__39798__auto____$7;
}
} else {
throw e94341;

}
}} else {
throw e__39798__auto____$6;
}
} else {
throw e94340;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94339){if((e94339 instanceof Error)){
var e__39798__auto____$6 = e94339;
if((e__39798__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$6;
}
} else {
throw e94339;

}
}} else {
throw e__39798__auto____$5;
}
} else {
throw e94338;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94299){if((e94299 instanceof Error)){
var e__39798__auto____$5 = e94299;
if((e__39798__auto____$5 === cljs.core.match.backtrack)){
try{var event_verb__94233 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94233,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_buttons__94232 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__94232 === (1))){
try{var event_shift_key_QMARK___94236 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___94236 === false)){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___94281 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___94281 === false)){
try{var state_moving_things_QMARK___94282 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___94282 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_pan;},new cljs.core.Symbol("dynomics.ui.ui","start-pan","dynomics.ui.ui/start-pan",-310203637,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-pan","start-pan",-778345239,null),"src/dynomics/ui/ui.cljs",12,1,515,519,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start pan"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false)], null)),"Start pan",(cljs.core.truth_(dynomics.ui.ui.start_pan)?dynomics.ui.ui.start_pan.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94337){if((e94337 instanceof Error)){
var e__39798__auto____$6 = e94337;
if((e__39798__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$6;
}
} else {
throw e94337;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94336){if((e94336 instanceof Error)){
var e__39798__auto____$6 = e94336;
if((e__39798__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$6;
}
} else {
throw e94336;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94334){if((e94334 instanceof Error)){
var e__39798__auto____$6 = e94334;
if((e__39798__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$6;
}
} else {
throw e94334;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94333){if((e94333 instanceof Error)){
var e__39798__auto____$6 = e94333;
if((e__39798__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$6;
}
} else {
throw e94333;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94332){if((e94332 instanceof Error)){
var e__39798__auto____$6 = e94332;
if((e__39798__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$6;
}
} else {
throw e94332;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94331){if((e94331 instanceof Error)){
var e__39798__auto____$6 = e94331;
if((e__39798__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$6;
}
} else {
throw e94331;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94300){if((e94300 instanceof Error)){
var e__39798__auto____$6 = e94300;
if((e__39798__auto____$6 === cljs.core.match.backtrack)){
try{var event_verb__94233 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94233,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223))){
try{var event_buttons__94232 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__94232 === (1))){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___94285 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___94285 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.pan;},new cljs.core.Symbol("dynomics.ui.ui","pan","dynomics.ui.ui/pan",1533936577,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"pan","pan",1332818735,null),"src/dynomics/ui/ui.cljs",6,1,458,462,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Pan"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"pp","pp",927842543,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"pan","pan",1332818735,null),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Symbol(null,"sp","sp",-1631085811,null),new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false)], null)),"Pan",(cljs.core.truth_(dynomics.ui.ui.pan)?dynomics.ui.ui.pan.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94330){if((e94330 instanceof Error)){
var e__39798__auto____$7 = e94330;
if((e__39798__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$7;
}
} else {
throw e94330;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94328){if((e94328 instanceof Error)){
var e__39798__auto____$7 = e94328;
if((e__39798__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$7;
}
} else {
throw e94328;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94327){if((e94327 instanceof Error)){
var e__39798__auto____$7 = e94327;
if((e__39798__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$7;
}
} else {
throw e94327;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94326){if((e94326 instanceof Error)){
var e__39798__auto____$7 = e94326;
if((e__39798__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$7;
}
} else {
throw e94326;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94301){if((e94301 instanceof Error)){
var e__39798__auto____$7 = e94301;
if((e__39798__auto____$7 === cljs.core.match.backtrack)){
try{var event_verb__94233 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94233,new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439))){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___94288 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___94288 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_zoom;},new cljs.core.Symbol("dynomics.ui.ui","start-zoom","dynomics.ui.ui/start-zoom",-413183448,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-zoom","start-zoom",-748395954,null),"src/dynomics/ui/ui.cljs",13,1,473,477,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start zoom"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false)], null)),"Start zoom",(cljs.core.truth_(dynomics.ui.ui.start_zoom)?dynomics.ui.ui.start_zoom.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94323){if((e94323 instanceof Error)){
var e__39798__auto____$8 = e94323;
if((e__39798__auto____$8 === cljs.core.match.backtrack)){
try{var state_pan_zoom_QMARK___94288 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,state_pan_zoom_QMARK___94288,new cljs.core.Keyword(null,"starting","starting",-1852141466))){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_zoom;},new cljs.core.Symbol("dynomics.ui.ui","start-zoom","dynomics.ui.ui/start-zoom",-413183448,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-zoom","start-zoom",-748395954,null),"src/dynomics/ui/ui.cljs",13,1,473,477,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start zoom"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false)], null)),"Start zoom",(cljs.core.truth_(dynomics.ui.ui.start_zoom)?dynomics.ui.ui.start_zoom.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94324){if((e94324 instanceof Error)){
var e__39798__auto____$9 = e94324;
if((e__39798__auto____$9 === cljs.core.match.backtrack)){
try{var state_pan_zoom_QMARK___94288 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___94288 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.zoom;},new cljs.core.Symbol("dynomics.ui.ui","zoom","dynomics.ui.ui/zoom",-926900565,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),"src/dynomics/ui/ui.cljs",7,1,484,488,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Zoom"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Symbol(null,"pan","pan",1332818735,null),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Symbol(null,"sp","sp",-1631085811,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"dy","dy",-934888526,null),new cljs.core.Keyword(null,"deltaY","deltaY",-879493966),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false)], null)),"Zoom",(cljs.core.truth_(dynomics.ui.ui.zoom)?dynomics.ui.ui.zoom.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94325){if((e94325 instanceof Error)){
var e__39798__auto____$10 = e94325;
if((e__39798__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$10;
}
} else {
throw e94325;

}
}} else {
throw e__39798__auto____$9;
}
} else {
throw e94324;

}
}} else {
throw e__39798__auto____$8;
}
} else {
throw e94323;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94321){if((e94321 instanceof Error)){
var e__39798__auto____$8 = e94321;
if((e__39798__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$8;
}
} else {
throw e94321;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94320){if((e94320 instanceof Error)){
var e__39798__auto____$8 = e94320;
if((e__39798__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$8;
}
} else {
throw e94320;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94302){if((e94302 instanceof Error)){
var e__39798__auto____$8 = e94302;
if((e__39798__auto____$8 === cljs.core.match.backtrack)){
try{var event_verb__94233 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94233,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_buttons__94232 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__94232 === (0))){
try{var event_shift_key_QMARK___94236 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___94236 === false)){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___94291 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___94291 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.end_pan;},new cljs.core.Symbol("dynomics.ui.ui","end-pan","dynomics.ui.ui/end-pan",-5094220,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"end-pan","end-pan",-474409646,null),"src/dynomics/ui/ui.cljs",10,1,527,531,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"End pan"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912)], null)], null)),"End pan",(cljs.core.truth_(dynomics.ui.ui.end_pan)?dynomics.ui.ui.end_pan.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94319){if((e94319 instanceof Error)){
var e__39798__auto____$9 = e94319;
if((e__39798__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$9;
}
} else {
throw e94319;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94317){if((e94317 instanceof Error)){
var e__39798__auto____$9 = e94317;
if((e__39798__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$9;
}
} else {
throw e94317;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94316){if((e94316 instanceof Error)){
var e__39798__auto____$9 = e94316;
if((e__39798__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$9;
}
} else {
throw e94316;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94315){if((e94315 instanceof Error)){
var e__39798__auto____$9 = e94315;
if((e__39798__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$9;
}
} else {
throw e94315;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94314){if((e94314 instanceof Error)){
var e__39798__auto____$9 = e94314;
if((e__39798__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$9;
}
} else {
throw e94314;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94303){if((e94303 instanceof Error)){
var e__39798__auto____$9 = e94303;
if((e__39798__auto____$9 === cljs.core.match.backtrack)){
try{var event_verb__94233 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94233,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_buttons__94232 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__94232 === (1))){
try{var event_shift_key_QMARK___94236 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___94236 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select_curve;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select-curve","dynomics.ui.ui/toggle-select-curve",1188080702,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select-curve","toggle-select-curve",1792572560,null),"src/dynomics/ui/ui.cljs",22,1,271,273,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select curve"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select_curve)?dynomics.ui.ui.toggle_select_curve.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94313){if((e94313 instanceof Error)){
var e__39798__auto____$10 = e94313;
if((e__39798__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$10;
}
} else {
throw e94313;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94312){if((e94312 instanceof Error)){
var e__39798__auto____$10 = e94312;
if((e__39798__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$10;
}
} else {
throw e94312;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94310){if((e94310 instanceof Error)){
var e__39798__auto____$10 = e94310;
if((e__39798__auto____$10 === cljs.core.match.backtrack)){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"node-type","node-type",129492462))){
return new cljs.core.Var(function(){return dynomics.ui.ui.set_node_type;},new cljs.core.Symbol("dynomics.ui.ui","set-node-type","dynomics.ui.ui/set-node-type",776460294,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"set-node-type","set-node-type",306219192,null),"src/dynomics/ui/ui.cljs",16,1,576,580,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"description","description",-1428560544),"Set node type "], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.set_node_type)?dynomics.ui.ui.set_node_type.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94311){if((e94311 instanceof Error)){
var e__39798__auto____$11 = e94311;
if((e__39798__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$11;
}
} else {
throw e94311;

}
}} else {
throw e__39798__auto____$10;
}
} else {
throw e94310;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94304){if((e94304 instanceof Error)){
var e__39798__auto____$10 = e94304;
if((e__39798__auto____$10 === cljs.core.match.backtrack)){
try{var event_verb__94233 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94233,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223))){
try{var event_buttons__94232 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__94232 === (1))){
try{var event_noun__94238 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94238,new cljs.core.Keyword(null,"node-type","node-type",129492462))){
return new cljs.core.Var(function(){return dynomics.ui.ui.make_new_node;},new cljs.core.Symbol("dynomics.ui.ui","make-new-node","dynomics.ui.ui/make-new-node",1777852426,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"make-new-node","make-new-node",2047793128,null),"src/dynomics/ui/ui.cljs",17,1,584,587,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"description","description",-1428560544),"Make new node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"making-node?","making-node?",-141094588,null),new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.make_new_node)?dynomics.ui.ui.make_new_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94309){if((e94309 instanceof Error)){
var e__39798__auto____$11 = e94309;
if((e__39798__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$11;
}
} else {
throw e94309;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94308){if((e94308 instanceof Error)){
var e__39798__auto____$11 = e94308;
if((e__39798__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$11;
}
} else {
throw e94308;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94305){if((e94305 instanceof Error)){
var e__39798__auto____$11 = e94305;
if((e__39798__auto____$11 === cljs.core.match.backtrack)){
try{var event_verb__94233 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94233,new cljs.core.Keyword(null,"keydown","keydown",-629268186))){
return (new cljs.core.Delay(((function (event_verb__94233,e__39798__auto____$11,e__39798__auto____$10,e__39798__auto____$9,e__39798__auto____$8,e__39798__auto____$7,e__39798__auto____$6,e__39798__auto____$5,e__39798__auto____$4,e__39798__auto____$3,e__39798__auto____$2,e__39798__auto____$1,e__39798__auto__){
return (function (){
return dynomics.ui.core.fn_for_event.call(null,state,event);
});})(event_verb__94233,e__39798__auto____$11,e__39798__auto____$10,e__39798__auto____$9,e__39798__auto____$8,e__39798__auto____$7,e__39798__auto____$6,e__39798__auto____$5,e__39798__auto____$4,e__39798__auto____$3,e__39798__auto____$2,e__39798__auto____$1,e__39798__auto__))
,null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94306){if((e94306 instanceof Error)){
var e__39798__auto____$12 = e94306;
if((e__39798__auto____$12 === cljs.core.match.backtrack)){
try{var event_verb__94233 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94233,new cljs.core.Keyword(null,"keyup","keyup",-794526927))){
return (new cljs.core.Delay(((function (event_verb__94233,e__39798__auto____$12,e__39798__auto____$11,e__39798__auto____$10,e__39798__auto____$9,e__39798__auto____$8,e__39798__auto____$7,e__39798__auto____$6,e__39798__auto____$5,e__39798__auto____$4,e__39798__auto____$3,e__39798__auto____$2,e__39798__auto____$1,e__39798__auto__){
return (function (){
return dynomics.ui.core.fn_for_event.call(null,state,event);
});})(event_verb__94233,e__39798__auto____$12,e__39798__auto____$11,e__39798__auto____$10,e__39798__auto____$9,e__39798__auto____$8,e__39798__auto____$7,e__39798__auto____$6,e__39798__auto____$5,e__39798__auto____$4,e__39798__auto____$3,e__39798__auto____$2,e__39798__auto____$1,e__39798__auto__))
,null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94307){if((e94307 instanceof Error)){
var e__39798__auto____$13 = e94307;
if((e__39798__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39798__auto____$13;
}
} else {
throw e94307;

}
}} else {
throw e__39798__auto____$12;
}
} else {
throw e94306;

}
}} else {
throw e__39798__auto____$11;
}
} else {
throw e94305;

}
}} else {
throw e__39798__auto____$10;
}
} else {
throw e94304;

}
}} else {
throw e__39798__auto____$9;
}
} else {
throw e94303;

}
}} else {
throw e__39798__auto____$8;
}
} else {
throw e94302;

}
}} else {
throw e__39798__auto____$7;
}
} else {
throw e94301;

}
}} else {
throw e__39798__auto____$6;
}
} else {
throw e94300;

}
}} else {
throw e__39798__auto____$5;
}
} else {
throw e94299;

}
}} else {
throw e__39798__auto____$4;
}
} else {
throw e94298;

}
}} else {
throw e__39798__auto____$3;
}
} else {
throw e94297;

}
}} else {
throw e__39798__auto____$2;
}
} else {
throw e94296;

}
}} else {
throw e__39798__auto____$1;
}
} else {
throw e94295;

}
}} else {
throw e__39798__auto__;
}
} else {
throw e94294;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94292){if((e94292 instanceof Error)){
var e__39798__auto__ = e94292;
if((e__39798__auto__ === cljs.core.match.backtrack)){
return null;
} else {
throw e__39798__auto__;
}
} else {
throw e94292;

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
}),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),(function (p__94417){
var map__94418 = p__94417;
var map__94418__$1 = ((((!((map__94418 == null)))?((((map__94418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__94418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94418):map__94418);
var map__94419 = cljs.core.get.call(null,map__94418__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__94419__$1 = ((((!((map__94419 == null)))?((((map__94419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__94419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94419):map__94419);
var state_updates = cljs.core.get.call(null,map__94419__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__94418,map__94418__$1,map__94419,map__94419__$1,state_updates){
return (function (p__94422){
var map__94423 = p__94422;
var map__94423__$1 = ((((!((map__94423 == null)))?((((map__94423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__94423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94423):map__94423);
var event = map__94423__$1;
var h = cljs.core.get.call(null,map__94423__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return cljs.core.async.put_BANG_.call(null,state_updates,((function (map__94423,map__94423__$1,event,h,map__94418,map__94418__$1,map__94419,map__94419__$1,state_updates){
return (function (s){
var f = (function (){var or__25827__auto__ = h;
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return dynomics.ui.ui.match_event.call(null,s,event);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (f,map__94423,map__94423__$1,event,h,map__94418,map__94418__$1,map__94419,map__94419__$1,state_updates){
return (function (ss){
if(cljs.core.truth_(f)){
return cljs.core.deref.call(null,f).call(null,ss,event);
} else {
return ss;
}
});})(f,map__94423,map__94423__$1,event,h,map__94418,map__94418__$1,map__94419,map__94419__$1,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1((function (){var or__25827__auto__ = cljs.core.meta.call(null,f);
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null);
}
})()),new cljs.core.Keyword(null,"fn","fn",-1175266204),(cljs.core.truth_(f)?cljs.core.deref.call(null,f):null),new cljs.core.Keyword(null,"event","event",301435442),event)], null);
});})(map__94423,map__94423__$1,event,h,map__94418,map__94418__$1,map__94419,map__94419__$1,state_updates))
);
});})(map__94418,map__94418__$1,map__94419,map__94419__$1,state_updates))
], null)], null);
}),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),new cljs.core.Keyword(null,"nothing","nothing",-1022703296),new cljs.core.Keyword(null,"tools-order","tools-order",-615877648),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-nodes","add-nodes",935752478),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380),new cljs.core.Keyword(null,"select-nodes","select-nodes",-1990890851),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.Keyword(null,"remove-selected","remove-selected",1393328073),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"load","load",-1318641184)], null),new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load","load",-1318641184),new cljs.core.Keyword(null,"toggle-quadrants","toggle-quadrants",-163483615),new cljs.core.Keyword(null,"curve-types","curve-types",1650772099),new cljs.core.Keyword(null,"print-state","print-state",-1235922711),new cljs.core.Keyword(null,"remove-selected","remove-selected",1393328073),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"node-types","node-types",1539943342),new cljs.core.Keyword(null,"toggle-node-types","toggle-node-types",-2069291601),new cljs.core.Keyword(null,"toggle-left-panel","toggle-left-panel",-240911951),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"switch-styles","switch-styles",-1139342249),new cljs.core.Keyword(null,"deactivate-all","deactivate-all",-1221569027)],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load space",new cljs.core.Keyword(null,"description","description",-1428560544),"Restores the last saved space",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26C3",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.persistence.get_state_BANG_], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"toggle quadrants",new cljs.core.Keyword(null,"description","description",-1428560544),"Toggle show quadrants",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.make_toggle_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295)], null))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Curve types",new cljs.core.Keyword(null,"description","description",-1428560544),"Choose the type of the selected curves",new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.reduce.call(null,(function (r,id){
return cljs.core.assoc.call(null,r,id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str("Curve type "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Set the node type of the selected curves to "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.keyword.call(null,[cljs.core.str(id)].join('')),cljs.core.keyword.call(null,[cljs.core.str(id)].join(''))], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.set_curve_type.call(null,id)], null));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"print",new cljs.core.Keyword(null,"name","name",1843675177),"println state",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.print_state], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Remove selected",new cljs.core.Keyword(null,"description","description",-1428560544),"Removes selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2612",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"minus","minus",-1683561492),new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.comp.call(null,dynomics.space.core.deselect_all,dynomics.space.core.remove_selected)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Deselect all",new cljs.core.Keyword(null,"description","description",-1428560544),"Deselects all selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2205",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.deselect_all], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"connect nodes",new cljs.core.Keyword(null,"description","description",-1428560544),"Connect selected nodes",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.curve_between_nodes], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Save space",new cljs.core.Keyword(null,"description","description",-1428560544),"Saves the space in your browser for later (sorry I will swap this icon for the familiar\n                                    floppy-disk icon when I find it",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26C1",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.persistence.persist_BANG_], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Node types",new cljs.core.Keyword(null,"description","description",-1428560544),"Choose the type of the selected nodes",new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.reduce.call(null,(function (r,p__94425){
var map__94426 = p__94425;
var map__94426__$1 = ((((!((map__94426 == null)))?((((map__94426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__94426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94426):map__94426);
var id = cljs.core.get.call(null,map__94426__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc.call(null,r,id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str("Node type "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Set the node type of the selected nodes to "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.keyword.call(null,[cljs.core.str(id)].join('')),cljs.core.keyword.call(null,[cljs.core.str(id)].join(''))], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.set_node_type.call(null,id)], null));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,dynomics.space.core.node_types))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"toggle types",new cljs.core.Keyword(null,"description","description",-1428560544),"Toggle show types",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.make_toggle_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-types","node-types",1539943342)], null))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Toggle left panel",new cljs.core.Keyword(null,"description","description",-1428560544),"Shows/hides the left panel",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.toggle_left_panel], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Context menu",new cljs.core.Keyword(null,"description","description",-1428560544),"Display context menu",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.toggle_context_menu,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option1","option1",-243284328),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Option1"], null)], null),new cljs.core.Keyword(null,"curve","curve",-569677866),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set-curve-type1","set-curve-type1",2042367308),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"set curve type Nullcline 1",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"fn","fn",-1175266204),(new cljs.core.Delay((function (){
return dynomics.space.core.set_curve_type.call(null,(1));
}),null))], null),new cljs.core.Keyword(null,"set-curve-type2","set-curve-type2",1286708706),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"set curve type Nullcline 2",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"fn","fn",-1175266204),(new cljs.core.Delay((function (){
return dynomics.space.core.set_curve_type.call(null,(2));
}),null))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"switch styles",new cljs.core.Keyword(null,"description","description",-1428560544),"change style",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"tilde","tilde",-306005780),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.switch_styles], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Deactivate all",new cljs.core.Keyword(null,"description","description",-1428560544),"Deactivates all active nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2205",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.deactivate_all], null)])], null)], null));
});
dynomics.ui.ui.left_right_top_view = (function dynomics$ui$ui$left_right_top_view(p__94428){
var map__94440 = p__94428;
var map__94440__$1 = ((((!((map__94440 == null)))?((((map__94440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__94440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94440):map__94440);
var state = map__94440__$1;
var context_menu = cljs.core.get.call(null,map__94440__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__94441 = cljs.core.get.call(null,map__94440__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__94441__$1 = ((((!((map__94441 == null)))?((((map__94441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__94441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94441):map__94441);
var selected_nodes = cljs.core.get.call(null,map__94441__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var map__94442 = cljs.core.get.call(null,map__94440__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__94442__$1 = ((((!((map__94442 == null)))?((((map__94442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__94442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94442):map__94442);
var msgs = cljs.core.get.call(null,map__94442__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui94446 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui94446 = (function (left_right_top_view,p__94428,map__94440,state,context_menu,map__94441,selected_nodes,map__94442,msgs,meta94447){
this.left_right_top_view = left_right_top_view;
this.p__94428 = p__94428;
this.map__94440 = map__94440;
this.state = state;
this.context_menu = context_menu;
this.map__94441 = map__94441;
this.selected_nodes = selected_nodes;
this.map__94442 = map__94442;
this.msgs = msgs;
this.meta94447 = meta94447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui94446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__94440,map__94440__$1,state,context_menu,map__94441,map__94441__$1,selected_nodes,map__94442,map__94442__$1,msgs){
return (function (_94448,meta94447__$1){
var self__ = this;
var _94448__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui94446(self__.left_right_top_view,self__.p__94428,self__.map__94440,self__.state,self__.context_menu,self__.map__94441,self__.selected_nodes,self__.map__94442,self__.msgs,meta94447__$1));
});})(map__94440,map__94440__$1,state,context_menu,map__94441,map__94441__$1,selected_nodes,map__94442,map__94442__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui94446.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__94440,map__94440__$1,state,context_menu,map__94441,map__94441__$1,selected_nodes,map__94442,map__94442__$1,msgs){
return (function (_94448){
var self__ = this;
var _94448__$1 = this;
return self__.meta94447;
});})(map__94440,map__94440__$1,state,context_menu,map__94441,map__94441__$1,selected_nodes,map__94442,map__94442__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui94446.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui94446.prototype.om$core$IRender$render$arity$1 = ((function (map__94440,map__94440__$1,state,context_menu,map__94441,map__94441__$1,selected_nodes,map__94442,map__94442__$1,msgs){
return (function (this__37314__auto__){
var self__ = this;
var this__37314__auto____$1 = this;
return om.dom.div.call(null,{"className": "ui"},om.dom.div.call(null,{"className": "main_ui"},om.dom.div.call(null,{"className": [cljs.core.str("left_component "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"left-panel?","left-panel?",1385519317).cljs$core$IFn$_invoke$arity$1(self__.state))?"hidden_function":null))].join('')},om.core.build.call(null,dynomics.ui.ui.make_function_selector_view,self__.state),om.core.build.call(null,dynomics.space.ui.make_node_types_palette_component,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state)),null),om.dom.div.call(null,{"className": "right_component selectable", "key": "right_component"},cljs.core.map.call(null,((function (this__37314__auto____$1,map__94440,map__94440__$1,state,context_menu,map__94441,map__94441__$1,selected_nodes,map__94442,map__94442__$1,msgs){
return (function (p__94449){
var vec__94450 = p__94449;
var id = cljs.core.nth.call(null,vec__94450,(0),null);
var component = cljs.core.nth.call(null,vec__94450,(1),null);
return om.core.build.call(null,new cljs.core.Keyword(null,"om-builder","om-builder",1876809590).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(component).call(null,self__.state));
});})(this__37314__auto____$1,map__94440,map__94440__$1,state,context_menu,map__94441,map__94441__$1,selected_nodes,map__94442,map__94442__$1,msgs))
,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.every_QMARK_,cljs.core.identity),cljs.core.juxt.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"om-builder","om-builder",1876809590)),cljs.core.val),cljs.core.dissoc.call(null,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null)),new cljs.core.Keyword(null,"function-selector","function-selector",-969376268),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"history","history",-247395220))))),(cljs.core.truth_(self__.context_menu)?om.core.build.call(null,dynomics.ui.ui.make_context_menu,cljs.core.assoc.call(null,cljs.core.select_keys.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451)], null)),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs)):null)),om.core.build.call(null,dynomics.ui.ui.make_header_view,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state)));
});})(map__94440,map__94440__$1,state,context_menu,map__94441,map__94441__$1,selected_nodes,map__94442,map__94442__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui94446.getBasis = ((function (map__94440,map__94440__$1,state,context_menu,map__94441,map__94441__$1,selected_nodes,map__94442,map__94442__$1,msgs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"left-right-top-view","left-right-top-view",150328751,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null)], null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"message-channel","message-channel",-227831873)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)))], null)),new cljs.core.Symbol(null,"p__94428","p__94428",-219734698,null),new cljs.core.Symbol(null,"map__94440","map__94440",569291634,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Symbol(null,"map__94441","map__94441",-348678771,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"map__94442","map__94442",-894576873,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"meta94447","meta94447",-1279974175,null)], null);
});})(map__94440,map__94440__$1,state,context_menu,map__94441,map__94441__$1,selected_nodes,map__94442,map__94442__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui94446.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui94446.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui94446";

dynomics.ui.ui.t_dynomics$ui$ui94446.cljs$lang$ctorPrWriter = ((function (map__94440,map__94440__$1,state,context_menu,map__94441,map__94441__$1,selected_nodes,map__94442,map__94442__$1,msgs){
return (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"dynomics.ui.ui/t_dynomics$ui$ui94446");
});})(map__94440,map__94440__$1,state,context_menu,map__94441,map__94441__$1,selected_nodes,map__94442,map__94442__$1,msgs))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui94446 = ((function (map__94440,map__94440__$1,state,context_menu,map__94441,map__94441__$1,selected_nodes,map__94442,map__94442__$1,msgs){
return (function dynomics$ui$ui$left_right_top_view_$___GT_t_dynomics$ui$ui94446(left_right_top_view__$1,p__94428__$1,map__94440__$2,state__$1,context_menu__$1,map__94441__$2,selected_nodes__$1,map__94442__$2,msgs__$1,meta94447){
return (new dynomics.ui.ui.t_dynomics$ui$ui94446(left_right_top_view__$1,p__94428__$1,map__94440__$2,state__$1,context_menu__$1,map__94441__$2,selected_nodes__$1,map__94442__$2,msgs__$1,meta94447));
});})(map__94440,map__94440__$1,state,context_menu,map__94441,map__94441__$1,selected_nodes,map__94442,map__94442__$1,msgs))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui94446(dynomics$ui$ui$left_right_top_view,p__94428,map__94440__$1,state,context_menu,map__94441__$1,selected_nodes,map__94442__$1,msgs,null));
});
dynomics.ui.ui.main_view = (function dynomics$ui$ui$main_view(){
return (function (p__94459,owner){
var map__94460 = p__94459;
var map__94460__$1 = ((((!((map__94460 == null)))?((((map__94460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__94460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94460):map__94460);
var state = map__94460__$1;
var style = cljs.core.get.call(null,map__94460__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui94462 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillReceiveProps}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui94462 = (function (main_view,p__94459,owner,map__94460,state,style,meta94463){
this.main_view = main_view;
this.p__94459 = p__94459;
this.owner = owner;
this.map__94460 = map__94460;
this.state = state;
this.style = style;
this.meta94463 = meta94463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui94462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__94460,map__94460__$1,state,style){
return (function (_94464,meta94463__$1){
var self__ = this;
var _94464__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui94462(self__.main_view,self__.p__94459,self__.owner,self__.map__94460,self__.state,self__.style,meta94463__$1));
});})(map__94460,map__94460__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui94462.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__94460,map__94460__$1,state,style){
return (function (_94464){
var self__ = this;
var _94464__$1 = this;
return self__.meta94463;
});})(map__94460,map__94460__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui94462.prototype.om$core$IWillMount$ = true;

dynomics.ui.ui.t_dynomics$ui$ui94462.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__94460,map__94460__$1,state,style){
return (function (_){
var self__ = this;
var ___$1 = this;
goog.style.installStyles(dynomics.ui.css.make_main_gui_style.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999),self__.style))?dynomics.ui.css.dark_style.call(null):dynomics.ui.css.light_style.call(null))));

dynomics.ui.ui.add_events_BANG_.call(null,self__.state);

return dynomics.ui.messaging.setup_updates.call(null,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839)], null)),((function (___$1,map__94460,map__94460__$1,state,style){
return (function (g){
return om.core.transact_BANG_.call(null,self__.state,((function (___$1,map__94460,map__94460__$1,state,style){
return (function (s){
var map__94465 = g.call(null,s);
var map__94465__$1 = ((((!((map__94465 == null)))?((((map__94465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__94465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94465):map__94465);
var f = cljs.core.get.call(null,map__94465__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var a = cljs.core.get.call(null,map__94465__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var ss = dynomics.ui.core.update_state.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"action","action",-811238024),(function (){var or__25827__auto__ = a;
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),cljs.core.PersistentArrayMap.EMPTY,f);
return ss;
});})(___$1,map__94460,map__94460__$1,state,style))
);
});})(___$1,map__94460,map__94460__$1,state,style))
);
});})(map__94460,map__94460__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui94462.prototype.om$core$IWillReceiveProps$ = true;

dynomics.ui.ui.t_dynomics$ui$ui94462.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__94460,map__94460__$1,state,style){
return (function (this$,np){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not_EQ_.call(null,self__.style,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(np))){
localStorage.clear();

return goog.style.installStyles(dynomics.ui.css.make_main_gui_style.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999),self__.style))?dynomics.ui.css.dark_style.call(null):dynomics.ui.css.light_style.call(null))));
} else {
return null;
}
});})(map__94460,map__94460__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui94462.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui94462.prototype.om$core$IRender$render$arity$1 = ((function (map__94460,map__94460__$1,state,style){
return (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.call(null,dynomics.ui.ui.left_right_top_view,self__.state);
});})(map__94460,map__94460__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui94462.getBasis = ((function (map__94460,map__94460__$1,state,style){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"p__94459","p__94459",-135225098,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__94460","map__94460",-1216615679,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"meta94463","meta94463",-1972721827,null)], null);
});})(map__94460,map__94460__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui94462.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui94462.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui94462";

dynomics.ui.ui.t_dynomics$ui$ui94462.cljs$lang$ctorPrWriter = ((function (map__94460,map__94460__$1,state,style){
return (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"dynomics.ui.ui/t_dynomics$ui$ui94462");
});})(map__94460,map__94460__$1,state,style))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui94462 = ((function (map__94460,map__94460__$1,state,style){
return (function dynomics$ui$ui$main_view_$___GT_t_dynomics$ui$ui94462(main_view__$1,p__94459__$1,owner__$1,map__94460__$2,state__$1,style__$1,meta94463){
return (new dynomics.ui.ui.t_dynomics$ui$ui94462(main_view__$1,p__94459__$1,owner__$1,map__94460__$2,state__$1,style__$1,meta94463));
});})(map__94460,map__94460__$1,state,style))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui94462(dynomics$ui$ui$main_view,p__94459,owner,map__94460__$1,state,style,cljs.core.PersistentArrayMap.EMPTY));
});
});
/**
 * Start the application!
 */
dynomics.ui.ui.start = (function dynomics$ui$ui$start(var_args){
var args94467 = [];
var len__26896__auto___94470 = arguments.length;
var i__26897__auto___94471 = (0);
while(true){
if((i__26897__auto___94471 < len__26896__auto___94470)){
args94467.push((arguments[i__26897__auto___94471]));

var G__94472 = (i__26897__auto___94471 + (1));
i__26897__auto___94471 = G__94472;
continue;
} else {
}
break;
}

var G__94469 = args94467.length;
switch (G__94469) {
case 0:
return dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args94467.length)].join('')));

}
});

dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return dynomics.ui.ui.start.call(null,dynomics.ui.ui.add_components.call(null,dynomics.ui.ui.add_keybindings.call(null,dynomics.ui.ui.add_functions.call(null,dynomics.ui.ui.add_messaging.call(null,dynomics.ui.ui.add_browser_info.call(null,dynomics.ui.core.make_state.call(null)))))));
});

dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$1 = (function (state){
return om.core.root.call(null,dynomics.ui.ui.main_view.call(null),state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("ui")], null));
});

dynomics.ui.ui.start.cljs$lang$maxFixedArity = 1;
