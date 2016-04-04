// Compiled by ClojureScript 1.8.40 {}
goog.provide('dynomics.space.ui');
goog.require('cljs.core');
goog.require('hipo.core');
goog.require('om.dom');
goog.require('dynomics.ui.css');
goog.require('cljs.core.async');
goog.require('dommy.core');
goog.require('dynomics.space.core');
goog.require('dynomics.ui.svg');
goog.require('sablono.core');
goog.require('om.core');
/**
 * Returns a function that converts local coords to
 *   those of the given element-id's
 */
dynomics.space.ui.convert_coords = (function dynomics$space$ui$convert_coords(var_args){
var args292423 = [];
var len__36461__auto___292426 = arguments.length;
var i__36462__auto___292427 = (0);
while(true){
if((i__36462__auto___292427 < len__36461__auto___292426)){
args292423.push((arguments[i__36462__auto___292427]));

var G__292428 = (i__36462__auto___292427 + (1));
i__36462__auto___292427 = G__292428;
continue;
} else {
}
break;
}

var G__292425 = args292423.length;
switch (G__292425) {
case 1:
return dynomics.space.ui.convert_coords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.ui.convert_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args292423.length)].join('')));

}
});

dynomics.space.ui.convert_coords.cljs$core$IFn$_invoke$arity$1 = (function (from_id){
return dynomics.space.ui.convert_coords.call(null,from_id,"space");
});

dynomics.space.ui.convert_coords.cljs$core$IFn$_invoke$arity$2 = (function (from_id,to_id){
return (function (x,y){
var from_element = document.getElementById(from_id);
var to_element = document.getElementById(to_id);
var ctm = from_element.getScreenCTM();
var p = to_element.createSVGPoint();
var t = p.x = x;
var t__$1 = p.y = y;
var p__$1 = p.matrixTransform(ctm.inverse());
var px = p__$1.x;
var py = p__$1.y;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [px,py], null);
});
});

dynomics.space.ui.convert_coords.cljs$lang$maxFixedArity = 2;
dynomics.space.ui.get_point_at_length = (function dynomics$space$ui$get_point_at_length(curve,d){
var p = curve.getPointAtLength(d);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p.x,p.y], null);
});
/**
 * Renders the SVG with the given id to a canvas
 */
dynomics.space.ui.render_to_image = (function dynomics$space$ui$render_to_image(var_args){
var args292430 = [];
var len__36461__auto___292447 = arguments.length;
var i__36462__auto___292448 = (0);
while(true){
if((i__36462__auto___292448 < len__36461__auto___292447)){
args292430.push((arguments[i__36462__auto___292448]));

var G__292449 = (i__36462__auto___292448 + (1));
i__36462__auto___292448 = G__292449;
continue;
} else {
}
break;
}

var G__292432 = args292430.length;
switch (G__292432) {
case 0:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args292430.length)].join('')));

}
});

dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$0 = (function (){
return dynomics.space.ui.render_to_image.call(null,new cljs.core.Keyword(null,"all","all",892129742),"all");
});

dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$2 = (function (kind,id){
var up = dynomics.ui.css.unique_css_properties.call(null,dynomics.ui.css.css_rules.call(null,dynomics.ui.css.dark_style.call(null)));
var svg = document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#prerender_svg_"),cljs.core.str(cljs.core.name.call(null,kind)),cljs.core.str("_"),cljs.core.str(id)].join('')));
var svgp = svg.parentElement.cloneNode(true);
var canvas = document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#prerender_canvas_"),cljs.core.str(cljs.core.name.call(null,kind)),cljs.core.str("_"),cljs.core.str(id)].join('')));
var ccss = window.getComputedStyle(svg);
var ni1 = document.createNodeIterator(svg,NodeIterator.SHOW_ELEMENT,null);
var ni2 = document.createNodeIterator(svgp.firstElementChild,NodeIterator.SHOW_ELEMENT,null);
var seq__292433_292451 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni1.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
)),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni2.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
))));
var chunk__292434_292452 = null;
var count__292435_292453 = (0);
var i__292436_292454 = (0);
while(true){
if((i__292436_292454 < count__292435_292453)){
var vec__292437_292455 = cljs.core._nth.call(null,chunk__292434_292452,i__292436_292454);
var i_292456 = cljs.core.nth.call(null,vec__292437_292455,(0),null);
var j_292457 = cljs.core.nth.call(null,vec__292437_292455,(1),null);
j_292457.removeAttribute("id");

j_292457.removeAttribute("class");

j_292457.removeAttribute("data-reactid");

var ccss_292458__$1 = window.getComputedStyle(i_292456);
var seq__292438_292459 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_292458__$1.length));
var chunk__292439_292460 = null;
var count__292440_292461 = (0);
var i__292441_292462 = (0);
while(true){
if((i__292441_292462 < count__292440_292461)){
var is_292463 = cljs.core._nth.call(null,chunk__292439_292460,i__292441_292462);
var p_292464 = ccss_292458__$1.item(is_292463);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_292464)))){
j_292457.style.setProperty(p_292464,ccss_292458__$1.getPropertyValue(p_292464));
} else {
}

var G__292465 = seq__292438_292459;
var G__292466 = chunk__292439_292460;
var G__292467 = count__292440_292461;
var G__292468 = (i__292441_292462 + (1));
seq__292438_292459 = G__292465;
chunk__292439_292460 = G__292466;
count__292440_292461 = G__292467;
i__292441_292462 = G__292468;
continue;
} else {
var temp__4657__auto___292469 = cljs.core.seq.call(null,seq__292438_292459);
if(temp__4657__auto___292469){
var seq__292438_292470__$1 = temp__4657__auto___292469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__292438_292470__$1)){
var c__36203__auto___292471 = cljs.core.chunk_first.call(null,seq__292438_292470__$1);
var G__292472 = cljs.core.chunk_rest.call(null,seq__292438_292470__$1);
var G__292473 = c__36203__auto___292471;
var G__292474 = cljs.core.count.call(null,c__36203__auto___292471);
var G__292475 = (0);
seq__292438_292459 = G__292472;
chunk__292439_292460 = G__292473;
count__292440_292461 = G__292474;
i__292441_292462 = G__292475;
continue;
} else {
var is_292476 = cljs.core.first.call(null,seq__292438_292470__$1);
var p_292477 = ccss_292458__$1.item(is_292476);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_292477)))){
j_292457.style.setProperty(p_292477,ccss_292458__$1.getPropertyValue(p_292477));
} else {
}

var G__292478 = cljs.core.next.call(null,seq__292438_292470__$1);
var G__292479 = null;
var G__292480 = (0);
var G__292481 = (0);
seq__292438_292459 = G__292478;
chunk__292439_292460 = G__292479;
count__292440_292461 = G__292480;
i__292441_292462 = G__292481;
continue;
}
} else {
}
}
break;
}

var G__292482 = seq__292433_292451;
var G__292483 = chunk__292434_292452;
var G__292484 = count__292435_292453;
var G__292485 = (i__292436_292454 + (1));
seq__292433_292451 = G__292482;
chunk__292434_292452 = G__292483;
count__292435_292453 = G__292484;
i__292436_292454 = G__292485;
continue;
} else {
var temp__4657__auto___292486 = cljs.core.seq.call(null,seq__292433_292451);
if(temp__4657__auto___292486){
var seq__292433_292487__$1 = temp__4657__auto___292486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__292433_292487__$1)){
var c__36203__auto___292488 = cljs.core.chunk_first.call(null,seq__292433_292487__$1);
var G__292489 = cljs.core.chunk_rest.call(null,seq__292433_292487__$1);
var G__292490 = c__36203__auto___292488;
var G__292491 = cljs.core.count.call(null,c__36203__auto___292488);
var G__292492 = (0);
seq__292433_292451 = G__292489;
chunk__292434_292452 = G__292490;
count__292435_292453 = G__292491;
i__292436_292454 = G__292492;
continue;
} else {
var vec__292442_292493 = cljs.core.first.call(null,seq__292433_292487__$1);
var i_292494 = cljs.core.nth.call(null,vec__292442_292493,(0),null);
var j_292495 = cljs.core.nth.call(null,vec__292442_292493,(1),null);
j_292495.removeAttribute("id");

j_292495.removeAttribute("class");

j_292495.removeAttribute("data-reactid");

var ccss_292496__$1 = window.getComputedStyle(i_292494);
var seq__292443_292497 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_292496__$1.length));
var chunk__292444_292498 = null;
var count__292445_292499 = (0);
var i__292446_292500 = (0);
while(true){
if((i__292446_292500 < count__292445_292499)){
var is_292501 = cljs.core._nth.call(null,chunk__292444_292498,i__292446_292500);
var p_292502 = ccss_292496__$1.item(is_292501);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_292502)))){
j_292495.style.setProperty(p_292502,ccss_292496__$1.getPropertyValue(p_292502));
} else {
}

var G__292503 = seq__292443_292497;
var G__292504 = chunk__292444_292498;
var G__292505 = count__292445_292499;
var G__292506 = (i__292446_292500 + (1));
seq__292443_292497 = G__292503;
chunk__292444_292498 = G__292504;
count__292445_292499 = G__292505;
i__292446_292500 = G__292506;
continue;
} else {
var temp__4657__auto___292507__$1 = cljs.core.seq.call(null,seq__292443_292497);
if(temp__4657__auto___292507__$1){
var seq__292443_292508__$1 = temp__4657__auto___292507__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__292443_292508__$1)){
var c__36203__auto___292509 = cljs.core.chunk_first.call(null,seq__292443_292508__$1);
var G__292510 = cljs.core.chunk_rest.call(null,seq__292443_292508__$1);
var G__292511 = c__36203__auto___292509;
var G__292512 = cljs.core.count.call(null,c__36203__auto___292509);
var G__292513 = (0);
seq__292443_292497 = G__292510;
chunk__292444_292498 = G__292511;
count__292445_292499 = G__292512;
i__292446_292500 = G__292513;
continue;
} else {
var is_292514 = cljs.core.first.call(null,seq__292443_292508__$1);
var p_292515 = ccss_292496__$1.item(is_292514);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_292515)))){
j_292495.style.setProperty(p_292515,ccss_292496__$1.getPropertyValue(p_292515));
} else {
}

var G__292516 = cljs.core.next.call(null,seq__292443_292508__$1);
var G__292517 = null;
var G__292518 = (0);
var G__292519 = (0);
seq__292443_292497 = G__292516;
chunk__292444_292498 = G__292517;
count__292445_292499 = G__292518;
i__292446_292500 = G__292519;
continue;
}
} else {
}
}
break;
}

var G__292520 = cljs.core.next.call(null,seq__292433_292487__$1);
var G__292521 = null;
var G__292522 = (0);
var G__292523 = (0);
seq__292433_292451 = G__292520;
chunk__292434_292452 = G__292521;
count__292435_292453 = G__292522;
i__292436_292454 = G__292523;
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

dynomics.space.ui.render_to_image.cljs$lang$maxFixedArity = 2;
/**
 * Returns an event handler for the given event type,
 *   sending the event on the message-channel
 *   
 */
dynomics.space.ui.make_handler = (function dynomics$space$ui$make_handler(transforms,type_key,source,msgch,s){
return (function (e){
e.preventDefault();

e.stopPropagation();

var pl = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
var transforms__$1 = ((cljs.core.vector_QMARK_.call(null,transforms))?transforms:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transforms], null));
var mp = cljs.core.map.call(null,cljs.core.apply,transforms__$1,cljs.core.repeat.call(null,pl));
cljs.core.async.put_BANG_.call(null,msgch,cljs.core.merge.call(null,s,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Keyword(null,"deltaX","deltaX",-1317913656),new cljs.core.Keyword(null,"meta-key?","meta-key?",940581001),new cljs.core.Keyword(null,"transforms","transforms",793344554),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989),new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"deltaY","deltaY",-879493966),new cljs.core.Keyword(null,"which","which",-1255268941),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword(null,"alt-key?","alt-key?",234827606),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"deltaZ","deltaZ",1656656988),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword(null,"positions","positions",-1380538434)],[e.buttons,type_key,e.button,pl,e.deltaX,e.metaKey,transforms__$1,e.ctrlKey,new cljs.core.Keyword(null,"event","event",301435442),e.deltaY,e.which,(function (){var or__35392__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return cljs.core.keyword.call(null,(function (){var or__35392__auto____$1 = e.target.id;
if(cljs.core.truth_(or__35392__auto____$1)){
return or__35392__auto____$1;
} else {
return [cljs.core.str(e.target)].join('');
}
})());
}
})(),e.shiftKey,e.altKey,cljs.core.first.call(null,mp),e.deltaZ,source,mp])));

