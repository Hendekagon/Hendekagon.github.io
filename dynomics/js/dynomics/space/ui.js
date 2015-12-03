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
var args53242 = [];
var len__25223__auto___53245 = arguments.length;
var i__25224__auto___53246 = (0);
while(true){
if((i__25224__auto___53246 < len__25223__auto___53245)){
args53242.push((arguments[i__25224__auto___53246]));

var G__53247 = (i__25224__auto___53246 + (1));
i__25224__auto___53246 = G__53247;
continue;
} else {
}
break;
}

var G__53244 = args53242.length;
switch (G__53244) {
case 1:
return dynomics.space.ui.to_coords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.ui.to_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53242.length)].join('')));

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
var args53249 = [];
var len__25223__auto___53252 = arguments.length;
var i__25224__auto___53253 = (0);
while(true){
if((i__25224__auto___53253 < len__25223__auto___53252)){
args53249.push((arguments[i__25224__auto___53253]));

var G__53254 = (i__25224__auto___53253 + (1));
i__25224__auto___53253 = G__53254;
continue;
} else {
}
break;
}

var G__53251 = args53249.length;
switch (G__53251) {
case 1:
return dynomics.space.ui.add_pan_zoom_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return dynomics.space.ui.add_pan_zoom_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53249.length)].join('')));

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
dynomics.space.ui.toggle_pan_zoom_BANG_ = (function dynomics$space$ui$toggle_pan_zoom_BANG_(p__53256){
var map__53259 = p__53256;
var map__53259__$1 = ((((!((map__53259 == null)))?((((map__53259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53259):map__53259);
var pz = cljs.core.get.call(null,map__53259__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
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
dynomics.space.ui.disable_pan_zoom_BANG_ = (function dynomics$space$ui$disable_pan_zoom_BANG_(p__53261){
var map__53264 = p__53261;
var map__53264__$1 = ((((!((map__53264 == null)))?((((map__53264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53264):map__53264);
var pz = cljs.core.get.call(null,map__53264__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
pz.disablePan();

return pz.disableZoom();
});
dynomics.space.ui.enable_pan_zoom_BANG_ = (function dynomics$space$ui$enable_pan_zoom_BANG_(p__53266){
var map__53269 = p__53266;
var map__53269__$1 = ((((!((map__53269 == null)))?((((map__53269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53269):map__53269);
var pz = cljs.core.get.call(null,map__53269__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
pz.enablePan();

return pz.enableZoom();
});
dynomics.space.ui.render_to_image = (function dynomics$space$ui$render_to_image(var_args){
var args53271 = [];
var len__25223__auto___53288 = arguments.length;
var i__25224__auto___53289 = (0);
while(true){
if((i__25224__auto___53289 < len__25223__auto___53288)){
args53271.push((arguments[i__25224__auto___53289]));

var G__53290 = (i__25224__auto___53289 + (1));
i__25224__auto___53289 = G__53290;
continue;
} else {
}
break;
}

var G__53273 = args53271.length;
switch (G__53273) {
case 0:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53271.length)].join('')));

}
});

dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$0 = (function (){
return dynomics.space.ui.render_to_image.call(null,"all");
});

dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$1 = (function (id){
var up = dynomics.ui.css.unique_css_properties.call(null,dynomics.ui.css.css_rules.call(null,dynomics.ui.css.main_ui_style_defaults.call(null)));
var svg = document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#prerender_svg_"),cljs.core.str(id)].join('')));
var svgp = svg.parentElement.cloneNode(true);
var canvas = document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#prerender_canvas_"),cljs.core.str(id)].join('')));
var ccss = window.getComputedStyle(svg);
var ni1 = document.createNodeIterator(svg,NodeIterator.SHOW_ELEMENT,null);
var ni2 = document.createNodeIterator(svgp.firstElementChild,NodeIterator.SHOW_ELEMENT,null);
var seq__53274_53292 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni1.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
)),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni2.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
))));
var chunk__53275_53293 = null;
var count__53276_53294 = (0);
var i__53277_53295 = (0);
while(true){
if((i__53277_53295 < count__53276_53294)){
var vec__53278_53296 = cljs.core._nth.call(null,chunk__53275_53293,i__53277_53295);
var i_53297 = cljs.core.nth.call(null,vec__53278_53296,(0),null);
var j_53298 = cljs.core.nth.call(null,vec__53278_53296,(1),null);
j_53298.removeAttribute("id");

j_53298.removeAttribute("class");

j_53298.removeAttribute("data-reactid");

var ccss_53299__$1 = window.getComputedStyle(i_53297);
var seq__53279_53300 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_53299__$1.length));
var chunk__53280_53301 = null;
var count__53281_53302 = (0);
var i__53282_53303 = (0);
while(true){
if((i__53282_53303 < count__53281_53302)){
var is_53304 = cljs.core._nth.call(null,chunk__53280_53301,i__53282_53303);
var p_53305 = ccss_53299__$1.item(is_53304);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_53305)))){
j_53298.style.setProperty(p_53305,ccss_53299__$1.getPropertyValue(p_53305));
} else {
}

var G__53306 = seq__53279_53300;
var G__53307 = chunk__53280_53301;
var G__53308 = count__53281_53302;
var G__53309 = (i__53282_53303 + (1));
seq__53279_53300 = G__53306;
chunk__53280_53301 = G__53307;
count__53281_53302 = G__53308;
i__53282_53303 = G__53309;
continue;
} else {
var temp__4425__auto___53310 = cljs.core.seq.call(null,seq__53279_53300);
if(temp__4425__auto___53310){
var seq__53279_53311__$1 = temp__4425__auto___53310;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53279_53311__$1)){
var c__24968__auto___53312 = cljs.core.chunk_first.call(null,seq__53279_53311__$1);
var G__53313 = cljs.core.chunk_rest.call(null,seq__53279_53311__$1);
var G__53314 = c__24968__auto___53312;
var G__53315 = cljs.core.count.call(null,c__24968__auto___53312);
var G__53316 = (0);
seq__53279_53300 = G__53313;
chunk__53280_53301 = G__53314;
count__53281_53302 = G__53315;
i__53282_53303 = G__53316;
continue;
} else {
var is_53317 = cljs.core.first.call(null,seq__53279_53311__$1);
var p_53318 = ccss_53299__$1.item(is_53317);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_53318)))){
j_53298.style.setProperty(p_53318,ccss_53299__$1.getPropertyValue(p_53318));
} else {
}

var G__53319 = cljs.core.next.call(null,seq__53279_53311__$1);
var G__53320 = null;
var G__53321 = (0);
var G__53322 = (0);
seq__53279_53300 = G__53319;
chunk__53280_53301 = G__53320;
count__53281_53302 = G__53321;
i__53282_53303 = G__53322;
continue;
}
} else {
}
}
break;
}

var G__53323 = seq__53274_53292;
var G__53324 = chunk__53275_53293;
var G__53325 = count__53276_53294;
var G__53326 = (i__53277_53295 + (1));
seq__53274_53292 = G__53323;
chunk__53275_53293 = G__53324;
count__53276_53294 = G__53325;
i__53277_53295 = G__53326;
continue;
} else {
var temp__4425__auto___53327 = cljs.core.seq.call(null,seq__53274_53292);
if(temp__4425__auto___53327){
var seq__53274_53328__$1 = temp__4425__auto___53327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53274_53328__$1)){
var c__24968__auto___53329 = cljs.core.chunk_first.call(null,seq__53274_53328__$1);
var G__53330 = cljs.core.chunk_rest.call(null,seq__53274_53328__$1);
var G__53331 = c__24968__auto___53329;
var G__53332 = cljs.core.count.call(null,c__24968__auto___53329);
var G__53333 = (0);
seq__53274_53292 = G__53330;
chunk__53275_53293 = G__53331;
count__53276_53294 = G__53332;
i__53277_53295 = G__53333;
continue;
} else {
var vec__53283_53334 = cljs.core.first.call(null,seq__53274_53328__$1);
var i_53335 = cljs.core.nth.call(null,vec__53283_53334,(0),null);
var j_53336 = cljs.core.nth.call(null,vec__53283_53334,(1),null);
j_53336.removeAttribute("id");

j_53336.removeAttribute("class");

j_53336.removeAttribute("data-reactid");

var ccss_53337__$1 = window.getComputedStyle(i_53335);
var seq__53284_53338 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_53337__$1.length));
var chunk__53285_53339 = null;
var count__53286_53340 = (0);
var i__53287_53341 = (0);
while(true){
if((i__53287_53341 < count__53286_53340)){
var is_53342 = cljs.core._nth.call(null,chunk__53285_53339,i__53287_53341);
var p_53343 = ccss_53337__$1.item(is_53342);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_53343)))){
j_53336.style.setProperty(p_53343,ccss_53337__$1.getPropertyValue(p_53343));
} else {
}

var G__53344 = seq__53284_53338;
var G__53345 = chunk__53285_53339;
var G__53346 = count__53286_53340;
var G__53347 = (i__53287_53341 + (1));
seq__53284_53338 = G__53344;
chunk__53285_53339 = G__53345;
count__53286_53340 = G__53346;
i__53287_53341 = G__53347;
continue;
} else {
var temp__4425__auto___53348__$1 = cljs.core.seq.call(null,seq__53284_53338);
if(temp__4425__auto___53348__$1){
var seq__53284_53349__$1 = temp__4425__auto___53348__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53284_53349__$1)){
var c__24968__auto___53350 = cljs.core.chunk_first.call(null,seq__53284_53349__$1);
var G__53351 = cljs.core.chunk_rest.call(null,seq__53284_53349__$1);
var G__53352 = c__24968__auto___53350;
var G__53353 = cljs.core.count.call(null,c__24968__auto___53350);
var G__53354 = (0);
seq__53284_53338 = G__53351;
chunk__53285_53339 = G__53352;
count__53286_53340 = G__53353;
i__53287_53341 = G__53354;
continue;
} else {
var is_53355 = cljs.core.first.call(null,seq__53284_53349__$1);
var p_53356 = ccss_53337__$1.item(is_53355);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_53356)))){
j_53336.style.setProperty(p_53356,ccss_53337__$1.getPropertyValue(p_53356));
} else {
}

