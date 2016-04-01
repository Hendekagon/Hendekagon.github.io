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
var args93313 = [];
var len__26896__auto___93316 = arguments.length;
var i__26897__auto___93317 = (0);
while(true){
if((i__26897__auto___93317 < len__26896__auto___93316)){
args93313.push((arguments[i__26897__auto___93317]));

var G__93318 = (i__26897__auto___93317 + (1));
i__26897__auto___93317 = G__93318;
continue;
} else {
}
break;
}

var G__93315 = args93313.length;
switch (G__93315) {
case 1:
return dynomics.space.ui.convert_coords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.ui.convert_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args93313.length)].join('')));

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
var args93320 = [];
var len__26896__auto___93337 = arguments.length;
var i__26897__auto___93338 = (0);
while(true){
if((i__26897__auto___93338 < len__26896__auto___93337)){
args93320.push((arguments[i__26897__auto___93338]));

var G__93339 = (i__26897__auto___93338 + (1));
i__26897__auto___93338 = G__93339;
continue;
} else {
}
break;
}

var G__93322 = args93320.length;
switch (G__93322) {
case 0:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args93320.length)].join('')));

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
var seq__93323_93341 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni1.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
)),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni2.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
))));
var chunk__93324_93342 = null;
var count__93325_93343 = (0);
var i__93326_93344 = (0);
while(true){
if((i__93326_93344 < count__93325_93343)){
var vec__93327_93345 = cljs.core._nth.call(null,chunk__93324_93342,i__93326_93344);
var i_93346 = cljs.core.nth.call(null,vec__93327_93345,(0),null);
var j_93347 = cljs.core.nth.call(null,vec__93327_93345,(1),null);
j_93347.removeAttribute("id");

j_93347.removeAttribute("class");

j_93347.removeAttribute("data-reactid");

var ccss_93348__$1 = window.getComputedStyle(i_93346);
var seq__93328_93349 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_93348__$1.length));
var chunk__93329_93350 = null;
var count__93330_93351 = (0);
var i__93331_93352 = (0);
while(true){
if((i__93331_93352 < count__93330_93351)){
var is_93353 = cljs.core._nth.call(null,chunk__93329_93350,i__93331_93352);
var p_93354 = ccss_93348__$1.item(is_93353);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_93354)))){
j_93347.style.setProperty(p_93354,ccss_93348__$1.getPropertyValue(p_93354));
} else {
}

var G__93355 = seq__93328_93349;
var G__93356 = chunk__93329_93350;
var G__93357 = count__93330_93351;
var G__93358 = (i__93331_93352 + (1));
seq__93328_93349 = G__93355;
chunk__93329_93350 = G__93356;
count__93330_93351 = G__93357;
i__93331_93352 = G__93358;
continue;
} else {
var temp__4657__auto___93359 = cljs.core.seq.call(null,seq__93328_93349);
if(temp__4657__auto___93359){
var seq__93328_93360__$1 = temp__4657__auto___93359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__93328_93360__$1)){
var c__26638__auto___93361 = cljs.core.chunk_first.call(null,seq__93328_93360__$1);
var G__93362 = cljs.core.chunk_rest.call(null,seq__93328_93360__$1);
var G__93363 = c__26638__auto___93361;
var G__93364 = cljs.core.count.call(null,c__26638__auto___93361);
var G__93365 = (0);
seq__93328_93349 = G__93362;
chunk__93329_93350 = G__93363;
count__93330_93351 = G__93364;
i__93331_93352 = G__93365;
continue;
} else {
var is_93366 = cljs.core.first.call(null,seq__93328_93360__$1);
var p_93367 = ccss_93348__$1.item(is_93366);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_93367)))){
j_93347.style.setProperty(p_93367,ccss_93348__$1.getPropertyValue(p_93367));
} else {
}

var G__93368 = cljs.core.next.call(null,seq__93328_93360__$1);
var G__93369 = null;
var G__93370 = (0);
var G__93371 = (0);
seq__93328_93349 = G__93368;
chunk__93329_93350 = G__93369;
count__93330_93351 = G__93370;
i__93331_93352 = G__93371;
continue;
}
} else {
}
}
break;
}

var G__93372 = seq__93323_93341;
var G__93373 = chunk__93324_93342;
var G__93374 = count__93325_93343;
var G__93375 = (i__93326_93344 + (1));
seq__93323_93341 = G__93372;
chunk__93324_93342 = G__93373;
count__93325_93343 = G__93374;
i__93326_93344 = G__93375;
continue;
} else {
var temp__4657__auto___93376 = cljs.core.seq.call(null,seq__93323_93341);
if(temp__4657__auto___93376){
var seq__93323_93377__$1 = temp__4657__auto___93376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__93323_93377__$1)){
var c__26638__auto___93378 = cljs.core.chunk_first.call(null,seq__93323_93377__$1);
var G__93379 = cljs.core.chunk_rest.call(null,seq__93323_93377__$1);
var G__93380 = c__26638__auto___93378;
var G__93381 = cljs.core.count.call(null,c__26638__auto___93378);
var G__93382 = (0);
seq__93323_93341 = G__93379;
chunk__93324_93342 = G__93380;
count__93325_93343 = G__93381;
i__93326_93344 = G__93382;
continue;
} else {
var vec__93332_93383 = cljs.core.first.call(null,seq__93323_93377__$1);
var i_93384 = cljs.core.nth.call(null,vec__93332_93383,(0),null);
var j_93385 = cljs.core.nth.call(null,vec__93332_93383,(1),null);
j_93385.removeAttribute("id");

j_93385.removeAttribute("class");

j_93385.removeAttribute("data-reactid");

var ccss_93386__$1 = window.getComputedStyle(i_93384);
var seq__93333_93387 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_93386__$1.length));
var chunk__93334_93388 = null;
var count__93335_93389 = (0);
var i__93336_93390 = (0);
while(true){
if((i__93336_93390 < count__93335_93389)){
var is_93391 = cljs.core._nth.call(null,chunk__93334_93388,i__93336_93390);
var p_93392 = ccss_93386__$1.item(is_93391);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_93392)))){
j_93385.style.setProperty(p_93392,ccss_93386__$1.getPropertyValue(p_93392));
} else {
}

var G__93393 = seq__93333_93387;
var G__93394 = chunk__93334_93388;
var G__93395 = count__93335_93389;
var G__93396 = (i__93336_93390 + (1));
seq__93333_93387 = G__93393;
chunk__93334_93388 = G__93394;
count__93335_93389 = G__93395;
i__93336_93390 = G__93396;
continue;
} else {
var temp__4657__auto___93397__$1 = cljs.core.seq.call(null,seq__93333_93387);
if(temp__4657__auto___93397__$1){
var seq__93333_93398__$1 = temp__4657__auto___93397__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__93333_93398__$1)){
var c__26638__auto___93399 = cljs.core.chunk_first.call(null,seq__93333_93398__$1);
var G__93400 = cljs.core.chunk_rest.call(null,seq__93333_93398__$1);
var G__93401 = c__26638__auto___93399;
var G__93402 = cljs.core.count.call(null,c__26638__auto___93399);
var G__93403 = (0);
seq__93333_93387 = G__93400;
chunk__93334_93388 = G__93401;
count__93335_93389 = G__93402;
i__93336_93390 = G__93403;
continue;
} else {
var is_93404 = cljs.core.first.call(null,seq__93333_93398__$1);
var p_93405 = ccss_93386__$1.item(is_93404);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_93405)))){
j_93385.style.setProperty(p_93405,ccss_93386__$1.getPropertyValue(p_93405));
} else {
}

var G__93406 = cljs.core.next.call(null,seq__93333_93398__$1);
var G__93407 = null;
var G__93408 = (0);
var G__93409 = (0);
seq__93333_93387 = G__93406;
chunk__93334_93388 = G__93407;
count__93335_93389 = G__93408;
i__93336_93390 = G__93409;
continue;
}
} else {
}
}
break;
}