return null;
});
});
/**
 * Returns a triangular arrowhead for the given trajectory
 */
dynomics.space.ui.arrowhead = (function dynomics$space$ui$arrowhead(trajectory){
var vec__292526 = cljs.core.subvec.call(null,trajectory,((cljs.core.count.call(null,trajectory) - (1)) - (1)),cljs.core.count.call(null,trajectory));
var p1 = cljs.core.nth.call(null,vec__292526,(0),null);
var p2 = cljs.core.nth.call(null,vec__292526,(1),null);
var v = cljs.core.map.call(null,cljs.core._,p1,p2);
var a = (dynomics.space.core.r2d * (dynomics.space.core.PI2 - dynomics.space.core.angle.call(null,v)));
var a1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);
var a2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
var a3 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null);
var vec__292527 = cljs.core.map.call(null,cljs.core._PLUS_,p2,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,0.505),v));
var ox = cljs.core.nth.call(null,vec__292527,(0),null);
var oy = cljs.core.nth.call(null,vec__292527,(1),null);
var E = cljs.core.interpose;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),"trajectory_arrowhead",new cljs.core.Keyword(null,"transform","transform",1381301764),dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),ox,oy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),a], null)),new cljs.core.Keyword(null,"d","d",1972142424),cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,"M ",E.call(null," ",a1)," L ",E.call(null," ",a2)," L ",E.call(null," ",a3)," z"))], null)], null);
});
dynomics.space.ui.make_trajectory_group = (function dynomics$space$ui$make_trajectory_group(with_arrowhead,trajectory){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"trajectory_group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"trajectory_path",new cljs.core.Keyword(null,"d","d",1972142424),cljs.core.apply.call(null,cljs.core.str,cljs.core.reduce.call(null,(function (r,p){
return cljs.core.concat.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" L "], null),cljs.core.interpose.call(null," ",p));
}),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M "], null),cljs.core.interpose.call(null," ",cljs.core.first.call(null,trajectory))),cljs.core.rest.call(null,trajectory)))], null)], null),(cljs.core.truth_(with_arrowhead)?dynomics.space.ui.arrowhead.call(null,cljs.core.vec.call(null,trajectory)):null)], null);
});
dynomics.space.ui.make_bezier_trajectory_group = (function dynomics$space$ui$make_bezier_trajectory_group(with_arrowhead,trajectory){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"trajectory_group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"trajectory_path",new cljs.core.Keyword(null,"d","d",1972142424),dynomics.ui.svg.to_smooth_svg_path.call(null,cljs.core.map.call(null,(function (p,cp){
return dynomics.ui.svg.make_bezier_point.call(null,p,cp);
}),dynomics.space.core.midpoints.call(null,trajectory),cljs.core.map.call(null,(function (p__292530){
var vec__292531 = p__292530;
var p1 = cljs.core.nth.call(null,vec__292531,(0),null);
var p2 = cljs.core.nth.call(null,vec__292531,(1),null);
return dynomics.space.core.move_along.call(null,(1),p1,p2);
}),cljs.core.partition.call(null,(2),(1),trajectory))))], null)], null),null,(cljs.core.truth_(with_arrowhead)?dynomics.space.ui.arrowhead.call(null,cljs.core.vec.call(null,trajectory)):null)], null);
});
dynomics.space.ui.get_friendly_icon_fn = (function dynomics$space$ui$get_friendly_icon_fn(type_id){
return cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(0)], null),(4),(3),0.6,(0),dynomics.space.core.PIb4),cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(0)], null),(1),(8),1.2,1.9),cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(0)], null),(4),(3),2.0,(0),dynomics.space.core.PIb4),cljs.core.partial.call(null,dynomics.space.core.saddle_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(4),(20)),cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(0)], null),(1),(8),1.2,-1.9),cljs.core.partial.call(null,dynomics.space.core.saddle_3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(4),(20)),cljs.core.partial.call(null,dynomics.space.core.saddle_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(4),(20)),cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(1),(8),0.4,0.75),cljs.core.partial.call(null,dynomics.space.core.saddle_5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(4),(20)),cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(1),(8),0.4,-0.75)]),type_id,cljs.core.partial.call(null,dynomics.space.core.spiral,(155),1.02,0.1));
});
dynomics.space.ui.make_friendly_type_icon = (function dynomics$space$ui$make_friendly_type_icon(type_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("type_icon_"),cljs.core.str(type_id)].join(''),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("type_icon "),cljs.core.str([cljs.core.str("type_icon_"),cljs.core.str(type_id)].join(''))].join(''),new cljs.core.Keyword(null,"transform","transform",1381301764),dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),0.035], null))], null),cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.ui.make_bezier_trajectory_group,new cljs.core.Keyword(null,"with-arrowhead","with-arrowhead",-1845037226)),dynomics.space.ui.get_friendly_icon_fn.call(null,type_id).call(null))], null);
});
dynomics.space.ui.get_simple_icon_fn = (function dynomics$space$ui$get_simple_icon_fn(type_id){
return cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(0)], null),(4),(3),0.6,(0),dynomics.space.core.PIb4),cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(0)], null),(4),(3),1.2,0.75),cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(0)], null),(4),(3),2.0,(0),dynomics.space.core.PIb4),cljs.core.partial.call(null,dynomics.space.core.saddle_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(4),(20)),cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(0)], null),(4),(3),1.2,-0.75),cljs.core.partial.call(null,dynomics.space.core.saddle_3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(4),(20)),cljs.core.partial.call(null,dynomics.space.core.saddle_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(4),(20)),cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(4),(3),0.8,0.75),cljs.core.partial.call(null,dynomics.space.core.saddle_5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(4),(20)),cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(4),(3),0.8,-0.75)]),type_id,cljs.core.partial.call(null,dynomics.space.core.spiral,(155),1.02,0.1));
});
dynomics.space.ui.make_simple_type_icon = (function dynomics$space$ui$make_simple_type_icon(type_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("type_icon_simple_"),cljs.core.str(type_id)].join(''),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("type_icon "),cljs.core.str([cljs.core.str("type_icon_"),cljs.core.str(type_id)].join(''))].join(''),new cljs.core.Keyword(null,"transform","transform",1381301764),dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),0.035], null))], null),cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.ui.make_bezier_trajectory_group,new cljs.core.Keyword(null,"with-arrowhead","with-arrowhead",-1845037226)),dynomics.space.ui.get_simple_icon_fn.call(null,type_id).call(null))], null);
});
dynomics.space.ui.make_prerender_icon = (function dynomics$space$ui$make_prerender_icon(kind,iconfn,width,height,id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("prerender_canvas_"),cljs.core.str(cljs.core.name.call(null,kind)),cljs.core.str("_"),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classsName","classsName",2107715185),"node_type_selector",new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("prerender_svg_box_"),cljs.core.str(cljs.core.name.call(null,kind)),cljs.core.str("_"),cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"zoomAndPan","zoomAndPan",-449580731),new cljs.core.Keyword(null,"preserveAspectRatio","preserveAspectRatio",1832131817),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"shape-rendering","shape-rendering",955846315),new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),new cljs.core.Keyword(null,"classsName","classsName",2107715185),new cljs.core.Keyword(null,"xmlns:xlink","xmlns:xlink",-316591054),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),new cljs.core.Keyword(null,"height","height",1025178622)],[false,"xMidYMin",[cljs.core.str(width),cljs.core.str("px")].join(''),"crispEdges","http://www.w3.org/2000/svg","space_svg","http://www.w3.org/1999/xlink",[cljs.core.str("prerender_svg_"),cljs.core.str(cljs.core.name.call(null,kind)),cljs.core.str("_"),cljs.core.str(id)].join(''),"-1 -1 2 2",[cljs.core.str(height),cljs.core.str("px")].join('')]),iconfn.call(null,id)], null)], null)], null);
});
dynomics.space.ui.make_paths = (function dynomics$space$ui$make_paths(p__292532){
var map__292539 = p__292532;
var map__292539__$1 = ((((!((map__292539 == null)))?((((map__292539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292539):map__292539);
var space = map__292539__$1;
var nodes = cljs.core.get.call(null,map__292539__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__292539__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var regions = cljs.core.get.call(null,map__292539__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var node_scale = cljs.core.get.call(null,map__292539__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
cljs.core.println.call(null,"Regions ",regions);

return cljs.core.map.call(null,((function (map__292539,map__292539__$1,space,nodes,edges,regions,node_scale){
return (function (region){
return cljs.core.reduce.call(null,((function (map__292539,map__292539__$1,space,nodes,edges,regions,node_scale){
return (function (beziers,connection){
return cljs.core.conj.call(null,beziers,cljs.core.map.call(null,((function (map__292539,map__292539__$1,space,nodes,edges,regions,node_scale){
return (function (p__292541){
var vec__292542 = p__292541;
var nid1 = cljs.core.nth.call(null,vec__292542,(0),null);
var cid1 = cljs.core.nth.call(null,vec__292542,(1),null);
var vec__292543 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx1 = cljs.core.nth.call(null,vec__292543,(0),null);
var ny1 = cljs.core.nth.call(null,vec__292543,(1),null);
var vec__292544 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx1 = cljs.core.nth.call(null,vec__292544,(0),null);
var cy1 = cljs.core.nth.call(null,vec__292544,(1),null);
return dynomics.ui.svg.make_bezier_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx1 + (node_scale * cx1)),(ny1 + (node_scale * cy1))], null)], null));
});})(map__292539,map__292539__$1,space,nodes,edges,regions,node_scale))
,cljs.core.map.call(null,dynomics.space.core.simplify_connection,connection)));
});})(map__292539,map__292539__$1,space,nodes,edges,regions,node_scale))
,cljs.core.PersistentVector.EMPTY,region);
});})(map__292539,map__292539__$1,space,nodes,edges,regions,node_scale))
,regions);
});
dynomics.space.ui.make_node_types_cached_component = (function dynomics$space$ui$make_node_types_cached_component(kind,render_fn){

return (function (p__292551,owner){
var map__292552 = p__292551;
var map__292552__$1 = ((((!((map__292552 == null)))?((((map__292552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292552):map__292552);
var id = cljs.core.get.call(null,map__292552__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var state_updates = cljs.core.get.call(null,map__292552__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var icon = cljs.core.get.call(null,map__292552__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
if(typeof dynomics.space.ui.t_dynomics$space$ui292554 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui292554 = (function (make_node_types_cached_component,kind,render_fn,p__292551,owner,map__292552,id,state_updates,icon,meta292555){
this.make_node_types_cached_component = make_node_types_cached_component;
this.kind = kind;
this.render_fn = render_fn;
this.p__292551 = p__292551;
this.owner = owner;
this.map__292552 = map__292552;
this.id = id;
this.state_updates = state_updates;
this.icon = icon;
this.meta292555 = meta292555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui292554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__292552,map__292552__$1,id,state_updates,icon){
return (function (_292556,meta292555__$1){
var self__ = this;
var _292556__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui292554(self__.make_node_types_cached_component,self__.kind,self__.render_fn,self__.p__292551,self__.owner,self__.map__292552,self__.id,self__.state_updates,self__.icon,meta292555__$1));
});})(map__292552,map__292552__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui292554.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__292552,map__292552__$1,id,state_updates,icon){
return (function (_292556){
var self__ = this;
var _292556__$1 = this;
return self__.meta292555;
});})(map__292552,map__292552__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui292554.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui292554.prototype.om$core$IRender$render$arity$1 = ((function (map__292552,map__292552__$1,id,state_updates,icon){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.icon)){
return React.createElement("img",{"width": (32), "height": (32), "src": self__.icon, "draggable": false});
} else {
return sablono.interpreter.interpret.call(null,self__.render_fn.call(null,self__.id));
}
});})(map__292552,map__292552__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui292554.prototype.om$core$IDidMount$ = true;

dynomics.space.ui.t_dynomics$space$ui292554.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__292552,map__292552__$1,id,state_updates,icon){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,self__.icon)){
var dataurl = dynomics.space.ui.render_to_image.call(null,self__.kind,self__.id);
return cljs.core.async.put_BANG_.call(null,self__.state_updates,((function (dataurl,___$1,map__292552,map__292552__$1,id,state_updates,icon){
return (function (s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (dataurl,___$1,map__292552,map__292552__$1,id,state_updates,icon){
return (function (s__$1){
return cljs.core.assoc_in.call(null,s__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"icons","icons",-297140977),self__.kind,self__.id], null),dataurl);
});})(dataurl,___$1,map__292552,map__292552__$1,id,state_updates,icon))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"make","make",-1284043325),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null);
});})(dataurl,___$1,map__292552,map__292552__$1,id,state_updates,icon))
);
} else {
return null;
}
});})(map__292552,map__292552__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui292554.getBasis = ((function (map__292552,map__292552__$1,id,state_updates,icon){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-cached-component","make-node-types-cached-component",-655003199,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"render-fn","render-fn",2039328045,null)], null)))], null)),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"render-fn","render-fn",2039328045,null),new cljs.core.Symbol(null,"p__292551","p__292551",80453191,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__292552","map__292552",2029799600,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"icon","icon",-974829228,null),new cljs.core.Symbol(null,"meta292555","meta292555",1170995602,null)], null);
});})(map__292552,map__292552__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui292554.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui292554.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui292554";

dynomics.space.ui.t_dynomics$space$ui292554.cljs$lang$ctorPrWriter = ((function (map__292552,map__292552__$1,id,state_updates,icon){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.space.ui/t_dynomics$space$ui292554");
});})(map__292552,map__292552__$1,id,state_updates,icon))
;

