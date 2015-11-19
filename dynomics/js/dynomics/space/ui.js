// Compiled by ClojureScript 1.7.170 {}
goog.provide('dynomics.space.ui');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('panzoom');
goog.require('dynomics.ui.css');
goog.require('cljs.core.async');
goog.require('dommy.core');
goog.require('dynomics.space.core');
goog.require('dynomics.ui.svg');
goog.require('om.core');
/**
 * Returns a function that converts local coords to
 *   those of the given element-id's
 */
dynomics.space.ui.to_coords = (function dynomics$space$ui$to_coords(var_args){
var args381439 = [];
var len__25219__auto___381442 = arguments.length;
var i__25220__auto___381443 = (0);
while(true){
if((i__25220__auto___381443 < len__25219__auto___381442)){
args381439.push((arguments[i__25220__auto___381443]));

var G__381444 = (i__25220__auto___381443 + (1));
i__25220__auto___381443 = G__381444;
continue;
} else {
}
break;
}

var G__381441 = args381439.length;
switch (G__381441) {
case 1:
return dynomics.space.ui.to_coords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.ui.to_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args381439.length)].join('')));

}
});

dynomics.space.ui.to_coords.cljs$core$IFn$_invoke$arity$1 = (function (element_id){
return dynomics.space.ui.to_coords.call(null,document.getElementById("space"),document.getElementById(element_id));
});

dynomics.space.ui.to_coords.cljs$core$IFn$_invoke$arity$2 = (function (svg_element,element){
return (function (x,y){
var ctm = element.getScreenCTM();
var p = svg_element.createSVGPoint();
var t = p.x = x;
var t__$1 = p.y = y;
var p__$1 = p.matrixTransform(ctm.inverse());
var px = p__$1.x;
var py = p__$1.y;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [px,py], null);
});
});

dynomics.space.ui.to_coords.cljs$lang$maxFixedArity = 2;
/**
 * Adds a panzoom object to the space
 */
dynomics.space.ui.add_pan_zoom_BANG_ = (function dynomics$space$ui$add_pan_zoom_BANG_(var_args){
var args381446 = [];
var len__25219__auto___381449 = arguments.length;
var i__25220__auto___381450 = (0);
while(true){
if((i__25220__auto___381450 < len__25219__auto___381449)){
args381446.push((arguments[i__25220__auto___381450]));

var G__381451 = (i__25220__auto___381450 + (1));
i__25220__auto___381450 = G__381451;
continue;
} else {
}
break;
}

var G__381448 = args381446.length;
switch (G__381448) {
case 1:
return dynomics.space.ui.add_pan_zoom_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return dynomics.space.ui.add_pan_zoom_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args381446.length)].join('')));

}
});

dynomics.space.ui.add_pan_zoom_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (pz){
pz.zoom((2));

return pz;
});

dynomics.space.ui.add_pan_zoom_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dynomics.space.ui.add_pan_zoom_BANG_.call(null,(new svgPanZoom("#space",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"minZoom","minZoom",1002989305),(1),new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(100)], null)))));
});

dynomics.space.ui.add_pan_zoom_BANG_.cljs$lang$maxFixedArity = 1;
dynomics.space.ui.toggle_pan_zoom_BANG_ = (function dynomics$space$ui$toggle_pan_zoom_BANG_(p__381453){
var map__381456 = p__381453;
var map__381456__$1 = ((((!((map__381456 == null)))?((((map__381456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__381456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__381456):map__381456);
var pz = cljs.core.get.call(null,map__381456__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
if(cljs.core.truth_(pz.isPanEnabled())){
pz.disablePan();
} else {
pz.enablePan();
}

if(cljs.core.truth_(pz.isZoomEnabled())){
return pz.disableZoom();
} else {
return pz.disableZoom();
}
});
dynomics.space.ui.disable_pan_zoom_BANG_ = (function dynomics$space$ui$disable_pan_zoom_BANG_(p__381458){
var map__381461 = p__381458;
var map__381461__$1 = ((((!((map__381461 == null)))?((((map__381461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__381461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__381461):map__381461);
var pz = cljs.core.get.call(null,map__381461__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
pz.disablePan();

return pz.disableZoom();
});
dynomics.space.ui.enable_pan_zoom_BANG_ = (function dynomics$space$ui$enable_pan_zoom_BANG_(p__381463){
var map__381466 = p__381463;
var map__381466__$1 = ((((!((map__381466 == null)))?((((map__381466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__381466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__381466):map__381466);
var pz = cljs.core.get.call(null,map__381466__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
pz.enablePan();

return pz.enableZoom();
});
dynomics.space.ui.render_to_image = (function dynomics$space$ui$render_to_image(var_args){
var args381468 = [];
var len__25219__auto___381485 = arguments.length;
var i__25220__auto___381486 = (0);
while(true){
if((i__25220__auto___381486 < len__25219__auto___381485)){
args381468.push((arguments[i__25220__auto___381486]));

var G__381487 = (i__25220__auto___381486 + (1));
i__25220__auto___381486 = G__381487;
continue;
} else {
}
break;
}

var G__381470 = args381468.length;
switch (G__381470) {
case 0:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args381468.length)].join('')));

}
});

dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$0 = (function (){
return dynomics.space.ui.render_to_image.call(null,new cljs.core.Keyword(null,"#prerender_svg","#prerender_svg",-1119102476));
});

dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$1 = (function (svg_selector){
var up = dynomics.ui.css.unique_css_properties.call(null,dynomics.ui.css.css_rules.call(null,dynomics.ui.css.main_ui_style_defaults.call(null)));
var svg = document.querySelector(dommy.core.selector.call(null,svg_selector));
var svgp = svg.parentElement.cloneNode(true);
var canvas = document.getElementById("canvas");
var ccss = window.getComputedStyle(svg);
var ni1 = document.createNodeIterator(svg,NodeIterator.SHOW_ELEMENT,null);
var ni2 = document.createNodeIterator(svgp.firstElementChild,NodeIterator.SHOW_ELEMENT,null);
cljs.core.println.call(null,"-------");

var seq__381471_381489 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni1.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
)),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni2.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
))));
var chunk__381472_381490 = null;
var count__381473_381491 = (0);
var i__381474_381492 = (0);
while(true){
if((i__381474_381492 < count__381473_381491)){
var vec__381475_381493 = cljs.core._nth.call(null,chunk__381472_381490,i__381474_381492);
var i_381494 = cljs.core.nth.call(null,vec__381475_381493,(0),null);
var j_381495 = cljs.core.nth.call(null,vec__381475_381493,(1),null);
j_381495.removeAttribute("id");

j_381495.removeAttribute("class");

j_381495.removeAttribute("data-reactid");

var ccss_381496__$1 = window.getComputedStyle(i_381494);
var seq__381476_381497 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_381496__$1.length));
var chunk__381477_381498 = null;
var count__381478_381499 = (0);
var i__381479_381500 = (0);
while(true){
if((i__381479_381500 < count__381478_381499)){
var is_381501 = cljs.core._nth.call(null,chunk__381477_381498,i__381479_381500);
var p_381502 = ccss_381496__$1.item(is_381501);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_381502)))){
j_381495.style.setProperty(p_381502,ccss_381496__$1.getPropertyValue(p_381502));
} else {
}

var G__381503 = seq__381476_381497;
var G__381504 = chunk__381477_381498;
var G__381505 = count__381478_381499;
var G__381506 = (i__381479_381500 + (1));
seq__381476_381497 = G__381503;
chunk__381477_381498 = G__381504;
count__381478_381499 = G__381505;
i__381479_381500 = G__381506;
continue;
} else {
var temp__4425__auto___381507 = cljs.core.seq.call(null,seq__381476_381497);
if(temp__4425__auto___381507){
var seq__381476_381508__$1 = temp__4425__auto___381507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__381476_381508__$1)){
var c__24964__auto___381509 = cljs.core.chunk_first.call(null,seq__381476_381508__$1);
var G__381510 = cljs.core.chunk_rest.call(null,seq__381476_381508__$1);
var G__381511 = c__24964__auto___381509;
var G__381512 = cljs.core.count.call(null,c__24964__auto___381509);
var G__381513 = (0);
seq__381476_381497 = G__381510;
chunk__381477_381498 = G__381511;
count__381478_381499 = G__381512;
i__381479_381500 = G__381513;
continue;
} else {
var is_381514 = cljs.core.first.call(null,seq__381476_381508__$1);
var p_381515 = ccss_381496__$1.item(is_381514);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_381515)))){
j_381495.style.setProperty(p_381515,ccss_381496__$1.getPropertyValue(p_381515));
} else {
}

var G__381516 = cljs.core.next.call(null,seq__381476_381508__$1);
var G__381517 = null;
var G__381518 = (0);
var G__381519 = (0);
seq__381476_381497 = G__381516;
chunk__381477_381498 = G__381517;
count__381478_381499 = G__381518;
i__381479_381500 = G__381519;
continue;
}
} else {
}
}
break;
}

