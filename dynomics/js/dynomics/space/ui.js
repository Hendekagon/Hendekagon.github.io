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
var args363709 = [];
var len__36260__auto___363712 = arguments.length;
var i__36261__auto___363713 = (0);
while(true){
if((i__36261__auto___363713 < len__36260__auto___363712)){
args363709.push((arguments[i__36261__auto___363713]));

var G__363714 = (i__36261__auto___363713 + (1));
i__36261__auto___363713 = G__363714;
continue;
} else {
}
break;
}

var G__363711 = args363709.length;
switch (G__363711) {
case 1:
return dynomics.space.ui.convert_coords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.ui.convert_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args363709.length)].join('')));

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
var args363716 = [];
var len__36260__auto___363733 = arguments.length;
var i__36261__auto___363734 = (0);
while(true){
if((i__36261__auto___363734 < len__36260__auto___363733)){
args363716.push((arguments[i__36261__auto___363734]));

var G__363735 = (i__36261__auto___363734 + (1));
i__36261__auto___363734 = G__363735;
continue;
} else {
}
break;
}

var G__363718 = args363716.length;
switch (G__363718) {
case 0:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args363716.length)].join('')));

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
var seq__363719_363737 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni1.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
)),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni2.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
))));
var chunk__363720_363738 = null;
var count__363721_363739 = (0);
var i__363722_363740 = (0);
while(true){
if((i__363722_363740 < count__363721_363739)){
var vec__363723_363741 = cljs.core._nth.call(null,chunk__363720_363738,i__363722_363740);
var i_363742 = cljs.core.nth.call(null,vec__363723_363741,(0),null);
var j_363743 = cljs.core.nth.call(null,vec__363723_363741,(1),null);
j_363743.removeAttribute("id");

j_363743.removeAttribute("class");

j_363743.removeAttribute("data-reactid");

var ccss_363744__$1 = window.getComputedStyle(i_363742);
var seq__363724_363745 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_363744__$1.length));
var chunk__363725_363746 = null;
var count__363726_363747 = (0);
var i__363727_363748 = (0);
while(true){
if((i__363727_363748 < count__363726_363747)){
var is_363749 = cljs.core._nth.call(null,chunk__363725_363746,i__363727_363748);
var p_363750 = ccss_363744__$1.item(is_363749);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_363750)))){
j_363743.style.setProperty(p_363750,ccss_363744__$1.getPropertyValue(p_363750));
} else {
}

var G__363751 = seq__363724_363745;
var G__363752 = chunk__363725_363746;
var G__363753 = count__363726_363747;
var G__363754 = (i__363727_363748 + (1));
seq__363724_363745 = G__363751;
chunk__363725_363746 = G__363752;
count__363726_363747 = G__363753;
i__363727_363748 = G__363754;
continue;
} else {
var temp__4657__auto___363755 = cljs.core.seq.call(null,seq__363724_363745);
if(temp__4657__auto___363755){
var seq__363724_363756__$1 = temp__4657__auto___363755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__363724_363756__$1)){
var c__36002__auto___363757 = cljs.core.chunk_first.call(null,seq__363724_363756__$1);
var G__363758 = cljs.core.chunk_rest.call(null,seq__363724_363756__$1);
var G__363759 = c__36002__auto___363757;
var G__363760 = cljs.core.count.call(null,c__36002__auto___363757);
var G__363761 = (0);
seq__363724_363745 = G__363758;
chunk__363725_363746 = G__363759;
count__363726_363747 = G__363760;
i__363727_363748 = G__363761;
continue;
} else {
var is_363762 = cljs.core.first.call(null,seq__363724_363756__$1);
var p_363763 = ccss_363744__$1.item(is_363762);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_363763)))){
j_363743.style.setProperty(p_363763,ccss_363744__$1.getPropertyValue(p_363763));
} else {
}

var G__363764 = cljs.core.next.call(null,seq__363724_363756__$1);
var G__363765 = null;
var G__363766 = (0);
var G__363767 = (0);
seq__363724_363745 = G__363764;
chunk__363725_363746 = G__363765;
count__363726_363747 = G__363766;
i__363727_363748 = G__363767;
continue;
}
} else {
}
}
break;
}

var G__363768 = seq__363719_363737;
var G__363769 = chunk__363720_363738;
var G__363770 = count__363721_363739;
var G__363771 = (i__363722_363740 + (1));
seq__363719_363737 = G__363768;
chunk__363720_363738 = G__363769;
count__363721_363739 = G__363770;
i__363722_363740 = G__363771;
continue;
} else {
var temp__4657__auto___363772 = cljs.core.seq.call(null,seq__363719_363737);
if(temp__4657__auto___363772){
var seq__363719_363773__$1 = temp__4657__auto___363772;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__363719_363773__$1)){
var c__36002__auto___363774 = cljs.core.chunk_first.call(null,seq__363719_363773__$1);
var G__363775 = cljs.core.chunk_rest.call(null,seq__363719_363773__$1);
var G__363776 = c__36002__auto___363774;
var G__363777 = cljs.core.count.call(null,c__36002__auto___363774);
var G__363778 = (0);
seq__363719_363737 = G__363775;
chunk__363720_363738 = G__363776;
count__363721_363739 = G__363777;
i__363722_363740 = G__363778;
continue;
} else {
var vec__363728_363779 = cljs.core.first.call(null,seq__363719_363773__$1);
var i_363780 = cljs.core.nth.call(null,vec__363728_363779,(0),null);
var j_363781 = cljs.core.nth.call(null,vec__363728_363779,(1),null);
j_363781.removeAttribute("id");

j_363781.removeAttribute("class");

j_363781.removeAttribute("data-reactid");

var ccss_363782__$1 = window.getComputedStyle(i_363780);
var seq__363729_363783 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_363782__$1.length));
var chunk__363730_363784 = null;
var count__363731_363785 = (0);
var i__363732_363786 = (0);
while(true){
if((i__363732_363786 < count__363731_363785)){
var is_363787 = cljs.core._nth.call(null,chunk__363730_363784,i__363732_363786);
var p_363788 = ccss_363782__$1.item(is_363787);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_363788)))){
j_363781.style.setProperty(p_363788,ccss_363782__$1.getPropertyValue(p_363788));
} else {
}

var G__363789 = seq__363729_363783;
var G__363790 = chunk__363730_363784;
var G__363791 = count__363731_363785;
var G__363792 = (i__363732_363786 + (1));
seq__363729_363783 = G__363789;
chunk__363730_363784 = G__363790;
count__363731_363785 = G__363791;
i__363732_363786 = G__363792;
continue;
} else {
var temp__4657__auto___363793__$1 = cljs.core.seq.call(null,seq__363729_363783);
if(temp__4657__auto___363793__$1){
var seq__363729_363794__$1 = temp__4657__auto___363793__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__363729_363794__$1)){
var c__36002__auto___363795 = cljs.core.chunk_first.call(null,seq__363729_363794__$1);
var G__363796 = cljs.core.chunk_rest.call(null,seq__363729_363794__$1);
var G__363797 = c__36002__auto___363795;
var G__363798 = cljs.core.count.call(null,c__36002__auto___363795);
var G__363799 = (0);
seq__363729_363783 = G__363796;
chunk__363730_363784 = G__363797;
count__363731_363785 = G__363798;
i__363732_363786 = G__363799;
continue;
} else {
var is_363800 = cljs.core.first.call(null,seq__363729_363794__$1);
var p_363801 = ccss_363782__$1.item(is_363800);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_363801)))){
j_363781.style.setProperty(p_363801,ccss_363782__$1.getPropertyValue(p_363801));
} else {
}

var G__363802 = cljs.core.next.call(null,seq__363729_363794__$1);
var G__363803 = null;
var G__363804 = (0);
var G__363805 = (0);
seq__363729_363783 = G__363802;
chunk__363730_363784 = G__363803;
count__363731_363785 = G__363804;
i__363732_363786 = G__363805;
continue;
}
} else {
}
}
break;
}