dynomics.space.ui.__GT_t_dynomics$space$ui292554 = ((function (map__292552,map__292552__$1,id,state_updates,icon){
return (function dynomics$space$ui$make_node_types_cached_component_$___GT_t_dynomics$space$ui292554(make_node_types_cached_component__$1,kind__$1,render_fn__$1,p__292551__$1,owner__$1,map__292552__$2,id__$1,state_updates__$1,icon__$1,meta292555){
return (new dynomics.space.ui.t_dynomics$space$ui292554(make_node_types_cached_component__$1,kind__$1,render_fn__$1,p__292551__$1,owner__$1,map__292552__$2,id__$1,state_updates__$1,icon__$1,meta292555));
});})(map__292552,map__292552__$1,id,state_updates,icon))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui292554(dynomics$space$ui$make_node_types_cached_component,kind,render_fn,p__292551,owner,map__292552__$1,id,state_updates,icon,cljs.core.PersistentArrayMap.EMPTY));
});
});
dynomics.space.ui.make_node_types_cached_image_component = (function dynomics$space$ui$make_node_types_cached_image_component(kind,render_fn){

return (function (p__292563,owner){
var map__292564 = p__292563;
var map__292564__$1 = ((((!((map__292564 == null)))?((((map__292564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292564):map__292564);
var id = cljs.core.get.call(null,map__292564__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var state_updates = cljs.core.get.call(null,map__292564__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var icon = cljs.core.get.call(null,map__292564__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
if(typeof dynomics.space.ui.t_dynomics$space$ui292566 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui292566 = (function (make_node_types_cached_image_component,kind,render_fn,p__292563,owner,map__292564,id,state_updates,icon,meta292567){
this.make_node_types_cached_image_component = make_node_types_cached_image_component;
this.kind = kind;
this.render_fn = render_fn;
this.p__292563 = p__292563;
this.owner = owner;
this.map__292564 = map__292564;
this.id = id;
this.state_updates = state_updates;
this.icon = icon;
this.meta292567 = meta292567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui292566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__292564,map__292564__$1,id,state_updates,icon){
return (function (_292568,meta292567__$1){
var self__ = this;
var _292568__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui292566(self__.make_node_types_cached_image_component,self__.kind,self__.render_fn,self__.p__292563,self__.owner,self__.map__292564,self__.id,self__.state_updates,self__.icon,meta292567__$1));
});})(map__292564,map__292564__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui292566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__292564,map__292564__$1,id,state_updates,icon){
return (function (_292568){
var self__ = this;
var _292568__$1 = this;
return self__.meta292567;
});})(map__292564,map__292564__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui292566.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui292566.prototype.om$core$IRender$render$arity$1 = ((function (map__292564,map__292564__$1,id,state_updates,icon){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__4655__auto__ = self__.icon;
if(cljs.core.truth_(temp__4655__auto__)){
var dataurl = temp__4655__auto__;
return React.createElement("image",{"width": (1), "height": (1), "x": (0), "y": (0), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),-0.75,-0.75], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),1.5], null)), "xlinkHref": self__.icon});
} else {
return sablono.interpreter.interpret.call(null,self__.render_fn.call(null,self__.id));
}
});})(map__292564,map__292564__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui292566.prototype.om$core$IDidMount$ = true;

dynomics.space.ui.t_dynomics$space$ui292566.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__292564,map__292564__$1,id,state_updates,icon){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,self__.icon)){
var dataurl = dynomics.space.ui.render_to_image.call(null,self__.kind,self__.id);
return cljs.core.async.put_BANG_.call(null,self__.state_updates,((function (dataurl,this$__$1,map__292564,map__292564__$1,id,state_updates,icon){
return (function (s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (dataurl,this$__$1,map__292564,map__292564__$1,id,state_updates,icon){
return (function (s__$1){
return cljs.core.assoc_in.call(null,s__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"icons","icons",-297140977),self__.kind,self__.id], null),dataurl);
});})(dataurl,this$__$1,map__292564,map__292564__$1,id,state_updates,icon))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"make","make",-1284043325),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null);
});})(dataurl,this$__$1,map__292564,map__292564__$1,id,state_updates,icon))
);
} else {
return null;
}
});})(map__292564,map__292564__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui292566.getBasis = ((function (map__292564,map__292564__$1,id,state_updates,icon){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-cached-image-component","make-node-types-cached-image-component",-1391243851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"render-fn","render-fn",2039328045,null)], null)))], null)),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"render-fn","render-fn",2039328045,null),new cljs.core.Symbol(null,"p__292563","p__292563",2018239634,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__292564","map__292564",-134918649,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"icon","icon",-974829228,null),new cljs.core.Symbol(null,"meta292567","meta292567",1098193118,null)], null);
});})(map__292564,map__292564__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui292566.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui292566.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui292566";

dynomics.space.ui.t_dynomics$space$ui292566.cljs$lang$ctorPrWriter = ((function (map__292564,map__292564__$1,id,state_updates,icon){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.space.ui/t_dynomics$space$ui292566");
});})(map__292564,map__292564__$1,id,state_updates,icon))
;

dynomics.space.ui.__GT_t_dynomics$space$ui292566 = ((function (map__292564,map__292564__$1,id,state_updates,icon){
return (function dynomics$space$ui$make_node_types_cached_image_component_$___GT_t_dynomics$space$ui292566(make_node_types_cached_image_component__$1,kind__$1,render_fn__$1,p__292563__$1,owner__$1,map__292564__$2,id__$1,state_updates__$1,icon__$1,meta292567){
return (new dynomics.space.ui.t_dynomics$space$ui292566(make_node_types_cached_image_component__$1,kind__$1,render_fn__$1,p__292563__$1,owner__$1,map__292564__$2,id__$1,state_updates__$1,icon__$1,meta292567));
});})(map__292564,map__292564__$1,id,state_updates,icon))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui292566(dynomics$space$ui$make_node_types_cached_image_component,kind,render_fn,p__292563,owner,map__292564__$1,id,state_updates,icon,cljs.core.PersistentArrayMap.EMPTY));
});
});
dynomics.space.ui.make_icon_pattern = (function dynomics$space$ui$make_icon_pattern(type_id){
return React.createElement("pattern",{"id": [cljs.core.str("node_type_pattern_"),cljs.core.str(type_id)].join(''), "patternUnits": "userSpaceOnUse", "x": (0), "y": (0), "width": (1), "height": (1), "viewBox": "-1 -1 2 2"},sablono.interpreter.interpret.call(null,om.core.build.call(null,dynomics.space.ui.make_node_types_cached_image_component.call(null,new cljs.core.Keyword(null,"simple","simple",-581868663),cljs.core.partial.call(null,dynomics.space.ui.make_prerender_icon,new cljs.core.Keyword(null,"simple","simple",-581868663),dynomics.space.ui.make_simple_type_icon,(64),(64))),type_id)));
});
dynomics.space.ui.renderfn = (function dynomics$space$ui$renderfn(kind){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"friendly","friendly",281770577),cljs.core.partial.call(null,dynomics.space.ui.make_prerender_icon,kind,dynomics.space.ui.make_friendly_type_icon,(64),(64)),new cljs.core.Keyword(null,"simple","simple",-581868663),cljs.core.partial.call(null,dynomics.space.ui.make_prerender_icon,kind,dynomics.space.ui.make_simple_type_icon,(64),(64))], null).call(null,kind);
});
/**
 * Returns a component for the node types palette
 */
dynomics.space.ui.make_node_types_palette_component = (function dynomics$space$ui$make_node_types_palette_component(p__292569){
var map__292578 = p__292569;
var map__292578__$1 = ((((!((map__292578 == null)))?((((map__292578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292578):map__292578);
var state = map__292578__$1;
var state_updates = cljs.core.get.call(null,map__292578__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__292578__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var icons = cljs.core.get.call(null,map__292578__$1,new cljs.core.Keyword(null,"icons","icons",-297140977));
if(typeof dynomics.space.ui.t_dynomics$space$ui292580 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui292580 = (function (make_node_types_palette_component,p__292569,map__292578,state,state_updates,msgs,icons,meta292581){
this.make_node_types_palette_component = make_node_types_palette_component;
this.p__292569 = p__292569;
this.map__292578 = map__292578;
this.state = state;
this.state_updates = state_updates;
this.msgs = msgs;
this.icons = icons;
this.meta292581 = meta292581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui292580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__292578,map__292578__$1,state,state_updates,msgs,icons){
return (function (_292582,meta292581__$1){
var self__ = this;
var _292582__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui292580(self__.make_node_types_palette_component,self__.p__292569,self__.map__292578,self__.state,self__.state_updates,self__.msgs,self__.icons,meta292581__$1));
});})(map__292578,map__292578__$1,state,state_updates,msgs,icons))
;

dynomics.space.ui.t_dynomics$space$ui292580.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__292578,map__292578__$1,state,state_updates,msgs,icons){
return (function (_292582){
var self__ = this;
var _292582__$1 = this;
return self__.meta292581;
});})(map__292578,map__292578__$1,state,state_updates,msgs,icons))
;

dynomics.space.ui.t_dynomics$space$ui292580.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui292580.prototype.om$core$IRender$render$arity$1 = ((function (map__292578,map__292578__$1,state,state_updates,msgs,icons){
return (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return React.createElement("div",{"className": [cljs.core.str("node_types")].join('')},sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (this__44434__auto____$1,map__292578,map__292578__$1,state,state_updates,msgs,icons){
return (function (p__292583){
var map__292584 = p__292583;
var map__292584__$1 = ((((!((map__292584 == null)))?((((map__292584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292584):map__292584);
var id = cljs.core.get.call(null,map__292584__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var stability = cljs.core.get.call(null,map__292584__$1,new cljs.core.Keyword(null,"stability","stability",1733225509));
var type = cljs.core.get.call(null,map__292584__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("node_type_selector")].join(''),new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str("Set selected nodes to "),cljs.core.str(id),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,stability)),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,type))].join(''),new cljs.core.Keyword(null,"draggable","draggable",1676206163),false,new cljs.core.Keyword(null,"onMouseDown","onMouseDown",-1496366516),dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)),new cljs.core.Keyword(null,"onMouseUp","onMouseUp",-180363297),dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)),new cljs.core.Keyword(null,"onMouseMove","onMouseMove",2083193327),dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null))], null),om.core.build.call(null,dynomics.space.ui.make_node_types_cached_component.call(null,new cljs.core.Keyword(null,"simple","simple",-581868663),dynomics.space.ui.renderfn.call(null,new cljs.core.Keyword(null,"simple","simple",-581868663))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("ntp"),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),cljs.core.get_in.call(null,self__.icons,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),id], null)),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),self__.state_updates], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null))], null);
});})(this__44434__auto____$1,map__292578,map__292578__$1,state,state_updates,msgs,icons))
,cljs.core.vals.call(null,dynomics.space.core.node_types))));
});})(map__292578,map__292578__$1,state,state_updates,msgs,icons))
;

