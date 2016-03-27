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
var args290581 = [];
var len__36260__auto___290584 = arguments.length;
var i__36261__auto___290585 = (0);
while(true){
if((i__36261__auto___290585 < len__36260__auto___290584)){
args290581.push((arguments[i__36261__auto___290585]));

var G__290586 = (i__36261__auto___290585 + (1));
i__36261__auto___290585 = G__290586;
continue;
} else {
}
break;
}

var G__290583 = args290581.length;
switch (G__290583) {
case 1:
return dynomics.space.ui.convert_coords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.ui.convert_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args290581.length)].join('')));

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
var args290588 = [];
var len__36260__auto___290605 = arguments.length;
var i__36261__auto___290606 = (0);
while(true){
if((i__36261__auto___290606 < len__36260__auto___290605)){
args290588.push((arguments[i__36261__auto___290606]));

var G__290607 = (i__36261__auto___290606 + (1));
i__36261__auto___290606 = G__290607;
continue;
} else {
}
break;
}

var G__290590 = args290588.length;
switch (G__290590) {
case 0:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args290588.length)].join('')));

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
var seq__290591_290609 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni1.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
)),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni2.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
))));
var chunk__290592_290610 = null;
var count__290593_290611 = (0);
var i__290594_290612 = (0);
while(true){
if((i__290594_290612 < count__290593_290611)){
var vec__290595_290613 = cljs.core._nth.call(null,chunk__290592_290610,i__290594_290612);
var i_290614 = cljs.core.nth.call(null,vec__290595_290613,(0),null);
var j_290615 = cljs.core.nth.call(null,vec__290595_290613,(1),null);
j_290615.removeAttribute("id");

j_290615.removeAttribute("class");

j_290615.removeAttribute("data-reactid");

var ccss_290616__$1 = window.getComputedStyle(i_290614);
var seq__290596_290617 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_290616__$1.length));
var chunk__290597_290618 = null;
var count__290598_290619 = (0);
var i__290599_290620 = (0);
while(true){
if((i__290599_290620 < count__290598_290619)){
var is_290621 = cljs.core._nth.call(null,chunk__290597_290618,i__290599_290620);
var p_290622 = ccss_290616__$1.item(is_290621);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_290622)))){
j_290615.style.setProperty(p_290622,ccss_290616__$1.getPropertyValue(p_290622));
} else {
}

var G__290623 = seq__290596_290617;
var G__290624 = chunk__290597_290618;
var G__290625 = count__290598_290619;
var G__290626 = (i__290599_290620 + (1));
seq__290596_290617 = G__290623;
chunk__290597_290618 = G__290624;
count__290598_290619 = G__290625;
i__290599_290620 = G__290626;
continue;
} else {
var temp__4657__auto___290627 = cljs.core.seq.call(null,seq__290596_290617);
if(temp__4657__auto___290627){
var seq__290596_290628__$1 = temp__4657__auto___290627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__290596_290628__$1)){
var c__36002__auto___290629 = cljs.core.chunk_first.call(null,seq__290596_290628__$1);
var G__290630 = cljs.core.chunk_rest.call(null,seq__290596_290628__$1);
var G__290631 = c__36002__auto___290629;
var G__290632 = cljs.core.count.call(null,c__36002__auto___290629);
var G__290633 = (0);
seq__290596_290617 = G__290630;
chunk__290597_290618 = G__290631;
count__290598_290619 = G__290632;
i__290599_290620 = G__290633;
continue;
} else {
var is_290634 = cljs.core.first.call(null,seq__290596_290628__$1);
var p_290635 = ccss_290616__$1.item(is_290634);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_290635)))){
j_290615.style.setProperty(p_290635,ccss_290616__$1.getPropertyValue(p_290635));
} else {
}

var G__290636 = cljs.core.next.call(null,seq__290596_290628__$1);
var G__290637 = null;
var G__290638 = (0);
var G__290639 = (0);
seq__290596_290617 = G__290636;
chunk__290597_290618 = G__290637;
count__290598_290619 = G__290638;
i__290599_290620 = G__290639;
continue;
}
} else {
}
}
break;
}

var G__290640 = seq__290591_290609;
var G__290641 = chunk__290592_290610;
var G__290642 = count__290593_290611;
var G__290643 = (i__290594_290612 + (1));
seq__290591_290609 = G__290640;
chunk__290592_290610 = G__290641;
count__290593_290611 = G__290642;
i__290594_290612 = G__290643;
continue;
} else {
var temp__4657__auto___290644 = cljs.core.seq.call(null,seq__290591_290609);
if(temp__4657__auto___290644){
var seq__290591_290645__$1 = temp__4657__auto___290644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__290591_290645__$1)){
var c__36002__auto___290646 = cljs.core.chunk_first.call(null,seq__290591_290645__$1);
var G__290647 = cljs.core.chunk_rest.call(null,seq__290591_290645__$1);
var G__290648 = c__36002__auto___290646;
var G__290649 = cljs.core.count.call(null,c__36002__auto___290646);
var G__290650 = (0);
seq__290591_290609 = G__290647;
chunk__290592_290610 = G__290648;
count__290593_290611 = G__290649;
i__290594_290612 = G__290650;
continue;
} else {
var vec__290600_290651 = cljs.core.first.call(null,seq__290591_290645__$1);
var i_290652 = cljs.core.nth.call(null,vec__290600_290651,(0),null);
var j_290653 = cljs.core.nth.call(null,vec__290600_290651,(1),null);
j_290653.removeAttribute("id");

j_290653.removeAttribute("class");

j_290653.removeAttribute("data-reactid");

var ccss_290654__$1 = window.getComputedStyle(i_290652);
var seq__290601_290655 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_290654__$1.length));
var chunk__290602_290656 = null;
var count__290603_290657 = (0);
var i__290604_290658 = (0);
while(true){
if((i__290604_290658 < count__290603_290657)){
var is_290659 = cljs.core._nth.call(null,chunk__290602_290656,i__290604_290658);
var p_290660 = ccss_290654__$1.item(is_290659);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_290660)))){
j_290653.style.setProperty(p_290660,ccss_290654__$1.getPropertyValue(p_290660));
} else {
}

var G__290661 = seq__290601_290655;
var G__290662 = chunk__290602_290656;
var G__290663 = count__290603_290657;
var G__290664 = (i__290604_290658 + (1));
seq__290601_290655 = G__290661;
chunk__290602_290656 = G__290662;
count__290603_290657 = G__290663;
i__290604_290658 = G__290664;
continue;
} else {
var temp__4657__auto___290665__$1 = cljs.core.seq.call(null,seq__290601_290655);
if(temp__4657__auto___290665__$1){
var seq__290601_290666__$1 = temp__4657__auto___290665__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__290601_290666__$1)){
var c__36002__auto___290667 = cljs.core.chunk_first.call(null,seq__290601_290666__$1);
var G__290668 = cljs.core.chunk_rest.call(null,seq__290601_290666__$1);
var G__290669 = c__36002__auto___290667;
var G__290670 = cljs.core.count.call(null,c__36002__auto___290667);
var G__290671 = (0);
seq__290601_290655 = G__290668;
chunk__290602_290656 = G__290669;
count__290603_290657 = G__290670;
i__290604_290658 = G__290671;
continue;
} else {
var is_290672 = cljs.core.first.call(null,seq__290601_290666__$1);
var p_290673 = ccss_290654__$1.item(is_290672);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_290673)))){
j_290653.style.setProperty(p_290673,ccss_290654__$1.getPropertyValue(p_290673));
} else {
}

var G__290674 = cljs.core.next.call(null,seq__290601_290666__$1);
var G__290675 = null;
var G__290676 = (0);
var G__290677 = (0);
seq__290601_290655 = G__290674;
chunk__290602_290656 = G__290675;
count__290603_290657 = G__290676;
i__290604_290658 = G__290677;
continue;
}
} else {
}
}
break;
}