var G__381520 = seq__381471_381489;
var G__381521 = chunk__381472_381490;
var G__381522 = count__381473_381491;
var G__381523 = (i__381474_381492 + (1));
seq__381471_381489 = G__381520;
chunk__381472_381490 = G__381521;
count__381473_381491 = G__381522;
i__381474_381492 = G__381523;
continue;
} else {
var temp__4425__auto___381524 = cljs.core.seq.call(null,seq__381471_381489);
if(temp__4425__auto___381524){
var seq__381471_381525__$1 = temp__4425__auto___381524;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__381471_381525__$1)){
var c__24964__auto___381526 = cljs.core.chunk_first.call(null,seq__381471_381525__$1);
var G__381527 = cljs.core.chunk_rest.call(null,seq__381471_381525__$1);
var G__381528 = c__24964__auto___381526;
var G__381529 = cljs.core.count.call(null,c__24964__auto___381526);
var G__381530 = (0);
seq__381471_381489 = G__381527;
chunk__381472_381490 = G__381528;
count__381473_381491 = G__381529;
i__381474_381492 = G__381530;
continue;
} else {
var vec__381480_381531 = cljs.core.first.call(null,seq__381471_381525__$1);
var i_381532 = cljs.core.nth.call(null,vec__381480_381531,(0),null);
var j_381533 = cljs.core.nth.call(null,vec__381480_381531,(1),null);
j_381533.removeAttribute("id");

j_381533.removeAttribute("class");

j_381533.removeAttribute("data-reactid");

var ccss_381534__$1 = window.getComputedStyle(i_381532);
var seq__381481_381535 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_381534__$1.length));
var chunk__381482_381536 = null;
var count__381483_381537 = (0);
var i__381484_381538 = (0);
while(true){
if((i__381484_381538 < count__381483_381537)){
var is_381539 = cljs.core._nth.call(null,chunk__381482_381536,i__381484_381538);
var p_381540 = ccss_381534__$1.item(is_381539);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_381540)))){
j_381533.style.setProperty(p_381540,ccss_381534__$1.getPropertyValue(p_381540));
} else {
}

var G__381541 = seq__381481_381535;
var G__381542 = chunk__381482_381536;
var G__381543 = count__381483_381537;
var G__381544 = (i__381484_381538 + (1));
seq__381481_381535 = G__381541;
chunk__381482_381536 = G__381542;
count__381483_381537 = G__381543;
i__381484_381538 = G__381544;
continue;
} else {
var temp__4425__auto___381545__$1 = cljs.core.seq.call(null,seq__381481_381535);
if(temp__4425__auto___381545__$1){
var seq__381481_381546__$1 = temp__4425__auto___381545__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__381481_381546__$1)){
var c__24964__auto___381547 = cljs.core.chunk_first.call(null,seq__381481_381546__$1);
var G__381548 = cljs.core.chunk_rest.call(null,seq__381481_381546__$1);
var G__381549 = c__24964__auto___381547;
var G__381550 = cljs.core.count.call(null,c__24964__auto___381547);
var G__381551 = (0);
seq__381481_381535 = G__381548;
chunk__381482_381536 = G__381549;
count__381483_381537 = G__381550;
i__381484_381538 = G__381551;
continue;
} else {
var is_381552 = cljs.core.first.call(null,seq__381481_381546__$1);
var p_381553 = ccss_381534__$1.item(is_381552);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_381553)))){
j_381533.style.setProperty(p_381553,ccss_381534__$1.getPropertyValue(p_381553));
} else {
}

var G__381554 = cljs.core.next.call(null,seq__381481_381546__$1);
var G__381555 = null;
var G__381556 = (0);
var G__381557 = (0);
seq__381481_381535 = G__381554;
chunk__381482_381536 = G__381555;
count__381483_381537 = G__381556;
i__381484_381538 = G__381557;
continue;
}
} else {
}
}
break;
}

var G__381558 = cljs.core.next.call(null,seq__381471_381525__$1);
var G__381559 = null;
var G__381560 = (0);
var G__381561 = (0);
seq__381471_381489 = G__381558;
chunk__381472_381490 = G__381559;
count__381473_381491 = G__381560;
i__381474_381492 = G__381561;
continue;
}
} else {
}
}
break;
}

window.canvg(canvas,svgp.innerHTML);

return canvas.toDataURL();
});

dynomics.space.ui.render_to_image.cljs$lang$maxFixedArity = 1;
/**
 * Returns an event handler for the given event type,
 *   sending the event on the message-channel
 *   
 */
dynomics.space.ui.make_handler = (function dynomics$space$ui$make_handler(transform,type_key,p__381562){
var map__381565 = p__381562;
var map__381565__$1 = ((((!((map__381565 == null)))?((((map__381565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__381565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__381565):map__381565);
var s = map__381565__$1;
var msgs = cljs.core.get.call(null,map__381565__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var current_tool = cljs.core.get.call(null,map__381565__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
return ((function (map__381565,map__381565__$1,s,msgs,current_tool){
return (function (e){
e.stopPropagation();

var mp = transform.call(null,e.clientX,e.clientY);
cljs.core.async.put_BANG_.call(null,msgs,cljs.core.merge.call(null,s,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),type_key,new cljs.core.Keyword(null,"type","type",1174270348),current_tool,new cljs.core.Keyword(null,"position","position",-2011731912),mp,new cljs.core.Keyword(null,"event","event",301435442),e], null)));

return null;
});
;})(map__381565,map__381565__$1,s,msgs,current_tool))
});
dynomics.space.ui.arrowhead = (function dynomics$space$ui$arrowhead(trajectory){
var vec__381568 = cljs.core.subvec.call(null,trajectory,((cljs.core.count.call(null,trajectory) - (1)) - (1)),cljs.core.count.call(null,trajectory));
var p1 = cljs.core.nth.call(null,vec__381568,(0),null);
var p2 = cljs.core.nth.call(null,vec__381568,(1),null);
var v = cljs.core.map.call(null,cljs.core._,p1,p2);
var x = dynomics.space.core.c_STAR_.call(null,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5], null));
var a1 = cljs.core.map.call(null,cljs.core._PLUS_,p2,x);
var a2 = cljs.core.map.call(null,cljs.core._,p2,x);
var a3 = cljs.core.map.call(null,cljs.core._,p2,v);
var E = cljs.core.interpose;
return om.dom.path.call(null,{"className": "trajectory_arrowhead", "d": cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,"M ",E.call(null," ",a1)," L ",E.call(null," ",a2)," L ",a3," z"))});
});
dynomics.space.ui.make_trajectory_group = (function dynomics$space$ui$make_trajectory_group(with_arrowhead,trajectory){
return om.dom.g.call(null,{"className": "trajectory_group"},om.dom.path.call(null,{"className": "trajectory_path", "d": cljs.core.apply.call(null,cljs.core.str,cljs.core.reduce.call(null,(function (r,p){
return cljs.core.concat.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" L "], null),cljs.core.interpose.call(null," ",p));
}),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M "], null),cljs.core.interpose.call(null," ",cljs.core.first.call(null,trajectory))),cljs.core.rest.call(null,trajectory)))}),(cljs.core.truth_(with_arrowhead)?dynomics.space.ui.arrowhead.call(null,cljs.core.vec.call(null,trajectory)):null));
});
dynomics.space.ui.make_type_icon = (function dynomics$space$ui$make_type_icon(var_args){
var args381569 = [];
var len__25219__auto___381572 = arguments.length;
var i__25220__auto___381573 = (0);
while(true){
if((i__25220__auto___381573 < len__25219__auto___381572)){
args381569.push((arguments[i__25220__auto___381573]));

var G__381574 = (i__25220__auto___381573 + (1));
i__25220__auto___381573 = G__381574;
continue;
} else {
}
break;
}

var G__381571 = args381569.length;
switch (G__381571) {
case 1:
return dynomics.space.ui.make_type_icon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return dynomics.space.ui.make_type_icon.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args381569.length)].join('')));

}
});

dynomics.space.ui.make_type_icon.cljs$core$IFn$_invoke$arity$1 = (function (type_id){
return dynomics.space.ui.make_type_icon.call(null,type_id,(64),(1),0.3);
});

