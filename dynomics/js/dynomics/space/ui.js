// Compiled by ClojureScript 1.8.34 {}
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
var args377474 = [];
var len__36260__auto___377477 = arguments.length;
var i__36261__auto___377478 = (0);
while(true){
if((i__36261__auto___377478 < len__36260__auto___377477)){
args377474.push((arguments[i__36261__auto___377478]));

var G__377479 = (i__36261__auto___377478 + (1));
i__36261__auto___377478 = G__377479;
continue;
} else {
}
break;
}

var G__377476 = args377474.length;
switch (G__377476) {
case 1:
return dynomics.space.ui.convert_coords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.ui.convert_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args377474.length)].join('')));

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
dynomics.space.ui.render_to_image = (function dynomics$space$ui$render_to_image(var_args){
var args377481 = [];
var len__36260__auto___377498 = arguments.length;
var i__36261__auto___377499 = (0);
while(true){
if((i__36261__auto___377499 < len__36260__auto___377498)){
args377481.push((arguments[i__36261__auto___377499]));

var G__377500 = (i__36261__auto___377499 + (1));
i__36261__auto___377499 = G__377500;
continue;
} else {
}
break;
}

var G__377483 = args377481.length;
switch (G__377483) {
case 0:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args377481.length)].join('')));

}
});

dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$0 = (function (){
return dynomics.space.ui.render_to_image.call(null,"all");
});

dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$1 = (function (id){
var up = dynomics.ui.css.unique_css_properties.call(null,dynomics.ui.css.css_rules.call(null,dynomics.ui.css.dark_style.call(null)));
var svg = document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#prerender_svg_"),cljs.core.str(id)].join('')));
var svgp = svg.parentElement.cloneNode(true);
var canvas = document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#prerender_canvas_"),cljs.core.str(id)].join('')));
var ccss = window.getComputedStyle(svg);
var ni1 = document.createNodeIterator(svg,NodeIterator.SHOW_ELEMENT,null);
var ni2 = document.createNodeIterator(svgp.firstElementChild,NodeIterator.SHOW_ELEMENT,null);
var seq__377484_377502 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni1.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
)),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni2.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
))));
var chunk__377485_377503 = null;
var count__377486_377504 = (0);
var i__377487_377505 = (0);
while(true){
if((i__377487_377505 < count__377486_377504)){
var vec__377488_377506 = cljs.core._nth.call(null,chunk__377485_377503,i__377487_377505);
var i_377507 = cljs.core.nth.call(null,vec__377488_377506,(0),null);
var j_377508 = cljs.core.nth.call(null,vec__377488_377506,(1),null);
j_377508.removeAttribute("id");

j_377508.removeAttribute("class");

j_377508.removeAttribute("data-reactid");

var ccss_377509__$1 = window.getComputedStyle(i_377507);
var seq__377489_377510 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_377509__$1.length));
var chunk__377490_377511 = null;
var count__377491_377512 = (0);
var i__377492_377513 = (0);
while(true){
if((i__377492_377513 < count__377491_377512)){
var is_377514 = cljs.core._nth.call(null,chunk__377490_377511,i__377492_377513);
var p_377515 = ccss_377509__$1.item(is_377514);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_377515)))){
j_377508.style.setProperty(p_377515,ccss_377509__$1.getPropertyValue(p_377515));
} else {
}

var G__377516 = seq__377489_377510;
var G__377517 = chunk__377490_377511;
var G__377518 = count__377491_377512;
var G__377519 = (i__377492_377513 + (1));
seq__377489_377510 = G__377516;
chunk__377490_377511 = G__377517;
count__377491_377512 = G__377518;
i__377492_377513 = G__377519;
continue;
} else {
var temp__4657__auto___377520 = cljs.core.seq.call(null,seq__377489_377510);
if(temp__4657__auto___377520){
var seq__377489_377521__$1 = temp__4657__auto___377520;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__377489_377521__$1)){
var c__36002__auto___377522 = cljs.core.chunk_first.call(null,seq__377489_377521__$1);
var G__377523 = cljs.core.chunk_rest.call(null,seq__377489_377521__$1);
var G__377524 = c__36002__auto___377522;
var G__377525 = cljs.core.count.call(null,c__36002__auto___377522);
var G__377526 = (0);
seq__377489_377510 = G__377523;
chunk__377490_377511 = G__377524;
count__377491_377512 = G__377525;
i__377492_377513 = G__377526;
continue;
} else {
var is_377527 = cljs.core.first.call(null,seq__377489_377521__$1);
var p_377528 = ccss_377509__$1.item(is_377527);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_377528)))){
j_377508.style.setProperty(p_377528,ccss_377509__$1.getPropertyValue(p_377528));
} else {
}

var G__377529 = cljs.core.next.call(null,seq__377489_377521__$1);
var G__377530 = null;
var G__377531 = (0);
var G__377532 = (0);
seq__377489_377510 = G__377529;
chunk__377490_377511 = G__377530;
count__377491_377512 = G__377531;
i__377492_377513 = G__377532;
continue;
}
} else {
}
}
break;
}

var G__377533 = seq__377484_377502;
var G__377534 = chunk__377485_377503;
var G__377535 = count__377486_377504;
var G__377536 = (i__377487_377505 + (1));
seq__377484_377502 = G__377533;
chunk__377485_377503 = G__377534;
count__377486_377504 = G__377535;
i__377487_377505 = G__377536;
continue;
} else {
var temp__4657__auto___377537 = cljs.core.seq.call(null,seq__377484_377502);
if(temp__4657__auto___377537){
var seq__377484_377538__$1 = temp__4657__auto___377537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__377484_377538__$1)){
var c__36002__auto___377539 = cljs.core.chunk_first.call(null,seq__377484_377538__$1);
var G__377540 = cljs.core.chunk_rest.call(null,seq__377484_377538__$1);
var G__377541 = c__36002__auto___377539;
var G__377542 = cljs.core.count.call(null,c__36002__auto___377539);
var G__377543 = (0);
seq__377484_377502 = G__377540;
chunk__377485_377503 = G__377541;
count__377486_377504 = G__377542;
i__377487_377505 = G__377543;
continue;
} else {
var vec__377493_377544 = cljs.core.first.call(null,seq__377484_377538__$1);
var i_377545 = cljs.core.nth.call(null,vec__377493_377544,(0),null);
var j_377546 = cljs.core.nth.call(null,vec__377493_377544,(1),null);
j_377546.removeAttribute("id");

j_377546.removeAttribute("class");

j_377546.removeAttribute("data-reactid");

var ccss_377547__$1 = window.getComputedStyle(i_377545);
var seq__377494_377548 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_377547__$1.length));
var chunk__377495_377549 = null;
var count__377496_377550 = (0);
var i__377497_377551 = (0);
while(true){
if((i__377497_377551 < count__377496_377550)){
var is_377552 = cljs.core._nth.call(null,chunk__377495_377549,i__377497_377551);
var p_377553 = ccss_377547__$1.item(is_377552);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_377553)))){
j_377546.style.setProperty(p_377553,ccss_377547__$1.getPropertyValue(p_377553));
} else {
}

var G__377554 = seq__377494_377548;
var G__377555 = chunk__377495_377549;
var G__377556 = count__377496_377550;
var G__377557 = (i__377497_377551 + (1));
seq__377494_377548 = G__377554;
chunk__377495_377549 = G__377555;
count__377496_377550 = G__377556;
i__377497_377551 = G__377557;
continue;
} else {
var temp__4657__auto___377558__$1 = cljs.core.seq.call(null,seq__377494_377548);
if(temp__4657__auto___377558__$1){
var seq__377494_377559__$1 = temp__4657__auto___377558__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__377494_377559__$1)){
var c__36002__auto___377560 = cljs.core.chunk_first.call(null,seq__377494_377559__$1);
var G__377561 = cljs.core.chunk_rest.call(null,seq__377494_377559__$1);
var G__377562 = c__36002__auto___377560;
var G__377563 = cljs.core.count.call(null,c__36002__auto___377560);
var G__377564 = (0);
seq__377494_377548 = G__377561;
chunk__377495_377549 = G__377562;
count__377496_377550 = G__377563;
i__377497_377551 = G__377564;
continue;
} else {
var is_377565 = cljs.core.first.call(null,seq__377494_377559__$1);
var p_377566 = ccss_377547__$1.item(is_377565);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_377566)))){
j_377546.style.setProperty(p_377566,ccss_377547__$1.getPropertyValue(p_377566));
} else {
}

var G__377567 = cljs.core.next.call(null,seq__377494_377559__$1);
var G__377568 = null;
var G__377569 = (0);
var G__377570 = (0);
seq__377494_377548 = G__377567;
chunk__377495_377549 = G__377568;
count__377496_377550 = G__377569;
i__377497_377551 = G__377570;
continue;
}
} else {
}
}
break;
}

var G__377571 = cljs.core.next.call(null,seq__377484_377538__$1);
var G__377572 = null;
var G__377573 = (0);
var G__377574 = (0);
seq__377484_377502 = G__377571;
chunk__377485_377503 = G__377572;
count__377486_377504 = G__377573;
i__377487_377505 = G__377574;
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
dynomics.space.ui.make_handler = (function dynomics$space$ui$make_handler(transforms,type_key,source,msgch,s){
return (function (e){
e.preventDefault();

e.stopPropagation();

var pl = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
var transforms__$1 = ((cljs.core.vector_QMARK_.call(null,transforms))?transforms:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transforms], null));
var mp = cljs.core.map.call(null,cljs.core.apply,transforms__$1,cljs.core.repeat.call(null,pl));
cljs.core.async.put_BANG_.call(null,msgch,cljs.core.merge.call(null,s,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Keyword(null,"deltaX","deltaX",-1317913656),new cljs.core.Keyword(null,"meta-key?","meta-key?",940581001),new cljs.core.Keyword(null,"transforms","transforms",793344554),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989),new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"deltaY","deltaY",-879493966),new cljs.core.Keyword(null,"which","which",-1255268941),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword(null,"alt-key?","alt-key?",234827606),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"deltaZ","deltaZ",1656656988),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword(null,"positions","positions",-1380538434)],[e.buttons,type_key,e.button,pl,e.deltaX,e.metaKey,transforms__$1,e.ctrlKey,new cljs.core.Keyword(null,"event","event",301435442),e.deltaY,e.which,(function (){var or__35191__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return cljs.core.keyword.call(null,(function (){var or__35191__auto____$1 = e.target.id;
if(cljs.core.truth_(or__35191__auto____$1)){
return or__35191__auto____$1;
} else {
return [cljs.core.str(e.target)].join('');
}
})());
}
})(),e.shiftKey,e.altKey,cljs.core.first.call(null,mp),e.deltaZ,source,mp])));