var G__93410 = cljs.core.next.call(null,seq__93323_93377__$1);
var G__93411 = null;
var G__93412 = (0);
var G__93413 = (0);
seq__93323_93341 = G__93410;
chunk__93324_93342 = G__93411;
count__93325_93343 = G__93412;
i__93326_93344 = G__93413;
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
cljs.core.async.put_BANG_.call(null,msgch,cljs.core.merge.call(null,s,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Keyword(null,"deltaX","deltaX",-1317913656),new cljs.core.Keyword(null,"meta-key?","meta-key?",940581001),new cljs.core.Keyword(null,"transforms","transforms",793344554),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989),new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"deltaY","deltaY",-879493966),new cljs.core.Keyword(null,"which","which",-1255268941),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword(null,"alt-key?","alt-key?",234827606),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"deltaZ","deltaZ",1656656988),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword(null,"positions","positions",-1380538434)],[e.buttons,type_key,e.button,pl,e.deltaX,e.metaKey,transforms__$1,e.ctrlKey,new cljs.core.Keyword(null,"event","event",301435442),e.deltaY,e.which,(function (){var or__25827__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return cljs.core.keyword.call(null,(function (){var or__25827__auto____$1 = e.target.id;
if(cljs.core.truth_(or__25827__auto____$1)){
return or__25827__auto____$1;
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
var vec__93416 = cljs.core.subvec.call(null,trajectory,((cljs.core.count.call(null,trajectory) - (1)) - (1)),cljs.core.count.call(null,trajectory));
var p1 = cljs.core.nth.call(null,vec__93416,(0),null);
var p2 = cljs.core.nth.call(null,vec__93416,(1),null);
var v = cljs.core.map.call(null,cljs.core._,p1,p2);
var a = (dynomics.space.core.r2d * (dynomics.space.core.PI2 - dynomics.space.core.angle.call(null,v)));
var a1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);
var a2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
var a3 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null);
var vec__93417 = cljs.core.map.call(null,cljs.core._PLUS_,p2,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,0.505),v));
var ox = cljs.core.nth.call(null,vec__93417,(0),null);
var oy = cljs.core.nth.call(null,vec__93417,(1),null);
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
}),dynomics.space.core.midpoints.call(null,trajectory),cljs.core.map.call(null,(function (p__93420){
var vec__93421 = p__93420;
var p1 = cljs.core.nth.call(null,vec__93421,(0),null);
var p2 = cljs.core.nth.call(null,vec__93421,(1),null);
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
dynomics.space.ui.make_paths = (function dynomics$space$ui$make_paths(p__93422){
var map__93429 = p__93422;
var map__93429__$1 = ((((!((map__93429 == null)))?((((map__93429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93429):map__93429);
var space = map__93429__$1;
var nodes = cljs.core.get.call(null,map__93429__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__93429__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var regions = cljs.core.get.call(null,map__93429__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var node_scale = cljs.core.get.call(null,map__93429__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
cljs.core.println.call(null,"Regions ",regions);

return cljs.core.map.call(null,((function (map__93429,map__93429__$1,space,nodes,edges,regions,node_scale){
return (function (region){
return cljs.core.reduce.call(null,((function (map__93429,map__93429__$1,space,nodes,edges,regions,node_scale){
return (function (beziers,connection){
return cljs.core.conj.call(null,beziers,cljs.core.map.call(null,((function (map__93429,map__93429__$1,space,nodes,edges,regions,node_scale){
return (function (p__93431){
var vec__93432 = p__93431;
var nid1 = cljs.core.nth.call(null,vec__93432,(0),null);
var cid1 = cljs.core.nth.call(null,vec__93432,(1),null);
var vec__93433 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx1 = cljs.core.nth.call(null,vec__93433,(0),null);
var ny1 = cljs.core.nth.call(null,vec__93433,(1),null);
var vec__93434 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx1 = cljs.core.nth.call(null,vec__93434,(0),null);
var cy1 = cljs.core.nth.call(null,vec__93434,(1),null);
return dynomics.ui.svg.make_bezier_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx1 + (node_scale * cx1)),(ny1 + (node_scale * cy1))], null)], null));
});})(map__93429,map__93429__$1,space,nodes,edges,regions,node_scale))
,cljs.core.map.call(null,dynomics.space.core.simplify_connection,connection)));
});})(map__93429,map__93429__$1,space,nodes,edges,regions,node_scale))
,cljs.core.PersistentVector.EMPTY,region);
});})(map__93429,map__93429__$1,space,nodes,edges,regions,node_scale))
,regions);
});
/**
 * Returns a palette of tools
 */
dynomics.space.ui.make_tools_palette_component = (function dynomics$space$ui$make_tools_palette_component(p__93435){
var map__93442 = p__93435;
var map__93442__$1 = ((((!((map__93442 == null)))?((((map__93442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93442):map__93442);
var state = map__93442__$1;
var current_tool = cljs.core.get.call(null,map__93442__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
var tools = cljs.core.get.call(null,map__93442__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
var tools_order = cljs.core.get.call(null,map__93442__$1,new cljs.core.Keyword(null,"tools-order","tools-order",-615877648));
var state_updates = cljs.core.get.call(null,map__93442__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
return om.dom.div.call(null,{"className": "tool_things"},om.dom.div.call(null,{"className": "tool_selectors"},cljs.core.map.call(null,((function (map__93442,map__93442__$1,state,current_tool,tools,tools_order,state_updates){
return (function (p__93444){
var vec__93445 = p__93444;
var tk = cljs.core.nth.call(null,vec__93445,(0),null);
var map__93446 = cljs.core.nth.call(null,vec__93445,(1),null);
var map__93446__$1 = ((((!((map__93446 == null)))?((((map__93446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93446):map__93446);
var description = cljs.core.get.call(null,map__93446__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var icon = cljs.core.get.call(null,map__93446__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var keybinding = cljs.core.get.call(null,map__93446__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
return om.dom.div.call(null,{"className": [cljs.core.str("tool_selector "),cljs.core.str(((cljs.core._EQ_.call(null,tk,current_tool))?"tool_selected":null))].join(''), "title": [cljs.core.str(description),cljs.core.str(" ( "),cljs.core.str((((keybinding instanceof cljs.core.Keyword))?cljs.core.name.call(null,keybinding):keybinding)),cljs.core.str(" )")].join(''), "onMouseDown": ((function (vec__93445,tk,map__93446,map__93446__$1,description,icon,keybinding,map__93442,map__93442__$1,state,current_tool,tools,tools_order,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__93445,tk,map__93446,map__93446__$1,description,icon,keybinding,map__93442,map__93442__$1,state,current_tool,tools,tools_order,state_updates){
return (function (s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),tk);
});})(vec__93445,tk,map__93446,map__93446__$1,description,icon,keybinding,map__93442,map__93442__$1,state,current_tool,tools,tools_order,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tool","tool",-1298696470),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null));

return null;
});})(vec__93445,tk,map__93446,map__93446__$1,description,icon,keybinding,map__93442,map__93442__$1,state,current_tool,tools,tools_order,state_updates))
},icon);
});})(map__93442,map__93442__$1,state,current_tool,tools,tools_order,state_updates))
,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,tools),tools_order))),om.dom.div.call(null,{"className": "current_tool_text", "title": cljs.core.get_in.call(null,tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tool,new cljs.core.Keyword(null,"description","description",-1428560544)], null))},cljs.core.get_in.call(null,tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tool,new cljs.core.Keyword(null,"name","name",1843675177)], null))));
});
/**
 * Returns a node-type component for the node types palette,
 *   which can prerender its SVG to a canvas & therefore
 *   cache the resulting image, to save on components in the DOM if need be.
 */
dynomics.space.ui.make_node_types_cached_component = (function dynomics$space$ui$make_node_types_cached_component(p__93448,owner){
var map__93454 = p__93448;
var map__93454__$1 = ((((!((map__93454 == null)))?((((map__93454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93454):map__93454);
var id = cljs.core.get.call(null,map__93454__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(typeof dynomics.space.ui.t_dynomics$space$ui93456 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui93456 = (function (make_node_types_cached_component,p__93448,owner,map__93454,id,meta93457){
this.make_node_types_cached_component = make_node_types_cached_component;
this.p__93448 = p__93448;
this.owner = owner;
this.map__93454 = map__93454;
this.id = id;
this.meta93457 = meta93457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui93456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__93454,map__93454__$1,id){
return (function (_93458,meta93457__$1){
var self__ = this;
var _93458__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui93456(self__.make_node_types_cached_component,self__.p__93448,self__.owner,self__.map__93454,self__.id,meta93457__$1));
});})(map__93454,map__93454__$1,id))
;

dynomics.space.ui.t_dynomics$space$ui93456.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__93454,map__93454__$1,id){
return (function (_93458){
var self__ = this;
var _93458__$1 = this;
return self__.meta93457;
});})(map__93454,map__93454__$1,id))
;

dynomics.space.ui.t_dynomics$space$ui93456.prototype.om$core$IInitState$ = true;

dynomics.space.ui.t_dynomics$space$ui93456.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__93454,map__93454__$1,id){
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
});})(map__93454,map__93454__$1,id))
;

dynomics.space.ui.t_dynomics$space$ui93456.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui93456.prototype.om$core$IRender$render$arity$1 = ((function (map__93454,map__93454__$1,id){
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
});})(map__93454,map__93454__$1,id))
;

dynomics.space.ui.t_dynomics$space$ui93456.prototype.om$core$IDidMount$ = true;

dynomics.space.ui.t_dynomics$space$ui93456.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__93454,map__93454__$1,id){
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
});})(map__93454,map__93454__$1,id))
;

dynomics.space.ui.t_dynomics$space$ui93456.getBasis = ((function (map__93454,map__93454__$1,id){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-cached-component","make-node-types-cached-component",-655003199,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a node-type component for the node types palette,\n  which can prerender its SVG to a canvas & therefore\n  cache the resulting image, to save on components in the DOM if need be."], null)),new cljs.core.Symbol(null,"p__93448","p__93448",-1863388723,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__93454","map__93454",-361865640,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta93457","meta93457",1085010443,null)], null);
});})(map__93454,map__93454__$1,id))
;

dynomics.space.ui.t_dynomics$space$ui93456.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui93456.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui93456";

dynomics.space.ui.t_dynomics$space$ui93456.cljs$lang$ctorPrWriter = ((function (map__93454,map__93454__$1,id){
return (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"dynomics.space.ui/t_dynomics$space$ui93456");
});})(map__93454,map__93454__$1,id))
;

dynomics.space.ui.__GT_t_dynomics$space$ui93456 = ((function (map__93454,map__93454__$1,id){
return (function dynomics$space$ui$make_node_types_cached_component_$___GT_t_dynomics$space$ui93456(make_node_types_cached_component__$1,p__93448__$1,owner__$1,map__93454__$2,id__$1,meta93457){
return (new dynomics.space.ui.t_dynomics$space$ui93456(make_node_types_cached_component__$1,p__93448__$1,owner__$1,map__93454__$2,id__$1,meta93457));
});})(map__93454,map__93454__$1,id))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui93456(dynomics$space$ui$make_node_types_cached_component,p__93448,owner,map__93454__$1,id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a node-type component for the node types palette,
 *   which can prerender its SVG to a canvas & therefore
 *   cache the resulting image, to save on components in the DOM if need be.
 */
dynomics.space.ui.make_node_types_cached_image_component = (function dynomics$space$ui$make_node_types_cached_image_component(p__93459,owner){
var map__93467 = p__93459;
var map__93467__$1 = ((((!((map__93467 == null)))?((((map__93467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93467):map__93467);
var node_type = cljs.core.get.call(null,map__93467__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var node_scale = cljs.core.get.call(null,map__93467__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var zoom = cljs.core.get.call(null,map__93467__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
if(typeof dynomics.space.ui.t_dynomics$space$ui93469 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui93469 = (function (make_node_types_cached_image_component,p__93459,owner,map__93467,node_type,node_scale,zoom,meta93470){
this.make_node_types_cached_image_component = make_node_types_cached_image_component;
this.p__93459 = p__93459;
this.owner = owner;
this.map__93467 = map__93467;
this.node_type = node_type;
this.node_scale = node_scale;
this.zoom = zoom;
this.meta93470 = meta93470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui93469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__93467,map__93467__$1,node_type,node_scale,zoom){
return (function (_93471,meta93470__$1){
var self__ = this;
var _93471__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui93469(self__.make_node_types_cached_image_component,self__.p__93459,self__.owner,self__.map__93467,self__.node_type,self__.node_scale,self__.zoom,meta93470__$1));
});})(map__93467,map__93467__$1,node_type,node_scale,zoom))
;

dynomics.space.ui.t_dynomics$space$ui93469.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__93467,map__93467__$1,node_type,node_scale,zoom){
return (function (_93471){
var self__ = this;
var _93471__$1 = this;
return self__.meta93470;
});})(map__93467,map__93467__$1,node_type,node_scale,zoom))
;

dynomics.space.ui.t_dynomics$space$ui93469.prototype.om$core$IInitState$ = true;

dynomics.space.ui.t_dynomics$space$ui93469.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__93467,map__93467__$1,node_type,node_scale,zoom){
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
});})(map__93467,map__93467__$1,node_type,node_scale,zoom))
;

dynomics.space.ui.t_dynomics$space$ui93469.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui93469.prototype.om$core$IRender$render$arity$1 = ((function (map__93467,map__93467__$1,node_type,node_scale,zoom){
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
});})(map__93467,map__93467__$1,node_type,node_scale,zoom))
;