var G__53357 = cljs.core.next.call(null,seq__53284_53349__$1);
var G__53358 = null;
var G__53359 = (0);
var G__53360 = (0);
seq__53284_53338 = G__53357;
chunk__53285_53339 = G__53358;
count__53286_53340 = G__53359;
i__53287_53341 = G__53360;
continue;
}
} else {
}
}
break;
}

var G__53361 = cljs.core.next.call(null,seq__53274_53328__$1);
var G__53362 = null;
var G__53363 = (0);
var G__53364 = (0);
seq__53274_53292 = G__53361;
chunk__53275_53293 = G__53362;
count__53276_53294 = G__53363;
i__53277_53295 = G__53364;
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
dynomics.space.ui.make_handler = (function dynomics$space$ui$make_handler(transform,type_key,p__53365){
var map__53368 = p__53365;
var map__53368__$1 = ((((!((map__53368 == null)))?((((map__53368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53368):map__53368);
var s = map__53368__$1;
var msgs = cljs.core.get.call(null,map__53368__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var current_tool = cljs.core.get.call(null,map__53368__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
return ((function (map__53368,map__53368__$1,s,msgs,current_tool){
return (function (e){
e.stopPropagation();

var mp = transform.call(null,e.clientX,e.clientY);
cljs.core.async.put_BANG_.call(null,msgs,cljs.core.merge.call(null,s,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),type_key,new cljs.core.Keyword(null,"type","type",1174270348),current_tool,new cljs.core.Keyword(null,"position","position",-2011731912),mp,new cljs.core.Keyword(null,"event","event",301435442),e], null)));

return null;
});
;})(map__53368,map__53368__$1,s,msgs,current_tool))
});
dynomics.space.ui.arrowhead = (function dynomics$space$ui$arrowhead(trajectory){
var vec__53372 = cljs.core.subvec.call(null,trajectory,((cljs.core.count.call(null,trajectory) - (1)) - (1)),cljs.core.count.call(null,trajectory));
var p1 = cljs.core.nth.call(null,vec__53372,(0),null);
var p2 = cljs.core.nth.call(null,vec__53372,(1),null);
var vec__53373 = p2;
var ox = cljs.core.nth.call(null,vec__53373,(0),null);
var oy = cljs.core.nth.call(null,vec__53373,(1),null);
var v = cljs.core.map.call(null,cljs.core._,p1,p2);
var a = (dynomics.space.core.r2d * (dynomics.space.core.PI2 - dynomics.space.core.angle.call(null,v)));
var a1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);
var a2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
var a3 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null);
var E = cljs.core.interpose;
return om.dom.path.call(null,{"className": "trajectory_arrowhead", "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),ox,oy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),a], null)), "d": cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,"M ",E.call(null," ",a1)," L ",E.call(null," ",a2)," L ",E.call(null," ",a3)," z"))});
});
dynomics.space.ui.make_trajectory_group = (function dynomics$space$ui$make_trajectory_group(with_arrowhead,trajectory){
return om.dom.g.call(null,{"className": "trajectory_group"},om.dom.path.call(null,{"className": "trajectory_path", "d": cljs.core.apply.call(null,cljs.core.str,cljs.core.reduce.call(null,(function (r,p){
return cljs.core.concat.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" L "], null),cljs.core.interpose.call(null," ",p));
}),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M "], null),cljs.core.interpose.call(null," ",cljs.core.first.call(null,trajectory))),cljs.core.rest.call(null,trajectory)))}),(cljs.core.truth_(with_arrowhead)?dynomics.space.ui.arrowhead.call(null,cljs.core.vec.call(null,trajectory)):null));
});
dynomics.space.ui.saddle_2 = (function dynomics$space$ui$saddle_2(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__53376){
var vec__53377 = p__53376;
var x = cljs.core.nth.call(null,vec__53377,(0),null);
var y = cljs.core.nth.call(null,vec__53377,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((-1) * x),y], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(-12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(-12)], null)], null)], null));
});
dynomics.space.ui.saddle_3 = (function dynomics$space$ui$saddle_3(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__53380){
var vec__53381 = p__53380;
var x = cljs.core.nth.call(null,vec__53381,(0),null);
var y = cljs.core.nth.call(null,vec__53381,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,((-1) * y)], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(-24)], null)], null)], null));
});
dynomics.space.ui.saddle_4 = (function dynomics$space$ui$saddle_4(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__53384){
var vec__53385 = p__53384;
var x = cljs.core.nth.call(null,vec__53385,(0),null);
var y = cljs.core.nth.call(null,vec__53385,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(-12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(-8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(-16)], null)], null)], null));
});
dynomics.space.ui.saddle_5 = (function dynomics$space$ui$saddle_5(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__53388){
var vec__53389 = p__53388;
var x = cljs.core.nth.call(null,vec__53389,(0),null);
var y = cljs.core.nth.call(null,vec__53389,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.04,-0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(-12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(-16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(-8)], null)], null)], null));
});
dynomics.space.ui.spiral = (function dynomics$space$ui$spiral(var_args){
var args53390 = [];
var len__25223__auto___53393 = arguments.length;
var i__25224__auto___53394 = (0);
while(true){
if((i__25224__auto___53394 < len__25223__auto___53393)){
args53390.push((arguments[i__25224__auto___53394]));

var G__53395 = (i__25224__auto___53394 + (1));
i__25224__auto___53394 = G__53395;
continue;
} else {
}
break;
}

var G__53392 = args53390.length;
switch (G__53392) {
case 3:
return dynomics.space.ui.spiral.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return dynomics.space.ui.spiral.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53390.length)].join('')));

}
});

dynomics.space.ui.spiral.cljs$core$IFn$_invoke$arity$3 = (function (samples,expansion,rotation){
return dynomics.space.ui.spiral.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(1),samples,expansion,rotation);
});

dynomics.space.ui.spiral.cljs$core$IFn$_invoke$arity$5 = (function (start,init_points,samples,expansion,rotation){
return dynomics.space.core.ds_evolution.call(null,samples,cljs.core.assoc.call(null,dynomics.space.core.make_ds.call(null,dynomics.space.core.p2c.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expansion,rotation], null))),new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.first.call(null,dynomics.space.core.ds_evolution.call(null,init_points,cljs.core.assoc.call(null,dynomics.space.core.make_ds.call(null,dynomics.space.core.p2c.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),dynomics.space.core.PIb4], null))),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null))))));
});

dynomics.space.ui.spiral.cljs$lang$maxFixedArity = 5;
dynomics.space.ui.get_icon_fn = (function dynomics$space$ui$get_icon_fn(type_id){
return cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.partial.call(null,dynomics.space.ui.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(0)], null),(8),(16),0.97,(0)),cljs.core.partial.call(null,dynomics.space.ui.spiral,(32),1.1,0.5),cljs.core.partial.call(null,dynomics.space.ui.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null),(8),(16),1.045,(0)),cljs.core.partial.call(null,dynomics.space.ui.saddle_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(8),(20)),cljs.core.partial.call(null,dynomics.space.ui.spiral,(32),1.1,-0.5),cljs.core.partial.call(null,dynomics.space.ui.saddle_3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(8),(20)),cljs.core.partial.call(null,dynomics.space.ui.saddle_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(8),(20)),cljs.core.partial.call(null,dynomics.space.ui.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(0)], null),(1),(32),0.97,0.42),cljs.core.partial.call(null,dynomics.space.ui.saddle_5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(8),(20)),cljs.core.partial.call(null,dynomics.space.ui.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(0)], null),(1),(32),0.97,-0.42)]),type_id,cljs.core.partial.call(null,dynomics.space.ui.spiral,(155),1.02,0.1));
});
dynomics.space.ui.make_type_icon = (function dynomics$space$ui$make_type_icon(type_id){
om.dom.rect.call(null,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(-1),new cljs.core.Keyword(null,"y","y",-1757859776),(-1),new cljs.core.Keyword(null,"width","width",-384071477),(3),new cljs.core.Keyword(null,"height","height",1025178622),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"red"], null));

