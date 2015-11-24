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
var args1890289 = [];
var len__25219__auto___1890292 = arguments.length;
var i__25220__auto___1890293 = (0);
while(true){
if((i__25220__auto___1890293 < len__25219__auto___1890292)){
args1890289.push((arguments[i__25220__auto___1890293]));

var G__1890294 = (i__25220__auto___1890293 + (1));
i__25220__auto___1890293 = G__1890294;
continue;
} else {
}
break;
}

var G__1890291 = args1890289.length;
switch (G__1890291) {
case 1:
return dynomics.space.ui.to_coords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.ui.to_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1890289.length)].join('')));

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
var args1890296 = [];
var len__25219__auto___1890299 = arguments.length;
var i__25220__auto___1890300 = (0);
while(true){
if((i__25220__auto___1890300 < len__25219__auto___1890299)){
args1890296.push((arguments[i__25220__auto___1890300]));

var G__1890301 = (i__25220__auto___1890300 + (1));
i__25220__auto___1890300 = G__1890301;
continue;
} else {
}
break;
}

var G__1890298 = args1890296.length;
switch (G__1890298) {
case 1:
return dynomics.space.ui.add_pan_zoom_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return dynomics.space.ui.add_pan_zoom_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1890296.length)].join('')));

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
dynomics.space.ui.toggle_pan_zoom_BANG_ = (function dynomics$space$ui$toggle_pan_zoom_BANG_(p__1890303){
var map__1890306 = p__1890303;
var map__1890306__$1 = ((((!((map__1890306 == null)))?((((map__1890306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890306):map__1890306);
var pz = cljs.core.get.call(null,map__1890306__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
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
dynomics.space.ui.disable_pan_zoom_BANG_ = (function dynomics$space$ui$disable_pan_zoom_BANG_(p__1890308){
var map__1890311 = p__1890308;
var map__1890311__$1 = ((((!((map__1890311 == null)))?((((map__1890311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890311):map__1890311);
var pz = cljs.core.get.call(null,map__1890311__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
pz.disablePan();

return pz.disableZoom();
});
dynomics.space.ui.enable_pan_zoom_BANG_ = (function dynomics$space$ui$enable_pan_zoom_BANG_(p__1890313){
var map__1890316 = p__1890313;
var map__1890316__$1 = ((((!((map__1890316 == null)))?((((map__1890316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890316):map__1890316);
var pz = cljs.core.get.call(null,map__1890316__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
pz.enablePan();

return pz.enableZoom();
});
dynomics.space.ui.render_to_image = (function dynomics$space$ui$render_to_image(var_args){
var args1890318 = [];
var len__25219__auto___1890335 = arguments.length;
var i__25220__auto___1890336 = (0);
while(true){
if((i__25220__auto___1890336 < len__25219__auto___1890335)){
args1890318.push((arguments[i__25220__auto___1890336]));

var G__1890337 = (i__25220__auto___1890336 + (1));
i__25220__auto___1890336 = G__1890337;
continue;
} else {
}
break;
}

var G__1890320 = args1890318.length;
switch (G__1890320) {
case 0:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1890318.length)].join('')));

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
var seq__1890321_1890339 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni1.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
)),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni2.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
))));
var chunk__1890322_1890340 = null;
var count__1890323_1890341 = (0);
var i__1890324_1890342 = (0);
while(true){
if((i__1890324_1890342 < count__1890323_1890341)){
var vec__1890325_1890343 = cljs.core._nth.call(null,chunk__1890322_1890340,i__1890324_1890342);
var i_1890344 = cljs.core.nth.call(null,vec__1890325_1890343,(0),null);
var j_1890345 = cljs.core.nth.call(null,vec__1890325_1890343,(1),null);
j_1890345.removeAttribute("id");

j_1890345.removeAttribute("class");

j_1890345.removeAttribute("data-reactid");

var ccss_1890346__$1 = window.getComputedStyle(i_1890344);
var seq__1890326_1890347 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_1890346__$1.length));
var chunk__1890327_1890348 = null;
var count__1890328_1890349 = (0);
var i__1890329_1890350 = (0);
while(true){
if((i__1890329_1890350 < count__1890328_1890349)){
var is_1890351 = cljs.core._nth.call(null,chunk__1890327_1890348,i__1890329_1890350);
var p_1890352 = ccss_1890346__$1.item(is_1890351);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_1890352)))){
j_1890345.style.setProperty(p_1890352,ccss_1890346__$1.getPropertyValue(p_1890352));
} else {
}

var G__1890353 = seq__1890326_1890347;
var G__1890354 = chunk__1890327_1890348;
var G__1890355 = count__1890328_1890349;
var G__1890356 = (i__1890329_1890350 + (1));
seq__1890326_1890347 = G__1890353;
chunk__1890327_1890348 = G__1890354;
count__1890328_1890349 = G__1890355;
i__1890329_1890350 = G__1890356;
continue;
} else {
var temp__4425__auto___1890357 = cljs.core.seq.call(null,seq__1890326_1890347);
if(temp__4425__auto___1890357){
var seq__1890326_1890358__$1 = temp__4425__auto___1890357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1890326_1890358__$1)){
var c__24964__auto___1890359 = cljs.core.chunk_first.call(null,seq__1890326_1890358__$1);
var G__1890360 = cljs.core.chunk_rest.call(null,seq__1890326_1890358__$1);
var G__1890361 = c__24964__auto___1890359;
var G__1890362 = cljs.core.count.call(null,c__24964__auto___1890359);
var G__1890363 = (0);
seq__1890326_1890347 = G__1890360;
chunk__1890327_1890348 = G__1890361;
count__1890328_1890349 = G__1890362;
i__1890329_1890350 = G__1890363;
continue;
} else {
var is_1890364 = cljs.core.first.call(null,seq__1890326_1890358__$1);
var p_1890365 = ccss_1890346__$1.item(is_1890364);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_1890365)))){
j_1890345.style.setProperty(p_1890365,ccss_1890346__$1.getPropertyValue(p_1890365));
} else {
}

var G__1890366 = cljs.core.next.call(null,seq__1890326_1890358__$1);
var G__1890367 = null;
var G__1890368 = (0);
var G__1890369 = (0);
seq__1890326_1890347 = G__1890366;
chunk__1890327_1890348 = G__1890367;
count__1890328_1890349 = G__1890368;
i__1890329_1890350 = G__1890369;
continue;
}
} else {
}
}
break;
}

var G__1890370 = seq__1890321_1890339;
var G__1890371 = chunk__1890322_1890340;
var G__1890372 = count__1890323_1890341;
var G__1890373 = (i__1890324_1890342 + (1));
seq__1890321_1890339 = G__1890370;
chunk__1890322_1890340 = G__1890371;
count__1890323_1890341 = G__1890372;
i__1890324_1890342 = G__1890373;
continue;
} else {
var temp__4425__auto___1890374 = cljs.core.seq.call(null,seq__1890321_1890339);
if(temp__4425__auto___1890374){
var seq__1890321_1890375__$1 = temp__4425__auto___1890374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1890321_1890375__$1)){
var c__24964__auto___1890376 = cljs.core.chunk_first.call(null,seq__1890321_1890375__$1);
var G__1890377 = cljs.core.chunk_rest.call(null,seq__1890321_1890375__$1);
var G__1890378 = c__24964__auto___1890376;
var G__1890379 = cljs.core.count.call(null,c__24964__auto___1890376);
var G__1890380 = (0);
seq__1890321_1890339 = G__1890377;
chunk__1890322_1890340 = G__1890378;
count__1890323_1890341 = G__1890379;
i__1890324_1890342 = G__1890380;
continue;
} else {
var vec__1890330_1890381 = cljs.core.first.call(null,seq__1890321_1890375__$1);
var i_1890382 = cljs.core.nth.call(null,vec__1890330_1890381,(0),null);
var j_1890383 = cljs.core.nth.call(null,vec__1890330_1890381,(1),null);
j_1890383.removeAttribute("id");

j_1890383.removeAttribute("class");

j_1890383.removeAttribute("data-reactid");

var ccss_1890384__$1 = window.getComputedStyle(i_1890382);
var seq__1890331_1890385 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_1890384__$1.length));
var chunk__1890332_1890386 = null;
var count__1890333_1890387 = (0);
var i__1890334_1890388 = (0);
while(true){
if((i__1890334_1890388 < count__1890333_1890387)){
var is_1890389 = cljs.core._nth.call(null,chunk__1890332_1890386,i__1890334_1890388);
var p_1890390 = ccss_1890384__$1.item(is_1890389);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_1890390)))){
j_1890383.style.setProperty(p_1890390,ccss_1890384__$1.getPropertyValue(p_1890390));
} else {
}