dynomics.space.ui.t_dynomics$space$ui93469.getBasis = ((function (map__93467,map__93467__$1,node_type,node_scale,zoom){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-cached-image-component","make-node-types-cached-image-component",-1391243851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a node-type component for the node types palette,\n  which can prerender its SVG to a canvas & therefore\n  cache the resulting image, to save on components in the DOM if need be."], null)),new cljs.core.Symbol(null,"p__93459","p__93459",-1499428095,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__93467","map__93467",-285010086,null),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"meta93470","meta93470",-320730427,null)], null);
});})(map__93467,map__93467__$1,node_type,node_scale,zoom))
;

dynomics.space.ui.t_dynomics$space$ui93469.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui93469.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui93469";

dynomics.space.ui.t_dynomics$space$ui93469.cljs$lang$ctorPrWriter = ((function (map__93467,map__93467__$1,node_type,node_scale,zoom){
return (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"dynomics.space.ui/t_dynomics$space$ui93469");
});})(map__93467,map__93467__$1,node_type,node_scale,zoom))
;

dynomics.space.ui.__GT_t_dynomics$space$ui93469 = ((function (map__93467,map__93467__$1,node_type,node_scale,zoom){
return (function dynomics$space$ui$make_node_types_cached_image_component_$___GT_t_dynomics$space$ui93469(make_node_types_cached_image_component__$1,p__93459__$1,owner__$1,map__93467__$2,node_type__$1,node_scale__$1,zoom__$1,meta93470){
return (new dynomics.space.ui.t_dynomics$space$ui93469(make_node_types_cached_image_component__$1,p__93459__$1,owner__$1,map__93467__$2,node_type__$1,node_scale__$1,zoom__$1,meta93470));
});})(map__93467,map__93467__$1,node_type,node_scale,zoom))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui93469(dynomics$space$ui$make_node_types_cached_image_component,p__93459,owner,map__93467__$1,node_type,node_scale,zoom,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a component for the node types palette
 */
dynomics.space.ui.make_node_types_palette_component = (function dynomics$space$ui$make_node_types_palette_component(p__93474){
var map__93483 = p__93474;
var map__93483__$1 = ((((!((map__93483 == null)))?((((map__93483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93483):map__93483);
var state = map__93483__$1;
var component = cljs.core.get.call(null,map__93483__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var state_updates = cljs.core.get.call(null,map__93483__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__93483__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
if(typeof dynomics.space.ui.t_dynomics$space$ui93485 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui93485 = (function (make_node_types_palette_component,p__93474,map__93483,state,component,state_updates,msgs,meta93486){
this.make_node_types_palette_component = make_node_types_palette_component;
this.p__93474 = p__93474;
this.map__93483 = map__93483;
this.state = state;
this.component = component;
this.state_updates = state_updates;
this.msgs = msgs;
this.meta93486 = meta93486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui93485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__93483,map__93483__$1,state,component,state_updates,msgs){
return (function (_93487,meta93486__$1){
var self__ = this;
var _93487__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui93485(self__.make_node_types_palette_component,self__.p__93474,self__.map__93483,self__.state,self__.component,self__.state_updates,self__.msgs,meta93486__$1));
});})(map__93483,map__93483__$1,state,component,state_updates,msgs))
;

dynomics.space.ui.t_dynomics$space$ui93485.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__93483,map__93483__$1,state,component,state_updates,msgs){
return (function (_93487){
var self__ = this;
var _93487__$1 = this;
return self__.meta93486;
});})(map__93483,map__93483__$1,state,component,state_updates,msgs))
;

dynomics.space.ui.t_dynomics$space$ui93485.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui93485.prototype.om$core$IRender$render$arity$1 = ((function (map__93483,map__93483__$1,state,component,state_updates,msgs){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"className": "node_types"},cljs.core.map.call(null,((function (this$__$1,map__93483,map__93483__$1,state,component,state_updates,msgs){
return (function (p__93488){
var map__93489 = p__93488;
var map__93489__$1 = ((((!((map__93489 == null)))?((((map__93489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93489):map__93489);
var id = cljs.core.get.call(null,map__93489__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var stability = cljs.core.get.call(null,map__93489__$1,new cljs.core.Keyword(null,"stability","stability",1733225509));
var type = cljs.core.get.call(null,map__93489__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return om.dom.div.call(null,{"className": [cljs.core.str("node_type_selector")].join(''), "title": [cljs.core.str("Set selected nodes to "),cljs.core.str(id),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,stability)),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,type))].join(''), "draggable": true, "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)), "onMouseMove": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null))},om.core.build.call(null,dynomics.space.ui.make_node_types_cached_component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("ntp"),cljs.core.str(id)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),null);
});})(this$__$1,map__93483,map__93483__$1,state,component,state_updates,msgs))
,cljs.core.vals.call(null,dynomics.space.core.node_types)));
});})(map__93483,map__93483__$1,state,component,state_updates,msgs))
;

dynomics.space.ui.t_dynomics$space$ui93485.getBasis = ((function (map__93483,map__93483__$1,state,component,state_updates,msgs){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-palette-component","make-node-types-palette-component",54407202,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the node types palette"], null)),new cljs.core.Symbol(null,"p__93474","p__93474",-1703318732,null),new cljs.core.Symbol(null,"map__93483","map__93483",-988039558,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"meta93486","meta93486",-119541646,null)], null);
});})(map__93483,map__93483__$1,state,component,state_updates,msgs))
;

dynomics.space.ui.t_dynomics$space$ui93485.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui93485.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui93485";

dynomics.space.ui.t_dynomics$space$ui93485.cljs$lang$ctorPrWriter = ((function (map__93483,map__93483__$1,state,component,state_updates,msgs){
return (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"dynomics.space.ui/t_dynomics$space$ui93485");
});})(map__93483,map__93483__$1,state,component,state_updates,msgs))
;