var G__290678 = cljs.core.next.call(null,seq__290591_290645__$1);
var G__290679 = null;
var G__290680 = (0);
var G__290681 = (0);
seq__290591_290609 = G__290678;
chunk__290592_290610 = G__290679;
count__290593_290611 = G__290680;
i__290594_290612 = G__290681;
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
var vec__290684 = cljs.core.subvec.call(null,trajectory,((cljs.core.count.call(null,trajectory) - (1)) - (1)),cljs.core.count.call(null,trajectory));
var p1 = cljs.core.nth.call(null,vec__290684,(0),null);
var p2 = cljs.core.nth.call(null,vec__290684,(1),null);
var v = cljs.core.map.call(null,cljs.core._,p1,p2);
var a = (dynomics.space.core.r2d * (dynomics.space.core.PI2 - dynomics.space.core.angle.call(null,v)));
var a1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);
var a2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
var a3 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null);
var vec__290685 = cljs.core.map.call(null,cljs.core._PLUS_,p2,cljs.core.map.call(null,dynomics.space.core.P.call(null,cljs.core._STAR_,0.505),v));
var ox = cljs.core.nth.call(null,vec__290685,(0),null);
var oy = cljs.core.nth.call(null,vec__290685,(1),null);
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
}),dynomics.space.core.midpoints.call(null,trajectory),cljs.core.map.call(null,(function (p__290688){
var vec__290689 = p__290688;
var p1 = cljs.core.nth.call(null,vec__290689,(0),null);
var p2 = cljs.core.nth.call(null,vec__290689,(1),null);
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
dynomics.space.ui.make_paths = (function dynomics$space$ui$make_paths(p__290690){
var map__290697 = p__290690;
var map__290697__$1 = ((((!((map__290697 == null)))?((((map__290697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290697):map__290697);
var space = map__290697__$1;
var nodes = cljs.core.get.call(null,map__290697__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__290697__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var regions = cljs.core.get.call(null,map__290697__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var node_scale = cljs.core.get.call(null,map__290697__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
cljs.core.println.call(null,"Regions ",regions);

return cljs.core.map.call(null,((function (map__290697,map__290697__$1,space,nodes,edges,regions,node_scale){
return (function (region){
return cljs.core.reduce.call(null,((function (map__290697,map__290697__$1,space,nodes,edges,regions,node_scale){
return (function (beziers,connection){
return cljs.core.conj.call(null,beziers,cljs.core.map.call(null,((function (map__290697,map__290697__$1,space,nodes,edges,regions,node_scale){
return (function (p__290699){
var vec__290700 = p__290699;
var nid1 = cljs.core.nth.call(null,vec__290700,(0),null);
var cid1 = cljs.core.nth.call(null,vec__290700,(1),null);
var vec__290701 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx1 = cljs.core.nth.call(null,vec__290701,(0),null);
var ny1 = cljs.core.nth.call(null,vec__290701,(1),null);
var vec__290702 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx1 = cljs.core.nth.call(null,vec__290702,(0),null);
var cy1 = cljs.core.nth.call(null,vec__290702,(1),null);
return dynomics.ui.svg.make_bezier_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx1 + (node_scale * cx1)),(ny1 + (node_scale * cy1))], null)], null));
});})(map__290697,map__290697__$1,space,nodes,edges,regions,node_scale))
,cljs.core.map.call(null,dynomics.space.core.simplify_connection,connection)));
});})(map__290697,map__290697__$1,space,nodes,edges,regions,node_scale))
,cljs.core.PersistentVector.EMPTY,region);
});})(map__290697,map__290697__$1,space,nodes,edges,regions,node_scale))
,regions);
});
/**
 * Returns a palette of tools
 */
dynomics.space.ui.make_tools_palette_component = (function dynomics$space$ui$make_tools_palette_component(p__290703){
var map__290710 = p__290703;
var map__290710__$1 = ((((!((map__290710 == null)))?((((map__290710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290710):map__290710);
var state = map__290710__$1;
var current_tool = cljs.core.get.call(null,map__290710__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
var tools = cljs.core.get.call(null,map__290710__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
var tools_order = cljs.core.get.call(null,map__290710__$1,new cljs.core.Keyword(null,"tools-order","tools-order",-615877648));
var state_updates = cljs.core.get.call(null,map__290710__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
return om.dom.div.call(null,{"className": "tool_things"},om.dom.div.call(null,{"className": "tool_selectors"},cljs.core.map.call(null,((function (map__290710,map__290710__$1,state,current_tool,tools,tools_order,state_updates){
return (function (p__290712){
var vec__290713 = p__290712;
var tk = cljs.core.nth.call(null,vec__290713,(0),null);
var map__290714 = cljs.core.nth.call(null,vec__290713,(1),null);
var map__290714__$1 = ((((!((map__290714 == null)))?((((map__290714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290714):map__290714);
var description = cljs.core.get.call(null,map__290714__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var icon = cljs.core.get.call(null,map__290714__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var keybinding = cljs.core.get.call(null,map__290714__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
return om.dom.div.call(null,{"className": [cljs.core.str("tool_selector "),cljs.core.str(((cljs.core._EQ_.call(null,tk,current_tool))?"tool_selected":null))].join(''), "title": [cljs.core.str(description),cljs.core.str(" ( "),cljs.core.str((((keybinding instanceof cljs.core.Keyword))?cljs.core.name.call(null,keybinding):keybinding)),cljs.core.str(" )")].join(''), "onMouseDown": ((function (vec__290713,tk,map__290714,map__290714__$1,description,icon,keybinding,map__290710,map__290710__$1,state,current_tool,tools,tools_order,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__290713,tk,map__290714,map__290714__$1,description,icon,keybinding,map__290710,map__290710__$1,state,current_tool,tools,tools_order,state_updates){
return (function (s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),tk);
});})(vec__290713,tk,map__290714,map__290714__$1,description,icon,keybinding,map__290710,map__290710__$1,state,current_tool,tools,tools_order,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tool","tool",-1298696470),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null));

return null;
});})(vec__290713,tk,map__290714,map__290714__$1,description,icon,keybinding,map__290710,map__290710__$1,state,current_tool,tools,tools_order,state_updates))
},icon);
});})(map__290710,map__290710__$1,state,current_tool,tools,tools_order,state_updates))
,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,tools),tools_order))),om.dom.div.call(null,{"className": "current_tool_text", "title": cljs.core.get_in.call(null,tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tool,new cljs.core.Keyword(null,"description","description",-1428560544)], null))},cljs.core.get_in.call(null,tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tool,new cljs.core.Keyword(null,"name","name",1843675177)], null))));
});
/**
 * Returns a node-type component for the node types palette,
 *   which can prerender its SVG to a canvas & therefore
 *   cache the resulting image, to save on components in the DOM if need be.
 */
dynomics.space.ui.make_node_types_cached_component = (function dynomics$space$ui$make_node_types_cached_component(p__290716,owner){
var map__290722 = p__290716;
var map__290722__$1 = ((((!((map__290722 == null)))?((((map__290722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290722):map__290722);
var id = cljs.core.get.call(null,map__290722__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(typeof dynomics.space.ui.t_dynomics$space$ui290724 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui290724 = (function (make_node_types_cached_component,p__290716,owner,map__290722,id,meta290725){
this.make_node_types_cached_component = make_node_types_cached_component;
this.p__290716 = p__290716;
this.owner = owner;
this.map__290722 = map__290722;
this.id = id;
this.meta290725 = meta290725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui290724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__290722,map__290722__$1,id){
return (function (_290726,meta290725__$1){
var self__ = this;
var _290726__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui290724(self__.make_node_types_cached_component,self__.p__290716,self__.owner,self__.map__290722,self__.id,meta290725__$1));
});})(map__290722,map__290722__$1,id))
;

dynomics.space.ui.t_dynomics$space$ui290724.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__290722,map__290722__$1,id){
return (function (_290726){
var self__ = this;
var _290726__$1 = this;
return self__.meta290725;
});})(map__290722,map__290722__$1,id))
;

dynomics.space.ui.t_dynomics$space$ui290724.prototype.om$core$IInitState$ = true;

dynomics.space.ui.t_dynomics$space$ui290724.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__290722,map__290722__$1,id){
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
});})(map__290722,map__290722__$1,id))
;

dynomics.space.ui.t_dynomics$space$ui290724.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui290724.prototype.om$core$IRender$render$arity$1 = ((function (map__290722,map__290722__$1,id){
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
});})(map__290722,map__290722__$1,id))
;

dynomics.space.ui.t_dynomics$space$ui290724.prototype.om$core$IDidMount$ = true;

dynomics.space.ui.t_dynomics$space$ui290724.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__290722,map__290722__$1,id){
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
});})(map__290722,map__290722__$1,id))
;

dynomics.space.ui.t_dynomics$space$ui290724.getBasis = ((function (map__290722,map__290722__$1,id){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-cached-component","make-node-types-cached-component",-655003199,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a node-type component for the node types palette,\n  which can prerender its SVG to a canvas & therefore\n  cache the resulting image, to save on components in the DOM if need be."], null)),new cljs.core.Symbol(null,"p__290716","p__290716",1309262057,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__290722","map__290722",820579638,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta290725","meta290725",-107439425,null)], null);
});})(map__290722,map__290722__$1,id))
;

dynomics.space.ui.t_dynomics$space$ui290724.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui290724.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui290724";

dynomics.space.ui.t_dynomics$space$ui290724.cljs$lang$ctorPrWriter = ((function (map__290722,map__290722__$1,id){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui290724");
});})(map__290722,map__290722__$1,id))
;

dynomics.space.ui.__GT_t_dynomics$space$ui290724 = ((function (map__290722,map__290722__$1,id){
return (function dynomics$space$ui$make_node_types_cached_component_$___GT_t_dynomics$space$ui290724(make_node_types_cached_component__$1,p__290716__$1,owner__$1,map__290722__$2,id__$1,meta290725){
return (new dynomics.space.ui.t_dynomics$space$ui290724(make_node_types_cached_component__$1,p__290716__$1,owner__$1,map__290722__$2,id__$1,meta290725));
});})(map__290722,map__290722__$1,id))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui290724(dynomics$space$ui$make_node_types_cached_component,p__290716,owner,map__290722__$1,id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a node-type component for the node types palette,
 *   which can prerender its SVG to a canvas & therefore
 *   cache the resulting image, to save on components in the DOM if need be.
 */
dynomics.space.ui.make_node_types_cached_image_component = (function dynomics$space$ui$make_node_types_cached_image_component(p__290727,owner){
var map__290735 = p__290727;
var map__290735__$1 = ((((!((map__290735 == null)))?((((map__290735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290735):map__290735);
var node_type = cljs.core.get.call(null,map__290735__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var node_scale = cljs.core.get.call(null,map__290735__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var zoom = cljs.core.get.call(null,map__290735__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
if(typeof dynomics.space.ui.t_dynomics$space$ui290737 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui290737 = (function (make_node_types_cached_image_component,p__290727,owner,map__290735,node_type,node_scale,zoom,meta290738){
this.make_node_types_cached_image_component = make_node_types_cached_image_component;
this.p__290727 = p__290727;
this.owner = owner;
this.map__290735 = map__290735;
this.node_type = node_type;
this.node_scale = node_scale;
this.zoom = zoom;
this.meta290738 = meta290738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui290737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__290735,map__290735__$1,node_type,node_scale,zoom){
return (function (_290739,meta290738__$1){
var self__ = this;
var _290739__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui290737(self__.make_node_types_cached_image_component,self__.p__290727,self__.owner,self__.map__290735,self__.node_type,self__.node_scale,self__.zoom,meta290738__$1));
});})(map__290735,map__290735__$1,node_type,node_scale,zoom))
;

dynomics.space.ui.t_dynomics$space$ui290737.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__290735,map__290735__$1,node_type,node_scale,zoom){
return (function (_290739){
var self__ = this;
var _290739__$1 = this;
return self__.meta290738;
});})(map__290735,map__290735__$1,node_type,node_scale,zoom))
;

dynomics.space.ui.t_dynomics$space$ui290737.prototype.om$core$IInitState$ = true;

dynomics.space.ui.t_dynomics$space$ui290737.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__290735,map__290735__$1,node_type,node_scale,zoom){
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
});})(map__290735,map__290735__$1,node_type,node_scale,zoom))
;

dynomics.space.ui.t_dynomics$space$ui290737.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui290737.prototype.om$core$IRender$render$arity$1 = ((function (map__290735,map__290735__$1,node_type,node_scale,zoom){
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
});})(map__290735,map__290735__$1,node_type,node_scale,zoom))
;