return om.dom.g.call(null,{"id": [cljs.core.str("dynomics_type_icon_"),cljs.core.str(type_id)].join(''), "className": [cljs.core.str("dynomics_type_icon "),cljs.core.str([cljs.core.str("type_icon_"),cljs.core.str(type_id)].join(''))].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),0.5,0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),0.05], null))},cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.ui.make_trajectory_group,true),dynomics.space.ui.get_icon_fn.call(null,type_id).call(null)));
});
dynomics.space.ui.make_prerender_icon = (function dynomics$space$ui$make_prerender_icon(id,type){
return om.dom.div.call(null,{},om.dom.canvas.call(null,{"id": [cljs.core.str("prerender_canvas_"),cljs.core.str(id)].join(''), "width": (32), "height": (32)}),om.dom.div.call(null,{"classsName": "dynomics_node_type_selector", "id": [cljs.core.str("prerender_svg_box_"),cljs.core.str(id)].join('')},om.dom.svg.call(null,{"zoomAndPan": false, "preserveAspectRatio": "xMidYMin", "width": "32px", "shape-rendering": "crispEdges", "xmlns": "http://www.w3.org/2000/svg", "classsName": "dynomics_space_svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "id": [cljs.core.str("prerender_svg_"),cljs.core.str(id)].join(''), "viewBox": "-1 -1 3 3", "height": "32px"},dynomics.space.ui.make_type_icon.call(null,id))));
});
dynomics.space.ui.make_paths = (function dynomics$space$ui$make_paths(p__53397){
var map__53404 = p__53397;
var map__53404__$1 = ((((!((map__53404 == null)))?((((map__53404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53404):map__53404);
var space = map__53404__$1;
var nodes = cljs.core.get.call(null,map__53404__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__53404__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var regions = cljs.core.get.call(null,map__53404__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var node_scale = cljs.core.get.call(null,map__53404__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
cljs.core.println.call(null,"Regions ",regions);

return cljs.core.map.call(null,((function (map__53404,map__53404__$1,space,nodes,edges,regions,node_scale){
return (function (region){
return cljs.core.reduce.call(null,((function (map__53404,map__53404__$1,space,nodes,edges,regions,node_scale){
return (function (beziers,connection){
return cljs.core.conj.call(null,beziers,cljs.core.map.call(null,((function (map__53404,map__53404__$1,space,nodes,edges,regions,node_scale){
return (function (p__53406){
var vec__53407 = p__53406;
var nid1 = cljs.core.nth.call(null,vec__53407,(0),null);
var cid1 = cljs.core.nth.call(null,vec__53407,(1),null);
var vec__53408 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx1 = cljs.core.nth.call(null,vec__53408,(0),null);
var ny1 = cljs.core.nth.call(null,vec__53408,(1),null);
var vec__53409 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx1 = cljs.core.nth.call(null,vec__53409,(0),null);
var cy1 = cljs.core.nth.call(null,vec__53409,(1),null);
return dynomics.ui.svg.make_bezier.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx1 + (node_scale * cx1)),(ny1 + (node_scale * cy1))], null)], null));
});})(map__53404,map__53404__$1,space,nodes,edges,regions,node_scale))
,cljs.core.map.call(null,dynomics.space.core.simplify_connection,connection)));
});})(map__53404,map__53404__$1,space,nodes,edges,regions,node_scale))
,cljs.core.PersistentVector.EMPTY,region);
});})(map__53404,map__53404__$1,space,nodes,edges,regions,node_scale))
,regions);
});
/**
 * Returns a palette of tools
 */
dynomics.space.ui.make_tools_palette_component = (function dynomics$space$ui$make_tools_palette_component(p__53410){
var map__53417 = p__53410;
var map__53417__$1 = ((((!((map__53417 == null)))?((((map__53417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53417):map__53417);
var state = map__53417__$1;
var current_tool = cljs.core.get.call(null,map__53417__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
var tools = cljs.core.get.call(null,map__53417__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
var tools_order = cljs.core.get.call(null,map__53417__$1,new cljs.core.Keyword(null,"tools-order","tools-order",-615877648));
var state_updates = cljs.core.get.call(null,map__53417__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
return om.dom.div.call(null,{"className": "dynomics_tool_things"},om.dom.div.call(null,{"className": "dynomics_tool_selectors"},cljs.core.map.call(null,((function (map__53417,map__53417__$1,state,current_tool,tools,tools_order,state_updates){
return (function (p__53419){
var vec__53420 = p__53419;
var tk = cljs.core.nth.call(null,vec__53420,(0),null);
var map__53421 = cljs.core.nth.call(null,vec__53420,(1),null);
var map__53421__$1 = ((((!((map__53421 == null)))?((((map__53421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53421):map__53421);
var description = cljs.core.get.call(null,map__53421__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var icon = cljs.core.get.call(null,map__53421__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var keybinding = cljs.core.get.call(null,map__53421__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
return om.dom.div.call(null,{"className": [cljs.core.str("dynomics_tool_selector "),cljs.core.str(((cljs.core._EQ_.call(null,tk,current_tool))?"dynomics_tool_selected":null))].join(''), "title": [cljs.core.str(description),cljs.core.str(" ( "),cljs.core.str((((keybinding instanceof cljs.core.Keyword))?cljs.core.name.call(null,keybinding):keybinding)),cljs.core.str(" )")].join(''), "onMouseDown": ((function (vec__53420,tk,map__53421,map__53421__$1,description,icon,keybinding,map__53417,map__53417__$1,state,current_tool,tools,tools_order,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__53420,tk,map__53421,map__53421__$1,description,icon,keybinding,map__53417,map__53417__$1,state,current_tool,tools,tools_order,state_updates){
return (function (s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),tk);
});})(vec__53420,tk,map__53421,map__53421__$1,description,icon,keybinding,map__53417,map__53417__$1,state,current_tool,tools,tools_order,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tool","tool",-1298696470),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null));

return null;
});})(vec__53420,tk,map__53421,map__53421__$1,description,icon,keybinding,map__53417,map__53417__$1,state,current_tool,tools,tools_order,state_updates))
},icon);
});})(map__53417,map__53417__$1,state,current_tool,tools,tools_order,state_updates))
,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,tools),tools_order))),om.dom.div.call(null,{"className": "dynomics_current_tool_text", "title": cljs.core.get_in.call(null,tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tool,new cljs.core.Keyword(null,"description","description",-1428560544)], null))},cljs.core.get_in.call(null,tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tool,new cljs.core.Keyword(null,"name","name",1843675177)], null))));
});
/**
 * Returns a node-type component for the node types palette,
 *   which can prerender its SVG to a canvas & therefore
 *   cache the resulting image, to save on components in the DOM if need be.
 */
dynomics.space.ui.make_node_types_cached_component = (function dynomics$space$ui$make_node_types_cached_component(p__53423,owner){
var map__53429 = p__53423;
var map__53429__$1 = ((((!((map__53429 == null)))?((((map__53429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53429):map__53429);
var id = cljs.core.get.call(null,map__53429__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.call(null,map__53429__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(typeof dynomics.space.ui.t_dynomics$space$ui53431 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui53431 = (function (make_node_types_cached_component,p__53423,owner,map__53429,id,type,meta53432){
this.make_node_types_cached_component = make_node_types_cached_component;
this.p__53423 = p__53423;
this.owner = owner;
this.map__53429 = map__53429;
this.id = id;
this.type = type;
this.meta53432 = meta53432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui53431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__53429,map__53429__$1,id,type){
return (function (_53433,meta53432__$1){
var self__ = this;
var _53433__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui53431(self__.make_node_types_cached_component,self__.p__53423,self__.owner,self__.map__53429,self__.id,self__.type,meta53432__$1));
});})(map__53429,map__53429__$1,id,type))
;

dynomics.space.ui.t_dynomics$space$ui53431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__53429,map__53429__$1,id,type){
return (function (_53433){
var self__ = this;
var _53433__$1 = this;
return self__.meta53432;
});})(map__53429,map__53429__$1,id,type))
;

dynomics.space.ui.t_dynomics$space$ui53431.prototype.om$core$IInitState$ = true;

dynomics.space.ui.t_dynomics$space$ui53431.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__53429,map__53429__$1,id,type){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__4423__auto__ = localStorage.getItem([cljs.core.str("dataurl_"),cljs.core.str(self__.id)].join(''));
if(cljs.core.truth_(temp__4423__auto__)){
var d = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dataurl","dataurl",-2004200406),d], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dataurl","dataurl",-2004200406),null], null);
}
});})(map__53429,map__53429__$1,id,type))
;

dynomics.space.ui.t_dynomics$space$ui53431.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui53431.prototype.om$core$IRender$render$arity$1 = ((function (map__53429,map__53429__$1,id,type){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__4423__auto__ = new cljs.core.Keyword(null,"dataurl","dataurl",-2004200406).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner));
if(cljs.core.truth_(temp__4423__auto__)){
var dataurl = temp__4423__auto__;
return om.dom.img.call(null,{"width": (32), "height": (32), "src": dataurl});
} else {
return dynomics.space.ui.make_prerender_icon.call(null,self__.id,self__.type);
}
});})(map__53429,map__53429__$1,id,type))
;

dynomics.space.ui.t_dynomics$space$ui53431.prototype.om$core$IDidMount$ = true;

dynomics.space.ui.t_dynomics$space$ui53431.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__53429,map__53429__$1,id,type){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"dataurl","dataurl",-2004200406).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner)))){
var dataurl = dynomics.space.ui.render_to_image.call(null,self__.id);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dataurl","dataurl",-2004200406),dataurl], null));

return localStorage.setItem([cljs.core.str("dataurl_"),cljs.core.str(self__.id)].join(''),dataurl);
} else {
return null;
}
});})(map__53429,map__53429__$1,id,type))
;

dynomics.space.ui.t_dynomics$space$ui53431.getBasis = ((function (map__53429,map__53429__$1,id,type){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-cached-component","make-node-types-cached-component",-655003199,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a node-type component for the node types palette,\n  which can prerender its SVG to a canvas & therefore\n  cache the resulting image, to save on components in the DOM if need be."], null)),new cljs.core.Symbol(null,"p__53423","p__53423",-481091277,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__53429","map__53429",1959318392,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"meta53432","meta53432",-2045536798,null)], null);
});})(map__53429,map__53429__$1,id,type))
;

dynomics.space.ui.t_dynomics$space$ui53431.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui53431.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui53431";

dynomics.space.ui.t_dynomics$space$ui53431.cljs$lang$ctorPrWriter = ((function (map__53429,map__53429__$1,id,type){
return (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"dynomics.space.ui/t_dynomics$space$ui53431");
});})(map__53429,map__53429__$1,id,type))
;