var G__363806 = cljs.core.next.call(null,seq__363719_363773__$1);
var G__363807 = null;
var G__363808 = (0);
var G__363809 = (0);
seq__363719_363737 = G__363806;
chunk__363720_363738 = G__363807;
count__363721_363739 = G__363808;
i__363722_363740 = G__363809;
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
var vec__363812 = cljs.core.subvec.call(null,trajectory,((cljs.core.count.call(null,trajectory) - (1)) - (1)),cljs.core.count.call(null,trajectory));
var p1 = cljs.core.nth.call(null,vec__363812,(0),null);
var p2 = cljs.core.nth.call(null,vec__363812,(1),null);
var v = cljs.core.map.call(null,cljs.core._,p1,p2);
var a = (dynomics.space.core.r2d * (dynomics.space.core.PI2 - dynomics.space.core.angle.call(null,v)));
var a1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);
var a2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
var a3 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null);
var vec__363813 = cljs.core.map.call(null,cljs.core._PLUS_,p2,cljs.core.map.call(null,dynomics.space.core.P.call(null,cljs.core._STAR_,0.505),v));
var ox = cljs.core.nth.call(null,vec__363813,(0),null);
var oy = cljs.core.nth.call(null,vec__363813,(1),null);
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
}),dynomics.space.core.midpoints.call(null,trajectory),cljs.core.map.call(null,(function (p__363816){
var vec__363817 = p__363816;
var p1 = cljs.core.nth.call(null,vec__363817,(0),null);
var p2 = cljs.core.nth.call(null,vec__363817,(1),null);
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
dynomics.space.ui.make_paths = (function dynomics$space$ui$make_paths(p__363818){
var map__363825 = p__363818;
var map__363825__$1 = ((((!((map__363825 == null)))?((((map__363825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__363825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__363825):map__363825);
var space = map__363825__$1;
var nodes = cljs.core.get.call(null,map__363825__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__363825__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var regions = cljs.core.get.call(null,map__363825__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var node_scale = cljs.core.get.call(null,map__363825__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
cljs.core.println.call(null,"Regions ",regions);

return cljs.core.map.call(null,((function (map__363825,map__363825__$1,space,nodes,edges,regions,node_scale){
return (function (region){
return cljs.core.reduce.call(null,((function (map__363825,map__363825__$1,space,nodes,edges,regions,node_scale){
return (function (beziers,connection){
return cljs.core.conj.call(null,beziers,cljs.core.map.call(null,((function (map__363825,map__363825__$1,space,nodes,edges,regions,node_scale){
return (function (p__363827){
var vec__363828 = p__363827;
var nid1 = cljs.core.nth.call(null,vec__363828,(0),null);
var cid1 = cljs.core.nth.call(null,vec__363828,(1),null);
var vec__363829 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx1 = cljs.core.nth.call(null,vec__363829,(0),null);
var ny1 = cljs.core.nth.call(null,vec__363829,(1),null);
var vec__363830 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx1 = cljs.core.nth.call(null,vec__363830,(0),null);
var cy1 = cljs.core.nth.call(null,vec__363830,(1),null);
return dynomics.ui.svg.make_bezier_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx1 + (node_scale * cx1)),(ny1 + (node_scale * cy1))], null)], null));
});})(map__363825,map__363825__$1,space,nodes,edges,regions,node_scale))
,cljs.core.map.call(null,dynomics.space.core.simplify_connection,connection)));
});})(map__363825,map__363825__$1,space,nodes,edges,regions,node_scale))
,cljs.core.PersistentVector.EMPTY,region);
});})(map__363825,map__363825__$1,space,nodes,edges,regions,node_scale))
,regions);
});
/**
 * Returns a palette of tools
 */
dynomics.space.ui.make_tools_palette_component = (function dynomics$space$ui$make_tools_palette_component(p__363831){
var map__363838 = p__363831;
var map__363838__$1 = ((((!((map__363838 == null)))?((((map__363838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__363838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__363838):map__363838);
var state = map__363838__$1;
var current_tool = cljs.core.get.call(null,map__363838__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
var tools = cljs.core.get.call(null,map__363838__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
var tools_order = cljs.core.get.call(null,map__363838__$1,new cljs.core.Keyword(null,"tools-order","tools-order",-615877648));
var state_updates = cljs.core.get.call(null,map__363838__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
return om.dom.div.call(null,{"className": "tool_things"},om.dom.div.call(null,{"className": "tool_selectors"},cljs.core.map.call(null,((function (map__363838,map__363838__$1,state,current_tool,tools,tools_order,state_updates){
return (function (p__363840){
var vec__363841 = p__363840;
var tk = cljs.core.nth.call(null,vec__363841,(0),null);
var map__363842 = cljs.core.nth.call(null,vec__363841,(1),null);
var map__363842__$1 = ((((!((map__363842 == null)))?((((map__363842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__363842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__363842):map__363842);
var description = cljs.core.get.call(null,map__363842__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var icon = cljs.core.get.call(null,map__363842__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var keybinding = cljs.core.get.call(null,map__363842__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
return om.dom.div.call(null,{"className": [cljs.core.str("tool_selector "),cljs.core.str(((cljs.core._EQ_.call(null,tk,current_tool))?"tool_selected":null))].join(''), "title": [cljs.core.str(description),cljs.core.str(" ( "),cljs.core.str((((keybinding instanceof cljs.core.Keyword))?cljs.core.name.call(null,keybinding):keybinding)),cljs.core.str(" )")].join(''), "onMouseDown": ((function (vec__363841,tk,map__363842,map__363842__$1,description,icon,keybinding,map__363838,map__363838__$1,state,current_tool,tools,tools_order,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__363841,tk,map__363842,map__363842__$1,description,icon,keybinding,map__363838,map__363838__$1,state,current_tool,tools,tools_order,state_updates){
return (function (s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),tk);
});})(vec__363841,tk,map__363842,map__363842__$1,description,icon,keybinding,map__363838,map__363838__$1,state,current_tool,tools,tools_order,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tool","tool",-1298696470),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null));

return null;
});})(vec__363841,tk,map__363842,map__363842__$1,description,icon,keybinding,map__363838,map__363838__$1,state,current_tool,tools,tools_order,state_updates))
},icon);
});})(map__363838,map__363838__$1,state,current_tool,tools,tools_order,state_updates))
,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,tools),tools_order))),om.dom.div.call(null,{"className": "current_tool_text", "title": cljs.core.get_in.call(null,tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tool,new cljs.core.Keyword(null,"description","description",-1428560544)], null))},cljs.core.get_in.call(null,tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tool,new cljs.core.Keyword(null,"name","name",1843675177)], null))));
});
/**
 * Returns a node-type component for the node types palette,
 *   which can prerender its SVG to a canvas & therefore
 *   cache the resulting image, to save on components in the DOM if need be.
 */
dynomics.space.ui.make_node_types_cached_component = (function dynomics$space$ui$make_node_types_cached_component(p__363844,owner){
var map__363850 = p__363844;
var map__363850__$1 = ((((!((map__363850 == null)))?((((map__363850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__363850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__363850):map__363850);
var id = cljs.core.get.call(null,map__363850__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(typeof dynomics.space.ui.t_dynomics$space$ui363852 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui363852 = (function (make_node_types_cached_component,p__363844,owner,map__363850,id,meta363853){
this.make_node_types_cached_component = make_node_types_cached_component;
this.p__363844 = p__363844;
this.owner = owner;
this.map__363850 = map__363850;
this.id = id;
this.meta363853 = meta363853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui363852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__363850,map__363850__$1,id){
return (function (_363854,meta363853__$1){
var self__ = this;
var _363854__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui363852(self__.make_node_types_cached_component,self__.p__363844,self__.owner,self__.map__363850,self__.id,meta363853__$1));
});})(map__363850,map__363850__$1,id))
;

dynomics.space.ui.t_dynomics$space$ui363852.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__363850,map__363850__$1,id){
return (function (_363854){
var self__ = this;
var _363854__$1 = this;
return self__.meta363853;
});})(map__363850,map__363850__$1,id))
;

dynomics.space.ui.t_dynomics$space$ui363852.prototype.om$core$IInitState$ = true;

dynomics.space.ui.t_dynomics$space$ui363852.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__363850,map__363850__$1,id){
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
});})(map__363850,map__363850__$1,id))
;

dynomics.space.ui.t_dynomics$space$ui363852.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui363852.prototype.om$core$IRender$render$arity$1 = ((function (map__363850,map__363850__$1,id){
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
});})(map__363850,map__363850__$1,id))
;

dynomics.space.ui.t_dynomics$space$ui363852.prototype.om$core$IDidMount$ = true;

dynomics.space.ui.t_dynomics$space$ui363852.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__363850,map__363850__$1,id){
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
});})(map__363850,map__363850__$1,id))
;

dynomics.space.ui.t_dynomics$space$ui363852.getBasis = ((function (map__363850,map__363850__$1,id){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-cached-component","make-node-types-cached-component",-655003199,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a node-type component for the node types palette,\n  which can prerender its SVG to a canvas & therefore\n  cache the resulting image, to save on components in the DOM if need be."], null)),new cljs.core.Symbol(null,"p__363844","p__363844",917371271,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__363850","map__363850",1294339207,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta363853","meta363853",900897512,null)], null);
});})(map__363850,map__363850__$1,id))
;

dynomics.space.ui.t_dynomics$space$ui363852.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui363852.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui363852";

dynomics.space.ui.t_dynomics$space$ui363852.cljs$lang$ctorPrWriter = ((function (map__363850,map__363850__$1,id){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui363852");
});})(map__363850,map__363850__$1,id))
;

dynomics.space.ui.__GT_t_dynomics$space$ui363852 = ((function (map__363850,map__363850__$1,id){
return (function dynomics$space$ui$make_node_types_cached_component_$___GT_t_dynomics$space$ui363852(make_node_types_cached_component__$1,p__363844__$1,owner__$1,map__363850__$2,id__$1,meta363853){
return (new dynomics.space.ui.t_dynomics$space$ui363852(make_node_types_cached_component__$1,p__363844__$1,owner__$1,map__363850__$2,id__$1,meta363853));
});})(map__363850,map__363850__$1,id))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui363852(dynomics$space$ui$make_node_types_cached_component,p__363844,owner,map__363850__$1,id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a node-type component for the node types palette,
 *   which can prerender its SVG to a canvas & therefore
 *   cache the resulting image, to save on components in the DOM if need be.
 */
dynomics.space.ui.make_node_types_cached_image_component = (function dynomics$space$ui$make_node_types_cached_image_component(p__363855,owner){
var map__363863 = p__363855;
var map__363863__$1 = ((((!((map__363863 == null)))?((((map__363863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__363863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__363863):map__363863);
var node_type = cljs.core.get.call(null,map__363863__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var node_scale = cljs.core.get.call(null,map__363863__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var zoom = cljs.core.get.call(null,map__363863__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
if(typeof dynomics.space.ui.t_dynomics$space$ui363865 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui363865 = (function (make_node_types_cached_image_component,p__363855,owner,map__363863,node_type,node_scale,zoom,meta363866){
this.make_node_types_cached_image_component = make_node_types_cached_image_component;
this.p__363855 = p__363855;
this.owner = owner;
this.map__363863 = map__363863;
this.node_type = node_type;
this.node_scale = node_scale;
this.zoom = zoom;
this.meta363866 = meta363866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui363865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__363863,map__363863__$1,node_type,node_scale,zoom){
return (function (_363867,meta363866__$1){
var self__ = this;
var _363867__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui363865(self__.make_node_types_cached_image_component,self__.p__363855,self__.owner,self__.map__363863,self__.node_type,self__.node_scale,self__.zoom,meta363866__$1));
});})(map__363863,map__363863__$1,node_type,node_scale,zoom))
;

dynomics.space.ui.t_dynomics$space$ui363865.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__363863,map__363863__$1,node_type,node_scale,zoom){
return (function (_363867){
var self__ = this;
var _363867__$1 = this;
return self__.meta363866;
});})(map__363863,map__363863__$1,node_type,node_scale,zoom))
;

dynomics.space.ui.t_dynomics$space$ui363865.prototype.om$core$IInitState$ = true;

dynomics.space.ui.t_dynomics$space$ui363865.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__363863,map__363863__$1,node_type,node_scale,zoom){
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
});})(map__363863,map__363863__$1,node_type,node_scale,zoom))
;

dynomics.space.ui.t_dynomics$space$ui363865.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui363865.prototype.om$core$IRender$render$arity$1 = ((function (map__363863,map__363863__$1,node_type,node_scale,zoom){
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
});})(map__363863,map__363863__$1,node_type,node_scale,zoom))
;