return null;
});
});
dynomics.space.ui.arrowhead = (function dynomics$space$ui$arrowhead(trajectory){
var vec__377577 = cljs.core.subvec.call(null,trajectory,((cljs.core.count.call(null,trajectory) - (1)) - (1)),cljs.core.count.call(null,trajectory));
var p1 = cljs.core.nth.call(null,vec__377577,(0),null);
var p2 = cljs.core.nth.call(null,vec__377577,(1),null);
var v = cljs.core.map.call(null,cljs.core._,p1,p2);
var a = (dynomics.space.core.r2d * (dynomics.space.core.PI2 - dynomics.space.core.angle.call(null,v)));
var a1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);
var a2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
var a3 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null);
var vec__377578 = cljs.core.map.call(null,cljs.core._PLUS_,p2,cljs.core.map.call(null,dynomics.space.core.P.call(null,cljs.core._STAR_,0.505),v));
var ox = cljs.core.nth.call(null,vec__377578,(0),null);
var oy = cljs.core.nth.call(null,vec__377578,(1),null);
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
}),dynomics.space.core.midpoints.call(null,trajectory),cljs.core.map.call(null,(function (p__377581){
var vec__377582 = p__377581;
var p1 = cljs.core.nth.call(null,vec__377582,(0),null);
var p2 = cljs.core.nth.call(null,vec__377582,(1),null);
return dynomics.space.core.move_along.call(null,(1),p1,p2);
}),cljs.core.partition.call(null,(2),(1),trajectory))))], null)], null),null,(cljs.core.truth_(with_arrowhead)?dynomics.space.ui.arrowhead.call(null,cljs.core.vec.call(null,trajectory)):null)], null);
});
dynomics.space.ui.get_icon_fn = (function dynomics$space$ui$get_icon_fn(type_id){
return cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(0)], null),(8),(16),0.97,(0)),cljs.core.partial.call(null,dynomics.space.core.spiral,(32),1.1,0.5),cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null),(8),(16),1.045,(0)),cljs.core.partial.call(null,dynomics.space.core.saddle_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(8),(20)),cljs.core.partial.call(null,dynomics.space.core.spiral,(32),1.1,-0.5),cljs.core.partial.call(null,dynomics.space.core.saddle_3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(8),(20)),cljs.core.partial.call(null,dynomics.space.core.saddle_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(8),(20)),cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(0)], null),(1),(32),0.97,0.42),cljs.core.partial.call(null,dynomics.space.core.saddle_5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(8),(20)),cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(0)], null),(1),(16),0.91,-0.92)]),type_id,cljs.core.partial.call(null,dynomics.space.core.spiral,(155),1.02,0.1));
});
dynomics.space.ui.make_type_icon = (function dynomics$space$ui$make_type_icon(type_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("type_icon_"),cljs.core.str(type_id)].join(''),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("type_icon "),cljs.core.str([cljs.core.str("type_icon_"),cljs.core.str(type_id)].join(''))].join(''),new cljs.core.Keyword(null,"transform","transform",1381301764),dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),0.5,0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),0.05], null))], null),cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.ui.make_bezier_trajectory_group,true),dynomics.space.ui.get_icon_fn.call(null,type_id).call(null))], null);
});
dynomics.space.ui.make_icon_pattern = (function dynomics$space$ui$make_icon_pattern(type_id){
return React.createElement("pattern",{"id": [cljs.core.str("node_type_pattern_"),cljs.core.str(type_id)].join(''), "patternUnits": "userSpaceOnUse", "x": (0), "y": (0), "width": (1), "height": (1), "viewBox": "-1 -1 2 2"},sablono.interpreter.interpret.call(null,dynomics.space.ui.make_type_icon.call(null,type_id)));
});
dynomics.space.ui.make_prerender_icon = (function dynomics$space$ui$make_prerender_icon(id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("prerender_canvas_"),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"width","width",-384071477),(256),new cljs.core.Keyword(null,"height","height",1025178622),(256)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classsName","classsName",2107715185),"node_type_selector",new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("prerender_svg_box_"),cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"zoomAndPan","zoomAndPan",-449580731),new cljs.core.Keyword(null,"preserveAspectRatio","preserveAspectRatio",1832131817),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"shape-rendering","shape-rendering",955846315),new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),new cljs.core.Keyword(null,"classsName","classsName",2107715185),new cljs.core.Keyword(null,"xmlns:xlink","xmlns:xlink",-316591054),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),new cljs.core.Keyword(null,"height","height",1025178622)],[false,"xMidYMin","256px","crispEdges","http://www.w3.org/2000/svg","space_svg","http://www.w3.org/1999/xlink",[cljs.core.str("prerender_svg_"),cljs.core.str(id)].join(''),"-1 -1 3 3","256px"]),dynomics.space.ui.make_type_icon.call(null,id)], null)], null)], null);
});
dynomics.space.ui.make_paths = (function dynomics$space$ui$make_paths(p__377583){
var map__377590 = p__377583;
var map__377590__$1 = ((((!((map__377590 == null)))?((((map__377590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377590):map__377590);
var space = map__377590__$1;
var nodes = cljs.core.get.call(null,map__377590__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__377590__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var regions = cljs.core.get.call(null,map__377590__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var node_scale = cljs.core.get.call(null,map__377590__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
cljs.core.println.call(null,"Regions ",regions);

return cljs.core.map.call(null,((function (map__377590,map__377590__$1,space,nodes,edges,regions,node_scale){
return (function (region){
return cljs.core.reduce.call(null,((function (map__377590,map__377590__$1,space,nodes,edges,regions,node_scale){
return (function (beziers,connection){
return cljs.core.conj.call(null,beziers,cljs.core.map.call(null,((function (map__377590,map__377590__$1,space,nodes,edges,regions,node_scale){
return (function (p__377592){
var vec__377593 = p__377592;
var nid1 = cljs.core.nth.call(null,vec__377593,(0),null);
var cid1 = cljs.core.nth.call(null,vec__377593,(1),null);
var vec__377594 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx1 = cljs.core.nth.call(null,vec__377594,(0),null);
var ny1 = cljs.core.nth.call(null,vec__377594,(1),null);
var vec__377595 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx1 = cljs.core.nth.call(null,vec__377595,(0),null);
var cy1 = cljs.core.nth.call(null,vec__377595,(1),null);
return dynomics.ui.svg.make_bezier_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx1 + (node_scale * cx1)),(ny1 + (node_scale * cy1))], null)], null));
});})(map__377590,map__377590__$1,space,nodes,edges,regions,node_scale))
,cljs.core.map.call(null,dynomics.space.core.simplify_connection,connection)));
});})(map__377590,map__377590__$1,space,nodes,edges,regions,node_scale))
,cljs.core.PersistentVector.EMPTY,region);
});})(map__377590,map__377590__$1,space,nodes,edges,regions,node_scale))
,regions);
});
/**
 * Returns a palette of tools
 */
dynomics.space.ui.make_tools_palette_component = (function dynomics$space$ui$make_tools_palette_component(p__377596){
var map__377603 = p__377596;
var map__377603__$1 = ((((!((map__377603 == null)))?((((map__377603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377603):map__377603);
var state = map__377603__$1;
var current_tool = cljs.core.get.call(null,map__377603__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
var tools = cljs.core.get.call(null,map__377603__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
var tools_order = cljs.core.get.call(null,map__377603__$1,new cljs.core.Keyword(null,"tools-order","tools-order",-615877648));
var state_updates = cljs.core.get.call(null,map__377603__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
return om.dom.div.call(null,{"className": "tool_things"},om.dom.div.call(null,{"className": "tool_selectors"},cljs.core.map.call(null,((function (map__377603,map__377603__$1,state,current_tool,tools,tools_order,state_updates){
return (function (p__377605){
var vec__377606 = p__377605;
var tk = cljs.core.nth.call(null,vec__377606,(0),null);
var map__377607 = cljs.core.nth.call(null,vec__377606,(1),null);
var map__377607__$1 = ((((!((map__377607 == null)))?((((map__377607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377607):map__377607);
var description = cljs.core.get.call(null,map__377607__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var icon = cljs.core.get.call(null,map__377607__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var keybinding = cljs.core.get.call(null,map__377607__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
return om.dom.div.call(null,{"className": [cljs.core.str("tool_selector "),cljs.core.str(((cljs.core._EQ_.call(null,tk,current_tool))?"tool_selected":null))].join(''), "title": [cljs.core.str(description),cljs.core.str(" ( "),cljs.core.str((((keybinding instanceof cljs.core.Keyword))?cljs.core.name.call(null,keybinding):keybinding)),cljs.core.str(" )")].join(''), "onMouseDown": ((function (vec__377606,tk,map__377607,map__377607__$1,description,icon,keybinding,map__377603,map__377603__$1,state,current_tool,tools,tools_order,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__377606,tk,map__377607,map__377607__$1,description,icon,keybinding,map__377603,map__377603__$1,state,current_tool,tools,tools_order,state_updates){
return (function (s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),tk);
});})(vec__377606,tk,map__377607,map__377607__$1,description,icon,keybinding,map__377603,map__377603__$1,state,current_tool,tools,tools_order,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tool","tool",-1298696470),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null));

return null;
});})(vec__377606,tk,map__377607,map__377607__$1,description,icon,keybinding,map__377603,map__377603__$1,state,current_tool,tools,tools_order,state_updates))
},icon);
});})(map__377603,map__377603__$1,state,current_tool,tools,tools_order,state_updates))
,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,tools),tools_order))),om.dom.div.call(null,{"className": "current_tool_text", "title": cljs.core.get_in.call(null,tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tool,new cljs.core.Keyword(null,"description","description",-1428560544)], null))},cljs.core.get_in.call(null,tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tool,new cljs.core.Keyword(null,"name","name",1843675177)], null))));
});
/**
 * Returns a node-type component for the node types palette,
 *   which can prerender its SVG to a canvas & therefore
 *   cache the resulting image, to save on components in the DOM if need be.
 */
dynomics.space.ui.make_node_types_cached_component = (function dynomics$space$ui$make_node_types_cached_component(p__377609,owner){
var map__377615 = p__377609;
var map__377615__$1 = ((((!((map__377615 == null)))?((((map__377615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377615):map__377615);
var id = cljs.core.get.call(null,map__377615__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(typeof dynomics.space.ui.t_dynomics$space$ui377617 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui377617 = (function (make_node_types_cached_component,p__377609,owner,map__377615,id,meta377618){
this.make_node_types_cached_component = make_node_types_cached_component;
this.p__377609 = p__377609;
this.owner = owner;
this.map__377615 = map__377615;
this.id = id;
this.meta377618 = meta377618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui377617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__377615,map__377615__$1,id){
return (function (_377619,meta377618__$1){
var self__ = this;
var _377619__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui377617(self__.make_node_types_cached_component,self__.p__377609,self__.owner,self__.map__377615,self__.id,meta377618__$1));
});})(map__377615,map__377615__$1,id))
;

dynomics.space.ui.t_dynomics$space$ui377617.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__377615,map__377615__$1,id){
return (function (_377619){
var self__ = this;
var _377619__$1 = this;
return self__.meta377618;
});})(map__377615,map__377615__$1,id))
;

dynomics.space.ui.t_dynomics$space$ui377617.prototype.om$core$IInitState$ = true;

dynomics.space.ui.t_dynomics$space$ui377617.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__377615,map__377615__$1,id){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__4655__auto__ = localStorage.getItem([cljs.core.str("dataurl_"),cljs.core.str(self__.id)].join(''));
if(cljs.core.truth_(temp__4655__auto__)){
var d = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dataurl","dataurl",-2004200406),d], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dataurl","dataurl",-2004200406),null], null);
}
});})(map__377615,map__377615__$1,id))
;

dynomics.space.ui.t_dynomics$space$ui377617.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui377617.prototype.om$core$IRender$render$arity$1 = ((function (map__377615,map__377615__$1,id){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__4655__auto__ = new cljs.core.Keyword(null,"dataurl","dataurl",-2004200406).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner));
if(cljs.core.truth_(temp__4655__auto__)){
var dataurl = temp__4655__auto__;
return om.dom.img.call(null,{"width": (32), "height": (32), "src": dataurl, "draggable": false});
} else {
return sablono.interpreter.interpret.call(null,dynomics.space.ui.make_prerender_icon.call(null,self__.id));
}
});})(map__377615,map__377615__$1,id))
;