dynomics.space.ui.t_dynomics$space$ui290737.getBasis = ((function (map__290735,map__290735__$1,node_type,node_scale,zoom){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-cached-image-component","make-node-types-cached-image-component",-1391243851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a node-type component for the node types palette,\n  which can prerender its SVG to a canvas & therefore\n  cache the resulting image, to save on components in the DOM if need be."], null)),new cljs.core.Symbol(null,"p__290727","p__290727",-478760897,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__290735","map__290735",-757018905,null),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"meta290738","meta290738",1419932805,null)], null);
});})(map__290735,map__290735__$1,node_type,node_scale,zoom))
;

dynomics.space.ui.t_dynomics$space$ui290737.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui290737.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui290737";

dynomics.space.ui.t_dynomics$space$ui290737.cljs$lang$ctorPrWriter = ((function (map__290735,map__290735__$1,node_type,node_scale,zoom){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui290737");
});})(map__290735,map__290735__$1,node_type,node_scale,zoom))
;

dynomics.space.ui.__GT_t_dynomics$space$ui290737 = ((function (map__290735,map__290735__$1,node_type,node_scale,zoom){
return (function dynomics$space$ui$make_node_types_cached_image_component_$___GT_t_dynomics$space$ui290737(make_node_types_cached_image_component__$1,p__290727__$1,owner__$1,map__290735__$2,node_type__$1,node_scale__$1,zoom__$1,meta290738){
return (new dynomics.space.ui.t_dynomics$space$ui290737(make_node_types_cached_image_component__$1,p__290727__$1,owner__$1,map__290735__$2,node_type__$1,node_scale__$1,zoom__$1,meta290738));
});})(map__290735,map__290735__$1,node_type,node_scale,zoom))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui290737(dynomics$space$ui$make_node_types_cached_image_component,p__290727,owner,map__290735__$1,node_type,node_scale,zoom,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a component for the node types palette
 */
dynomics.space.ui.make_node_types_palette_component = (function dynomics$space$ui$make_node_types_palette_component(p__290742){
var map__290751 = p__290742;
var map__290751__$1 = ((((!((map__290751 == null)))?((((map__290751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290751):map__290751);
var state = map__290751__$1;
var component = cljs.core.get.call(null,map__290751__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var state_updates = cljs.core.get.call(null,map__290751__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__290751__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
if(typeof dynomics.space.ui.t_dynomics$space$ui290753 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui290753 = (function (make_node_types_palette_component,p__290742,map__290751,state,component,state_updates,msgs,meta290754){
this.make_node_types_palette_component = make_node_types_palette_component;
this.p__290742 = p__290742;
this.map__290751 = map__290751;
this.state = state;
this.component = component;
this.state_updates = state_updates;
this.msgs = msgs;
this.meta290754 = meta290754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui290753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__290751,map__290751__$1,state,component,state_updates,msgs){
return (function (_290755,meta290754__$1){
var self__ = this;
var _290755__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui290753(self__.make_node_types_palette_component,self__.p__290742,self__.map__290751,self__.state,self__.component,self__.state_updates,self__.msgs,meta290754__$1));
});})(map__290751,map__290751__$1,state,component,state_updates,msgs))
;

dynomics.space.ui.t_dynomics$space$ui290753.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__290751,map__290751__$1,state,component,state_updates,msgs){
return (function (_290755){
var self__ = this;
var _290755__$1 = this;
return self__.meta290754;
});})(map__290751,map__290751__$1,state,component,state_updates,msgs))
;

dynomics.space.ui.t_dynomics$space$ui290753.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui290753.prototype.om$core$IRender$render$arity$1 = ((function (map__290751,map__290751__$1,state,component,state_updates,msgs){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"className": "node_types"},cljs.core.map.call(null,((function (this$__$1,map__290751,map__290751__$1,state,component,state_updates,msgs){
return (function (p__290756){
var map__290757 = p__290756;
var map__290757__$1 = ((((!((map__290757 == null)))?((((map__290757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290757):map__290757);
var id = cljs.core.get.call(null,map__290757__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var stability = cljs.core.get.call(null,map__290757__$1,new cljs.core.Keyword(null,"stability","stability",1733225509));
var type = cljs.core.get.call(null,map__290757__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return om.dom.div.call(null,{"className": [cljs.core.str("node_type_selector")].join(''), "title": [cljs.core.str("Set selected nodes to "),cljs.core.str(id),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,stability)),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,type))].join(''), "draggable": true, "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)), "onMouseMove": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null))},om.core.build.call(null,dynomics.space.ui.make_node_types_cached_component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("ntp"),cljs.core.str(id)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),null);
});})(this$__$1,map__290751,map__290751__$1,state,component,state_updates,msgs))
,cljs.core.vals.call(null,dynomics.space.core.node_types)));
});})(map__290751,map__290751__$1,state,component,state_updates,msgs))
;

dynomics.space.ui.t_dynomics$space$ui290753.getBasis = ((function (map__290751,map__290751__$1,state,component,state_updates,msgs){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-palette-component","make-node-types-palette-component",54407202,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the node types palette"], null)),new cljs.core.Symbol(null,"p__290742","p__290742",-2004074434,null),new cljs.core.Symbol(null,"map__290751","map__290751",1690734292,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"meta290754","meta290754",-310684287,null)], null);
});})(map__290751,map__290751__$1,state,component,state_updates,msgs))
;

dynomics.space.ui.t_dynomics$space$ui290753.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui290753.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui290753";

dynomics.space.ui.t_dynomics$space$ui290753.cljs$lang$ctorPrWriter = ((function (map__290751,map__290751__$1,state,component,state_updates,msgs){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui290753");
});})(map__290751,map__290751__$1,state,component,state_updates,msgs))
;

