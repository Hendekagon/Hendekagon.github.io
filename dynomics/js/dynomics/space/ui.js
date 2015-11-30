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
var args883659 = [];
var len__25269__auto___883662 = arguments.length;
var i__25270__auto___883663 = (0);
while(true){
if((i__25270__auto___883663 < len__25269__auto___883662)){
args883659.push((arguments[i__25270__auto___883663]));

var G__883664 = (i__25270__auto___883663 + (1));
i__25270__auto___883663 = G__883664;
continue;
} else {
}
break;
}

var G__883661 = args883659.length;
switch (G__883661) {
case 1:
return dynomics.space.ui.to_coords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.ui.to_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args883659.length)].join('')));

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
var args883666 = [];
var len__25269__auto___883669 = arguments.length;
var i__25270__auto___883670 = (0);
while(true){
if((i__25270__auto___883670 < len__25269__auto___883669)){
args883666.push((arguments[i__25270__auto___883670]));

var G__883671 = (i__25270__auto___883670 + (1));
i__25270__auto___883670 = G__883671;
continue;
} else {
}
break;
}

var G__883668 = args883666.length;
switch (G__883668) {
case 1:
return dynomics.space.ui.add_pan_zoom_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return dynomics.space.ui.add_pan_zoom_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args883666.length)].join('')));

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
dynomics.space.ui.toggle_pan_zoom_BANG_ = (function dynomics$space$ui$toggle_pan_zoom_BANG_(p__883673){
var map__883676 = p__883673;
var map__883676__$1 = ((((!((map__883676 == null)))?((((map__883676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__883676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__883676):map__883676);
var pz = cljs.core.get.call(null,map__883676__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
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
dynomics.space.ui.disable_pan_zoom_BANG_ = (function dynomics$space$ui$disable_pan_zoom_BANG_(p__883678){
var map__883681 = p__883678;
var map__883681__$1 = ((((!((map__883681 == null)))?((((map__883681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__883681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__883681):map__883681);
var pz = cljs.core.get.call(null,map__883681__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
pz.disablePan();

return pz.disableZoom();
});
dynomics.space.ui.enable_pan_zoom_BANG_ = (function dynomics$space$ui$enable_pan_zoom_BANG_(p__883683){
var map__883686 = p__883683;
var map__883686__$1 = ((((!((map__883686 == null)))?((((map__883686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__883686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__883686):map__883686);
var pz = cljs.core.get.call(null,map__883686__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
pz.enablePan();

return pz.enableZoom();
});
dynomics.space.ui.render_to_image = (function dynomics$space$ui$render_to_image(var_args){
var args883688 = [];
var len__25269__auto___883705 = arguments.length;
var i__25270__auto___883706 = (0);
while(true){
if((i__25270__auto___883706 < len__25269__auto___883705)){
args883688.push((arguments[i__25270__auto___883706]));

var G__883707 = (i__25270__auto___883706 + (1));
i__25270__auto___883706 = G__883707;
continue;
} else {
}
break;
}

var G__883690 = args883688.length;
switch (G__883690) {
case 0:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args883688.length)].join('')));

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
var seq__883691_883709 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni1.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
)),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni2.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
))));
var chunk__883692_883710 = null;
var count__883693_883711 = (0);
var i__883694_883712 = (0);
while(true){
if((i__883694_883712 < count__883693_883711)){
var vec__883695_883713 = cljs.core._nth.call(null,chunk__883692_883710,i__883694_883712);
var i_883714 = cljs.core.nth.call(null,vec__883695_883713,(0),null);
var j_883715 = cljs.core.nth.call(null,vec__883695_883713,(1),null);
j_883715.removeAttribute("id");

j_883715.removeAttribute("class");

j_883715.removeAttribute("data-reactid");

var ccss_883716__$1 = window.getComputedStyle(i_883714);
var seq__883696_883717 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_883716__$1.length));
var chunk__883697_883718 = null;
var count__883698_883719 = (0);
var i__883699_883720 = (0);
while(true){
if((i__883699_883720 < count__883698_883719)){
var is_883721 = cljs.core._nth.call(null,chunk__883697_883718,i__883699_883720);
var p_883722 = ccss_883716__$1.item(is_883721);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_883722)))){
j_883715.style.setProperty(p_883722,ccss_883716__$1.getPropertyValue(p_883722));
} else {
}

var G__883723 = seq__883696_883717;
var G__883724 = chunk__883697_883718;
var G__883725 = count__883698_883719;
var G__883726 = (i__883699_883720 + (1));
seq__883696_883717 = G__883723;
chunk__883697_883718 = G__883724;
count__883698_883719 = G__883725;
i__883699_883720 = G__883726;
continue;
} else {
var temp__4425__auto___883727 = cljs.core.seq.call(null,seq__883696_883717);
if(temp__4425__auto___883727){
var seq__883696_883728__$1 = temp__4425__auto___883727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__883696_883728__$1)){
var c__25014__auto___883729 = cljs.core.chunk_first.call(null,seq__883696_883728__$1);
var G__883730 = cljs.core.chunk_rest.call(null,seq__883696_883728__$1);
var G__883731 = c__25014__auto___883729;
var G__883732 = cljs.core.count.call(null,c__25014__auto___883729);
var G__883733 = (0);
seq__883696_883717 = G__883730;
chunk__883697_883718 = G__883731;
count__883698_883719 = G__883732;
i__883699_883720 = G__883733;
continue;
} else {
var is_883734 = cljs.core.first.call(null,seq__883696_883728__$1);
var p_883735 = ccss_883716__$1.item(is_883734);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_883735)))){
j_883715.style.setProperty(p_883735,ccss_883716__$1.getPropertyValue(p_883735));
} else {
}

var G__883736 = cljs.core.next.call(null,seq__883696_883728__$1);
var G__883737 = null;
var G__883738 = (0);
var G__883739 = (0);
seq__883696_883717 = G__883736;
chunk__883697_883718 = G__883737;
count__883698_883719 = G__883738;
i__883699_883720 = G__883739;
continue;
}
} else {
}
}
break;
}

var G__883740 = seq__883691_883709;
var G__883741 = chunk__883692_883710;
var G__883742 = count__883693_883711;
var G__883743 = (i__883694_883712 + (1));
seq__883691_883709 = G__883740;
chunk__883692_883710 = G__883741;
count__883693_883711 = G__883742;
i__883694_883712 = G__883743;
continue;
} else {
var temp__4425__auto___883744 = cljs.core.seq.call(null,seq__883691_883709);
if(temp__4425__auto___883744){
var seq__883691_883745__$1 = temp__4425__auto___883744;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__883691_883745__$1)){
var c__25014__auto___883746 = cljs.core.chunk_first.call(null,seq__883691_883745__$1);
var G__883747 = cljs.core.chunk_rest.call(null,seq__883691_883745__$1);
var G__883748 = c__25014__auto___883746;
var G__883749 = cljs.core.count.call(null,c__25014__auto___883746);
var G__883750 = (0);
seq__883691_883709 = G__883747;
chunk__883692_883710 = G__883748;
count__883693_883711 = G__883749;
i__883694_883712 = G__883750;
continue;
} else {
var vec__883700_883751 = cljs.core.first.call(null,seq__883691_883745__$1);
var i_883752 = cljs.core.nth.call(null,vec__883700_883751,(0),null);
var j_883753 = cljs.core.nth.call(null,vec__883700_883751,(1),null);
j_883753.removeAttribute("id");

j_883753.removeAttribute("class");

j_883753.removeAttribute("data-reactid");

var ccss_883754__$1 = window.getComputedStyle(i_883752);
var seq__883701_883755 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_883754__$1.length));
var chunk__883702_883756 = null;
var count__883703_883757 = (0);
var i__883704_883758 = (0);
while(true){
if((i__883704_883758 < count__883703_883757)){
var is_883759 = cljs.core._nth.call(null,chunk__883702_883756,i__883704_883758);
var p_883760 = ccss_883754__$1.item(is_883759);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_883760)))){
j_883753.style.setProperty(p_883760,ccss_883754__$1.getPropertyValue(p_883760));
} else {
}

var G__883761 = seq__883701_883755;
var G__883762 = chunk__883702_883756;
var G__883763 = count__883703_883757;
var G__883764 = (i__883704_883758 + (1));
seq__883701_883755 = G__883761;
chunk__883702_883756 = G__883762;
count__883703_883757 = G__883763;
i__883704_883758 = G__883764;
continue;
} else {
var temp__4425__auto___883765__$1 = cljs.core.seq.call(null,seq__883701_883755);
if(temp__4425__auto___883765__$1){
var seq__883701_883766__$1 = temp__4425__auto___883765__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__883701_883766__$1)){
var c__25014__auto___883767 = cljs.core.chunk_first.call(null,seq__883701_883766__$1);
var G__883768 = cljs.core.chunk_rest.call(null,seq__883701_883766__$1);
var G__883769 = c__25014__auto___883767;
var G__883770 = cljs.core.count.call(null,c__25014__auto___883767);
var G__883771 = (0);
seq__883701_883755 = G__883768;
chunk__883702_883756 = G__883769;
count__883703_883757 = G__883770;
i__883704_883758 = G__883771;
continue;
} else {
var is_883772 = cljs.core.first.call(null,seq__883701_883766__$1);
var p_883773 = ccss_883754__$1.item(is_883772);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_883773)))){
j_883753.style.setProperty(p_883773,ccss_883754__$1.getPropertyValue(p_883773));
} else {
}