var G__1890391 = seq__1890331_1890385;
var G__1890392 = chunk__1890332_1890386;
var G__1890393 = count__1890333_1890387;
var G__1890394 = (i__1890334_1890388 + (1));
seq__1890331_1890385 = G__1890391;
chunk__1890332_1890386 = G__1890392;
count__1890333_1890387 = G__1890393;
i__1890334_1890388 = G__1890394;
continue;
} else {
var temp__4425__auto___1890395__$1 = cljs.core.seq.call(null,seq__1890331_1890385);
if(temp__4425__auto___1890395__$1){
var seq__1890331_1890396__$1 = temp__4425__auto___1890395__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1890331_1890396__$1)){
var c__24964__auto___1890397 = cljs.core.chunk_first.call(null,seq__1890331_1890396__$1);
var G__1890398 = cljs.core.chunk_rest.call(null,seq__1890331_1890396__$1);
var G__1890399 = c__24964__auto___1890397;
var G__1890400 = cljs.core.count.call(null,c__24964__auto___1890397);
var G__1890401 = (0);
seq__1890331_1890385 = G__1890398;
chunk__1890332_1890386 = G__1890399;
count__1890333_1890387 = G__1890400;
i__1890334_1890388 = G__1890401;
continue;
} else {
var is_1890402 = cljs.core.first.call(null,seq__1890331_1890396__$1);
var p_1890403 = ccss_1890384__$1.item(is_1890402);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_1890403)))){
j_1890383.style.setProperty(p_1890403,ccss_1890384__$1.getPropertyValue(p_1890403));
} else {
}

var G__1890404 = cljs.core.next.call(null,seq__1890331_1890396__$1);
var G__1890405 = null;
var G__1890406 = (0);
var G__1890407 = (0);
seq__1890331_1890385 = G__1890404;
chunk__1890332_1890386 = G__1890405;
count__1890333_1890387 = G__1890406;
i__1890334_1890388 = G__1890407;
continue;
}
} else {
}
}
break;
}

var G__1890408 = cljs.core.next.call(null,seq__1890321_1890375__$1);
var G__1890409 = null;
var G__1890410 = (0);
var G__1890411 = (0);
seq__1890321_1890339 = G__1890408;
chunk__1890322_1890340 = G__1890409;
count__1890323_1890341 = G__1890410;
i__1890324_1890342 = G__1890411;
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
dynomics.space.ui.make_handler = (function dynomics$space$ui$make_handler(transform,type_key,p__1890412){
var map__1890415 = p__1890412;
var map__1890415__$1 = ((((!((map__1890415 == null)))?((((map__1890415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890415):map__1890415);
var s = map__1890415__$1;
var msgs = cljs.core.get.call(null,map__1890415__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var current_tool = cljs.core.get.call(null,map__1890415__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
return ((function (map__1890415,map__1890415__$1,s,msgs,current_tool){
return (function (e){
e.stopPropagation();

var mp = transform.call(null,e.clientX,e.clientY);
cljs.core.async.put_BANG_.call(null,msgs,cljs.core.merge.call(null,s,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),type_key,new cljs.core.Keyword(null,"type","type",1174270348),current_tool,new cljs.core.Keyword(null,"position","position",-2011731912),mp,new cljs.core.Keyword(null,"event","event",301435442),e], null)));

return null;
});
;})(map__1890415,map__1890415__$1,s,msgs,current_tool))
});
dynomics.space.ui.arrowhead = (function dynomics$space$ui$arrowhead(trajectory){
var vec__1890419 = cljs.core.subvec.call(null,trajectory,((cljs.core.count.call(null,trajectory) - (1)) - (1)),cljs.core.count.call(null,trajectory));
var p1 = cljs.core.nth.call(null,vec__1890419,(0),null);
var p2 = cljs.core.nth.call(null,vec__1890419,(1),null);
var vec__1890420 = p2;
var ox = cljs.core.nth.call(null,vec__1890420,(0),null);
var oy = cljs.core.nth.call(null,vec__1890420,(1),null);
var v = cljs.core.map.call(null,cljs.core._,p1,p2);
var a = (dynomics.space.core.r2d * (dynomics.space.core.PI2 - dynomics.space.core.angle.call(null,v)));
var a1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);
var a2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
var a3 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null);
var E = cljs.core.interpose;
return om.dom.path.call(null,{"className": "trajectory_arrowhead", "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),ox,oy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),a], null)), "d": cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,"M ",E.call(null," ",a1)," L ",E.call(null," ",a2)," L ",E.call(null," ",a3)," z"))});
});
dynomics.space.ui.make_trajectory_group = (function dynomics$space$ui$make_trajectory_group(with_arrowhead,trajectory){
return om.dom.g.call(null,{"className": "trajectory_group"},om.dom.path.call(null,{"className": "trajectory_path", "d": cljs.core.apply.call(null,cljs.core.str,cljs.core.reduce.call(null,(function (r,p){
return cljs.core.concat.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" L "], null),cljs.core.interpose.call(null," ",p));
}),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M "], null),cljs.core.interpose.call(null," ",cljs.core.first.call(null,trajectory))),cljs.core.rest.call(null,trajectory)))}),(cljs.core.truth_(with_arrowhead)?dynomics.space.ui.arrowhead.call(null,cljs.core.vec.call(null,trajectory)):null));
});
dynomics.space.ui.make_type_icon = (function dynomics$space$ui$make_type_icon(var_args){
var args1890421 = [];
var len__25219__auto___1890424 = arguments.length;
var i__25220__auto___1890425 = (0);
while(true){
if((i__25220__auto___1890425 < len__25219__auto___1890424)){
args1890421.push((arguments[i__25220__auto___1890425]));

var G__1890426 = (i__25220__auto___1890425 + (1));
i__25220__auto___1890425 = G__1890426;
continue;
} else {
}
break;
}

var G__1890423 = args1890421.length;
switch (G__1890423) {
case 1:
return dynomics.space.ui.make_type_icon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return dynomics.space.ui.make_type_icon.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1890421.length)].join('')));

}
});

dynomics.space.ui.make_type_icon.cljs$core$IFn$_invoke$arity$1 = (function (type_id){
return dynomics.space.ui.make_type_icon.call(null,type_id,(78),(0),0.3);
});

dynomics.space.ui.make_type_icon.cljs$core$IFn$_invoke$arity$4 = (function (type_id,n_samples,expansion,rotation){
return om.dom.g.call(null,{"id": [cljs.core.str("dynomics_type_icon_"),cljs.core.str(type_id)].join(''), "className": [cljs.core.str("dynomics_type_icon "),cljs.core.str([cljs.core.str("type_icon_"),cljs.core.str(type_id)].join(''))].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),0.5,0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),0.05], null))},cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,dynomics.space.ui.make_trajectory_group,true),cljs.core.partial.call(null,cljs.core.drop,(50))),dynomics.space.core.ds_evolution.call(null,n_samples,cljs.core.assoc.call(null,dynomics.space.core.make_ds.call(null,dynomics.space.core.p2c.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expansion,rotation], null))),new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.first.call(null,dynomics.space.core.ds_evolution.call(null,(8),dynomics.space.core.make_ds.call(null,dynomics.space.core.p2c.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),dynomics.space.core.PIb4], null)))))))));
});