dynomics.space.ui.__GT_t_dynomics$space$ui290753 = ((function (map__290751,map__290751__$1,state,component,state_updates,msgs){
return (function dynomics$space$ui$make_node_types_palette_component_$___GT_t_dynomics$space$ui290753(make_node_types_palette_component__$1,p__290742__$1,map__290751__$2,state__$1,component__$1,state_updates__$1,msgs__$1,meta290754){
return (new dynomics.space.ui.t_dynomics$space$ui290753(make_node_types_palette_component__$1,p__290742__$1,map__290751__$2,state__$1,component__$1,state_updates__$1,msgs__$1,meta290754));
});})(map__290751,map__290751__$1,state,component,state_updates,msgs))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui290753(dynomics$space$ui$make_node_types_palette_component,p__290742,map__290751__$1,state,component,state_updates,msgs,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a component for an edge
 */
dynomics.space.ui.make_edge_component = (function dynomics$space$ui$make_edge_component(p__290759){
var map__290771 = p__290759;
var map__290771__$1 = ((((!((map__290771 == null)))?((((map__290771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290771):map__290771);
var vec__290772 = cljs.core.get.call(null,map__290771__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__290773 = cljs.core.nth.call(null,vec__290772,(0),null);
var nid1 = cljs.core.nth.call(null,vec__290773,(0),null);
var nid2 = cljs.core.nth.call(null,vec__290773,(1),null);
var vec__290774 = cljs.core.nth.call(null,vec__290772,(1),null);
var nx1 = cljs.core.nth.call(null,vec__290774,(0),null);
var ny1 = cljs.core.nth.call(null,vec__290774,(1),null);
var vec__290775 = cljs.core.nth.call(null,vec__290772,(2),null);
var nx2 = cljs.core.nth.call(null,vec__290775,(0),null);
var ny2 = cljs.core.nth.call(null,vec__290775,(1),null);
var vec__290776 = cljs.core.nth.call(null,vec__290772,(3),null);
var cx1 = cljs.core.nth.call(null,vec__290776,(0),null);
var cx2 = cljs.core.nth.call(null,vec__290776,(1),null);
var vec__290777 = cljs.core.nth.call(null,vec__290772,(4),null);
var cy1 = cljs.core.nth.call(null,vec__290777,(0),null);
var cy2 = cljs.core.nth.call(null,vec__290777,(1),null);
var compatible_QMARK_ = cljs.core.get.call(null,map__290771__$1,new cljs.core.Keyword(null,"compatible?","compatible?",923422575));
var node_scale = cljs.core.get.call(null,map__290771__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
if(typeof dynomics.space.ui.t_dynomics$space$ui290779 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui290779 = (function (p__290759,nx1,cx1,ny2,make_edge_component,cy2,vec__290772,nx2,vec__290773,cy1,node_scale,ny1,cx2,vec__290777,map__290771,vec__290774,vec__290776,compatible_QMARK_,vec__290775,nid2,nid1,meta290780){
this.p__290759 = p__290759;
this.nx1 = nx1;
this.cx1 = cx1;
this.ny2 = ny2;
this.make_edge_component = make_edge_component;
this.cy2 = cy2;
this.vec__290772 = vec__290772;
this.nx2 = nx2;
this.vec__290773 = vec__290773;
this.cy1 = cy1;
this.node_scale = node_scale;
this.ny1 = ny1;
this.cx2 = cx2;
this.vec__290777 = vec__290777;
this.map__290771 = map__290771;
this.vec__290774 = vec__290774;
this.vec__290776 = vec__290776;
this.compatible_QMARK_ = compatible_QMARK_;
this.vec__290775 = vec__290775;
this.nid2 = nid2;
this.nid1 = nid1;
this.meta290780 = meta290780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui290779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__290771,map__290771__$1,vec__290772,vec__290773,nid1,nid2,vec__290774,nx1,ny1,vec__290775,nx2,ny2,vec__290776,cx1,cx2,vec__290777,cy1,cy2,compatible_QMARK_,node_scale){
return (function (_290781,meta290780__$1){
var self__ = this;
var _290781__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui290779(self__.p__290759,self__.nx1,self__.cx1,self__.ny2,self__.make_edge_component,self__.cy2,self__.vec__290772,self__.nx2,self__.vec__290773,self__.cy1,self__.node_scale,self__.ny1,self__.cx2,self__.vec__290777,self__.map__290771,self__.vec__290774,self__.vec__290776,self__.compatible_QMARK_,self__.vec__290775,self__.nid2,self__.nid1,meta290780__$1));
});})(map__290771,map__290771__$1,vec__290772,vec__290773,nid1,nid2,vec__290774,nx1,ny1,vec__290775,nx2,ny2,vec__290776,cx1,cx2,vec__290777,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui290779.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__290771,map__290771__$1,vec__290772,vec__290773,nid1,nid2,vec__290774,nx1,ny1,vec__290775,nx2,ny2,vec__290776,cx1,cx2,vec__290777,cy1,cy2,compatible_QMARK_,node_scale){
return (function (_290781){
var self__ = this;
var _290781__$1 = this;
return self__.meta290780;
});})(map__290771,map__290771__$1,vec__290772,vec__290773,nid1,nid2,vec__290774,nx1,ny1,vec__290775,nx2,ny2,vec__290776,cx1,cx2,vec__290777,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui290779.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui290779.prototype.om$core$IRender$render$arity$1 = ((function (map__290771,map__290771__$1,vec__290772,vec__290773,nid1,nid2,vec__290774,nx1,ny1,vec__290775,nx2,ny2,vec__290776,cx1,cx2,vec__290777,cy1,cy2,compatible_QMARK_,node_scale){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.path.call(null,{"key": [cljs.core.str("edge_"),cljs.core.str(self__.nid1),cljs.core.str("_"),cljs.core.str(self__.nid2)].join(''), "className": [cljs.core.str("edge "),cljs.core.str((cljs.core.truth_(self__.compatible_QMARK_)?"compatible_edge":null))].join(''), "d": dynomics.ui.svg.to_svg_path.call(null,cljs.core.map.call(null,dynomics.ui.svg.make_bezier_point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx1,self__.ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.cx1,self__.cy1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx2,self__.ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.cx2,self__.cy2], null)], null)], null)))});
});})(map__290771,map__290771__$1,vec__290772,vec__290773,nid1,nid2,vec__290774,nx1,ny1,vec__290775,nx2,ny2,vec__290776,cx1,cx2,vec__290777,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui290779.getBasis = ((function (map__290771,map__290771__$1,vec__290772,vec__290773,nid1,nid2,vec__290774,nx1,ny1,vec__290775,nx2,ny2,vec__290776,cx1,cx2,vec__290777,cy1,cy2,compatible_QMARK_,node_scale){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__290759","p__290759",196957536,null),new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-edge-component","make-edge-component",-530385559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null)], null)], null),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Symbol(null,"compatible?","compatible?",-1731013194,null),new cljs.core.Keyword(null,"compatible?","compatible?",923422575),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for an edge"], null)),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null),new cljs.core.Symbol(null,"vec__290772","vec__290772",-1437434996,null),new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"vec__290773","vec__290773",998362543,null),new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null),new cljs.core.Symbol(null,"vec__290777","vec__290777",941277586,null),new cljs.core.Symbol(null,"map__290771","map__290771",-1808630317,null),new cljs.core.Symbol(null,"vec__290774","vec__290774",-1141524268,null),new cljs.core.Symbol(null,"vec__290776","vec__290776",569889589,null),new cljs.core.Symbol(null,"compatible?","compatible?",-1731013194,null),new cljs.core.Symbol(null,"vec__290775","vec__290775",-499707621,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null),new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"meta290780","meta290780",1616441251,null)], null);
});})(map__290771,map__290771__$1,vec__290772,vec__290773,nid1,nid2,vec__290774,nx1,ny1,vec__290775,nx2,ny2,vec__290776,cx1,cx2,vec__290777,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui290779.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui290779.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui290779";

dynomics.space.ui.t_dynomics$space$ui290779.cljs$lang$ctorPrWriter = ((function (map__290771,map__290771__$1,vec__290772,vec__290773,nid1,nid2,vec__290774,nx1,ny1,vec__290775,nx2,ny2,vec__290776,cx1,cx2,vec__290777,cy1,cy2,compatible_QMARK_,node_scale){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui290779");
});})(map__290771,map__290771__$1,vec__290772,vec__290773,nid1,nid2,vec__290774,nx1,ny1,vec__290775,nx2,ny2,vec__290776,cx1,cx2,vec__290777,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.__GT_t_dynomics$space$ui290779 = ((function (map__290771,map__290771__$1,vec__290772,vec__290773,nid1,nid2,vec__290774,nx1,ny1,vec__290775,nx2,ny2,vec__290776,cx1,cx2,vec__290777,cy1,cy2,compatible_QMARK_,node_scale){
return (function dynomics$space$ui$make_edge_component_$___GT_t_dynomics$space$ui290779(p__290759__$1,nx1__$1,cx1__$1,ny2__$1,make_edge_component__$1,cy2__$1,vec__290772__$1,nx2__$1,vec__290773__$1,cy1__$1,node_scale__$1,ny1__$1,cx2__$1,vec__290777__$1,map__290771__$2,vec__290774__$1,vec__290776__$1,compatible_QMARK___$1,vec__290775__$1,nid2__$1,nid1__$1,meta290780){
return (new dynomics.space.ui.t_dynomics$space$ui290779(p__290759__$1,nx1__$1,cx1__$1,ny2__$1,make_edge_component__$1,cy2__$1,vec__290772__$1,nx2__$1,vec__290773__$1,cy1__$1,node_scale__$1,ny1__$1,cx2__$1,vec__290777__$1,map__290771__$2,vec__290774__$1,vec__290776__$1,compatible_QMARK___$1,vec__290775__$1,nid2__$1,nid1__$1,meta290780));
});})(map__290771,map__290771__$1,vec__290772,vec__290773,nid1,nid2,vec__290774,nx1,ny1,vec__290775,nx2,ny2,vec__290776,cx1,cx2,vec__290777,cy1,cy2,compatible_QMARK_,node_scale))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui290779(p__290759,nx1,cx1,ny2,dynomics$space$ui$make_edge_component,cy2,vec__290772,nx2,vec__290773,cy1,node_scale,ny1,cx2,vec__290777,map__290771__$1,vec__290774,vec__290776,compatible_QMARK_,vec__290775,nid2,nid1,null));
});
dynomics.space.ui.make_curve_component = (function dynomics$space$ui$make_curve_component(zoom,node_scale,nodes,msgs,selected_curves,p__290782){
var vec__290788 = p__290782;
var vec__290789 = cljs.core.nth.call(null,vec__290788,(0),null);
var id = cljs.core.nth.call(null,vec__290789,(0),null);
var node_cp_ids = cljs.core.nth.call(null,vec__290789,(1),null);
var curve_type = cljs.core.nth.call(null,vec__290788,(1),null);
var pth = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378),id], null);
var e = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"path","path",-188191168),pth], null);
if(typeof dynomics.space.ui.t_dynomics$space$ui290790 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui290790 = (function (pth,curve_type,zoom,node_cp_ids,node_scale,selected_curves,vec__290789,vec__290788,e,make_curve_component,p__290782,msgs,nodes,id,meta290791){
this.pth = pth;
this.curve_type = curve_type;
this.zoom = zoom;
this.node_cp_ids = node_cp_ids;
this.node_scale = node_scale;
this.selected_curves = selected_curves;
this.vec__290789 = vec__290789;
this.vec__290788 = vec__290788;
this.e = e;
this.make_curve_component = make_curve_component;
this.p__290782 = p__290782;
this.msgs = msgs;
this.nodes = nodes;
this.id = id;
this.meta290791 = meta290791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui290790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (pth,e,vec__290788,vec__290789,id,node_cp_ids,curve_type){
return (function (_290792,meta290791__$1){
var self__ = this;
var _290792__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui290790(self__.pth,self__.curve_type,self__.zoom,self__.node_cp_ids,self__.node_scale,self__.selected_curves,self__.vec__290789,self__.vec__290788,self__.e,self__.make_curve_component,self__.p__290782,self__.msgs,self__.nodes,self__.id,meta290791__$1));
});})(pth,e,vec__290788,vec__290789,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui290790.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (pth,e,vec__290788,vec__290789,id,node_cp_ids,curve_type){
return (function (_290792){
var self__ = this;
var _290792__$1 = this;
return self__.meta290791;
});})(pth,e,vec__290788,vec__290789,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui290790.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui290790.prototype.om$core$IRender$render$arity$1 = ((function (pth,e,vec__290788,vec__290789,id,node_cp_ids,curve_type){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.path.call(null,{"key": [cljs.core.str("curve_"),cljs.core.str(self__.id)].join(''), "className": [cljs.core.str("curve "),cljs.core.str((cljs.core.truth_(self__.curve_type)?[cljs.core.str("curve_"),cljs.core.str(self__.curve_type)].join(''):null)),cljs.core.str((cljs.core.truth_(self__.selected_curves.call(null,self__.pth))?" selected_curve":null))].join(''), "strokeWidth": ((self__.node_scale / (5)) / self__.zoom), "onClick": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "onMouseMove": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "d": dynomics.ui.svg.to_svg_path.call(null,dynomics.ui.svg.to_beziers.call(null,cljs.core.map.call(null,self__.nodes,cljs.core.map.call(null,cljs.core.first,self__.node_cp_ids)),cljs.core.map.call(null,cljs.core.last,self__.node_cp_ids)))});
});})(pth,e,vec__290788,vec__290789,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui290790.getBasis = ((function (pth,e,vec__290788,vec__290789,id,node_cp_ids,curve_type){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pth","pth",1900111558,null),new cljs.core.Symbol(null,"curve-type","curve-type",-1863700632,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"node-cp-ids","node-cp-ids",296302734,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.Symbol(null,"vec__290789","vec__290789",-2043185612,null),new cljs.core.Symbol(null,"vec__290788","vec__290788",936720629,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-curve-component","make-curve-component",-1782572970,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"node-cp-ids","node-cp-ids",296302734,null)], null),new cljs.core.Symbol(null,"curve-type","curve-type",-1863700632,null)], null)], null)))], null)),new cljs.core.Symbol(null,"p__290782","p__290782",-337346761,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta290791","meta290791",1927172953,null)], null);
});})(pth,e,vec__290788,vec__290789,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui290790.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui290790.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui290790";

dynomics.space.ui.t_dynomics$space$ui290790.cljs$lang$ctorPrWriter = ((function (pth,e,vec__290788,vec__290789,id,node_cp_ids,curve_type){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui290790");
});})(pth,e,vec__290788,vec__290789,id,node_cp_ids,curve_type))
;