dynomics.space.ui.__GT_t_dynomics$space$ui53431 = ((function (map__53429,map__53429__$1,id,type){
return (function dynomics$space$ui$make_node_types_cached_component_$___GT_t_dynomics$space$ui53431(make_node_types_cached_component__$1,p__53423__$1,owner__$1,map__53429__$2,id__$1,type__$1,meta53432){
return (new dynomics.space.ui.t_dynomics$space$ui53431(make_node_types_cached_component__$1,p__53423__$1,owner__$1,map__53429__$2,id__$1,type__$1,meta53432));
});})(map__53429,map__53429__$1,id,type))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui53431(dynomics$space$ui$make_node_types_cached_component,p__53423,owner,map__53429__$1,id,type,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a component for the node types palette
 */
dynomics.space.ui.make_node_types_palette_component = (function dynomics$space$ui$make_node_types_palette_component(p__53434){
var map__53443 = p__53434;
var map__53443__$1 = ((((!((map__53443 == null)))?((((map__53443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53443):map__53443);
var state = map__53443__$1;
var component = cljs.core.get.call(null,map__53443__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var state_updates = cljs.core.get.call(null,map__53443__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
if(typeof dynomics.space.ui.t_dynomics$space$ui53445 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui53445 = (function (make_node_types_palette_component,p__53434,map__53443,state,component,state_updates,meta53446){
this.make_node_types_palette_component = make_node_types_palette_component;
this.p__53434 = p__53434;
this.map__53443 = map__53443;
this.state = state;
this.component = component;
this.state_updates = state_updates;
this.meta53446 = meta53446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui53445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__53443,map__53443__$1,state,component,state_updates){
return (function (_53447,meta53446__$1){
var self__ = this;
var _53447__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui53445(self__.make_node_types_palette_component,self__.p__53434,self__.map__53443,self__.state,self__.component,self__.state_updates,meta53446__$1));
});})(map__53443,map__53443__$1,state,component,state_updates))
;

dynomics.space.ui.t_dynomics$space$ui53445.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__53443,map__53443__$1,state,component,state_updates){
return (function (_53447){
var self__ = this;
var _53447__$1 = this;
return self__.meta53446;
});})(map__53443,map__53443__$1,state,component,state_updates))
;

dynomics.space.ui.t_dynomics$space$ui53445.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui53445.prototype.om$core$IRender$render$arity$1 = ((function (map__53443,map__53443__$1,state,component,state_updates){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"className": "dynomics_node_types"},cljs.core.map.call(null,((function (this$__$1,map__53443,map__53443__$1,state,component,state_updates){
return (function (p__53448){
var map__53449 = p__53448;
var map__53449__$1 = ((((!((map__53449 == null)))?((((map__53449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53449):map__53449);
var id = cljs.core.get.call(null,map__53449__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var stability = cljs.core.get.call(null,map__53449__$1,new cljs.core.Keyword(null,"stability","stability",1733225509));
var type = cljs.core.get.call(null,map__53449__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return om.dom.div.call(null,{"className": [cljs.core.str("dynomics_node_type_selector")].join(''), "title": [cljs.core.str("Set selected nodes to "),cljs.core.str(id),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,stability)),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,type))].join(''), "onMouseDown": ((function (map__53449,map__53449__$1,id,stability,type,this$__$1,map__53443,map__53443__$1,state,component,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.get_in.call(null,self__.component,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"node-types","node-types",1539943342),new cljs.core.Keyword(null,"tools","tools",-1241731990),id,new cljs.core.Keyword(null,"fn","fn",-1175266204)], null)),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Node type "),cljs.core.str(id)].join('')], null)], null));

return null;
});})(map__53449,map__53449__$1,id,stability,type,this$__$1,map__53443,map__53443__$1,state,component,state_updates))
},om.core.build.call(null,dynomics.space.ui.make_node_types_cached_component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("ntp"),cljs.core.str(id)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
});})(this$__$1,map__53443,map__53443__$1,state,component,state_updates))
,cljs.core.vals.call(null,dynomics.space.core.node_types)));
});})(map__53443,map__53443__$1,state,component,state_updates))
;

dynomics.space.ui.t_dynomics$space$ui53445.getBasis = ((function (map__53443,map__53443__$1,state,component,state_updates){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-palette-component","make-node-types-palette-component",54407202,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the node types palette"], null)),new cljs.core.Symbol(null,"p__53434","p__53434",-2084913831,null),new cljs.core.Symbol(null,"map__53443","map__53443",-1837121885,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"meta53446","meta53446",1732837306,null)], null);
});})(map__53443,map__53443__$1,state,component,state_updates))
;

dynomics.space.ui.t_dynomics$space$ui53445.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui53445.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui53445";

dynomics.space.ui.t_dynomics$space$ui53445.cljs$lang$ctorPrWriter = ((function (map__53443,map__53443__$1,state,component,state_updates){
return (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"dynomics.space.ui/t_dynomics$space$ui53445");
});})(map__53443,map__53443__$1,state,component,state_updates))
;