dynomics.space.ui.make_type_icon.cljs$core$IFn$_invoke$arity$4 = (function (type_id,n_points,expansion,rotation){
return om.dom.g.call(null,{"id": [cljs.core.str("dynamics_type_icon_"),cljs.core.str(type_id)].join(''), "className": [cljs.core.str("dynamics_type_icon "),cljs.core.str([cljs.core.str("type_icon_"),cljs.core.str(type_id)].join(''))].join(''), "transform": "scale(0.05)"},dynomics.space.ui.make_trajectory_group.call(null,new cljs.core.Keyword(null,"without-arrowhead","without-arrowhead",-1859195175),dynomics.space.core.spiral_system.call(null,n_points,expansion,rotation)));
});

dynomics.space.ui.make_type_icon.cljs$lang$maxFixedArity = 4;
dynomics.space.ui.make_paths = (function dynomics$space$ui$make_paths(p__381576){
var map__381583 = p__381576;
var map__381583__$1 = ((((!((map__381583 == null)))?((((map__381583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__381583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__381583):map__381583);
var space = map__381583__$1;
var nodes = cljs.core.get.call(null,map__381583__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__381583__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var regions = cljs.core.get.call(null,map__381583__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var node_scale = cljs.core.get.call(null,map__381583__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
cljs.core.println.call(null,"Regions ",regions);

return cljs.core.map.call(null,((function (map__381583,map__381583__$1,space,nodes,edges,regions,node_scale){
return (function (region){
return cljs.core.reduce.call(null,((function (map__381583,map__381583__$1,space,nodes,edges,regions,node_scale){
return (function (beziers,connection){
return cljs.core.conj.call(null,beziers,cljs.core.map.call(null,((function (map__381583,map__381583__$1,space,nodes,edges,regions,node_scale){
return (function (p__381585){
var vec__381586 = p__381585;
var nid1 = cljs.core.nth.call(null,vec__381586,(0),null);
var cid1 = cljs.core.nth.call(null,vec__381586,(1),null);
var vec__381587 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx1 = cljs.core.nth.call(null,vec__381587,(0),null);
var ny1 = cljs.core.nth.call(null,vec__381587,(1),null);
var vec__381588 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx1 = cljs.core.nth.call(null,vec__381588,(0),null);
var cy1 = cljs.core.nth.call(null,vec__381588,(1),null);
return dynomics.ui.svg.make_bezier.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx1 + (node_scale * cx1)),(ny1 + (node_scale * cy1))], null)], null));
});})(map__381583,map__381583__$1,space,nodes,edges,regions,node_scale))
,cljs.core.map.call(null,dynomics.space.core.simplify_connection,connection)));
});})(map__381583,map__381583__$1,space,nodes,edges,regions,node_scale))
,cljs.core.PersistentVector.EMPTY,region);
});})(map__381583,map__381583__$1,space,nodes,edges,regions,node_scale))
,regions);
});
/**
 * Returns a palette of tools
 */
dynomics.space.ui.make_tools_palette_component = (function dynomics$space$ui$make_tools_palette_component(p__381589){
var map__381596 = p__381589;
var map__381596__$1 = ((((!((map__381596 == null)))?((((map__381596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__381596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__381596):map__381596);
var state = map__381596__$1;
var current_tool = cljs.core.get.call(null,map__381596__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
var tools = cljs.core.get.call(null,map__381596__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
var tools_order = cljs.core.get.call(null,map__381596__$1,new cljs.core.Keyword(null,"tools-order","tools-order",-615877648));
var state_updates = cljs.core.get.call(null,map__381596__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
return om.dom.div.call(null,{"className": "dynamics_tool_things"},om.dom.div.call(null,{"className": "dynamics_tool_selectors"},cljs.core.map.call(null,((function (map__381596,map__381596__$1,state,current_tool,tools,tools_order,state_updates){
return (function (p__381598){
var vec__381599 = p__381598;
var tk = cljs.core.nth.call(null,vec__381599,(0),null);
var map__381600 = cljs.core.nth.call(null,vec__381599,(1),null);
var map__381600__$1 = ((((!((map__381600 == null)))?((((map__381600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__381600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__381600):map__381600);
var description = cljs.core.get.call(null,map__381600__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var icon = cljs.core.get.call(null,map__381600__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var keybinding = cljs.core.get.call(null,map__381600__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
return om.dom.div.call(null,{"className": [cljs.core.str("dynamics_tool_selector "),cljs.core.str(((cljs.core._EQ_.call(null,tk,current_tool))?"dynamics_tool_selected":null))].join(''), "title": [cljs.core.str(description),cljs.core.str(" ( "),cljs.core.str((((keybinding instanceof cljs.core.Keyword))?cljs.core.name.call(null,keybinding):keybinding)),cljs.core.str(" )")].join(''), "onMouseDown": ((function (vec__381599,tk,map__381600,map__381600__$1,description,icon,keybinding,map__381596,map__381596__$1,state,current_tool,tools,tools_order,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__381599,tk,map__381600,map__381600__$1,description,icon,keybinding,map__381596,map__381596__$1,state,current_tool,tools,tools_order,state_updates){
return (function (s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynamics","dynamics",-1480249074),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),tk);
});})(vec__381599,tk,map__381600,map__381600__$1,description,icon,keybinding,map__381596,map__381596__$1,state,current_tool,tools,tools_order,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tool","tool",-1298696470),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null));

return null;
});})(vec__381599,tk,map__381600,map__381600__$1,description,icon,keybinding,map__381596,map__381596__$1,state,current_tool,tools,tools_order,state_updates))
},icon);
});})(map__381596,map__381596__$1,state,current_tool,tools,tools_order,state_updates))
,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,tools),tools_order))),om.dom.div.call(null,{"className": "dynamics_current_tool_text", "title": cljs.core.get_in.call(null,tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tool,new cljs.core.Keyword(null,"description","description",-1428560544)], null))},cljs.core.get_in.call(null,tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tool,new cljs.core.Keyword(null,"name","name",1843675177)], null))));
});
/**
 * Returns a component for the node types palette
 */
dynomics.space.ui.make_node_types_palette_component = (function dynomics$space$ui$make_node_types_palette_component(p__381602){
var map__381611 = p__381602;
var map__381611__$1 = ((((!((map__381611 == null)))?((((map__381611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__381611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__381611):map__381611);
var component = cljs.core.get.call(null,map__381611__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var state_updates = cljs.core.get.call(null,map__381611__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
if(typeof dynomics.space.ui.t_dynomics$space$ui381613 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui381613 = (function (make_node_types_palette_component,p__381602,map__381611,component,state_updates,meta381614){
this.make_node_types_palette_component = make_node_types_palette_component;
this.p__381602 = p__381602;
this.map__381611 = map__381611;
this.component = component;
this.state_updates = state_updates;
this.meta381614 = meta381614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui381613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__381611,map__381611__$1,component,state_updates){
return (function (_381615,meta381614__$1){
var self__ = this;
var _381615__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui381613(self__.make_node_types_palette_component,self__.p__381602,self__.map__381611,self__.component,self__.state_updates,meta381614__$1));
});})(map__381611,map__381611__$1,component,state_updates))
;

dynomics.space.ui.t_dynomics$space$ui381613.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__381611,map__381611__$1,component,state_updates){
return (function (_381615){
var self__ = this;
var _381615__$1 = this;
return self__.meta381614;
});})(map__381611,map__381611__$1,component,state_updates))
;

dynomics.space.ui.t_dynomics$space$ui381613.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui381613.prototype.om$core$IRender$render$arity$1 = ((function (map__381611,map__381611__$1,component,state_updates){
return (function (this__38742__auto__){
var self__ = this;
var this__38742__auto____$1 = this;
return om.dom.div.call(null,{"className": "dynamics_node_types"},cljs.core.map.call(null,((function (this__38742__auto____$1,map__381611,map__381611__$1,component,state_updates){
return (function (p__381616){
var map__381617 = p__381616;
var map__381617__$1 = ((((!((map__381617 == null)))?((((map__381617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__381617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__381617):map__381617);
var id = cljs.core.get.call(null,map__381617__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var stability = cljs.core.get.call(null,map__381617__$1,new cljs.core.Keyword(null,"stability","stability",1733225509));
var type = cljs.core.get.call(null,map__381617__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return om.dom.div.call(null,{"className": [cljs.core.str("dynamics_node_type_selector")].join(''), "title": [cljs.core.str("Set selected nodes to "),cljs.core.str(id),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,stability)),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,type))].join(''), "onMouseDown": ((function (map__381617,map__381617__$1,id,stability,type,this__38742__auto____$1,map__381611,map__381611__$1,component,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.get_in.call(null,self__.component,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"node-types","node-types",1539943342),new cljs.core.Keyword(null,"tools","tools",-1241731990),id,new cljs.core.Keyword(null,"fn","fn",-1175266204)], null)),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Node type "),cljs.core.str(id)].join('')], null)], null));

return null;
});})(map__381617,map__381617__$1,id,stability,type,this__38742__auto____$1,map__381611,map__381611__$1,component,state_updates))
},(cljs.core.truth_(document.getElementById("prerender_svg"))?om.dom.img.call(null,{"src": dynomics.space.ui.render_to_image.call(null)}):[cljs.core.str(id)].join('')));
});})(this__38742__auto____$1,map__381611,map__381611__$1,component,state_updates))
,cljs.core.vals.call(null,dynomics.space.core.node_types)));
});})(map__381611,map__381611__$1,component,state_updates))
;

dynomics.space.ui.t_dynomics$space$ui381613.getBasis = ((function (map__381611,map__381611__$1,component,state_updates){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-palette-component","make-node-types-palette-component",54407202,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the node types palette"], null)),new cljs.core.Symbol(null,"p__381602","p__381602",-1053121291,null),new cljs.core.Symbol(null,"map__381611","map__381611",-642195375,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"meta381614","meta381614",-81209451,null)], null);
});})(map__381611,map__381611__$1,component,state_updates))
;

dynomics.space.ui.t_dynomics$space$ui381613.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui381613.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui381613";

dynomics.space.ui.t_dynomics$space$ui381613.cljs$lang$ctorPrWriter = ((function (map__381611,map__381611__$1,component,state_updates){
return (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"dynomics.space.ui/t_dynomics$space$ui381613");
});})(map__381611,map__381611__$1,component,state_updates))
;

dynomics.space.ui.__GT_t_dynomics$space$ui381613 = ((function (map__381611,map__381611__$1,component,state_updates){
return (function dynomics$space$ui$make_node_types_palette_component_$___GT_t_dynomics$space$ui381613(make_node_types_palette_component__$1,p__381602__$1,map__381611__$2,component__$1,state_updates__$1,meta381614){
return (new dynomics.space.ui.t_dynomics$space$ui381613(make_node_types_palette_component__$1,p__381602__$1,map__381611__$2,component__$1,state_updates__$1,meta381614));
});})(map__381611,map__381611__$1,component,state_updates))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui381613(dynomics$space$ui$make_node_types_palette_component,p__381602,map__381611__$1,component,state_updates,null));
});
/**
 * Returns a component for an edge
 */