dynomics.space.ui.__GT_t_dynomics$space$ui290790 = ((function (pth,e,vec__290788,vec__290789,id,node_cp_ids,curve_type){
return (function dynomics$space$ui$make_curve_component_$___GT_t_dynomics$space$ui290790(pth__$1,curve_type__$1,zoom__$1,node_cp_ids__$1,node_scale__$1,selected_curves__$1,vec__290789__$1,vec__290788__$1,e__$1,make_curve_component__$1,p__290782__$1,msgs__$1,nodes__$1,id__$1,meta290791){
return (new dynomics.space.ui.t_dynomics$space$ui290790(pth__$1,curve_type__$1,zoom__$1,node_cp_ids__$1,node_scale__$1,selected_curves__$1,vec__290789__$1,vec__290788__$1,e__$1,make_curve_component__$1,p__290782__$1,msgs__$1,nodes__$1,id__$1,meta290791));
});})(pth,e,vec__290788,vec__290789,id,node_cp_ids,curve_type))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui290790(pth,curve_type,zoom,node_cp_ids,node_scale,selected_curves,vec__290789,vec__290788,e,dynomics$space$ui$make_curve_component,p__290782,msgs,nodes,id,null));
});
dynomics.space.ui.make_open_region_component = (function dynomics$space$ui$make_open_region_component(p__290793){
var map__290806 = p__290793;
var map__290806__$1 = ((((!((map__290806 == null)))?((((map__290806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290806):map__290806);
var node_id = cljs.core.get.call(null,map__290806__$1,new cljs.core.Keyword(null,"node-id","node-id",779482292));
var quadrant_type = cljs.core.get.call(null,map__290806__$1,new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370));
var vec__290807 = cljs.core.get.call(null,map__290806__$1,new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631));
var qx = cljs.core.nth.call(null,vec__290807,(0),null);
var qy = cljs.core.nth.call(null,vec__290807,(1),null);
var vec__290808 = cljs.core.get.call(null,map__290806__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p1 = cljs.core.nth.call(null,vec__290808,(0),null);
var p2 = cljs.core.nth.call(null,vec__290808,(1),null);
var map__290809 = cljs.core.nth.call(null,vec__290808,(2),null);
var map__290809__$1 = ((((!((map__290809 == null)))?((((map__290809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290809):map__290809);
var p3 = map__290809__$1;
var vec__290810 = cljs.core.get.call(null,map__290809__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var x = cljs.core.nth.call(null,vec__290810,(0),null);
var y = cljs.core.nth.call(null,vec__290810,(1),null);
var vec__290811 = cljs.core.get.call(null,map__290809__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__290812 = cljs.core.nth.call(null,vec__290811,(0),null);
var cx = cljs.core.nth.call(null,vec__290812,(0),null);
var cy = cljs.core.nth.call(null,vec__290812,(1),null);
var p4 = cljs.core.nth.call(null,vec__290808,(3),null);
if(typeof dynomics.space.ui.t_dynomics$space$ui290815 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui290815 = (function (map__290809,vec__290811,x,y,vec__290810,p2,p4,p3,qx,p__290793,vec__290807,vec__290812,qy,p1,make_open_region_component,vec__290808,cx,cy,map__290806,node_id,quadrant_type,meta290816){
this.map__290809 = map__290809;
this.vec__290811 = vec__290811;
this.x = x;
this.y = y;
this.vec__290810 = vec__290810;
this.p2 = p2;
this.p4 = p4;
this.p3 = p3;
this.qx = qx;
this.p__290793 = p__290793;
this.vec__290807 = vec__290807;
this.vec__290812 = vec__290812;
this.qy = qy;
this.p1 = p1;
this.make_open_region_component = make_open_region_component;
this.vec__290808 = vec__290808;
this.cx = cx;
this.cy = cy;
this.map__290806 = map__290806;
this.node_id = node_id;
this.quadrant_type = quadrant_type;
this.meta290816 = meta290816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui290815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__290806,map__290806__$1,node_id,quadrant_type,vec__290807,qx,qy,vec__290808,p1,p2,map__290809,map__290809__$1,p3,vec__290810,x,y,vec__290811,vec__290812,cx,cy,p4){
return (function (_290817,meta290816__$1){
var self__ = this;
var _290817__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui290815(self__.map__290809,self__.vec__290811,self__.x,self__.y,self__.vec__290810,self__.p2,self__.p4,self__.p3,self__.qx,self__.p__290793,self__.vec__290807,self__.vec__290812,self__.qy,self__.p1,self__.make_open_region_component,self__.vec__290808,self__.cx,self__.cy,self__.map__290806,self__.node_id,self__.quadrant_type,meta290816__$1));
});})(map__290806,map__290806__$1,node_id,quadrant_type,vec__290807,qx,qy,vec__290808,p1,p2,map__290809,map__290809__$1,p3,vec__290810,x,y,vec__290811,vec__290812,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui290815.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__290806,map__290806__$1,node_id,quadrant_type,vec__290807,qx,qy,vec__290808,p1,p2,map__290809,map__290809__$1,p3,vec__290810,x,y,vec__290811,vec__290812,cx,cy,p4){
return (function (_290817){
var self__ = this;
var _290817__$1 = this;
return self__.meta290816;
});})(map__290806,map__290806__$1,node_id,quadrant_type,vec__290807,qx,qy,vec__290808,p1,p2,map__290809,map__290809__$1,p3,vec__290810,x,y,vec__290811,vec__290812,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui290815.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui290815.prototype.om$core$IRender$render$arity$1 = ((function (map__290806,map__290806__$1,node_id,quadrant_type,vec__290807,qx,qy,vec__290808,p1,p2,map__290809,map__290809__$1,p3,vec__290810,x,y,vec__290811,vec__290812,cx,cy,p4){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.g.call(null,{},om.dom.defs.call(null,{},om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(self__.node_id),cljs.core.str("_"),cljs.core.str(self__.quadrant_type)].join(''), "gradientUnits": "userSpaceOnUse", "cx": self__.x, "cy": self__.y, "r": 0.04},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,self__.quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,self__.quadrant_type), "stopOpacity": "0"}))),om.dom.path.call(null,{"className": [cljs.core.str("dopen_region "),cljs.core.str([cljs.core.str("dopen_region_type_"),cljs.core.str(self__.quadrant_type)].join(''))].join(''), "fill": [cljs.core.str("url(#"),cljs.core.str([cljs.core.str("qg_"),cljs.core.str(self__.node_id),cljs.core.str("_"),cljs.core.str(self__.quadrant_type)].join('')),cljs.core.str(")")].join(''), "d": [cljs.core.str(dynomics.ui.svg.to_svg_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p1,self__.p2], null))),cljs.core.str(dynomics.ui.svg.to_svg_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,self__.p3,new cljs.core.Keyword(null,"ml","ml",1909675057),"L"),self__.p4], null))),cljs.core.str("z")].join('')}));
});})(map__290806,map__290806__$1,node_id,quadrant_type,vec__290807,qx,qy,vec__290808,p1,p2,map__290809,map__290809__$1,p3,vec__290810,x,y,vec__290811,vec__290812,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui290815.getBasis = ((function (map__290806,map__290806__$1,node_id,quadrant_type,vec__290807,qx,qy,vec__290808,p1,p2,map__290809,map__290809__$1,p3,vec__290810,x,y,vec__290811,vec__290812,cx,cy,p4){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map__290809","map__290809",2061815904,null),new cljs.core.Symbol(null,"vec__290811","vec__290811",1369481024,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"vec__290810","vec__290810",1812729767,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null),new cljs.core.Symbol(null,"p4","p4",550404713,null),new cljs.core.Symbol(null,"p3","p3",-923395030,null),new cljs.core.Symbol(null,"qx","qx",876946123,null),new cljs.core.Symbol(null,"p__290793","p__290793",824425388,null),new cljs.core.Symbol(null,"vec__290807","vec__290807",487066349,null),new cljs.core.Symbol(null,"vec__290812","vec__290812",-1706002510,null),new cljs.core.Symbol(null,"qy","qy",1271868883,null),new cljs.core.Symbol(null,"p1","p1",703771573,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-open-region-component","make-open-region-component",530106712,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Keyword(null,"node-id","node-id",779482292),new cljs.core.Symbol(null,"quadrant-type","quadrant-type",333980157,null),new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"qx","qx",876946123,null),new cljs.core.Symbol(null,"qy","qy",1271868883,null)], null),new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"cy","cy",-1899104709,null)], null)], null),new cljs.core.Keyword(null,"control-points","control-points",-238538325),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"p3","p3",-923395030,null)], true, false),new cljs.core.Symbol(null,"p4","p4",550404713,null)], null),new cljs.core.Keyword(null,"points","points",-1486596883)], true, false)], null)))], null)),new cljs.core.Symbol(null,"vec__290808","vec__290808",-1928348808,null),new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"cy","cy",-1899104709,null),new cljs.core.Symbol(null,"map__290806","map__290806",-1770899749,null),new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Symbol(null,"quadrant-type","quadrant-type",333980157,null),new cljs.core.Symbol(null,"meta290816","meta290816",-1678228909,null)], null);
});})(map__290806,map__290806__$1,node_id,quadrant_type,vec__290807,qx,qy,vec__290808,p1,p2,map__290809,map__290809__$1,p3,vec__290810,x,y,vec__290811,vec__290812,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui290815.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui290815.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui290815";

dynomics.space.ui.t_dynomics$space$ui290815.cljs$lang$ctorPrWriter = ((function (map__290806,map__290806__$1,node_id,quadrant_type,vec__290807,qx,qy,vec__290808,p1,p2,map__290809,map__290809__$1,p3,vec__290810,x,y,vec__290811,vec__290812,cx,cy,p4){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui290815");
});})(map__290806,map__290806__$1,node_id,quadrant_type,vec__290807,qx,qy,vec__290808,p1,p2,map__290809,map__290809__$1,p3,vec__290810,x,y,vec__290811,vec__290812,cx,cy,p4))
;