dynomics.space.ui.t_dynomics$space$ui292580.getBasis = ((function (map__292578,map__292578__$1,state,state_updates,msgs,icons){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-palette-component","make-node-types-palette-component",54407202,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"icons","icons",1343390550,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the node types palette"], null)),new cljs.core.Symbol(null,"p__292569","p__292569",1792860682,null),new cljs.core.Symbol(null,"map__292578","map__292578",1003088848,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"icons","icons",1343390550,null),new cljs.core.Symbol(null,"meta292581","meta292581",-1383545648,null)], null);
});})(map__292578,map__292578__$1,state,state_updates,msgs,icons))
;

dynomics.space.ui.t_dynomics$space$ui292580.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui292580.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui292580";

dynomics.space.ui.t_dynomics$space$ui292580.cljs$lang$ctorPrWriter = ((function (map__292578,map__292578__$1,state,state_updates,msgs,icons){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.space.ui/t_dynomics$space$ui292580");
});})(map__292578,map__292578__$1,state,state_updates,msgs,icons))
;

dynomics.space.ui.__GT_t_dynomics$space$ui292580 = ((function (map__292578,map__292578__$1,state,state_updates,msgs,icons){
return (function dynomics$space$ui$make_node_types_palette_component_$___GT_t_dynomics$space$ui292580(make_node_types_palette_component__$1,p__292569__$1,map__292578__$2,state__$1,state_updates__$1,msgs__$1,icons__$1,meta292581){
return (new dynomics.space.ui.t_dynomics$space$ui292580(make_node_types_palette_component__$1,p__292569__$1,map__292578__$2,state__$1,state_updates__$1,msgs__$1,icons__$1,meta292581));
});})(map__292578,map__292578__$1,state,state_updates,msgs,icons))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui292580(dynomics$space$ui$make_node_types_palette_component,p__292569,map__292578__$1,state,state_updates,msgs,icons,null));
});
/**
 * Returns a component for an edge
 */
dynomics.space.ui.make_edge_component = (function dynomics$space$ui$make_edge_component(p__292586){
var map__292598 = p__292586;
var map__292598__$1 = ((((!((map__292598 == null)))?((((map__292598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292598):map__292598);
var vec__292599 = cljs.core.get.call(null,map__292598__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__292600 = cljs.core.nth.call(null,vec__292599,(0),null);
var nid1 = cljs.core.nth.call(null,vec__292600,(0),null);
var nid2 = cljs.core.nth.call(null,vec__292600,(1),null);
var vec__292601 = cljs.core.nth.call(null,vec__292599,(1),null);
var nx1 = cljs.core.nth.call(null,vec__292601,(0),null);
var ny1 = cljs.core.nth.call(null,vec__292601,(1),null);
var vec__292602 = cljs.core.nth.call(null,vec__292599,(2),null);
var nx2 = cljs.core.nth.call(null,vec__292602,(0),null);
var ny2 = cljs.core.nth.call(null,vec__292602,(1),null);
var vec__292603 = cljs.core.nth.call(null,vec__292599,(3),null);
var cx1 = cljs.core.nth.call(null,vec__292603,(0),null);
var cx2 = cljs.core.nth.call(null,vec__292603,(1),null);
var vec__292604 = cljs.core.nth.call(null,vec__292599,(4),null);
var cy1 = cljs.core.nth.call(null,vec__292604,(0),null);
var cy2 = cljs.core.nth.call(null,vec__292604,(1),null);
var compatible_QMARK_ = cljs.core.get.call(null,map__292598__$1,new cljs.core.Keyword(null,"compatible?","compatible?",923422575));
var node_scale = cljs.core.get.call(null,map__292598__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
if(typeof dynomics.space.ui.t_dynomics$space$ui292606 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui292606 = (function (nx1,cx1,ny2,vec__292602,make_edge_component,map__292598,cy2,vec__292601,nx2,cy1,vec__292599,node_scale,ny1,vec__292600,cx2,vec__292604,compatible_QMARK_,vec__292603,nid2,nid1,p__292586,meta292607){
this.nx1 = nx1;
this.cx1 = cx1;
this.ny2 = ny2;
this.vec__292602 = vec__292602;
this.make_edge_component = make_edge_component;
this.map__292598 = map__292598;
this.cy2 = cy2;
this.vec__292601 = vec__292601;
this.nx2 = nx2;
this.cy1 = cy1;
this.vec__292599 = vec__292599;
this.node_scale = node_scale;
this.ny1 = ny1;
this.vec__292600 = vec__292600;
this.cx2 = cx2;
this.vec__292604 = vec__292604;
this.compatible_QMARK_ = compatible_QMARK_;
this.vec__292603 = vec__292603;
this.nid2 = nid2;
this.nid1 = nid1;
this.p__292586 = p__292586;
this.meta292607 = meta292607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui292606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__292598,map__292598__$1,vec__292599,vec__292600,nid1,nid2,vec__292601,nx1,ny1,vec__292602,nx2,ny2,vec__292603,cx1,cx2,vec__292604,cy1,cy2,compatible_QMARK_,node_scale){
return (function (_292608,meta292607__$1){
var self__ = this;
var _292608__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui292606(self__.nx1,self__.cx1,self__.ny2,self__.vec__292602,self__.make_edge_component,self__.map__292598,self__.cy2,self__.vec__292601,self__.nx2,self__.cy1,self__.vec__292599,self__.node_scale,self__.ny1,self__.vec__292600,self__.cx2,self__.vec__292604,self__.compatible_QMARK_,self__.vec__292603,self__.nid2,self__.nid1,self__.p__292586,meta292607__$1));
});})(map__292598,map__292598__$1,vec__292599,vec__292600,nid1,nid2,vec__292601,nx1,ny1,vec__292602,nx2,ny2,vec__292603,cx1,cx2,vec__292604,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui292606.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__292598,map__292598__$1,vec__292599,vec__292600,nid1,nid2,vec__292601,nx1,ny1,vec__292602,nx2,ny2,vec__292603,cx1,cx2,vec__292604,cy1,cy2,compatible_QMARK_,node_scale){
return (function (_292608){
var self__ = this;
var _292608__$1 = this;
return self__.meta292607;
});})(map__292598,map__292598__$1,vec__292599,vec__292600,nid1,nid2,vec__292601,nx1,ny1,vec__292602,nx2,ny2,vec__292603,cx1,cx2,vec__292604,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui292606.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui292606.prototype.om$core$IRender$render$arity$1 = ((function (map__292598,map__292598__$1,vec__292599,vec__292600,nid1,nid2,vec__292601,nx1,ny1,vec__292602,nx2,ny2,vec__292603,cx1,cx2,vec__292604,cy1,cy2,compatible_QMARK_,node_scale){
return (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return om.dom.path.call(null,{"key": [cljs.core.str("edge_"),cljs.core.str(self__.nid1),cljs.core.str("_"),cljs.core.str(self__.nid2)].join(''), "className": [cljs.core.str("edge "),cljs.core.str((cljs.core.truth_(self__.compatible_QMARK_)?"compatible_edge":null))].join(''), "d": dynomics.ui.svg.to_svg_path.call(null,cljs.core.map.call(null,dynomics.ui.svg.make_bezier_point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx1,self__.ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.cx1,self__.cy1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx2,self__.ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.cx2,self__.cy2], null)], null)], null)))});
});})(map__292598,map__292598__$1,vec__292599,vec__292600,nid1,nid2,vec__292601,nx1,ny1,vec__292602,nx2,ny2,vec__292603,cx1,cx2,vec__292604,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui292606.getBasis = ((function (map__292598,map__292598__$1,vec__292599,vec__292600,nid1,nid2,vec__292601,nx1,ny1,vec__292602,nx2,ny2,vec__292603,cx1,cx2,vec__292604,cy1,cy2,compatible_QMARK_,node_scale){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null),new cljs.core.Symbol(null,"vec__292602","vec__292602",-329860696,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-edge-component","make-edge-component",-530385559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null)], null)], null),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Symbol(null,"compatible?","compatible?",-1731013194,null),new cljs.core.Keyword(null,"compatible?","compatible?",923422575),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for an edge"], null)),new cljs.core.Symbol(null,"map__292598","map__292598",1452672266,null),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null),new cljs.core.Symbol(null,"vec__292601","vec__292601",605014764,null),new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"vec__292599","vec__292599",-784092144,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null),new cljs.core.Symbol(null,"vec__292600","vec__292600",495634801,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null),new cljs.core.Symbol(null,"vec__292604","vec__292604",-1863826026,null),new cljs.core.Symbol(null,"compatible?","compatible?",-1731013194,null),new cljs.core.Symbol(null,"vec__292603","vec__292603",915947353,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null),new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"p__292586","p__292586",1689367967,null),new cljs.core.Symbol(null,"meta292607","meta292607",-1910697615,null)], null);
});})(map__292598,map__292598__$1,vec__292599,vec__292600,nid1,nid2,vec__292601,nx1,ny1,vec__292602,nx2,ny2,vec__292603,cx1,cx2,vec__292604,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui292606.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui292606.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui292606";

dynomics.space.ui.t_dynomics$space$ui292606.cljs$lang$ctorPrWriter = ((function (map__292598,map__292598__$1,vec__292599,vec__292600,nid1,nid2,vec__292601,nx1,ny1,vec__292602,nx2,ny2,vec__292603,cx1,cx2,vec__292604,cy1,cy2,compatible_QMARK_,node_scale){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.space.ui/t_dynomics$space$ui292606");
});})(map__292598,map__292598__$1,vec__292599,vec__292600,nid1,nid2,vec__292601,nx1,ny1,vec__292602,nx2,ny2,vec__292603,cx1,cx2,vec__292604,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.__GT_t_dynomics$space$ui292606 = ((function (map__292598,map__292598__$1,vec__292599,vec__292600,nid1,nid2,vec__292601,nx1,ny1,vec__292602,nx2,ny2,vec__292603,cx1,cx2,vec__292604,cy1,cy2,compatible_QMARK_,node_scale){
return (function dynomics$space$ui$make_edge_component_$___GT_t_dynomics$space$ui292606(nx1__$1,cx1__$1,ny2__$1,vec__292602__$1,make_edge_component__$1,map__292598__$2,cy2__$1,vec__292601__$1,nx2__$1,cy1__$1,vec__292599__$1,node_scale__$1,ny1__$1,vec__292600__$1,cx2__$1,vec__292604__$1,compatible_QMARK___$1,vec__292603__$1,nid2__$1,nid1__$1,p__292586__$1,meta292607){
return (new dynomics.space.ui.t_dynomics$space$ui292606(nx1__$1,cx1__$1,ny2__$1,vec__292602__$1,make_edge_component__$1,map__292598__$2,cy2__$1,vec__292601__$1,nx2__$1,cy1__$1,vec__292599__$1,node_scale__$1,ny1__$1,vec__292600__$1,cx2__$1,vec__292604__$1,compatible_QMARK___$1,vec__292603__$1,nid2__$1,nid1__$1,p__292586__$1,meta292607));
});})(map__292598,map__292598__$1,vec__292599,vec__292600,nid1,nid2,vec__292601,nx1,ny1,vec__292602,nx2,ny2,vec__292603,cx1,cx2,vec__292604,cy1,cy2,compatible_QMARK_,node_scale))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui292606(nx1,cx1,ny2,vec__292602,dynomics$space$ui$make_edge_component,map__292598__$1,cy2,vec__292601,nx2,cy1,vec__292599,node_scale,ny1,vec__292600,cx2,vec__292604,compatible_QMARK_,vec__292603,nid2,nid1,p__292586,null));
});
dynomics.space.ui.make_curve_component = (function dynomics$space$ui$make_curve_component(zoom,node_scale,nodes,msgs,selected_curves,p__292609){
var vec__292615 = p__292609;
var vec__292616 = cljs.core.nth.call(null,vec__292615,(0),null);
var id = cljs.core.nth.call(null,vec__292616,(0),null);
var node_cp_ids = cljs.core.nth.call(null,vec__292616,(1),null);
var curve_type = cljs.core.nth.call(null,vec__292615,(1),null);
var pth = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378),id], null);
var e = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"path","path",-188191168),pth], null);
if(typeof dynomics.space.ui.t_dynomics$space$ui292617 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui292617 = (function (pth,vec__292616,curve_type,p__292609,zoom,node_cp_ids,node_scale,vec__292615,selected_curves,e,make_curve_component,msgs,nodes,id,meta292618){
this.pth = pth;
this.vec__292616 = vec__292616;
this.curve_type = curve_type;
this.p__292609 = p__292609;
this.zoom = zoom;
this.node_cp_ids = node_cp_ids;
this.node_scale = node_scale;
this.vec__292615 = vec__292615;
this.selected_curves = selected_curves;
this.e = e;
this.make_curve_component = make_curve_component;
this.msgs = msgs;
this.nodes = nodes;
this.id = id;
this.meta292618 = meta292618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui292617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (pth,e,vec__292615,vec__292616,id,node_cp_ids,curve_type){
return (function (_292619,meta292618__$1){
var self__ = this;
var _292619__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui292617(self__.pth,self__.vec__292616,self__.curve_type,self__.p__292609,self__.zoom,self__.node_cp_ids,self__.node_scale,self__.vec__292615,self__.selected_curves,self__.e,self__.make_curve_component,self__.msgs,self__.nodes,self__.id,meta292618__$1));
});})(pth,e,vec__292615,vec__292616,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui292617.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (pth,e,vec__292615,vec__292616,id,node_cp_ids,curve_type){
return (function (_292619){
var self__ = this;
var _292619__$1 = this;
return self__.meta292618;
});})(pth,e,vec__292615,vec__292616,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui292617.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui292617.prototype.om$core$IRender$render$arity$1 = ((function (pth,e,vec__292615,vec__292616,id,node_cp_ids,curve_type){
return (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return om.dom.path.call(null,{"key": [cljs.core.str("curve_"),cljs.core.str(self__.id)].join(''), "className": [cljs.core.str("curve "),cljs.core.str((cljs.core.truth_(self__.curve_type)?[cljs.core.str("curve_"),cljs.core.str(self__.curve_type)].join(''):null)),cljs.core.str((cljs.core.truth_(self__.selected_curves.call(null,self__.pth))?" selected_curve":null))].join(''), "strokeWidth": ((self__.node_scale / (5)) / self__.zoom), "onClick": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "onMouseMove": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "d": dynomics.ui.svg.to_svg_path.call(null,dynomics.ui.svg.to_beziers.call(null,cljs.core.map.call(null,self__.nodes,cljs.core.map.call(null,cljs.core.first,self__.node_cp_ids)),cljs.core.map.call(null,cljs.core.last,self__.node_cp_ids)))});
});})(pth,e,vec__292615,vec__292616,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui292617.getBasis = ((function (pth,e,vec__292615,vec__292616,id,node_cp_ids,curve_type){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pth","pth",1900111558,null),new cljs.core.Symbol(null,"vec__292616","vec__292616",1696021895,null),new cljs.core.Symbol(null,"curve-type","curve-type",-1863700632,null),new cljs.core.Symbol(null,"p__292609","p__292609",-2128016279,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"node-cp-ids","node-cp-ids",296302734,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"vec__292615","vec__292615",-349743438,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-curve-component","make-curve-component",-1782572970,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"node-cp-ids","node-cp-ids",296302734,null)], null),new cljs.core.Symbol(null,"curve-type","curve-type",-1863700632,null)], null)], null)))], null)),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta292618","meta292618",-973034117,null)], null);
});})(pth,e,vec__292615,vec__292616,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui292617.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui292617.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui292617";

dynomics.space.ui.t_dynomics$space$ui292617.cljs$lang$ctorPrWriter = ((function (pth,e,vec__292615,vec__292616,id,node_cp_ids,curve_type){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.space.ui/t_dynomics$space$ui292617");
});})(pth,e,vec__292615,vec__292616,id,node_cp_ids,curve_type))
;