dynomics.space.ui.__GT_t_dynomics$space$ui93485 = ((function (map__93483,map__93483__$1,state,component,state_updates,msgs){
return (function dynomics$space$ui$make_node_types_palette_component_$___GT_t_dynomics$space$ui93485(make_node_types_palette_component__$1,p__93474__$1,map__93483__$2,state__$1,component__$1,state_updates__$1,msgs__$1,meta93486){
return (new dynomics.space.ui.t_dynomics$space$ui93485(make_node_types_palette_component__$1,p__93474__$1,map__93483__$2,state__$1,component__$1,state_updates__$1,msgs__$1,meta93486));
});})(map__93483,map__93483__$1,state,component,state_updates,msgs))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui93485(dynomics$space$ui$make_node_types_palette_component,p__93474,map__93483__$1,state,component,state_updates,msgs,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a component for an edge
 */
dynomics.space.ui.make_edge_component = (function dynomics$space$ui$make_edge_component(p__93491){
var map__93503 = p__93491;
var map__93503__$1 = ((((!((map__93503 == null)))?((((map__93503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93503):map__93503);
var vec__93504 = cljs.core.get.call(null,map__93503__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__93505 = cljs.core.nth.call(null,vec__93504,(0),null);
var nid1 = cljs.core.nth.call(null,vec__93505,(0),null);
var nid2 = cljs.core.nth.call(null,vec__93505,(1),null);
var vec__93506 = cljs.core.nth.call(null,vec__93504,(1),null);
var nx1 = cljs.core.nth.call(null,vec__93506,(0),null);
var ny1 = cljs.core.nth.call(null,vec__93506,(1),null);
var vec__93507 = cljs.core.nth.call(null,vec__93504,(2),null);
var nx2 = cljs.core.nth.call(null,vec__93507,(0),null);
var ny2 = cljs.core.nth.call(null,vec__93507,(1),null);
var vec__93508 = cljs.core.nth.call(null,vec__93504,(3),null);
var cx1 = cljs.core.nth.call(null,vec__93508,(0),null);
var cx2 = cljs.core.nth.call(null,vec__93508,(1),null);
var vec__93509 = cljs.core.nth.call(null,vec__93504,(4),null);
var cy1 = cljs.core.nth.call(null,vec__93509,(0),null);
var cy2 = cljs.core.nth.call(null,vec__93509,(1),null);
var compatible_QMARK_ = cljs.core.get.call(null,map__93503__$1,new cljs.core.Keyword(null,"compatible?","compatible?",923422575));
var node_scale = cljs.core.get.call(null,map__93503__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
if(typeof dynomics.space.ui.t_dynomics$space$ui93511 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui93511 = (function (nx1,vec__93504,vec__93505,cx1,ny2,vec__93509,p__93491,make_edge_component,cy2,nx2,cy1,vec__93508,node_scale,vec__93506,ny1,cx2,map__93503,compatible_QMARK_,nid2,nid1,vec__93507,meta93512){
this.nx1 = nx1;
this.vec__93504 = vec__93504;
this.vec__93505 = vec__93505;
this.cx1 = cx1;
this.ny2 = ny2;
this.vec__93509 = vec__93509;
this.p__93491 = p__93491;
this.make_edge_component = make_edge_component;
this.cy2 = cy2;
this.nx2 = nx2;
this.cy1 = cy1;
this.vec__93508 = vec__93508;
this.node_scale = node_scale;
this.vec__93506 = vec__93506;
this.ny1 = ny1;
this.cx2 = cx2;
this.map__93503 = map__93503;
this.compatible_QMARK_ = compatible_QMARK_;
this.nid2 = nid2;
this.nid1 = nid1;
this.vec__93507 = vec__93507;
this.meta93512 = meta93512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui93511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__93503,map__93503__$1,vec__93504,vec__93505,nid1,nid2,vec__93506,nx1,ny1,vec__93507,nx2,ny2,vec__93508,cx1,cx2,vec__93509,cy1,cy2,compatible_QMARK_,node_scale){
return (function (_93513,meta93512__$1){
var self__ = this;
var _93513__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui93511(self__.nx1,self__.vec__93504,self__.vec__93505,self__.cx1,self__.ny2,self__.vec__93509,self__.p__93491,self__.make_edge_component,self__.cy2,self__.nx2,self__.cy1,self__.vec__93508,self__.node_scale,self__.vec__93506,self__.ny1,self__.cx2,self__.map__93503,self__.compatible_QMARK_,self__.nid2,self__.nid1,self__.vec__93507,meta93512__$1));
});})(map__93503,map__93503__$1,vec__93504,vec__93505,nid1,nid2,vec__93506,nx1,ny1,vec__93507,nx2,ny2,vec__93508,cx1,cx2,vec__93509,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui93511.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__93503,map__93503__$1,vec__93504,vec__93505,nid1,nid2,vec__93506,nx1,ny1,vec__93507,nx2,ny2,vec__93508,cx1,cx2,vec__93509,cy1,cy2,compatible_QMARK_,node_scale){
return (function (_93513){
var self__ = this;
var _93513__$1 = this;
return self__.meta93512;
});})(map__93503,map__93503__$1,vec__93504,vec__93505,nid1,nid2,vec__93506,nx1,ny1,vec__93507,nx2,ny2,vec__93508,cx1,cx2,vec__93509,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui93511.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui93511.prototype.om$core$IRender$render$arity$1 = ((function (map__93503,map__93503__$1,vec__93504,vec__93505,nid1,nid2,vec__93506,nx1,ny1,vec__93507,nx2,ny2,vec__93508,cx1,cx2,vec__93509,cy1,cy2,compatible_QMARK_,node_scale){
return (function (this__37314__auto__){
var self__ = this;
var this__37314__auto____$1 = this;
return om.dom.path.call(null,{"key": [cljs.core.str("edge_"),cljs.core.str(self__.nid1),cljs.core.str("_"),cljs.core.str(self__.nid2)].join(''), "className": [cljs.core.str("edge "),cljs.core.str((cljs.core.truth_(self__.compatible_QMARK_)?"compatible_edge":null))].join(''), "d": dynomics.ui.svg.to_svg_path.call(null,cljs.core.map.call(null,dynomics.ui.svg.make_bezier_point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx1,self__.ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.cx1,self__.cy1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx2,self__.ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.cx2,self__.cy2], null)], null)], null)))});
});})(map__93503,map__93503__$1,vec__93504,vec__93505,nid1,nid2,vec__93506,nx1,ny1,vec__93507,nx2,ny2,vec__93508,cx1,cx2,vec__93509,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui93511.getBasis = ((function (map__93503,map__93503__$1,vec__93504,vec__93505,nid1,nid2,vec__93506,nx1,ny1,vec__93507,nx2,ny2,vec__93508,cx1,cx2,vec__93509,cy1,cy2,compatible_QMARK_,node_scale){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"vec__93504","vec__93504",870852001,null),new cljs.core.Symbol(null,"vec__93505","vec__93505",14758562,null),new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null),new cljs.core.Symbol(null,"vec__93509","vec__93509",795887974,null),new cljs.core.Symbol(null,"p__93491","p__93491",-1241326520,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-edge-component","make-edge-component",-530385559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null)], null)], null),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Symbol(null,"compatible?","compatible?",-1731013194,null),new cljs.core.Keyword(null,"compatible?","compatible?",923422575),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for an edge"], null)),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null),new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"vec__93508","vec__93508",-28172880,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"vec__93506","vec__93506",-1880548496,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null),new cljs.core.Symbol(null,"map__93503","map__93503",-258754767,null),new cljs.core.Symbol(null,"compatible?","compatible?",-1731013194,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null),new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"vec__93507","vec__93507",-1365259457,null),new cljs.core.Symbol(null,"meta93512","meta93512",786010607,null)], null);
});})(map__93503,map__93503__$1,vec__93504,vec__93505,nid1,nid2,vec__93506,nx1,ny1,vec__93507,nx2,ny2,vec__93508,cx1,cx2,vec__93509,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui93511.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui93511.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui93511";

dynomics.space.ui.t_dynomics$space$ui93511.cljs$lang$ctorPrWriter = ((function (map__93503,map__93503__$1,vec__93504,vec__93505,nid1,nid2,vec__93506,nx1,ny1,vec__93507,nx2,ny2,vec__93508,cx1,cx2,vec__93509,cy1,cy2,compatible_QMARK_,node_scale){
return (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"dynomics.space.ui/t_dynomics$space$ui93511");
});})(map__93503,map__93503__$1,vec__93504,vec__93505,nid1,nid2,vec__93506,nx1,ny1,vec__93507,nx2,ny2,vec__93508,cx1,cx2,vec__93509,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.__GT_t_dynomics$space$ui93511 = ((function (map__93503,map__93503__$1,vec__93504,vec__93505,nid1,nid2,vec__93506,nx1,ny1,vec__93507,nx2,ny2,vec__93508,cx1,cx2,vec__93509,cy1,cy2,compatible_QMARK_,node_scale){
return (function dynomics$space$ui$make_edge_component_$___GT_t_dynomics$space$ui93511(nx1__$1,vec__93504__$1,vec__93505__$1,cx1__$1,ny2__$1,vec__93509__$1,p__93491__$1,make_edge_component__$1,cy2__$1,nx2__$1,cy1__$1,vec__93508__$1,node_scale__$1,vec__93506__$1,ny1__$1,cx2__$1,map__93503__$2,compatible_QMARK___$1,nid2__$1,nid1__$1,vec__93507__$1,meta93512){
return (new dynomics.space.ui.t_dynomics$space$ui93511(nx1__$1,vec__93504__$1,vec__93505__$1,cx1__$1,ny2__$1,vec__93509__$1,p__93491__$1,make_edge_component__$1,cy2__$1,nx2__$1,cy1__$1,vec__93508__$1,node_scale__$1,vec__93506__$1,ny1__$1,cx2__$1,map__93503__$2,compatible_QMARK___$1,nid2__$1,nid1__$1,vec__93507__$1,meta93512));
});})(map__93503,map__93503__$1,vec__93504,vec__93505,nid1,nid2,vec__93506,nx1,ny1,vec__93507,nx2,ny2,vec__93508,cx1,cx2,vec__93509,cy1,cy2,compatible_QMARK_,node_scale))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui93511(nx1,vec__93504,vec__93505,cx1,ny2,vec__93509,p__93491,dynomics$space$ui$make_edge_component,cy2,nx2,cy1,vec__93508,node_scale,vec__93506,ny1,cx2,map__93503__$1,compatible_QMARK_,nid2,nid1,vec__93507,null));
});
dynomics.space.ui.make_curve_component = (function dynomics$space$ui$make_curve_component(zoom,node_scale,nodes,msgs,selected_curves,p__93514){
var vec__93520 = p__93514;
var vec__93521 = cljs.core.nth.call(null,vec__93520,(0),null);
var id = cljs.core.nth.call(null,vec__93521,(0),null);
var node_cp_ids = cljs.core.nth.call(null,vec__93521,(1),null);
var curve_type = cljs.core.nth.call(null,vec__93520,(1),null);
var pth = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378),id], null);
var e = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"path","path",-188191168),pth], null);
if(typeof dynomics.space.ui.t_dynomics$space$ui93522 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui93522 = (function (vec__93521,pth,curve_type,zoom,p__93514,node_cp_ids,node_scale,selected_curves,e,make_curve_component,msgs,nodes,id,vec__93520,meta93523){
this.vec__93521 = vec__93521;
this.pth = pth;
this.curve_type = curve_type;
this.zoom = zoom;
this.p__93514 = p__93514;
this.node_cp_ids = node_cp_ids;
this.node_scale = node_scale;
this.selected_curves = selected_curves;
this.e = e;
this.make_curve_component = make_curve_component;
this.msgs = msgs;
this.nodes = nodes;
this.id = id;
this.vec__93520 = vec__93520;
this.meta93523 = meta93523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui93522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (pth,e,vec__93520,vec__93521,id,node_cp_ids,curve_type){
return (function (_93524,meta93523__$1){
var self__ = this;
var _93524__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui93522(self__.vec__93521,self__.pth,self__.curve_type,self__.zoom,self__.p__93514,self__.node_cp_ids,self__.node_scale,self__.selected_curves,self__.e,self__.make_curve_component,self__.msgs,self__.nodes,self__.id,self__.vec__93520,meta93523__$1));
});})(pth,e,vec__93520,vec__93521,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui93522.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (pth,e,vec__93520,vec__93521,id,node_cp_ids,curve_type){
return (function (_93524){
var self__ = this;
var _93524__$1 = this;
return self__.meta93523;
});})(pth,e,vec__93520,vec__93521,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui93522.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui93522.prototype.om$core$IRender$render$arity$1 = ((function (pth,e,vec__93520,vec__93521,id,node_cp_ids,curve_type){
return (function (this__37314__auto__){
var self__ = this;
var this__37314__auto____$1 = this;
return om.dom.path.call(null,{"key": [cljs.core.str("curve_"),cljs.core.str(self__.id)].join(''), "className": [cljs.core.str("curve "),cljs.core.str((cljs.core.truth_(self__.curve_type)?[cljs.core.str("curve_"),cljs.core.str(self__.curve_type)].join(''):null)),cljs.core.str((cljs.core.truth_(self__.selected_curves.call(null,self__.pth))?" selected_curve":null))].join(''), "strokeWidth": ((self__.node_scale / (5)) / self__.zoom), "onClick": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "onMouseMove": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "d": dynomics.ui.svg.to_svg_path.call(null,dynomics.ui.svg.to_beziers.call(null,cljs.core.map.call(null,self__.nodes,cljs.core.map.call(null,cljs.core.first,self__.node_cp_ids)),cljs.core.map.call(null,cljs.core.last,self__.node_cp_ids)))});
});})(pth,e,vec__93520,vec__93521,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui93522.getBasis = ((function (pth,e,vec__93520,vec__93521,id,node_cp_ids,curve_type){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec__93521","vec__93521",1034949248,null),new cljs.core.Symbol(null,"pth","pth",1900111558,null),new cljs.core.Symbol(null,"curve-type","curve-type",-1863700632,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"p__93514","p__93514",-144137365,null),new cljs.core.Symbol(null,"node-cp-ids","node-cp-ids",296302734,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-curve-component","make-curve-component",-1782572970,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"node-cp-ids","node-cp-ids",296302734,null)], null),new cljs.core.Symbol(null,"curve-type","curve-type",-1863700632,null)], null)], null)))], null)),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"vec__93520","vec__93520",-1781477986,null),new cljs.core.Symbol(null,"meta93523","meta93523",170580216,null)], null);
});})(pth,e,vec__93520,vec__93521,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui93522.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui93522.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui93522";

dynomics.space.ui.t_dynomics$space$ui93522.cljs$lang$ctorPrWriter = ((function (pth,e,vec__93520,vec__93521,id,node_cp_ids,curve_type){
return (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"dynomics.space.ui/t_dynomics$space$ui93522");
});})(pth,e,vec__93520,vec__93521,id,node_cp_ids,curve_type))
;