dynomics.space.ui.t_dynomics$space$ui377617.prototype.om$core$IDidMount$ = true;

dynomics.space.ui.t_dynomics$space$ui377617.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__377615,map__377615__$1,id){
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
});})(map__377615,map__377615__$1,id))
;

dynomics.space.ui.t_dynomics$space$ui377617.getBasis = ((function (map__377615,map__377615__$1,id){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-cached-component","make-node-types-cached-component",-655003199,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a node-type component for the node types palette,\n  which can prerender its SVG to a canvas & therefore\n  cache the resulting image, to save on components in the DOM if need be."], null)),new cljs.core.Symbol(null,"p__377609","p__377609",-1545773211,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__377615","map__377615",-1207602930,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta377618","meta377618",-1009832595,null)], null);
});})(map__377615,map__377615__$1,id))
;

dynomics.space.ui.t_dynomics$space$ui377617.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui377617.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui377617";

dynomics.space.ui.t_dynomics$space$ui377617.cljs$lang$ctorPrWriter = ((function (map__377615,map__377615__$1,id){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui377617");
});})(map__377615,map__377615__$1,id))
;

dynomics.space.ui.__GT_t_dynomics$space$ui377617 = ((function (map__377615,map__377615__$1,id){
return (function dynomics$space$ui$make_node_types_cached_component_$___GT_t_dynomics$space$ui377617(make_node_types_cached_component__$1,p__377609__$1,owner__$1,map__377615__$2,id__$1,meta377618){
return (new dynomics.space.ui.t_dynomics$space$ui377617(make_node_types_cached_component__$1,p__377609__$1,owner__$1,map__377615__$2,id__$1,meta377618));
});})(map__377615,map__377615__$1,id))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui377617(dynomics$space$ui$make_node_types_cached_component,p__377609,owner,map__377615__$1,id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a node-type component for the node types palette,
 *   which can prerender its SVG to a canvas & therefore
 *   cache the resulting image, to save on components in the DOM if need be.
 */
dynomics.space.ui.make_node_types_cached_image_component = (function dynomics$space$ui$make_node_types_cached_image_component(p__377620,owner){
var map__377628 = p__377620;
var map__377628__$1 = ((((!((map__377628 == null)))?((((map__377628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377628):map__377628);
var node_type = cljs.core.get.call(null,map__377628__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var node_scale = cljs.core.get.call(null,map__377628__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var zoom = cljs.core.get.call(null,map__377628__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
if(typeof dynomics.space.ui.t_dynomics$space$ui377630 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui377630 = (function (make_node_types_cached_image_component,p__377620,owner,map__377628,node_type,node_scale,zoom,meta377631){
this.make_node_types_cached_image_component = make_node_types_cached_image_component;
this.p__377620 = p__377620;
this.owner = owner;
this.map__377628 = map__377628;
this.node_type = node_type;
this.node_scale = node_scale;
this.zoom = zoom;
this.meta377631 = meta377631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui377630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__377628,map__377628__$1,node_type,node_scale,zoom){
return (function (_377632,meta377631__$1){
var self__ = this;
var _377632__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui377630(self__.make_node_types_cached_image_component,self__.p__377620,self__.owner,self__.map__377628,self__.node_type,self__.node_scale,self__.zoom,meta377631__$1));
});})(map__377628,map__377628__$1,node_type,node_scale,zoom))
;

dynomics.space.ui.t_dynomics$space$ui377630.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__377628,map__377628__$1,node_type,node_scale,zoom){
return (function (_377632){
var self__ = this;
var _377632__$1 = this;
return self__.meta377631;
});})(map__377628,map__377628__$1,node_type,node_scale,zoom))
;

dynomics.space.ui.t_dynomics$space$ui377630.prototype.om$core$IInitState$ = true;

dynomics.space.ui.t_dynomics$space$ui377630.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__377628,map__377628__$1,node_type,node_scale,zoom){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__4655__auto__ = localStorage.getItem([cljs.core.str("dataurl_"),cljs.core.str(self__.node_type)].join(''));
if(cljs.core.truth_(temp__4655__auto__)){
var d = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dataurl","dataurl",-2004200406),d], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dataurl","dataurl",-2004200406),null], null);
}
});})(map__377628,map__377628__$1,node_type,node_scale,zoom))
;

dynomics.space.ui.t_dynomics$space$ui377630.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui377630.prototype.om$core$IRender$render$arity$1 = ((function (map__377628,map__377628__$1,node_type,node_scale,zoom){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__4655__auto__ = new cljs.core.Keyword(null,"dataurl","dataurl",-2004200406).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner));
if(cljs.core.truth_(temp__4655__auto__)){
var dataurl = temp__4655__auto__;
return React.createElement("image",{"width": (1), "height": (1), "x": (0), "y": (0), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),(2)], null)), "xlinkHref": dataurl});
} else {
return React.createElement("circle",{"r": 0.5, "x": (0), "y": (0), "fill": "orange"});
}
});})(map__377628,map__377628__$1,node_type,node_scale,zoom))
;

dynomics.space.ui.t_dynomics$space$ui377630.getBasis = ((function (map__377628,map__377628__$1,node_type,node_scale,zoom){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-cached-image-component","make-node-types-cached-image-component",-1391243851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a node-type component for the node types palette,\n  which can prerender its SVG to a canvas & therefore\n  cache the resulting image, to save on components in the DOM if need be."], null)),new cljs.core.Symbol(null,"p__377620","p__377620",689397598,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__377628","map__377628",640450051,null),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"meta377631","meta377631",1499539784,null)], null);
});})(map__377628,map__377628__$1,node_type,node_scale,zoom))
;

dynomics.space.ui.t_dynomics$space$ui377630.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui377630.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui377630";

dynomics.space.ui.t_dynomics$space$ui377630.cljs$lang$ctorPrWriter = ((function (map__377628,map__377628__$1,node_type,node_scale,zoom){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui377630");
});})(map__377628,map__377628__$1,node_type,node_scale,zoom))
;

dynomics.space.ui.__GT_t_dynomics$space$ui377630 = ((function (map__377628,map__377628__$1,node_type,node_scale,zoom){
return (function dynomics$space$ui$make_node_types_cached_image_component_$___GT_t_dynomics$space$ui377630(make_node_types_cached_image_component__$1,p__377620__$1,owner__$1,map__377628__$2,node_type__$1,node_scale__$1,zoom__$1,meta377631){
return (new dynomics.space.ui.t_dynomics$space$ui377630(make_node_types_cached_image_component__$1,p__377620__$1,owner__$1,map__377628__$2,node_type__$1,node_scale__$1,zoom__$1,meta377631));
});})(map__377628,map__377628__$1,node_type,node_scale,zoom))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui377630(dynomics$space$ui$make_node_types_cached_image_component,p__377620,owner,map__377628__$1,node_type,node_scale,zoom,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a component for the node types palette
 */
dynomics.space.ui.make_node_types_palette_component = (function dynomics$space$ui$make_node_types_palette_component(p__377635){
var map__377644 = p__377635;
var map__377644__$1 = ((((!((map__377644 == null)))?((((map__377644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377644):map__377644);
var state = map__377644__$1;
var component = cljs.core.get.call(null,map__377644__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var state_updates = cljs.core.get.call(null,map__377644__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__377644__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
if(typeof dynomics.space.ui.t_dynomics$space$ui377646 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui377646 = (function (make_node_types_palette_component,p__377635,map__377644,state,component,state_updates,msgs,meta377647){
this.make_node_types_palette_component = make_node_types_palette_component;
this.p__377635 = p__377635;
this.map__377644 = map__377644;
this.state = state;
this.component = component;
this.state_updates = state_updates;
this.msgs = msgs;
this.meta377647 = meta377647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui377646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__377644,map__377644__$1,state,component,state_updates,msgs){
return (function (_377648,meta377647__$1){
var self__ = this;
var _377648__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui377646(self__.make_node_types_palette_component,self__.p__377635,self__.map__377644,self__.state,self__.component,self__.state_updates,self__.msgs,meta377647__$1));
});})(map__377644,map__377644__$1,state,component,state_updates,msgs))
;

dynomics.space.ui.t_dynomics$space$ui377646.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__377644,map__377644__$1,state,component,state_updates,msgs){
return (function (_377648){
var self__ = this;
var _377648__$1 = this;
return self__.meta377647;
});})(map__377644,map__377644__$1,state,component,state_updates,msgs))
;

dynomics.space.ui.t_dynomics$space$ui377646.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui377646.prototype.om$core$IRender$render$arity$1 = ((function (map__377644,map__377644__$1,state,component,state_updates,msgs){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"className": "node_types"},cljs.core.map.call(null,((function (this$__$1,map__377644,map__377644__$1,state,component,state_updates,msgs){
return (function (p__377649){
var map__377650 = p__377649;
var map__377650__$1 = ((((!((map__377650 == null)))?((((map__377650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377650):map__377650);
var id = cljs.core.get.call(null,map__377650__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var stability = cljs.core.get.call(null,map__377650__$1,new cljs.core.Keyword(null,"stability","stability",1733225509));
var type = cljs.core.get.call(null,map__377650__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return om.dom.div.call(null,{"className": [cljs.core.str("node_type_selector")].join(''), "title": [cljs.core.str("Set selected nodes to "),cljs.core.str(id),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,stability)),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,type))].join(''), "draggable": true, "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)), "onMouseMove": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null))},om.core.build.call(null,dynomics.space.ui.make_node_types_cached_component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("ntp"),cljs.core.str(id)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),null);
});})(this$__$1,map__377644,map__377644__$1,state,component,state_updates,msgs))
,cljs.core.vals.call(null,dynomics.space.core.node_types)));
});})(map__377644,map__377644__$1,state,component,state_updates,msgs))
;

dynomics.space.ui.t_dynomics$space$ui377646.getBasis = ((function (map__377644,map__377644__$1,state,component,state_updates,msgs){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-palette-component","make-node-types-palette-component",54407202,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the node types palette"], null)),new cljs.core.Symbol(null,"p__377635","p__377635",-2086084131,null),new cljs.core.Symbol(null,"map__377644","map__377644",1246207193,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"meta377647","meta377647",-214491561,null)], null);
});})(map__377644,map__377644__$1,state,component,state_updates,msgs))
;