dynomics.space.ui.__GT_t_dynomics$space$ui292617 = ((function (pth,e,vec__292615,vec__292616,id,node_cp_ids,curve_type){
return (function dynomics$space$ui$make_curve_component_$___GT_t_dynomics$space$ui292617(pth__$1,vec__292616__$1,curve_type__$1,p__292609__$1,zoom__$1,node_cp_ids__$1,node_scale__$1,vec__292615__$1,selected_curves__$1,e__$1,make_curve_component__$1,msgs__$1,nodes__$1,id__$1,meta292618){
return (new dynomics.space.ui.t_dynomics$space$ui292617(pth__$1,vec__292616__$1,curve_type__$1,p__292609__$1,zoom__$1,node_cp_ids__$1,node_scale__$1,vec__292615__$1,selected_curves__$1,e__$1,make_curve_component__$1,msgs__$1,nodes__$1,id__$1,meta292618));
});})(pth,e,vec__292615,vec__292616,id,node_cp_ids,curve_type))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui292617(pth,vec__292616,curve_type,p__292609,zoom,node_cp_ids,node_scale,vec__292615,selected_curves,e,dynomics$space$ui$make_curve_component,msgs,nodes,id,null));
});
dynomics.space.ui.make_open_region_component = (function dynomics$space$ui$make_open_region_component(p__292620){
var map__292633 = p__292620;
var map__292633__$1 = ((((!((map__292633 == null)))?((((map__292633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292633):map__292633);
var node_id = cljs.core.get.call(null,map__292633__$1,new cljs.core.Keyword(null,"node-id","node-id",779482292));
var quadrant_type = cljs.core.get.call(null,map__292633__$1,new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370));
var vec__292634 = cljs.core.get.call(null,map__292633__$1,new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631));
var qx = cljs.core.nth.call(null,vec__292634,(0),null);
var qy = cljs.core.nth.call(null,vec__292634,(1),null);
var vec__292635 = cljs.core.get.call(null,map__292633__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p1 = cljs.core.nth.call(null,vec__292635,(0),null);
var p2 = cljs.core.nth.call(null,vec__292635,(1),null);
var map__292636 = cljs.core.nth.call(null,vec__292635,(2),null);
var map__292636__$1 = ((((!((map__292636 == null)))?((((map__292636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292636):map__292636);
var p3 = map__292636__$1;
var vec__292637 = cljs.core.get.call(null,map__292636__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var x = cljs.core.nth.call(null,vec__292637,(0),null);
var y = cljs.core.nth.call(null,vec__292637,(1),null);
var vec__292638 = cljs.core.get.call(null,map__292636__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__292639 = cljs.core.nth.call(null,vec__292638,(0),null);
var cx = cljs.core.nth.call(null,vec__292639,(0),null);
var cy = cljs.core.nth.call(null,vec__292639,(1),null);
var p4 = cljs.core.nth.call(null,vec__292635,(3),null);
if(typeof dynomics.space.ui.t_dynomics$space$ui292642 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui292642 = (function (x,vec__292635,map__292636,y,vec__292639,p2,p4,p3,qx,vec__292638,qy,vec__292637,map__292633,p1,vec__292634,p__292620,make_open_region_component,cx,cy,node_id,quadrant_type,meta292643){
this.x = x;
this.vec__292635 = vec__292635;
this.map__292636 = map__292636;
this.y = y;
this.vec__292639 = vec__292639;
this.p2 = p2;
this.p4 = p4;
this.p3 = p3;
this.qx = qx;
this.vec__292638 = vec__292638;
this.qy = qy;
this.vec__292637 = vec__292637;
this.map__292633 = map__292633;
this.p1 = p1;
this.vec__292634 = vec__292634;
this.p__292620 = p__292620;
this.make_open_region_component = make_open_region_component;
this.cx = cx;
this.cy = cy;
this.node_id = node_id;
this.quadrant_type = quadrant_type;
this.meta292643 = meta292643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui292642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__292633,map__292633__$1,node_id,quadrant_type,vec__292634,qx,qy,vec__292635,p1,p2,map__292636,map__292636__$1,p3,vec__292637,x,y,vec__292638,vec__292639,cx,cy,p4){
return (function (_292644,meta292643__$1){
var self__ = this;
var _292644__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui292642(self__.x,self__.vec__292635,self__.map__292636,self__.y,self__.vec__292639,self__.p2,self__.p4,self__.p3,self__.qx,self__.vec__292638,self__.qy,self__.vec__292637,self__.map__292633,self__.p1,self__.vec__292634,self__.p__292620,self__.make_open_region_component,self__.cx,self__.cy,self__.node_id,self__.quadrant_type,meta292643__$1));
});})(map__292633,map__292633__$1,node_id,quadrant_type,vec__292634,qx,qy,vec__292635,p1,p2,map__292636,map__292636__$1,p3,vec__292637,x,y,vec__292638,vec__292639,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui292642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__292633,map__292633__$1,node_id,quadrant_type,vec__292634,qx,qy,vec__292635,p1,p2,map__292636,map__292636__$1,p3,vec__292637,x,y,vec__292638,vec__292639,cx,cy,p4){
return (function (_292644){
var self__ = this;
var _292644__$1 = this;
return self__.meta292643;
});})(map__292633,map__292633__$1,node_id,quadrant_type,vec__292634,qx,qy,vec__292635,p1,p2,map__292636,map__292636__$1,p3,vec__292637,x,y,vec__292638,vec__292639,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui292642.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui292642.prototype.om$core$IRender$render$arity$1 = ((function (map__292633,map__292633__$1,node_id,quadrant_type,vec__292634,qx,qy,vec__292635,p1,p2,map__292636,map__292636__$1,p3,vec__292637,x,y,vec__292638,vec__292639,cx,cy,p4){
return (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return om.dom.g.call(null,{},om.dom.defs.call(null,{},om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(self__.node_id),cljs.core.str("_"),cljs.core.str(self__.quadrant_type)].join(''), "gradientUnits": "userSpaceOnUse", "cx": self__.x, "cy": self__.y, "r": 0.04},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,self__.quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,self__.quadrant_type), "stopOpacity": "0"}))),om.dom.path.call(null,{"className": [cljs.core.str("dopen_region "),cljs.core.str([cljs.core.str("dopen_region_type_"),cljs.core.str(self__.quadrant_type)].join(''))].join(''), "fill": [cljs.core.str("url(#"),cljs.core.str([cljs.core.str("qg_"),cljs.core.str(self__.node_id),cljs.core.str("_"),cljs.core.str(self__.quadrant_type)].join('')),cljs.core.str(")")].join(''), "d": [cljs.core.str(dynomics.ui.svg.to_svg_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p1,self__.p2], null))),cljs.core.str(dynomics.ui.svg.to_svg_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,self__.p3,new cljs.core.Keyword(null,"ml","ml",1909675057),"L"),self__.p4], null))),cljs.core.str("z")].join('')}));
});})(map__292633,map__292633__$1,node_id,quadrant_type,vec__292634,qx,qy,vec__292635,p1,p2,map__292636,map__292636__$1,p3,vec__292637,x,y,vec__292638,vec__292639,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui292642.getBasis = ((function (map__292633,map__292633__$1,node_id,quadrant_type,vec__292634,qx,qy,vec__292635,p1,p2,map__292636,map__292636__$1,p3,vec__292637,x,y,vec__292638,vec__292639,cx,cy,p4){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"vec__292635","vec__292635",-1114599293,null),new cljs.core.Symbol(null,"map__292636","map__292636",1022935108,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"vec__292639","vec__292639",-1922793464,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null),new cljs.core.Symbol(null,"p4","p4",550404713,null),new cljs.core.Symbol(null,"p3","p3",-923395030,null),new cljs.core.Symbol(null,"qx","qx",876946123,null),new cljs.core.Symbol(null,"vec__292638","vec__292638",366101259,null),new cljs.core.Symbol(null,"qy","qy",1271868883,null),new cljs.core.Symbol(null,"vec__292637","vec__292637",-2026273164,null),new cljs.core.Symbol(null,"map__292633","map__292633",1865360309,null),new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"vec__292634","vec__292634",1509799798,null),new cljs.core.Symbol(null,"p__292620","p__292620",1497944567,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-open-region-component","make-open-region-component",530106712,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Keyword(null,"node-id","node-id",779482292),new cljs.core.Symbol(null,"quadrant-type","quadrant-type",333980157,null),new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"qx","qx",876946123,null),new cljs.core.Symbol(null,"qy","qy",1271868883,null)], null),new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"cy","cy",-1899104709,null)], null)], null),new cljs.core.Keyword(null,"control-points","control-points",-238538325),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"p3","p3",-923395030,null)], true, false),new cljs.core.Symbol(null,"p4","p4",550404713,null)], null),new cljs.core.Keyword(null,"points","points",-1486596883)], true, false)], null)))], null)),new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"cy","cy",-1899104709,null),new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Symbol(null,"quadrant-type","quadrant-type",333980157,null),new cljs.core.Symbol(null,"meta292643","meta292643",949704496,null)], null);
});})(map__292633,map__292633__$1,node_id,quadrant_type,vec__292634,qx,qy,vec__292635,p1,p2,map__292636,map__292636__$1,p3,vec__292637,x,y,vec__292638,vec__292639,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui292642.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui292642.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui292642";

dynomics.space.ui.t_dynomics$space$ui292642.cljs$lang$ctorPrWriter = ((function (map__292633,map__292633__$1,node_id,quadrant_type,vec__292634,qx,qy,vec__292635,p1,p2,map__292636,map__292636__$1,p3,vec__292637,x,y,vec__292638,vec__292639,cx,cy,p4){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.space.ui/t_dynomics$space$ui292642");
});})(map__292633,map__292633__$1,node_id,quadrant_type,vec__292634,qx,qy,vec__292635,p1,p2,map__292636,map__292636__$1,p3,vec__292637,x,y,vec__292638,vec__292639,cx,cy,p4))
;