dynomics.space.ui.__GT_t_dynomics$space$ui290815 = ((function (map__290806,map__290806__$1,node_id,quadrant_type,vec__290807,qx,qy,vec__290808,p1,p2,map__290809,map__290809__$1,p3,vec__290810,x,y,vec__290811,vec__290812,cx,cy,p4){
return (function dynomics$space$ui$make_open_region_component_$___GT_t_dynomics$space$ui290815(map__290809__$2,vec__290811__$1,x__$1,y__$1,vec__290810__$1,p2__$1,p4__$1,p3__$1,qx__$1,p__290793__$1,vec__290807__$1,vec__290812__$1,qy__$1,p1__$1,make_open_region_component__$1,vec__290808__$1,cx__$1,cy__$1,map__290806__$2,node_id__$1,quadrant_type__$1,meta290816){
return (new dynomics.space.ui.t_dynomics$space$ui290815(map__290809__$2,vec__290811__$1,x__$1,y__$1,vec__290810__$1,p2__$1,p4__$1,p3__$1,qx__$1,p__290793__$1,vec__290807__$1,vec__290812__$1,qy__$1,p1__$1,make_open_region_component__$1,vec__290808__$1,cx__$1,cy__$1,map__290806__$2,node_id__$1,quadrant_type__$1,meta290816));
});})(map__290806,map__290806__$1,node_id,quadrant_type,vec__290807,qx,qy,vec__290808,p1,p2,map__290809,map__290809__$1,p3,vec__290810,x,y,vec__290811,vec__290812,cx,cy,p4))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui290815(map__290809__$1,vec__290811,x,y,vec__290810,p2,p4,p3,qx,p__290793,vec__290807,vec__290812,qy,p1,dynomics$space$ui$make_open_region_component,vec__290808,cx,cy,map__290806__$1,node_id,quadrant_type,null));
});
/**
 * Returns a component for a node and its connections
 */
dynomics.space.ui.make_node_component = (function dynomics$space$ui$make_node_component(p__290818){
var map__290835 = p__290818;
var map__290835__$1 = ((((!((map__290835 == null)))?((((map__290835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290835):map__290835);
var map__290836 = cljs.core.get.call(null,map__290835__$1,new cljs.core.Keyword(null,"node","node",581201198));
var map__290836__$1 = ((((!((map__290836 == null)))?((((map__290836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290836):map__290836);
var node = map__290836__$1;
var vec__290837 = cljs.core.get.call(null,map__290836__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__290837,(0),null);
var y = cljs.core.nth.call(null,vec__290837,(1),null);
var t = cljs.core.get.call(null,map__290836__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var node_type = cljs.core.get.call(null,map__290836__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var id = cljs.core.get.call(null,map__290836__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var connections = cljs.core.get.call(null,map__290836__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var node_scale = cljs.core.get.call(null,map__290835__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var selected_nodes = cljs.core.get.call(null,map__290835__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var active_nodes = cljs.core.get.call(null,map__290835__$1,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891));
var msgs = cljs.core.get.call(null,map__290835__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var zoom = cljs.core.get.call(null,map__290835__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id], null);
if(typeof dynomics.space.ui.t_dynomics$space$ui290840 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui290840 = (function (vec__290837,t,connections,x,selected_nodes,active_nodes,path,y,map__290835,zoom,make_node_component,node_scale,node_type,node,msgs,id,map__290836,p__290818,meta290841){
this.vec__290837 = vec__290837;
this.t = t;
this.connections = connections;
this.x = x;
this.selected_nodes = selected_nodes;
this.active_nodes = active_nodes;
this.path = path;
this.y = y;
this.map__290835 = map__290835;
this.zoom = zoom;
this.make_node_component = make_node_component;
this.node_scale = node_scale;
this.node_type = node_type;
this.node = node;
this.msgs = msgs;
this.id = id;
this.map__290836 = map__290836;
this.p__290818 = p__290818;
this.meta290841 = meta290841;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui290840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (path,map__290835,map__290835__$1,map__290836,map__290836__$1,node,vec__290837,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,msgs,zoom){
return (function (_290842,meta290841__$1){
var self__ = this;
var _290842__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui290840(self__.vec__290837,self__.t,self__.connections,self__.x,self__.selected_nodes,self__.active_nodes,self__.path,self__.y,self__.map__290835,self__.zoom,self__.make_node_component,self__.node_scale,self__.node_type,self__.node,self__.msgs,self__.id,self__.map__290836,self__.p__290818,meta290841__$1));
});})(path,map__290835,map__290835__$1,map__290836,map__290836__$1,node,vec__290837,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,msgs,zoom))
;

dynomics.space.ui.t_dynomics$space$ui290840.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (path,map__290835,map__290835__$1,map__290836,map__290836__$1,node,vec__290837,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,msgs,zoom){
return (function (_290842){
var self__ = this;
var _290842__$1 = this;
return self__.meta290841;
});})(path,map__290835,map__290835__$1,map__290836,map__290836__$1,node,vec__290837,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,msgs,zoom))
;

dynomics.space.ui.t_dynomics$space$ui290840.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui290840.prototype.om$core$IRender$render$arity$1 = ((function (path,map__290835,map__290835__$1,map__290836,map__290836__$1,node,vec__290837,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,msgs,zoom){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.g.call(null,{"id": [cljs.core.str("node_"),cljs.core.str(self__.id)].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.x,self__.y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),(self__.node_scale / (cljs.core.truth_(self__.zoom)?self__.zoom:(1)))], null)), "className": [cljs.core.str("node_subgraph "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,self__.path))?"node_selected":null))].join(''), "onClick": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),self__.path,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),self__.path,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),self__.path], null)), "onMouseMove": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),self__.path], null))},null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"intersection","intersection",2003891010),self__.t))?om.core.build.call(null,dynomics.space.ui.make_node_types_cached_image_component,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.node_type,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),((1) / self__.zoom),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("nntp"),cljs.core.str(self__.id)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)):null),null,(cljs.core.truth_((function (){var and__35179__auto__ = self__.active_nodes;
if(cljs.core.truth_(and__35179__auto__)){
return self__.active_nodes.call(null,self__.path);
} else {
return and__35179__auto__;
}
})())?om.dom.g.call(null,{"className": (cljs.core.truth_(cljs.core.some.call(null,self__.selected_nodes,cljs.core.map.call(null,((function (this__38609__auto____$1,path,map__290835,map__290835__$1,map__290836,map__290836__$1,node,vec__290837,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,msgs,zoom){
return (function (p__290843){
var map__290844 = p__290843;
var map__290844__$1 = ((((!((map__290844 == null)))?((((map__290844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290844):map__290844);
var cid = cljs.core.get.call(null,map__290844__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null);
});})(this__38609__auto____$1,path,map__290835,map__290835__$1,map__290836,map__290836__$1,node,vec__290837,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,msgs,zoom))
,self__.connections)))?"node_connections_selected":"node_connections")},cljs.core.map.call(null,((function (this__38609__auto____$1,path,map__290835,map__290835__$1,map__290836,map__290836__$1,node,vec__290837,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,msgs,zoom){
return (function (p__290846){
var map__290847 = p__290846;
var map__290847__$1 = ((((!((map__290847 == null)))?((((map__290847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290847):map__290847);
var vec__290848 = cljs.core.get.call(null,map__290847__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var scx = cljs.core.nth.call(null,vec__290848,(0),null);
var scy = cljs.core.nth.call(null,vec__290848,(1),null);
var cid = cljs.core.get.call(null,map__290847__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vec__290850 = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(self__.zoom / self__.node_scale)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scx,scy], null));
var cx = cljs.core.nth.call(null,vec__290850,(0),null);
var cy = cljs.core.nth.call(null,vec__290850,(1),null);
return om.dom.g.call(null,{"className": [cljs.core.str("node_connection"),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null)))?"node_connections_selected":null))].join(''), "id": [cljs.core.str("node_"),cljs.core.str(self__.id),cljs.core.str("_connection_"),cljs.core.str(cid)].join('')},om.dom.line.call(null,{"x1": (0), "y1": (0), "x2": cx, "y2": cy, "className": "node_connection_line"}),(function (){var path__$1 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null);
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.15, "className": [cljs.core.str("node_connection_dot "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,path__$1))?"node_selected":null))].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),cx,cy], null)), "onClick": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"id","id",-1388402092),cid], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"id","id",-1388402092),cid], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"id","id",-1388402092),cid], null))});
})());
});})(this__38609__auto____$1,path,map__290835,map__290835__$1,map__290836,map__290836__$1,node,vec__290837,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,msgs,zoom))
,self__.connections)):null),om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.2, "className": [cljs.core.str("node_selector_dot"),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,self__.path))?"node_selected":null))].join('')}));
});})(path,map__290835,map__290835__$1,map__290836,map__290836__$1,node,vec__290837,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,msgs,zoom))
;