dynomics.space.ui.t_dynomics$space$ui363865.getBasis = ((function (map__363863,map__363863__$1,node_type,node_scale,zoom){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-cached-image-component","make-node-types-cached-image-component",-1391243851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a node-type component for the node types palette,\n  which can prerender its SVG to a canvas & therefore\n  cache the resulting image, to save on components in the DOM if need be."], null)),new cljs.core.Symbol(null,"p__363855","p__363855",-1534437538,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__363863","map__363863",1379966982,null),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"meta363866","meta363866",23956071,null)], null);
});})(map__363863,map__363863__$1,node_type,node_scale,zoom))
;

dynomics.space.ui.t_dynomics$space$ui363865.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui363865.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui363865";

dynomics.space.ui.t_dynomics$space$ui363865.cljs$lang$ctorPrWriter = ((function (map__363863,map__363863__$1,node_type,node_scale,zoom){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui363865");
});})(map__363863,map__363863__$1,node_type,node_scale,zoom))
;

dynomics.space.ui.__GT_t_dynomics$space$ui363865 = ((function (map__363863,map__363863__$1,node_type,node_scale,zoom){
return (function dynomics$space$ui$make_node_types_cached_image_component_$___GT_t_dynomics$space$ui363865(make_node_types_cached_image_component__$1,p__363855__$1,owner__$1,map__363863__$2,node_type__$1,node_scale__$1,zoom__$1,meta363866){
return (new dynomics.space.ui.t_dynomics$space$ui363865(make_node_types_cached_image_component__$1,p__363855__$1,owner__$1,map__363863__$2,node_type__$1,node_scale__$1,zoom__$1,meta363866));
});})(map__363863,map__363863__$1,node_type,node_scale,zoom))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui363865(dynomics$space$ui$make_node_types_cached_image_component,p__363855,owner,map__363863__$1,node_type,node_scale,zoom,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a component for the node types palette
 */
dynomics.space.ui.make_node_types_palette_component = (function dynomics$space$ui$make_node_types_palette_component(p__363870){
var map__363879 = p__363870;
var map__363879__$1 = ((((!((map__363879 == null)))?((((map__363879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__363879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__363879):map__363879);
var state = map__363879__$1;
var component = cljs.core.get.call(null,map__363879__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var state_updates = cljs.core.get.call(null,map__363879__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__363879__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
if(typeof dynomics.space.ui.t_dynomics$space$ui363881 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui363881 = (function (make_node_types_palette_component,p__363870,map__363879,state,component,state_updates,msgs,meta363882){
this.make_node_types_palette_component = make_node_types_palette_component;
this.p__363870 = p__363870;
this.map__363879 = map__363879;
this.state = state;
this.component = component;
this.state_updates = state_updates;
this.msgs = msgs;
this.meta363882 = meta363882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui363881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__363879,map__363879__$1,state,component,state_updates,msgs){
return (function (_363883,meta363882__$1){
var self__ = this;
var _363883__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui363881(self__.make_node_types_palette_component,self__.p__363870,self__.map__363879,self__.state,self__.component,self__.state_updates,self__.msgs,meta363882__$1));
});})(map__363879,map__363879__$1,state,component,state_updates,msgs))
;

dynomics.space.ui.t_dynomics$space$ui363881.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__363879,map__363879__$1,state,component,state_updates,msgs){
return (function (_363883){
var self__ = this;
var _363883__$1 = this;
return self__.meta363882;
});})(map__363879,map__363879__$1,state,component,state_updates,msgs))
;

dynomics.space.ui.t_dynomics$space$ui363881.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui363881.prototype.om$core$IRender$render$arity$1 = ((function (map__363879,map__363879__$1,state,component,state_updates,msgs){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"className": "node_types"},cljs.core.map.call(null,((function (this$__$1,map__363879,map__363879__$1,state,component,state_updates,msgs){
return (function (p__363884){
var map__363885 = p__363884;
var map__363885__$1 = ((((!((map__363885 == null)))?((((map__363885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__363885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__363885):map__363885);
var id = cljs.core.get.call(null,map__363885__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var stability = cljs.core.get.call(null,map__363885__$1,new cljs.core.Keyword(null,"stability","stability",1733225509));
var type = cljs.core.get.call(null,map__363885__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return om.dom.div.call(null,{"className": [cljs.core.str("node_type_selector")].join(''), "title": [cljs.core.str("Set selected nodes to "),cljs.core.str(id),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,stability)),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,type))].join(''), "draggable": true, "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)), "onMouseMove": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null))},om.core.build.call(null,dynomics.space.ui.make_node_types_cached_component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("ntp"),cljs.core.str(id)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),null);
});})(this$__$1,map__363879,map__363879__$1,state,component,state_updates,msgs))
,cljs.core.vals.call(null,dynomics.space.core.node_types)));
});})(map__363879,map__363879__$1,state,component,state_updates,msgs))
;

dynomics.space.ui.t_dynomics$space$ui363881.getBasis = ((function (map__363879,map__363879__$1,state,component,state_updates,msgs){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-palette-component","make-node-types-palette-component",54407202,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the node types palette"], null)),new cljs.core.Symbol(null,"p__363870","p__363870",152106477,null),new cljs.core.Symbol(null,"map__363879","map__363879",1436204467,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"meta363882","meta363882",260773347,null)], null);
});})(map__363879,map__363879__$1,state,component,state_updates,msgs))
;

dynomics.space.ui.t_dynomics$space$ui363881.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui363881.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui363881";

dynomics.space.ui.t_dynomics$space$ui363881.cljs$lang$ctorPrWriter = ((function (map__363879,map__363879__$1,state,component,state_updates,msgs){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui363881");
});})(map__363879,map__363879__$1,state,component,state_updates,msgs))
;