var G__883774 = cljs.core.next.call(null,seq__883701_883766__$1);
var G__883775 = null;
var G__883776 = (0);
var G__883777 = (0);
seq__883701_883755 = G__883774;
chunk__883702_883756 = G__883775;
count__883703_883757 = G__883776;
i__883704_883758 = G__883777;
continue;
}
} else {
}
}
break;
}

var G__883778 = cljs.core.next.call(null,seq__883691_883745__$1);
var G__883779 = null;
var G__883780 = (0);
var G__883781 = (0);
seq__883691_883709 = G__883778;
chunk__883692_883710 = G__883779;
count__883693_883711 = G__883780;
i__883694_883712 = G__883781;
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
dynomics.space.ui.make_handler = (function dynomics$space$ui$make_handler(transform,type_key,p__883782){
var map__883785 = p__883782;
var map__883785__$1 = ((((!((map__883785 == null)))?((((map__883785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__883785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__883785):map__883785);
var s = map__883785__$1;
var msgs = cljs.core.get.call(null,map__883785__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var current_tool = cljs.core.get.call(null,map__883785__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
return ((function (map__883785,map__883785__$1,s,msgs,current_tool){
return (function (e){
e.stopPropagation();

var mp = transform.call(null,e.clientX,e.clientY);
cljs.core.async.put_BANG_.call(null,msgs,cljs.core.merge.call(null,s,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),type_key,new cljs.core.Keyword(null,"type","type",1174270348),current_tool,new cljs.core.Keyword(null,"position","position",-2011731912),mp,new cljs.core.Keyword(null,"event","event",301435442),e], null)));

return null;
});
;})(map__883785,map__883785__$1,s,msgs,current_tool))
});
dynomics.space.ui.arrowhead = (function dynomics$space$ui$arrowhead(trajectory){
var vec__883789 = cljs.core.subvec.call(null,trajectory,((cljs.core.count.call(null,trajectory) - (1)) - (1)),cljs.core.count.call(null,trajectory));
var p1 = cljs.core.nth.call(null,vec__883789,(0),null);
var p2 = cljs.core.nth.call(null,vec__883789,(1),null);
var vec__883790 = p2;
var ox = cljs.core.nth.call(null,vec__883790,(0),null);
var oy = cljs.core.nth.call(null,vec__883790,(1),null);
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
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__883793){
var vec__883794 = p__883793;
var x = cljs.core.nth.call(null,vec__883794,(0),null);
var y = cljs.core.nth.call(null,vec__883794,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((-1) * x),y], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(-12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(-12)], null)], null)], null));
});
dynomics.space.ui.saddle_3 = (function dynomics$space$ui$saddle_3(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__883797){
var vec__883798 = p__883797;
var x = cljs.core.nth.call(null,vec__883798,(0),null);
var y = cljs.core.nth.call(null,vec__883798,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,((-1) * y)], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(-24)], null)], null)], null));
});
dynomics.space.ui.saddle_4 = (function dynomics$space$ui$saddle_4(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__883801){
var vec__883802 = p__883801;
var x = cljs.core.nth.call(null,vec__883802,(0),null);
var y = cljs.core.nth.call(null,vec__883802,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(-12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(-8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(-16)], null)], null)], null));
});
dynomics.space.ui.saddle_5 = (function dynomics$space$ui$saddle_5(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__883805){
var vec__883806 = p__883805;
var x = cljs.core.nth.call(null,vec__883806,(0),null);
var y = cljs.core.nth.call(null,vec__883806,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.04,-0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(-12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(-16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(-8)], null)], null)], null));
});
dynomics.space.ui.spiral = (function dynomics$space$ui$spiral(var_args){
var args883807 = [];
var len__25269__auto___883810 = arguments.length;
var i__25270__auto___883811 = (0);
while(true){
if((i__25270__auto___883811 < len__25269__auto___883810)){
args883807.push((arguments[i__25270__auto___883811]));

var G__883812 = (i__25270__auto___883811 + (1));
i__25270__auto___883811 = G__883812;
continue;
} else {
}
break;
}

var G__883809 = args883807.length;
switch (G__883809) {
case 3:
return dynomics.space.ui.spiral.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return dynomics.space.ui.spiral.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args883807.length)].join('')));

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
dynomics.space.ui.make_paths = (function dynomics$space$ui$make_paths(p__883814){
var map__883821 = p__883814;
var map__883821__$1 = ((((!((map__883821 == null)))?((((map__883821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__883821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__883821):map__883821);
var space = map__883821__$1;
var nodes = cljs.core.get.call(null,map__883821__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__883821__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var regions = cljs.core.get.call(null,map__883821__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var node_scale = cljs.core.get.call(null,map__883821__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
cljs.core.println.call(null,"Regions ",regions);

return cljs.core.map.call(null,((function (map__883821,map__883821__$1,space,nodes,edges,regions,node_scale){
return (function (region){
return cljs.core.reduce.call(null,((function (map__883821,map__883821__$1,space,nodes,edges,regions,node_scale){
return (function (beziers,connection){
return cljs.core.conj.call(null,beziers,cljs.core.map.call(null,((function (map__883821,map__883821__$1,space,nodes,edges,regions,node_scale){
return (function (p__883823){
var vec__883824 = p__883823;
var nid1 = cljs.core.nth.call(null,vec__883824,(0),null);
var cid1 = cljs.core.nth.call(null,vec__883824,(1),null);
var vec__883825 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx1 = cljs.core.nth.call(null,vec__883825,(0),null);
var ny1 = cljs.core.nth.call(null,vec__883825,(1),null);
var vec__883826 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx1 = cljs.core.nth.call(null,vec__883826,(0),null);
var cy1 = cljs.core.nth.call(null,vec__883826,(1),null);
return dynomics.ui.svg.make_bezier.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx1 + (node_scale * cx1)),(ny1 + (node_scale * cy1))], null)], null));
});})(map__883821,map__883821__$1,space,nodes,edges,regions,node_scale))
,cljs.core.map.call(null,dynomics.space.core.simplify_connection,connection)));
});})(map__883821,map__883821__$1,space,nodes,edges,regions,node_scale))
,cljs.core.PersistentVector.EMPTY,region);
});})(map__883821,map__883821__$1,space,nodes,edges,regions,node_scale))
,regions);
});
/**
 * Returns a palette of tools
 */
dynomics.space.ui.make_tools_palette_component = (function dynomics$space$ui$make_tools_palette_component(p__883827){
var map__883834 = p__883827;
var map__883834__$1 = ((((!((map__883834 == null)))?((((map__883834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__883834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__883834):map__883834);
var state = map__883834__$1;
var current_tool = cljs.core.get.call(null,map__883834__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
var tools = cljs.core.get.call(null,map__883834__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
var tools_order = cljs.core.get.call(null,map__883834__$1,new cljs.core.Keyword(null,"tools-order","tools-order",-615877648));
var state_updates = cljs.core.get.call(null,map__883834__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
return om.dom.div.call(null,{"className": "dynomics_tool_things"},om.dom.div.call(null,{"className": "dynomics_tool_selectors"},cljs.core.map.call(null,((function (map__883834,map__883834__$1,state,current_tool,tools,tools_order,state_updates){
return (function (p__883836){
var vec__883837 = p__883836;
var tk = cljs.core.nth.call(null,vec__883837,(0),null);
var map__883838 = cljs.core.nth.call(null,vec__883837,(1),null);
var map__883838__$1 = ((((!((map__883838 == null)))?((((map__883838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__883838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__883838):map__883838);
var description = cljs.core.get.call(null,map__883838__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var icon = cljs.core.get.call(null,map__883838__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var keybinding = cljs.core.get.call(null,map__883838__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
return om.dom.div.call(null,{"className": [cljs.core.str("dynomics_tool_selector "),cljs.core.str(((cljs.core._EQ_.call(null,tk,current_tool))?"dynomics_tool_selected":null))].join(''), "title": [cljs.core.str(description),cljs.core.str(" ( "),cljs.core.str((((keybinding instanceof cljs.core.Keyword))?cljs.core.name.call(null,keybinding):keybinding)),cljs.core.str(" )")].join(''), "onMouseDown": ((function (vec__883837,tk,map__883838,map__883838__$1,description,icon,keybinding,map__883834,map__883834__$1,state,current_tool,tools,tools_order,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__883837,tk,map__883838,map__883838__$1,description,icon,keybinding,map__883834,map__883834__$1,state,current_tool,tools,tools_order,state_updates){
return (function (s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),tk);
});})(vec__883837,tk,map__883838,map__883838__$1,description,icon,keybinding,map__883834,map__883834__$1,state,current_tool,tools,tools_order,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tool","tool",-1298696470),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null));

return null;
});})(vec__883837,tk,map__883838,map__883838__$1,description,icon,keybinding,map__883834,map__883834__$1,state,current_tool,tools,tools_order,state_updates))
},icon);
});})(map__883834,map__883834__$1,state,current_tool,tools,tools_order,state_updates))
,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,tools),tools_order))),om.dom.div.call(null,{"className": "dynomics_current_tool_text", "title": cljs.core.get_in.call(null,tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tool,new cljs.core.Keyword(null,"description","description",-1428560544)], null))},cljs.core.get_in.call(null,tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tool,new cljs.core.Keyword(null,"name","name",1843675177)], null))));
});
/**
 * Returns a node-type component for the node types palette,
 *   which can prerender its SVG to a canvas & therefore
 *   cache the resulting image, to save on components in the DOM if need be.
 */
dynomics.space.ui.make_node_types_cached_component = (function dynomics$space$ui$make_node_types_cached_component(p__883840,owner){
var map__883846 = p__883840;
var map__883846__$1 = ((((!((map__883846 == null)))?((((map__883846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__883846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__883846):map__883846);
var id = cljs.core.get.call(null,map__883846__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.call(null,map__883846__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(typeof dynomics.space.ui.t_dynomics$space$ui883848 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui883848 = (function (make_node_types_cached_component,p__883840,owner,map__883846,id,type,meta883849){
this.make_node_types_cached_component = make_node_types_cached_component;
this.p__883840 = p__883840;
this.owner = owner;
this.map__883846 = map__883846;
this.id = id;
this.type = type;
this.meta883849 = meta883849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui883848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__883846,map__883846__$1,id,type){
return (function (_883850,meta883849__$1){
var self__ = this;
var _883850__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui883848(self__.make_node_types_cached_component,self__.p__883840,self__.owner,self__.map__883846,self__.id,self__.type,meta883849__$1));
});})(map__883846,map__883846__$1,id,type))
;

dynomics.space.ui.t_dynomics$space$ui883848.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__883846,map__883846__$1,id,type){
return (function (_883850){
var self__ = this;
var _883850__$1 = this;
return self__.meta883849;
});})(map__883846,map__883846__$1,id,type))
;

dynomics.space.ui.t_dynomics$space$ui883848.prototype.om$core$IInitState$ = true;

dynomics.space.ui.t_dynomics$space$ui883848.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__883846,map__883846__$1,id,type){
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
});})(map__883846,map__883846__$1,id,type))
;

dynomics.space.ui.t_dynomics$space$ui883848.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui883848.prototype.om$core$IRender$render$arity$1 = ((function (map__883846,map__883846__$1,id,type){
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
});})(map__883846,map__883846__$1,id,type))
;

dynomics.space.ui.t_dynomics$space$ui883848.prototype.om$core$IDidMount$ = true;

dynomics.space.ui.t_dynomics$space$ui883848.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__883846,map__883846__$1,id,type){
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
});})(map__883846,map__883846__$1,id,type))
;