dynomics.space.ui.make_edge_component = (function dynomics$space$ui$make_edge_component(p__381619){
var map__381631 = p__381619;
var map__381631__$1 = ((((!((map__381631 == null)))?((((map__381631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__381631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__381631):map__381631);
var vec__381632 = cljs.core.get.call(null,map__381631__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__381633 = cljs.core.nth.call(null,vec__381632,(0),null);
var nid1 = cljs.core.nth.call(null,vec__381633,(0),null);
var nid2 = cljs.core.nth.call(null,vec__381633,(1),null);
var vec__381634 = cljs.core.nth.call(null,vec__381632,(1),null);
var nx1 = cljs.core.nth.call(null,vec__381634,(0),null);
var ny1 = cljs.core.nth.call(null,vec__381634,(1),null);
var vec__381635 = cljs.core.nth.call(null,vec__381632,(2),null);
var nx2 = cljs.core.nth.call(null,vec__381635,(0),null);
var ny2 = cljs.core.nth.call(null,vec__381635,(1),null);
var vec__381636 = cljs.core.nth.call(null,vec__381632,(3),null);
var cx1 = cljs.core.nth.call(null,vec__381636,(0),null);
var cx2 = cljs.core.nth.call(null,vec__381636,(1),null);
var vec__381637 = cljs.core.nth.call(null,vec__381632,(4),null);
var cy1 = cljs.core.nth.call(null,vec__381637,(0),null);
var cy2 = cljs.core.nth.call(null,vec__381637,(1),null);
var compatable_QMARK_ = cljs.core.get.call(null,map__381631__$1,new cljs.core.Keyword(null,"compatable?","compatable?",-893211116));
var node_scale = cljs.core.get.call(null,map__381631__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
if(typeof dynomics.space.ui.t_dynomics$space$ui381639 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui381639 = (function (nx1,cx1,ny2,vec__381636,make_edge_component,vec__381637,p__381619,vec__381635,cy2,vec__381633,nx2,cy1,node_scale,ny1,cx2,vec__381632,vec__381634,compatable_QMARK_,map__381631,nid2,nid1,meta381640){
this.nx1 = nx1;
this.cx1 = cx1;
this.ny2 = ny2;
this.vec__381636 = vec__381636;
this.make_edge_component = make_edge_component;
this.vec__381637 = vec__381637;
this.p__381619 = p__381619;
this.vec__381635 = vec__381635;
this.cy2 = cy2;
this.vec__381633 = vec__381633;
this.nx2 = nx2;
this.cy1 = cy1;
this.node_scale = node_scale;
this.ny1 = ny1;
this.cx2 = cx2;
this.vec__381632 = vec__381632;
this.vec__381634 = vec__381634;
this.compatable_QMARK_ = compatable_QMARK_;
this.map__381631 = map__381631;
this.nid2 = nid2;
this.nid1 = nid1;
this.meta381640 = meta381640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui381639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__381631,map__381631__$1,vec__381632,vec__381633,nid1,nid2,vec__381634,nx1,ny1,vec__381635,nx2,ny2,vec__381636,cx1,cx2,vec__381637,cy1,cy2,compatable_QMARK_,node_scale){
return (function (_381641,meta381640__$1){
var self__ = this;
var _381641__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui381639(self__.nx1,self__.cx1,self__.ny2,self__.vec__381636,self__.make_edge_component,self__.vec__381637,self__.p__381619,self__.vec__381635,self__.cy2,self__.vec__381633,self__.nx2,self__.cy1,self__.node_scale,self__.ny1,self__.cx2,self__.vec__381632,self__.vec__381634,self__.compatable_QMARK_,self__.map__381631,self__.nid2,self__.nid1,meta381640__$1));
});})(map__381631,map__381631__$1,vec__381632,vec__381633,nid1,nid2,vec__381634,nx1,ny1,vec__381635,nx2,ny2,vec__381636,cx1,cx2,vec__381637,cy1,cy2,compatable_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui381639.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__381631,map__381631__$1,vec__381632,vec__381633,nid1,nid2,vec__381634,nx1,ny1,vec__381635,nx2,ny2,vec__381636,cx1,cx2,vec__381637,cy1,cy2,compatable_QMARK_,node_scale){
return (function (_381641){
var self__ = this;
var _381641__$1 = this;
return self__.meta381640;
});})(map__381631,map__381631__$1,vec__381632,vec__381633,nid1,nid2,vec__381634,nx1,ny1,vec__381635,nx2,ny2,vec__381636,cx1,cx2,vec__381637,cy1,cy2,compatable_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui381639.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui381639.prototype.om$core$IRender$render$arity$1 = ((function (map__381631,map__381631__$1,vec__381632,vec__381633,nid1,nid2,vec__381634,nx1,ny1,vec__381635,nx2,ny2,vec__381636,cx1,cx2,vec__381637,cy1,cy2,compatable_QMARK_,node_scale){
return (function (this__38742__auto__){
var self__ = this;
var this__38742__auto____$1 = this;
return om.dom.path.call(null,{"key": [cljs.core.str("edge_"),cljs.core.str(self__.nid1),cljs.core.str("_"),cljs.core.str(self__.nid2)].join(''), "className": [cljs.core.str("dynamics_edge "),cljs.core.str((cljs.core.truth_(self__.compatable_QMARK_)?"dynamics_compatable_edge":null))].join(''), "d": dynomics.ui.svg.to_svg_path.call(null,cljs.core.map.call(null,dynomics.ui.svg.make_bezier,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx1,self__.ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nx1 + (self__.node_scale * self__.cx1)),(self__.ny1 + (self__.node_scale * self__.cy1))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx2,self__.ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nx2 + (self__.node_scale * self__.cx2)),(self__.ny2 + (self__.node_scale * self__.cy2))], null)], null)], null)))});
});})(map__381631,map__381631__$1,vec__381632,vec__381633,nid1,nid2,vec__381634,nx1,ny1,vec__381635,nx2,ny2,vec__381636,cx1,cx2,vec__381637,cy1,cy2,compatable_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui381639.getBasis = ((function (map__381631,map__381631__$1,vec__381632,vec__381633,nid1,nid2,vec__381634,nx1,ny1,vec__381635,nx2,ny2,vec__381636,cx1,cx2,vec__381637,cy1,cy2,compatable_QMARK_,node_scale){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null),new cljs.core.Symbol(null,"vec__381636","vec__381636",1412431686,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-edge-component","make-edge-component",-530385559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null)], null)], null),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Symbol(null,"compatable?","compatable?",747320411,null),new cljs.core.Keyword(null,"compatable?","compatable?",-893211116),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for an edge"], null)),new cljs.core.Symbol(null,"vec__381637","vec__381637",1543764330,null),new cljs.core.Symbol(null,"p__381619","p__381619",1464978250,null),new cljs.core.Symbol(null,"vec__381635","vec__381635",2056115275,null),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null),new cljs.core.Symbol(null,"vec__381633","vec__381633",-1477547413,null),new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null),new cljs.core.Symbol(null,"vec__381632","vec__381632",-991484299,null),new cljs.core.Symbol(null,"vec__381634","vec__381634",1345641177,null),new cljs.core.Symbol(null,"compatable?","compatable?",747320411,null),new cljs.core.Symbol(null,"map__381631","map__381631",-963480229,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null),new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"meta381640","meta381640",-2144238790,null)], null);
});})(map__381631,map__381631__$1,vec__381632,vec__381633,nid1,nid2,vec__381634,nx1,ny1,vec__381635,nx2,ny2,vec__381636,cx1,cx2,vec__381637,cy1,cy2,compatable_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui381639.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui381639.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui381639";

dynomics.space.ui.t_dynomics$space$ui381639.cljs$lang$ctorPrWriter = ((function (map__381631,map__381631__$1,vec__381632,vec__381633,nid1,nid2,vec__381634,nx1,ny1,vec__381635,nx2,ny2,vec__381636,cx1,cx2,vec__381637,cy1,cy2,compatable_QMARK_,node_scale){
return (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"dynomics.space.ui/t_dynomics$space$ui381639");
});})(map__381631,map__381631__$1,vec__381632,vec__381633,nid1,nid2,vec__381634,nx1,ny1,vec__381635,nx2,ny2,vec__381636,cx1,cx2,vec__381637,cy1,cy2,compatable_QMARK_,node_scale))
;