dynomics.space.ui.__GT_t_dynomics$space$ui53445 = ((function (map__53443,map__53443__$1,state,component,state_updates){
return (function dynomics$space$ui$make_node_types_palette_component_$___GT_t_dynomics$space$ui53445(make_node_types_palette_component__$1,p__53434__$1,map__53443__$2,state__$1,component__$1,state_updates__$1,meta53446){
return (new dynomics.space.ui.t_dynomics$space$ui53445(make_node_types_palette_component__$1,p__53434__$1,map__53443__$2,state__$1,component__$1,state_updates__$1,meta53446));
});})(map__53443,map__53443__$1,state,component,state_updates))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui53445(dynomics$space$ui$make_node_types_palette_component,p__53434,map__53443__$1,state,component,state_updates,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a component for an edge
 */
dynomics.space.ui.make_edge_component = (function dynomics$space$ui$make_edge_component(p__53451){
var map__53463 = p__53451;
var map__53463__$1 = ((((!((map__53463 == null)))?((((map__53463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53463):map__53463);
var vec__53464 = cljs.core.get.call(null,map__53463__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__53465 = cljs.core.nth.call(null,vec__53464,(0),null);
var nid1 = cljs.core.nth.call(null,vec__53465,(0),null);
var nid2 = cljs.core.nth.call(null,vec__53465,(1),null);
var vec__53466 = cljs.core.nth.call(null,vec__53464,(1),null);
var nx1 = cljs.core.nth.call(null,vec__53466,(0),null);
var ny1 = cljs.core.nth.call(null,vec__53466,(1),null);
var vec__53467 = cljs.core.nth.call(null,vec__53464,(2),null);
var nx2 = cljs.core.nth.call(null,vec__53467,(0),null);
var ny2 = cljs.core.nth.call(null,vec__53467,(1),null);
var vec__53468 = cljs.core.nth.call(null,vec__53464,(3),null);
var cx1 = cljs.core.nth.call(null,vec__53468,(0),null);
var cx2 = cljs.core.nth.call(null,vec__53468,(1),null);
var vec__53469 = cljs.core.nth.call(null,vec__53464,(4),null);
var cy1 = cljs.core.nth.call(null,vec__53469,(0),null);
var cy2 = cljs.core.nth.call(null,vec__53469,(1),null);
var compatible_QMARK_ = cljs.core.get.call(null,map__53463__$1,new cljs.core.Keyword(null,"compatible?","compatible?",923422575));
var node_scale = cljs.core.get.call(null,map__53463__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
if(typeof dynomics.space.ui.t_dynomics$space$ui53471 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui53471 = (function (nx1,vec__53466,cx1,vec__53468,ny2,vec__53469,make_edge_component,cy2,nx2,map__53463,cy1,node_scale,ny1,cx2,vec__53465,compatible_QMARK_,p__53451,vec__53467,vec__53464,nid2,nid1,meta53472){
this.nx1 = nx1;
this.vec__53466 = vec__53466;
this.cx1 = cx1;
this.vec__53468 = vec__53468;
this.ny2 = ny2;
this.vec__53469 = vec__53469;
this.make_edge_component = make_edge_component;
this.cy2 = cy2;
this.nx2 = nx2;
this.map__53463 = map__53463;
this.cy1 = cy1;
this.node_scale = node_scale;
this.ny1 = ny1;
this.cx2 = cx2;
this.vec__53465 = vec__53465;
this.compatible_QMARK_ = compatible_QMARK_;
this.p__53451 = p__53451;
this.vec__53467 = vec__53467;
this.vec__53464 = vec__53464;
this.nid2 = nid2;
this.nid1 = nid1;
this.meta53472 = meta53472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui53471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__53463,map__53463__$1,vec__53464,vec__53465,nid1,nid2,vec__53466,nx1,ny1,vec__53467,nx2,ny2,vec__53468,cx1,cx2,vec__53469,cy1,cy2,compatible_QMARK_,node_scale){
return (function (_53473,meta53472__$1){
var self__ = this;
var _53473__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui53471(self__.nx1,self__.vec__53466,self__.cx1,self__.vec__53468,self__.ny2,self__.vec__53469,self__.make_edge_component,self__.cy2,self__.nx2,self__.map__53463,self__.cy1,self__.node_scale,self__.ny1,self__.cx2,self__.vec__53465,self__.compatible_QMARK_,self__.p__53451,self__.vec__53467,self__.vec__53464,self__.nid2,self__.nid1,meta53472__$1));
});})(map__53463,map__53463__$1,vec__53464,vec__53465,nid1,nid2,vec__53466,nx1,ny1,vec__53467,nx2,ny2,vec__53468,cx1,cx2,vec__53469,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui53471.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__53463,map__53463__$1,vec__53464,vec__53465,nid1,nid2,vec__53466,nx1,ny1,vec__53467,nx2,ny2,vec__53468,cx1,cx2,vec__53469,cy1,cy2,compatible_QMARK_,node_scale){
return (function (_53473){
var self__ = this;
var _53473__$1 = this;
return self__.meta53472;
});})(map__53463,map__53463__$1,vec__53464,vec__53465,nid1,nid2,vec__53466,nx1,ny1,vec__53467,nx2,ny2,vec__53468,cx1,cx2,vec__53469,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui53471.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui53471.prototype.om$core$IRender$render$arity$1 = ((function (map__53463,map__53463__$1,vec__53464,vec__53465,nid1,nid2,vec__53466,nx1,ny1,vec__53467,nx2,ny2,vec__53468,cx1,cx2,vec__53469,cy1,cy2,compatible_QMARK_,node_scale){
return (function (this__38982__auto__){
var self__ = this;
var this__38982__auto____$1 = this;
return om.dom.path.call(null,{"key": [cljs.core.str("edge_"),cljs.core.str(self__.nid1),cljs.core.str("_"),cljs.core.str(self__.nid2)].join(''), "className": [cljs.core.str("dynomics_edge "),cljs.core.str((cljs.core.truth_(self__.compatible_QMARK_)?"dynomics_compatible_edge":null))].join(''), "d": dynomics.ui.svg.to_svg_path.call(null,cljs.core.map.call(null,dynomics.ui.svg.make_bezier,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx1,self__.ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nx1 + (self__.node_scale * self__.cx1)),(self__.ny1 + (self__.node_scale * self__.cy1))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx2,self__.ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nx2 + (self__.node_scale * self__.cx2)),(self__.ny2 + (self__.node_scale * self__.cy2))], null)], null)], null)))});
});})(map__53463,map__53463__$1,vec__53464,vec__53465,nid1,nid2,vec__53466,nx1,ny1,vec__53467,nx2,ny2,vec__53468,cx1,cx2,vec__53469,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui53471.getBasis = ((function (map__53463,map__53463__$1,vec__53464,vec__53465,nid1,nid2,vec__53466,nx1,ny1,vec__53467,nx2,ny2,vec__53468,cx1,cx2,vec__53469,cy1,cy2,compatible_QMARK_,node_scale){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"vec__53466","vec__53466",1057792675,null),new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"vec__53468","vec__53468",1799823236,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null),new cljs.core.Symbol(null,"vec__53469","vec__53469",-86934713,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-edge-component","make-edge-component",-530385559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null)], null)], null),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Symbol(null,"compatible?","compatible?",-1731013194,null),new cljs.core.Keyword(null,"compatible?","compatible?",923422575),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for an edge"], null)),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null),new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"map__53463","map__53463",-908508721,null),new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null),new cljs.core.Symbol(null,"vec__53465","vec__53465",-399806414,null),new cljs.core.Symbol(null,"compatible?","compatible?",-1731013194,null),new cljs.core.Symbol(null,"p__53451","p__53451",1609532439,null),new cljs.core.Symbol(null,"vec__53467","vec__53467",-1509777767,null),new cljs.core.Symbol(null,"vec__53464","vec__53464",-1686714471,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null),new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"meta53472","meta53472",-260772471,null)], null);
});})(map__53463,map__53463__$1,vec__53464,vec__53465,nid1,nid2,vec__53466,nx1,ny1,vec__53467,nx2,ny2,vec__53468,cx1,cx2,vec__53469,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui53471.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui53471.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui53471";

dynomics.space.ui.t_dynomics$space$ui53471.cljs$lang$ctorPrWriter = ((function (map__53463,map__53463__$1,vec__53464,vec__53465,nid1,nid2,vec__53466,nx1,ny1,vec__53467,nx2,ny2,vec__53468,cx1,cx2,vec__53469,cy1,cy2,compatible_QMARK_,node_scale){
return (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"dynomics.space.ui/t_dynomics$space$ui53471");
});})(map__53463,map__53463__$1,vec__53464,vec__53465,nid1,nid2,vec__53466,nx1,ny1,vec__53467,nx2,ny2,vec__53468,cx1,cx2,vec__53469,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.__GT_t_dynomics$space$ui53471 = ((function (map__53463,map__53463__$1,vec__53464,vec__53465,nid1,nid2,vec__53466,nx1,ny1,vec__53467,nx2,ny2,vec__53468,cx1,cx2,vec__53469,cy1,cy2,compatible_QMARK_,node_scale){
return (function dynomics$space$ui$make_edge_component_$___GT_t_dynomics$space$ui53471(nx1__$1,vec__53466__$1,cx1__$1,vec__53468__$1,ny2__$1,vec__53469__$1,make_edge_component__$1,cy2__$1,nx2__$1,map__53463__$2,cy1__$1,node_scale__$1,ny1__$1,cx2__$1,vec__53465__$1,compatible_QMARK___$1,p__53451__$1,vec__53467__$1,vec__53464__$1,nid2__$1,nid1__$1,meta53472){
return (new dynomics.space.ui.t_dynomics$space$ui53471(nx1__$1,vec__53466__$1,cx1__$1,vec__53468__$1,ny2__$1,vec__53469__$1,make_edge_component__$1,cy2__$1,nx2__$1,map__53463__$2,cy1__$1,node_scale__$1,ny1__$1,cx2__$1,vec__53465__$1,compatible_QMARK___$1,p__53451__$1,vec__53467__$1,vec__53464__$1,nid2__$1,nid1__$1,meta53472));
});})(map__53463,map__53463__$1,vec__53464,vec__53465,nid1,nid2,vec__53466,nx1,ny1,vec__53467,nx2,ny2,vec__53468,cx1,cx2,vec__53469,cy1,cy2,compatible_QMARK_,node_scale))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui53471(nx1,vec__53466,cx1,vec__53468,ny2,vec__53469,dynomics$space$ui$make_edge_component,cy2,nx2,map__53463__$1,cy1,node_scale,ny1,cx2,vec__53465,compatible_QMARK_,p__53451,vec__53467,vec__53464,nid2,nid1,null));
});
dynomics.space.ui.make_open_region_component = (function dynomics$space$ui$make_open_region_component(p__53474){
var map__53487 = p__53474;
var map__53487__$1 = ((((!((map__53487 == null)))?((((map__53487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53487):map__53487);
var node_id = cljs.core.get.call(null,map__53487__$1,new cljs.core.Keyword(null,"node-id","node-id",779482292));
var quadrant_type = cljs.core.get.call(null,map__53487__$1,new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370));
var vec__53488 = cljs.core.get.call(null,map__53487__$1,new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631));
var qx = cljs.core.nth.call(null,vec__53488,(0),null);
var qy = cljs.core.nth.call(null,vec__53488,(1),null);
var vec__53489 = cljs.core.get.call(null,map__53487__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p1 = cljs.core.nth.call(null,vec__53489,(0),null);
var p2 = cljs.core.nth.call(null,vec__53489,(1),null);
var map__53490 = cljs.core.nth.call(null,vec__53489,(2),null);
var map__53490__$1 = ((((!((map__53490 == null)))?((((map__53490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53490):map__53490);
var p3 = map__53490__$1;
var vec__53491 = cljs.core.get.call(null,map__53490__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var x = cljs.core.nth.call(null,vec__53491,(0),null);
var y = cljs.core.nth.call(null,vec__53491,(1),null);
var vec__53492 = cljs.core.get.call(null,map__53490__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__53493 = cljs.core.nth.call(null,vec__53492,(0),null);
var cx = cljs.core.nth.call(null,vec__53493,(0),null);
var cy = cljs.core.nth.call(null,vec__53493,(1),null);
var p4 = cljs.core.nth.call(null,vec__53489,(3),null);
if(typeof dynomics.space.ui.t_dynomics$space$ui53496 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui53496 = (function (x,y,p2,vec__53491,p4,p3,qx,p__53474,map__53490,qy,vec__53493,vec__53488,vec__53492,p1,map__53487,make_open_region_component,vec__53489,cx,cy,node_id,quadrant_type,meta53497){
this.x = x;
this.y = y;
this.p2 = p2;
this.vec__53491 = vec__53491;
this.p4 = p4;
this.p3 = p3;
this.qx = qx;
this.p__53474 = p__53474;
this.map__53490 = map__53490;
this.qy = qy;
this.vec__53493 = vec__53493;
this.vec__53488 = vec__53488;
this.vec__53492 = vec__53492;
this.p1 = p1;
this.map__53487 = map__53487;
this.make_open_region_component = make_open_region_component;
this.vec__53489 = vec__53489;
this.cx = cx;
this.cy = cy;
this.node_id = node_id;
this.quadrant_type = quadrant_type;
this.meta53497 = meta53497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui53496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__53487,map__53487__$1,node_id,quadrant_type,vec__53488,qx,qy,vec__53489,p1,p2,map__53490,map__53490__$1,p3,vec__53491,x,y,vec__53492,vec__53493,cx,cy,p4){
return (function (_53498,meta53497__$1){
var self__ = this;
var _53498__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui53496(self__.x,self__.y,self__.p2,self__.vec__53491,self__.p4,self__.p3,self__.qx,self__.p__53474,self__.map__53490,self__.qy,self__.vec__53493,self__.vec__53488,self__.vec__53492,self__.p1,self__.map__53487,self__.make_open_region_component,self__.vec__53489,self__.cx,self__.cy,self__.node_id,self__.quadrant_type,meta53497__$1));
});})(map__53487,map__53487__$1,node_id,quadrant_type,vec__53488,qx,qy,vec__53489,p1,p2,map__53490,map__53490__$1,p3,vec__53491,x,y,vec__53492,vec__53493,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui53496.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__53487,map__53487__$1,node_id,quadrant_type,vec__53488,qx,qy,vec__53489,p1,p2,map__53490,map__53490__$1,p3,vec__53491,x,y,vec__53492,vec__53493,cx,cy,p4){
return (function (_53498){
var self__ = this;
var _53498__$1 = this;
return self__.meta53497;
});})(map__53487,map__53487__$1,node_id,quadrant_type,vec__53488,qx,qy,vec__53489,p1,p2,map__53490,map__53490__$1,p3,vec__53491,x,y,vec__53492,vec__53493,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui53496.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui53496.prototype.om$core$IRender$render$arity$1 = ((function (map__53487,map__53487__$1,node_id,quadrant_type,vec__53488,qx,qy,vec__53489,p1,p2,map__53490,map__53490__$1,p3,vec__53491,x,y,vec__53492,vec__53493,cx,cy,p4){
return (function (this__38982__auto__){
var self__ = this;
var this__38982__auto____$1 = this;
return om.dom.g.call(null,{},om.dom.defs.call(null,{},om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(self__.node_id),cljs.core.str("_"),cljs.core.str(self__.quadrant_type)].join(''), "gradientUnits": "userSpaceOnUse", "cx": self__.x, "cy": self__.y, "r": 0.04},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,self__.quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,self__.quadrant_type), "stopOpacity": "0"}))),om.dom.path.call(null,{"className": [cljs.core.str("ddynomics_open_region "),cljs.core.str([cljs.core.str("ddynomics_open_region_type_"),cljs.core.str(self__.quadrant_type)].join(''))].join(''), "fill": [cljs.core.str("url(#"),cljs.core.str([cljs.core.str("qg_"),cljs.core.str(self__.node_id),cljs.core.str("_"),cljs.core.str(self__.quadrant_type)].join('')),cljs.core.str(")")].join(''), "d": [cljs.core.str(dynomics.ui.svg.to_svg_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p1,self__.p2], null))),cljs.core.str(dynomics.ui.svg.to_svg_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,self__.p3,new cljs.core.Keyword(null,"ml","ml",1909675057),"L"),self__.p4], null))),cljs.core.str("z")].join('')}));
});})(map__53487,map__53487__$1,node_id,quadrant_type,vec__53488,qx,qy,vec__53489,p1,p2,map__53490,map__53490__$1,p3,vec__53491,x,y,vec__53492,vec__53493,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui53496.getBasis = ((function (map__53487,map__53487__$1,node_id,quadrant_type,vec__53488,qx,qy,vec__53489,p1,p2,map__53490,map__53490__$1,p3,vec__53491,x,y,vec__53492,vec__53493,cx,cy,p4){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null),new cljs.core.Symbol(null,"vec__53491","vec__53491",1131422312,null),new cljs.core.Symbol(null,"p4","p4",550404713,null),new cljs.core.Symbol(null,"p3","p3",-923395030,null),new cljs.core.Symbol(null,"qx","qx",876946123,null),new cljs.core.Symbol(null,"p__53474","p__53474",-792344692,null),new cljs.core.Symbol(null,"map__53490","map__53490",-1870696240,null),new cljs.core.Symbol(null,"qy","qy",1271868883,null),new cljs.core.Symbol(null,"vec__53493","vec__53493",39696275,null),new cljs.core.Symbol(null,"vec__53488","vec__53488",-1701096588,null),new cljs.core.Symbol(null,"vec__53492","vec__53492",-815808331,null),new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"map__53487","map__53487",-1946330698,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-open-region-component","make-open-region-component",530106712,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Keyword(null,"node-id","node-id",779482292),new cljs.core.Symbol(null,"quadrant-type","quadrant-type",333980157,null),new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"qx","qx",876946123,null),new cljs.core.Symbol(null,"qy","qy",1271868883,null)], null),new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"cy","cy",-1899104709,null)], null)], null),new cljs.core.Keyword(null,"control-points","control-points",-238538325),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"p3","p3",-923395030,null)], true, false),new cljs.core.Symbol(null,"p4","p4",550404713,null)], null),new cljs.core.Keyword(null,"points","points",-1486596883)], true, false)], null)))], null)),new cljs.core.Symbol(null,"vec__53489","vec__53489",-1320811654,null),new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"cy","cy",-1899104709,null),new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Symbol(null,"quadrant-type","quadrant-type",333980157,null),new cljs.core.Symbol(null,"meta53497","meta53497",-718324611,null)], null);
});})(map__53487,map__53487__$1,node_id,quadrant_type,vec__53488,qx,qy,vec__53489,p1,p2,map__53490,map__53490__$1,p3,vec__53491,x,y,vec__53492,vec__53493,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui53496.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui53496.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui53496";

dynomics.space.ui.t_dynomics$space$ui53496.cljs$lang$ctorPrWriter = ((function (map__53487,map__53487__$1,node_id,quadrant_type,vec__53488,qx,qy,vec__53489,p1,p2,map__53490,map__53490__$1,p3,vec__53491,x,y,vec__53492,vec__53493,cx,cy,p4){
return (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"dynomics.space.ui/t_dynomics$space$ui53496");
});})(map__53487,map__53487__$1,node_id,quadrant_type,vec__53488,qx,qy,vec__53489,p1,p2,map__53490,map__53490__$1,p3,vec__53491,x,y,vec__53492,vec__53493,cx,cy,p4))
;