dynomics.space.ui.__GT_t_dynomics$space$ui363881 = ((function (map__363879,map__363879__$1,state,component,state_updates,msgs){
return (function dynomics$space$ui$make_node_types_palette_component_$___GT_t_dynomics$space$ui363881(make_node_types_palette_component__$1,p__363870__$1,map__363879__$2,state__$1,component__$1,state_updates__$1,msgs__$1,meta363882){
return (new dynomics.space.ui.t_dynomics$space$ui363881(make_node_types_palette_component__$1,p__363870__$1,map__363879__$2,state__$1,component__$1,state_updates__$1,msgs__$1,meta363882));
});})(map__363879,map__363879__$1,state,component,state_updates,msgs))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui363881(dynomics$space$ui$make_node_types_palette_component,p__363870,map__363879__$1,state,component,state_updates,msgs,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a component for an edge
 */
dynomics.space.ui.make_edge_component = (function dynomics$space$ui$make_edge_component(p__363887){
var map__363899 = p__363887;
var map__363899__$1 = ((((!((map__363899 == null)))?((((map__363899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__363899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__363899):map__363899);
var vec__363900 = cljs.core.get.call(null,map__363899__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__363901 = cljs.core.nth.call(null,vec__363900,(0),null);
var nid1 = cljs.core.nth.call(null,vec__363901,(0),null);
var nid2 = cljs.core.nth.call(null,vec__363901,(1),null);
var vec__363902 = cljs.core.nth.call(null,vec__363900,(1),null);
var nx1 = cljs.core.nth.call(null,vec__363902,(0),null);
var ny1 = cljs.core.nth.call(null,vec__363902,(1),null);
var vec__363903 = cljs.core.nth.call(null,vec__363900,(2),null);
var nx2 = cljs.core.nth.call(null,vec__363903,(0),null);
var ny2 = cljs.core.nth.call(null,vec__363903,(1),null);
var vec__363904 = cljs.core.nth.call(null,vec__363900,(3),null);
var cx1 = cljs.core.nth.call(null,vec__363904,(0),null);
var cx2 = cljs.core.nth.call(null,vec__363904,(1),null);
var vec__363905 = cljs.core.nth.call(null,vec__363900,(4),null);
var cy1 = cljs.core.nth.call(null,vec__363905,(0),null);
var cy2 = cljs.core.nth.call(null,vec__363905,(1),null);
var compatible_QMARK_ = cljs.core.get.call(null,map__363899__$1,new cljs.core.Keyword(null,"compatible?","compatible?",923422575));
var node_scale = cljs.core.get.call(null,map__363899__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
if(typeof dynomics.space.ui.t_dynomics$space$ui363907 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui363907 = (function (nx1,vec__363900,cx1,ny2,map__363899,make_edge_component,vec__363905,cy2,nx2,cy1,node_scale,ny1,cx2,compatible_QMARK_,vec__363901,vec__363903,vec__363904,nid2,p__363887,nid1,vec__363902,meta363908){
this.nx1 = nx1;
this.vec__363900 = vec__363900;
this.cx1 = cx1;
this.ny2 = ny2;
this.map__363899 = map__363899;
this.make_edge_component = make_edge_component;
this.vec__363905 = vec__363905;
this.cy2 = cy2;
this.nx2 = nx2;
this.cy1 = cy1;
this.node_scale = node_scale;
this.ny1 = ny1;
this.cx2 = cx2;
this.compatible_QMARK_ = compatible_QMARK_;
this.vec__363901 = vec__363901;
this.vec__363903 = vec__363903;
this.vec__363904 = vec__363904;
this.nid2 = nid2;
this.p__363887 = p__363887;
this.nid1 = nid1;
this.vec__363902 = vec__363902;
this.meta363908 = meta363908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui363907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__363899,map__363899__$1,vec__363900,vec__363901,nid1,nid2,vec__363902,nx1,ny1,vec__363903,nx2,ny2,vec__363904,cx1,cx2,vec__363905,cy1,cy2,compatible_QMARK_,node_scale){
return (function (_363909,meta363908__$1){
var self__ = this;
var _363909__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui363907(self__.nx1,self__.vec__363900,self__.cx1,self__.ny2,self__.map__363899,self__.make_edge_component,self__.vec__363905,self__.cy2,self__.nx2,self__.cy1,self__.node_scale,self__.ny1,self__.cx2,self__.compatible_QMARK_,self__.vec__363901,self__.vec__363903,self__.vec__363904,self__.nid2,self__.p__363887,self__.nid1,self__.vec__363902,meta363908__$1));
});})(map__363899,map__363899__$1,vec__363900,vec__363901,nid1,nid2,vec__363902,nx1,ny1,vec__363903,nx2,ny2,vec__363904,cx1,cx2,vec__363905,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui363907.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__363899,map__363899__$1,vec__363900,vec__363901,nid1,nid2,vec__363902,nx1,ny1,vec__363903,nx2,ny2,vec__363904,cx1,cx2,vec__363905,cy1,cy2,compatible_QMARK_,node_scale){
return (function (_363909){
var self__ = this;
var _363909__$1 = this;
return self__.meta363908;
});})(map__363899,map__363899__$1,vec__363900,vec__363901,nid1,nid2,vec__363902,nx1,ny1,vec__363903,nx2,ny2,vec__363904,cx1,cx2,vec__363905,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui363907.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui363907.prototype.om$core$IRender$render$arity$1 = ((function (map__363899,map__363899__$1,vec__363900,vec__363901,nid1,nid2,vec__363902,nx1,ny1,vec__363903,nx2,ny2,vec__363904,cx1,cx2,vec__363905,cy1,cy2,compatible_QMARK_,node_scale){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.path.call(null,{"key": [cljs.core.str("edge_"),cljs.core.str(self__.nid1),cljs.core.str("_"),cljs.core.str(self__.nid2)].join(''), "className": [cljs.core.str("edge "),cljs.core.str((cljs.core.truth_(self__.compatible_QMARK_)?"compatible_edge":null))].join(''), "d": dynomics.ui.svg.to_svg_path.call(null,cljs.core.map.call(null,dynomics.ui.svg.make_bezier_point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx1,self__.ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.cx1,self__.cy1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx2,self__.ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.cx2,self__.cy2], null)], null)], null)))});
});})(map__363899,map__363899__$1,vec__363900,vec__363901,nid1,nid2,vec__363902,nx1,ny1,vec__363903,nx2,ny2,vec__363904,cx1,cx2,vec__363905,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui363907.getBasis = ((function (map__363899,map__363899__$1,vec__363900,vec__363901,nid1,nid2,vec__363902,nx1,ny1,vec__363903,nx2,ny2,vec__363904,cx1,cx2,vec__363905,cy1,cy2,compatible_QMARK_,node_scale){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"vec__363900","vec__363900",-390389438,null),new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null),new cljs.core.Symbol(null,"map__363899","map__363899",751871911,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-edge-component","make-edge-component",-530385559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null)], null)], null),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Symbol(null,"compatible?","compatible?",-1731013194,null),new cljs.core.Keyword(null,"compatible?","compatible?",923422575),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for an edge"], null)),new cljs.core.Symbol(null,"vec__363905","vec__363905",-1501846711,null),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null),new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null),new cljs.core.Symbol(null,"compatible?","compatible?",-1731013194,null),new cljs.core.Symbol(null,"vec__363901","vec__363901",-4238921,null),new cljs.core.Symbol(null,"vec__363903","vec__363903",-1337388904,null),new cljs.core.Symbol(null,"vec__363904","vec__363904",-410359112,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null),new cljs.core.Symbol(null,"p__363887","p__363887",-702817986,null),new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"vec__363902","vec__363902",1461078623,null),new cljs.core.Symbol(null,"meta363908","meta363908",-534316901,null)], null);
});})(map__363899,map__363899__$1,vec__363900,vec__363901,nid1,nid2,vec__363902,nx1,ny1,vec__363903,nx2,ny2,vec__363904,cx1,cx2,vec__363905,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui363907.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui363907.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui363907";

dynomics.space.ui.t_dynomics$space$ui363907.cljs$lang$ctorPrWriter = ((function (map__363899,map__363899__$1,vec__363900,vec__363901,nid1,nid2,vec__363902,nx1,ny1,vec__363903,nx2,ny2,vec__363904,cx1,cx2,vec__363905,cy1,cy2,compatible_QMARK_,node_scale){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui363907");
});})(map__363899,map__363899__$1,vec__363900,vec__363901,nid1,nid2,vec__363902,nx1,ny1,vec__363903,nx2,ny2,vec__363904,cx1,cx2,vec__363905,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.__GT_t_dynomics$space$ui363907 = ((function (map__363899,map__363899__$1,vec__363900,vec__363901,nid1,nid2,vec__363902,nx1,ny1,vec__363903,nx2,ny2,vec__363904,cx1,cx2,vec__363905,cy1,cy2,compatible_QMARK_,node_scale){
return (function dynomics$space$ui$make_edge_component_$___GT_t_dynomics$space$ui363907(nx1__$1,vec__363900__$1,cx1__$1,ny2__$1,map__363899__$2,make_edge_component__$1,vec__363905__$1,cy2__$1,nx2__$1,cy1__$1,node_scale__$1,ny1__$1,cx2__$1,compatible_QMARK___$1,vec__363901__$1,vec__363903__$1,vec__363904__$1,nid2__$1,p__363887__$1,nid1__$1,vec__363902__$1,meta363908){
return (new dynomics.space.ui.t_dynomics$space$ui363907(nx1__$1,vec__363900__$1,cx1__$1,ny2__$1,map__363899__$2,make_edge_component__$1,vec__363905__$1,cy2__$1,nx2__$1,cy1__$1,node_scale__$1,ny1__$1,cx2__$1,compatible_QMARK___$1,vec__363901__$1,vec__363903__$1,vec__363904__$1,nid2__$1,p__363887__$1,nid1__$1,vec__363902__$1,meta363908));
});})(map__363899,map__363899__$1,vec__363900,vec__363901,nid1,nid2,vec__363902,nx1,ny1,vec__363903,nx2,ny2,vec__363904,cx1,cx2,vec__363905,cy1,cy2,compatible_QMARK_,node_scale))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui363907(nx1,vec__363900,cx1,ny2,map__363899__$1,dynomics$space$ui$make_edge_component,vec__363905,cy2,nx2,cy1,node_scale,ny1,cx2,compatible_QMARK_,vec__363901,vec__363903,vec__363904,nid2,p__363887,nid1,vec__363902,null));
});
dynomics.space.ui.make_curve_component = (function dynomics$space$ui$make_curve_component(zoom,node_scale,nodes,msgs,selected_curves,p__363910){
var vec__363916 = p__363910;
var vec__363917 = cljs.core.nth.call(null,vec__363916,(0),null);
var id = cljs.core.nth.call(null,vec__363917,(0),null);
var node_cp_ids = cljs.core.nth.call(null,vec__363917,(1),null);
var curve_type = cljs.core.nth.call(null,vec__363916,(1),null);
var pth = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378),id], null);
var e = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"path","path",-188191168),pth], null);
if(typeof dynomics.space.ui.t_dynomics$space$ui363918 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui363918 = (function (pth,curve_type,zoom,vec__363917,vec__363916,p__363910,node_cp_ids,node_scale,selected_curves,e,make_curve_component,msgs,nodes,id,meta363919){
this.pth = pth;
this.curve_type = curve_type;
this.zoom = zoom;
this.vec__363917 = vec__363917;
this.vec__363916 = vec__363916;
this.p__363910 = p__363910;
this.node_cp_ids = node_cp_ids;
this.node_scale = node_scale;
this.selected_curves = selected_curves;
this.e = e;
this.make_curve_component = make_curve_component;
this.msgs = msgs;
this.nodes = nodes;
this.id = id;
this.meta363919 = meta363919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui363918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (pth,e,vec__363916,vec__363917,id,node_cp_ids,curve_type){
return (function (_363920,meta363919__$1){
var self__ = this;
var _363920__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui363918(self__.pth,self__.curve_type,self__.zoom,self__.vec__363917,self__.vec__363916,self__.p__363910,self__.node_cp_ids,self__.node_scale,self__.selected_curves,self__.e,self__.make_curve_component,self__.msgs,self__.nodes,self__.id,meta363919__$1));
});})(pth,e,vec__363916,vec__363917,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui363918.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (pth,e,vec__363916,vec__363917,id,node_cp_ids,curve_type){
return (function (_363920){
var self__ = this;
var _363920__$1 = this;
return self__.meta363919;
});})(pth,e,vec__363916,vec__363917,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui363918.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui363918.prototype.om$core$IRender$render$arity$1 = ((function (pth,e,vec__363916,vec__363917,id,node_cp_ids,curve_type){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.path.call(null,{"key": [cljs.core.str("curve_"),cljs.core.str(self__.id)].join(''), "className": [cljs.core.str("curve "),cljs.core.str((cljs.core.truth_(self__.curve_type)?[cljs.core.str("curve_"),cljs.core.str(self__.curve_type)].join(''):null)),cljs.core.str((cljs.core.truth_(self__.selected_curves.call(null,self__.pth))?" selected_curve":null))].join(''), "strokeWidth": ((self__.node_scale / (5)) / self__.zoom), "onClick": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "onMouseMove": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "d": dynomics.ui.svg.to_svg_path.call(null,dynomics.ui.svg.to_beziers.call(null,cljs.core.map.call(null,self__.nodes,cljs.core.map.call(null,cljs.core.first,self__.node_cp_ids)),cljs.core.map.call(null,cljs.core.last,self__.node_cp_ids)))});
});})(pth,e,vec__363916,vec__363917,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui363918.getBasis = ((function (pth,e,vec__363916,vec__363917,id,node_cp_ids,curve_type){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pth","pth",1900111558,null),new cljs.core.Symbol(null,"curve-type","curve-type",-1863700632,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"vec__363917","vec__363917",1458437418,null),new cljs.core.Symbol(null,"vec__363916","vec__363916",-349203285,null),new cljs.core.Symbol(null,"p__363910","p__363910",-286635956,null),new cljs.core.Symbol(null,"node-cp-ids","node-cp-ids",296302734,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-curve-component","make-curve-component",-1782572970,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"node-cp-ids","node-cp-ids",296302734,null)], null),new cljs.core.Symbol(null,"curve-type","curve-type",-1863700632,null)], null)], null)))], null)),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta363919","meta363919",254873613,null)], null);
});})(pth,e,vec__363916,vec__363917,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui363918.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui363918.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui363918";

dynomics.space.ui.t_dynomics$space$ui363918.cljs$lang$ctorPrWriter = ((function (pth,e,vec__363916,vec__363917,id,node_cp_ids,curve_type){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui363918");
});})(pth,e,vec__363916,vec__363917,id,node_cp_ids,curve_type))
;