dynomics.space.ui.t_dynomics$space$ui377646.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui377646.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui377646";

dynomics.space.ui.t_dynomics$space$ui377646.cljs$lang$ctorPrWriter = ((function (map__377644,map__377644__$1,state,component,state_updates,msgs){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui377646");
});})(map__377644,map__377644__$1,state,component,state_updates,msgs))
;

dynomics.space.ui.__GT_t_dynomics$space$ui377646 = ((function (map__377644,map__377644__$1,state,component,state_updates,msgs){
return (function dynomics$space$ui$make_node_types_palette_component_$___GT_t_dynomics$space$ui377646(make_node_types_palette_component__$1,p__377635__$1,map__377644__$2,state__$1,component__$1,state_updates__$1,msgs__$1,meta377647){
return (new dynomics.space.ui.t_dynomics$space$ui377646(make_node_types_palette_component__$1,p__377635__$1,map__377644__$2,state__$1,component__$1,state_updates__$1,msgs__$1,meta377647));
});})(map__377644,map__377644__$1,state,component,state_updates,msgs))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui377646(dynomics$space$ui$make_node_types_palette_component,p__377635,map__377644__$1,state,component,state_updates,msgs,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a component for an edge
 */
dynomics.space.ui.make_edge_component = (function dynomics$space$ui$make_edge_component(p__377652){
var map__377664 = p__377652;
var map__377664__$1 = ((((!((map__377664 == null)))?((((map__377664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377664):map__377664);
var vec__377665 = cljs.core.get.call(null,map__377664__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__377666 = cljs.core.nth.call(null,vec__377665,(0),null);
var nid1 = cljs.core.nth.call(null,vec__377666,(0),null);
var nid2 = cljs.core.nth.call(null,vec__377666,(1),null);
var vec__377667 = cljs.core.nth.call(null,vec__377665,(1),null);
var nx1 = cljs.core.nth.call(null,vec__377667,(0),null);
var ny1 = cljs.core.nth.call(null,vec__377667,(1),null);
var vec__377668 = cljs.core.nth.call(null,vec__377665,(2),null);
var nx2 = cljs.core.nth.call(null,vec__377668,(0),null);
var ny2 = cljs.core.nth.call(null,vec__377668,(1),null);
var vec__377669 = cljs.core.nth.call(null,vec__377665,(3),null);
var cx1 = cljs.core.nth.call(null,vec__377669,(0),null);
var cx2 = cljs.core.nth.call(null,vec__377669,(1),null);
var vec__377670 = cljs.core.nth.call(null,vec__377665,(4),null);
var cy1 = cljs.core.nth.call(null,vec__377670,(0),null);
var cy2 = cljs.core.nth.call(null,vec__377670,(1),null);
var compatible_QMARK_ = cljs.core.get.call(null,map__377664__$1,new cljs.core.Keyword(null,"compatible?","compatible?",923422575));
var node_scale = cljs.core.get.call(null,map__377664__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
if(typeof dynomics.space.ui.t_dynomics$space$ui377672 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui377672 = (function (nx1,vec__377670,cx1,ny2,make_edge_component,cy2,vec__377669,nx2,cy1,vec__377666,node_scale,ny1,cx2,vec__377668,compatible_QMARK_,map__377664,p__377652,nid2,vec__377667,vec__377665,nid1,meta377673){
this.nx1 = nx1;
this.vec__377670 = vec__377670;
this.cx1 = cx1;
this.ny2 = ny2;
this.make_edge_component = make_edge_component;
this.cy2 = cy2;
this.vec__377669 = vec__377669;
this.nx2 = nx2;
this.cy1 = cy1;
this.vec__377666 = vec__377666;
this.node_scale = node_scale;
this.ny1 = ny1;
this.cx2 = cx2;
this.vec__377668 = vec__377668;
this.compatible_QMARK_ = compatible_QMARK_;
this.map__377664 = map__377664;
this.p__377652 = p__377652;
this.nid2 = nid2;
this.vec__377667 = vec__377667;
this.vec__377665 = vec__377665;
this.nid1 = nid1;
this.meta377673 = meta377673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui377672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__377664,map__377664__$1,vec__377665,vec__377666,nid1,nid2,vec__377667,nx1,ny1,vec__377668,nx2,ny2,vec__377669,cx1,cx2,vec__377670,cy1,cy2,compatible_QMARK_,node_scale){
return (function (_377674,meta377673__$1){
var self__ = this;
var _377674__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui377672(self__.nx1,self__.vec__377670,self__.cx1,self__.ny2,self__.make_edge_component,self__.cy2,self__.vec__377669,self__.nx2,self__.cy1,self__.vec__377666,self__.node_scale,self__.ny1,self__.cx2,self__.vec__377668,self__.compatible_QMARK_,self__.map__377664,self__.p__377652,self__.nid2,self__.vec__377667,self__.vec__377665,self__.nid1,meta377673__$1));
});})(map__377664,map__377664__$1,vec__377665,vec__377666,nid1,nid2,vec__377667,nx1,ny1,vec__377668,nx2,ny2,vec__377669,cx1,cx2,vec__377670,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui377672.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__377664,map__377664__$1,vec__377665,vec__377666,nid1,nid2,vec__377667,nx1,ny1,vec__377668,nx2,ny2,vec__377669,cx1,cx2,vec__377670,cy1,cy2,compatible_QMARK_,node_scale){
return (function (_377674){
var self__ = this;
var _377674__$1 = this;
return self__.meta377673;
});})(map__377664,map__377664__$1,vec__377665,vec__377666,nid1,nid2,vec__377667,nx1,ny1,vec__377668,nx2,ny2,vec__377669,cx1,cx2,vec__377670,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui377672.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui377672.prototype.om$core$IRender$render$arity$1 = ((function (map__377664,map__377664__$1,vec__377665,vec__377666,nid1,nid2,vec__377667,nx1,ny1,vec__377668,nx2,ny2,vec__377669,cx1,cx2,vec__377670,cy1,cy2,compatible_QMARK_,node_scale){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.path.call(null,{"key": [cljs.core.str("edge_"),cljs.core.str(self__.nid1),cljs.core.str("_"),cljs.core.str(self__.nid2)].join(''), "className": [cljs.core.str("edge "),cljs.core.str((cljs.core.truth_(self__.compatible_QMARK_)?"compatible_edge":null))].join(''), "d": dynomics.ui.svg.to_svg_path.call(null,cljs.core.map.call(null,dynomics.ui.svg.make_bezier_point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx1,self__.ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.cx1,self__.cy1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx2,self__.ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.cx2,self__.cy2], null)], null)], null)))});
});})(map__377664,map__377664__$1,vec__377665,vec__377666,nid1,nid2,vec__377667,nx1,ny1,vec__377668,nx2,ny2,vec__377669,cx1,cx2,vec__377670,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui377672.getBasis = ((function (map__377664,map__377664__$1,vec__377665,vec__377666,nid1,nid2,vec__377667,nx1,ny1,vec__377668,nx2,ny2,vec__377669,cx1,cx2,vec__377670,cy1,cy2,compatible_QMARK_,node_scale){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"vec__377670","vec__377670",-1996697118,null),new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-edge-component","make-edge-component",-530385559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null)], null)], null),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Symbol(null,"compatible?","compatible?",-1731013194,null),new cljs.core.Keyword(null,"compatible?","compatible?",923422575),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for an edge"], null)),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null),new cljs.core.Symbol(null,"vec__377669","vec__377669",-1121829940,null),new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"vec__377666","vec__377666",-1848186352,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null),new cljs.core.Symbol(null,"vec__377668","vec__377668",1757866900,null),new cljs.core.Symbol(null,"compatible?","compatible?",-1731013194,null),new cljs.core.Symbol(null,"map__377664","map__377664",-1192249192,null),new cljs.core.Symbol(null,"p__377652","p__377652",1803179352,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null),new cljs.core.Symbol(null,"vec__377667","vec__377667",-1995135330,null),new cljs.core.Symbol(null,"vec__377665","vec__377665",-32464098,null),new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"meta377673","meta377673",-1968319798,null)], null);
});})(map__377664,map__377664__$1,vec__377665,vec__377666,nid1,nid2,vec__377667,nx1,ny1,vec__377668,nx2,ny2,vec__377669,cx1,cx2,vec__377670,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui377672.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui377672.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui377672";

dynomics.space.ui.t_dynomics$space$ui377672.cljs$lang$ctorPrWriter = ((function (map__377664,map__377664__$1,vec__377665,vec__377666,nid1,nid2,vec__377667,nx1,ny1,vec__377668,nx2,ny2,vec__377669,cx1,cx2,vec__377670,cy1,cy2,compatible_QMARK_,node_scale){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui377672");
});})(map__377664,map__377664__$1,vec__377665,vec__377666,nid1,nid2,vec__377667,nx1,ny1,vec__377668,nx2,ny2,vec__377669,cx1,cx2,vec__377670,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.__GT_t_dynomics$space$ui377672 = ((function (map__377664,map__377664__$1,vec__377665,vec__377666,nid1,nid2,vec__377667,nx1,ny1,vec__377668,nx2,ny2,vec__377669,cx1,cx2,vec__377670,cy1,cy2,compatible_QMARK_,node_scale){
return (function dynomics$space$ui$make_edge_component_$___GT_t_dynomics$space$ui377672(nx1__$1,vec__377670__$1,cx1__$1,ny2__$1,make_edge_component__$1,cy2__$1,vec__377669__$1,nx2__$1,cy1__$1,vec__377666__$1,node_scale__$1,ny1__$1,cx2__$1,vec__377668__$1,compatible_QMARK___$1,map__377664__$2,p__377652__$1,nid2__$1,vec__377667__$1,vec__377665__$1,nid1__$1,meta377673){
return (new dynomics.space.ui.t_dynomics$space$ui377672(nx1__$1,vec__377670__$1,cx1__$1,ny2__$1,make_edge_component__$1,cy2__$1,vec__377669__$1,nx2__$1,cy1__$1,vec__377666__$1,node_scale__$1,ny1__$1,cx2__$1,vec__377668__$1,compatible_QMARK___$1,map__377664__$2,p__377652__$1,nid2__$1,vec__377667__$1,vec__377665__$1,nid1__$1,meta377673));
});})(map__377664,map__377664__$1,vec__377665,vec__377666,nid1,nid2,vec__377667,nx1,ny1,vec__377668,nx2,ny2,vec__377669,cx1,cx2,vec__377670,cy1,cy2,compatible_QMARK_,node_scale))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui377672(nx1,vec__377670,cx1,ny2,dynomics$space$ui$make_edge_component,cy2,vec__377669,nx2,cy1,vec__377666,node_scale,ny1,cx2,vec__377668,compatible_QMARK_,map__377664__$1,p__377652,nid2,vec__377667,vec__377665,nid1,null));
});
dynomics.space.ui.make_curve_component = (function dynomics$space$ui$make_curve_component(zoom,node_scale,nodes,msgs,selected_curves,p__377675){
var vec__377681 = p__377675;
var vec__377682 = cljs.core.nth.call(null,vec__377681,(0),null);
var id = cljs.core.nth.call(null,vec__377682,(0),null);
var node_cp_ids = cljs.core.nth.call(null,vec__377682,(1),null);
var curve_type = cljs.core.nth.call(null,vec__377681,(1),null);
var pth = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378),id], null);
var e = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"path","path",-188191168),pth], null);
if(typeof dynomics.space.ui.t_dynomics$space$ui377683 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui377683 = (function (vec__377682,vec__377681,pth,curve_type,zoom,node_cp_ids,node_scale,selected_curves,e,make_curve_component,msgs,nodes,id,p__377675,meta377684){
this.vec__377682 = vec__377682;
this.vec__377681 = vec__377681;
this.pth = pth;
this.curve_type = curve_type;
this.zoom = zoom;
this.node_cp_ids = node_cp_ids;
this.node_scale = node_scale;
this.selected_curves = selected_curves;
this.e = e;
this.make_curve_component = make_curve_component;
this.msgs = msgs;
this.nodes = nodes;
this.id = id;
this.p__377675 = p__377675;
this.meta377684 = meta377684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui377683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (pth,e,vec__377681,vec__377682,id,node_cp_ids,curve_type){
return (function (_377685,meta377684__$1){
var self__ = this;
var _377685__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui377683(self__.vec__377682,self__.vec__377681,self__.pth,self__.curve_type,self__.zoom,self__.node_cp_ids,self__.node_scale,self__.selected_curves,self__.e,self__.make_curve_component,self__.msgs,self__.nodes,self__.id,self__.p__377675,meta377684__$1));
});})(pth,e,vec__377681,vec__377682,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui377683.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (pth,e,vec__377681,vec__377682,id,node_cp_ids,curve_type){
return (function (_377685){
var self__ = this;
var _377685__$1 = this;
return self__.meta377684;
});})(pth,e,vec__377681,vec__377682,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui377683.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui377683.prototype.om$core$IRender$render$arity$1 = ((function (pth,e,vec__377681,vec__377682,id,node_cp_ids,curve_type){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.path.call(null,{"key": [cljs.core.str("curve_"),cljs.core.str(self__.id)].join(''), "className": [cljs.core.str("curve "),cljs.core.str((cljs.core.truth_(self__.curve_type)?[cljs.core.str("curve_"),cljs.core.str(self__.curve_type)].join(''):null)),cljs.core.str((cljs.core.truth_(self__.selected_curves.call(null,self__.pth))?" selected_curve":null))].join(''), "strokeWidth": ((self__.node_scale / (5)) / self__.zoom), "onClick": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "onMouseMove": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "d": dynomics.ui.svg.to_svg_path.call(null,dynomics.ui.svg.to_beziers.call(null,cljs.core.map.call(null,self__.nodes,cljs.core.map.call(null,cljs.core.first,self__.node_cp_ids)),cljs.core.map.call(null,cljs.core.last,self__.node_cp_ids)))});
});})(pth,e,vec__377681,vec__377682,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui377683.getBasis = ((function (pth,e,vec__377681,vec__377682,id,node_cp_ids,curve_type){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec__377682","vec__377682",1734787107,null),new cljs.core.Symbol(null,"vec__377681","vec__377681",703943523,null),new cljs.core.Symbol(null,"pth","pth",1900111558,null),new cljs.core.Symbol(null,"curve-type","curve-type",-1863700632,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"node-cp-ids","node-cp-ids",296302734,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-curve-component","make-curve-component",-1782572970,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"node-cp-ids","node-cp-ids",296302734,null)], null),new cljs.core.Symbol(null,"curve-type","curve-type",-1863700632,null)], null)], null)))], null)),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"p__377675","p__377675",2067192126,null),new cljs.core.Symbol(null,"meta377684","meta377684",-277791747,null)], null);
});})(pth,e,vec__377681,vec__377682,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui377683.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui377683.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui377683";

dynomics.space.ui.t_dynomics$space$ui377683.cljs$lang$ctorPrWriter = ((function (pth,e,vec__377681,vec__377682,id,node_cp_ids,curve_type){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui377683");
});})(pth,e,vec__377681,vec__377682,id,node_cp_ids,curve_type))
;