dynomics.space.ui.__GT_t_dynomics$space$ui381639 = ((function (map__381631,map__381631__$1,vec__381632,vec__381633,nid1,nid2,vec__381634,nx1,ny1,vec__381635,nx2,ny2,vec__381636,cx1,cx2,vec__381637,cy1,cy2,compatable_QMARK_,node_scale){
return (function dynomics$space$ui$make_edge_component_$___GT_t_dynomics$space$ui381639(nx1__$1,cx1__$1,ny2__$1,vec__381636__$1,make_edge_component__$1,vec__381637__$1,p__381619__$1,vec__381635__$1,cy2__$1,vec__381633__$1,nx2__$1,cy1__$1,node_scale__$1,ny1__$1,cx2__$1,vec__381632__$1,vec__381634__$1,compatable_QMARK___$1,map__381631__$2,nid2__$1,nid1__$1,meta381640){
return (new dynomics.space.ui.t_dynomics$space$ui381639(nx1__$1,cx1__$1,ny2__$1,vec__381636__$1,make_edge_component__$1,vec__381637__$1,p__381619__$1,vec__381635__$1,cy2__$1,vec__381633__$1,nx2__$1,cy1__$1,node_scale__$1,ny1__$1,cx2__$1,vec__381632__$1,vec__381634__$1,compatable_QMARK___$1,map__381631__$2,nid2__$1,nid1__$1,meta381640));
});})(map__381631,map__381631__$1,vec__381632,vec__381633,nid1,nid2,vec__381634,nx1,ny1,vec__381635,nx2,ny2,vec__381636,cx1,cx2,vec__381637,cy1,cy2,compatable_QMARK_,node_scale))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui381639(nx1,cx1,ny2,vec__381636,dynomics$space$ui$make_edge_component,vec__381637,p__381619,vec__381635,cy2,vec__381633,nx2,cy1,node_scale,ny1,cx2,vec__381632,vec__381634,compatable_QMARK_,map__381631__$1,nid2,nid1,null));
});
/**
 * Returns a component for a node and its connections
 */