dynomics.space.ui.__GT_t_dynomics$space$ui93522 = ((function (pth,e,vec__93520,vec__93521,id,node_cp_ids,curve_type){
return (function dynomics$space$ui$make_curve_component_$___GT_t_dynomics$space$ui93522(vec__93521__$1,pth__$1,curve_type__$1,zoom__$1,p__93514__$1,node_cp_ids__$1,node_scale__$1,selected_curves__$1,e__$1,make_curve_component__$1,msgs__$1,nodes__$1,id__$1,vec__93520__$1,meta93523){
return (new dynomics.space.ui.t_dynomics$space$ui93522(vec__93521__$1,pth__$1,curve_type__$1,zoom__$1,p__93514__$1,node_cp_ids__$1,node_scale__$1,selected_curves__$1,e__$1,make_curve_component__$1,msgs__$1,nodes__$1,id__$1,vec__93520__$1,meta93523));
});})(pth,e,vec__93520,vec__93521,id,node_cp_ids,curve_type))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui93522(vec__93521,pth,curve_type,zoom,p__93514,node_cp_ids,node_scale,selected_curves,e,dynomics$space$ui$make_curve_component,msgs,nodes,id,vec__93520,null));
});
dynomics.space.ui.make_open_region_component = (function dynomics$space$ui$make_open_region_component(p__93525){
var map__93538 = p__93525;
var map__93538__$1 = ((((!((map__93538 == null)))?((((map__93538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93538):map__93538);
var node_id = cljs.core.get.call(null,map__93538__$1,new cljs.core.Keyword(null,"node-id","node-id",779482292));
var quadrant_type = cljs.core.get.call(null,map__93538__$1,new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370));
var vec__93539 = cljs.core.get.call(null,map__93538__$1,new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631));
var qx = cljs.core.nth.call(null,vec__93539,(0),null);
var qy = cljs.core.nth.call(null,vec__93539,(1),null);
var vec__93540 = cljs.core.get.call(null,map__93538__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p1 = cljs.core.nth.call(null,vec__93540,(0),null);
var p2 = cljs.core.nth.call(null,vec__93540,(1),null);
var map__93541 = cljs.core.nth.call(null,vec__93540,(2),null);
var map__93541__$1 = ((((!((map__93541 == null)))?((((map__93541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93541):map__93541);
var p3 = map__93541__$1;
var vec__93542 = cljs.core.get.call(null,map__93541__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var x = cljs.core.nth.call(null,vec__93542,(0),null);
var y = cljs.core.nth.call(null,vec__93542,(1),null);
var vec__93543 = cljs.core.get.call(null,map__93541__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__93544 = cljs.core.nth.call(null,vec__93543,(0),null);
var cx = cljs.core.nth.call(null,vec__93544,(0),null);
var cy = cljs.core.nth.call(null,vec__93544,(1),null);
var p4 = cljs.core.nth.call(null,vec__93540,(3),null);
if(typeof dynomics.space.ui.t_dynomics$space$ui93547 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui93547 = (function (x,vec__93542,y,p2,p4,map__93541,p3,qx,vec__93544,vec__93539,vec__93540,qy,p1,p__93525,map__93538,vec__93543,make_open_region_component,cx,cy,node_id,quadrant_type,meta93548){
this.x = x;
this.vec__93542 = vec__93542;
this.y = y;
this.p2 = p2;
this.p4 = p4;
this.map__93541 = map__93541;
this.p3 = p3;
this.qx = qx;
this.vec__93544 = vec__93544;
this.vec__93539 = vec__93539;
this.vec__93540 = vec__93540;
this.qy = qy;
this.p1 = p1;
this.p__93525 = p__93525;
this.map__93538 = map__93538;
this.vec__93543 = vec__93543;
this.make_open_region_component = make_open_region_component;
this.cx = cx;
this.cy = cy;
this.node_id = node_id;
this.quadrant_type = quadrant_type;
this.meta93548 = meta93548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui93547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__93538,map__93538__$1,node_id,quadrant_type,vec__93539,qx,qy,vec__93540,p1,p2,map__93541,map__93541__$1,p3,vec__93542,x,y,vec__93543,vec__93544,cx,cy,p4){
return (function (_93549,meta93548__$1){
var self__ = this;
var _93549__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui93547(self__.x,self__.vec__93542,self__.y,self__.p2,self__.p4,self__.map__93541,self__.p3,self__.qx,self__.vec__93544,self__.vec__93539,self__.vec__93540,self__.qy,self__.p1,self__.p__93525,self__.map__93538,self__.vec__93543,self__.make_open_region_component,self__.cx,self__.cy,self__.node_id,self__.quadrant_type,meta93548__$1));
});})(map__93538,map__93538__$1,node_id,quadrant_type,vec__93539,qx,qy,vec__93540,p1,p2,map__93541,map__93541__$1,p3,vec__93542,x,y,vec__93543,vec__93544,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui93547.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__93538,map__93538__$1,node_id,quadrant_type,vec__93539,qx,qy,vec__93540,p1,p2,map__93541,map__93541__$1,p3,vec__93542,x,y,vec__93543,vec__93544,cx,cy,p4){
return (function (_93549){
var self__ = this;
var _93549__$1 = this;
return self__.meta93548;
});})(map__93538,map__93538__$1,node_id,quadrant_type,vec__93539,qx,qy,vec__93540,p1,p2,map__93541,map__93541__$1,p3,vec__93542,x,y,vec__93543,vec__93544,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui93547.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui93547.prototype.om$core$IRender$render$arity$1 = ((function (map__93538,map__93538__$1,node_id,quadrant_type,vec__93539,qx,qy,vec__93540,p1,p2,map__93541,map__93541__$1,p3,vec__93542,x,y,vec__93543,vec__93544,cx,cy,p4){
return (function (this__37314__auto__){
var self__ = this;
var this__37314__auto____$1 = this;
return om.dom.g.call(null,{},om.dom.defs.call(null,{},om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(self__.node_id),cljs.core.str("_"),cljs.core.str(self__.quadrant_type)].join(''), "gradientUnits": "userSpaceOnUse", "cx": self__.x, "cy": self__.y, "r": 0.04},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,self__.quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,self__.quadrant_type), "stopOpacity": "0"}))),om.dom.path.call(null,{"className": [cljs.core.str("dopen_region "),cljs.core.str([cljs.core.str("dopen_region_type_"),cljs.core.str(self__.quadrant_type)].join(''))].join(''), "fill": [cljs.core.str("url(#"),cljs.core.str([cljs.core.str("qg_"),cljs.core.str(self__.node_id),cljs.core.str("_"),cljs.core.str(self__.quadrant_type)].join('')),cljs.core.str(")")].join(''), "d": [cljs.core.str(dynomics.ui.svg.to_svg_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p1,self__.p2], null))),cljs.core.str(dynomics.ui.svg.to_svg_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,self__.p3,new cljs.core.Keyword(null,"ml","ml",1909675057),"L"),self__.p4], null))),cljs.core.str("z")].join('')}));
});})(map__93538,map__93538__$1,node_id,quadrant_type,vec__93539,qx,qy,vec__93540,p1,p2,map__93541,map__93541__$1,p3,vec__93542,x,y,vec__93543,vec__93544,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui93547.getBasis = ((function (map__93538,map__93538__$1,node_id,quadrant_type,vec__93539,qx,qy,vec__93540,p1,p2,map__93541,map__93541__$1,p3,vec__93542,x,y,vec__93543,vec__93544,cx,cy,p4){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"vec__93542","vec__93542",-568978364,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null),new cljs.core.Symbol(null,"p4","p4",550404713,null),new cljs.core.Symbol(null,"map__93541","map__93541",670584457,null),new cljs.core.Symbol(null,"p3","p3",-923395030,null),new cljs.core.Symbol(null,"qx","qx",876946123,null),new cljs.core.Symbol(null,"vec__93544","vec__93544",-166990707,null),new cljs.core.Symbol(null,"vec__93539","vec__93539",-74557683,null),new cljs.core.Symbol(null,"vec__93540","vec__93540",-110756625,null),new cljs.core.Symbol(null,"qy","qy",1271868883,null),new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p__93525","p__93525",-33475530,null),new cljs.core.Symbol(null,"map__93538","map__93538",259298998,null),new cljs.core.Symbol(null,"vec__93543","vec__93543",490213496,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-open-region-component","make-open-region-component",530106712,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Keyword(null,"node-id","node-id",779482292),new cljs.core.Symbol(null,"quadrant-type","quadrant-type",333980157,null),new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"qx","qx",876946123,null),new cljs.core.Symbol(null,"qy","qy",1271868883,null)], null),new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"cy","cy",-1899104709,null)], null)], null),new cljs.core.Keyword(null,"control-points","control-points",-238538325),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"p3","p3",-923395030,null)], true, false),new cljs.core.Symbol(null,"p4","p4",550404713,null)], null),new cljs.core.Keyword(null,"points","points",-1486596883)], true, false)], null)))], null)),new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"cy","cy",-1899104709,null),new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Symbol(null,"quadrant-type","quadrant-type",333980157,null),new cljs.core.Symbol(null,"meta93548","meta93548",1595903568,null)], null);
});})(map__93538,map__93538__$1,node_id,quadrant_type,vec__93539,qx,qy,vec__93540,p1,p2,map__93541,map__93541__$1,p3,vec__93542,x,y,vec__93543,vec__93544,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui93547.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui93547.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui93547";

dynomics.space.ui.t_dynomics$space$ui93547.cljs$lang$ctorPrWriter = ((function (map__93538,map__93538__$1,node_id,quadrant_type,vec__93539,qx,qy,vec__93540,p1,p2,map__93541,map__93541__$1,p3,vec__93542,x,y,vec__93543,vec__93544,cx,cy,p4){
return (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"dynomics.space.ui/t_dynomics$space$ui93547");
});})(map__93538,map__93538__$1,node_id,quadrant_type,vec__93539,qx,qy,vec__93540,p1,p2,map__93541,map__93541__$1,p3,vec__93542,x,y,vec__93543,vec__93544,cx,cy,p4))
;