dynomics.space.ui.make_type_icon.cljs$lang$maxFixedArity = 4;
dynomics.space.ui.make_paths = (function dynomics$space$ui$make_paths(p__1890428){
var map__1890435 = p__1890428;
var map__1890435__$1 = ((((!((map__1890435 == null)))?((((map__1890435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890435):map__1890435);
var space = map__1890435__$1;
var nodes = cljs.core.get.call(null,map__1890435__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__1890435__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var regions = cljs.core.get.call(null,map__1890435__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var node_scale = cljs.core.get.call(null,map__1890435__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
cljs.core.println.call(null,"Regions ",regions);

return cljs.core.map.call(null,((function (map__1890435,map__1890435__$1,space,nodes,edges,regions,node_scale){
return (function (region){
return cljs.core.reduce.call(null,((function (map__1890435,map__1890435__$1,space,nodes,edges,regions,node_scale){
return (function (beziers,connection){
return cljs.core.conj.call(null,beziers,cljs.core.map.call(null,((function (map__1890435,map__1890435__$1,space,nodes,edges,regions,node_scale){
return (function (p__1890437){
var vec__1890438 = p__1890437;
var nid1 = cljs.core.nth.call(null,vec__1890438,(0),null);
var cid1 = cljs.core.nth.call(null,vec__1890438,(1),null);
var vec__1890439 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx1 = cljs.core.nth.call(null,vec__1890439,(0),null);
var ny1 = cljs.core.nth.call(null,vec__1890439,(1),null);
var vec__1890440 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx1 = cljs.core.nth.call(null,vec__1890440,(0),null);
var cy1 = cljs.core.nth.call(null,vec__1890440,(1),null);
return dynomics.ui.svg.make_bezier.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx1 + (node_scale * cx1)),(ny1 + (node_scale * cy1))], null)], null));
});})(map__1890435,map__1890435__$1,space,nodes,edges,regions,node_scale))
,cljs.core.map.call(null,dynomics.space.core.simplify_connection,connection)));
});})(map__1890435,map__1890435__$1,space,nodes,edges,regions,node_scale))
,cljs.core.PersistentVector.EMPTY,region);
});})(map__1890435,map__1890435__$1,space,nodes,edges,regions,node_scale))
,regions);
});
/**
 * Returns a palette of tools
 */
dynomics.space.ui.make_tools_palette_component = (function dynomics$space$ui$make_tools_palette_component(p__1890441){
var map__1890448 = p__1890441;
var map__1890448__$1 = ((((!((map__1890448 == null)))?((((map__1890448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890448):map__1890448);
var state = map__1890448__$1;
var current_tool = cljs.core.get.call(null,map__1890448__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
var tools = cljs.core.get.call(null,map__1890448__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
var tools_order = cljs.core.get.call(null,map__1890448__$1,new cljs.core.Keyword(null,"tools-order","tools-order",-615877648));
var state_updates = cljs.core.get.call(null,map__1890448__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
return om.dom.div.call(null,{"className": "dynomics_tool_things"},om.dom.div.call(null,{"className": "dynomics_tool_selectors"},cljs.core.map.call(null,((function (map__1890448,map__1890448__$1,state,current_tool,tools,tools_order,state_updates){
return (function (p__1890450){
var vec__1890451 = p__1890450;
var tk = cljs.core.nth.call(null,vec__1890451,(0),null);
var map__1890452 = cljs.core.nth.call(null,vec__1890451,(1),null);
var map__1890452__$1 = ((((!((map__1890452 == null)))?((((map__1890452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890452):map__1890452);
var description = cljs.core.get.call(null,map__1890452__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var icon = cljs.core.get.call(null,map__1890452__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var keybinding = cljs.core.get.call(null,map__1890452__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
return om.dom.div.call(null,{"className": [cljs.core.str("dynomics_tool_selector "),cljs.core.str(((cljs.core._EQ_.call(null,tk,current_tool))?"dynomics_tool_selected":null))].join(''), "title": [cljs.core.str(description),cljs.core.str(" ( "),cljs.core.str((((keybinding instanceof cljs.core.Keyword))?cljs.core.name.call(null,keybinding):keybinding)),cljs.core.str(" )")].join(''), "onMouseDown": ((function (vec__1890451,tk,map__1890452,map__1890452__$1,description,icon,keybinding,map__1890448,map__1890448__$1,state,current_tool,tools,tools_order,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__1890451,tk,map__1890452,map__1890452__$1,description,icon,keybinding,map__1890448,map__1890448__$1,state,current_tool,tools,tools_order,state_updates){
return (function (s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),tk);
});})(vec__1890451,tk,map__1890452,map__1890452__$1,description,icon,keybinding,map__1890448,map__1890448__$1,state,current_tool,tools,tools_order,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tool","tool",-1298696470),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null));

return null;
});})(vec__1890451,tk,map__1890452,map__1890452__$1,description,icon,keybinding,map__1890448,map__1890448__$1,state,current_tool,tools,tools_order,state_updates))
},icon);
});})(map__1890448,map__1890448__$1,state,current_tool,tools,tools_order,state_updates))
,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,tools),tools_order))),om.dom.div.call(null,{"className": "dynomics_current_tool_text", "title": cljs.core.get_in.call(null,tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tool,new cljs.core.Keyword(null,"description","description",-1428560544)], null))},cljs.core.get_in.call(null,tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tool,new cljs.core.Keyword(null,"name","name",1843675177)], null))));
});
/**
 * Returns a component for the node types palette
 */
dynomics.space.ui.make_node_types_palette_component = (function dynomics$space$ui$make_node_types_palette_component(p__1890454){
var map__1890463 = p__1890454;
var map__1890463__$1 = ((((!((map__1890463 == null)))?((((map__1890463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890463):map__1890463);
var component = cljs.core.get.call(null,map__1890463__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var state_updates = cljs.core.get.call(null,map__1890463__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
if(typeof dynomics.space.ui.t_dynomics$space$ui1890465 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui1890465 = (function (make_node_types_palette_component,p__1890454,map__1890463,component,state_updates,meta1890466){
this.make_node_types_palette_component = make_node_types_palette_component;
this.p__1890454 = p__1890454;
this.map__1890463 = map__1890463;
this.component = component;
this.state_updates = state_updates;
this.meta1890466 = meta1890466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui1890465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__1890463,map__1890463__$1,component,state_updates){
return (function (_1890467,meta1890466__$1){
var self__ = this;
var _1890467__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui1890465(self__.make_node_types_palette_component,self__.p__1890454,self__.map__1890463,self__.component,self__.state_updates,meta1890466__$1));
});})(map__1890463,map__1890463__$1,component,state_updates))
;

dynomics.space.ui.t_dynomics$space$ui1890465.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__1890463,map__1890463__$1,component,state_updates){
return (function (_1890467){
var self__ = this;
var _1890467__$1 = this;
return self__.meta1890466;
});})(map__1890463,map__1890463__$1,component,state_updates))
;

dynomics.space.ui.t_dynomics$space$ui1890465.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui1890465.prototype.om$core$IRender$render$arity$1 = ((function (map__1890463,map__1890463__$1,component,state_updates){
return (function (this__38742__auto__){
var self__ = this;
var this__38742__auto____$1 = this;
return om.dom.div.call(null,{"className": "dynomics_node_types"},cljs.core.map.call(null,((function (this__38742__auto____$1,map__1890463,map__1890463__$1,component,state_updates){
return (function (p__1890468){
var map__1890469 = p__1890468;
var map__1890469__$1 = ((((!((map__1890469 == null)))?((((map__1890469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890469):map__1890469);
var id = cljs.core.get.call(null,map__1890469__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var stability = cljs.core.get.call(null,map__1890469__$1,new cljs.core.Keyword(null,"stability","stability",1733225509));
var type = cljs.core.get.call(null,map__1890469__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return om.dom.div.call(null,{"className": [cljs.core.str("dynomics_node_type_selector")].join(''), "title": [cljs.core.str("Set selected nodes to "),cljs.core.str(id),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,stability)),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,type))].join(''), "onMouseDown": ((function (map__1890469,map__1890469__$1,id,stability,type,this__38742__auto____$1,map__1890463,map__1890463__$1,component,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.get_in.call(null,self__.component,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"node-types","node-types",1539943342),new cljs.core.Keyword(null,"tools","tools",-1241731990),id,new cljs.core.Keyword(null,"fn","fn",-1175266204)], null)),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Node type "),cljs.core.str(id)].join('')], null)], null));

return null;
});})(map__1890469,map__1890469__$1,id,stability,type,this__38742__auto____$1,map__1890463,map__1890463__$1,component,state_updates))
},(cljs.core.truth_(document.getElementById("prerender_svg"))?om.dom.img.call(null,{"width": (32), "height": (32), "src": dynomics.space.ui.render_to_image.call(null)}):[cljs.core.str(id)].join('')));
});})(this__38742__auto____$1,map__1890463,map__1890463__$1,component,state_updates))
,cljs.core.vals.call(null,dynomics.space.core.node_types)));
});})(map__1890463,map__1890463__$1,component,state_updates))
;

dynomics.space.ui.t_dynomics$space$ui1890465.getBasis = ((function (map__1890463,map__1890463__$1,component,state_updates){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-palette-component","make-node-types-palette-component",54407202,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the node types palette"], null)),new cljs.core.Symbol(null,"p__1890454","p__1890454",-2065980213,null),new cljs.core.Symbol(null,"map__1890463","map__1890463",1761677226,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"meta1890466","meta1890466",-1865476565,null)], null);
});})(map__1890463,map__1890463__$1,component,state_updates))
;

dynomics.space.ui.t_dynomics$space$ui1890465.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui1890465.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui1890465";

dynomics.space.ui.t_dynomics$space$ui1890465.cljs$lang$ctorPrWriter = ((function (map__1890463,map__1890463__$1,component,state_updates){
return (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"dynomics.space.ui/t_dynomics$space$ui1890465");
});})(map__1890463,map__1890463__$1,component,state_updates))
;

dynomics.space.ui.__GT_t_dynomics$space$ui1890465 = ((function (map__1890463,map__1890463__$1,component,state_updates){
return (function dynomics$space$ui$make_node_types_palette_component_$___GT_t_dynomics$space$ui1890465(make_node_types_palette_component__$1,p__1890454__$1,map__1890463__$2,component__$1,state_updates__$1,meta1890466){
return (new dynomics.space.ui.t_dynomics$space$ui1890465(make_node_types_palette_component__$1,p__1890454__$1,map__1890463__$2,component__$1,state_updates__$1,meta1890466));
});})(map__1890463,map__1890463__$1,component,state_updates))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui1890465(dynomics$space$ui$make_node_types_palette_component,p__1890454,map__1890463__$1,component,state_updates,null));
});
/**
 * Returns a component for an edge
 */