dynomics.space.ui.t_dynomics$space$ui290840.getBasis = ((function (path,map__290835,map__290835__$1,map__290836,map__290836__$1,node,vec__290837,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,msgs,zoom){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec__290837","vec__290837",1270766016,null),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"map__290835","map__290835",680043944,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-component","make-node-component",-1574550003,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Keyword(null,"connections","connections",-2064090887),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"node","node",-2073234571,null)], true, false),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for a node and its connections"], null)),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"map__290836","map__290836",-1941438723,null),new cljs.core.Symbol(null,"p__290818","p__290818",-1230960673,null),new cljs.core.Symbol(null,"meta290841","meta290841",-677482726,null)], null);
});})(path,map__290835,map__290835__$1,map__290836,map__290836__$1,node,vec__290837,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,msgs,zoom))
;

dynomics.space.ui.t_dynomics$space$ui290840.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui290840.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui290840";

dynomics.space.ui.t_dynomics$space$ui290840.cljs$lang$ctorPrWriter = ((function (path,map__290835,map__290835__$1,map__290836,map__290836__$1,node,vec__290837,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,msgs,zoom){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui290840");
});})(path,map__290835,map__290835__$1,map__290836,map__290836__$1,node,vec__290837,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,msgs,zoom))
;

dynomics.space.ui.__GT_t_dynomics$space$ui290840 = ((function (path,map__290835,map__290835__$1,map__290836,map__290836__$1,node,vec__290837,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,msgs,zoom){
return (function dynomics$space$ui$make_node_component_$___GT_t_dynomics$space$ui290840(vec__290837__$1,t__$1,connections__$1,x__$1,selected_nodes__$1,active_nodes__$1,path__$1,y__$1,map__290835__$2,zoom__$1,make_node_component__$1,node_scale__$1,node_type__$1,node__$1,msgs__$1,id__$1,map__290836__$2,p__290818__$1,meta290841){
return (new dynomics.space.ui.t_dynomics$space$ui290840(vec__290837__$1,t__$1,connections__$1,x__$1,selected_nodes__$1,active_nodes__$1,path__$1,y__$1,map__290835__$2,zoom__$1,make_node_component__$1,node_scale__$1,node_type__$1,node__$1,msgs__$1,id__$1,map__290836__$2,p__290818__$1,meta290841));
});})(path,map__290835,map__290835__$1,map__290836,map__290836__$1,node,vec__290837,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,msgs,zoom))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui290840(vec__290837,t,connections,x,selected_nodes,active_nodes,path,y,map__290835__$1,zoom,dynomics$space$ui$make_node_component,node_scale,node_type,node,msgs,id,map__290836__$1,p__290818,null));
});
dynomics.space.ui.test_component = (function dynomics$space$ui$test_component(x){
if(typeof dynomics.space.ui.t_dynomics$space$ui290854 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui290854 = (function (test_component,x,meta290855){
this.test_component = test_component;
this.x = x;
this.meta290855 = meta290855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui290854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_290856,meta290855__$1){
var self__ = this;
var _290856__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui290854(self__.test_component,self__.x,meta290855__$1));
});

dynomics.space.ui.t_dynomics$space$ui290854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_290856){
var self__ = this;
var _290856__$1 = this;
return self__.meta290855;
});

dynomics.space.ui.t_dynomics$space$ui290854.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui290854.prototype.om$core$IRender$render$arity$1 = (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.2, "fill": (((0.5 > Math.random()))?"orange":"green")});
});

dynomics.space.ui.t_dynomics$space$ui290854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"test-component","test-component",1959093538,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)))], null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"meta290855","meta290855",-277061910,null)], null);
});

dynomics.space.ui.t_dynomics$space$ui290854.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui290854.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui290854";

dynomics.space.ui.t_dynomics$space$ui290854.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui290854");
});

dynomics.space.ui.__GT_t_dynomics$space$ui290854 = (function dynomics$space$ui$test_component_$___GT_t_dynomics$space$ui290854(test_component__$1,x__$1,meta290855){
return (new dynomics.space.ui.t_dynomics$space$ui290854(test_component__$1,x__$1,meta290855));
});

}