dynomics.space.ui.__GT_t_dynomics$space$ui377683 = ((function (pth,e,vec__377681,vec__377682,id,node_cp_ids,curve_type){
return (function dynomics$space$ui$make_curve_component_$___GT_t_dynomics$space$ui377683(vec__377682__$1,vec__377681__$1,pth__$1,curve_type__$1,zoom__$1,node_cp_ids__$1,node_scale__$1,selected_curves__$1,e__$1,make_curve_component__$1,msgs__$1,nodes__$1,id__$1,p__377675__$1,meta377684){
return (new dynomics.space.ui.t_dynomics$space$ui377683(vec__377682__$1,vec__377681__$1,pth__$1,curve_type__$1,zoom__$1,node_cp_ids__$1,node_scale__$1,selected_curves__$1,e__$1,make_curve_component__$1,msgs__$1,nodes__$1,id__$1,p__377675__$1,meta377684));
});})(pth,e,vec__377681,vec__377682,id,node_cp_ids,curve_type))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui377683(vec__377682,vec__377681,pth,curve_type,zoom,node_cp_ids,node_scale,selected_curves,e,dynomics$space$ui$make_curve_component,msgs,nodes,id,p__377675,null));
});
dynomics.space.ui.make_open_region_component = (function dynomics$space$ui$make_open_region_component(p__377686){
var map__377699 = p__377686;
var map__377699__$1 = ((((!((map__377699 == null)))?((((map__377699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377699):map__377699);
var node_id = cljs.core.get.call(null,map__377699__$1,new cljs.core.Keyword(null,"node-id","node-id",779482292));
var quadrant_type = cljs.core.get.call(null,map__377699__$1,new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370));
var vec__377700 = cljs.core.get.call(null,map__377699__$1,new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631));
var qx = cljs.core.nth.call(null,vec__377700,(0),null);
var qy = cljs.core.nth.call(null,vec__377700,(1),null);
var vec__377701 = cljs.core.get.call(null,map__377699__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p1 = cljs.core.nth.call(null,vec__377701,(0),null);
var p2 = cljs.core.nth.call(null,vec__377701,(1),null);
var map__377702 = cljs.core.nth.call(null,vec__377701,(2),null);
var map__377702__$1 = ((((!((map__377702 == null)))?((((map__377702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377702):map__377702);
var p3 = map__377702__$1;
var vec__377703 = cljs.core.get.call(null,map__377702__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var x = cljs.core.nth.call(null,vec__377703,(0),null);
var y = cljs.core.nth.call(null,vec__377703,(1),null);
var vec__377704 = cljs.core.get.call(null,map__377702__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__377705 = cljs.core.nth.call(null,vec__377704,(0),null);
var cx = cljs.core.nth.call(null,vec__377705,(0),null);
var cy = cljs.core.nth.call(null,vec__377705,(1),null);
var p4 = cljs.core.nth.call(null,vec__377701,(3),null);
if(typeof dynomics.space.ui.t_dynomics$space$ui377708 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui377708 = (function (x,vec__377703,vec__377705,vec__377700,y,p__377686,p2,p4,p3,map__377699,qx,map__377702,qy,vec__377704,vec__377701,p1,make_open_region_component,cx,cy,node_id,quadrant_type,meta377709){
this.x = x;
this.vec__377703 = vec__377703;
this.vec__377705 = vec__377705;
this.vec__377700 = vec__377700;
this.y = y;
this.p__377686 = p__377686;
this.p2 = p2;
this.p4 = p4;
this.p3 = p3;
this.map__377699 = map__377699;
this.qx = qx;
this.map__377702 = map__377702;
this.qy = qy;
this.vec__377704 = vec__377704;
this.vec__377701 = vec__377701;
this.p1 = p1;
this.make_open_region_component = make_open_region_component;
this.cx = cx;
this.cy = cy;
this.node_id = node_id;
this.quadrant_type = quadrant_type;
this.meta377709 = meta377709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui377708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__377699,map__377699__$1,node_id,quadrant_type,vec__377700,qx,qy,vec__377701,p1,p2,map__377702,map__377702__$1,p3,vec__377703,x,y,vec__377704,vec__377705,cx,cy,p4){
return (function (_377710,meta377709__$1){
var self__ = this;
var _377710__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui377708(self__.x,self__.vec__377703,self__.vec__377705,self__.vec__377700,self__.y,self__.p__377686,self__.p2,self__.p4,self__.p3,self__.map__377699,self__.qx,self__.map__377702,self__.qy,self__.vec__377704,self__.vec__377701,self__.p1,self__.make_open_region_component,self__.cx,self__.cy,self__.node_id,self__.quadrant_type,meta377709__$1));
});})(map__377699,map__377699__$1,node_id,quadrant_type,vec__377700,qx,qy,vec__377701,p1,p2,map__377702,map__377702__$1,p3,vec__377703,x,y,vec__377704,vec__377705,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui377708.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__377699,map__377699__$1,node_id,quadrant_type,vec__377700,qx,qy,vec__377701,p1,p2,map__377702,map__377702__$1,p3,vec__377703,x,y,vec__377704,vec__377705,cx,cy,p4){
return (function (_377710){
var self__ = this;
var _377710__$1 = this;
return self__.meta377709;
});})(map__377699,map__377699__$1,node_id,quadrant_type,vec__377700,qx,qy,vec__377701,p1,p2,map__377702,map__377702__$1,p3,vec__377703,x,y,vec__377704,vec__377705,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui377708.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui377708.prototype.om$core$IRender$render$arity$1 = ((function (map__377699,map__377699__$1,node_id,quadrant_type,vec__377700,qx,qy,vec__377701,p1,p2,map__377702,map__377702__$1,p3,vec__377703,x,y,vec__377704,vec__377705,cx,cy,p4){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.g.call(null,{},om.dom.defs.call(null,{},om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(self__.node_id),cljs.core.str("_"),cljs.core.str(self__.quadrant_type)].join(''), "gradientUnits": "userSpaceOnUse", "cx": self__.x, "cy": self__.y, "r": 0.04},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,self__.quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,self__.quadrant_type), "stopOpacity": "0"}))),om.dom.path.call(null,{"className": [cljs.core.str("dopen_region "),cljs.core.str([cljs.core.str("dopen_region_type_"),cljs.core.str(self__.quadrant_type)].join(''))].join(''), "fill": [cljs.core.str("url(#"),cljs.core.str([cljs.core.str("qg_"),cljs.core.str(self__.node_id),cljs.core.str("_"),cljs.core.str(self__.quadrant_type)].join('')),cljs.core.str(")")].join(''), "d": [cljs.core.str(dynomics.ui.svg.to_svg_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p1,self__.p2], null))),cljs.core.str(dynomics.ui.svg.to_svg_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,self__.p3,new cljs.core.Keyword(null,"ml","ml",1909675057),"L"),self__.p4], null))),cljs.core.str("z")].join('')}));
});})(map__377699,map__377699__$1,node_id,quadrant_type,vec__377700,qx,qy,vec__377701,p1,p2,map__377702,map__377702__$1,p3,vec__377703,x,y,vec__377704,vec__377705,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui377708.getBasis = ((function (map__377699,map__377699__$1,node_id,quadrant_type,vec__377700,qx,qy,vec__377701,p1,p2,map__377702,map__377702__$1,p3,vec__377703,x,y,vec__377704,vec__377705,cx,cy,p4){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"vec__377703","vec__377703",-530722175,null),new cljs.core.Symbol(null,"vec__377705","vec__377705",-1930340252,null),new cljs.core.Symbol(null,"vec__377700","vec__377700",-473177116,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"p__377686","p__377686",715395847,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null),new cljs.core.Symbol(null,"p4","p4",550404713,null),new cljs.core.Symbol(null,"p3","p3",-923395030,null),new cljs.core.Symbol(null,"map__377699","map__377699",-688436022,null),new cljs.core.Symbol(null,"qx","qx",876946123,null),new cljs.core.Symbol(null,"map__377702","map__377702",151571248,null),new cljs.core.Symbol(null,"qy","qy",1271868883,null),new cljs.core.Symbol(null,"vec__377704","vec__377704",1015258643,null),new cljs.core.Symbol(null,"vec__377701","vec__377701",-2077889739,null),new cljs.core.Symbol(null,"p1","p1",703771573,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-open-region-component","make-open-region-component",530106712,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Keyword(null,"node-id","node-id",779482292),new cljs.core.Symbol(null,"quadrant-type","quadrant-type",333980157,null),new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"qx","qx",876946123,null),new cljs.core.Symbol(null,"qy","qy",1271868883,null)], null),new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"cy","cy",-1899104709,null)], null)], null),new cljs.core.Keyword(null,"control-points","control-points",-238538325),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"p3","p3",-923395030,null)], true, false),new cljs.core.Symbol(null,"p4","p4",550404713,null)], null),new cljs.core.Keyword(null,"points","points",-1486596883)], true, false)], null)))], null)),new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"cy","cy",-1899104709,null),new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Symbol(null,"quadrant-type","quadrant-type",333980157,null),new cljs.core.Symbol(null,"meta377709","meta377709",-2035295392,null)], null);
});})(map__377699,map__377699__$1,node_id,quadrant_type,vec__377700,qx,qy,vec__377701,p1,p2,map__377702,map__377702__$1,p3,vec__377703,x,y,vec__377704,vec__377705,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui377708.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui377708.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui377708";

dynomics.space.ui.t_dynomics$space$ui377708.cljs$lang$ctorPrWriter = ((function (map__377699,map__377699__$1,node_id,quadrant_type,vec__377700,qx,qy,vec__377701,p1,p2,map__377702,map__377702__$1,p3,vec__377703,x,y,vec__377704,vec__377705,cx,cy,p4){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui377708");
});})(map__377699,map__377699__$1,node_id,quadrant_type,vec__377700,qx,qy,vec__377701,p1,p2,map__377702,map__377702__$1,p3,vec__377703,x,y,vec__377704,vec__377705,cx,cy,p4))
;