dynomics.space.ui.make_edge_component = (function dynomics$space$ui$make_edge_component(p__1890471){
var map__1890483 = p__1890471;
var map__1890483__$1 = ((((!((map__1890483 == null)))?((((map__1890483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890483):map__1890483);
var vec__1890484 = cljs.core.get.call(null,map__1890483__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__1890485 = cljs.core.nth.call(null,vec__1890484,(0),null);
var nid1 = cljs.core.nth.call(null,vec__1890485,(0),null);
var nid2 = cljs.core.nth.call(null,vec__1890485,(1),null);
var vec__1890486 = cljs.core.nth.call(null,vec__1890484,(1),null);
var nx1 = cljs.core.nth.call(null,vec__1890486,(0),null);
var ny1 = cljs.core.nth.call(null,vec__1890486,(1),null);
var vec__1890487 = cljs.core.nth.call(null,vec__1890484,(2),null);
var nx2 = cljs.core.nth.call(null,vec__1890487,(0),null);
var ny2 = cljs.core.nth.call(null,vec__1890487,(1),null);
var vec__1890488 = cljs.core.nth.call(null,vec__1890484,(3),null);
var cx1 = cljs.core.nth.call(null,vec__1890488,(0),null);
var cx2 = cljs.core.nth.call(null,vec__1890488,(1),null);
var vec__1890489 = cljs.core.nth.call(null,vec__1890484,(4),null);
var cy1 = cljs.core.nth.call(null,vec__1890489,(0),null);
var cy2 = cljs.core.nth.call(null,vec__1890489,(1),null);
var compatible_QMARK_ = cljs.core.get.call(null,map__1890483__$1,new cljs.core.Keyword(null,"compatible?","compatible?",923422575));
var node_scale = cljs.core.get.call(null,map__1890483__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
if(typeof dynomics.space.ui.t_dynomics$space$ui1890491 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui1890491 = (function (nx1,cx1,ny2,map__1890483,vec__1890489,vec__1890485,make_edge_component,cy2,nx2,vec__1890484,cy1,node_scale,ny1,cx2,vec__1890488,compatible_QMARK_,p__1890471,vec__1890486,vec__1890487,nid2,nid1,meta1890492){
this.nx1 = nx1;
this.cx1 = cx1;
this.ny2 = ny2;
this.map__1890483 = map__1890483;
this.vec__1890489 = vec__1890489;
this.vec__1890485 = vec__1890485;
this.make_edge_component = make_edge_component;
this.cy2 = cy2;
this.nx2 = nx2;
this.vec__1890484 = vec__1890484;
this.cy1 = cy1;
this.node_scale = node_scale;
this.ny1 = ny1;
this.cx2 = cx2;
this.vec__1890488 = vec__1890488;
this.compatible_QMARK_ = compatible_QMARK_;
this.p__1890471 = p__1890471;
this.vec__1890486 = vec__1890486;
this.vec__1890487 = vec__1890487;
this.nid2 = nid2;
this.nid1 = nid1;
this.meta1890492 = meta1890492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui1890491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__1890483,map__1890483__$1,vec__1890484,vec__1890485,nid1,nid2,vec__1890486,nx1,ny1,vec__1890487,nx2,ny2,vec__1890488,cx1,cx2,vec__1890489,cy1,cy2,compatible_QMARK_,node_scale){
return (function (_1890493,meta1890492__$1){
var self__ = this;
var _1890493__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui1890491(self__.nx1,self__.cx1,self__.ny2,self__.map__1890483,self__.vec__1890489,self__.vec__1890485,self__.make_edge_component,self__.cy2,self__.nx2,self__.vec__1890484,self__.cy1,self__.node_scale,self__.ny1,self__.cx2,self__.vec__1890488,self__.compatible_QMARK_,self__.p__1890471,self__.vec__1890486,self__.vec__1890487,self__.nid2,self__.nid1,meta1890492__$1));
});})(map__1890483,map__1890483__$1,vec__1890484,vec__1890485,nid1,nid2,vec__1890486,nx1,ny1,vec__1890487,nx2,ny2,vec__1890488,cx1,cx2,vec__1890489,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui1890491.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__1890483,map__1890483__$1,vec__1890484,vec__1890485,nid1,nid2,vec__1890486,nx1,ny1,vec__1890487,nx2,ny2,vec__1890488,cx1,cx2,vec__1890489,cy1,cy2,compatible_QMARK_,node_scale){
return (function (_1890493){
var self__ = this;
var _1890493__$1 = this;
return self__.meta1890492;
});})(map__1890483,map__1890483__$1,vec__1890484,vec__1890485,nid1,nid2,vec__1890486,nx1,ny1,vec__1890487,nx2,ny2,vec__1890488,cx1,cx2,vec__1890489,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui1890491.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui1890491.prototype.om$core$IRender$render$arity$1 = ((function (map__1890483,map__1890483__$1,vec__1890484,vec__1890485,nid1,nid2,vec__1890486,nx1,ny1,vec__1890487,nx2,ny2,vec__1890488,cx1,cx2,vec__1890489,cy1,cy2,compatible_QMARK_,node_scale){
return (function (this__38742__auto__){
var self__ = this;
var this__38742__auto____$1 = this;
return om.dom.path.call(null,{"key": [cljs.core.str("edge_"),cljs.core.str(self__.nid1),cljs.core.str("_"),cljs.core.str(self__.nid2)].join(''), "className": [cljs.core.str("dynomics_edge "),cljs.core.str((cljs.core.truth_(self__.compatible_QMARK_)?"dynomics_compatible_edge":null))].join(''), "d": dynomics.ui.svg.to_svg_path.call(null,cljs.core.map.call(null,dynomics.ui.svg.make_bezier,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx1,self__.ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nx1 + (self__.node_scale * self__.cx1)),(self__.ny1 + (self__.node_scale * self__.cy1))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx2,self__.ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nx2 + (self__.node_scale * self__.cx2)),(self__.ny2 + (self__.node_scale * self__.cy2))], null)], null)], null)))});
});})(map__1890483,map__1890483__$1,vec__1890484,vec__1890485,nid1,nid2,vec__1890486,nx1,ny1,vec__1890487,nx2,ny2,vec__1890488,cx1,cx2,vec__1890489,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui1890491.getBasis = ((function (map__1890483,map__1890483__$1,vec__1890484,vec__1890485,nid1,nid2,vec__1890486,nx1,ny1,vec__1890487,nx2,ny2,vec__1890488,cx1,cx2,vec__1890489,cy1,cy2,compatible_QMARK_,node_scale){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null),new cljs.core.Symbol(null,"map__1890483","map__1890483",-60293851,null),new cljs.core.Symbol(null,"vec__1890489","vec__1890489",1319186053,null),new cljs.core.Symbol(null,"vec__1890485","vec__1890485",1238335304,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-edge-component","make-edge-component",-530385559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null)], null)], null),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Symbol(null,"compatible?","compatible?",-1731013194,null),new cljs.core.Keyword(null,"compatible?","compatible?",923422575),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for an edge"], null)),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null),new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"vec__1890484","vec__1890484",1463361997,null),new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null),new cljs.core.Symbol(null,"vec__1890488","vec__1890488",1989362193,null),new cljs.core.Symbol(null,"compatible?","compatible?",-1731013194,null),new cljs.core.Symbol(null,"p__1890471","p__1890471",1147832375,null),new cljs.core.Symbol(null,"vec__1890486","vec__1890486",1955512855,null),new cljs.core.Symbol(null,"vec__1890487","vec__1890487",-1567820453,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null),new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"meta1890492","meta1890492",-212503838,null)], null);
});})(map__1890483,map__1890483__$1,vec__1890484,vec__1890485,nid1,nid2,vec__1890486,nx1,ny1,vec__1890487,nx2,ny2,vec__1890488,cx1,cx2,vec__1890489,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui1890491.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui1890491.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui1890491";

dynomics.space.ui.t_dynomics$space$ui1890491.cljs$lang$ctorPrWriter = ((function (map__1890483,map__1890483__$1,vec__1890484,vec__1890485,nid1,nid2,vec__1890486,nx1,ny1,vec__1890487,nx2,ny2,vec__1890488,cx1,cx2,vec__1890489,cy1,cy2,compatible_QMARK_,node_scale){
return (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"dynomics.space.ui/t_dynomics$space$ui1890491");
});})(map__1890483,map__1890483__$1,vec__1890484,vec__1890485,nid1,nid2,vec__1890486,nx1,ny1,vec__1890487,nx2,ny2,vec__1890488,cx1,cx2,vec__1890489,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.__GT_t_dynomics$space$ui1890491 = ((function (map__1890483,map__1890483__$1,vec__1890484,vec__1890485,nid1,nid2,vec__1890486,nx1,ny1,vec__1890487,nx2,ny2,vec__1890488,cx1,cx2,vec__1890489,cy1,cy2,compatible_QMARK_,node_scale){
return (function dynomics$space$ui$make_edge_component_$___GT_t_dynomics$space$ui1890491(nx1__$1,cx1__$1,ny2__$1,map__1890483__$2,vec__1890489__$1,vec__1890485__$1,make_edge_component__$1,cy2__$1,nx2__$1,vec__1890484__$1,cy1__$1,node_scale__$1,ny1__$1,cx2__$1,vec__1890488__$1,compatible_QMARK___$1,p__1890471__$1,vec__1890486__$1,vec__1890487__$1,nid2__$1,nid1__$1,meta1890492){
return (new dynomics.space.ui.t_dynomics$space$ui1890491(nx1__$1,cx1__$1,ny2__$1,map__1890483__$2,vec__1890489__$1,vec__1890485__$1,make_edge_component__$1,cy2__$1,nx2__$1,vec__1890484__$1,cy1__$1,node_scale__$1,ny1__$1,cx2__$1,vec__1890488__$1,compatible_QMARK___$1,p__1890471__$1,vec__1890486__$1,vec__1890487__$1,nid2__$1,nid1__$1,meta1890492));
});})(map__1890483,map__1890483__$1,vec__1890484,vec__1890485,nid1,nid2,vec__1890486,nx1,ny1,vec__1890487,nx2,ny2,vec__1890488,cx1,cx2,vec__1890489,cy1,cy2,compatible_QMARK_,node_scale))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui1890491(nx1,cx1,ny2,map__1890483__$1,vec__1890489,vec__1890485,dynomics$space$ui$make_edge_component,cy2,nx2,vec__1890484,cy1,node_scale,ny1,cx2,vec__1890488,compatible_QMARK_,p__1890471,vec__1890486,vec__1890487,nid2,nid1,null));
});
/**
 * Returns a component for a node and its connections
 */