dynomics.space.ui.t_dynomics$space$ui883848.getBasis = ((function (map__883846,map__883846__$1,id,type){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-cached-component","make-node-types-cached-component",-655003199,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a node-type component for the node types palette,\n  which can prerender its SVG to a canvas & therefore\n  cache the resulting image, to save on components in the DOM if need be."], null)),new cljs.core.Symbol(null,"p__883840","p__883840",629938442,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__883846","map__883846",-1275948683,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"meta883849","meta883849",-1375290843,null)], null);
});})(map__883846,map__883846__$1,id,type))
;

dynomics.space.ui.t_dynomics$space$ui883848.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui883848.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui883848";

dynomics.space.ui.t_dynomics$space$ui883848.cljs$lang$ctorPrWriter = ((function (map__883846,map__883846__$1,id,type){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.space.ui/t_dynomics$space$ui883848");
});})(map__883846,map__883846__$1,id,type))
;

dynomics.space.ui.__GT_t_dynomics$space$ui883848 = ((function (map__883846,map__883846__$1,id,type){
return (function dynomics$space$ui$make_node_types_cached_component_$___GT_t_dynomics$space$ui883848(make_node_types_cached_component__$1,p__883840__$1,owner__$1,map__883846__$2,id__$1,type__$1,meta883849){
return (new dynomics.space.ui.t_dynomics$space$ui883848(make_node_types_cached_component__$1,p__883840__$1,owner__$1,map__883846__$2,id__$1,type__$1,meta883849));
});})(map__883846,map__883846__$1,id,type))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui883848(dynomics$space$ui$make_node_types_cached_component,p__883840,owner,map__883846__$1,id,type,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a component for the node types palette
 */
dynomics.space.ui.make_node_types_palette_component = (function dynomics$space$ui$make_node_types_palette_component(p__883851){
var map__883860 = p__883851;
var map__883860__$1 = ((((!((map__883860 == null)))?((((map__883860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__883860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__883860):map__883860);
var state = map__883860__$1;
var component = cljs.core.get.call(null,map__883860__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var state_updates = cljs.core.get.call(null,map__883860__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
if(typeof dynomics.space.ui.t_dynomics$space$ui883862 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui883862 = (function (make_node_types_palette_component,p__883851,map__883860,state,component,state_updates,meta883863){
this.make_node_types_palette_component = make_node_types_palette_component;
this.p__883851 = p__883851;
this.map__883860 = map__883860;
this.state = state;
this.component = component;
this.state_updates = state_updates;
this.meta883863 = meta883863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui883862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__883860,map__883860__$1,state,component,state_updates){
return (function (_883864,meta883863__$1){
var self__ = this;
var _883864__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui883862(self__.make_node_types_palette_component,self__.p__883851,self__.map__883860,self__.state,self__.component,self__.state_updates,meta883863__$1));
});})(map__883860,map__883860__$1,state,component,state_updates))
;

dynomics.space.ui.t_dynomics$space$ui883862.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__883860,map__883860__$1,state,component,state_updates){
return (function (_883864){
var self__ = this;
var _883864__$1 = this;
return self__.meta883863;
});})(map__883860,map__883860__$1,state,component,state_updates))
;

dynomics.space.ui.t_dynomics$space$ui883862.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui883862.prototype.om$core$IRender$render$arity$1 = ((function (map__883860,map__883860__$1,state,component,state_updates){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"className": "dynomics_node_types"},cljs.core.map.call(null,((function (this$__$1,map__883860,map__883860__$1,state,component,state_updates){
return (function (p__883865){
var map__883866 = p__883865;
var map__883866__$1 = ((((!((map__883866 == null)))?((((map__883866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__883866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__883866):map__883866);
var id = cljs.core.get.call(null,map__883866__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var stability = cljs.core.get.call(null,map__883866__$1,new cljs.core.Keyword(null,"stability","stability",1733225509));
var type = cljs.core.get.call(null,map__883866__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return om.dom.div.call(null,{"className": [cljs.core.str("dynomics_node_type_selector")].join(''), "title": [cljs.core.str("Set selected nodes to "),cljs.core.str(id),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,stability)),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,type))].join(''), "onMouseDown": ((function (map__883866,map__883866__$1,id,stability,type,this$__$1,map__883860,map__883860__$1,state,component,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.get_in.call(null,self__.component,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"node-types","node-types",1539943342),new cljs.core.Keyword(null,"tools","tools",-1241731990),id,new cljs.core.Keyword(null,"fn","fn",-1175266204)], null)),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Node type "),cljs.core.str(id)].join('')], null)], null));

return null;
});})(map__883866,map__883866__$1,id,stability,type,this$__$1,map__883860,map__883860__$1,state,component,state_updates))
},om.core.build.call(null,dynomics.space.ui.make_node_types_cached_component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("ntp"),cljs.core.str(id)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
});})(this$__$1,map__883860,map__883860__$1,state,component,state_updates))
,cljs.core.vals.call(null,dynomics.space.core.node_types)));
});})(map__883860,map__883860__$1,state,component,state_updates))
;

dynomics.space.ui.t_dynomics$space$ui883862.getBasis = ((function (map__883860,map__883860__$1,state,component,state_updates){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-palette-component","make-node-types-palette-component",54407202,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the node types palette"], null)),new cljs.core.Symbol(null,"p__883851","p__883851",826437535,null),new cljs.core.Symbol(null,"map__883860","map__883860",2060079044,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"meta883863","meta883863",-782676246,null)], null);
});})(map__883860,map__883860__$1,state,component,state_updates))
;

dynomics.space.ui.t_dynomics$space$ui883862.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui883862.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui883862";

dynomics.space.ui.t_dynomics$space$ui883862.cljs$lang$ctorPrWriter = ((function (map__883860,map__883860__$1,state,component,state_updates){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.space.ui/t_dynomics$space$ui883862");
});})(map__883860,map__883860__$1,state,component,state_updates))
;