dynomics.space.ui.__GT_t_dynomics$space$ui363918 = ((function (pth,e,vec__363916,vec__363917,id,node_cp_ids,curve_type){
return (function dynomics$space$ui$make_curve_component_$___GT_t_dynomics$space$ui363918(pth__$1,curve_type__$1,zoom__$1,vec__363917__$1,vec__363916__$1,p__363910__$1,node_cp_ids__$1,node_scale__$1,selected_curves__$1,e__$1,make_curve_component__$1,msgs__$1,nodes__$1,id__$1,meta363919){
return (new dynomics.space.ui.t_dynomics$space$ui363918(pth__$1,curve_type__$1,zoom__$1,vec__363917__$1,vec__363916__$1,p__363910__$1,node_cp_ids__$1,node_scale__$1,selected_curves__$1,e__$1,make_curve_component__$1,msgs__$1,nodes__$1,id__$1,meta363919));
});})(pth,e,vec__363916,vec__363917,id,node_cp_ids,curve_type))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui363918(pth,curve_type,zoom,vec__363917,vec__363916,p__363910,node_cp_ids,node_scale,selected_curves,e,dynomics$space$ui$make_curve_component,msgs,nodes,id,null));
});
dynomics.space.ui.make_open_region_component = (function dynomics$space$ui$make_open_region_component(p__363921){
var map__363934 = p__363921;
var map__363934__$1 = ((((!((map__363934 == null)))?((((map__363934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__363934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__363934):map__363934);
var node_id = cljs.core.get.call(null,map__363934__$1,new cljs.core.Keyword(null,"node-id","node-id",779482292));
var quadrant_type = cljs.core.get.call(null,map__363934__$1,new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370));
var vec__363935 = cljs.core.get.call(null,map__363934__$1,new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631));
var qx = cljs.core.nth.call(null,vec__363935,(0),null);
var qy = cljs.core.nth.call(null,vec__363935,(1),null);
var vec__363936 = cljs.core.get.call(null,map__363934__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p1 = cljs.core.nth.call(null,vec__363936,(0),null);
var p2 = cljs.core.nth.call(null,vec__363936,(1),null);
var map__363937 = cljs.core.nth.call(null,vec__363936,(2),null);
var map__363937__$1 = ((((!((map__363937 == null)))?((((map__363937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__363937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__363937):map__363937);
var p3 = map__363937__$1;
var vec__363938 = cljs.core.get.call(null,map__363937__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var x = cljs.core.nth.call(null,vec__363938,(0),null);
var y = cljs.core.nth.call(null,vec__363938,(1),null);
var vec__363939 = cljs.core.get.call(null,map__363937__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__363940 = cljs.core.nth.call(null,vec__363939,(0),null);
var cx = cljs.core.nth.call(null,vec__363940,(0),null);
var cy = cljs.core.nth.call(null,vec__363940,(1),null);
var p4 = cljs.core.nth.call(null,vec__363936,(3),null);
if(typeof dynomics.space.ui.t_dynomics$space$ui363943 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui363943 = (function (x,p__363921,y,p2,p4,p3,vec__363936,vec__363935,qx,map__363937,map__363934,vec__363939,qy,p1,vec__363938,vec__363940,make_open_region_component,cx,cy,node_id,quadrant_type,meta363944){
this.x = x;
this.p__363921 = p__363921;
this.y = y;
this.p2 = p2;
this.p4 = p4;
this.p3 = p3;
this.vec__363936 = vec__363936;
this.vec__363935 = vec__363935;
this.qx = qx;
this.map__363937 = map__363937;
this.map__363934 = map__363934;
this.vec__363939 = vec__363939;
this.qy = qy;
this.p1 = p1;
this.vec__363938 = vec__363938;
this.vec__363940 = vec__363940;
this.make_open_region_component = make_open_region_component;
this.cx = cx;
this.cy = cy;
this.node_id = node_id;
this.quadrant_type = quadrant_type;
this.meta363944 = meta363944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui363943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__363934,map__363934__$1,node_id,quadrant_type,vec__363935,qx,qy,vec__363936,p1,p2,map__363937,map__363937__$1,p3,vec__363938,x,y,vec__363939,vec__363940,cx,cy,p4){
return (function (_363945,meta363944__$1){
var self__ = this;
var _363945__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui363943(self__.x,self__.p__363921,self__.y,self__.p2,self__.p4,self__.p3,self__.vec__363936,self__.vec__363935,self__.qx,self__.map__363937,self__.map__363934,self__.vec__363939,self__.qy,self__.p1,self__.vec__363938,self__.vec__363940,self__.make_open_region_component,self__.cx,self__.cy,self__.node_id,self__.quadrant_type,meta363944__$1));
});})(map__363934,map__363934__$1,node_id,quadrant_type,vec__363935,qx,qy,vec__363936,p1,p2,map__363937,map__363937__$1,p3,vec__363938,x,y,vec__363939,vec__363940,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui363943.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__363934,map__363934__$1,node_id,quadrant_type,vec__363935,qx,qy,vec__363936,p1,p2,map__363937,map__363937__$1,p3,vec__363938,x,y,vec__363939,vec__363940,cx,cy,p4){
return (function (_363945){
var self__ = this;
var _363945__$1 = this;
return self__.meta363944;
});})(map__363934,map__363934__$1,node_id,quadrant_type,vec__363935,qx,qy,vec__363936,p1,p2,map__363937,map__363937__$1,p3,vec__363938,x,y,vec__363939,vec__363940,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui363943.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui363943.prototype.om$core$IRender$render$arity$1 = ((function (map__363934,map__363934__$1,node_id,quadrant_type,vec__363935,qx,qy,vec__363936,p1,p2,map__363937,map__363937__$1,p3,vec__363938,x,y,vec__363939,vec__363940,cx,cy,p4){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.g.call(null,{},om.dom.defs.call(null,{},om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(self__.node_id),cljs.core.str("_"),cljs.core.str(self__.quadrant_type)].join(''), "gradientUnits": "userSpaceOnUse", "cx": self__.x, "cy": self__.y, "r": 0.04},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,self__.quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,self__.quadrant_type), "stopOpacity": "0"}))),om.dom.path.call(null,{"className": [cljs.core.str("dopen_region "),cljs.core.str([cljs.core.str("dopen_region_type_"),cljs.core.str(self__.quadrant_type)].join(''))].join(''), "fill": [cljs.core.str("url(#"),cljs.core.str([cljs.core.str("qg_"),cljs.core.str(self__.node_id),cljs.core.str("_"),cljs.core.str(self__.quadrant_type)].join('')),cljs.core.str(")")].join(''), "d": [cljs.core.str(dynomics.ui.svg.to_svg_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p1,self__.p2], null))),cljs.core.str(dynomics.ui.svg.to_svg_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,self__.p3,new cljs.core.Keyword(null,"ml","ml",1909675057),"L"),self__.p4], null))),cljs.core.str("z")].join('')}));
});})(map__363934,map__363934__$1,node_id,quadrant_type,vec__363935,qx,qy,vec__363936,p1,p2,map__363937,map__363937__$1,p3,vec__363938,x,y,vec__363939,vec__363940,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui363943.getBasis = ((function (map__363934,map__363934__$1,node_id,quadrant_type,vec__363935,qx,qy,vec__363936,p1,p2,map__363937,map__363937__$1,p3,vec__363938,x,y,vec__363939,vec__363940,cx,cy,p4){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"p__363921","p__363921",1059459809,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null),new cljs.core.Symbol(null,"p4","p4",550404713,null),new cljs.core.Symbol(null,"p3","p3",-923395030,null),new cljs.core.Symbol(null,"vec__363936","vec__363936",-492518678,null),new cljs.core.Symbol(null,"vec__363935","vec__363935",-1212177237,null),new cljs.core.Symbol(null,"qx","qx",876946123,null),new cljs.core.Symbol(null,"map__363937","map__363937",593856620,null),new cljs.core.Symbol(null,"map__363934","map__363934",-2054731153,null),new cljs.core.Symbol(null,"vec__363939","vec__363939",1931626480,null),new cljs.core.Symbol(null,"qy","qy",1271868883,null),new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"vec__363938","vec__363938",1797344471,null),new cljs.core.Symbol(null,"vec__363940","vec__363940",1165271735,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-open-region-component","make-open-region-component",530106712,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Keyword(null,"node-id","node-id",779482292),new cljs.core.Symbol(null,"quadrant-type","quadrant-type",333980157,null),new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"qx","qx",876946123,null),new cljs.core.Symbol(null,"qy","qy",1271868883,null)], null),new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"cy","cy",-1899104709,null)], null)], null),new cljs.core.Keyword(null,"control-points","control-points",-238538325),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"p3","p3",-923395030,null)], true, false),new cljs.core.Symbol(null,"p4","p4",550404713,null)], null),new cljs.core.Keyword(null,"points","points",-1486596883)], true, false)], null)))], null)),new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"cy","cy",-1899104709,null),new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Symbol(null,"quadrant-type","quadrant-type",333980157,null),new cljs.core.Symbol(null,"meta363944","meta363944",-540362586,null)], null);
});})(map__363934,map__363934__$1,node_id,quadrant_type,vec__363935,qx,qy,vec__363936,p1,p2,map__363937,map__363937__$1,p3,vec__363938,x,y,vec__363939,vec__363940,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui363943.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui363943.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui363943";

dynomics.space.ui.t_dynomics$space$ui363943.cljs$lang$ctorPrWriter = ((function (map__363934,map__363934__$1,node_id,quadrant_type,vec__363935,qx,qy,vec__363936,p1,p2,map__363937,map__363937__$1,p3,vec__363938,x,y,vec__363939,vec__363940,cx,cy,p4){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui363943");
});})(map__363934,map__363934__$1,node_id,quadrant_type,vec__363935,qx,qy,vec__363936,p1,p2,map__363937,map__363937__$1,p3,vec__363938,x,y,vec__363939,vec__363940,cx,cy,p4))
;