dynomics.space.ui.make_node_component = (function dynomics$space$ui$make_node_component(p__1890494){
var map__1890509 = p__1890494;
var map__1890509__$1 = ((((!((map__1890509 == null)))?((((map__1890509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890509):map__1890509);
var map__1890510 = cljs.core.get.call(null,map__1890509__$1,new cljs.core.Keyword(null,"node","node",581201198));
var map__1890510__$1 = ((((!((map__1890510 == null)))?((((map__1890510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890510):map__1890510);
var vec__1890511 = cljs.core.get.call(null,map__1890510__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__1890511,(0),null);
var y = cljs.core.nth.call(null,vec__1890511,(1),null);
var t = cljs.core.get.call(null,map__1890510__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var pt = cljs.core.get.call(null,map__1890510__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var id = cljs.core.get.call(null,map__1890510__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var connections = cljs.core.get.call(null,map__1890510__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var node_scale = cljs.core.get.call(null,map__1890509__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var selected_nodes = cljs.core.get.call(null,map__1890509__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var map__1890512 = cljs.core.get.call(null,map__1890509__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var map__1890512__$1 = ((((!((map__1890512 == null)))?((((map__1890512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890512):map__1890512);
var current_tool = cljs.core.get.call(null,map__1890512__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
var msgs = cljs.core.get.call(null,map__1890509__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var pz = cljs.core.get.call(null,map__1890509__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id], null);
if(typeof dynomics.space.ui.t_dynomics$space$ui1890516 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui1890516 = (function (t,connections,x,selected_nodes,vec__1890511,current_tool,pz,map__1890510,path,y,pt,make_node_component,map__1890512,node_scale,p__1890494,map__1890509,msgs,id,meta1890517){
this.t = t;
this.connections = connections;
this.x = x;
this.selected_nodes = selected_nodes;
this.vec__1890511 = vec__1890511;
this.current_tool = current_tool;
this.pz = pz;
this.map__1890510 = map__1890510;
this.path = path;
this.y = y;
this.pt = pt;
this.make_node_component = make_node_component;
this.map__1890512 = map__1890512;
this.node_scale = node_scale;
this.p__1890494 = p__1890494;
this.map__1890509 = map__1890509;
this.msgs = msgs;
this.id = id;
this.meta1890517 = meta1890517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui1890516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (path,map__1890509,map__1890509__$1,map__1890510,map__1890510__$1,vec__1890511,x,y,t,pt,id,connections,node_scale,selected_nodes,map__1890512,map__1890512__$1,current_tool,msgs,pz){
return (function (_1890518,meta1890517__$1){
var self__ = this;
var _1890518__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui1890516(self__.t,self__.connections,self__.x,self__.selected_nodes,self__.vec__1890511,self__.current_tool,self__.pz,self__.map__1890510,self__.path,self__.y,self__.pt,self__.make_node_component,self__.map__1890512,self__.node_scale,self__.p__1890494,self__.map__1890509,self__.msgs,self__.id,meta1890517__$1));
});})(path,map__1890509,map__1890509__$1,map__1890510,map__1890510__$1,vec__1890511,x,y,t,pt,id,connections,node_scale,selected_nodes,map__1890512,map__1890512__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui1890516.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (path,map__1890509,map__1890509__$1,map__1890510,map__1890510__$1,vec__1890511,x,y,t,pt,id,connections,node_scale,selected_nodes,map__1890512,map__1890512__$1,current_tool,msgs,pz){
return (function (_1890518){
var self__ = this;
var _1890518__$1 = this;
return self__.meta1890517;
});})(path,map__1890509,map__1890509__$1,map__1890510,map__1890510__$1,vec__1890511,x,y,t,pt,id,connections,node_scale,selected_nodes,map__1890512,map__1890512__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui1890516.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui1890516.prototype.om$core$IRender$render$arity$1 = ((function (path,map__1890509,map__1890509__$1,map__1890510,map__1890510__$1,vec__1890511,x,y,t,pt,id,connections,node_scale,selected_nodes,map__1890512,map__1890512__$1,current_tool,msgs,pz){
return (function (this__38742__auto__){
var self__ = this;
var this__38742__auto____$1 = this;
return om.dom.g.call(null,{"id": [cljs.core.str("node_"),cljs.core.str(self__.id)].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.x,self__.y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),self__.node_scale], null)), "className": [cljs.core.str("dynomics_node_subgraph "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,self__.path))?"dynomics_node_selected":null))].join(''), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"path","path",-188191168),self__.path,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"path","path",-188191168),self__.path,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null))},om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.3, "className": [cljs.core.str("dynomics_node_selector_dot")].join('')}),om.dom.text.call(null,{"x": (-4), "y": (4), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),0.05], null)), "fill": "black"},[cljs.core.str(self__.pt)].join('')),om.dom.rect.call(null,{"x": (0), "y": (0), "width": (1), "height": (1), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),(-1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),(2),(2)], null)), "className": [cljs.core.str("dynomics_node")].join('')}),om.dom.g.call(null,{"className": "dynomics_node_connections"},cljs.core.map.call(null,((function (this__38742__auto____$1,path,map__1890509,map__1890509__$1,map__1890510,map__1890510__$1,vec__1890511,x,y,t,pt,id,connections,node_scale,selected_nodes,map__1890512,map__1890512__$1,current_tool,msgs,pz){
return (function (p__1890519){
var map__1890520 = p__1890519;
var map__1890520__$1 = ((((!((map__1890520 == null)))?((((map__1890520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890520):map__1890520);
var vec__1890521 = cljs.core.get.call(null,map__1890520__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var cx = cljs.core.nth.call(null,vec__1890521,(0),null);
var cy = cljs.core.nth.call(null,vec__1890521,(1),null);
var cid = cljs.core.get.call(null,map__1890520__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return om.dom.g.call(null,{"className": "dynomics_node_connection", "id": [cljs.core.str("node_"),cljs.core.str(self__.id),cljs.core.str("_connection_"),cljs.core.str(cid)].join('')},om.dom.line.call(null,{"x1": (0), "y1": (0), "x2": cx, "y2": cy, "className": "dynomics_node_connection_line"}),(function (){var path__$1 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null);
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.27, "className": [cljs.core.str("dynomics_node_connection_dot "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,path__$1))?"dynomics_node_selected":null))].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),cx,cy], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"id","id",-1388402092),cid,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"id","id",-1388402092),cid,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null))});
})());
});})(this__38742__auto____$1,path,map__1890509,map__1890509__$1,map__1890510,map__1890510__$1,vec__1890511,x,y,t,pt,id,connections,node_scale,selected_nodes,map__1890512,map__1890512__$1,current_tool,msgs,pz))
,self__.connections)));
});})(path,map__1890509,map__1890509__$1,map__1890510,map__1890510__$1,vec__1890511,x,y,t,pt,id,connections,node_scale,selected_nodes,map__1890512,map__1890512__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui1890516.getBasis = ((function (path,map__1890509,map__1890509__$1,map__1890510,map__1890510__$1,vec__1890511,x,y,t,pt,id,connections,node_scale,selected_nodes,map__1890512,map__1890512__$1,current_tool,msgs,pz){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"vec__1890511","vec__1890511",-522251165,null),new cljs.core.Symbol(null,"current-tool","current-tool",699505924,null),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Symbol(null,"map__1890510","map__1890510",-656374777,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"pt","pt",-2097974902,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-component","make-node-component",-1574550003,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"pt","pt",-2097974902,null),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Keyword(null,"connections","connections",-2064090887)], true, false),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"current-tool","current-tool",699505924,null),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for a node and its connections"], null)),new cljs.core.Symbol(null,"map__1890512","map__1890512",1844920560,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"p__1890494","p__1890494",1646591384,null),new cljs.core.Symbol(null,"map__1890509","map__1890509",1180436344,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta1890517","meta1890517",-119879992,null)], null);
});})(path,map__1890509,map__1890509__$1,map__1890510,map__1890510__$1,vec__1890511,x,y,t,pt,id,connections,node_scale,selected_nodes,map__1890512,map__1890512__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui1890516.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui1890516.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui1890516";

dynomics.space.ui.t_dynomics$space$ui1890516.cljs$lang$ctorPrWriter = ((function (path,map__1890509,map__1890509__$1,map__1890510,map__1890510__$1,vec__1890511,x,y,t,pt,id,connections,node_scale,selected_nodes,map__1890512,map__1890512__$1,current_tool,msgs,pz){
return (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"dynomics.space.ui/t_dynomics$space$ui1890516");
});})(path,map__1890509,map__1890509__$1,map__1890510,map__1890510__$1,vec__1890511,x,y,t,pt,id,connections,node_scale,selected_nodes,map__1890512,map__1890512__$1,current_tool,msgs,pz))
;