dynomics.space.ui.__GT_t_dynomics$space$ui53496 = ((function (map__53487,map__53487__$1,node_id,quadrant_type,vec__53488,qx,qy,vec__53489,p1,p2,map__53490,map__53490__$1,p3,vec__53491,x,y,vec__53492,vec__53493,cx,cy,p4){
return (function dynomics$space$ui$make_open_region_component_$___GT_t_dynomics$space$ui53496(x__$1,y__$1,p2__$1,vec__53491__$1,p4__$1,p3__$1,qx__$1,p__53474__$1,map__53490__$2,qy__$1,vec__53493__$1,vec__53488__$1,vec__53492__$1,p1__$1,map__53487__$2,make_open_region_component__$1,vec__53489__$1,cx__$1,cy__$1,node_id__$1,quadrant_type__$1,meta53497){
return (new dynomics.space.ui.t_dynomics$space$ui53496(x__$1,y__$1,p2__$1,vec__53491__$1,p4__$1,p3__$1,qx__$1,p__53474__$1,map__53490__$2,qy__$1,vec__53493__$1,vec__53488__$1,vec__53492__$1,p1__$1,map__53487__$2,make_open_region_component__$1,vec__53489__$1,cx__$1,cy__$1,node_id__$1,quadrant_type__$1,meta53497));
});})(map__53487,map__53487__$1,node_id,quadrant_type,vec__53488,qx,qy,vec__53489,p1,p2,map__53490,map__53490__$1,p3,vec__53491,x,y,vec__53492,vec__53493,cx,cy,p4))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui53496(x,y,p2,vec__53491,p4,p3,qx,p__53474,map__53490__$1,qy,vec__53493,vec__53488,vec__53492,p1,map__53487__$1,dynomics$space$ui$make_open_region_component,vec__53489,cx,cy,node_id,quadrant_type,null));
});
/**
 * Returns a component for a node and its connections
 */
dynomics.space.ui.make_node_component = (function dynomics$space$ui$make_node_component(p__53499){
var map__53514 = p__53499;
var map__53514__$1 = ((((!((map__53514 == null)))?((((map__53514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53514):map__53514);
var map__53515 = cljs.core.get.call(null,map__53514__$1,new cljs.core.Keyword(null,"node","node",581201198));
var map__53515__$1 = ((((!((map__53515 == null)))?((((map__53515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53515):map__53515);
var vec__53516 = cljs.core.get.call(null,map__53515__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__53516,(0),null);
var y = cljs.core.nth.call(null,vec__53516,(1),null);
var t = cljs.core.get.call(null,map__53515__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var node_type = cljs.core.get.call(null,map__53515__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var id = cljs.core.get.call(null,map__53515__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var connections = cljs.core.get.call(null,map__53515__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var node_scale = cljs.core.get.call(null,map__53514__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var selected_nodes = cljs.core.get.call(null,map__53514__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var map__53517 = cljs.core.get.call(null,map__53514__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var map__53517__$1 = ((((!((map__53517 == null)))?((((map__53517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53517):map__53517);
var current_tool = cljs.core.get.call(null,map__53517__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
var msgs = cljs.core.get.call(null,map__53514__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var pz = cljs.core.get.call(null,map__53514__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id], null);
if(typeof dynomics.space.ui.t_dynomics$space$ui53521 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui53521 = (function (t,connections,x,selected_nodes,current_tool,p__53499,map__53515,pz,map__53517,path,y,map__53514,make_node_component,vec__53516,node_scale,node_type,msgs,id,meta53522){
this.t = t;
this.connections = connections;
this.x = x;
this.selected_nodes = selected_nodes;
this.current_tool = current_tool;
this.p__53499 = p__53499;
this.map__53515 = map__53515;
this.pz = pz;
this.map__53517 = map__53517;
this.path = path;
this.y = y;
this.map__53514 = map__53514;
this.make_node_component = make_node_component;
this.vec__53516 = vec__53516;
this.node_scale = node_scale;
this.node_type = node_type;
this.msgs = msgs;
this.id = id;
this.meta53522 = meta53522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui53521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (path,map__53514,map__53514__$1,map__53515,map__53515__$1,vec__53516,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__53517,map__53517__$1,current_tool,msgs,pz){
return (function (_53523,meta53522__$1){
var self__ = this;
var _53523__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui53521(self__.t,self__.connections,self__.x,self__.selected_nodes,self__.current_tool,self__.p__53499,self__.map__53515,self__.pz,self__.map__53517,self__.path,self__.y,self__.map__53514,self__.make_node_component,self__.vec__53516,self__.node_scale,self__.node_type,self__.msgs,self__.id,meta53522__$1));
});})(path,map__53514,map__53514__$1,map__53515,map__53515__$1,vec__53516,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__53517,map__53517__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui53521.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (path,map__53514,map__53514__$1,map__53515,map__53515__$1,vec__53516,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__53517,map__53517__$1,current_tool,msgs,pz){
return (function (_53523){
var self__ = this;
var _53523__$1 = this;
return self__.meta53522;
});})(path,map__53514,map__53514__$1,map__53515,map__53515__$1,vec__53516,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__53517,map__53517__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui53521.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui53521.prototype.om$core$IRender$render$arity$1 = ((function (path,map__53514,map__53514__$1,map__53515,map__53515__$1,vec__53516,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__53517,map__53517__$1,current_tool,msgs,pz){
return (function (this__38982__auto__){
var self__ = this;
var this__38982__auto____$1 = this;
return om.dom.g.call(null,{"id": [cljs.core.str("node_"),cljs.core.str(self__.id)].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.x,self__.y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),self__.node_scale], null)), "className": [cljs.core.str("dynomics_node_subgraph "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,self__.path))?"dynomics_node_selected":null))].join(''), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"path","path",-188191168),self__.path,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"path","path",-188191168),self__.path,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null))},null,null,om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.3, "className": [cljs.core.str("dynomics_node_selector_dot")].join('')}),null,om.dom.rect.call(null,{"x": (0), "y": (0), "width": (1), "height": (1), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),(-1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),(2),(2)], null)), "className": [cljs.core.str("dynomics_node")].join('')}),om.dom.g.call(null,{"className": "dynomics_node_connections"},cljs.core.map.call(null,((function (this__38982__auto____$1,path,map__53514,map__53514__$1,map__53515,map__53515__$1,vec__53516,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__53517,map__53517__$1,current_tool,msgs,pz){
return (function (p__53524){
var map__53525 = p__53524;
var map__53525__$1 = ((((!((map__53525 == null)))?((((map__53525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53525):map__53525);
var vec__53526 = cljs.core.get.call(null,map__53525__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var cx = cljs.core.nth.call(null,vec__53526,(0),null);
var cy = cljs.core.nth.call(null,vec__53526,(1),null);
var cid = cljs.core.get.call(null,map__53525__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return om.dom.g.call(null,{"className": "dynomics_node_connection", "id": [cljs.core.str("node_"),cljs.core.str(self__.id),cljs.core.str("_connection_"),cljs.core.str(cid)].join('')},om.dom.line.call(null,{"x1": (0), "y1": (0), "x2": cx, "y2": cy, "className": "dynomics_node_connection_line"}),(function (){var path__$1 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null);
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.27, "className": [cljs.core.str("dynomics_node_connection_dot "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,path__$1))?"dynomics_node_selected":null))].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),cx,cy], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"id","id",-1388402092),cid,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"id","id",-1388402092),cid,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null))});
})());
});})(this__38982__auto____$1,path,map__53514,map__53514__$1,map__53515,map__53515__$1,vec__53516,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__53517,map__53517__$1,current_tool,msgs,pz))
,self__.connections)));
});})(path,map__53514,map__53514__$1,map__53515,map__53515__$1,vec__53516,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__53517,map__53517__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui53521.getBasis = ((function (path,map__53514,map__53514__$1,map__53515,map__53515__$1,vec__53516,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__53517,map__53517__$1,current_tool,msgs,pz){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"current-tool","current-tool",699505924,null),new cljs.core.Symbol(null,"p__53499","p__53499",-1258068667,null),new cljs.core.Symbol(null,"map__53515","map__53515",907060741,null),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Symbol(null,"map__53517","map__53517",-22889595,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"map__53514","map__53514",1377251082,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-component","make-node-component",-1574550003,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Keyword(null,"connections","connections",-2064090887)], true, false),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"current-tool","current-tool",699505924,null),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for a node and its connections"], null)),new cljs.core.Symbol(null,"vec__53516","vec__53516",743157389,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta53522","meta53522",-1478170327,null)], null);
});})(path,map__53514,map__53514__$1,map__53515,map__53515__$1,vec__53516,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__53517,map__53517__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui53521.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui53521.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui53521";

dynomics.space.ui.t_dynomics$space$ui53521.cljs$lang$ctorPrWriter = ((function (path,map__53514,map__53514__$1,map__53515,map__53515__$1,vec__53516,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__53517,map__53517__$1,current_tool,msgs,pz){
return (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"dynomics.space.ui/t_dynomics$space$ui53521");
});})(path,map__53514,map__53514__$1,map__53515,map__53515__$1,vec__53516,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__53517,map__53517__$1,current_tool,msgs,pz))
;

dynomics.space.ui.__GT_t_dynomics$space$ui53521 = ((function (path,map__53514,map__53514__$1,map__53515,map__53515__$1,vec__53516,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__53517,map__53517__$1,current_tool,msgs,pz){
return (function dynomics$space$ui$make_node_component_$___GT_t_dynomics$space$ui53521(t__$1,connections__$1,x__$1,selected_nodes__$1,current_tool__$1,p__53499__$1,map__53515__$2,pz__$1,map__53517__$2,path__$1,y__$1,map__53514__$2,make_node_component__$1,vec__53516__$1,node_scale__$1,node_type__$1,msgs__$1,id__$1,meta53522){
return (new dynomics.space.ui.t_dynomics$space$ui53521(t__$1,connections__$1,x__$1,selected_nodes__$1,current_tool__$1,p__53499__$1,map__53515__$2,pz__$1,map__53517__$2,path__$1,y__$1,map__53514__$2,make_node_component__$1,vec__53516__$1,node_scale__$1,node_type__$1,msgs__$1,id__$1,meta53522));
});})(path,map__53514,map__53514__$1,map__53515,map__53515__$1,vec__53516,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__53517,map__53517__$1,current_tool,msgs,pz))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui53521(t,connections,x,selected_nodes,current_tool,p__53499,map__53515__$1,pz,map__53517__$1,path,y,map__53514__$1,dynomics$space$ui$make_node_component,vec__53516,node_scale,node_type,msgs,id,null));
});
dynomics.space.ui.test_component = (function dynomics$space$ui$test_component(x){
if(typeof dynomics.space.ui.t_dynomics$space$ui53531 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui53531 = (function (test_component,x,meta53532){
this.test_component = test_component;
this.x = x;
this.meta53532 = meta53532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui53531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53533,meta53532__$1){
var self__ = this;
var _53533__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui53531(self__.test_component,self__.x,meta53532__$1));
});

dynomics.space.ui.t_dynomics$space$ui53531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53533){
var self__ = this;
var _53533__$1 = this;
return self__.meta53532;
});