dynomics.space.ui.make_node_component = (function dynomics$space$ui$make_node_component(p__381642){
var map__381657 = p__381642;
var map__381657__$1 = ((((!((map__381657 == null)))?((((map__381657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__381657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__381657):map__381657);
var map__381658 = cljs.core.get.call(null,map__381657__$1,new cljs.core.Keyword(null,"node","node",581201198));
var map__381658__$1 = ((((!((map__381658 == null)))?((((map__381658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__381658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__381658):map__381658);
var vec__381659 = cljs.core.get.call(null,map__381658__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__381659,(0),null);
var y = cljs.core.nth.call(null,vec__381659,(1),null);
var t = cljs.core.get.call(null,map__381658__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var pt = cljs.core.get.call(null,map__381658__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var id = cljs.core.get.call(null,map__381658__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var connections = cljs.core.get.call(null,map__381658__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var node_scale = cljs.core.get.call(null,map__381657__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var selected_nodes = cljs.core.get.call(null,map__381657__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var map__381660 = cljs.core.get.call(null,map__381657__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var map__381660__$1 = ((((!((map__381660 == null)))?((((map__381660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__381660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__381660):map__381660);
var current_tool = cljs.core.get.call(null,map__381660__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
var msgs = cljs.core.get.call(null,map__381657__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var pz = cljs.core.get.call(null,map__381657__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id], null);
if(typeof dynomics.space.ui.t_dynomics$space$ui381664 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui381664 = (function (t,connections,x,selected_nodes,current_tool,pz,path,y,map__381660,map__381657,pt,make_node_component,node_scale,map__381658,vec__381659,p__381642,msgs,id,meta381665){
this.t = t;
this.connections = connections;
this.x = x;
this.selected_nodes = selected_nodes;
this.current_tool = current_tool;
this.pz = pz;
this.path = path;
this.y = y;
this.map__381660 = map__381660;
this.map__381657 = map__381657;
this.pt = pt;
this.make_node_component = make_node_component;
this.node_scale = node_scale;
this.map__381658 = map__381658;
this.vec__381659 = vec__381659;
this.p__381642 = p__381642;
this.msgs = msgs;
this.id = id;
this.meta381665 = meta381665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui381664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (path,map__381657,map__381657__$1,map__381658,map__381658__$1,vec__381659,x,y,t,pt,id,connections,node_scale,selected_nodes,map__381660,map__381660__$1,current_tool,msgs,pz){
return (function (_381666,meta381665__$1){
var self__ = this;
var _381666__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui381664(self__.t,self__.connections,self__.x,self__.selected_nodes,self__.current_tool,self__.pz,self__.path,self__.y,self__.map__381660,self__.map__381657,self__.pt,self__.make_node_component,self__.node_scale,self__.map__381658,self__.vec__381659,self__.p__381642,self__.msgs,self__.id,meta381665__$1));
});})(path,map__381657,map__381657__$1,map__381658,map__381658__$1,vec__381659,x,y,t,pt,id,connections,node_scale,selected_nodes,map__381660,map__381660__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui381664.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (path,map__381657,map__381657__$1,map__381658,map__381658__$1,vec__381659,x,y,t,pt,id,connections,node_scale,selected_nodes,map__381660,map__381660__$1,current_tool,msgs,pz){
return (function (_381666){
var self__ = this;
var _381666__$1 = this;
return self__.meta381665;
});})(path,map__381657,map__381657__$1,map__381658,map__381658__$1,vec__381659,x,y,t,pt,id,connections,node_scale,selected_nodes,map__381660,map__381660__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui381664.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui381664.prototype.om$core$IRender$render$arity$1 = ((function (path,map__381657,map__381657__$1,map__381658,map__381658__$1,vec__381659,x,y,t,pt,id,connections,node_scale,selected_nodes,map__381660,map__381660__$1,current_tool,msgs,pz){
return (function (this__38742__auto__){
var self__ = this;
var this__38742__auto____$1 = this;
return om.dom.g.call(null,{"id": [cljs.core.str("node_"),cljs.core.str(self__.id)].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.x,self__.y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),self__.node_scale], null)), "className": [cljs.core.str("dynamics_node_subgraph "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,self__.path))?"dynamics_node_selected":null))].join(''), "onMouseOver": ((function (this__38742__auto____$1,path,map__381657,map__381657__$1,map__381658,map__381658__$1,vec__381659,x,y,t,pt,id,connections,node_scale,selected_nodes,map__381660,map__381660__$1,current_tool,msgs,pz){
return (function (e){
return null;
});})(this__38742__auto____$1,path,map__381657,map__381657__$1,map__381658,map__381658__$1,vec__381659,x,y,t,pt,id,connections,node_scale,selected_nodes,map__381660,map__381660__$1,current_tool,msgs,pz))
, "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"path","path",-188191168),self__.path,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"path","path",-188191168),self__.path,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null))},om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": ((function (this__38742__auto____$1,path,map__381657,map__381657__$1,map__381658,map__381658__$1,vec__381659,x,y,t,pt,id,connections,node_scale,selected_nodes,map__381660,map__381660__$1,current_tool,msgs,pz){
return (function (){
return 0.3;
});})(this__38742__auto____$1,path,map__381657,map__381657__$1,map__381658,map__381658__$1,vec__381659,x,y,t,pt,id,connections,node_scale,selected_nodes,map__381660,map__381660__$1,current_tool,msgs,pz))
.call(null,(0)), "className": [cljs.core.str("dynamics_node_selector_dot")].join('')}),om.dom.text.call(null,{"x": (-4), "y": (4), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),0.05], null)), "fill": "black"},[cljs.core.str(self__.pt)].join('')),om.dom.rect.call(null,{"x": (0), "y": (0), "width": (1), "height": (1), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),(-1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),(2),(2)], null)), "className": [cljs.core.str("dynamics_node")].join('')}),om.dom.g.call(null,{"className": "dynamics_node_connections"},cljs.core.map.call(null,((function (this__38742__auto____$1,path,map__381657,map__381657__$1,map__381658,map__381658__$1,vec__381659,x,y,t,pt,id,connections,node_scale,selected_nodes,map__381660,map__381660__$1,current_tool,msgs,pz){
return (function (p__381667){
var map__381668 = p__381667;
var map__381668__$1 = ((((!((map__381668 == null)))?((((map__381668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__381668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__381668):map__381668);
var vec__381669 = cljs.core.get.call(null,map__381668__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var cx = cljs.core.nth.call(null,vec__381669,(0),null);
var cy = cljs.core.nth.call(null,vec__381669,(1),null);
var cid = cljs.core.get.call(null,map__381668__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return om.dom.g.call(null,{"className": "dynamics_node_connection", "id": [cljs.core.str("node_"),cljs.core.str(self__.id),cljs.core.str("_connection_"),cljs.core.str(cid)].join('')},om.dom.line.call(null,{"x1": (0), "y1": (0), "x2": cx, "y2": cy, "className": "dynamics_node_connection_line"}),(function (){var path__$1 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null);
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.27, "className": [cljs.core.str("dynamics_node_connection_dot "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,path__$1))?"dynamics_node_selected":null))].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),cx,cy], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"id","id",-1388402092),cid,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"id","id",-1388402092),cid,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null))});
})());
});})(this__38742__auto____$1,path,map__381657,map__381657__$1,map__381658,map__381658__$1,vec__381659,x,y,t,pt,id,connections,node_scale,selected_nodes,map__381660,map__381660__$1,current_tool,msgs,pz))
,self__.connections)));
});})(path,map__381657,map__381657__$1,map__381658,map__381658__$1,vec__381659,x,y,t,pt,id,connections,node_scale,selected_nodes,map__381660,map__381660__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui381664.getBasis = ((function (path,map__381657,map__381657__$1,map__381658,map__381658__$1,vec__381659,x,y,t,pt,id,connections,node_scale,selected_nodes,map__381660,map__381660__$1,current_tool,msgs,pz){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"current-tool","current-tool",699505924,null),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"map__381660","map__381660",-1292045976,null),new cljs.core.Symbol(null,"map__381657","map__381657",1497698184,null),new cljs.core.Symbol(null,"pt","pt",-2097974902,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-component","make-node-component",-1574550003,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"pt","pt",-2097974902,null),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Keyword(null,"connections","connections",-2064090887)], true, false),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"current-tool","current-tool",699505924,null),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for a node and its connections"], null)),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"map__381658","map__381658",-1500212331,null),new cljs.core.Symbol(null,"vec__381659","vec__381659",-141353544,null),new cljs.core.Symbol(null,"p__381642","p__381642",90549081,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta381665","meta381665",-1903749963,null)], null);
});})(path,map__381657,map__381657__$1,map__381658,map__381658__$1,vec__381659,x,y,t,pt,id,connections,node_scale,selected_nodes,map__381660,map__381660__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui381664.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui381664.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui381664";

dynomics.space.ui.t_dynomics$space$ui381664.cljs$lang$ctorPrWriter = ((function (path,map__381657,map__381657__$1,map__381658,map__381658__$1,vec__381659,x,y,t,pt,id,connections,node_scale,selected_nodes,map__381660,map__381660__$1,current_tool,msgs,pz){
return (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"dynomics.space.ui/t_dynomics$space$ui381664");
});})(path,map__381657,map__381657__$1,map__381658,map__381658__$1,vec__381659,x,y,t,pt,id,connections,node_scale,selected_nodes,map__381660,map__381660__$1,current_tool,msgs,pz))
;

dynomics.space.ui.__GT_t_dynomics$space$ui381664 = ((function (path,map__381657,map__381657__$1,map__381658,map__381658__$1,vec__381659,x,y,t,pt,id,connections,node_scale,selected_nodes,map__381660,map__381660__$1,current_tool,msgs,pz){
return (function dynomics$space$ui$make_node_component_$___GT_t_dynomics$space$ui381664(t__$1,connections__$1,x__$1,selected_nodes__$1,current_tool__$1,pz__$1,path__$1,y__$1,map__381660__$2,map__381657__$2,pt__$1,make_node_component__$1,node_scale__$1,map__381658__$2,vec__381659__$1,p__381642__$1,msgs__$1,id__$1,meta381665){
return (new dynomics.space.ui.t_dynomics$space$ui381664(t__$1,connections__$1,x__$1,selected_nodes__$1,current_tool__$1,pz__$1,path__$1,y__$1,map__381660__$2,map__381657__$2,pt__$1,make_node_component__$1,node_scale__$1,map__381658__$2,vec__381659__$1,p__381642__$1,msgs__$1,id__$1,meta381665));
});})(path,map__381657,map__381657__$1,map__381658,map__381658__$1,vec__381659,x,y,t,pt,id,connections,node_scale,selected_nodes,map__381660,map__381660__$1,current_tool,msgs,pz))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui381664(t,connections,x,selected_nodes,current_tool,pz,path,y,map__381660__$1,map__381657__$1,pt,dynomics$space$ui$make_node_component,node_scale,map__381658__$1,vec__381659,p__381642,msgs,id,null));
});
dynomics.space.ui.test_component = (function dynomics$space$ui$test_component(x){
if(typeof dynomics.space.ui.t_dynomics$space$ui381674 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui381674 = (function (test_component,x,meta381675){
this.test_component = test_component;
this.x = x;
this.meta381675 = meta381675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui381674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_381676,meta381675__$1){
var self__ = this;
var _381676__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui381674(self__.test_component,self__.x,meta381675__$1));
});

dynomics.space.ui.t_dynomics$space$ui381674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_381676){
var self__ = this;
var _381676__$1 = this;
return self__.meta381675;
});

dynomics.space.ui.t_dynomics$space$ui381674.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui381674.prototype.om$core$IRender$render$arity$1 = (function (this__38742__auto__){
var self__ = this;
var this__38742__auto____$1 = this;
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.2, "fill": (((0.5 > Math.random()))?"orange":"green")});
});

dynomics.space.ui.t_dynomics$space$ui381674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"test-component","test-component",1959093538,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)))], null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"meta381675","meta381675",-1613643158,null)], null);
});

dynomics.space.ui.t_dynomics$space$ui381674.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui381674.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui381674";

dynomics.space.ui.t_dynomics$space$ui381674.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"dynomics.space.ui/t_dynomics$space$ui381674");
});

dynomics.space.ui.__GT_t_dynomics$space$ui381674 = (function dynomics$space$ui$test_component_$___GT_t_dynomics$space$ui381674(test_component__$1,x__$1,meta381675){
return (new dynomics.space.ui.t_dynomics$space$ui381674(test_component__$1,x__$1,meta381675));
});

}

return (new dynomics.space.ui.t_dynomics$space$ui381674(dynomics$space$ui$test_component,x,null));
});
/**
 * Returns a component for the phase-space editor
 */