dynomics.space.ui.__GT_t_dynomics$space$ui292642 = ((function (map__292633,map__292633__$1,node_id,quadrant_type,vec__292634,qx,qy,vec__292635,p1,p2,map__292636,map__292636__$1,p3,vec__292637,x,y,vec__292638,vec__292639,cx,cy,p4){
return (function dynomics$space$ui$make_open_region_component_$___GT_t_dynomics$space$ui292642(x__$1,vec__292635__$1,map__292636__$2,y__$1,vec__292639__$1,p2__$1,p4__$1,p3__$1,qx__$1,vec__292638__$1,qy__$1,vec__292637__$1,map__292633__$2,p1__$1,vec__292634__$1,p__292620__$1,make_open_region_component__$1,cx__$1,cy__$1,node_id__$1,quadrant_type__$1,meta292643){
return (new dynomics.space.ui.t_dynomics$space$ui292642(x__$1,vec__292635__$1,map__292636__$2,y__$1,vec__292639__$1,p2__$1,p4__$1,p3__$1,qx__$1,vec__292638__$1,qy__$1,vec__292637__$1,map__292633__$2,p1__$1,vec__292634__$1,p__292620__$1,make_open_region_component__$1,cx__$1,cy__$1,node_id__$1,quadrant_type__$1,meta292643));
});})(map__292633,map__292633__$1,node_id,quadrant_type,vec__292634,qx,qy,vec__292635,p1,p2,map__292636,map__292636__$1,p3,vec__292637,x,y,vec__292638,vec__292639,cx,cy,p4))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui292642(x,vec__292635,map__292636__$1,y,vec__292639,p2,p4,p3,qx,vec__292638,qy,vec__292637,map__292633__$1,p1,vec__292634,p__292620,dynomics$space$ui$make_open_region_component,cx,cy,node_id,quadrant_type,null));
});
/**
 * Returns a component for a node and its connections
 */
dynomics.space.ui.make_node_component = (function dynomics$space$ui$make_node_component(p__292645){
var map__292664 = p__292645;
var map__292664__$1 = ((((!((map__292664 == null)))?((((map__292664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292664):map__292664);
var map__292665 = cljs.core.get.call(null,map__292664__$1,new cljs.core.Keyword(null,"node","node",581201198));
var map__292665__$1 = ((((!((map__292665 == null)))?((((map__292665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292665):map__292665);
var node = map__292665__$1;
var vec__292666 = cljs.core.get.call(null,map__292665__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__292666,(0),null);
var y = cljs.core.nth.call(null,vec__292666,(1),null);
var t = cljs.core.get.call(null,map__292665__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var node_type = cljs.core.get.call(null,map__292665__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var id = cljs.core.get.call(null,map__292665__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var connections = cljs.core.get.call(null,map__292665__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var selected_nodes = cljs.core.get.call(null,map__292664__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var active_nodes = cljs.core.get.call(null,map__292664__$1,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891));
var show = cljs.core.get.call(null,map__292664__$1,new cljs.core.Keyword(null,"show","show",-576705889));
var state_updates = cljs.core.get.call(null,map__292664__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var zoom = cljs.core.get.call(null,map__292664__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var node_scale = cljs.core.get.call(null,map__292664__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var icons = cljs.core.get.call(null,map__292664__$1,new cljs.core.Keyword(null,"icons","icons",-297140977));
var msgs = cljs.core.get.call(null,map__292664__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var pth = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id], null);
if(typeof dynomics.space.ui.t_dynomics$space$ui292669 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui292669 = (function (t,connections,x,selected_nodes,active_nodes,show,pth,y,map__292665,state_updates,zoom,map__292664,make_node_component,p__292645,node_scale,vec__292666,node_type,node,icons,msgs,id,meta292670){
this.t = t;
this.connections = connections;
this.x = x;
this.selected_nodes = selected_nodes;
this.active_nodes = active_nodes;
this.show = show;
this.pth = pth;
this.y = y;
this.map__292665 = map__292665;
this.state_updates = state_updates;
this.zoom = zoom;
this.map__292664 = map__292664;
this.make_node_component = make_node_component;
this.p__292645 = p__292645;
this.node_scale = node_scale;
this.vec__292666 = vec__292666;
this.node_type = node_type;
this.node = node;
this.icons = icons;
this.msgs = msgs;
this.id = id;
this.meta292670 = meta292670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui292669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (pth,map__292664,map__292664__$1,map__292665,map__292665__$1,node,vec__292666,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function (_292671,meta292670__$1){
var self__ = this;
var _292671__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui292669(self__.t,self__.connections,self__.x,self__.selected_nodes,self__.active_nodes,self__.show,self__.pth,self__.y,self__.map__292665,self__.state_updates,self__.zoom,self__.map__292664,self__.make_node_component,self__.p__292645,self__.node_scale,self__.vec__292666,self__.node_type,self__.node,self__.icons,self__.msgs,self__.id,meta292670__$1));
});})(pth,map__292664,map__292664__$1,map__292665,map__292665__$1,node,vec__292666,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
;

dynomics.space.ui.t_dynomics$space$ui292669.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (pth,map__292664,map__292664__$1,map__292665,map__292665__$1,node,vec__292666,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function (_292671){
var self__ = this;
var _292671__$1 = this;
return self__.meta292670;
});})(pth,map__292664,map__292664__$1,map__292665,map__292665__$1,node,vec__292666,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
;

dynomics.space.ui.t_dynomics$space$ui292669.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui292669.prototype.om$core$IRender$render$arity$1 = ((function (pth,map__292664,map__292664__$1,map__292665,map__292665__$1,node,vec__292666,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return om.dom.g.call(null,{"id": [cljs.core.str("node_"),cljs.core.str(self__.id)].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.x,self__.y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),(self__.node_scale / (cljs.core.truth_(self__.zoom)?self__.zoom:(1)))], null)), "className": [cljs.core.str("node_subgraph "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,self__.pth))?"node_selected":null))].join(''), "onClick": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),self__.pth,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),self__.pth,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),self__.pth], null)), "onMouseMove": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),self__.pth], null))},(cljs.core.truth_((function (){var and__35380__auto__ = self__.node_type;
if(cljs.core.truth_(and__35380__auto__)){
return self__.show.call(null,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295));
} else {
return and__35380__auto__;
}
})())?cljs.core.map.call(null,((function (this__44434__auto____$1,pth,map__292664,map__292664__$1,map__292665,map__292665__$1,node,vec__292666,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function (p__292672){
var vec__292673 = p__292672;
var i = cljs.core.nth.call(null,vec__292673,(0),null);
var v = cljs.core.nth.call(null,vec__292673,(1),null);
return om.dom.path.call(null,{"className": [cljs.core.str("quadrant quadrant_type_"),cljs.core.str(cljs.core.get_in.call(null,dynomics.space.core.node_types,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.node_type,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),v], null)))].join(''), "d": "M0,0 v-1 A1,1 0 0,0 -1,0 z", "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),((-90) * i)], null))});
});})(this__44434__auto____$1,pth,map__292664,map__292664__$1,map__292665,map__292665__$1,node,vec__292666,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,(4)),cljs.core.iterate.call(null,cljs.core.partial.call(null,dynomics.space.core.c_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null)))):null),(cljs.core.truth_((function (){var and__35380__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"intersection","intersection",2003891010),self__.t);
if(and__35380__auto__){
return self__.show.call(null,new cljs.core.Keyword(null,"node-types","node-types",1539943342));
} else {
return and__35380__auto__;
}
})())?om.core.build.call(null,dynomics.space.ui.make_node_types_cached_image_component.call(null,new cljs.core.Keyword(null,"friendly","friendly",281770577),dynomics.space.ui.renderfn.call(null,new cljs.core.Keyword(null,"friendly","friendly",281770577))),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.node_type,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),((1) / self__.zoom),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),self__.state_updates,new cljs.core.Keyword(null,"icon","icon",1679606541),cljs.core.get_in.call(null,self__.icons,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"friendly","friendly",281770577),self__.node_type], null)),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("nntp"),cljs.core.str(self__.id)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)):null),(cljs.core.truth_((function (){var and__35380__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"intersection","intersection",2003891010),self__.t);
if(and__35380__auto__){
return self__.show.call(null,new cljs.core.Keyword(null,"quadrant-icons","quadrant-icons",737862449));
} else {
return and__35380__auto__;
}
})())?om.core.build.call(null,dynomics.space.ui.make_node_types_cached_image_component.call(null,new cljs.core.Keyword(null,"simple","simple",-581868663),dynomics.space.ui.renderfn.call(null,new cljs.core.Keyword(null,"simple","simple",-581868663))),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.node_type,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),((1) / self__.zoom),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),self__.state_updates,new cljs.core.Keyword(null,"icon","icon",1679606541),cljs.core.get_in.call(null,self__.icons,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),self__.node_type], null)),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("nntpp"),cljs.core.str(self__.id)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)):null),(cljs.core.truth_((function (){var and__35380__auto__ = self__.active_nodes;
if(cljs.core.truth_(and__35380__auto__)){
return self__.active_nodes.call(null,self__.pth);
} else {
return and__35380__auto__;
}
})())?om.dom.g.call(null,{"key": [cljs.core.str("c_"),cljs.core.str(self__.id)].join(''), "className": (cljs.core.truth_(cljs.core.some.call(null,self__.selected_nodes,cljs.core.map.call(null,((function (this__44434__auto____$1,pth,map__292664,map__292664__$1,map__292665,map__292665__$1,node,vec__292666,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function (p__292674){
var map__292675 = p__292674;
var map__292675__$1 = ((((!((map__292675 == null)))?((((map__292675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292675):map__292675);
var cid = cljs.core.get.call(null,map__292675__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null);
});})(this__44434__auto____$1,pth,map__292664,map__292664__$1,map__292665,map__292665__$1,node,vec__292666,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
,self__.connections)))?"node_connections_selected":"node_connections")},cljs.core.map.call(null,((function (this__44434__auto____$1,pth,map__292664,map__292664__$1,map__292665,map__292665__$1,node,vec__292666,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function (p__292677){
var map__292678 = p__292677;
var map__292678__$1 = ((((!((map__292678 == null)))?((((map__292678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292678):map__292678);
var vec__292679 = cljs.core.get.call(null,map__292678__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var scx = cljs.core.nth.call(null,vec__292679,(0),null);
var scy = cljs.core.nth.call(null,vec__292679,(1),null);
var cid = cljs.core.get.call(null,map__292678__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vec__292681 = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(self__.zoom / self__.node_scale)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scx,scy], null));
var cx = cljs.core.nth.call(null,vec__292681,(0),null);
var cy = cljs.core.nth.call(null,vec__292681,(1),null);
return om.dom.g.call(null,{"key": [cljs.core.str("c_"),cljs.core.str(self__.id),cljs.core.str("_"),cljs.core.str(cid)].join(''), "className": [cljs.core.str("node_connection"),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null)))?"node_connections_selected":null))].join(''), "id": [cljs.core.str("node_"),cljs.core.str(self__.id),cljs.core.str("_connection_"),cljs.core.str(cid)].join('')},om.dom.line.call(null,{"x1": (0), "y1": (0), "x2": cx, "y2": cy, "className": "node_connection_line"}),(function (){var path = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null);
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.15, "className": [cljs.core.str("node_connection_dot "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,path))?"node_selected":null))].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),cx,cy], null)), "onClick": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"connector","connector",-1517293248),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"id","id",-1388402092),cid], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"connector","connector",-1517293248),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"id","id",-1388402092),cid], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"connector","connector",-1517293248),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"id","id",-1388402092),cid], null))});
})());
});})(this__44434__auto____$1,pth,map__292664,map__292664__$1,map__292665,map__292665__$1,node,vec__292666,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
,self__.connections)):null),om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": (1), "transform": "scale(0.2)", "className": [cljs.core.str("node_selector_dot"),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,self__.pth))?"node_selected":null))].join('')}));
});})(pth,map__292664,map__292664__$1,map__292665,map__292665__$1,node,vec__292666,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
;

dynomics.space.ui.t_dynomics$space$ui292669.getBasis = ((function (pth,map__292664,map__292664__$1,map__292665,map__292665__$1,node,vec__292666,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.Symbol(null,"pth","pth",1900111558,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"map__292665","map__292665",-502340985,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"map__292664","map__292664",188432908,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-component","make-node-component",-1574550003,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Keyword(null,"connections","connections",-2064090887),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"node","node",-2073234571,null)], true, false),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"icons","icons",1343390550,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null)],[new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),new cljs.core.Keyword(null,"icons","icons",-297140977),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)])], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for a node and its connections"], null)),new cljs.core.Symbol(null,"p__292645","p__292645",-767036882,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"vec__292666","vec__292666",1462534258,null),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol(null,"icons","icons",1343390550,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta292670","meta292670",-1872798943,null)], null);
});})(pth,map__292664,map__292664__$1,map__292665,map__292665__$1,node,vec__292666,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
;

dynomics.space.ui.t_dynomics$space$ui292669.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui292669.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui292669";

dynomics.space.ui.t_dynomics$space$ui292669.cljs$lang$ctorPrWriter = ((function (pth,map__292664,map__292664__$1,map__292665,map__292665__$1,node,vec__292666,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.space.ui/t_dynomics$space$ui292669");
});})(pth,map__292664,map__292664__$1,map__292665,map__292665__$1,node,vec__292666,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
;

dynomics.space.ui.__GT_t_dynomics$space$ui292669 = ((function (pth,map__292664,map__292664__$1,map__292665,map__292665__$1,node,vec__292666,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function dynomics$space$ui$make_node_component_$___GT_t_dynomics$space$ui292669(t__$1,connections__$1,x__$1,selected_nodes__$1,active_nodes__$1,show__$1,pth__$1,y__$1,map__292665__$2,state_updates__$1,zoom__$1,map__292664__$2,make_node_component__$1,p__292645__$1,node_scale__$1,vec__292666__$1,node_type__$1,node__$1,icons__$1,msgs__$1,id__$1,meta292670){
return (new dynomics.space.ui.t_dynomics$space$ui292669(t__$1,connections__$1,x__$1,selected_nodes__$1,active_nodes__$1,show__$1,pth__$1,y__$1,map__292665__$2,state_updates__$1,zoom__$1,map__292664__$2,make_node_component__$1,p__292645__$1,node_scale__$1,vec__292666__$1,node_type__$1,node__$1,icons__$1,msgs__$1,id__$1,meta292670));
});})(pth,map__292664,map__292664__$1,map__292665,map__292665__$1,node,vec__292666,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui292669(t,connections,x,selected_nodes,active_nodes,show,pth,y,map__292665__$1,state_updates,zoom,map__292664__$1,dynomics$space$ui$make_node_component,p__292645,node_scale,vec__292666,node_type,node,icons,msgs,id,null));
});
dynomics.space.ui.test_component = (function dynomics$space$ui$test_component(x){
if(typeof dynomics.space.ui.t_dynomics$space$ui292685 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui292685 = (function (test_component,x,meta292686){
this.test_component = test_component;
this.x = x;
this.meta292686 = meta292686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui292685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_292687,meta292686__$1){
var self__ = this;
var _292687__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui292685(self__.test_component,self__.x,meta292686__$1));
});

dynomics.space.ui.t_dynomics$space$ui292685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_292687){
var self__ = this;
var _292687__$1 = this;
return self__.meta292686;
});