dynomics.space.ui.__GT_t_dynomics$space$ui1890516 = ((function (path,map__1890509,map__1890509__$1,map__1890510,map__1890510__$1,vec__1890511,x,y,t,pt,id,connections,node_scale,selected_nodes,map__1890512,map__1890512__$1,current_tool,msgs,pz){
return (function dynomics$space$ui$make_node_component_$___GT_t_dynomics$space$ui1890516(t__$1,connections__$1,x__$1,selected_nodes__$1,vec__1890511__$1,current_tool__$1,pz__$1,map__1890510__$2,path__$1,y__$1,pt__$1,make_node_component__$1,map__1890512__$2,node_scale__$1,p__1890494__$1,map__1890509__$2,msgs__$1,id__$1,meta1890517){
return (new dynomics.space.ui.t_dynomics$space$ui1890516(t__$1,connections__$1,x__$1,selected_nodes__$1,vec__1890511__$1,current_tool__$1,pz__$1,map__1890510__$2,path__$1,y__$1,pt__$1,make_node_component__$1,map__1890512__$2,node_scale__$1,p__1890494__$1,map__1890509__$2,msgs__$1,id__$1,meta1890517));
});})(path,map__1890509,map__1890509__$1,map__1890510,map__1890510__$1,vec__1890511,x,y,t,pt,id,connections,node_scale,selected_nodes,map__1890512,map__1890512__$1,current_tool,msgs,pz))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui1890516(t,connections,x,selected_nodes,vec__1890511,current_tool,pz,map__1890510__$1,path,y,pt,dynomics$space$ui$make_node_component,map__1890512__$1,node_scale,p__1890494,map__1890509__$1,msgs,id,null));
});
dynomics.space.ui.test_component = (function dynomics$space$ui$test_component(x){
if(typeof dynomics.space.ui.t_dynomics$space$ui1890526 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui1890526 = (function (test_component,x,meta1890527){
this.test_component = test_component;
this.x = x;
this.meta1890527 = meta1890527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui1890526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1890528,meta1890527__$1){
var self__ = this;
var _1890528__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui1890526(self__.test_component,self__.x,meta1890527__$1));
});

dynomics.space.ui.t_dynomics$space$ui1890526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1890528){
var self__ = this;
var _1890528__$1 = this;
return self__.meta1890527;
});

dynomics.space.ui.t_dynomics$space$ui1890526.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui1890526.prototype.om$core$IRender$render$arity$1 = (function (this__38742__auto__){
var self__ = this;
var this__38742__auto____$1 = this;
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.2, "fill": (((0.5 > Math.random()))?"orange":"green")});
});

dynomics.space.ui.t_dynomics$space$ui1890526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"test-component","test-component",1959093538,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)))], null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"meta1890527","meta1890527",121341236,null)], null);
});

dynomics.space.ui.t_dynomics$space$ui1890526.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui1890526.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui1890526";

dynomics.space.ui.t_dynomics$space$ui1890526.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"dynomics.space.ui/t_dynomics$space$ui1890526");
});

dynomics.space.ui.__GT_t_dynomics$space$ui1890526 = (function dynomics$space$ui$test_component_$___GT_t_dynomics$space$ui1890526(test_component__$1,x__$1,meta1890527){
return (new dynomics.space.ui.t_dynomics$space$ui1890526(test_component__$1,x__$1,meta1890527));
});

}

return (new dynomics.space.ui.t_dynomics$space$ui1890526(dynomics$space$ui$test_component,x,null));
});
/**
 * Returns a component for the phase-space editor
 */