dynomics.space.ui.__GT_t_dynomics$space$ui363943 = ((function (map__363934,map__363934__$1,node_id,quadrant_type,vec__363935,qx,qy,vec__363936,p1,p2,map__363937,map__363937__$1,p3,vec__363938,x,y,vec__363939,vec__363940,cx,cy,p4){
return (function dynomics$space$ui$make_open_region_component_$___GT_t_dynomics$space$ui363943(x__$1,p__363921__$1,y__$1,p2__$1,p4__$1,p3__$1,vec__363936__$1,vec__363935__$1,qx__$1,map__363937__$2,map__363934__$2,vec__363939__$1,qy__$1,p1__$1,vec__363938__$1,vec__363940__$1,make_open_region_component__$1,cx__$1,cy__$1,node_id__$1,quadrant_type__$1,meta363944){
return (new dynomics.space.ui.t_dynomics$space$ui363943(x__$1,p__363921__$1,y__$1,p2__$1,p4__$1,p3__$1,vec__363936__$1,vec__363935__$1,qx__$1,map__363937__$2,map__363934__$2,vec__363939__$1,qy__$1,p1__$1,vec__363938__$1,vec__363940__$1,make_open_region_component__$1,cx__$1,cy__$1,node_id__$1,quadrant_type__$1,meta363944));
});})(map__363934,map__363934__$1,node_id,quadrant_type,vec__363935,qx,qy,vec__363936,p1,p2,map__363937,map__363937__$1,p3,vec__363938,x,y,vec__363939,vec__363940,cx,cy,p4))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui363943(x,p__363921,y,p2,p4,p3,vec__363936,vec__363935,qx,map__363937__$1,map__363934__$1,vec__363939,qy,p1,vec__363938,vec__363940,dynomics$space$ui$make_open_region_component,cx,cy,node_id,quadrant_type,null));
});
/**
 * Returns a component for a node and its connections
 */
dynomics.space.ui.make_node_component = (function dynomics$space$ui$make_node_component(p__363946){
var map__363965 = p__363946;
var map__363965__$1 = ((((!((map__363965 == null)))?((((map__363965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__363965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__363965):map__363965);
var map__363966 = cljs.core.get.call(null,map__363965__$1,new cljs.core.Keyword(null,"node","node",581201198));
var map__363966__$1 = ((((!((map__363966 == null)))?((((map__363966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__363966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__363966):map__363966);
var node = map__363966__$1;
var vec__363967 = cljs.core.get.call(null,map__363966__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__363967,(0),null);
var y = cljs.core.nth.call(null,vec__363967,(1),null);
var t = cljs.core.get.call(null,map__363966__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var node_type = cljs.core.get.call(null,map__363966__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var id = cljs.core.get.call(null,map__363966__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var connections = cljs.core.get.call(null,map__363966__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var node_scale = cljs.core.get.call(null,map__363965__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var selected_nodes = cljs.core.get.call(null,map__363965__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var active_nodes = cljs.core.get.call(null,map__363965__$1,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891));
var show = cljs.core.get.call(null,map__363965__$1,new cljs.core.Keyword(null,"show","show",-576705889));
var msgs = cljs.core.get.call(null,map__363965__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var zoom = cljs.core.get.call(null,map__363965__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var pth = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id], null);
if(typeof dynomics.space.ui.t_dynomics$space$ui363970 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui363970 = (function (t,connections,x,selected_nodes,active_nodes,p__363946,show,pth,y,map__363966,zoom,make_node_component,map__363965,node_scale,vec__363967,node_type,node,msgs,id,meta363971){
this.t = t;
this.connections = connections;
this.x = x;
this.selected_nodes = selected_nodes;
this.active_nodes = active_nodes;
this.p__363946 = p__363946;
this.show = show;
this.pth = pth;
this.y = y;
this.map__363966 = map__363966;
this.zoom = zoom;
this.make_node_component = make_node_component;
this.map__363965 = map__363965;
this.node_scale = node_scale;
this.vec__363967 = vec__363967;
this.node_type = node_type;
this.node = node;
this.msgs = msgs;
this.id = id;
this.meta363971 = meta363971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui363970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (pth,map__363965,map__363965__$1,map__363966,map__363966__$1,node,vec__363967,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function (_363972,meta363971__$1){
var self__ = this;
var _363972__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui363970(self__.t,self__.connections,self__.x,self__.selected_nodes,self__.active_nodes,self__.p__363946,self__.show,self__.pth,self__.y,self__.map__363966,self__.zoom,self__.make_node_component,self__.map__363965,self__.node_scale,self__.vec__363967,self__.node_type,self__.node,self__.msgs,self__.id,meta363971__$1));
});})(pth,map__363965,map__363965__$1,map__363966,map__363966__$1,node,vec__363967,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
;

dynomics.space.ui.t_dynomics$space$ui363970.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (pth,map__363965,map__363965__$1,map__363966,map__363966__$1,node,vec__363967,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function (_363972){
var self__ = this;
var _363972__$1 = this;
return self__.meta363971;
});})(pth,map__363965,map__363965__$1,map__363966,map__363966__$1,node,vec__363967,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
;

dynomics.space.ui.t_dynomics$space$ui363970.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui363970.prototype.om$core$IRender$render$arity$1 = ((function (pth,map__363965,map__363965__$1,map__363966,map__363966__$1,node,vec__363967,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.g.call(null,{"id": [cljs.core.str("node_"),cljs.core.str(self__.id)].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.x,self__.y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),(self__.node_scale / (cljs.core.truth_(self__.zoom)?self__.zoom:(1)))], null)), "className": [cljs.core.str("node_subgraph "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,self__.pth))?"node_selected":null))].join(''), "onClick": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),self__.pth,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),self__.pth,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),self__.pth], null)), "onMouseMove": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),self__.pth], null))},(cljs.core.truth_((function (){var and__35179__auto__ = self__.node_type;
if(cljs.core.truth_(and__35179__auto__)){
return self__.show.call(null,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295));
} else {
return and__35179__auto__;
}
})())?cljs.core.map.call(null,((function (this__38609__auto____$1,pth,map__363965,map__363965__$1,map__363966,map__363966__$1,node,vec__363967,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function (p__363973){
var vec__363974 = p__363973;
var i = cljs.core.nth.call(null,vec__363974,(0),null);
var v = cljs.core.nth.call(null,vec__363974,(1),null);
return om.dom.path.call(null,{"className": [cljs.core.str("quadrant quadrant_type_"),cljs.core.str(cljs.core.get_in.call(null,dynomics.space.core.node_types,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.node_type,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),v], null)))].join(''), "d": "M0,0 v-1 A1,1 0 0,0 -1,0 z", "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),((90) * (i - (1)))], null))});
});})(this__38609__auto____$1,pth,map__363965,map__363965__$1,map__363966,map__363966__$1,node,vec__363967,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
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
})())?om.dom.g.call(null,{"className": (cljs.core.truth_(cljs.core.some.call(null,self__.selected_nodes,cljs.core.map.call(null,((function (this__38609__auto____$1,pth,map__363965,map__363965__$1,map__363966,map__363966__$1,node,vec__363967,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function (p__363975){
var map__363976 = p__363975;
var map__363976__$1 = ((((!((map__363976 == null)))?((((map__363976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__363976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__363976):map__363976);
var cid = cljs.core.get.call(null,map__363976__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null);
});})(this__38609__auto____$1,pth,map__363965,map__363965__$1,map__363966,map__363966__$1,node,vec__363967,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
,self__.connections)))?"node_connections_selected":"node_connections")},cljs.core.map.call(null,((function (this__38609__auto____$1,pth,map__363965,map__363965__$1,map__363966,map__363966__$1,node,vec__363967,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function (p__363978){
var map__363979 = p__363978;
var map__363979__$1 = ((((!((map__363979 == null)))?((((map__363979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__363979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__363979):map__363979);
var vec__363980 = cljs.core.get.call(null,map__363979__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var scx = cljs.core.nth.call(null,vec__363980,(0),null);
var scy = cljs.core.nth.call(null,vec__363980,(1),null);
var cid = cljs.core.get.call(null,map__363979__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vec__363982 = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(self__.zoom / self__.node_scale)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scx,scy], null));
var cx = cljs.core.nth.call(null,vec__363982,(0),null);
var cy = cljs.core.nth.call(null,vec__363982,(1),null);
return om.dom.g.call(null,{"className": [cljs.core.str("node_connection"),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null)))?"node_connections_selected":null))].join(''), "id": [cljs.core.str("node_"),cljs.core.str(self__.id),cljs.core.str("_connection_"),cljs.core.str(cid)].join('')},om.dom.line.call(null,{"x1": (0), "y1": (0), "x2": cx, "y2": cy, "className": "node_connection_line"}),(function (){var path = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null);
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.15, "className": [cljs.core.str("node_connection_dot "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,path))?"node_selected":null))].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),cx,cy], null)), "onClick": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"id","id",-1388402092),cid], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"id","id",-1388402092),cid], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"id","id",-1388402092),cid], null))});
})());
});})(this__38609__auto____$1,pth,map__363965,map__363965__$1,map__363966,map__363966__$1,node,vec__363967,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
,self__.connections)):null),(((cljs.core.not.call(null,self__.node_type)) || (cljs.core.not.call(null,self__.show.call(null,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295)))))?om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.2, "className": [cljs.core.str("node_selector_dot"),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,self__.pth))?"node_selected":null))].join('')}):null));
});})(pth,map__363965,map__363965__$1,map__363966,map__363966__$1,node,vec__363967,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
;

dynomics.space.ui.t_dynomics$space$ui363970.getBasis = ((function (pth,map__363965,map__363965__$1,map__363966,map__363966__$1,node,vec__363967,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Symbol(null,"p__363946","p__363946",688361381,null),new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.Symbol(null,"pth","pth",1900111558,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"map__363966","map__363966",1901692744,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-component","make-node-component",-1574550003,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Keyword(null,"connections","connections",-2064090887),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"node","node",-2073234571,null)], true, false),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891),new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for a node and its connections"], null)),new cljs.core.Symbol(null,"map__363965","map__363965",-1538502067,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"vec__363967","vec__363967",1234042226,null),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta363971","meta363971",-1696250048,null)], null);
});})(pth,map__363965,map__363965__$1,map__363966,map__363966__$1,node,vec__363967,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
;

dynomics.space.ui.t_dynomics$space$ui363970.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui363970.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui363970";

dynomics.space.ui.t_dynomics$space$ui363970.cljs$lang$ctorPrWriter = ((function (pth,map__363965,map__363965__$1,map__363966,map__363966__$1,node,vec__363967,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui363970");
});})(pth,map__363965,map__363965__$1,map__363966,map__363966__$1,node,vec__363967,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
;

dynomics.space.ui.__GT_t_dynomics$space$ui363970 = ((function (pth,map__363965,map__363965__$1,map__363966,map__363966__$1,node,vec__363967,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom){
return (function dynomics$space$ui$make_node_component_$___GT_t_dynomics$space$ui363970(t__$1,connections__$1,x__$1,selected_nodes__$1,active_nodes__$1,p__363946__$1,show__$1,pth__$1,y__$1,map__363966__$2,zoom__$1,make_node_component__$1,map__363965__$2,node_scale__$1,vec__363967__$1,node_type__$1,node__$1,msgs__$1,id__$1,meta363971){
return (new dynomics.space.ui.t_dynomics$space$ui363970(t__$1,connections__$1,x__$1,selected_nodes__$1,active_nodes__$1,p__363946__$1,show__$1,pth__$1,y__$1,map__363966__$2,zoom__$1,make_node_component__$1,map__363965__$2,node_scale__$1,vec__363967__$1,node_type__$1,node__$1,msgs__$1,id__$1,meta363971));
});})(pth,map__363965,map__363965__$1,map__363966,map__363966__$1,node,vec__363967,x,y,t,node_type,id,connections,node_scale,selected_nodes,active_nodes,show,msgs,zoom))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui363970(t,connections,x,selected_nodes,active_nodes,p__363946,show,pth,y,map__363966__$1,zoom,dynomics$space$ui$make_node_component,map__363965__$1,node_scale,vec__363967,node_type,node,msgs,id,null));
});
dynomics.space.ui.test_component = (function dynomics$space$ui$test_component(x){
if(typeof dynomics.space.ui.t_dynomics$space$ui363986 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui363986 = (function (test_component,x,meta363987){
this.test_component = test_component;
this.x = x;
this.meta363987 = meta363987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui363986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_363988,meta363987__$1){
var self__ = this;
var _363988__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui363986(self__.test_component,self__.x,meta363987__$1));
});

dynomics.space.ui.t_dynomics$space$ui363986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_363988){
var self__ = this;
var _363988__$1 = this;
return self__.meta363987;
});