dynomics.space.ui.t_dynomics$space$ui53531.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui53531.prototype.om$core$IRender$render$arity$1 = (function (this__38982__auto__){
var self__ = this;
var this__38982__auto____$1 = this;
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.2, "fill": (((0.5 > Math.random()))?"orange":"green")});
});

dynomics.space.ui.t_dynomics$space$ui53531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"test-component","test-component",1959093538,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)))], null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"meta53532","meta53532",-1567150793,null)], null);
});

dynomics.space.ui.t_dynomics$space$ui53531.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui53531.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui53531";

dynomics.space.ui.t_dynomics$space$ui53531.cljs$lang$ctorPrWriter = (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"dynomics.space.ui/t_dynomics$space$ui53531");
});

dynomics.space.ui.__GT_t_dynomics$space$ui53531 = (function dynomics$space$ui$test_component_$___GT_t_dynomics$space$ui53531(test_component__$1,x__$1,meta53532){
return (new dynomics.space.ui.t_dynomics$space$ui53531(test_component__$1,x__$1,meta53532));
});

}

return (new dynomics.space.ui.t_dynomics$space$ui53531(dynomics$space$ui$test_component,x,null));
});
dynomics.space.ui.make_quadrant_gradients = (function dynomics$space$ui$make_quadrant_gradients(){
var iter__24937__auto__ = (function dynomics$space$ui$make_quadrant_gradients_$_iter__53538(s__53539){
return (new cljs.core.LazySeq(null,(function (){
var s__53539__$1 = s__53539;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__53539__$1);
if(temp__4425__auto__){
var s__53539__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53539__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__53539__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__53541 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__53540 = (0);
while(true){
if((i__53540 < size__24936__auto__)){
var quadrant_type = cljs.core._nth.call(null,c__24935__auto__,i__53540);
cljs.core.chunk_append.call(null,b__53541,om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(quadrant_type)].join(''), "gradientUnits": "objectBoundingBox", "cx": (0), "cy": (0), "r": (1)},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "0"})));

var G__53542 = (i__53540 + (1));
i__53540 = G__53542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53541),dynomics$space$ui$make_quadrant_gradients_$_iter__53538.call(null,cljs.core.chunk_rest.call(null,s__53539__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53541),null);
}
} else {
var quadrant_type = cljs.core.first.call(null,s__53539__$2);
return cljs.core.cons.call(null,om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(quadrant_type)].join(''), "gradientUnits": "objectBoundingBox", "cx": (0), "cy": (0), "r": (1)},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "0"})),dynomics$space$ui$make_quadrant_gradients_$_iter__53538.call(null,cljs.core.rest.call(null,s__53539__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24937__auto__.call(null,cljs.core.range.call(null,(4)));
});
/**
 * Returns a component for the phase-space editor
 */