dynomics.space.ui.make_space_component = (function dynomics$space$ui$make_space_component(p__381677){
var map__381695 = p__381677;
var map__381695__$1 = ((((!((map__381695 == null)))?((((map__381695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__381695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__381695):map__381695);
var state = map__381695__$1;
var map__381696 = cljs.core.get.call(null,map__381695__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__381696__$1 = ((((!((map__381696 == null)))?((((map__381696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__381696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__381696):map__381696);
var space = map__381696__$1;
var nodes = cljs.core.get.call(null,map__381696__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__381696__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var selected_nodes = cljs.core.get.call(null,map__381696__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var regions = cljs.core.get.call(null,map__381696__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var compatabilities = cljs.core.get.call(null,map__381696__$1,new cljs.core.Keyword(null,"compatabilities","compatabilities",-701311857));
var node_scale = cljs.core.get.call(null,map__381696__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var cf = cljs.core.get.call(null,map__381695__$1,new cljs.core.Keyword(null,"cf","cf",1480736310));
var map__381697 = cljs.core.get.call(null,map__381695__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var map__381697__$1 = ((((!((map__381697 == null)))?((((map__381697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__381697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__381697):map__381697);
var current_tool = cljs.core.get.call(null,map__381697__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
var msgs = cljs.core.get.call(null,map__381695__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var pz = cljs.core.get.call(null,map__381695__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
if(typeof dynomics.space.ui.t_dynomics$space$ui381701 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui381701 = (function (selected_nodes,p__381677,current_tool,edges,pz,map__381696,make_space_component,map__381695,space,node_scale,regions,map__381697,state,compatabilities,msgs,nodes,cf,meta381702){
this.selected_nodes = selected_nodes;
this.p__381677 = p__381677;
this.current_tool = current_tool;
this.edges = edges;
this.pz = pz;
this.map__381696 = map__381696;
this.make_space_component = make_space_component;
this.map__381695 = map__381695;
this.space = space;
this.node_scale = node_scale;
this.regions = regions;
this.map__381697 = map__381697;
this.state = state;
this.compatabilities = compatabilities;
this.msgs = msgs;
this.nodes = nodes;
this.cf = cf;
this.meta381702 = meta381702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui381701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__381695,map__381695__$1,state,map__381696,map__381696__$1,space,nodes,edges,selected_nodes,regions,compatabilities,node_scale,cf,map__381697,map__381697__$1,current_tool,msgs,pz){
return (function (_381703,meta381702__$1){
var self__ = this;
var _381703__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui381701(self__.selected_nodes,self__.p__381677,self__.current_tool,self__.edges,self__.pz,self__.map__381696,self__.make_space_component,self__.map__381695,self__.space,self__.node_scale,self__.regions,self__.map__381697,self__.state,self__.compatabilities,self__.msgs,self__.nodes,self__.cf,meta381702__$1));
});})(map__381695,map__381695__$1,state,map__381696,map__381696__$1,space,nodes,edges,selected_nodes,regions,compatabilities,node_scale,cf,map__381697,map__381697__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui381701.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__381695,map__381695__$1,state,map__381696,map__381696__$1,space,nodes,edges,selected_nodes,regions,compatabilities,node_scale,cf,map__381697,map__381697__$1,current_tool,msgs,pz){
return (function (_381703){
var self__ = this;
var _381703__$1 = this;
return self__.meta381702;
});})(map__381695,map__381695__$1,state,map__381696,map__381696__$1,space,nodes,edges,selected_nodes,regions,compatabilities,node_scale,cf,map__381697,map__381697__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui381701.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui381701.prototype.om$core$IRender$render$arity$1 = ((function (map__381695,map__381695__$1,state,map__381696,map__381696__$1,space,nodes,edges,selected_nodes,regions,compatabilities,node_scale,cf,map__381697,map__381697__$1,current_tool,msgs,pz){
return (function (this__38742__auto__){
var self__ = this;
var this__38742__auto____$1 = this;
return om.dom.div.call(null,{"className": [cljs.core.str("dynamics_space "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dynamics","dynamics",-1480249074),self__.cf))?"selected_function":"hidden_function"))].join('')},om.dom.svg.call(null,{"zoomAndPan": false, "preserveAspectRatio": "xMidYMin", "width": "100%", "shape-rendering": "crispEdges", "xmlns": "http://www.w3.org/2000/svg", "className": "dynamics_space_svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "id": "space", "viewBox": "-1 -1 3 3", "height": "100%"},om.dom.g.call(null,{"id": "space_root", "onMouseMove": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null))},om.dom.rect.call(null,{"x": (-16), "y": (-16), "width": (32), "height": (32), "className": "dynamics_space_background"}),om.dom.rect.call(null,{"x": (0), "y": (0), "width": (1), "height": (1), "className": "dynamics_space_space"}),null,om.core.build_all.call(null,dynomics.space.ui.make_edge_component,cljs.core.map.call(null,((function (this__38742__auto____$1,map__381695,map__381695__$1,state,map__381696,map__381696__$1,space,nodes,edges,selected_nodes,regions,compatabilities,node_scale,cf,map__381697,map__381697__$1,current_tool,msgs,pz){
return (function (p__381704){
var vec__381705 = p__381704;
var vec__381706 = cljs.core.nth.call(null,vec__381705,(0),null);
var _ = cljs.core.nth.call(null,vec__381706,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__381706,(1),null);
var nid1 = cljs.core.nth.call(null,vec__381706,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__381706,(3),null);
var cid1 = cljs.core.nth.call(null,vec__381706,(4),null);
var vec__381707 = cljs.core.nth.call(null,vec__381705,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__381707,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__381707,(1),null);
var nid2 = cljs.core.nth.call(null,vec__381707,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__381707,(3),null);
var cid2 = cljs.core.nth.call(null,vec__381707,(4),null);
var vec__381708 = cljs.core.get_in.call(null,self__.nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx1 = cljs.core.nth.call(null,vec__381708,(0),null);
var ny1 = cljs.core.nth.call(null,vec__381708,(1),null);
var vec__381709 = cljs.core.get_in.call(null,self__.nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx2 = cljs.core.nth.call(null,vec__381709,(0),null);
var ny2 = cljs.core.nth.call(null,vec__381709,(1),null);
var vec__381710 = cljs.core.get_in.call(null,self__.nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx1 = cljs.core.nth.call(null,vec__381710,(0),null);
var cy1 = cljs.core.nth.call(null,vec__381710,(1),null);
var vec__381711 = cljs.core.get_in.call(null,self__.nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid2,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx2 = cljs.core.nth.call(null,vec__381711,(0),null);
var cy2 = cljs.core.nth.call(null,vec__381711,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx2,ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx1,cx2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cy1,cy2], null)], null),new cljs.core.Keyword(null,"compatable?","compatable?",-893211116),self__.compatabilities.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null)),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale], null);
});})(this__38742__auto____$1,map__381695,map__381695__$1,state,map__381696,map__381696__$1,space,nodes,edges,selected_nodes,regions,compatabilities,node_scale,cf,map__381697,map__381697__$1,current_tool,msgs,pz))
,self__.edges)),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__38742__auto____$1,map__381695,map__381695__$1,state,map__381696,map__381696__$1,space,nodes,edges,selected_nodes,regions,compatabilities,node_scale,cf,map__381697,map__381697__$1,current_tool,msgs,pz){
return (function (node){
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz], null));
});})(this__38742__auto____$1,map__381695,map__381695__$1,state,map__381696,map__381696__$1,space,nodes,edges,selected_nodes,regions,compatabilities,node_scale,cf,map__381697,map__381697__$1,current_tool,msgs,pz))
,cljs.core.vals.call(null,cljs.core.apply.call(null,cljs.core.dissoc,self__.nodes,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),cljs.core.map.call(null,cljs.core.last,self__.selected_nodes))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__38742__auto____$1,map__381695,map__381695__$1,state,map__381696,map__381696__$1,space,nodes,edges,selected_nodes,regions,compatabilities,node_scale,cf,map__381697,map__381697__$1,current_tool,msgs,pz){
return (function (node){
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz], null));
});})(this__38742__auto____$1,map__381695,map__381695__$1,state,map__381696,map__381696__$1,space,nodes,edges,selected_nodes,regions,compatabilities,node_scale,cf,map__381697,map__381697__$1,current_tool,msgs,pz))
,cljs.core.vals.call(null,cljs.core.select_keys.call(null,self__.nodes,cljs.core.map.call(null,cljs.core.last,self__.selected_nodes)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),null)));
});})(map__381695,map__381695__$1,state,map__381696,map__381696__$1,space,nodes,edges,selected_nodes,regions,compatabilities,node_scale,cf,map__381697,map__381697__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui381701.getBasis = ((function (map__381695,map__381695__$1,state,map__381696,map__381696__$1,space,nodes,edges,selected_nodes,regions,compatabilities,node_scale,cf,map__381697,map__381697__$1,current_tool,msgs,pz){
return (function (){
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"p__381677","p__381677",-239553663,null),new cljs.core.Symbol(null,"current-tool","current-tool",699505924,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Symbol(null,"map__381696","map__381696",545708072,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-space-component","make-space-component",-638751478,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"compatabilities","compatabilities",939219670,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Keyword(null,"cf","cf",1480736310),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"current-tool","current-tool",699505924,null),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the phase-space editor"], null)),new cljs.core.Symbol(null,"map__381695","map__381695",-1744175606,null),new cljs.core.Symbol(null,"space","space",1988665002,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"map__381697","map__381697",-224995660,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"compatabilities","compatabilities",939219670,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Symbol(null,"meta381702","meta381702",-111883057,null)], null);
});})(map__381695,map__381695__$1,state,map__381696,map__381696__$1,space,nodes,edges,selected_nodes,regions,compatabilities,node_scale,cf,map__381697,map__381697__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui381701.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui381701.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui381701";

dynomics.space.ui.t_dynomics$space$ui381701.cljs$lang$ctorPrWriter = ((function (map__381695,map__381695__$1,state,map__381696,map__381696__$1,space,nodes,edges,selected_nodes,regions,compatabilities,node_scale,cf,map__381697,map__381697__$1,current_tool,msgs,pz){
return (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"dynomics.space.ui/t_dynomics$space$ui381701");
});})(map__381695,map__381695__$1,state,map__381696,map__381696__$1,space,nodes,edges,selected_nodes,regions,compatabilities,node_scale,cf,map__381697,map__381697__$1,current_tool,msgs,pz))
;

dynomics.space.ui.__GT_t_dynomics$space$ui381701 = ((function (map__381695,map__381695__$1,state,map__381696,map__381696__$1,space,nodes,edges,selected_nodes,regions,compatabilities,node_scale,cf,map__381697,map__381697__$1,current_tool,msgs,pz){
return (function dynomics$space$ui$make_space_component_$___GT_t_dynomics$space$ui381701(selected_nodes__$1,p__381677__$1,current_tool__$1,edges__$1,pz__$1,map__381696__$2,make_space_component__$1,map__381695__$2,space__$1,node_scale__$1,regions__$1,map__381697__$2,state__$1,compatabilities__$1,msgs__$1,nodes__$1,cf__$1,meta381702){
return (new dynomics.space.ui.t_dynomics$space$ui381701(selected_nodes__$1,p__381677__$1,current_tool__$1,edges__$1,pz__$1,map__381696__$2,make_space_component__$1,map__381695__$2,space__$1,node_scale__$1,regions__$1,map__381697__$2,state__$1,compatabilities__$1,msgs__$1,nodes__$1,cf__$1,meta381702));
});})(map__381695,map__381695__$1,state,map__381696,map__381696__$1,space,nodes,edges,selected_nodes,regions,compatabilities,node_scale,cf,map__381697,map__381697__$1,current_tool,msgs,pz))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui381701(selected_nodes,p__381677,current_tool,edges,pz,map__381696__$1,dynomics$space$ui$make_space_component,map__381695__$1,space,node_scale,regions,map__381697__$1,state,compatabilities,msgs,nodes,cf,null));
});
/**
 * Returns a component for offscreen rendering
 */
dynomics.space.ui.make_prerender_component = (function dynomics$space$ui$make_prerender_component(p__381712){
var map__381720 = p__381712;
var map__381720__$1 = ((((!((map__381720 == null)))?((((map__381720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__381720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__381720):map__381720);
var state = map__381720__$1;
var map__381721 = cljs.core.get.call(null,map__381720__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__381721__$1 = ((((!((map__381721 == null)))?((((map__381721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__381721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__381721):map__381721);
var space = map__381721__$1;
var nodes = cljs.core.get.call(null,map__381721__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__381721__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var selected_nodes = cljs.core.get.call(null,map__381721__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var regions = cljs.core.get.call(null,map__381721__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var node_scale = cljs.core.get.call(null,map__381721__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var cf = cljs.core.get.call(null,map__381720__$1,new cljs.core.Keyword(null,"cf","cf",1480736310));
if(typeof dynomics.space.ui.t_dynomics$space$ui381724 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui381724 = (function (map__381720,selected_nodes,make_prerender_component,edges,space,map__381721,node_scale,regions,state,nodes,cf,p__381712,meta381725){
this.map__381720 = map__381720;
this.selected_nodes = selected_nodes;
this.make_prerender_component = make_prerender_component;
this.edges = edges;
this.space = space;
this.map__381721 = map__381721;
this.node_scale = node_scale;
this.regions = regions;
this.state = state;
this.nodes = nodes;
this.cf = cf;
this.p__381712 = p__381712;
this.meta381725 = meta381725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui381724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__381720,map__381720__$1,state,map__381721,map__381721__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (_381726,meta381725__$1){
var self__ = this;
var _381726__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui381724(self__.map__381720,self__.selected_nodes,self__.make_prerender_component,self__.edges,self__.space,self__.map__381721,self__.node_scale,self__.regions,self__.state,self__.nodes,self__.cf,self__.p__381712,meta381725__$1));
});})(map__381720,map__381720__$1,state,map__381721,map__381721__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.t_dynomics$space$ui381724.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__381720,map__381720__$1,state,map__381721,map__381721__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (_381726){
var self__ = this;
var _381726__$1 = this;
return self__.meta381725;
});})(map__381720,map__381720__$1,state,map__381721,map__381721__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.t_dynomics$space$ui381724.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui381724.prototype.om$core$IRender$render$arity$1 = ((function (map__381720,map__381720__$1,state,map__381721,map__381721__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (this__38742__auto__){
var self__ = this;
var this__38742__auto____$1 = this;
return om.dom.div.call(null,{"className": "prerender_component", "id": "prerender_component"},om.dom.svg.call(null,{"zoomAndPan": false, "preserveAspectRatio": "xMidYMin", "width": "100%", "shape-rendering": "crispEdges", "xmlns": "http://www.w3.org/2000/svg", "className": "dynamics_space_svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "id": "prerender_svg", "viewBox": "-1 -1 3 3", "height": "100%"},dynomics.space.ui.make_type_icon.call(null,(1),(64),(1),0.3)));
});})(map__381720,map__381720__$1,state,map__381721,map__381721__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.t_dynomics$space$ui381724.getBasis = ((function (map__381720,map__381720__$1,state,map__381721,map__381721__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map__381720","map__381720",1625635584,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-prerender-component","make-prerender-component",-630291485,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Keyword(null,"cf","cf",1480736310),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for offscreen rendering"], null)),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"space","space",1988665002,null),new cljs.core.Symbol(null,"map__381721","map__381721",173910349,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Symbol(null,"p__381712","p__381712",1708469823,null),new cljs.core.Symbol(null,"meta381725","meta381725",1439143573,null)], null);
});})(map__381720,map__381720__$1,state,map__381721,map__381721__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.t_dynomics$space$ui381724.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui381724.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui381724";

dynomics.space.ui.t_dynomics$space$ui381724.cljs$lang$ctorPrWriter = ((function (map__381720,map__381720__$1,state,map__381721,map__381721__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"dynomics.space.ui/t_dynomics$space$ui381724");
});})(map__381720,map__381720__$1,state,map__381721,map__381721__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.__GT_t_dynomics$space$ui381724 = ((function (map__381720,map__381720__$1,state,map__381721,map__381721__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function dynomics$space$ui$make_prerender_component_$___GT_t_dynomics$space$ui381724(map__381720__$2,selected_nodes__$1,make_prerender_component__$1,edges__$1,space__$1,map__381721__$2,node_scale__$1,regions__$1,state__$1,nodes__$1,cf__$1,p__381712__$1,meta381725){
return (new dynomics.space.ui.t_dynomics$space$ui381724(map__381720__$2,selected_nodes__$1,make_prerender_component__$1,edges__$1,space__$1,map__381721__$2,node_scale__$1,regions__$1,state__$1,nodes__$1,cf__$1,p__381712__$1,meta381725));
});})(map__381720,map__381720__$1,state,map__381721,map__381721__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui381724(map__381720__$1,selected_nodes,dynomics$space$ui$make_prerender_component,edges,space,map__381721__$1,node_scale,regions,state,nodes,cf,p__381712,null));
});

//# sourceMappingURL=ui.js.map