dynomics.space.ui.__GT_t_dynomics$space$ui883862 = ((function (map__883860,map__883860__$1,state,component,state_updates){
return (function dynomics$space$ui$make_node_types_palette_component_$___GT_t_dynomics$space$ui883862(make_node_types_palette_component__$1,p__883851__$1,map__883860__$2,state__$1,component__$1,state_updates__$1,meta883863){
return (new dynomics.space.ui.t_dynomics$space$ui883862(make_node_types_palette_component__$1,p__883851__$1,map__883860__$2,state__$1,component__$1,state_updates__$1,meta883863));
});})(map__883860,map__883860__$1,state,component,state_updates))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui883862(dynomics$space$ui$make_node_types_palette_component,p__883851,map__883860__$1,state,component,state_updates,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a component for an edge
 */
dynomics.space.ui.make_edge_component = (function dynomics$space$ui$make_edge_component(p__883868){
var map__883880 = p__883868;
var map__883880__$1 = ((((!((map__883880 == null)))?((((map__883880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__883880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__883880):map__883880);
var vec__883881 = cljs.core.get.call(null,map__883880__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__883882 = cljs.core.nth.call(null,vec__883881,(0),null);
var nid1 = cljs.core.nth.call(null,vec__883882,(0),null);
var nid2 = cljs.core.nth.call(null,vec__883882,(1),null);
var vec__883883 = cljs.core.nth.call(null,vec__883881,(1),null);
var nx1 = cljs.core.nth.call(null,vec__883883,(0),null);
var ny1 = cljs.core.nth.call(null,vec__883883,(1),null);
var vec__883884 = cljs.core.nth.call(null,vec__883881,(2),null);
var nx2 = cljs.core.nth.call(null,vec__883884,(0),null);
var ny2 = cljs.core.nth.call(null,vec__883884,(1),null);
var vec__883885 = cljs.core.nth.call(null,vec__883881,(3),null);
var cx1 = cljs.core.nth.call(null,vec__883885,(0),null);
var cx2 = cljs.core.nth.call(null,vec__883885,(1),null);
var vec__883886 = cljs.core.nth.call(null,vec__883881,(4),null);
var cy1 = cljs.core.nth.call(null,vec__883886,(0),null);
var cy2 = cljs.core.nth.call(null,vec__883886,(1),null);
var compatible_QMARK_ = cljs.core.get.call(null,map__883880__$1,new cljs.core.Keyword(null,"compatible?","compatible?",923422575));
var node_scale = cljs.core.get.call(null,map__883880__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
if(typeof dynomics.space.ui.t_dynomics$space$ui883888 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui883888 = (function (nx1,vec__883885,cx1,vec__883886,ny2,make_edge_component,cy2,map__883880,vec__883884,nx2,cy1,node_scale,ny1,cx2,compatible_QMARK_,vec__883883,vec__883882,vec__883881,p__883868,nid2,nid1,meta883889){
this.nx1 = nx1;
this.vec__883885 = vec__883885;
this.cx1 = cx1;
this.vec__883886 = vec__883886;
this.ny2 = ny2;
this.make_edge_component = make_edge_component;
this.cy2 = cy2;
this.map__883880 = map__883880;
this.vec__883884 = vec__883884;
this.nx2 = nx2;
this.cy1 = cy1;
this.node_scale = node_scale;
this.ny1 = ny1;
this.cx2 = cx2;
this.compatible_QMARK_ = compatible_QMARK_;
this.vec__883883 = vec__883883;
this.vec__883882 = vec__883882;
this.vec__883881 = vec__883881;
this.p__883868 = p__883868;
this.nid2 = nid2;
this.nid1 = nid1;
this.meta883889 = meta883889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui883888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__883880,map__883880__$1,vec__883881,vec__883882,nid1,nid2,vec__883883,nx1,ny1,vec__883884,nx2,ny2,vec__883885,cx1,cx2,vec__883886,cy1,cy2,compatible_QMARK_,node_scale){
return (function (_883890,meta883889__$1){
var self__ = this;
var _883890__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui883888(self__.nx1,self__.vec__883885,self__.cx1,self__.vec__883886,self__.ny2,self__.make_edge_component,self__.cy2,self__.map__883880,self__.vec__883884,self__.nx2,self__.cy1,self__.node_scale,self__.ny1,self__.cx2,self__.compatible_QMARK_,self__.vec__883883,self__.vec__883882,self__.vec__883881,self__.p__883868,self__.nid2,self__.nid1,meta883889__$1));
});})(map__883880,map__883880__$1,vec__883881,vec__883882,nid1,nid2,vec__883883,nx1,ny1,vec__883884,nx2,ny2,vec__883885,cx1,cx2,vec__883886,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui883888.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__883880,map__883880__$1,vec__883881,vec__883882,nid1,nid2,vec__883883,nx1,ny1,vec__883884,nx2,ny2,vec__883885,cx1,cx2,vec__883886,cy1,cy2,compatible_QMARK_,node_scale){
return (function (_883890){
var self__ = this;
var _883890__$1 = this;
return self__.meta883889;
});})(map__883880,map__883880__$1,vec__883881,vec__883882,nid1,nid2,vec__883883,nx1,ny1,vec__883884,nx2,ny2,vec__883885,cx1,cx2,vec__883886,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui883888.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui883888.prototype.om$core$IRender$render$arity$1 = ((function (map__883880,map__883880__$1,vec__883881,vec__883882,nid1,nid2,vec__883883,nx1,ny1,vec__883884,nx2,ny2,vec__883885,cx1,cx2,vec__883886,cy1,cy2,compatible_QMARK_,node_scale){
return (function (this__32689__auto__){
var self__ = this;
var this__32689__auto____$1 = this;
return om.dom.path.call(null,{"key": [cljs.core.str("edge_"),cljs.core.str(self__.nid1),cljs.core.str("_"),cljs.core.str(self__.nid2)].join(''), "className": [cljs.core.str("dynomics_edge "),cljs.core.str((cljs.core.truth_(self__.compatible_QMARK_)?"dynomics_compatible_edge":null))].join(''), "d": dynomics.ui.svg.to_svg_path.call(null,cljs.core.map.call(null,dynomics.ui.svg.make_bezier,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx1,self__.ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nx1 + (self__.node_scale * self__.cx1)),(self__.ny1 + (self__.node_scale * self__.cy1))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx2,self__.ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nx2 + (self__.node_scale * self__.cx2)),(self__.ny2 + (self__.node_scale * self__.cy2))], null)], null)], null)))});
});})(map__883880,map__883880__$1,vec__883881,vec__883882,nid1,nid2,vec__883883,nx1,ny1,vec__883884,nx2,ny2,vec__883885,cx1,cx2,vec__883886,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui883888.getBasis = ((function (map__883880,map__883880__$1,vec__883881,vec__883882,nid1,nid2,vec__883883,nx1,ny1,vec__883884,nx2,ny2,vec__883885,cx1,cx2,vec__883886,cy1,cy2,compatible_QMARK_,node_scale){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"vec__883885","vec__883885",-94978589,null),new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"vec__883886","vec__883886",-82539355,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-edge-component","make-edge-component",-530385559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null)], null)], null),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Symbol(null,"compatible?","compatible?",-1731013194,null),new cljs.core.Keyword(null,"compatible?","compatible?",923422575),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for an edge"], null)),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null),new cljs.core.Symbol(null,"map__883880","map__883880",-866912212,null),new cljs.core.Symbol(null,"vec__883884","vec__883884",-812605140,null),new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null),new cljs.core.Symbol(null,"compatible?","compatible?",-1731013194,null),new cljs.core.Symbol(null,"vec__883883","vec__883883",-814053799,null),new cljs.core.Symbol(null,"vec__883882","vec__883882",230716732,null),new cljs.core.Symbol(null,"vec__883881","vec__883881",725562716,null),new cljs.core.Symbol(null,"p__883868","p__883868",-99411651,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null),new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"meta883889","meta883889",-1780389653,null)], null);
});})(map__883880,map__883880__$1,vec__883881,vec__883882,nid1,nid2,vec__883883,nx1,ny1,vec__883884,nx2,ny2,vec__883885,cx1,cx2,vec__883886,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui883888.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui883888.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui883888";

dynomics.space.ui.t_dynomics$space$ui883888.cljs$lang$ctorPrWriter = ((function (map__883880,map__883880__$1,vec__883881,vec__883882,nid1,nid2,vec__883883,nx1,ny1,vec__883884,nx2,ny2,vec__883885,cx1,cx2,vec__883886,cy1,cy2,compatible_QMARK_,node_scale){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.space.ui/t_dynomics$space$ui883888");
});})(map__883880,map__883880__$1,vec__883881,vec__883882,nid1,nid2,vec__883883,nx1,ny1,vec__883884,nx2,ny2,vec__883885,cx1,cx2,vec__883886,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.__GT_t_dynomics$space$ui883888 = ((function (map__883880,map__883880__$1,vec__883881,vec__883882,nid1,nid2,vec__883883,nx1,ny1,vec__883884,nx2,ny2,vec__883885,cx1,cx2,vec__883886,cy1,cy2,compatible_QMARK_,node_scale){
return (function dynomics$space$ui$make_edge_component_$___GT_t_dynomics$space$ui883888(nx1__$1,vec__883885__$1,cx1__$1,vec__883886__$1,ny2__$1,make_edge_component__$1,cy2__$1,map__883880__$2,vec__883884__$1,nx2__$1,cy1__$1,node_scale__$1,ny1__$1,cx2__$1,compatible_QMARK___$1,vec__883883__$1,vec__883882__$1,vec__883881__$1,p__883868__$1,nid2__$1,nid1__$1,meta883889){
return (new dynomics.space.ui.t_dynomics$space$ui883888(nx1__$1,vec__883885__$1,cx1__$1,vec__883886__$1,ny2__$1,make_edge_component__$1,cy2__$1,map__883880__$2,vec__883884__$1,nx2__$1,cy1__$1,node_scale__$1,ny1__$1,cx2__$1,compatible_QMARK___$1,vec__883883__$1,vec__883882__$1,vec__883881__$1,p__883868__$1,nid2__$1,nid1__$1,meta883889));
});})(map__883880,map__883880__$1,vec__883881,vec__883882,nid1,nid2,vec__883883,nx1,ny1,vec__883884,nx2,ny2,vec__883885,cx1,cx2,vec__883886,cy1,cy2,compatible_QMARK_,node_scale))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui883888(nx1,vec__883885,cx1,vec__883886,ny2,dynomics$space$ui$make_edge_component,cy2,map__883880__$1,vec__883884,nx2,cy1,node_scale,ny1,cx2,compatible_QMARK_,vec__883883,vec__883882,vec__883881,p__883868,nid2,nid1,null));
});
dynomics.space.ui.make_open_region_component = (function dynomics$space$ui$make_open_region_component(p__883891){
var map__883904 = p__883891;
var map__883904__$1 = ((((!((map__883904 == null)))?((((map__883904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__883904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__883904):map__883904);
var node_id = cljs.core.get.call(null,map__883904__$1,new cljs.core.Keyword(null,"node-id","node-id",779482292));
var quadrant_type = cljs.core.get.call(null,map__883904__$1,new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370));
var vec__883905 = cljs.core.get.call(null,map__883904__$1,new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631));
var qx = cljs.core.nth.call(null,vec__883905,(0),null);
var qy = cljs.core.nth.call(null,vec__883905,(1),null);
var vec__883906 = cljs.core.get.call(null,map__883904__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p1 = cljs.core.nth.call(null,vec__883906,(0),null);
var p2 = cljs.core.nth.call(null,vec__883906,(1),null);
var map__883907 = cljs.core.nth.call(null,vec__883906,(2),null);
var map__883907__$1 = ((((!((map__883907 == null)))?((((map__883907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__883907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__883907):map__883907);
var p3 = map__883907__$1;
var vec__883908 = cljs.core.get.call(null,map__883907__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var x = cljs.core.nth.call(null,vec__883908,(0),null);
var y = cljs.core.nth.call(null,vec__883908,(1),null);
var vec__883909 = cljs.core.get.call(null,map__883907__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__883910 = cljs.core.nth.call(null,vec__883909,(0),null);
var cx = cljs.core.nth.call(null,vec__883910,(0),null);
var cy = cljs.core.nth.call(null,vec__883910,(1),null);
var p4 = cljs.core.nth.call(null,vec__883906,(3),null);
if(typeof dynomics.space.ui.t_dynomics$space$ui883913 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui883913 = (function (x,map__883904,map__883907,y,vec__883909,p2,p4,vec__883906,p3,vec__883905,qx,qy,p1,make_open_region_component,vec__883910,p__883891,cx,cy,node_id,quadrant_type,vec__883908,meta883914){
this.x = x;
this.map__883904 = map__883904;
this.map__883907 = map__883907;
this.y = y;
this.vec__883909 = vec__883909;
this.p2 = p2;
this.p4 = p4;
this.vec__883906 = vec__883906;
this.p3 = p3;
this.vec__883905 = vec__883905;
this.qx = qx;
this.qy = qy;
this.p1 = p1;
this.make_open_region_component = make_open_region_component;
this.vec__883910 = vec__883910;
this.p__883891 = p__883891;
this.cx = cx;
this.cy = cy;
this.node_id = node_id;
this.quadrant_type = quadrant_type;
this.vec__883908 = vec__883908;
this.meta883914 = meta883914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui883913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__883904,map__883904__$1,node_id,quadrant_type,vec__883905,qx,qy,vec__883906,p1,p2,map__883907,map__883907__$1,p3,vec__883908,x,y,vec__883909,vec__883910,cx,cy,p4){
return (function (_883915,meta883914__$1){
var self__ = this;
var _883915__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui883913(self__.x,self__.map__883904,self__.map__883907,self__.y,self__.vec__883909,self__.p2,self__.p4,self__.vec__883906,self__.p3,self__.vec__883905,self__.qx,self__.qy,self__.p1,self__.make_open_region_component,self__.vec__883910,self__.p__883891,self__.cx,self__.cy,self__.node_id,self__.quadrant_type,self__.vec__883908,meta883914__$1));
});})(map__883904,map__883904__$1,node_id,quadrant_type,vec__883905,qx,qy,vec__883906,p1,p2,map__883907,map__883907__$1,p3,vec__883908,x,y,vec__883909,vec__883910,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui883913.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__883904,map__883904__$1,node_id,quadrant_type,vec__883905,qx,qy,vec__883906,p1,p2,map__883907,map__883907__$1,p3,vec__883908,x,y,vec__883909,vec__883910,cx,cy,p4){
return (function (_883915){
var self__ = this;
var _883915__$1 = this;
return self__.meta883914;
});})(map__883904,map__883904__$1,node_id,quadrant_type,vec__883905,qx,qy,vec__883906,p1,p2,map__883907,map__883907__$1,p3,vec__883908,x,y,vec__883909,vec__883910,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui883913.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui883913.prototype.om$core$IRender$render$arity$1 = ((function (map__883904,map__883904__$1,node_id,quadrant_type,vec__883905,qx,qy,vec__883906,p1,p2,map__883907,map__883907__$1,p3,vec__883908,x,y,vec__883909,vec__883910,cx,cy,p4){
return (function (this__32689__auto__){
var self__ = this;
var this__32689__auto____$1 = this;
return om.dom.g.call(null,{},null,om.dom.path.call(null,{"className": [cljs.core.str("dynomics_open_region "),cljs.core.str([cljs.core.str("dynomics_open_region_type_"),cljs.core.str(self__.quadrant_type)].join(''))].join(''), "d": [cljs.core.str(dynomics.ui.svg.to_svg_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p1,self__.p2], null))),cljs.core.str(dynomics.ui.svg.to_svg_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,self__.p3,new cljs.core.Keyword(null,"ml","ml",1909675057),"L"),self__.p4], null))),cljs.core.str("z")].join('')}));
});})(map__883904,map__883904__$1,node_id,quadrant_type,vec__883905,qx,qy,vec__883906,p1,p2,map__883907,map__883907__$1,p3,vec__883908,x,y,vec__883909,vec__883910,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui883913.getBasis = ((function (map__883904,map__883904__$1,node_id,quadrant_type,vec__883905,qx,qy,vec__883906,p1,p2,map__883907,map__883907__$1,p3,vec__883908,x,y,vec__883909,vec__883910,cx,cy,p4){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"map__883904","map__883904",2037461185,null),new cljs.core.Symbol(null,"map__883907","map__883907",1045694822,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"vec__883909","vec__883909",-1333856505,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null),new cljs.core.Symbol(null,"p4","p4",550404713,null),new cljs.core.Symbol(null,"vec__883906","vec__883906",-793008535,null),new cljs.core.Symbol(null,"p3","p3",-923395030,null),new cljs.core.Symbol(null,"vec__883905","vec__883905",-1713660054,null),new cljs.core.Symbol(null,"qx","qx",876946123,null),new cljs.core.Symbol(null,"qy","qy",1271868883,null),new cljs.core.Symbol(null,"p1","p1",703771573,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-open-region-component","make-open-region-component",530106712,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Keyword(null,"node-id","node-id",779482292),new cljs.core.Symbol(null,"quadrant-type","quadrant-type",333980157,null),new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"qx","qx",876946123,null),new cljs.core.Symbol(null,"qy","qy",1271868883,null)], null),new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"cy","cy",-1899104709,null)], null)], null),new cljs.core.Keyword(null,"control-points","control-points",-238538325),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"p3","p3",-923395030,null)], true, false),new cljs.core.Symbol(null,"p4","p4",550404713,null)], null),new cljs.core.Keyword(null,"points","points",-1486596883)], true, false)], null)))], null)),new cljs.core.Symbol(null,"vec__883910","vec__883910",1264739769,null),new cljs.core.Symbol(null,"p__883891","p__883891",1932262490,null),new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"cy","cy",-1899104709,null),new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Symbol(null,"quadrant-type","quadrant-type",333980157,null),new cljs.core.Symbol(null,"vec__883908","vec__883908",-1970880674,null),new cljs.core.Symbol(null,"meta883914","meta883914",926804484,null)], null);
});})(map__883904,map__883904__$1,node_id,quadrant_type,vec__883905,qx,qy,vec__883906,p1,p2,map__883907,map__883907__$1,p3,vec__883908,x,y,vec__883909,vec__883910,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui883913.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui883913.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui883913";

dynomics.space.ui.t_dynomics$space$ui883913.cljs$lang$ctorPrWriter = ((function (map__883904,map__883904__$1,node_id,quadrant_type,vec__883905,qx,qy,vec__883906,p1,p2,map__883907,map__883907__$1,p3,vec__883908,x,y,vec__883909,vec__883910,cx,cy,p4){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.space.ui/t_dynomics$space$ui883913");
});})(map__883904,map__883904__$1,node_id,quadrant_type,vec__883905,qx,qy,vec__883906,p1,p2,map__883907,map__883907__$1,p3,vec__883908,x,y,vec__883909,vec__883910,cx,cy,p4))
;

dynomics.space.ui.__GT_t_dynomics$space$ui883913 = ((function (map__883904,map__883904__$1,node_id,quadrant_type,vec__883905,qx,qy,vec__883906,p1,p2,map__883907,map__883907__$1,p3,vec__883908,x,y,vec__883909,vec__883910,cx,cy,p4){
return (function dynomics$space$ui$make_open_region_component_$___GT_t_dynomics$space$ui883913(x__$1,map__883904__$2,map__883907__$2,y__$1,vec__883909__$1,p2__$1,p4__$1,vec__883906__$1,p3__$1,vec__883905__$1,qx__$1,qy__$1,p1__$1,make_open_region_component__$1,vec__883910__$1,p__883891__$1,cx__$1,cy__$1,node_id__$1,quadrant_type__$1,vec__883908__$1,meta883914){
return (new dynomics.space.ui.t_dynomics$space$ui883913(x__$1,map__883904__$2,map__883907__$2,y__$1,vec__883909__$1,p2__$1,p4__$1,vec__883906__$1,p3__$1,vec__883905__$1,qx__$1,qy__$1,p1__$1,make_open_region_component__$1,vec__883910__$1,p__883891__$1,cx__$1,cy__$1,node_id__$1,quadrant_type__$1,vec__883908__$1,meta883914));
});})(map__883904,map__883904__$1,node_id,quadrant_type,vec__883905,qx,qy,vec__883906,p1,p2,map__883907,map__883907__$1,p3,vec__883908,x,y,vec__883909,vec__883910,cx,cy,p4))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui883913(x,map__883904__$1,map__883907__$1,y,vec__883909,p2,p4,vec__883906,p3,vec__883905,qx,qy,p1,dynomics$space$ui$make_open_region_component,vec__883910,p__883891,cx,cy,node_id,quadrant_type,vec__883908,null));
});
/**
 * Returns a component for a node and its connections
 */
dynomics.space.ui.make_node_component = (function dynomics$space$ui$make_node_component(p__883916){
var map__883933 = p__883916;
var map__883933__$1 = ((((!((map__883933 == null)))?((((map__883933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__883933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__883933):map__883933);
var map__883934 = cljs.core.get.call(null,map__883933__$1,new cljs.core.Keyword(null,"node","node",581201198));
var map__883934__$1 = ((((!((map__883934 == null)))?((((map__883934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__883934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__883934):map__883934);
var vec__883935 = cljs.core.get.call(null,map__883934__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__883935,(0),null);
var y = cljs.core.nth.call(null,vec__883935,(1),null);
var t = cljs.core.get.call(null,map__883934__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var node_type = cljs.core.get.call(null,map__883934__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var id = cljs.core.get.call(null,map__883934__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var connections = cljs.core.get.call(null,map__883934__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var node_scale = cljs.core.get.call(null,map__883933__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var selected_nodes = cljs.core.get.call(null,map__883933__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var map__883936 = cljs.core.get.call(null,map__883933__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var map__883936__$1 = ((((!((map__883936 == null)))?((((map__883936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__883936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__883936):map__883936);
var current_tool = cljs.core.get.call(null,map__883936__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
var msgs = cljs.core.get.call(null,map__883933__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var pz = cljs.core.get.call(null,map__883933__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id], null);
if(typeof dynomics.space.ui.t_dynomics$space$ui883940 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui883940 = (function (t,connections,x,selected_nodes,current_tool,pz,map__883936,path,y,make_node_component,node_scale,p__883916,map__883934,node_type,msgs,id,vec__883935,map__883933,meta883941){
this.t = t;
this.connections = connections;
this.x = x;
this.selected_nodes = selected_nodes;
this.current_tool = current_tool;
this.pz = pz;
this.map__883936 = map__883936;
this.path = path;
this.y = y;
this.make_node_component = make_node_component;
this.node_scale = node_scale;
this.p__883916 = p__883916;
this.map__883934 = map__883934;
this.node_type = node_type;
this.msgs = msgs;
this.id = id;
this.vec__883935 = vec__883935;
this.map__883933 = map__883933;
this.meta883941 = meta883941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui883940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (path,map__883933,map__883933__$1,map__883934,map__883934__$1,vec__883935,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__883936,map__883936__$1,current_tool,msgs,pz){
return (function (_883942,meta883941__$1){
var self__ = this;
var _883942__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui883940(self__.t,self__.connections,self__.x,self__.selected_nodes,self__.current_tool,self__.pz,self__.map__883936,self__.path,self__.y,self__.make_node_component,self__.node_scale,self__.p__883916,self__.map__883934,self__.node_type,self__.msgs,self__.id,self__.vec__883935,self__.map__883933,meta883941__$1));
});})(path,map__883933,map__883933__$1,map__883934,map__883934__$1,vec__883935,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__883936,map__883936__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui883940.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (path,map__883933,map__883933__$1,map__883934,map__883934__$1,vec__883935,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__883936,map__883936__$1,current_tool,msgs,pz){
return (function (_883942){
var self__ = this;
var _883942__$1 = this;
return self__.meta883941;
});})(path,map__883933,map__883933__$1,map__883934,map__883934__$1,vec__883935,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__883936,map__883936__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui883940.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui883940.prototype.om$core$IRender$render$arity$1 = ((function (path,map__883933,map__883933__$1,map__883934,map__883934__$1,vec__883935,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__883936,map__883936__$1,current_tool,msgs,pz){
return (function (this__32689__auto__){
var self__ = this;
var this__32689__auto____$1 = this;
return om.dom.g.call(null,{"id": [cljs.core.str("node_"),cljs.core.str(self__.id)].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.x,self__.y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),self__.node_scale], null)), "className": [cljs.core.str("dynomics_node_subgraph "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,self__.path))?"dynomics_node_selected":null))].join(''), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"path","path",-188191168),self__.path,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"path","path",-188191168),self__.path,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null))},cljs.core.map.call(null,((function (this__32689__auto____$1,path,map__883933,map__883933__$1,map__883934,map__883934__$1,vec__883935,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__883936,map__883936__$1,current_tool,msgs,pz){
return (function (p__883943){
var vec__883944 = p__883943;
var i = cljs.core.nth.call(null,vec__883944,(0),null);
var v = cljs.core.nth.call(null,vec__883944,(1),null);
return om.dom.rect.call(null,{"className": [cljs.core.str("dynomics_open_region_type_"),cljs.core.str(cljs.core.get_in.call(null,dynomics.space.core.node_types,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.node_type,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),v], null)))].join(''), "x": (0), "y": (0), "width": (1), "height": (1), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),((90) * (i - (1)))], null))});
});})(this__32689__auto____$1,path,map__883933,map__883933__$1,map__883934,map__883934__$1,vec__883935,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__883936,map__883936__$1,current_tool,msgs,pz))
,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,(4)),cljs.core.iterate.call(null,dynomics.space.core.P.call(null,dynomics.space.core.c_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)))),om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.3, "className": [cljs.core.str("dynomics_node_selector_dot")].join('')}),om.dom.text.call(null,{"x": (-4), "y": (4), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),0.05], null)), "fill": "black"},[cljs.core.str(self__.node_type)].join('')),om.dom.rect.call(null,{"x": (0), "y": (0), "width": (1), "height": (1), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),(-1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),(2),(2)], null)), "className": [cljs.core.str("dynomics_node")].join('')}),om.dom.g.call(null,{"className": "dynomics_node_connections"},cljs.core.map.call(null,((function (this__32689__auto____$1,path,map__883933,map__883933__$1,map__883934,map__883934__$1,vec__883935,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__883936,map__883936__$1,current_tool,msgs,pz){
return (function (p__883945){
var map__883946 = p__883945;
var map__883946__$1 = ((((!((map__883946 == null)))?((((map__883946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__883946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__883946):map__883946);
var vec__883947 = cljs.core.get.call(null,map__883946__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var cx = cljs.core.nth.call(null,vec__883947,(0),null);
var cy = cljs.core.nth.call(null,vec__883947,(1),null);
var cid = cljs.core.get.call(null,map__883946__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return om.dom.g.call(null,{"className": "dynomics_node_connection", "id": [cljs.core.str("node_"),cljs.core.str(self__.id),cljs.core.str("_connection_"),cljs.core.str(cid)].join('')},om.dom.line.call(null,{"x1": (0), "y1": (0), "x2": cx, "y2": cy, "className": "dynomics_node_connection_line"}),(function (){var path__$1 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null);
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.27, "className": [cljs.core.str("dynomics_node_connection_dot "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,path__$1))?"dynomics_node_selected":null))].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),cx,cy], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"id","id",-1388402092),cid,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"id","id",-1388402092),cid,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null))});
})());
});})(this__32689__auto____$1,path,map__883933,map__883933__$1,map__883934,map__883934__$1,vec__883935,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__883936,map__883936__$1,current_tool,msgs,pz))
,self__.connections)));
});})(path,map__883933,map__883933__$1,map__883934,map__883934__$1,vec__883935,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__883936,map__883936__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui883940.getBasis = ((function (path,map__883933,map__883933__$1,map__883934,map__883934__$1,vec__883935,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__883936,map__883936__$1,current_tool,msgs,pz){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"current-tool","current-tool",699505924,null),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Symbol(null,"map__883936","map__883936",-957802746,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"y","y",-117328249,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-component","make-node-component",-1574550003,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Keyword(null,"connections","connections",-2064090887)], true, false),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"current-tool","current-tool",699505924,null),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for a node and its connections"], null)),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"p__883916","p__883916",-2039268464,null),new cljs.core.Symbol(null,"map__883934","map__883934",-502085135,null),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"vec__883935","vec__883935",1840618268,null),new cljs.core.Symbol(null,"map__883933","map__883933",-1738979139,null),new cljs.core.Symbol(null,"meta883941","meta883941",597663817,null)], null);
});})(path,map__883933,map__883933__$1,map__883934,map__883934__$1,vec__883935,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__883936,map__883936__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui883940.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui883940.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui883940";

dynomics.space.ui.t_dynomics$space$ui883940.cljs$lang$ctorPrWriter = ((function (path,map__883933,map__883933__$1,map__883934,map__883934__$1,vec__883935,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__883936,map__883936__$1,current_tool,msgs,pz){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.space.ui/t_dynomics$space$ui883940");
});})(path,map__883933,map__883933__$1,map__883934,map__883934__$1,vec__883935,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__883936,map__883936__$1,current_tool,msgs,pz))
;