dynomics.space.ui.make_space_component = (function dynomics$space$ui$make_space_component(p__53543){
var map__53553 = p__53543;
var map__53553__$1 = ((((!((map__53553 == null)))?((((map__53553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53553):map__53553);
var state = map__53553__$1;
var map__53554 = cljs.core.get.call(null,map__53553__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__53554__$1 = ((((!((map__53554 == null)))?((((map__53554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53554):map__53554);
var space = map__53554__$1;
var nodes = cljs.core.get.call(null,map__53554__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__53554__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var selected_nodes = cljs.core.get.call(null,map__53554__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var regions = cljs.core.get.call(null,map__53554__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var compatibilities = cljs.core.get.call(null,map__53554__$1,new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024));
var graph = cljs.core.get.call(null,map__53554__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var node_scale = cljs.core.get.call(null,map__53554__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var cf = cljs.core.get.call(null,map__53553__$1,new cljs.core.Keyword(null,"cf","cf",1480736310));
var map__53555 = cljs.core.get.call(null,map__53553__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var map__53555__$1 = ((((!((map__53555 == null)))?((((map__53555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53555):map__53555);
var current_tool = cljs.core.get.call(null,map__53555__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
var msgs = cljs.core.get.call(null,map__53553__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var pz = cljs.core.get.call(null,map__53553__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
if(typeof dynomics.space.ui.t_dynomics$space$ui53559 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui53559 = (function (selected_nodes,current_tool,edges,pz,map__53553,make_space_component,space,map__53555,node_scale,regions,p__53543,state,compatibilities,msgs,nodes,graph,cf,map__53554,meta53560){
this.selected_nodes = selected_nodes;
this.current_tool = current_tool;
this.edges = edges;
this.pz = pz;
this.map__53553 = map__53553;
this.make_space_component = make_space_component;
this.space = space;
this.map__53555 = map__53555;
this.node_scale = node_scale;
this.regions = regions;
this.p__53543 = p__53543;
this.state = state;
this.compatibilities = compatibilities;
this.msgs = msgs;
this.nodes = nodes;
this.graph = graph;
this.cf = cf;
this.map__53554 = map__53554;
this.meta53560 = meta53560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui53559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__53553,map__53553__$1,state,map__53554,map__53554__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__53555,map__53555__$1,current_tool,msgs,pz){
return (function (_53561,meta53560__$1){
var self__ = this;
var _53561__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui53559(self__.selected_nodes,self__.current_tool,self__.edges,self__.pz,self__.map__53553,self__.make_space_component,self__.space,self__.map__53555,self__.node_scale,self__.regions,self__.p__53543,self__.state,self__.compatibilities,self__.msgs,self__.nodes,self__.graph,self__.cf,self__.map__53554,meta53560__$1));
});})(map__53553,map__53553__$1,state,map__53554,map__53554__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__53555,map__53555__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui53559.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__53553,map__53553__$1,state,map__53554,map__53554__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__53555,map__53555__$1,current_tool,msgs,pz){
return (function (_53561){
var self__ = this;
var _53561__$1 = this;
return self__.meta53560;
});})(map__53553,map__53553__$1,state,map__53554,map__53554__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__53555,map__53555__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui53559.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui53559.prototype.om$core$IRender$render$arity$1 = ((function (map__53553,map__53553__$1,state,map__53554,map__53554__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__53555,map__53555__$1,current_tool,msgs,pz){
return (function (this__38982__auto__){
var self__ = this;
var this__38982__auto____$1 = this;
return om.dom.div.call(null,{"className": [cljs.core.str("dynomics_space "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),self__.cf))?"selected_function":"hidden_function"))].join('')},om.dom.svg.call(null,{"zoomAndPan": false, "preserveAspectRatio": "xMidYMin", "width": "100%", "shape-rendering": "crispEdges", "xmlns": "http://www.w3.org/2000/svg", "className": "dynomics_space_svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "id": "space", "viewBox": "-1 -1 3 3", "height": "100%"},om.dom.defs.call(null,{},dynomics.space.ui.make_quadrant_gradients.call(null)),om.dom.g.call(null,{"id": "space_root", "onMouseMove": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null))},om.dom.rect.call(null,{"x": (-16), "y": (-16), "width": (32), "height": (32), "className": "dynomics_space_background"}),om.dom.rect.call(null,{"x": (0), "y": (0), "width": (1), "height": (1), "className": "dynomics_space_space"}),null,null,null,om.core.build_all.call(null,dynomics.space.ui.make_edge_component,cljs.core.map.call(null,((function (this__38982__auto____$1,map__53553,map__53553__$1,state,map__53554,map__53554__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__53555,map__53555__$1,current_tool,msgs,pz){
return (function (e){
return cljs.core.assoc.call(null,dynomics.space.core.with_compatibilities.call(null,e,self__.compatibilities),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale);
});})(this__38982__auto____$1,map__53553,map__53553__$1,state,map__53554,map__53554__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__53555,map__53555__$1,current_tool,msgs,pz))
,cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.edge_points,self__.nodes),self__.edges))),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__38982__auto____$1,map__53553,map__53553__$1,state,map__53554,map__53554__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__53555,map__53555__$1,current_tool,msgs,pz){
return (function (node){
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz], null));
});})(this__38982__auto____$1,map__53553,map__53553__$1,state,map__53554,map__53554__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__53555,map__53555__$1,current_tool,msgs,pz))
,cljs.core.vals.call(null,cljs.core.apply.call(null,cljs.core.dissoc,self__.nodes,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),cljs.core.map.call(null,cljs.core.last,self__.selected_nodes))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__38982__auto____$1,map__53553,map__53553__$1,state,map__53554,map__53554__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__53555,map__53555__$1,current_tool,msgs,pz){
return (function (node){
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz], null));
});})(this__38982__auto____$1,map__53553,map__53553__$1,state,map__53554,map__53554__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__53555,map__53555__$1,current_tool,msgs,pz))
,cljs.core.vals.call(null,cljs.core.select_keys.call(null,self__.nodes,cljs.core.map.call(null,cljs.core.last,self__.selected_nodes)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),null)));
});})(map__53553,map__53553__$1,state,map__53554,map__53554__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__53555,map__53555__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui53559.getBasis = ((function (map__53553,map__53553__$1,state,map__53554,map__53554__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__53555,map__53555__$1,current_tool,msgs,pz){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"current-tool","current-tool",699505924,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Symbol(null,"map__53553","map__53553",670659910,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-space-component","make-space-component",-638751478,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"compatibilities","compatibilities",289068503,null),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Keyword(null,"cf","cf",1480736310),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"current-tool","current-tool",699505924,null),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the phase-space editor"], null)),new cljs.core.Symbol(null,"space","space",1988665002,null),new cljs.core.Symbol(null,"map__53555","map__53555",-514606933,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"p__53543","p__53543",2062353235,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"compatibilities","compatibilities",289068503,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Symbol(null,"map__53554","map__53554",-1489260803,null),new cljs.core.Symbol(null,"meta53560","meta53560",1783951286,null)], null);
});})(map__53553,map__53553__$1,state,map__53554,map__53554__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__53555,map__53555__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui53559.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui53559.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui53559";

dynomics.space.ui.t_dynomics$space$ui53559.cljs$lang$ctorPrWriter = ((function (map__53553,map__53553__$1,state,map__53554,map__53554__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__53555,map__53555__$1,current_tool,msgs,pz){
return (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"dynomics.space.ui/t_dynomics$space$ui53559");
});})(map__53553,map__53553__$1,state,map__53554,map__53554__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__53555,map__53555__$1,current_tool,msgs,pz))
;

dynomics.space.ui.__GT_t_dynomics$space$ui53559 = ((function (map__53553,map__53553__$1,state,map__53554,map__53554__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__53555,map__53555__$1,current_tool,msgs,pz){
return (function dynomics$space$ui$make_space_component_$___GT_t_dynomics$space$ui53559(selected_nodes__$1,current_tool__$1,edges__$1,pz__$1,map__53553__$2,make_space_component__$1,space__$1,map__53555__$2,node_scale__$1,regions__$1,p__53543__$1,state__$1,compatibilities__$1,msgs__$1,nodes__$1,graph__$1,cf__$1,map__53554__$2,meta53560){
return (new dynomics.space.ui.t_dynomics$space$ui53559(selected_nodes__$1,current_tool__$1,edges__$1,pz__$1,map__53553__$2,make_space_component__$1,space__$1,map__53555__$2,node_scale__$1,regions__$1,p__53543__$1,state__$1,compatibilities__$1,msgs__$1,nodes__$1,graph__$1,cf__$1,map__53554__$2,meta53560));
});})(map__53553,map__53553__$1,state,map__53554,map__53554__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__53555,map__53555__$1,current_tool,msgs,pz))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui53559(selected_nodes,current_tool,edges,pz,map__53553__$1,dynomics$space$ui$make_space_component,space,map__53555__$1,node_scale,regions,p__53543,state,compatibilities,msgs,nodes,graph,cf,map__53554__$1,null));
});
/**
 * Returns a component for offscreen rendering
 */
dynomics.space.ui.make_prerender_component = (function dynomics$space$ui$make_prerender_component(p__53562){
var map__53570 = p__53562;
var map__53570__$1 = ((((!((map__53570 == null)))?((((map__53570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53570):map__53570);
var state = map__53570__$1;
var map__53571 = cljs.core.get.call(null,map__53570__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__53571__$1 = ((((!((map__53571 == null)))?((((map__53571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53571):map__53571);
var space = map__53571__$1;
var nodes = cljs.core.get.call(null,map__53571__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__53571__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var selected_nodes = cljs.core.get.call(null,map__53571__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var regions = cljs.core.get.call(null,map__53571__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var node_scale = cljs.core.get.call(null,map__53571__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var cf = cljs.core.get.call(null,map__53570__$1,new cljs.core.Keyword(null,"cf","cf",1480736310));
if(typeof dynomics.space.ui.t_dynomics$space$ui53574 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui53574 = (function (p__53562,selected_nodes,make_prerender_component,edges,space,node_scale,regions,map__53571,state,map__53570,nodes,cf,meta53575){
this.p__53562 = p__53562;
this.selected_nodes = selected_nodes;
this.make_prerender_component = make_prerender_component;
this.edges = edges;
this.space = space;
this.node_scale = node_scale;
this.regions = regions;
this.map__53571 = map__53571;
this.state = state;
this.map__53570 = map__53570;
this.nodes = nodes;
this.cf = cf;
this.meta53575 = meta53575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui53574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__53570,map__53570__$1,state,map__53571,map__53571__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (_53576,meta53575__$1){
var self__ = this;
var _53576__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui53574(self__.p__53562,self__.selected_nodes,self__.make_prerender_component,self__.edges,self__.space,self__.node_scale,self__.regions,self__.map__53571,self__.state,self__.map__53570,self__.nodes,self__.cf,meta53575__$1));
});})(map__53570,map__53570__$1,state,map__53571,map__53571__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.t_dynomics$space$ui53574.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__53570,map__53570__$1,state,map__53571,map__53571__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (_53576){
var self__ = this;
var _53576__$1 = this;
return self__.meta53575;
});})(map__53570,map__53570__$1,state,map__53571,map__53571__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.t_dynomics$space$ui53574.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui53574.prototype.om$core$IRender$render$arity$1 = ((function (map__53570,map__53570__$1,state,map__53571,map__53571__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (this__38982__auto__){
var self__ = this;
var this__38982__auto____$1 = this;
return om.dom.div.call(null,{"className": "prerender_component", "id": "prerender_component_all"},om.dom.canvas.call(null,{"id": "prerender_canvas_all", "width": (64), "height": (64)}),om.dom.svg.call(null,{"zoomAndPan": false, "preserveAspectRatio": "xMidYMin", "width": "100%", "shape-rendering": "crispEdges", "xmlns": "http://www.w3.org/2000/svg", "className": "dynomics_space_svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "id": "prerender_svg_all", "viewBox": "-1 -1 3 3", "height": "100%"},dynomics.space.ui.make_type_icon.call(null,(1))));
});})(map__53570,map__53570__$1,state,map__53571,map__53571__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.t_dynomics$space$ui53574.getBasis = ((function (map__53570,map__53570__$1,state,map__53571,map__53571__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__53562","p__53562",103126401,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-prerender-component","make-prerender-component",-630291485,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Keyword(null,"cf","cf",1480736310),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for offscreen rendering"], null)),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"space","space",1988665002,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"map__53571","map__53571",-666508270,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__53570","map__53570",-2105142952,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Symbol(null,"meta53575","meta53575",-1591715819,null)], null);
});})(map__53570,map__53570__$1,state,map__53571,map__53571__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.t_dynomics$space$ui53574.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui53574.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui53574";

dynomics.space.ui.t_dynomics$space$ui53574.cljs$lang$ctorPrWriter = ((function (map__53570,map__53570__$1,state,map__53571,map__53571__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"dynomics.space.ui/t_dynomics$space$ui53574");
});})(map__53570,map__53570__$1,state,map__53571,map__53571__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.__GT_t_dynomics$space$ui53574 = ((function (map__53570,map__53570__$1,state,map__53571,map__53571__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function dynomics$space$ui$make_prerender_component_$___GT_t_dynomics$space$ui53574(p__53562__$1,selected_nodes__$1,make_prerender_component__$1,edges__$1,space__$1,node_scale__$1,regions__$1,map__53571__$2,state__$1,map__53570__$2,nodes__$1,cf__$1,meta53575){
return (new dynomics.space.ui.t_dynomics$space$ui53574(p__53562__$1,selected_nodes__$1,make_prerender_component__$1,edges__$1,space__$1,node_scale__$1,regions__$1,map__53571__$2,state__$1,map__53570__$2,nodes__$1,cf__$1,meta53575));
});})(map__53570,map__53570__$1,state,map__53571,map__53571__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui53574(p__53562,selected_nodes,dynomics$space$ui$make_prerender_component,edges,space,node_scale,regions,map__53571__$1,state,map__53570__$1,nodes,cf,null));
});

//# sourceMappingURL=ui.js.map