dynomics.space.ui.make_space_component = (function dynomics$space$ui$make_space_component(p__1890529){
var map__1890547 = p__1890529;
var map__1890547__$1 = ((((!((map__1890547 == null)))?((((map__1890547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890547):map__1890547);
var state = map__1890547__$1;
var map__1890548 = cljs.core.get.call(null,map__1890547__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__1890548__$1 = ((((!((map__1890548 == null)))?((((map__1890548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890548):map__1890548);
var space = map__1890548__$1;
var nodes = cljs.core.get.call(null,map__1890548__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__1890548__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var selected_nodes = cljs.core.get.call(null,map__1890548__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var regions = cljs.core.get.call(null,map__1890548__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var compatibilities = cljs.core.get.call(null,map__1890548__$1,new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024));
var node_scale = cljs.core.get.call(null,map__1890548__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var cf = cljs.core.get.call(null,map__1890547__$1,new cljs.core.Keyword(null,"cf","cf",1480736310));
var map__1890549 = cljs.core.get.call(null,map__1890547__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var map__1890549__$1 = ((((!((map__1890549 == null)))?((((map__1890549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890549):map__1890549);
var current_tool = cljs.core.get.call(null,map__1890549__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
var msgs = cljs.core.get.call(null,map__1890547__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var pz = cljs.core.get.call(null,map__1890547__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
if(typeof dynomics.space.ui.t_dynomics$space$ui1890553 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui1890553 = (function (selected_nodes,map__1890547,current_tool,edges,pz,p__1890529,make_space_component,space,node_scale,map__1890549,regions,map__1890548,state,compatibilities,msgs,nodes,cf,meta1890554){
this.selected_nodes = selected_nodes;
this.map__1890547 = map__1890547;
this.current_tool = current_tool;
this.edges = edges;
this.pz = pz;
this.p__1890529 = p__1890529;
this.make_space_component = make_space_component;
this.space = space;
this.node_scale = node_scale;
this.map__1890549 = map__1890549;
this.regions = regions;
this.map__1890548 = map__1890548;
this.state = state;
this.compatibilities = compatibilities;
this.msgs = msgs;
this.nodes = nodes;
this.cf = cf;
this.meta1890554 = meta1890554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui1890553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__1890547,map__1890547__$1,state,map__1890548,map__1890548__$1,space,nodes,edges,selected_nodes,regions,compatibilities,node_scale,cf,map__1890549,map__1890549__$1,current_tool,msgs,pz){
return (function (_1890555,meta1890554__$1){
var self__ = this;
var _1890555__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui1890553(self__.selected_nodes,self__.map__1890547,self__.current_tool,self__.edges,self__.pz,self__.p__1890529,self__.make_space_component,self__.space,self__.node_scale,self__.map__1890549,self__.regions,self__.map__1890548,self__.state,self__.compatibilities,self__.msgs,self__.nodes,self__.cf,meta1890554__$1));
});})(map__1890547,map__1890547__$1,state,map__1890548,map__1890548__$1,space,nodes,edges,selected_nodes,regions,compatibilities,node_scale,cf,map__1890549,map__1890549__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui1890553.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__1890547,map__1890547__$1,state,map__1890548,map__1890548__$1,space,nodes,edges,selected_nodes,regions,compatibilities,node_scale,cf,map__1890549,map__1890549__$1,current_tool,msgs,pz){
return (function (_1890555){
var self__ = this;
var _1890555__$1 = this;
return self__.meta1890554;
});})(map__1890547,map__1890547__$1,state,map__1890548,map__1890548__$1,space,nodes,edges,selected_nodes,regions,compatibilities,node_scale,cf,map__1890549,map__1890549__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui1890553.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui1890553.prototype.om$core$IRender$render$arity$1 = ((function (map__1890547,map__1890547__$1,state,map__1890548,map__1890548__$1,space,nodes,edges,selected_nodes,regions,compatibilities,node_scale,cf,map__1890549,map__1890549__$1,current_tool,msgs,pz){
return (function (this__38742__auto__){
var self__ = this;
var this__38742__auto____$1 = this;
return om.dom.div.call(null,{"className": [cljs.core.str("dynomics_space "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),self__.cf))?"selected_function":"hidden_function"))].join('')},om.dom.svg.call(null,{"zoomAndPan": false, "preserveAspectRatio": "xMidYMin", "width": "100%", "shape-rendering": "crispEdges", "xmlns": "http://www.w3.org/2000/svg", "className": "dynomics_space_svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "id": "space", "viewBox": "-1 -1 3 3", "height": "100%"},om.dom.g.call(null,{"id": "space_root", "onMouseMove": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null))},om.dom.rect.call(null,{"x": (-16), "y": (-16), "width": (32), "height": (32), "className": "dynomics_space_background"}),om.dom.rect.call(null,{"x": (0), "y": (0), "width": (1), "height": (1), "className": "dynomics_space_space"}),null,null,om.core.build_all.call(null,dynomics.space.ui.make_edge_component,cljs.core.map.call(null,((function (this__38742__auto____$1,map__1890547,map__1890547__$1,state,map__1890548,map__1890548__$1,space,nodes,edges,selected_nodes,regions,compatibilities,node_scale,cf,map__1890549,map__1890549__$1,current_tool,msgs,pz){
return (function (p__1890556){
var vec__1890557 = p__1890556;
var vec__1890558 = cljs.core.nth.call(null,vec__1890557,(0),null);
var _ = cljs.core.nth.call(null,vec__1890558,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__1890558,(1),null);
var nid1 = cljs.core.nth.call(null,vec__1890558,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__1890558,(3),null);
var cid1 = cljs.core.nth.call(null,vec__1890558,(4),null);
var vec__1890559 = cljs.core.nth.call(null,vec__1890557,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__1890559,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__1890559,(1),null);
var nid2 = cljs.core.nth.call(null,vec__1890559,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__1890559,(3),null);
var cid2 = cljs.core.nth.call(null,vec__1890559,(4),null);
var vec__1890560 = cljs.core.get_in.call(null,self__.nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx1 = cljs.core.nth.call(null,vec__1890560,(0),null);
var ny1 = cljs.core.nth.call(null,vec__1890560,(1),null);
var vec__1890561 = cljs.core.get_in.call(null,self__.nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx2 = cljs.core.nth.call(null,vec__1890561,(0),null);
var ny2 = cljs.core.nth.call(null,vec__1890561,(1),null);
var vec__1890562 = cljs.core.get_in.call(null,self__.nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx1 = cljs.core.nth.call(null,vec__1890562,(0),null);
var cy1 = cljs.core.nth.call(null,vec__1890562,(1),null);
var vec__1890563 = cljs.core.get_in.call(null,self__.nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid2,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx2 = cljs.core.nth.call(null,vec__1890563,(0),null);
var cy2 = cljs.core.nth.call(null,vec__1890563,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx2,ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx1,cx2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cy1,cy2], null)], null),new cljs.core.Keyword(null,"compatible?","compatible?",923422575),self__.compatibilities.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null)),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale], null);
});})(this__38742__auto____$1,map__1890547,map__1890547__$1,state,map__1890548,map__1890548__$1,space,nodes,edges,selected_nodes,regions,compatibilities,node_scale,cf,map__1890549,map__1890549__$1,current_tool,msgs,pz))
,self__.edges)),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__38742__auto____$1,map__1890547,map__1890547__$1,state,map__1890548,map__1890548__$1,space,nodes,edges,selected_nodes,regions,compatibilities,node_scale,cf,map__1890549,map__1890549__$1,current_tool,msgs,pz){
return (function (node){
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz], null));
});})(this__38742__auto____$1,map__1890547,map__1890547__$1,state,map__1890548,map__1890548__$1,space,nodes,edges,selected_nodes,regions,compatibilities,node_scale,cf,map__1890549,map__1890549__$1,current_tool,msgs,pz))
,cljs.core.vals.call(null,cljs.core.apply.call(null,cljs.core.dissoc,self__.nodes,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),cljs.core.map.call(null,cljs.core.last,self__.selected_nodes))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__38742__auto____$1,map__1890547,map__1890547__$1,state,map__1890548,map__1890548__$1,space,nodes,edges,selected_nodes,regions,compatibilities,node_scale,cf,map__1890549,map__1890549__$1,current_tool,msgs,pz){
return (function (node){
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz], null));
});})(this__38742__auto____$1,map__1890547,map__1890547__$1,state,map__1890548,map__1890548__$1,space,nodes,edges,selected_nodes,regions,compatibilities,node_scale,cf,map__1890549,map__1890549__$1,current_tool,msgs,pz))
,cljs.core.vals.call(null,cljs.core.select_keys.call(null,self__.nodes,cljs.core.map.call(null,cljs.core.last,self__.selected_nodes)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),null)));
});})(map__1890547,map__1890547__$1,state,map__1890548,map__1890548__$1,space,nodes,edges,selected_nodes,regions,compatibilities,node_scale,cf,map__1890549,map__1890549__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui1890553.getBasis = ((function (map__1890547,map__1890547__$1,state,map__1890548,map__1890548__$1,space,nodes,edges,selected_nodes,regions,compatibilities,node_scale,cf,map__1890549,map__1890549__$1,current_tool,msgs,pz){
return (function (){
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"map__1890547","map__1890547",-131554206,null),new cljs.core.Symbol(null,"current-tool","current-tool",699505924,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Symbol(null,"p__1890529","p__1890529",-2147338491,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-space-component","make-space-component",-638751478,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"compatibilities","compatibilities",289068503,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Keyword(null,"cf","cf",1480736310),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"current-tool","current-tool",699505924,null),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the phase-space editor"], null)),new cljs.core.Symbol(null,"space","space",1988665002,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"map__1890549","map__1890549",-234444880,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"map__1890548","map__1890548",-239551822,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"compatibilities","compatibilities",289068503,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Symbol(null,"meta1890554","meta1890554",-1552337651,null)], null);
});})(map__1890547,map__1890547__$1,state,map__1890548,map__1890548__$1,space,nodes,edges,selected_nodes,regions,compatibilities,node_scale,cf,map__1890549,map__1890549__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui1890553.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui1890553.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui1890553";

dynomics.space.ui.t_dynomics$space$ui1890553.cljs$lang$ctorPrWriter = ((function (map__1890547,map__1890547__$1,state,map__1890548,map__1890548__$1,space,nodes,edges,selected_nodes,regions,compatibilities,node_scale,cf,map__1890549,map__1890549__$1,current_tool,msgs,pz){
return (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"dynomics.space.ui/t_dynomics$space$ui1890553");
});})(map__1890547,map__1890547__$1,state,map__1890548,map__1890548__$1,space,nodes,edges,selected_nodes,regions,compatibilities,node_scale,cf,map__1890549,map__1890549__$1,current_tool,msgs,pz))
;

dynomics.space.ui.__GT_t_dynomics$space$ui1890553 = ((function (map__1890547,map__1890547__$1,state,map__1890548,map__1890548__$1,space,nodes,edges,selected_nodes,regions,compatibilities,node_scale,cf,map__1890549,map__1890549__$1,current_tool,msgs,pz){
return (function dynomics$space$ui$make_space_component_$___GT_t_dynomics$space$ui1890553(selected_nodes__$1,map__1890547__$2,current_tool__$1,edges__$1,pz__$1,p__1890529__$1,make_space_component__$1,space__$1,node_scale__$1,map__1890549__$2,regions__$1,map__1890548__$2,state__$1,compatibilities__$1,msgs__$1,nodes__$1,cf__$1,meta1890554){
return (new dynomics.space.ui.t_dynomics$space$ui1890553(selected_nodes__$1,map__1890547__$2,current_tool__$1,edges__$1,pz__$1,p__1890529__$1,make_space_component__$1,space__$1,node_scale__$1,map__1890549__$2,regions__$1,map__1890548__$2,state__$1,compatibilities__$1,msgs__$1,nodes__$1,cf__$1,meta1890554));
});})(map__1890547,map__1890547__$1,state,map__1890548,map__1890548__$1,space,nodes,edges,selected_nodes,regions,compatibilities,node_scale,cf,map__1890549,map__1890549__$1,current_tool,msgs,pz))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui1890553(selected_nodes,map__1890547__$1,current_tool,edges,pz,p__1890529,dynomics$space$ui$make_space_component,space,node_scale,map__1890549__$1,regions,map__1890548__$1,state,compatibilities,msgs,nodes,cf,null));
});
/**
 * Returns a component for offscreen rendering
 */