dynomics.space.ui.__GT_t_dynomics$space$ui883940 = ((function (path,map__883933,map__883933__$1,map__883934,map__883934__$1,vec__883935,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__883936,map__883936__$1,current_tool,msgs,pz){
return (function dynomics$space$ui$make_node_component_$___GT_t_dynomics$space$ui883940(t__$1,connections__$1,x__$1,selected_nodes__$1,current_tool__$1,pz__$1,map__883936__$2,path__$1,y__$1,make_node_component__$1,node_scale__$1,p__883916__$1,map__883934__$2,node_type__$1,msgs__$1,id__$1,vec__883935__$1,map__883933__$2,meta883941){
return (new dynomics.space.ui.t_dynomics$space$ui883940(t__$1,connections__$1,x__$1,selected_nodes__$1,current_tool__$1,pz__$1,map__883936__$2,path__$1,y__$1,make_node_component__$1,node_scale__$1,p__883916__$1,map__883934__$2,node_type__$1,msgs__$1,id__$1,vec__883935__$1,map__883933__$2,meta883941));
});})(path,map__883933,map__883933__$1,map__883934,map__883934__$1,vec__883935,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__883936,map__883936__$1,current_tool,msgs,pz))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui883940(t,connections,x,selected_nodes,current_tool,pz,map__883936__$1,path,y,dynomics$space$ui$make_node_component,node_scale,p__883916,map__883934__$1,node_type,msgs,id,vec__883935,map__883933__$1,null));
});
dynomics.space.ui.test_component = (function dynomics$space$ui$test_component(x){
if(typeof dynomics.space.ui.t_dynomics$space$ui883952 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui883952 = (function (test_component,x,meta883953){
this.test_component = test_component;
this.x = x;
this.meta883953 = meta883953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui883952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_883954,meta883953__$1){
var self__ = this;
var _883954__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui883952(self__.test_component,self__.x,meta883953__$1));
});

dynomics.space.ui.t_dynomics$space$ui883952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_883954){
var self__ = this;
var _883954__$1 = this;
return self__.meta883953;
});