dynomics.space.ui.__GT_t_dynomics$space$ui93547 = ((function (map__93538,map__93538__$1,node_id,quadrant_type,vec__93539,qx,qy,vec__93540,p1,p2,map__93541,map__93541__$1,p3,vec__93542,x,y,vec__93543,vec__93544,cx,cy,p4){
return (function dynomics$space$ui$make_open_region_component_$___GT_t_dynomics$space$ui93547(x__$1,vec__93542__$1,y__$1,p2__$1,p4__$1,map__93541__$2,p3__$1,qx__$1,vec__93544__$1,vec__93539__$1,vec__93540__$1,qy__$1,p1__$1,p__93525__$1,map__93538__$2,vec__93543__$1,make_open_region_component__$1,cx__$1,cy__$1,node_id__$1,quadrant_type__$1,meta93548){
return (new dynomics.space.ui.t_dynomics$space$ui93547(x__$1,vec__93542__$1,y__$1,p2__$1,p4__$1,map__93541__$2,p3__$1,qx__$1,vec__93544__$1,vec__93539__$1,vec__93540__$1,qy__$1,p1__$1,p__93525__$1,map__93538__$2,vec__93543__$1,make_open_region_component__$1,cx__$1,cy__$1,node_id__$1,quadrant_type__$1,meta93548));
});})(map__93538,map__93538__$1,node_id,quadrant_type,vec__93539,qx,qy,vec__93540,p1,p2,map__93541,map__93541__$1,p3,vec__93542,x,y,vec__93543,vec__93544,cx,cy,p4))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui93547(x,vec__93542,y,p2,p4,map__93541__$1,p3,qx,vec__93544,vec__93539,vec__93540,qy,p1,p__93525,map__93538__$1,vec__93543,dynomics$space$ui$make_open_region_component,cx,cy,node_id,quadrant_type,null));
});
/**
 * Returns a component for a node and its connections
 */
dynomics.space.ui.make_node_component = (function dynomics$space$ui$make_node_component(p__93550){
var map__93569 = p__93550;
var map__93569__$1 = ((((!((map__93569 == null)))?((((map__93569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93569):map__93569);
var map__93570 = cljs.core.get.call(null,map__93569__$1,new cljs.core.Keyword(null,"node","node",581201198));
var map__93570__$1 = ((((!((map__93570 == null)))?((((map__93570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93570):map__93570);
var node = map__93570__$1;
var vec__93571 = cljs.core.get.call(null,map__93570__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__93571,(0),null);
var y = cljs.core.nth.call(null,vec__93571,(1),null);
var t = cljs.core.get.call(null,map__93570__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var node_type = cljs.core.get.call(null,map__93570__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var id = cljs.core.get.call(null,map__93570__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var connections = cljs.core.get.call(null,map__93570__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var node_scale = cljs.core.get.call(null,map__93569__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var selected_nodes = cljs.core.get.call(null,map__93569__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var active_nodes = cljs.core.get.call(null,map__93569__$1,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891));
var show = cljs.core.get.call(null,map__93569__$1,new cljs.core.Keyword(null,"show","show",-576705889));
var msgs = cljs.core.get.call(null,map__93569__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var zoom = cljs.core.get.call(null,map__93569__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var pth = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id], null);
if(typeof dynomics.space.ui.t_dynomics$space$ui93574 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui93574 = (function (t,connections,x,selected_nodes,active_nodes,map__93569,show,p__93550,pth,y,zoom,make_node_component,vec__93571,node_scale,map__93570,node_type,node,msgs,id,meta93575){
this.t = t;
this.connections = connections;
this.x = x;
this.selected_nodes = selected_nodes;
this.active_nodes = active_nodes;
this.map__93569 = map__93569;
this.show = show;
this.p__93550 = p__93550;
this.pth = pth;
this.y = y;
this.zoom = zoom;
this.make_node_component = make_node_component;
this.vec__93571 = vec__93571;
this.node_scale = node_scale;
this.map__93570 = map__93570;
this.node_type = node_type;
this.node = node;
this.msgs = msgs;
this.id = id;
this.meta93575 = meta93575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui93574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (pth,map__93569,map__93569__$1,map__93570,map__93570__$1,node,vec__93571,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function (_93576,meta93575__$1){
var self__ = this;
var _93576__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui93574(self__.t,self__.connections,self__.x,self__.selected_nodes,self__.active_nodes,self__.map__93569,self__.show,self__.p__93550,self__.pth,self__.y,self__.zoom,self__.make_node_component,self__.vec__93571,self__.node_scale,self__.map__93570,self__.node_type,self__.node,self__.msgs,self__.id,meta93575__$1));
});})(pth,map__93569,map__93569__$1,map__93570,map__93570__$1,node,vec__93571,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
;

dynomics.space.ui.t_dynomics$space$ui93574.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (pth,map__93569,map__93569__$1,map__93570,map__93570__$1,node,vec__93571,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function (_93576){
var self__ = this;
var _93576__$1 = this;
return self__.meta93575;
});})(pth,map__93569,map__93569__$1,map__93570,map__93570__$1,node,vec__93571,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
;

dynomics.space.ui.t_dynomics$space$ui93574.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui93574.prototype.om$core$IRender$render$arity$1 = ((function (pth,map__93569,map__93569__$1,map__93570,map__93570__$1,node,vec__93571,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function (this__37314__auto__){
var self__ = this;
var this__37314__auto____$1 = this;
return om.dom.g.call(null,{"id": [cljs.core.str("node_"),cljs.core.str(self__.id)].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.x,self__.y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),(self__.node_scale / (cljs.core.truth_(self__.zoom)?self__.zoom:(1)))], null)), "className": [cljs.core.str("node_subgraph "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,self__.pth))?"node_selected":null))].join(''), "onClick": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),self__.pth,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),self__.pth,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),self__.pth], null)), "onMouseMove": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),self__.pth], null))},(cljs.core.truth_((function (){var and__25815__auto__ = self__.node_type;
if(cljs.core.truth_(and__25815__auto__)){
return self__.show.call(null,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295));
} else {
return and__25815__auto__;
}
})())?cljs.core.map.call(null,((function (this__37314__auto____$1,pth,map__93569,map__93569__$1,map__93570,map__93570__$1,node,vec__93571,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function (p__93577){
var vec__93578 = p__93577;
var i = cljs.core.nth.call(null,vec__93578,(0),null);
var v = cljs.core.nth.call(null,vec__93578,(1),null);
return om.dom.path.call(null,{"className": [cljs.core.str("quadrant quadrant_type_"),cljs.core.str(cljs.core.get_in.call(null,dynomics.space.core.node_types,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.node_type,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),v], null)))].join(''), "d": "M0,0 v-1 A1,1 0 0,0 -1,0 z", "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),((-90) * i)], null))});
});})(this__37314__auto____$1,pth,map__93569,map__93569__$1,map__93570,map__93570__$1,node,vec__93571,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,(4)),cljs.core.iterate.call(null,cljs.core.partial.call(null,dynomics.space.core.c_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null)))):null),(cljs.core.truth_((function (){var and__25815__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"intersection","intersection",2003891010),self__.t);
if(and__25815__auto__){
return self__.show.call(null,new cljs.core.Keyword(null,"node-types","node-types",1539943342));
} else {
return and__25815__auto__;
}
})())?om.core.build.call(null,dynomics.space.ui.make_node_types_cached_image_component,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.node_type,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),((1) / self__.zoom),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("nntp"),cljs.core.str(self__.id)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)):null),(cljs.core.truth_((function (){var and__25815__auto__ = self__.active_nodes;
if(cljs.core.truth_(and__25815__auto__)){
return self__.active_nodes.call(null,self__.pth);
} else {
return and__25815__auto__;
}
})())?om.dom.g.call(null,{"className": (cljs.core.truth_(cljs.core.some.call(null,self__.selected_nodes,cljs.core.map.call(null,((function (this__37314__auto____$1,pth,map__93569,map__93569__$1,map__93570,map__93570__$1,node,vec__93571,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function (p__93579){
var map__93580 = p__93579;
var map__93580__$1 = ((((!((map__93580 == null)))?((((map__93580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93580):map__93580);
var cid = cljs.core.get.call(null,map__93580__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null);
});})(this__37314__auto____$1,pth,map__93569,map__93569__$1,map__93570,map__93570__$1,node,vec__93571,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
,self__.connections)))?"node_connections_selected":"node_connections")},cljs.core.map.call(null,((function (this__37314__auto____$1,pth,map__93569,map__93569__$1,map__93570,map__93570__$1,node,vec__93571,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function (p__93582){
var map__93583 = p__93582;
var map__93583__$1 = ((((!((map__93583 == null)))?((((map__93583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93583):map__93583);
var vec__93584 = cljs.core.get.call(null,map__93583__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var scx = cljs.core.nth.call(null,vec__93584,(0),null);
var scy = cljs.core.nth.call(null,vec__93584,(1),null);
var cid = cljs.core.get.call(null,map__93583__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vec__93586 = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(self__.zoom / self__.node_scale)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scx,scy], null));
var cx = cljs.core.nth.call(null,vec__93586,(0),null);
var cy = cljs.core.nth.call(null,vec__93586,(1),null);
return om.dom.g.call(null,{"className": [cljs.core.str("node_connection"),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null)))?"node_connections_selected":null))].join(''), "id": [cljs.core.str("node_"),cljs.core.str(self__.id),cljs.core.str("_connection_"),cljs.core.str(cid)].join('')},om.dom.line.call(null,{"x1": (0), "y1": (0), "x2": cx, "y2": cy, "className": "node_connection_line"}),(function (){var path = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null);
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.15, "className": [cljs.core.str("node_connection_dot "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,path))?"node_selected":null))].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),cx,cy], null)), "onClick": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"id","id",-1388402092),cid], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"id","id",-1388402092),cid], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"id","id",-1388402092),cid], null))});
})());
});})(this__37314__auto____$1,pth,map__93569,map__93569__$1,map__93570,map__93570__$1,node,vec__93571,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
,self__.connections)):null),om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.2, "className": [cljs.core.str("node_selector_dot"),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,self__.pth))?"node_selected":null))].join('')}));
});})(pth,map__93569,map__93569__$1,map__93570,map__93570__$1,node,vec__93571,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
;

dynomics.space.ui.t_dynomics$space$ui93574.getBasis = ((function (pth,map__93569,map__93569__$1,map__93570,map__93570__$1,node,vec__93571,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Symbol(null,"map__93569","map__93569",-181444509,null),new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.Symbol(null,"p__93550","p__93550",274870886,null),new cljs.core.Symbol(null,"pth","pth",1900111558,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-component","make-node-component",-1574550003,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Keyword(null,"connections","connections",-2064090887),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"node","node",-2073234571,null)], true, false),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891),new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for a node and its connections"], null)),new cljs.core.Symbol(null,"vec__93571","vec__93571",1837321455,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"map__93570","map__93570",-2132918541,null),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta93575","meta93575",1215463289,null)], null);
});})(pth,map__93569,map__93569__$1,map__93570,map__93570__$1,node,vec__93571,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
;

dynomics.space.ui.t_dynomics$space$ui93574.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui93574.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui93574";

dynomics.space.ui.t_dynomics$space$ui93574.cljs$lang$ctorPrWriter = ((function (pth,map__93569,map__93569__$1,map__93570,map__93570__$1,node,vec__93571,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"dynomics.space.ui/t_dynomics$space$ui93574");
});})(pth,map__93569,map__93569__$1,map__93570,map__93570__$1,node,vec__93571,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
;

dynomics.space.ui.__GT_t_dynomics$space$ui93574 = ((function (pth,map__93569,map__93569__$1,map__93570,map__93570__$1,node,vec__93571,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function dynomics$space$ui$make_node_component_$___GT_t_dynomics$space$ui93574(t__$1,connections__$1,x__$1,selected_nodes__$1,active_nodes__$1,map__93569__$2,show__$1,p__93550__$1,pth__$1,y__$1,zoom__$1,make_node_component__$1,vec__93571__$1,node_scale__$1,map__93570__$2,node_type__$1,node__$1,msgs__$1,id__$1,meta93575){
return (new dynomics.space.ui.t_dynomics$space$ui93574(t__$1,connections__$1,x__$1,selected_nodes__$1,active_nodes__$1,map__93569__$2,show__$1,p__93550__$1,pth__$1,y__$1,zoom__$1,make_node_component__$1,vec__93571__$1,node_scale__$1,map__93570__$2,node_type__$1,node__$1,msgs__$1,id__$1,meta93575));
});})(pth,map__93569,map__93569__$1,map__93570,map__93570__$1,node,vec__93571,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui93574(t,connections,x,selected_nodes,active_nodes,map__93569__$1,show,p__93550,pth,y,zoom,dynomics$space$ui$make_node_component,vec__93571,node_scale,map__93570__$1,node_type,node,msgs,id,null));
});
dynomics.space.ui.test_component = (function dynomics$space$ui$test_component(x){
if(typeof dynomics.space.ui.t_dynomics$space$ui93590 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui93590 = (function (test_component,x,meta93591){
this.test_component = test_component;
this.x = x;
this.meta93591 = meta93591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui93590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_93592,meta93591__$1){
var self__ = this;
var _93592__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui93590(self__.test_component,self__.x,meta93591__$1));
});

dynomics.space.ui.t_dynomics$space$ui93590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_93592){
var self__ = this;
var _93592__$1 = this;
return self__.meta93591;
});