dynomics.space.ui.make_prerender_component = (function dynomics$space$ui$make_prerender_component(p__1890564){
var map__1890572 = p__1890564;
var map__1890572__$1 = ((((!((map__1890572 == null)))?((((map__1890572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890572):map__1890572);
var state = map__1890572__$1;
var map__1890573 = cljs.core.get.call(null,map__1890572__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__1890573__$1 = ((((!((map__1890573 == null)))?((((map__1890573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890573):map__1890573);
var space = map__1890573__$1;
var nodes = cljs.core.get.call(null,map__1890573__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__1890573__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var selected_nodes = cljs.core.get.call(null,map__1890573__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var regions = cljs.core.get.call(null,map__1890573__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var node_scale = cljs.core.get.call(null,map__1890573__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var cf = cljs.core.get.call(null,map__1890572__$1,new cljs.core.Keyword(null,"cf","cf",1480736310));
if(typeof dynomics.space.ui.t_dynomics$space$ui1890576 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui1890576 = (function (selected_nodes,make_prerender_component,edges,space,map__1890572,node_scale,regions,state,map__1890573,p__1890564,nodes,cf,meta1890577){
this.selected_nodes = selected_nodes;
this.make_prerender_component = make_prerender_component;
this.edges = edges;
this.space = space;
this.map__1890572 = map__1890572;
this.node_scale = node_scale;
this.regions = regions;
this.state = state;
this.map__1890573 = map__1890573;
this.p__1890564 = p__1890564;
this.nodes = nodes;
this.cf = cf;
this.meta1890577 = meta1890577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui1890576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__1890572,map__1890572__$1,state,map__1890573,map__1890573__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (_1890578,meta1890577__$1){
var self__ = this;
var _1890578__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui1890576(self__.selected_nodes,self__.make_prerender_component,self__.edges,self__.space,self__.map__1890572,self__.node_scale,self__.regions,self__.state,self__.map__1890573,self__.p__1890564,self__.nodes,self__.cf,meta1890577__$1));
});})(map__1890572,map__1890572__$1,state,map__1890573,map__1890573__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.t_dynomics$space$ui1890576.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__1890572,map__1890572__$1,state,map__1890573,map__1890573__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (_1890578){
var self__ = this;
var _1890578__$1 = this;
return self__.meta1890577;
});})(map__1890572,map__1890572__$1,state,map__1890573,map__1890573__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.t_dynomics$space$ui1890576.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui1890576.prototype.om$core$IRender$render$arity$1 = ((function (map__1890572,map__1890572__$1,state,map__1890573,map__1890573__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (this__38742__auto__){
var self__ = this;
var this__38742__auto____$1 = this;
return om.dom.div.call(null,{"className": "prerender_component", "id": "prerender_component"},om.dom.svg.call(null,{"zoomAndPan": false, "preserveAspectRatio": "xMidYMin", "width": "100%", "shape-rendering": "crispEdges", "xmlns": "http://www.w3.org/2000/svg", "className": "dynomics_space_svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "id": "prerender_svg", "viewBox": "-1 -1 3 3", "height": "100%"},dynomics.space.ui.make_type_icon.call(null,(1),(68),1.04,0.1)));
});})(map__1890572,map__1890572__$1,state,map__1890573,map__1890573__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.t_dynomics$space$ui1890576.getBasis = ((function (map__1890572,map__1890572__$1,state,map__1890573,map__1890573__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-prerender-component","make-prerender-component",-630291485,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Keyword(null,"cf","cf",1480736310),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for offscreen rendering"], null)),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"space","space",1988665002,null),new cljs.core.Symbol(null,"map__1890572","map__1890572",-185556816,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__1890573","map__1890573",-1935274122,null),new cljs.core.Symbol(null,"p__1890564","p__1890564",-897027846,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Symbol(null,"meta1890577","meta1890577",2056755781,null)], null);
});})(map__1890572,map__1890572__$1,state,map__1890573,map__1890573__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.t_dynomics$space$ui1890576.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui1890576.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui1890576";

dynomics.space.ui.t_dynomics$space$ui1890576.cljs$lang$ctorPrWriter = ((function (map__1890572,map__1890572__$1,state,map__1890573,map__1890573__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"dynomics.space.ui/t_dynomics$space$ui1890576");
});})(map__1890572,map__1890572__$1,state,map__1890573,map__1890573__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.__GT_t_dynomics$space$ui1890576 = ((function (map__1890572,map__1890572__$1,state,map__1890573,map__1890573__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function dynomics$space$ui$make_prerender_component_$___GT_t_dynomics$space$ui1890576(selected_nodes__$1,make_prerender_component__$1,edges__$1,space__$1,map__1890572__$2,node_scale__$1,regions__$1,state__$1,map__1890573__$2,p__1890564__$1,nodes__$1,cf__$1,meta1890577){
return (new dynomics.space.ui.t_dynomics$space$ui1890576(selected_nodes__$1,make_prerender_component__$1,edges__$1,space__$1,map__1890572__$2,node_scale__$1,regions__$1,state__$1,map__1890573__$2,p__1890564__$1,nodes__$1,cf__$1,meta1890577));
});})(map__1890572,map__1890572__$1,state,map__1890573,map__1890573__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui1890576(selected_nodes,dynomics$space$ui$make_prerender_component,edges,space,map__1890572__$1,node_scale,regions,state,map__1890573__$1,p__1890564,nodes,cf,null));
});

//# sourceMappingURL=ui.js.map