dynomics.space.ui.t_dynomics$space$ui883952.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui883952.prototype.om$core$IRender$render$arity$1 = (function (this__32689__auto__){
var self__ = this;
var this__32689__auto____$1 = this;
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.2, "fill": (((0.5 > Math.random()))?"orange":"green")});
});

dynomics.space.ui.t_dynomics$space$ui883952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"test-component","test-component",1959093538,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)))], null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"meta883953","meta883953",-860273449,null)], null);
});

dynomics.space.ui.t_dynomics$space$ui883952.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui883952.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui883952";

dynomics.space.ui.t_dynomics$space$ui883952.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.space.ui/t_dynomics$space$ui883952");
});

dynomics.space.ui.__GT_t_dynomics$space$ui883952 = (function dynomics$space$ui$test_component_$___GT_t_dynomics$space$ui883952(test_component__$1,x__$1,meta883953){
return (new dynomics.space.ui.t_dynomics$space$ui883952(test_component__$1,x__$1,meta883953));
});

}

return (new dynomics.space.ui.t_dynomics$space$ui883952(dynomics$space$ui$test_component,x,null));
});
/**
 * Returns a component for the phase-space editor
 */
dynomics.space.ui.make_space_component = (function dynomics$space$ui$make_space_component(p__883955){
var map__883965 = p__883955;
var map__883965__$1 = ((((!((map__883965 == null)))?((((map__883965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__883965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__883965):map__883965);
var state = map__883965__$1;
var map__883966 = cljs.core.get.call(null,map__883965__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__883966__$1 = ((((!((map__883966 == null)))?((((map__883966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__883966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__883966):map__883966);
var space = map__883966__$1;
var nodes = cljs.core.get.call(null,map__883966__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__883966__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var selected_nodes = cljs.core.get.call(null,map__883966__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var regions = cljs.core.get.call(null,map__883966__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var compatibilities = cljs.core.get.call(null,map__883966__$1,new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024));
var graph = cljs.core.get.call(null,map__883966__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var node_scale = cljs.core.get.call(null,map__883966__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var cf = cljs.core.get.call(null,map__883965__$1,new cljs.core.Keyword(null,"cf","cf",1480736310));
var map__883967 = cljs.core.get.call(null,map__883965__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var map__883967__$1 = ((((!((map__883967 == null)))?((((map__883967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__883967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__883967):map__883967);
var current_tool = cljs.core.get.call(null,map__883967__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
var msgs = cljs.core.get.call(null,map__883965__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var pz = cljs.core.get.call(null,map__883965__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
if(typeof dynomics.space.ui.t_dynomics$space$ui883971 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui883971 = (function (selected_nodes,map__883967,current_tool,edges,p__883955,pz,make_space_component,space,node_scale,regions,map__883965,map__883966,state,compatibilities,msgs,nodes,graph,cf,meta883972){
this.selected_nodes = selected_nodes;
this.map__883967 = map__883967;
this.current_tool = current_tool;
this.edges = edges;
this.p__883955 = p__883955;
this.pz = pz;
this.make_space_component = make_space_component;
this.space = space;
this.node_scale = node_scale;
this.regions = regions;
this.map__883965 = map__883965;
this.map__883966 = map__883966;
this.state = state;
this.compatibilities = compatibilities;
this.msgs = msgs;
this.nodes = nodes;
this.graph = graph;
this.cf = cf;
this.meta883972 = meta883972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui883971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__883965,map__883965__$1,state,map__883966,map__883966__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__883967,map__883967__$1,current_tool,msgs,pz){
return (function (_883973,meta883972__$1){
var self__ = this;
var _883973__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui883971(self__.selected_nodes,self__.map__883967,self__.current_tool,self__.edges,self__.p__883955,self__.pz,self__.make_space_component,self__.space,self__.node_scale,self__.regions,self__.map__883965,self__.map__883966,self__.state,self__.compatibilities,self__.msgs,self__.nodes,self__.graph,self__.cf,meta883972__$1));
});})(map__883965,map__883965__$1,state,map__883966,map__883966__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__883967,map__883967__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui883971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__883965,map__883965__$1,state,map__883966,map__883966__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__883967,map__883967__$1,current_tool,msgs,pz){
return (function (_883973){
var self__ = this;
var _883973__$1 = this;
return self__.meta883972;
});})(map__883965,map__883965__$1,state,map__883966,map__883966__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__883967,map__883967__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui883971.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui883971.prototype.om$core$IRender$render$arity$1 = ((function (map__883965,map__883965__$1,state,map__883966,map__883966__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__883967,map__883967__$1,current_tool,msgs,pz){
return (function (this__32689__auto__){
var self__ = this;
var this__32689__auto____$1 = this;
return om.dom.div.call(null,{"className": [cljs.core.str("dynomics_space "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),self__.cf))?"selected_function":"hidden_function"))].join('')},om.dom.svg.call(null,{"zoomAndPan": false, "preserveAspectRatio": "xMidYMin", "width": "100%", "shape-rendering": "crispEdges", "xmlns": "http://www.w3.org/2000/svg", "className": "dynomics_space_svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "id": "space", "viewBox": "-1 -1 3 3", "height": "100%"},om.dom.g.call(null,{"id": "space_root", "onMouseMove": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null))},om.dom.rect.call(null,{"x": (-16), "y": (-16), "width": (32), "height": (32), "className": "dynomics_space_background"}),om.dom.rect.call(null,{"x": (0), "y": (0), "width": (1), "height": (1), "className": "dynomics_space_space"}),null,null,om.core.build_all.call(null,dynomics.space.ui.make_open_region_component,cljs.core.mapcat.call(null,cljs.core.partial.call(null,dynomics.space.core.make_open_regions,self__.node_scale),dynomics.space.core.edge_pairs_by_node.call(null,self__.space))),om.core.build_all.call(null,dynomics.space.ui.make_edge_component,cljs.core.map.call(null,((function (this__32689__auto____$1,map__883965,map__883965__$1,state,map__883966,map__883966__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__883967,map__883967__$1,current_tool,msgs,pz){
return (function (e){
return cljs.core.assoc.call(null,dynomics.space.core.with_compatibilities.call(null,e,self__.compatibilities),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale);
});})(this__32689__auto____$1,map__883965,map__883965__$1,state,map__883966,map__883966__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__883967,map__883967__$1,current_tool,msgs,pz))
,cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.edge_points,self__.nodes),self__.edges))),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__32689__auto____$1,map__883965,map__883965__$1,state,map__883966,map__883966__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__883967,map__883967__$1,current_tool,msgs,pz){
return (function (node){
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz], null));
});})(this__32689__auto____$1,map__883965,map__883965__$1,state,map__883966,map__883966__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__883967,map__883967__$1,current_tool,msgs,pz))
,cljs.core.vals.call(null,cljs.core.apply.call(null,cljs.core.dissoc,self__.nodes,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),cljs.core.map.call(null,cljs.core.last,self__.selected_nodes))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__32689__auto____$1,map__883965,map__883965__$1,state,map__883966,map__883966__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__883967,map__883967__$1,current_tool,msgs,pz){
return (function (node){
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz], null));
});})(this__32689__auto____$1,map__883965,map__883965__$1,state,map__883966,map__883966__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__883967,map__883967__$1,current_tool,msgs,pz))
,cljs.core.vals.call(null,cljs.core.select_keys.call(null,self__.nodes,cljs.core.map.call(null,cljs.core.last,self__.selected_nodes)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),null)));
});})(map__883965,map__883965__$1,state,map__883966,map__883966__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__883967,map__883967__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui883971.getBasis = ((function (map__883965,map__883965__$1,state,map__883966,map__883966__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__883967,map__883967__$1,current_tool,msgs,pz){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"map__883967","map__883967",629301891,null),new cljs.core.Symbol(null,"current-tool","current-tool",699505924,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"p__883955","p__883955",-481437307,null),new cljs.core.Symbol(null,"pz","pz",-67109147,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-space-component","make-space-component",-638751478,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"compatibilities","compatibilities",289068503,null),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Keyword(null,"cf","cf",1480736310),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"current-tool","current-tool",699505924,null),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the phase-space editor"], null)),new cljs.core.Symbol(null,"space","space",1988665002,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"map__883965","map__883965",-317417645,null),new cljs.core.Symbol(null,"map__883966","map__883966",66724404,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"compatibilities","compatibilities",289068503,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Symbol(null,"meta883972","meta883972",1776786064,null)], null);
});})(map__883965,map__883965__$1,state,map__883966,map__883966__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__883967,map__883967__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui883971.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui883971.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui883971";

dynomics.space.ui.t_dynomics$space$ui883971.cljs$lang$ctorPrWriter = ((function (map__883965,map__883965__$1,state,map__883966,map__883966__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__883967,map__883967__$1,current_tool,msgs,pz){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.space.ui/t_dynomics$space$ui883971");
});})(map__883965,map__883965__$1,state,map__883966,map__883966__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__883967,map__883967__$1,current_tool,msgs,pz))
;