dynomics.space.ui.t_dynomics$space$ui363986.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui363986.prototype.om$core$IRender$render$arity$1 = (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.2, "fill": (((0.5 > Math.random()))?"orange":"green")});
});

dynomics.space.ui.t_dynomics$space$ui363986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"test-component","test-component",1959093538,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)))], null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"meta363987","meta363987",1984748159,null)], null);
});

dynomics.space.ui.t_dynomics$space$ui363986.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui363986.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui363986";

dynomics.space.ui.t_dynomics$space$ui363986.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui363986");
});

dynomics.space.ui.__GT_t_dynomics$space$ui363986 = (function dynomics$space$ui$test_component_$___GT_t_dynomics$space$ui363986(test_component__$1,x__$1,meta363987){
return (new dynomics.space.ui.t_dynomics$space$ui363986(test_component__$1,x__$1,meta363987));
});

}

return (new dynomics.space.ui.t_dynomics$space$ui363986(dynomics$space$ui$test_component,x,null));
});
dynomics.space.ui.make_quadrant_gradients = (function dynomics$space$ui$make_quadrant_gradients(){
var iter__35971__auto__ = (function dynomics$space$ui$make_quadrant_gradients_$_iter__363993(s__363994){
return (new cljs.core.LazySeq(null,(function (){
var s__363994__$1 = s__363994;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__363994__$1);
if(temp__4657__auto__){
var s__363994__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__363994__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__363994__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__363996 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__363995 = (0);
while(true){
if((i__363995 < size__35970__auto__)){
var quadrant_type = cljs.core._nth.call(null,c__35969__auto__,i__363995);
cljs.core.chunk_append.call(null,b__363996,om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(quadrant_type)].join(''), "gradientUnits": "objectBoundingBox", "cx": (0), "cy": (0), "r": (1)},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "0"})));

var G__363997 = (i__363995 + (1));
i__363995 = G__363997;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__363996),dynomics$space$ui$make_quadrant_gradients_$_iter__363993.call(null,cljs.core.chunk_rest.call(null,s__363994__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__363996),null);
}
} else {
var quadrant_type = cljs.core.first.call(null,s__363994__$2);
return cljs.core.cons.call(null,om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(quadrant_type)].join(''), "gradientUnits": "objectBoundingBox", "cx": (0), "cy": (0), "r": (1)},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "0"})),dynomics$space$ui$make_quadrant_gradients_$_iter__363993.call(null,cljs.core.rest.call(null,s__363994__$2)));
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
dynomics.space.ui.make_node_context_menu = (function dynomics$space$ui$make_node_context_menu(p__363998){
var map__364004 = p__363998;
var map__364004__$1 = ((((!((map__364004 == null)))?((((map__364004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__364004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__364004):map__364004);
var s = map__364004__$1;
var map__364005 = cljs.core.get.call(null,map__364004__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__364005__$1 = ((((!((map__364005 == null)))?((((map__364005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__364005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__364005):map__364005);
var vec__364006 = cljs.core.get.call(null,map__364005__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__364006,(0),null);
var y = cljs.core.nth.call(null,vec__364006,(1),null);
var sn = cljs.core.get.call(null,map__364004__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var state_updates = cljs.core.get.call(null,map__364004__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__364004__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
return om.dom.circle.call(null,{"id": "add-node-button", "cx": 0.5, "cy": 0.5, "r": 0.1, "fill": "red"});
});
dynomics.space.ui.context_menu_fn = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),dynomics.space.ui.make_node_context_menu], null);
/**
 * Returns a component for the phase-space editor
 */
dynomics.space.ui.make_space_component = (function dynomics$space$ui$make_space_component(p__364009){
var map__364019 = p__364009;
var map__364019__$1 = ((((!((map__364019 == null)))?((((map__364019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__364019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__364019):map__364019);
var state = map__364019__$1;
var vec__364020 = cljs.core.get.call(null,map__364019__$1,new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331));
var ox = cljs.core.nth.call(null,vec__364020,(0),null);
var oy = cljs.core.nth.call(null,vec__364020,(1),null);
var show = cljs.core.get.call(null,map__364019__$1,new cljs.core.Keyword(null,"show","show",-576705889));
var zoom = cljs.core.get.call(null,map__364019__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var vec__364021 = cljs.core.get.call(null,map__364019__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var px = cljs.core.nth.call(null,vec__364021,(0),null);
var py = cljs.core.nth.call(null,vec__364021,(1),null);
var su = cljs.core.get.call(null,map__364019__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__364019__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var map__364022 = cljs.core.get.call(null,map__364019__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__364022__$1 = ((((!((map__364022 == null)))?((((map__364022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__364022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__364022):map__364022);
var space = map__364022__$1;
var selected_nodes = cljs.core.get.call(null,map__364022__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var active_nodes = cljs.core.get.call(null,map__364022__$1,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891));
var edges = cljs.core.get.call(null,map__364022__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var curves = cljs.core.get.call(null,map__364022__$1,new cljs.core.Keyword(null,"curves","curves",-510805378));
var curve_types = cljs.core.get.call(null,map__364022__$1,new cljs.core.Keyword(null,"curve-types","curve-types",1650772099));
var node_scale = cljs.core.get.call(null,map__364022__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var regions = cljs.core.get.call(null,map__364022__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var selected_curves = cljs.core.get.call(null,map__364022__$1,new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493));
var compatibilities = cljs.core.get.call(null,map__364022__$1,new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024));
var nodes = cljs.core.get.call(null,map__364022__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var graph = cljs.core.get.call(null,map__364022__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var context_menu = cljs.core.get.call(null,map__364019__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var cf = cljs.core.get.call(null,map__364019__$1,new cljs.core.Keyword(null,"cf","cf",1480736310));
if(typeof dynomics.space.ui.t_dynomics$space$ui364025 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui364025 = (function (selected_nodes,active_nodes,py,edges,oy,curves,show,zoom,make_space_component,space,curve_types,node_scale,regions,ox,selected_curves,px,vec__364020,vec__364021,map__364019,map__364022,state,compatibilities,su,msgs,nodes,p__364009,graph,context_menu,cf,meta364026){
this.selected_nodes = selected_nodes;
this.active_nodes = active_nodes;
this.py = py;
this.edges = edges;
this.oy = oy;
this.curves = curves;
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
this.vec__364020 = vec__364020;
this.vec__364021 = vec__364021;
this.map__364019 = map__364019;
this.map__364022 = map__364022;
this.state = state;
this.compatibilities = compatibilities;
this.su = su;
this.msgs = msgs;
this.nodes = nodes;
this.p__364009 = p__364009;
this.graph = graph;
this.context_menu = context_menu;
this.cf = cf;
this.meta364026 = meta364026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui364025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__364019,map__364019__$1,state,vec__364020,ox,oy,show,zoom,vec__364021,px,py,su,msgs,map__364022,map__364022__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (_364027,meta364026__$1){
var self__ = this;
var _364027__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui364025(self__.selected_nodes,self__.active_nodes,self__.py,self__.edges,self__.oy,self__.curves,self__.show,self__.zoom,self__.make_space_component,self__.space,self__.curve_types,self__.node_scale,self__.regions,self__.ox,self__.selected_curves,self__.px,self__.vec__364020,self__.vec__364021,self__.map__364019,self__.map__364022,self__.state,self__.compatibilities,self__.su,self__.msgs,self__.nodes,self__.p__364009,self__.graph,self__.context_menu,self__.cf,meta364026__$1));
});})(map__364019,map__364019__$1,state,vec__364020,ox,oy,show,zoom,vec__364021,px,py,su,msgs,map__364022,map__364022__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui364025.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__364019,map__364019__$1,state,vec__364020,ox,oy,show,zoom,vec__364021,px,py,su,msgs,map__364022,map__364022__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (_364027){
var self__ = this;
var _364027__$1 = this;
return self__.meta364026;
});})(map__364019,map__364019__$1,state,vec__364020,ox,oy,show,zoom,vec__364021,px,py,su,msgs,map__364022,map__364022__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui364025.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui364025.prototype.om$core$IRender$render$arity$1 = ((function (map__364019,map__364019__$1,state,vec__364020,ox,oy,show,zoom,vec__364021,px,py,su,msgs,map__364022,map__364022__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.div.call(null,{"className": [cljs.core.str("space "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),self__.cf))?"selected_function":"hidden_function"))].join('')},om.dom.svg.call(null,{"image-rendering": "optimizeQuality", "zoomAndPan": false, "preserveAspectRatio": "xMidYMin", "width": "100%", "shape-rendering": "crispEdges", "xmlns": "http://www.w3.org/2000/svg", "className": "space_svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "id": "space", "viewBox": "-1 -1 2 2", "height": "100%"},om.dom.defs.call(null,{"key": "defs"}),om.dom.g.call(null,{"id": "space_root", "key": "space_root", "onMouseMove": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseDown": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseUp": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onWheel": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onContextMenu": ((function (this__38609__auto____$1,map__364019,map__364019__$1,state,vec__364020,ox,oy,show,zoom,vec__364021,px,py,su,msgs,map__364022,map__364022__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (e){
e.preventDefault();

return null;
});})(this__38609__auto____$1,map__364019,map__364019__$1,state,vec__364020,ox,oy,show,zoom,vec__364021,px,py,su,msgs,map__364022,map__364022__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
, "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.ox,self__.oy], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),self__.zoom,self__.zoom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.px,self__.py], null))},om.dom.rect.call(null,{"x": (-16), "y": (-16), "width": (32), "height": (32), "className": "space_background"}),om.dom.rect.call(null,{"x": (0), "y": (0), "width": (1), "height": (1), "className": "space_space"}),om.core.build_all.call(null,dynomics.space.core.P.call(null,dynomics.space.ui.make_curve_component,self__.zoom,self__.node_scale,self__.nodes,self__.msgs,self__.selected_curves),cljs.core.map.call(null,cljs.core.vector,self__.curves,cljs.core.map.call(null,dynomics.space.core.C.call(null,self__.curve_types,cljs.core.key),self__.curves))),null,null,om.core.build_all.call(null,dynomics.space.ui.make_edge_component,cljs.core.map.call(null,((function (this__38609__auto____$1,map__364019,map__364019__$1,state,vec__364020,ox,oy,show,zoom,vec__364021,px,py,su,msgs,map__364022,map__364022__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (e){
return cljs.core.assoc.call(null,dynomics.space.core.with_compatibilities.call(null,e,self__.compatibilities),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale);
});})(this__38609__auto____$1,map__364019,map__364019__$1,state,vec__364020,ox,oy,show,zoom,vec__364021,px,py,su,msgs,map__364022,map__364022__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
,cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.edge_points,self__.nodes),self__.edges))),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__38609__auto____$1,map__364019,map__364019__$1,state,vec__364020,ox,oy,show,zoom,vec__364021,px,py,su,msgs,map__364022,map__364022__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (node){
return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),self__.su,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),self__.zoom,new cljs.core.Keyword(null,"show","show",-576705889),self__.show,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891),self__.active_nodes], null),new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''));
});})(this__38609__auto____$1,map__364019,map__364019__$1,state,vec__364020,ox,oy,show,zoom,vec__364021,px,py,su,msgs,map__364022,map__364022__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
,cljs.core.vals.call(null,cljs.core.apply.call(null,cljs.core.dissoc,self__.nodes,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),cljs.core.map.call(null,cljs.core.last,self__.selected_nodes))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__38609__auto____$1,map__364019,map__364019__$1,state,vec__364020,ox,oy,show,zoom,vec__364021,px,py,su,msgs,map__364022,map__364022__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (node){
return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),self__.su,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),self__.zoom,new cljs.core.Keyword(null,"show","show",-576705889),self__.show,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891),self__.active_nodes], null),new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''));
});})(this__38609__auto____$1,map__364019,map__364019__$1,state,vec__364020,ox,oy,show,zoom,vec__364021,px,py,su,msgs,map__364022,map__364022__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
,cljs.core.vals.call(null,cljs.core.select_keys.call(null,self__.nodes,cljs.core.map.call(null,cljs.core.last,self__.selected_nodes)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),null,null)));
});})(map__364019,map__364019__$1,state,vec__364020,ox,oy,show,zoom,vec__364021,px,py,su,msgs,map__364022,map__364022__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui364025.getBasis = ((function (map__364019,map__364019__$1,state,vec__364020,ox,oy,show,zoom,vec__364021,px,py,su,msgs,map__364022,map__364022__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (){
return new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Symbol(null,"py","py",-1256449853,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"oy","oy",809196068,null),new cljs.core.Symbol(null,"curves","curves",1129726149,null),new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-space-component","make-space-component",-638751478,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ox","ox",-2083100366,null),new cljs.core.Symbol(null,"oy","oy",809196068,null)], null),new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"px","px",1921861426,null),new cljs.core.Symbol(null,"py","py",-1256449853,null)], null),new cljs.core.Symbol(null,"su","su",155163255,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"curves","curves",1129726149,null),new cljs.core.Symbol(null,"curve-types","curve-types",-1003663670,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"compatibilities","compatibilities",289068503,null),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null)],[new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"cf","cf",1480736310)])], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the phase-space editor"], null)),new cljs.core.Symbol(null,"space","space",1988665002,null),new cljs.core.Symbol(null,"curve-types","curve-types",-1003663670,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"ox","ox",-2083100366,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.Symbol(null,"px","px",1921861426,null),new cljs.core.Symbol(null,"vec__364020","vec__364020",-1762283373,null),new cljs.core.Symbol(null,"vec__364021","vec__364021",-223986189,null),new cljs.core.Symbol(null,"map__364019","map__364019",-1786156173,null),new cljs.core.Symbol(null,"map__364022","map__364022",-422799852,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"compatibilities","compatibilities",289068503,null),new cljs.core.Symbol(null,"su","su",155163255,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"p__364009","p__364009",2018788379,null),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Symbol(null,"meta364026","meta364026",-340509560,null)], null);
});})(map__364019,map__364019__$1,state,vec__364020,ox,oy,show,zoom,vec__364021,px,py,su,msgs,map__364022,map__364022__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui364025.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui364025.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui364025";

dynomics.space.ui.t_dynomics$space$ui364025.cljs$lang$ctorPrWriter = ((function (map__364019,map__364019__$1,state,vec__364020,ox,oy,show,zoom,vec__364021,px,py,su,msgs,map__364022,map__364022__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.space.ui/t_dynomics$space$ui364025");
});})(map__364019,map__364019__$1,state,vec__364020,ox,oy,show,zoom,vec__364021,px,py,su,msgs,map__364022,map__364022__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.__GT_t_dynomics$space$ui364025 = ((function (map__364019,map__364019__$1,state,vec__364020,ox,oy,show,zoom,vec__364021,px,py,su,msgs,map__364022,map__364022__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function dynomics$space$ui$make_space_component_$___GT_t_dynomics$space$ui364025(selected_nodes__$1,active_nodes__$1,py__$1,edges__$1,oy__$1,curves__$1,show__$1,zoom__$1,make_space_component__$1,space__$1,curve_types__$1,node_scale__$1,regions__$1,ox__$1,selected_curves__$1,px__$1,vec__364020__$1,vec__364021__$1,map__364019__$2,map__364022__$2,state__$1,compatibilities__$1,su__$1,msgs__$1,nodes__$1,p__364009__$1,graph__$1,context_menu__$1,cf__$1,meta364026){
return (new dynomics.space.ui.t_dynomics$space$ui364025(selected_nodes__$1,active_nodes__$1,py__$1,edges__$1,oy__$1,curves__$1,show__$1,zoom__$1,make_space_component__$1,space__$1,curve_types__$1,node_scale__$1,regions__$1,ox__$1,selected_curves__$1,px__$1,vec__364020__$1,vec__364021__$1,map__364019__$2,map__364022__$2,state__$1,compatibilities__$1,su__$1,msgs__$1,nodes__$1,p__364009__$1,graph__$1,context_menu__$1,cf__$1,meta364026));
});})(map__364019,map__364019__$1,state,vec__364020,ox,oy,show,zoom,vec__364021,px,py,su,msgs,map__364022,map__364022__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui364025(selected_nodes,active_nodes,py,edges,oy,curves,show,zoom,dynomics$space$ui$make_space_component,space,curve_types,node_scale,regions,ox,selected_curves,px,vec__364020,vec__364021,map__364019__$1,map__364022__$1,state,compatibilities,su,msgs,nodes,p__364009,graph,context_menu,cf,null));
});

//# sourceMappingURL=ui.js.map?rel=1459158468498