dynomics.space.ui.__GT_t_dynomics$space$ui377708 = ((function (map__377699,map__377699__$1,node_id,quadrant_type,vec__377700,qx,qy,vec__377701,p1,p2,map__377702,map__377702__$1,p3,vec__377703,x,y,vec__377704,vec__377705,cx,cy,p4){
return (function dynomics$space$ui$make_open_region_component_$___GT_t_dynomics$space$ui377708(x__$1,vec__377703__$1,vec__377705__$1,vec__377700__$1,y__$1,p__377686__$1,p2__$1,p4__$1,p3__$1,map__377699__$2,qx__$1,map__377702__$2,qy__$1,vec__377704__$1,vec__377701__$1,p1__$1,make_open_region_component__$1,cx__$1,cy__$1,node_id__$1,quadrant_type__$1,meta377709){
return (new dynomics.space.ui.t_dynomics$space$ui377708(x__$1,vec__377703__$1,vec__377705__$1,vec__377700__$1,y__$1,p__377686__$1,p2__$1,p4__$1,p3__$1,map__377699__$2,qx__$1,map__377702__$2,qy__$1,vec__377704__$1,vec__377701__$1,p1__$1,make_open_region_component__$1,cx__$1,cy__$1,node_id__$1,quadrant_type__$1,meta377709));
});})(map__377699,map__377699__$1,node_id,quadrant_type,vec__377700,qx,qy,vec__377701,p1,p2,map__377702,map__377702__$1,p3,vec__377703,x,y,vec__377704,vec__377705,cx,cy,p4))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui377708(x,vec__377703,vec__377705,vec__377700,y,p__377686,p2,p4,p3,map__377699__$1,qx,map__377702__$1,qy,vec__377704,vec__377701,p1,dynomics$space$ui$make_open_region_component,cx,cy,node_id,quadrant_type,null));
});
/**
 * Returns a component for a node and its connections
 */
dynomics.space.ui.make_node_component = (function dynomics$space$ui$make_node_component(p__377711){
var map__377730 = p__377711;
var map__377730__$1 = ((((!((map__377730 == null)))?((((map__377730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377730):map__377730);
var map__377731 = cljs.core.get.call(null,map__377730__$1,new cljs.core.Keyword(null,"node","node",581201198));
var map__377731__$1 = ((((!((map__377731 == null)))?((((map__377731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377731):map__377731);
var node = map__377731__$1;
var vec__377732 = cljs.core.get.call(null,map__377731__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__377732,(0),null);
var y = cljs.core.nth.call(null,vec__377732,(1),null);
var t = cljs.core.get.call(null,map__377731__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var node_type = cljs.core.get.call(null,map__377731__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var id = cljs.core.get.call(null,map__377731__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var connections = cljs.core.get.call(null,map__377731__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var node_scale = cljs.core.get.call(null,map__377730__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var selected_nodes = cljs.core.get.call(null,map__377730__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var active_nodes = cljs.core.get.call(null,map__377730__$1,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891));
var show = cljs.core.get.call(null,map__377730__$1,new cljs.core.Keyword(null,"show","show",-576705889));
var msgs = cljs.core.get.call(null,map__377730__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var zoom = cljs.core.get.call(null,map__377730__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var pth = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id], null);
if(typeof dynomics.space.ui.t_dynomics$space$ui377735 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui377735 = (function (t,connections,x,selected_nodes,active_nodes,vec__377732,show,pth,y,zoom,make_node_component,node_scale,node_type,map__377731,node,p__377711,msgs,id,map__377730,meta377736){
this.t = t;
this.connections = connections;
this.x = x;
this.selected_nodes = selected_nodes;
this.active_nodes = active_nodes;
this.vec__377732 = vec__377732;
this.show = show;
this.pth = pth;
this.y = y;
this.zoom = zoom;
this.make_node_component = make_node_component;
this.node_scale = node_scale;
this.node_type = node_type;
this.map__377731 = map__377731;
this.node = node;
this.p__377711 = p__377711;
this.msgs = msgs;
this.id = id;
this.map__377730 = map__377730;
this.meta377736 = meta377736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui377735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (pth,map__377730,map__377730__$1,map__377731,map__377731__$1,node,vec__377732,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function (_377737,meta377736__$1){
var self__ = this;
var _377737__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui377735(self__.t,self__.connections,self__.x,self__.selected_nodes,self__.active_nodes,self__.vec__377732,self__.show,self__.pth,self__.y,self__.zoom,self__.make_node_component,self__.node_scale,self__.node_type,self__.map__377731,self__.node,self__.p__377711,self__.msgs,self__.id,self__.map__377730,meta377736__$1));
});})(pth,map__377730,map__377730__$1,map__377731,map__377731__$1,node,vec__377732,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
;

dynomics.space.ui.t_dynomics$space$ui377735.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (pth,map__377730,map__377730__$1,map__377731,map__377731__$1,node,vec__377732,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function (_377737){
var self__ = this;
var _377737__$1 = this;
return self__.meta377736;
});})(pth,map__377730,map__377730__$1,map__377731,map__377731__$1,node,vec__377732,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
;

dynomics.space.ui.t_dynomics$space$ui377735.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui377735.prototype.om$core$IRender$render$arity$1 = ((function (pth,map__377730,map__377730__$1,map__377731,map__377731__$1,node,vec__377732,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.g.call(null,{"id": [cljs.core.str("node_"),cljs.core.str(self__.id)].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.x,self__.y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),(self__.node_scale / (cljs.core.truth_(self__.zoom)?self__.zoom:(1)))], null)), "className": [cljs.core.str("node_subgraph "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,self__.pth))?"node_selected":null))].join(''), "onClick": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),self__.pth,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),self__.pth,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),self__.pth], null)), "onMouseMove": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),self__.pth], null))},(cljs.core.truth_((function (){var and__35179__auto__ = self__.node_type;
if(cljs.core.truth_(and__35179__auto__)){
return self__.show.call(null,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295));
} else {
return and__35179__auto__;
}
})())?cljs.core.map.call(null,((function (this__38609__auto____$1,pth,map__377730,map__377730__$1,map__377731,map__377731__$1,node,vec__377732,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function (p__377738){
var vec__377739 = p__377738;
var i = cljs.core.nth.call(null,vec__377739,(0),null);
var v = cljs.core.nth.call(null,vec__377739,(1),null);
return om.dom.path.call(null,{"className": [cljs.core.str("quadrant quadrant_type_"),cljs.core.str(cljs.core.get_in.call(null,dynomics.space.core.node_types,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.node_type,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),v], null)))].join(''), "d": "M0,0 v-1 A1,1 0 0,0 -1,0 z", "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),((90) * (i - (1)))], null))});
});})(this__38609__auto____$1,pth,map__377730,map__377730__$1,map__377731,map__377731__$1,node,vec__377732,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,(4)),cljs.core.iterate.call(null,dynomics.space.core.P.call(null,dynomics.space.core.c_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)))):null),(cljs.core.truth_((function (){var and__35179__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"intersection","intersection",2003891010),self__.t);
if(and__35179__auto__){
return self__.show.call(null,new cljs.core.Keyword(null,"node-types","node-types",1539943342));
} else {
return and__35179__auto__;
}
})())?om.core.build.call(null,dynomics.space.ui.make_node_types_cached_image_component,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.node_type,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),((1) / self__.zoom),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("nntp"),cljs.core.str(self__.id)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)):null),(cljs.core.truth_((function (){var and__35179__auto__ = self__.active_nodes;
if(cljs.core.truth_(and__35179__auto__)){
return self__.active_nodes.call(null,self__.pth);
} else {
return and__35179__auto__;
}
})())?om.dom.g.call(null,{"className": (cljs.core.truth_(cljs.core.some.call(null,self__.selected_nodes,cljs.core.map.call(null,((function (this__38609__auto____$1,pth,map__377730,map__377730__$1,map__377731,map__377731__$1,node,vec__377732,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function (p__377740){
var map__377741 = p__377740;
var map__377741__$1 = ((((!((map__377741 == null)))?((((map__377741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377741):map__377741);
var cid = cljs.core.get.call(null,map__377741__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null);
});})(this__38609__auto____$1,pth,map__377730,map__377730__$1,map__377731,map__377731__$1,node,vec__377732,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
,self__.connections)))?"node_connections_selected":"node_connections")},cljs.core.map.call(null,((function (this__38609__auto____$1,pth,map__377730,map__377730__$1,map__377731,map__377731__$1,node,vec__377732,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function (p__377743){
var map__377744 = p__377743;
var map__377744__$1 = ((((!((map__377744 == null)))?((((map__377744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377744):map__377744);
var vec__377745 = cljs.core.get.call(null,map__377744__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var scx = cljs.core.nth.call(null,vec__377745,(0),null);
var scy = cljs.core.nth.call(null,vec__377745,(1),null);
var cid = cljs.core.get.call(null,map__377744__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vec__377747 = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(self__.zoom / self__.node_scale)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scx,scy], null));
var cx = cljs.core.nth.call(null,vec__377747,(0),null);
var cy = cljs.core.nth.call(null,vec__377747,(1),null);
return om.dom.g.call(null,{"className": [cljs.core.str("node_connection"),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null)))?"node_connections_selected":null))].join(''), "id": [cljs.core.str("node_"),cljs.core.str(self__.id),cljs.core.str("_connection_"),cljs.core.str(cid)].join('')},om.dom.line.call(null,{"x1": (0), "y1": (0), "x2": cx, "y2": cy, "className": "node_connection_line"}),(function (){var path = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null);
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.15, "className": [cljs.core.str("node_connection_dot "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,path))?"node_selected":null))].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),cx,cy], null)), "onClick": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"id","id",-1388402092),cid], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"id","id",-1388402092),cid], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"id","id",-1388402092),cid], null))});
})());
});})(this__38609__auto____$1,pth,map__377730,map__377730__$1,map__377731,map__377731__$1,node,vec__377732,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
,self__.connections)):null),(((cljs.core.not.call(null,self__.node_type)) || (cljs.core.not.call(null,self__.show.call(null,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295)))))?om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.2, "className": [cljs.core.str("node_selector_dot"),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,self__.pth))?"node_selected":null))].join('')}):null));
});})(pth,map__377730,map__377730__$1,map__377731,map__377731__$1,node,vec__377732,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
;

dynomics.space.ui.t_dynomics$space$ui377735.getBasis = ((function (pth,map__377730,map__377730__$1,map__377731,map__377731__$1,node,vec__377732,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Symbol(null,"vec__377732","vec__377732",1627222150,null),new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.Symbol(null,"pth","pth",1900111558,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-component","make-node-component",-1574550003,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Keyword(null,"connections","connections",-2064090887),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"node","node",-2073234571,null)], true, false),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891),new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for a node and its connections"], null)),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Symbol(null,"map__377731","map__377731",2047857429,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol(null,"p__377711","p__377711",718498294,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"map__377730","map__377730",-65001346,null),new cljs.core.Symbol(null,"meta377736","meta377736",-359790549,null)], null);
});})(pth,map__377730,map__377730__$1,map__377731,map__377731__$1,node,vec__377732,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
;

dynomics.space.ui.t_dynomics$space$ui377735.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui377735.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui377735";

dynomics.space.ui.t_dynomics$space$ui377735.cljs$lang$ctorPrWriter = ((function (pth,map__377730,map__377730__$1,map__377731,map__377731__$1,node,vec__377732,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui377735");
});})(pth,map__377730,map__377730__$1,map__377731,map__377731__$1,node,vec__377732,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
;

dynomics.space.ui.__GT_t_dynomics$space$ui377735 = ((function (pth,map__377730,map__377730__$1,map__377731,map__377731__$1,node,vec__377732,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function dynomics$space$ui$make_node_component_$___GT_t_dynomics$space$ui377735(t__$1,connections__$1,x__$1,selected_nodes__$1,active_nodes__$1,vec__377732__$1,show__$1,pth__$1,y__$1,zoom__$1,make_node_component__$1,node_scale__$1,node_type__$1,map__377731__$2,node__$1,p__377711__$1,msgs__$1,id__$1,map__377730__$2,meta377736){
return (new dynomics.space.ui.t_dynomics$space$ui377735(t__$1,connections__$1,x__$1,selected_nodes__$1,active_nodes__$1,vec__377732__$1,show__$1,pth__$1,y__$1,zoom__$1,make_node_component__$1,node_scale__$1,node_type__$1,map__377731__$2,node__$1,p__377711__$1,msgs__$1,id__$1,map__377730__$2,meta377736));
});})(pth,map__377730,map__377730__$1,map__377731,map__377731__$1,node,vec__377732,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui377735(t,connections,x,selected_nodes,active_nodes,vec__377732,show,pth,y,zoom,dynomics$space$ui$make_node_component,node_scale,node_type,map__377731__$1,node,p__377711,msgs,id,map__377730__$1,null));
});
dynomics.space.ui.test_component = (function dynomics$space$ui$test_component(x){
if(typeof dynomics.space.ui.t_dynomics$space$ui377751 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui377751 = (function (test_component,x,meta377752){
this.test_component = test_component;
this.x = x;
this.meta377752 = meta377752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui377751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_377753,meta377752__$1){
var self__ = this;
var _377753__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui377751(self__.test_component,self__.x,meta377752__$1));
});

dynomics.space.ui.t_dynomics$space$ui377751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_377753){
var self__ = this;
var _377753__$1 = this;
return self__.meta377752;
});