dynomics.space.ui.__GT_t_dynomics$space$ui883971 = ((function (map__883965,map__883965__$1,state,map__883966,map__883966__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__883967,map__883967__$1,current_tool,msgs,pz){
return (function dynomics$space$ui$make_space_component_$___GT_t_dynomics$space$ui883971(selected_nodes__$1,map__883967__$2,current_tool__$1,edges__$1,p__883955__$1,pz__$1,make_space_component__$1,space__$1,node_scale__$1,regions__$1,map__883965__$2,map__883966__$2,state__$1,compatibilities__$1,msgs__$1,nodes__$1,graph__$1,cf__$1,meta883972){
return (new dynomics.space.ui.t_dynomics$space$ui883971(selected_nodes__$1,map__883967__$2,current_tool__$1,edges__$1,p__883955__$1,pz__$1,make_space_component__$1,space__$1,node_scale__$1,regions__$1,map__883965__$2,map__883966__$2,state__$1,compatibilities__$1,msgs__$1,nodes__$1,graph__$1,cf__$1,meta883972));
});})(map__883965,map__883965__$1,state,map__883966,map__883966__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__883967,map__883967__$1,current_tool,msgs,pz))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui883971(selected_nodes,map__883967__$1,current_tool,edges,p__883955,pz,dynomics$space$ui$make_space_component,space,node_scale,regions,map__883965__$1,map__883966__$1,state,compatibilities,msgs,nodes,graph,cf,null));
});
/**
 * Returns a component for offscreen rendering
 */