dynomics.space.ui.t_dynomics$space$ui292685.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui292685.prototype.om$core$IRender$render$arity$1 = (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.2, "fill": (((0.5 > Math.random()))?"orange":"green")});
});

dynomics.space.ui.t_dynomics$space$ui292685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"test-component","test-component",1959093538,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)))], null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"meta292686","meta292686",-1076658828,null)], null);
});

dynomics.space.ui.t_dynomics$space$ui292685.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui292685.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui292685";

dynomics.space.ui.t_dynomics$space$ui292685.cljs$lang$ctorPrWriter = (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.space.ui/t_dynomics$space$ui292685");
});

dynomics.space.ui.__GT_t_dynomics$space$ui292685 = (function dynomics$space$ui$test_component_$___GT_t_dynomics$space$ui292685(test_component__$1,x__$1,meta292686){
return (new dynomics.space.ui.t_dynomics$space$ui292685(test_component__$1,x__$1,meta292686));
});

}

return (new dynomics.space.ui.t_dynomics$space$ui292685(dynomics$space$ui$test_component,x,null));
});
dynomics.space.ui.make_quadrant_gradients = (function dynomics$space$ui$make_quadrant_gradients(){
var iter__36172__auto__ = (function dynomics$space$ui$make_quadrant_gradients_$_iter__292692(s__292693){
return (new cljs.core.LazySeq(null,(function (){
var s__292693__$1 = s__292693;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__292693__$1);
if(temp__4657__auto__){
var s__292693__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__292693__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__292693__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__292695 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__292694 = (0);
while(true){
if((i__292694 < size__36171__auto__)){
var quadrant_type = cljs.core._nth.call(null,c__36170__auto__,i__292694);
cljs.core.chunk_append.call(null,b__292695,om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(quadrant_type)].join(''), "gradientUnits": "objectBoundingBox", "cx": (0), "cy": (0), "r": (1)},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "0"})));

var G__292696 = (i__292694 + (1));
i__292694 = G__292696;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292695),dynomics$space$ui$make_quadrant_gradients_$_iter__292692.call(null,cljs.core.chunk_rest.call(null,s__292693__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292695),null);
}
} else {
var quadrant_type = cljs.core.first.call(null,s__292693__$2);
return cljs.core.cons.call(null,om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(quadrant_type)].join(''), "gradientUnits": "objectBoundingBox", "cx": (0), "cy": (0), "r": (1)},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "0"})),dynomics$space$ui$make_quadrant_gradients_$_iter__292692.call(null,cljs.core.rest.call(null,s__292693__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36172__auto__.call(null,cljs.core.range.call(null,(4)));
});
dynomics.space.ui.make_node_context_menu = (function dynomics$space$ui$make_node_context_menu(p__292697){
var map__292703 = p__292697;
var map__292703__$1 = ((((!((map__292703 == null)))?((((map__292703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292703):map__292703);
var s = map__292703__$1;
var map__292704 = cljs.core.get.call(null,map__292703__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__292704__$1 = ((((!((map__292704 == null)))?((((map__292704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292704):map__292704);
var vec__292705 = cljs.core.get.call(null,map__292704__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__292705,(0),null);
var y = cljs.core.nth.call(null,vec__292705,(1),null);
var sn = cljs.core.get.call(null,map__292703__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var state_updates = cljs.core.get.call(null,map__292703__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__292703__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
return om.dom.circle.call(null,{"id": "add-node-button", "cx": 0.5, "cy": 0.5, "r": 0.1, "fill": "red"});
});
dynomics.space.ui.context_menu_fn = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),dynomics.space.ui.make_node_context_menu], null);
/**
 * Returns a component for the phase-space editor
 */
dynomics.space.ui.make_space_component = (function dynomics$space$ui$make_space_component(p__292708){
var map__292718 = p__292708;
var map__292718__$1 = ((((!((map__292718 == null)))?((((map__292718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292718):map__292718);
var state = map__292718__$1;
var vec__292719 = cljs.core.get.call(null,map__292718__$1,new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331));
var ox = cljs.core.nth.call(null,vec__292719,(0),null);
var oy = cljs.core.nth.call(null,vec__292719,(1),null);
var show = cljs.core.get.call(null,map__292718__$1,new cljs.core.Keyword(null,"show","show",-576705889));
var zoom = cljs.core.get.call(null,map__292718__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var vec__292720 = cljs.core.get.call(null,map__292718__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var px = cljs.core.nth.call(null,vec__292720,(0),null);
var py = cljs.core.nth.call(null,vec__292720,(1),null);
var icons = cljs.core.get.call(null,map__292718__$1,new cljs.core.Keyword(null,"icons","icons",-297140977));
var su = cljs.core.get.call(null,map__292718__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__292718__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var map__292721 = cljs.core.get.call(null,map__292718__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__292721__$1 = ((((!((map__292721 == null)))?((((map__292721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292721):map__292721);
var space = map__292721__$1;
var selected_nodes = cljs.core.get.call(null,map__292721__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var active_nodes = cljs.core.get.call(null,map__292721__$1,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891));
var edges = cljs.core.get.call(null,map__292721__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var curves = cljs.core.get.call(null,map__292721__$1,new cljs.core.Keyword(null,"curves","curves",-510805378));
var curve_types = cljs.core.get.call(null,map__292721__$1,new cljs.core.Keyword(null,"curve-types","curve-types",1650772099));
var node_scale = cljs.core.get.call(null,map__292721__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var regions = cljs.core.get.call(null,map__292721__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var selected_curves = cljs.core.get.call(null,map__292721__$1,new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493));
var compatibilities = cljs.core.get.call(null,map__292721__$1,new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024));
var nodes = cljs.core.get.call(null,map__292721__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var graph = cljs.core.get.call(null,map__292721__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var context_menu = cljs.core.get.call(null,map__292718__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var cf = cljs.core.get.call(null,map__292718__$1,new cljs.core.Keyword(null,"cf","cf",1480736310));
if(typeof dynomics.space.ui.t_dynomics$space$ui292724 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui292724 = (function (selected_nodes,active_nodes,py,edges,oy,curves,show,zoom,p__292708,make_space_component,space,curve_types,vec__292719,vec__292720,node_scale,regions,ox,selected_curves,px,state,icons,compatibilities,map__292718,su,msgs,nodes,graph,context_menu,cf,map__292721,meta292725){
this.selected_nodes = selected_nodes;
this.active_nodes = active_nodes;
this.py = py;
this.edges = edges;
this.oy = oy;
this.curves = curves;
this.show = show;
this.zoom = zoom;
this.p__292708 = p__292708;
this.make_space_component = make_space_component;
this.space = space;
this.curve_types = curve_types;
this.vec__292719 = vec__292719;
this.vec__292720 = vec__292720;
this.node_scale = node_scale;
this.regions = regions;
this.ox = ox;
this.selected_curves = selected_curves;
this.px = px;
this.state = state;
this.icons = icons;
this.compatibilities = compatibilities;
this.map__292718 = map__292718;
this.su = su;
this.msgs = msgs;
this.nodes = nodes;
this.graph = graph;
this.context_menu = context_menu;
this.cf = cf;
this.map__292721 = map__292721;
this.meta292725 = meta292725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui292724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__292718,map__292718__$1,state,vec__292719,ox,oy,show,zoom,vec__292720,px,py,icons,su,msgs,map__292721,map__292721__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (_292726,meta292725__$1){
var self__ = this;
var _292726__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui292724(self__.selected_nodes,self__.active_nodes,self__.py,self__.edges,self__.oy,self__.curves,self__.show,self__.zoom,self__.p__292708,self__.make_space_component,self__.space,self__.curve_types,self__.vec__292719,self__.vec__292720,self__.node_scale,self__.regions,self__.ox,self__.selected_curves,self__.px,self__.state,self__.icons,self__.compatibilities,self__.map__292718,self__.su,self__.msgs,self__.nodes,self__.graph,self__.context_menu,self__.cf,self__.map__292721,meta292725__$1));
});})(map__292718,map__292718__$1,state,vec__292719,ox,oy,show,zoom,vec__292720,px,py,icons,su,msgs,map__292721,map__292721__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui292724.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__292718,map__292718__$1,state,vec__292719,ox,oy,show,zoom,vec__292720,px,py,icons,su,msgs,map__292721,map__292721__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (_292726){
var self__ = this;
var _292726__$1 = this;
return self__.meta292725;
});})(map__292718,map__292718__$1,state,vec__292719,ox,oy,show,zoom,vec__292720,px,py,icons,su,msgs,map__292721,map__292721__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui292724.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui292724.prototype.om$core$IRender$render$arity$1 = ((function (map__292718,map__292718__$1,state,vec__292719,ox,oy,show,zoom,vec__292720,px,py,icons,su,msgs,map__292721,map__292721__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return om.dom.div.call(null,{"className": [cljs.core.str("space "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),self__.cf))?"selected_function":"hidden_function"))].join('')},om.dom.svg.call(null,{"image-rendering": "optimizeQuality", "zoomAndPan": false, "preserveAspectRatio": "xMidYMin", "width": "100%", "shape-rendering": "crispEdges", "xmlns": "http://www.w3.org/2000/svg", "className": "space_svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "id": "space", "viewBox": "-1 -1 2 2", "height": "100%"},om.dom.defs.call(null,{"key": "defs"}),om.dom.g.call(null,{"id": "space_root", "key": "space_root", "onMouseMove": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseDown": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseUp": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onWheel": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onContextMenu": ((function (this__44434__auto____$1,map__292718,map__292718__$1,state,vec__292719,ox,oy,show,zoom,vec__292720,px,py,icons,su,msgs,map__292721,map__292721__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (e){
e.preventDefault();

return null;
});})(this__44434__auto____$1,map__292718,map__292718__$1,state,vec__292719,ox,oy,show,zoom,vec__292720,px,py,icons,su,msgs,map__292721,map__292721__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
, "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.ox,self__.oy], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),self__.zoom,self__.zoom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.px,self__.py], null))},om.dom.rect.call(null,{"x": (-16), "y": (-16), "width": (32), "height": (32), "className": "space_background"}),om.dom.rect.call(null,{"x": (0), "y": (0), "width": (1), "height": (1), "className": "space_space"}),om.core.build_all.call(null,cljs.core.partial.call(null,dynomics.space.ui.make_curve_component,self__.zoom,self__.node_scale,self__.nodes,self__.msgs,self__.selected_curves),cljs.core.map.call(null,cljs.core.vector,self__.curves,cljs.core.map.call(null,cljs.core.comp.call(null,self__.curve_types,cljs.core.key),self__.curves))),null,null,om.core.build_all.call(null,dynomics.space.ui.make_edge_component,cljs.core.map.call(null,((function (this__44434__auto____$1,map__292718,map__292718__$1,state,vec__292719,ox,oy,show,zoom,vec__292720,px,py,icons,su,msgs,map__292721,map__292721__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (e){
return cljs.core.assoc.call(null,dynomics.space.core.with_compatibilities.call(null,e,self__.compatibilities),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale);
});})(this__44434__auto____$1,map__292718,map__292718__$1,state,vec__292719,ox,oy,show,zoom,vec__292720,px,py,icons,su,msgs,map__292721,map__292721__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
,cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.edge_points,self__.nodes),self__.edges))),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__44434__auto____$1,map__292718,map__292718__$1,state,vec__292719,ox,oy,show,zoom,vec__292720,px,py,icons,su,msgs,map__292721,map__292721__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (node){
return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),self__.su,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),self__.zoom,new cljs.core.Keyword(null,"show","show",-576705889),self__.show,new cljs.core.Keyword(null,"icons","icons",-297140977),self__.icons,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891),self__.active_nodes], null),new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''));
});})(this__44434__auto____$1,map__292718,map__292718__$1,state,vec__292719,ox,oy,show,zoom,vec__292720,px,py,icons,su,msgs,map__292721,map__292721__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
,cljs.core.vals.call(null,cljs.core.apply.call(null,cljs.core.dissoc,self__.nodes,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),cljs.core.map.call(null,cljs.core.last,self__.selected_nodes))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__44434__auto____$1,map__292718,map__292718__$1,state,vec__292719,ox,oy,show,zoom,vec__292720,px,py,icons,su,msgs,map__292721,map__292721__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (node){
return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),self__.su,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),self__.zoom,new cljs.core.Keyword(null,"show","show",-576705889),self__.show,new cljs.core.Keyword(null,"icons","icons",-297140977),self__.icons,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891),self__.active_nodes], null),new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''));
});})(this__44434__auto____$1,map__292718,map__292718__$1,state,vec__292719,ox,oy,show,zoom,vec__292720,px,py,icons,su,msgs,map__292721,map__292721__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
,cljs.core.vals.call(null,cljs.core.select_keys.call(null,self__.nodes,cljs.core.map.call(null,cljs.core.last,self__.selected_nodes)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)))));
});})(map__292718,map__292718__$1,state,vec__292719,ox,oy,show,zoom,vec__292720,px,py,icons,su,msgs,map__292721,map__292721__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui292724.getBasis = ((function (map__292718,map__292718__$1,state,vec__292719,ox,oy,show,zoom,vec__292720,px,py,icons,su,msgs,map__292721,map__292721__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (){
return new cljs.core.PersistentVector(null, 31, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Symbol(null,"py","py",-1256449853,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"oy","oy",809196068,null),new cljs.core.Symbol(null,"curves","curves",1129726149,null),new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"p__292708","p__292708",1062902537,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-space-component","make-space-component",-638751478,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ox","ox",-2083100366,null),new cljs.core.Symbol(null,"oy","oy",809196068,null)], null),new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"px","px",1921861426,null),new cljs.core.Symbol(null,"py","py",-1256449853,null)], null),new cljs.core.Symbol(null,"icons","icons",1343390550,null),new cljs.core.Symbol(null,"su","su",155163255,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"curves","curves",1129726149,null),new cljs.core.Symbol(null,"curve-types","curve-types",-1003663670,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"compatibilities","compatibilities",289068503,null),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null)],[new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"icons","icons",-297140977),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"cf","cf",1480736310)])], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the phase-space editor"], null)),new cljs.core.Symbol(null,"space","space",1988665002,null),new cljs.core.Symbol(null,"curve-types","curve-types",-1003663670,null),new cljs.core.Symbol(null,"vec__292719","vec__292719",1614063696,null),new cljs.core.Symbol(null,"vec__292720","vec__292720",172054736,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"ox","ox",-2083100366,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.Symbol(null,"px","px",1921861426,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"icons","icons",1343390550,null),new cljs.core.Symbol(null,"compatibilities","compatibilities",289068503,null),new cljs.core.Symbol(null,"map__292718","map__292718",1686071799,null),new cljs.core.Symbol(null,"su","su",155163255,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Symbol(null,"map__292721","map__292721",596514366,null),new cljs.core.Symbol(null,"meta292725","meta292725",356905823,null)], null);
});})(map__292718,map__292718__$1,state,vec__292719,ox,oy,show,zoom,vec__292720,px,py,icons,su,msgs,map__292721,map__292721__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui292724.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui292724.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui292724";

dynomics.space.ui.t_dynomics$space$ui292724.cljs$lang$ctorPrWriter = ((function (map__292718,map__292718__$1,state,vec__292719,ox,oy,show,zoom,vec__292720,px,py,icons,su,msgs,map__292721,map__292721__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.space.ui/t_dynomics$space$ui292724");
});})(map__292718,map__292718__$1,state,vec__292719,ox,oy,show,zoom,vec__292720,px,py,icons,su,msgs,map__292721,map__292721__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.__GT_t_dynomics$space$ui292724 = ((function (map__292718,map__292718__$1,state,vec__292719,ox,oy,show,zoom,vec__292720,px,py,icons,su,msgs,map__292721,map__292721__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function dynomics$space$ui$make_space_component_$___GT_t_dynomics$space$ui292724(selected_nodes__$1,active_nodes__$1,py__$1,edges__$1,oy__$1,curves__$1,show__$1,zoom__$1,p__292708__$1,make_space_component__$1,space__$1,curve_types__$1,vec__292719__$1,vec__292720__$1,node_scale__$1,regions__$1,ox__$1,selected_curves__$1,px__$1,state__$1,icons__$1,compatibilities__$1,map__292718__$2,su__$1,msgs__$1,nodes__$1,graph__$1,context_menu__$1,cf__$1,map__292721__$2,meta292725){
return (new dynomics.space.ui.t_dynomics$space$ui292724(selected_nodes__$1,active_nodes__$1,py__$1,edges__$1,oy__$1,curves__$1,show__$1,zoom__$1,p__292708__$1,make_space_component__$1,space__$1,curve_types__$1,vec__292719__$1,vec__292720__$1,node_scale__$1,regions__$1,ox__$1,selected_curves__$1,px__$1,state__$1,icons__$1,compatibilities__$1,map__292718__$2,su__$1,msgs__$1,nodes__$1,graph__$1,context_menu__$1,cf__$1,map__292721__$2,meta292725));
});})(map__292718,map__292718__$1,state,vec__292719,ox,oy,show,zoom,vec__292720,px,py,icons,su,msgs,map__292721,map__292721__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui292724(selected_nodes,active_nodes,py,edges,oy,curves,show,zoom,p__292708,dynomics$space$ui$make_space_component,space,curve_types,vec__292719,vec__292720,node_scale,regions,ox,selected_curves,px,state,icons,compatibilities,map__292718__$1,su,msgs,nodes,graph,context_menu,cf,map__292721__$1,null));
});