dynomics.space.ui.t_dynomics$space$ui93590.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui93590.prototype.om$core$IRender$render$arity$1 = (function (this__37314__auto__){
var self__ = this;
var this__37314__auto____$1 = this;
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.2, "fill": (((0.5 > Math.random()))?"orange":"green")});
});

dynomics.space.ui.t_dynomics$space$ui93590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"test-component","test-component",1959093538,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)))], null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"meta93591","meta93591",-1213455702,null)], null);
});

dynomics.space.ui.t_dynomics$space$ui93590.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui93590.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui93590";

dynomics.space.ui.t_dynomics$space$ui93590.cljs$lang$ctorPrWriter = (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"dynomics.space.ui/t_dynomics$space$ui93590");
});

dynomics.space.ui.__GT_t_dynomics$space$ui93590 = (function dynomics$space$ui$test_component_$___GT_t_dynomics$space$ui93590(test_component__$1,x__$1,meta93591){
return (new dynomics.space.ui.t_dynomics$space$ui93590(test_component__$1,x__$1,meta93591));
});

}

return (new dynomics.space.ui.t_dynomics$space$ui93590(dynomics$space$ui$test_component,x,null));
});
dynomics.space.ui.make_quadrant_gradients = (function dynomics$space$ui$make_quadrant_gradients(){
var iter__26607__auto__ = (function dynomics$space$ui$make_quadrant_gradients_$_iter__93597(s__93598){
return (new cljs.core.LazySeq(null,(function (){
var s__93598__$1 = s__93598;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__93598__$1);
if(temp__4657__auto__){
var s__93598__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__93598__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__93598__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__93600 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__93599 = (0);
while(true){
if((i__93599 < size__26606__auto__)){
var quadrant_type = cljs.core._nth.call(null,c__26605__auto__,i__93599);
cljs.core.chunk_append.call(null,b__93600,om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(quadrant_type)].join(''), "gradientUnits": "objectBoundingBox", "cx": (0), "cy": (0), "r": (1)},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "0"})));

var G__93601 = (i__93599 + (1));
i__93599 = G__93601;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__93600),dynomics$space$ui$make_quadrant_gradients_$_iter__93597.call(null,cljs.core.chunk_rest.call(null,s__93598__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__93600),null);
}
} else {
var quadrant_type = cljs.core.first.call(null,s__93598__$2);
return cljs.core.cons.call(null,om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(quadrant_type)].join(''), "gradientUnits": "objectBoundingBox", "cx": (0), "cy": (0), "r": (1)},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "0"})),dynomics$space$ui$make_quadrant_gradients_$_iter__93597.call(null,cljs.core.rest.call(null,s__93598__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26607__auto__.call(null,cljs.core.range.call(null,(4)));
});
dynomics.space.ui.make_node_context_menu = (function dynomics$space$ui$make_node_context_menu(p__93602){
var map__93608 = p__93602;
var map__93608__$1 = ((((!((map__93608 == null)))?((((map__93608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93608):map__93608);
var s = map__93608__$1;
var map__93609 = cljs.core.get.call(null,map__93608__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__93609__$1 = ((((!((map__93609 == null)))?((((map__93609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93609):map__93609);
var vec__93610 = cljs.core.get.call(null,map__93609__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__93610,(0),null);
var y = cljs.core.nth.call(null,vec__93610,(1),null);
var sn = cljs.core.get.call(null,map__93608__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var state_updates = cljs.core.get.call(null,map__93608__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__93608__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
return om.dom.circle.call(null,{"id": "add-node-button", "cx": 0.5, "cy": 0.5, "r": 0.1, "fill": "red"});
});
dynomics.space.ui.context_menu_fn = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),dynomics.space.ui.make_node_context_menu], null);
/**
 * Returns a component for the phase-space editor
 */
dynomics.space.ui.make_space_component = (function dynomics$space$ui$make_space_component(p__93613){
var map__93623 = p__93613;
var map__93623__$1 = ((((!((map__93623 == null)))?((((map__93623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93623):map__93623);
var state = map__93623__$1;
var vec__93624 = cljs.core.get.call(null,map__93623__$1,new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331));
var ox = cljs.core.nth.call(null,vec__93624,(0),null);
var oy = cljs.core.nth.call(null,vec__93624,(1),null);
var show = cljs.core.get.call(null,map__93623__$1,new cljs.core.Keyword(null,"show","show",-576705889));
var zoom = cljs.core.get.call(null,map__93623__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var vec__93625 = cljs.core.get.call(null,map__93623__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var px = cljs.core.nth.call(null,vec__93625,(0),null);
var py = cljs.core.nth.call(null,vec__93625,(1),null);
var su = cljs.core.get.call(null,map__93623__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__93623__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var map__93626 = cljs.core.get.call(null,map__93623__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__93626__$1 = ((((!((map__93626 == null)))?((((map__93626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93626):map__93626);
var space = map__93626__$1;
var selected_nodes = cljs.core.get.call(null,map__93626__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var active_nodes = cljs.core.get.call(null,map__93626__$1,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891));
var edges = cljs.core.get.call(null,map__93626__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var curves = cljs.core.get.call(null,map__93626__$1,new cljs.core.Keyword(null,"curves","curves",-510805378));
var curve_types = cljs.core.get.call(null,map__93626__$1,new cljs.core.Keyword(null,"curve-types","curve-types",1650772099));
var node_scale = cljs.core.get.call(null,map__93626__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var regions = cljs.core.get.call(null,map__93626__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var selected_curves = cljs.core.get.call(null,map__93626__$1,new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493));
var compatibilities = cljs.core.get.call(null,map__93626__$1,new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024));
var nodes = cljs.core.get.call(null,map__93626__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var graph = cljs.core.get.call(null,map__93626__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var context_menu = cljs.core.get.call(null,map__93623__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var cf = cljs.core.get.call(null,map__93623__$1,new cljs.core.Keyword(null,"cf","cf",1480736310));
if(typeof dynomics.space.ui.t_dynomics$space$ui93629 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui93629 = (function (selected_nodes,active_nodes,map__93623,map__93626,py,edges,oy,curves,vec__93625,show,zoom,make_space_component,space,curve_types,vec__93624,node_scale,regions,ox,selected_curves,px,state,compatibilities,su,msgs,nodes,graph,context_menu,cf,p__93613,meta93630){
this.selected_nodes = selected_nodes;
this.active_nodes = active_nodes;
this.map__93623 = map__93623;
this.map__93626 = map__93626;
this.py = py;
this.edges = edges;
this.oy = oy;
this.curves = curves;
this.vec__93625 = vec__93625;
this.show = show;
this.zoom = zoom;
this.make_space_component = make_space_component;
this.space = space;
this.curve_types = curve_types;
this.vec__93624 = vec__93624;
this.node_scale = node_scale;
this.regions = regions;
this.ox = ox;
this.selected_curves = selected_curves;
this.px = px;
this.state = state;
this.compatibilities = compatibilities;
this.su = su;
this.msgs = msgs;
this.nodes = nodes;
this.graph = graph;
this.context_menu = context_menu;
this.cf = cf;
this.p__93613 = p__93613;
this.meta93630 = meta93630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui93629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__93623,map__93623__$1,state,vec__93624,ox,oy,show,zoom,vec__93625,px,py,su,msgs,map__93626,map__93626__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (_93631,meta93630__$1){
var self__ = this;
var _93631__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui93629(self__.selected_nodes,self__.active_nodes,self__.map__93623,self__.map__93626,self__.py,self__.edges,self__.oy,self__.curves,self__.vec__93625,self__.show,self__.zoom,self__.make_space_component,self__.space,self__.curve_types,self__.vec__93624,self__.node_scale,self__.regions,self__.ox,self__.selected_curves,self__.px,self__.state,self__.compatibilities,self__.su,self__.msgs,self__.nodes,self__.graph,self__.context_menu,self__.cf,self__.p__93613,meta93630__$1));
});})(map__93623,map__93623__$1,state,vec__93624,ox,oy,show,zoom,vec__93625,px,py,su,msgs,map__93626,map__93626__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui93629.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__93623,map__93623__$1,state,vec__93624,ox,oy,show,zoom,vec__93625,px,py,su,msgs,map__93626,map__93626__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (_93631){
var self__ = this;
var _93631__$1 = this;
return self__.meta93630;
});})(map__93623,map__93623__$1,state,vec__93624,ox,oy,show,zoom,vec__93625,px,py,su,msgs,map__93626,map__93626__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui93629.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui93629.prototype.om$core$IRender$render$arity$1 = ((function (map__93623,map__93623__$1,state,vec__93624,ox,oy,show,zoom,vec__93625,px,py,su,msgs,map__93626,map__93626__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (this__37314__auto__){
var self__ = this;
var this__37314__auto____$1 = this;
return om.dom.div.call(null,{"className": [cljs.core.str("space "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),self__.cf))?"selected_function":"hidden_function"))].join('')},om.dom.svg.call(null,{"image-rendering": "optimizeQuality", "zoomAndPan": false, "preserveAspectRatio": "xMidYMin", "width": "100%", "shape-rendering": "crispEdges", "xmlns": "http://www.w3.org/2000/svg", "className": "space_svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "id": "space", "viewBox": "-1 -1 2 2", "height": "100%"},om.dom.defs.call(null,{"key": "defs"}),om.dom.g.call(null,{"id": "space_root", "key": "space_root", "onMouseMove": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseDown": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseUp": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onWheel": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onContextMenu": ((function (this__37314__auto____$1,map__93623,map__93623__$1,state,vec__93624,ox,oy,show,zoom,vec__93625,px,py,su,msgs,map__93626,map__93626__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (e){
e.preventDefault();

return null;
});})(this__37314__auto____$1,map__93623,map__93623__$1,state,vec__93624,ox,oy,show,zoom,vec__93625,px,py,su,msgs,map__93626,map__93626__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
, "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.ox,self__.oy], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),self__.zoom,self__.zoom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.px,self__.py], null))},om.dom.rect.call(null,{"x": (-16), "y": (-16), "width": (32), "height": (32), "className": "space_background"}),om.dom.rect.call(null,{"x": (0), "y": (0), "width": (1), "height": (1), "className": "space_space"}),om.core.build_all.call(null,cljs.core.partial.call(null,dynomics.space.ui.make_curve_component,self__.zoom,self__.node_scale,self__.nodes,self__.msgs,self__.selected_curves),cljs.core.map.call(null,cljs.core.vector,self__.curves,cljs.core.map.call(null,cljs.core.comp.call(null,self__.curve_types,cljs.core.key),self__.curves))),null,null,om.core.build_all.call(null,dynomics.space.ui.make_edge_component,cljs.core.map.call(null,((function (this__37314__auto____$1,map__93623,map__93623__$1,state,vec__93624,ox,oy,show,zoom,vec__93625,px,py,su,msgs,map__93626,map__93626__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (e){
return cljs.core.assoc.call(null,dynomics.space.core.with_compatibilities.call(null,e,self__.compatibilities),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale);
});})(this__37314__auto____$1,map__93623,map__93623__$1,state,vec__93624,ox,oy,show,zoom,vec__93625,px,py,su,msgs,map__93626,map__93626__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
,cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.edge_points,self__.nodes),self__.edges))),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__37314__auto____$1,map__93623,map__93623__$1,state,vec__93624,ox,oy,show,zoom,vec__93625,px,py,su,msgs,map__93626,map__93626__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (node){
return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),self__.su,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),self__.zoom,new cljs.core.Keyword(null,"show","show",-576705889),self__.show,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891),self__.active_nodes], null),new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''));
});})(this__37314__auto____$1,map__93623,map__93623__$1,state,vec__93624,ox,oy,show,zoom,vec__93625,px,py,su,msgs,map__93626,map__93626__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
,cljs.core.vals.call(null,cljs.core.apply.call(null,cljs.core.dissoc,self__.nodes,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),cljs.core.map.call(null,cljs.core.last,self__.selected_nodes))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__37314__auto____$1,map__93623,map__93623__$1,state,vec__93624,ox,oy,show,zoom,vec__93625,px,py,su,msgs,map__93626,map__93626__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (node){
return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),self__.su,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),self__.zoom,new cljs.core.Keyword(null,"show","show",-576705889),self__.show,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891),self__.active_nodes], null),new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''));
});})(this__37314__auto____$1,map__93623,map__93623__$1,state,vec__93624,ox,oy,show,zoom,vec__93625,px,py,su,msgs,map__93626,map__93626__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
,cljs.core.vals.call(null,cljs.core.select_keys.call(null,self__.nodes,cljs.core.map.call(null,cljs.core.last,self__.selected_nodes)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),null,null)));
});})(map__93623,map__93623__$1,state,vec__93624,ox,oy,show,zoom,vec__93625,px,py,su,msgs,map__93626,map__93626__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui93629.getBasis = ((function (map__93623,map__93623__$1,state,vec__93624,ox,oy,show,zoom,vec__93625,px,py,su,msgs,map__93626,map__93626__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (){
return new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Symbol(null,"map__93623","map__93623",1983404642,null),new cljs.core.Symbol(null,"map__93626","map__93626",2093492866,null),new cljs.core.Symbol(null,"py","py",-1256449853,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"oy","oy",809196068,null),new cljs.core.Symbol(null,"curves","curves",1129726149,null),new cljs.core.Symbol(null,"vec__93625","vec__93625",-1546086234,null),new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-space-component","make-space-component",-638751478,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ox","ox",-2083100366,null),new cljs.core.Symbol(null,"oy","oy",809196068,null)], null),new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"px","px",1921861426,null),new cljs.core.Symbol(null,"py","py",-1256449853,null)], null),new cljs.core.Symbol(null,"su","su",155163255,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"curves","curves",1129726149,null),new cljs.core.Symbol(null,"curve-types","curve-types",-1003663670,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"compatibilities","compatibilities",289068503,null),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null)],[new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"cf","cf",1480736310)])], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the phase-space editor"], null)),new cljs.core.Symbol(null,"space","space",1988665002,null),new cljs.core.Symbol(null,"curve-types","curve-types",-1003663670,null),new cljs.core.Symbol(null,"vec__93624","vec__93624",-628395729,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"ox","ox",-2083100366,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.Symbol(null,"px","px",1921861426,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"compatibilities","compatibilities",289068503,null),new cljs.core.Symbol(null,"su","su",155163255,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Symbol(null,"p__93613","p__93613",2007579711,null),new cljs.core.Symbol(null,"meta93630","meta93630",1700478839,null)], null);
});})(map__93623,map__93623__$1,state,vec__93624,ox,oy,show,zoom,vec__93625,px,py,su,msgs,map__93626,map__93626__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui93629.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui93629.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui93629";

dynomics.space.ui.t_dynomics$space$ui93629.cljs$lang$ctorPrWriter = ((function (map__93623,map__93623__$1,state,vec__93624,ox,oy,show,zoom,vec__93625,px,py,su,msgs,map__93626,map__93626__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"dynomics.space.ui/t_dynomics$space$ui93629");
});})(map__93623,map__93623__$1,state,vec__93624,ox,oy,show,zoom,vec__93625,px,py,su,msgs,map__93626,map__93626__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.__GT_t_dynomics$space$ui93629 = ((function (map__93623,map__93623__$1,state,vec__93624,ox,oy,show,zoom,vec__93625,px,py,su,msgs,map__93626,map__93626__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function dynomics$space$ui$make_space_component_$___GT_t_dynomics$space$ui93629(selected_nodes__$1,active_nodes__$1,map__93623__$2,map__93626__$2,py__$1,edges__$1,oy__$1,curves__$1,vec__93625__$1,show__$1,zoom__$1,make_space_component__$1,space__$1,curve_types__$1,vec__93624__$1,node_scale__$1,regions__$1,ox__$1,selected_curves__$1,px__$1,state__$1,compatibilities__$1,su__$1,msgs__$1,nodes__$1,graph__$1,context_menu__$1,cf__$1,p__93613__$1,meta93630){
return (new dynomics.space.ui.t_dynomics$space$ui93629(selected_nodes__$1,active_nodes__$1,map__93623__$2,map__93626__$2,py__$1,edges__$1,oy__$1,curves__$1,vec__93625__$1,show__$1,zoom__$1,make_space_component__$1,space__$1,curve_types__$1,vec__93624__$1,node_scale__$1,regions__$1,ox__$1,selected_curves__$1,px__$1,state__$1,compatibilities__$1,su__$1,msgs__$1,nodes__$1,graph__$1,context_menu__$1,cf__$1,p__93613__$1,meta93630));
});})(map__93623,map__93623__$1,state,vec__93624,ox,oy,show,zoom,vec__93625,px,py,su,msgs,map__93626,map__93626__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui93629(selected_nodes,active_nodes,map__93623__$1,map__93626__$1,py,edges,oy,curves,vec__93625,show,zoom,dynomics$space$ui$make_space_component,space,curve_types,vec__93624,node_scale,regions,ox,selected_curves,px,state,compatibilities,su,msgs,nodes,graph,context_menu,cf,p__93613,null));
});