dynomics.space.ui.make_prerender_component = (function dynomics$space$ui$make_prerender_component(p__883974){
var map__883982 = p__883974;
var map__883982__$1 = ((((!((map__883982 == null)))?((((map__883982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__883982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__883982):map__883982);
var state = map__883982__$1;
var map__883983 = cljs.core.get.call(null,map__883982__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__883983__$1 = ((((!((map__883983 == null)))?((((map__883983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__883983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__883983):map__883983);
var space = map__883983__$1;
var nodes = cljs.core.get.call(null,map__883983__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__883983__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var selected_nodes = cljs.core.get.call(null,map__883983__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var regions = cljs.core.get.call(null,map__883983__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var node_scale = cljs.core.get.call(null,map__883983__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var cf = cljs.core.get.call(null,map__883982__$1,new cljs.core.Keyword(null,"cf","cf",1480736310));
if(typeof dynomics.space.ui.t_dynomics$space$ui883986 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui883986 = (function (p__883974,selected_nodes,make_prerender_component,edges,map__883982,space,node_scale,regions,state,map__883983,nodes,cf,meta883987){
this.p__883974 = p__883974;
this.selected_nodes = selected_nodes;
this.make_prerender_component = make_prerender_component;
this.edges = edges;
this.map__883982 = map__883982;
this.space = space;
this.node_scale = node_scale;
this.regions = regions;
this.state = state;
this.map__883983 = map__883983;
this.nodes = nodes;
this.cf = cf;
this.meta883987 = meta883987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui883986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__883982,map__883982__$1,state,map__883983,map__883983__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (_883988,meta883987__$1){
var self__ = this;
var _883988__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui883986(self__.p__883974,self__.selected_nodes,self__.make_prerender_component,self__.edges,self__.map__883982,self__.space,self__.node_scale,self__.regions,self__.state,self__.map__883983,self__.nodes,self__.cf,meta883987__$1));
});})(map__883982,map__883982__$1,state,map__883983,map__883983__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.t_dynomics$space$ui883986.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__883982,map__883982__$1,state,map__883983,map__883983__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (_883988){
var self__ = this;
var _883988__$1 = this;
return self__.meta883987;
});})(map__883982,map__883982__$1,state,map__883983,map__883983__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.t_dynomics$space$ui883986.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui883986.prototype.om$core$IRender$render$arity$1 = ((function (map__883982,map__883982__$1,state,map__883983,map__883983__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (this__32689__auto__){
var self__ = this;
var this__32689__auto____$1 = this;
return om.dom.div.call(null,{"className": "prerender_component", "id": "prerender_component_all"},om.dom.canvas.call(null,{"id": "prerender_canvas_all", "width": (64), "height": (64)}),om.dom.svg.call(null,{"zoomAndPan": false, "preserveAspectRatio": "xMidYMin", "width": "100%", "shape-rendering": "crispEdges", "xmlns": "http://www.w3.org/2000/svg", "className": "dynomics_space_svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "id": "prerender_svg_all", "viewBox": "-1 -1 3 3", "height": "100%"},dynomics.space.ui.make_type_icon.call(null,(1))));
});})(map__883982,map__883982__$1,state,map__883983,map__883983__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.t_dynomics$space$ui883986.getBasis = ((function (map__883982,map__883982__$1,state,map__883983,map__883983__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__883974","p__883974",1726113280,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-prerender-component","make-prerender-component",-630291485,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Keyword(null,"cf","cf",1480736310),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for offscreen rendering"], null)),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"map__883982","map__883982",1949917445,null),new cljs.core.Symbol(null,"space","space",1988665002,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__883983","map__883983",-874571462,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Symbol(null,"meta883987","meta883987",-940531636,null)], null);
});})(map__883982,map__883982__$1,state,map__883983,map__883983__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.t_dynomics$space$ui883986.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui883986.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui883986";

dynomics.space.ui.t_dynomics$space$ui883986.cljs$lang$ctorPrWriter = ((function (map__883982,map__883982__$1,state,map__883983,map__883983__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.space.ui/t_dynomics$space$ui883986");
});})(map__883982,map__883982__$1,state,map__883983,map__883983__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.__GT_t_dynomics$space$ui883986 = ((function (map__883982,map__883982__$1,state,map__883983,map__883983__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function dynomics$space$ui$make_prerender_component_$___GT_t_dynomics$space$ui883986(p__883974__$1,selected_nodes__$1,make_prerender_component__$1,edges__$1,map__883982__$2,space__$1,node_scale__$1,regions__$1,state__$1,map__883983__$2,nodes__$1,cf__$1,meta883987){
return (new dynomics.space.ui.t_dynomics$space$ui883986(p__883974__$1,selected_nodes__$1,make_prerender_component__$1,edges__$1,map__883982__$2,space__$1,node_scale__$1,regions__$1,state__$1,map__883983__$2,nodes__$1,cf__$1,meta883987));
});})(map__883982,map__883982__$1,state,map__883983,map__883983__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui883986(p__883974,selected_nodes,dynomics$space$ui$make_prerender_component,edges,map__883982__$1,space,node_scale,regions,state,map__883983__$1,nodes,cf,null));
});

//# sourceMappingURL=ui.js.map