dynomics.space.ui.t_dynomics$space$ui377751.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui377751.prototype.om$core$IRender$render$arity$1 = (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.2, "fill": (((0.5 > Math.random()))?"orange":"green")});
});

dynomics.space.ui.t_dynomics$space$ui377751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"test-component","test-component",1959093538,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)))], null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"meta377752","meta377752",-1900595639,null)], null);
});

dynomics.space.ui.t_dynomics$space$ui377751.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui377751.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui377751";

dynomics.space.ui.t_dynomics$space$ui377751.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui377751");
});

dynomics.space.ui.__GT_t_dynomics$space$ui377751 = (function dynomics$space$ui$test_component_$___GT_t_dynomics$space$ui377751(test_component__$1,x__$1,meta377752){
return (new dynomics.space.ui.t_dynomics$space$ui377751(test_component__$1,x__$1,meta377752));
});

}

return (new dynomics.space.ui.t_dynomics$space$ui377751(dynomics$space$ui$test_component,x,null));
});
dynomics.space.ui.make_quadrant_gradients = (function dynomics$space$ui$make_quadrant_gradients(){
var iter__35971__auto__ = (function dynomics$space$ui$make_quadrant_gradients_$_iter__377758(s__377759){
return (new cljs.core.LazySeq(null,(function (){
var s__377759__$1 = s__377759;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__377759__$1);
if(temp__4657__auto__){
var s__377759__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__377759__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__377759__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__377761 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__377760 = (0);
while(true){
if((i__377760 < size__35970__auto__)){
var quadrant_type = cljs.core._nth.call(null,c__35969__auto__,i__377760);
cljs.core.chunk_append.call(null,b__377761,om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(quadrant_type)].join(''), "gradientUnits": "objectBoundingBox", "cx": (0), "cy": (0), "r": (1)},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "0"})));

var G__377762 = (i__377760 + (1));
i__377760 = G__377762;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__377761),dynomics$space$ui$make_quadrant_gradients_$_iter__377758.call(null,cljs.core.chunk_rest.call(null,s__377759__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__377761),null);
}
} else {
var quadrant_type = cljs.core.first.call(null,s__377759__$2);
return cljs.core.cons.call(null,om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(quadrant_type)].join(''), "gradientUnits": "objectBoundingBox", "cx": (0), "cy": (0), "r": (1)},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "0"})),dynomics$space$ui$make_quadrant_gradients_$_iter__377758.call(null,cljs.core.rest.call(null,s__377759__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35971__auto__.call(null,cljs.core.range.call(null,(4)));
});
dynomics.space.ui.make_node_context_menu = (function dynomics$space$ui$make_node_context_menu(p__377763){
var map__377769 = p__377763;
var map__377769__$1 = ((((!((map__377769 == null)))?((((map__377769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377769):map__377769);
var s = map__377769__$1;
var map__377770 = cljs.core.get.call(null,map__377769__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__377770__$1 = ((((!((map__377770 == null)))?((((map__377770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377770):map__377770);
var vec__377771 = cljs.core.get.call(null,map__377770__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__377771,(0),null);
var y = cljs.core.nth.call(null,vec__377771,(1),null);
var sn = cljs.core.get.call(null,map__377769__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var state_updates = cljs.core.get.call(null,map__377769__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__377769__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
return om.dom.circle.call(null,{"id": "add-node-button", "cx": 0.5, "cy": 0.5, "r": 0.1, "fill": "red"});
});
dynomics.space.ui.context_menu_fn = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),dynomics.space.ui.make_node_context_menu], null);
/**
 * Returns a component for the phase-space editor
 */
dynomics.space.ui.make_space_component = (function dynomics$space$ui$make_space_component(p__377774){
var map__377784 = p__377774;
var map__377784__$1 = ((((!((map__377784 == null)))?((((map__377784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377784):map__377784);
var state = map__377784__$1;
var vec__377785 = cljs.core.get.call(null,map__377784__$1,new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331));
var ox = cljs.core.nth.call(null,vec__377785,(0),null);
var oy = cljs.core.nth.call(null,vec__377785,(1),null);
var show = cljs.core.get.call(null,map__377784__$1,new cljs.core.Keyword(null,"show","show",-576705889));
var zoom = cljs.core.get.call(null,map__377784__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var vec__377786 = cljs.core.get.call(null,map__377784__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var px = cljs.core.nth.call(null,vec__377786,(0),null);
var py = cljs.core.nth.call(null,vec__377786,(1),null);
var su = cljs.core.get.call(null,map__377784__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__377784__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var map__377787 = cljs.core.get.call(null,map__377784__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__377787__$1 = ((((!((map__377787 == null)))?((((map__377787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377787):map__377787);
var space = map__377787__$1;
var selected_nodes = cljs.core.get.call(null,map__377787__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var active_nodes = cljs.core.get.call(null,map__377787__$1,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891));
var edges = cljs.core.get.call(null,map__377787__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var curves = cljs.core.get.call(null,map__377787__$1,new cljs.core.Keyword(null,"curves","curves",-510805378));
var curve_types = cljs.core.get.call(null,map__377787__$1,new cljs.core.Keyword(null,"curve-types","curve-types",1650772099));
var node_scale = cljs.core.get.call(null,map__377787__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var regions = cljs.core.get.call(null,map__377787__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var selected_curves = cljs.core.get.call(null,map__377787__$1,new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493));
var compatibilities = cljs.core.get.call(null,map__377787__$1,new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024));
var nodes = cljs.core.get.call(null,map__377787__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var graph = cljs.core.get.call(null,map__377787__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var context_menu = cljs.core.get.call(null,map__377784__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var cf = cljs.core.get.call(null,map__377784__$1,new cljs.core.Keyword(null,"cf","cf",1480736310));
if(typeof dynomics.space.ui.t_dynomics$space$ui377790 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui377790 = (function (selected_nodes,active_nodes,py,edges,oy,curves,vec__377785,show,zoom,make_space_component,space,curve_types,node_scale,regions,ox,selected_curves,px,state,p__377774,compatibilities,su,map__377784,msgs,nodes,graph,context_menu,cf,map__377787,vec__377786,meta377791){
this.selected_nodes = selected_nodes;
this.active_nodes = active_nodes;
this.py = py;
this.edges = edges;
this.oy = oy;
this.curves = curves;
this.vec__377785 = vec__377785;
this.show = show;
this.zoom = zoom;
this.make_space_component = make_space_component;
this.space = space;
this.curve_types = curve_types;
this.node_scale = node_scale;
this.regions = regions;
this.ox = ox;
this.selected_curves = selected_curves;
this.px = px;
this.state = state;
this.p__377774 = p__377774;
this.compatibilities = compatibilities;
this.su = su;
this.map__377784 = map__377784;
this.msgs = msgs;
this.nodes = nodes;
this.graph = graph;
this.context_menu = context_menu;
this.cf = cf;
this.map__377787 = map__377787;
this.vec__377786 = vec__377786;
this.meta377791 = meta377791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui377790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__377784,map__377784__$1,state,vec__377785,ox,oy,show,zoom,vec__377786,px,py,su,msgs,map__377787,map__377787__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (_377792,meta377791__$1){
var self__ = this;
var _377792__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui377790(self__.selected_nodes,self__.active_nodes,self__.py,self__.edges,self__.oy,self__.curves,self__.vec__377785,self__.show,self__.zoom,self__.make_space_component,self__.space,self__.curve_types,self__.node_scale,self__.regions,self__.ox,self__.selected_curves,self__.px,self__.state,self__.p__377774,self__.compatibilities,self__.su,self__.map__377784,self__.msgs,self__.nodes,self__.graph,self__.context_menu,self__.cf,self__.map__377787,self__.vec__377786,meta377791__$1));
});})(map__377784,map__377784__$1,state,vec__377785,ox,oy,show,zoom,vec__377786,px,py,su,msgs,map__377787,map__377787__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui377790.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__377784,map__377784__$1,state,vec__377785,ox,oy,show,zoom,vec__377786,px,py,su,msgs,map__377787,map__377787__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (_377792){
var self__ = this;
var _377792__$1 = this;
return self__.meta377791;
});})(map__377784,map__377784__$1,state,vec__377785,ox,oy,show,zoom,vec__377786,px,py,su,msgs,map__377787,map__377787__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui377790.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui377790.prototype.om$core$IRender$render$arity$1 = ((function (map__377784,map__377784__$1,state,vec__377785,ox,oy,show,zoom,vec__377786,px,py,su,msgs,map__377787,map__377787__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.div.call(null,{"className": [cljs.core.str("space "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),self__.cf))?"selected_function":"hidden_function"))].join('')},om.dom.svg.call(null,{"image-rendering": "optimizeQuality", "zoomAndPan": false, "preserveAspectRatio": "xMidYMin", "width": "100%", "shape-rendering": "crispEdges", "xmlns": "http://www.w3.org/2000/svg", "className": "space_svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "id": "space", "viewBox": "-1 -1 2 2", "height": "100%"},om.dom.defs.call(null,{"key": "defs"}),om.dom.g.call(null,{"id": "space_root", "key": "space_root", "onMouseMove": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseDown": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseUp": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onWheel": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onContextMenu": ((function (this__38609__auto____$1,map__377784,map__377784__$1,state,vec__377785,ox,oy,show,zoom,vec__377786,px,py,su,msgs,map__377787,map__377787__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (e){
e.preventDefault();

return null;
});})(this__38609__auto____$1,map__377784,map__377784__$1,state,vec__377785,ox,oy,show,zoom,vec__377786,px,py,su,msgs,map__377787,map__377787__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
, "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.ox,self__.oy], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),self__.zoom,self__.zoom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.px,self__.py], null))},om.dom.rect.call(null,{"x": (-16), "y": (-16), "width": (32), "height": (32), "className": "space_background"}),om.dom.rect.call(null,{"x": (0), "y": (0), "width": (1), "height": (1), "className": "space_space"}),om.core.build_all.call(null,dynomics.space.core.P.call(null,dynomics.space.ui.make_curve_component,self__.zoom,self__.node_scale,self__.nodes,self__.msgs,self__.selected_curves),cljs.core.map.call(null,cljs.core.vector,self__.curves,cljs.core.map.call(null,dynomics.space.core.C.call(null,self__.curve_types,cljs.core.key),self__.curves))),null,null,om.core.build_all.call(null,dynomics.space.ui.make_edge_component,cljs.core.map.call(null,((function (this__38609__auto____$1,map__377784,map__377784__$1,state,vec__377785,ox,oy,show,zoom,vec__377786,px,py,su,msgs,map__377787,map__377787__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (e){
return cljs.core.assoc.call(null,dynomics.space.core.with_compatibilities.call(null,e,self__.compatibilities),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale);
});})(this__38609__auto____$1,map__377784,map__377784__$1,state,vec__377785,ox,oy,show,zoom,vec__377786,px,py,su,msgs,map__377787,map__377787__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
,cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.edge_points,self__.nodes),self__.edges))),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__38609__auto____$1,map__377784,map__377784__$1,state,vec__377785,ox,oy,show,zoom,vec__377786,px,py,su,msgs,map__377787,map__377787__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (node){
return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),self__.su,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),self__.zoom,new cljs.core.Keyword(null,"show","show",-576705889),self__.show,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891),self__.active_nodes], null),new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''));
});})(this__38609__auto____$1,map__377784,map__377784__$1,state,vec__377785,ox,oy,show,zoom,vec__377786,px,py,su,msgs,map__377787,map__377787__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
,cljs.core.vals.call(null,cljs.core.apply.call(null,cljs.core.dissoc,self__.nodes,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),cljs.core.map.call(null,cljs.core.last,self__.selected_nodes))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__38609__auto____$1,map__377784,map__377784__$1,state,vec__377785,ox,oy,show,zoom,vec__377786,px,py,su,msgs,map__377787,map__377787__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (node){
return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),self__.su,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),self__.zoom,new cljs.core.Keyword(null,"show","show",-576705889),self__.show,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891),self__.active_nodes], null),new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''));
});})(this__38609__auto____$1,map__377784,map__377784__$1,state,vec__377785,ox,oy,show,zoom,vec__377786,px,py,su,msgs,map__377787,map__377787__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
,cljs.core.vals.call(null,cljs.core.select_keys.call(null,self__.nodes,cljs.core.map.call(null,cljs.core.last,self__.selected_nodes)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),null,null)));
});})(map__377784,map__377784__$1,state,vec__377785,ox,oy,show,zoom,vec__377786,px,py,su,msgs,map__377787,map__377787__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui377790.getBasis = ((function (map__377784,map__377784__$1,state,vec__377785,ox,oy,show,zoom,vec__377786,px,py,su,msgs,map__377787,map__377787__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (){
return new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Symbol(null,"py","py",-1256449853,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"oy","oy",809196068,null),new cljs.core.Symbol(null,"curves","curves",1129726149,null),new cljs.core.Symbol(null,"vec__377785","vec__377785",1858572581,null),new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-space-component","make-space-component",-638751478,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ox","ox",-2083100366,null),new cljs.core.Symbol(null,"oy","oy",809196068,null)], null),new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"px","px",1921861426,null),new cljs.core.Symbol(null,"py","py",-1256449853,null)], null),new cljs.core.Symbol(null,"su","su",155163255,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"curves","curves",1129726149,null),new cljs.core.Symbol(null,"curve-types","curve-types",-1003663670,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"compatibilities","compatibilities",289068503,null),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null)],[new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"cf","cf",1480736310)])], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the phase-space editor"], null)),new cljs.core.Symbol(null,"space","space",1988665002,null),new cljs.core.Symbol(null,"curve-types","curve-types",-1003663670,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"ox","ox",-2083100366,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.Symbol(null,"px","px",1921861426,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"p__377774","p__377774",402383638,null),new cljs.core.Symbol(null,"compatibilities","compatibilities",289068503,null),new cljs.core.Symbol(null,"su","su",155163255,null),new cljs.core.Symbol(null,"map__377784","map__377784",1719876247,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Symbol(null,"map__377787","map__377787",-300525858,null),new cljs.core.Symbol(null,"vec__377786","vec__377786",53381055,null),new cljs.core.Symbol(null,"meta377791","meta377791",1948950081,null)], null);
});})(map__377784,map__377784__$1,state,vec__377785,ox,oy,show,zoom,vec__377786,px,py,su,msgs,map__377787,map__377787__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui377790.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui377790.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui377790";

dynomics.space.ui.t_dynomics$space$ui377790.cljs$lang$ctorPrWriter = ((function (map__377784,map__377784__$1,state,vec__377785,ox,oy,show,zoom,vec__377786,px,py,su,msgs,map__377787,map__377787__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui377790");
});})(map__377784,map__377784__$1,state,vec__377785,ox,oy,show,zoom,vec__377786,px,py,su,msgs,map__377787,map__377787__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.__GT_t_dynomics$space$ui377790 = ((function (map__377784,map__377784__$1,state,vec__377785,ox,oy,show,zoom,vec__377786,px,py,su,msgs,map__377787,map__377787__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function dynomics$space$ui$make_space_component_$___GT_t_dynomics$space$ui377790(selected_nodes__$1,active_nodes__$1,py__$1,edges__$1,oy__$1,curves__$1,vec__377785__$1,show__$1,zoom__$1,make_space_component__$1,space__$1,curve_types__$1,node_scale__$1,regions__$1,ox__$1,selected_curves__$1,px__$1,state__$1,p__377774__$1,compatibilities__$1,su__$1,map__377784__$2,msgs__$1,nodes__$1,graph__$1,context_menu__$1,cf__$1,map__377787__$2,vec__377786__$1,meta377791){
return (new dynomics.space.ui.t_dynomics$space$ui377790(selected_nodes__$1,active_nodes__$1,py__$1,edges__$1,oy__$1,curves__$1,vec__377785__$1,show__$1,zoom__$1,make_space_component__$1,space__$1,curve_types__$1,node_scale__$1,regions__$1,ox__$1,selected_curves__$1,px__$1,state__$1,p__377774__$1,compatibilities__$1,su__$1,map__377784__$2,msgs__$1,nodes__$1,graph__$1,context_menu__$1,cf__$1,map__377787__$2,vec__377786__$1,meta377791));
});})(map__377784,map__377784__$1,state,vec__377785,ox,oy,show,zoom,vec__377786,px,py,su,msgs,map__377787,map__377787__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui377790(selected_nodes,active_nodes,py,edges,oy,curves,vec__377785,show,zoom,dynomics$space$ui$make_space_component,space,curve_types,node_scale,regions,ox,selected_curves,px,state,p__377774,compatibilities,su,map__377784__$1,msgs,nodes,graph,context_menu,cf,map__377787__$1,vec__377786,null));
});