return (new dynomics.space.ui.t_dynomics$space$ui290854(dynomics$space$ui$test_component,x,null));
});
dynomics.space.ui.make_quadrant_gradients = (function dynomics$space$ui$make_quadrant_gradients(){
var iter__35971__auto__ = (function dynomics$space$ui$make_quadrant_gradients_$_iter__290861(s__290862){
return (new cljs.core.LazySeq(null,(function (){
var s__290862__$1 = s__290862;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__290862__$1);
if(temp__4657__auto__){
var s__290862__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__290862__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__290862__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__290864 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__290863 = (0);
while(true){
if((i__290863 < size__35970__auto__)){
var quadrant_type = cljs.core._nth.call(null,c__35969__auto__,i__290863);
cljs.core.chunk_append.call(null,b__290864,om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(quadrant_type)].join(''), "gradientUnits": "objectBoundingBox", "cx": (0), "cy": (0), "r": (1)},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "0"})));

var G__290865 = (i__290863 + (1));
i__290863 = G__290865;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__290864),dynomics$space$ui$make_quadrant_gradients_$_iter__290861.call(null,cljs.core.chunk_rest.call(null,s__290862__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__290864),null);
}
} else {
var quadrant_type = cljs.core.first.call(null,s__290862__$2);
return cljs.core.cons.call(null,om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(quadrant_type)].join(''), "gradientUnits": "objectBoundingBox", "cx": (0), "cy": (0), "r": (1)},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "0"})),dynomics$space$ui$make_quadrant_gradients_$_iter__290861.call(null,cljs.core.rest.call(null,s__290862__$2)));
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
dynomics.space.ui.make_node_context_menu = (function dynomics$space$ui$make_node_context_menu(p__290866){
var map__290872 = p__290866;
var map__290872__$1 = ((((!((map__290872 == null)))?((((map__290872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290872):map__290872);
var s = map__290872__$1;
var map__290873 = cljs.core.get.call(null,map__290872__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__290873__$1 = ((((!((map__290873 == null)))?((((map__290873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290873):map__290873);
var vec__290874 = cljs.core.get.call(null,map__290873__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__290874,(0),null);
var y = cljs.core.nth.call(null,vec__290874,(1),null);
var sn = cljs.core.get.call(null,map__290872__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var state_updates = cljs.core.get.call(null,map__290872__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__290872__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
return om.dom.circle.call(null,{"id": "add-node-button", "cx": 0.5, "cy": 0.5, "r": 0.1, "fill": "red"});
});
dynomics.space.ui.context_menu_fn = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),dynomics.space.ui.make_node_context_menu], null);
/**
 * Returns a component for the phase-space editor
 */
dynomics.space.ui.make_space_component = (function dynomics$space$ui$make_space_component(p__290877){
var map__290887 = p__290877;
var map__290887__$1 = ((((!((map__290887 == null)))?((((map__290887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290887):map__290887);
var state = map__290887__$1;
var vec__290888 = cljs.core.get.call(null,map__290887__$1,new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331));
var ox = cljs.core.nth.call(null,vec__290888,(0),null);
var oy = cljs.core.nth.call(null,vec__290888,(1),null);
var zoom = cljs.core.get.call(null,map__290887__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var vec__290889 = cljs.core.get.call(null,map__290887__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var px = cljs.core.nth.call(null,vec__290889,(0),null);
var py = cljs.core.nth.call(null,vec__290889,(1),null);
var su = cljs.core.get.call(null,map__290887__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__290887__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var map__290890 = cljs.core.get.call(null,map__290887__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__290890__$1 = ((((!((map__290890 == null)))?((((map__290890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290890):map__290890);
var space = map__290890__$1;
var selected_nodes = cljs.core.get.call(null,map__290890__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var active_nodes = cljs.core.get.call(null,map__290890__$1,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891));
var edges = cljs.core.get.call(null,map__290890__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var curves = cljs.core.get.call(null,map__290890__$1,new cljs.core.Keyword(null,"curves","curves",-510805378));
var curve_types = cljs.core.get.call(null,map__290890__$1,new cljs.core.Keyword(null,"curve-types","curve-types",1650772099));
var node_scale = cljs.core.get.call(null,map__290890__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var regions = cljs.core.get.call(null,map__290890__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var selected_curves = cljs.core.get.call(null,map__290890__$1,new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493));
var compatibilities = cljs.core.get.call(null,map__290890__$1,new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024));
var nodes = cljs.core.get.call(null,map__290890__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var graph = cljs.core.get.call(null,map__290890__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var context_menu = cljs.core.get.call(null,map__290887__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var cf = cljs.core.get.call(null,map__290887__$1,new cljs.core.Keyword(null,"cf","cf",1480736310));
if(typeof dynomics.space.ui.t_dynomics$space$ui290893 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui290893 = (function (map__290887,selected_nodes,active_nodes,py,edges,oy,curves,vec__290888,map__290890,zoom,vec__290889,make_space_component,space,curve_types,p__290877,node_scale,regions,ox,selected_curves,px,state,compatibilities,su,msgs,nodes,graph,context_menu,cf,meta290894){
this.map__290887 = map__290887;
this.selected_nodes = selected_nodes;
this.active_nodes = active_nodes;
this.py = py;
this.edges = edges;
this.oy = oy;
this.curves = curves;
this.vec__290888 = vec__290888;
this.map__290890 = map__290890;
this.zoom = zoom;
this.vec__290889 = vec__290889;
this.make_space_component = make_space_component;
this.space = space;
this.curve_types = curve_types;
this.p__290877 = p__290877;
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
this.meta290894 = meta290894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui290893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__290887,map__290887__$1,state,vec__290888,ox,oy,zoom,vec__290889,px,py,su,msgs,map__290890,map__290890__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (_290895,meta290894__$1){
var self__ = this;
var _290895__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui290893(self__.map__290887,self__.selected_nodes,self__.active_nodes,self__.py,self__.edges,self__.oy,self__.curves,self__.vec__290888,self__.map__290890,self__.zoom,self__.vec__290889,self__.make_space_component,self__.space,self__.curve_types,self__.p__290877,self__.node_scale,self__.regions,self__.ox,self__.selected_curves,self__.px,self__.state,self__.compatibilities,self__.su,self__.msgs,self__.nodes,self__.graph,self__.context_menu,self__.cf,meta290894__$1));
});})(map__290887,map__290887__$1,state,vec__290888,ox,oy,zoom,vec__290889,px,py,su,msgs,map__290890,map__290890__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui290893.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__290887,map__290887__$1,state,vec__290888,ox,oy,zoom,vec__290889,px,py,su,msgs,map__290890,map__290890__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (_290895){
var self__ = this;
var _290895__$1 = this;
return self__.meta290894;
});})(map__290887,map__290887__$1,state,vec__290888,ox,oy,zoom,vec__290889,px,py,su,msgs,map__290890,map__290890__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui290893.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui290893.prototype.om$core$IRender$render$arity$1 = ((function (map__290887,map__290887__$1,state,vec__290888,ox,oy,zoom,vec__290889,px,py,su,msgs,map__290890,map__290890__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.div.call(null,{"className": [cljs.core.str("space "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),self__.cf))?"selected_function":"hidden_function"))].join('')},om.dom.svg.call(null,{"image-rendering": "optimizeQuality", "zoomAndPan": false, "preserveAspectRatio": "xMidYMin", "width": "100%", "shape-rendering": "crispEdges", "xmlns": "http://www.w3.org/2000/svg", "className": "space_svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "id": "space", "viewBox": "-1 -1 2 2", "height": "100%"},om.dom.defs.call(null,{"key": "defs"}),om.dom.g.call(null,{"id": "space_root", "key": "space_root", "onMouseMove": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseDown": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseUp": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onWheel": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onContextMenu": ((function (this__38609__auto____$1,map__290887,map__290887__$1,state,vec__290888,ox,oy,zoom,vec__290889,px,py,su,msgs,map__290890,map__290890__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (e){
e.preventDefault();

return null;
});})(this__38609__auto____$1,map__290887,map__290887__$1,state,vec__290888,ox,oy,zoom,vec__290889,px,py,su,msgs,map__290890,map__290890__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
, "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.ox,self__.oy], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),self__.zoom,self__.zoom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.px,self__.py], null))},om.dom.rect.call(null,{"x": (-16), "y": (-16), "width": (32), "height": (32), "className": "space_background"}),om.dom.rect.call(null,{"x": (0), "y": (0), "width": (1), "height": (1), "className": "space_space"}),om.core.build_all.call(null,dynomics.space.core.P.call(null,dynomics.space.ui.make_curve_component,self__.zoom,self__.node_scale,self__.nodes,self__.msgs,self__.selected_curves),cljs.core.map.call(null,cljs.core.vector,self__.curves,cljs.core.map.call(null,dynomics.space.core.C.call(null,self__.curve_types,cljs.core.key),self__.curves))),null,null,om.core.build_all.call(null,dynomics.space.ui.make_edge_component,cljs.core.map.call(null,((function (this__38609__auto____$1,map__290887,map__290887__$1,state,vec__290888,ox,oy,zoom,vec__290889,px,py,su,msgs,map__290890,map__290890__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (e){
return cljs.core.assoc.call(null,dynomics.space.core.with_compatibilities.call(null,e,self__.compatibilities),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale);
});})(this__38609__auto____$1,map__290887,map__290887__$1,state,vec__290888,ox,oy,zoom,vec__290889,px,py,su,msgs,map__290890,map__290890__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
,cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.edge_points,self__.nodes),self__.edges))),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__38609__auto____$1,map__290887,map__290887__$1,state,vec__290888,ox,oy,zoom,vec__290889,px,py,su,msgs,map__290890,map__290890__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (node){
return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),self__.su,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),self__.zoom,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891),self__.active_nodes], null),new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''));
});})(this__38609__auto____$1,map__290887,map__290887__$1,state,vec__290888,ox,oy,zoom,vec__290889,px,py,su,msgs,map__290890,map__290890__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
,cljs.core.vals.call(null,cljs.core.apply.call(null,cljs.core.dissoc,self__.nodes,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),cljs.core.map.call(null,cljs.core.last,self__.selected_nodes))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__38609__auto____$1,map__290887,map__290887__$1,state,vec__290888,ox,oy,zoom,vec__290889,px,py,su,msgs,map__290890,map__290890__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (node){
return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),self__.su,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),self__.zoom,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891),self__.active_nodes], null),new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''));
});})(this__38609__auto____$1,map__290887,map__290887__$1,state,vec__290888,ox,oy,zoom,vec__290889,px,py,su,msgs,map__290890,map__290890__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
,cljs.core.vals.call(null,cljs.core.select_keys.call(null,self__.nodes,cljs.core.map.call(null,cljs.core.last,self__.selected_nodes)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),null,null)));
});})(map__290887,map__290887__$1,state,vec__290888,ox,oy,zoom,vec__290889,px,py,su,msgs,map__290890,map__290890__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui290893.getBasis = ((function (map__290887,map__290887__$1,state,vec__290888,ox,oy,zoom,vec__290889,px,py,su,msgs,map__290890,map__290890__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (){
return new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map__290887","map__290887",372259905,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Symbol(null,"py","py",-1256449853,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"oy","oy",809196068,null),new cljs.core.Symbol(null,"curves","curves",1129726149,null),new cljs.core.Symbol(null,"vec__290888","vec__290888",593050695,null),new cljs.core.Symbol(null,"map__290890","map__290890",840945128,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"vec__290889","vec__290889",773201930,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-space-component","make-space-component",-638751478,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ox","ox",-2083100366,null),new cljs.core.Symbol(null,"oy","oy",809196068,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"px","px",1921861426,null),new cljs.core.Symbol(null,"py","py",-1256449853,null)], null),new cljs.core.Symbol(null,"su","su",155163255,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"curves","curves",1129726149,null),new cljs.core.Symbol(null,"curve-types","curve-types",-1003663670,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"compatibilities","compatibilities",289068503,null),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null)],[new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"cf","cf",1480736310)])], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the phase-space editor"], null)),new cljs.core.Symbol(null,"space","space",1988665002,null),new cljs.core.Symbol(null,"curve-types","curve-types",-1003663670,null),new cljs.core.Symbol(null,"p__290877","p__290877",-478311893,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"ox","ox",-2083100366,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.Symbol(null,"px","px",1921861426,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"compatibilities","compatibilities",289068503,null),new cljs.core.Symbol(null,"su","su",155163255,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Symbol(null,"meta290894","meta290894",663437573,null)], null);
});})(map__290887,map__290887__$1,state,vec__290888,ox,oy,zoom,vec__290889,px,py,su,msgs,map__290890,map__290890__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui290893.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui290893.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui290893";

dynomics.space.ui.t_dynomics$space$ui290893.cljs$lang$ctorPrWriter = ((function (map__290887,map__290887__$1,state,vec__290888,ox,oy,zoom,vec__290889,px,py,su,msgs,map__290890,map__290890__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui290893");
});})(map__290887,map__290887__$1,state,vec__290888,ox,oy,zoom,vec__290889,px,py,su,msgs,map__290890,map__290890__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.__GT_t_dynomics$space$ui290893 = ((function (map__290887,map__290887__$1,state,vec__290888,ox,oy,zoom,vec__290889,px,py,su,msgs,map__290890,map__290890__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function dynomics$space$ui$make_space_component_$___GT_t_dynomics$space$ui290893(map__290887__$2,selected_nodes__$1,active_nodes__$1,py__$1,edges__$1,oy__$1,curves__$1,vec__290888__$1,map__290890__$2,zoom__$1,vec__290889__$1,make_space_component__$1,space__$1,curve_types__$1,p__290877__$1,node_scale__$1,regions__$1,ox__$1,selected_curves__$1,px__$1,state__$1,compatibilities__$1,su__$1,msgs__$1,nodes__$1,graph__$1,context_menu__$1,cf__$1,meta290894){
return (new dynomics.space.ui.t_dynomics$space$ui290893(map__290887__$2,selected_nodes__$1,active_nodes__$1,py__$1,edges__$1,oy__$1,curves__$1,vec__290888__$1,map__290890__$2,zoom__$1,vec__290889__$1,make_space_component__$1,space__$1,curve_types__$1,p__290877__$1,node_scale__$1,regions__$1,ox__$1,selected_curves__$1,px__$1,state__$1,compatibilities__$1,su__$1,msgs__$1,nodes__$1,graph__$1,context_menu__$1,cf__$1,meta290894));
});})(map__290887,map__290887__$1,state,vec__290888,ox,oy,zoom,vec__290889,px,py,su,msgs,map__290890,map__290890__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui290893(map__290887__$1,selected_nodes,active_nodes,py,edges,oy,curves,vec__290888,map__290890__$1,zoom,vec__290889,dynomics$space$ui$make_space_component,space,curve_types,p__290877,node_scale,regions,ox,selected_curves,px,state,compatibilities,su,msgs,nodes,graph,context_menu,cf,null));
});
