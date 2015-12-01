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
var args207112 = [];
var len__25279__auto___207115 = arguments.length;
var i__25280__auto___207116 = (0);
while(true){
if((i__25280__auto___207116 < len__25279__auto___207115)){
args207112.push((arguments[i__25280__auto___207116]));

var G__207117 = (i__25280__auto___207116 + (1));
i__25280__auto___207116 = G__207117;
continue;
} else {
}
break;
}

var G__207114 = args207112.length;
switch (G__207114) {
case 1:
return dynomics.space.ui.to_coords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.ui.to_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args207112.length)].join('')));

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
var args207119 = [];
var len__25279__auto___207122 = arguments.length;
var i__25280__auto___207123 = (0);
while(true){
if((i__25280__auto___207123 < len__25279__auto___207122)){
args207119.push((arguments[i__25280__auto___207123]));

var G__207124 = (i__25280__auto___207123 + (1));
i__25280__auto___207123 = G__207124;
continue;
} else {
}
break;
}

var G__207121 = args207119.length;
switch (G__207121) {
case 1:
return dynomics.space.ui.add_pan_zoom_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return dynomics.space.ui.add_pan_zoom_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args207119.length)].join('')));

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
dynomics.space.ui.toggle_pan_zoom_BANG_ = (function dynomics$space$ui$toggle_pan_zoom_BANG_(p__207126){
var map__207129 = p__207126;
var map__207129__$1 = ((((!((map__207129 == null)))?((((map__207129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__207129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__207129):map__207129);
var pz = cljs.core.get.call(null,map__207129__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
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
dynomics.space.ui.disable_pan_zoom_BANG_ = (function dynomics$space$ui$disable_pan_zoom_BANG_(p__207131){
var map__207134 = p__207131;
var map__207134__$1 = ((((!((map__207134 == null)))?((((map__207134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__207134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__207134):map__207134);
var pz = cljs.core.get.call(null,map__207134__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
pz.disablePan();

return pz.disableZoom();
});
dynomics.space.ui.enable_pan_zoom_BANG_ = (function dynomics$space$ui$enable_pan_zoom_BANG_(p__207136){
var map__207139 = p__207136;
var map__207139__$1 = ((((!((map__207139 == null)))?((((map__207139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__207139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__207139):map__207139);
var pz = cljs.core.get.call(null,map__207139__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
pz.enablePan();

return pz.enableZoom();
});
dynomics.space.ui.render_to_image = (function dynomics$space$ui$render_to_image(var_args){
var args207141 = [];
var len__25279__auto___207158 = arguments.length;
var i__25280__auto___207159 = (0);
while(true){
if((i__25280__auto___207159 < len__25279__auto___207158)){
args207141.push((arguments[i__25280__auto___207159]));

var G__207160 = (i__25280__auto___207159 + (1));
i__25280__auto___207159 = G__207160;
continue;
} else {
}
break;
}

var G__207143 = args207141.length;
switch (G__207143) {
case 0:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args207141.length)].join('')));

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
var seq__207144_207162 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni1.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
)),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni2.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
))));
var chunk__207145_207163 = null;
var count__207146_207164 = (0);
var i__207147_207165 = (0);
while(true){
if((i__207147_207165 < count__207146_207164)){
var vec__207148_207166 = cljs.core._nth.call(null,chunk__207145_207163,i__207147_207165);
var i_207167 = cljs.core.nth.call(null,vec__207148_207166,(0),null);
var j_207168 = cljs.core.nth.call(null,vec__207148_207166,(1),null);
j_207168.removeAttribute("id");

j_207168.removeAttribute("class");

j_207168.removeAttribute("data-reactid");

var ccss_207169__$1 = window.getComputedStyle(i_207167);
var seq__207149_207170 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_207169__$1.length));
var chunk__207150_207171 = null;
var count__207151_207172 = (0);
var i__207152_207173 = (0);
while(true){
if((i__207152_207173 < count__207151_207172)){
var is_207174 = cljs.core._nth.call(null,chunk__207150_207171,i__207152_207173);
var p_207175 = ccss_207169__$1.item(is_207174);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_207175)))){
j_207168.style.setProperty(p_207175,ccss_207169__$1.getPropertyValue(p_207175));
} else {
}

var G__207176 = seq__207149_207170;
var G__207177 = chunk__207150_207171;
var G__207178 = count__207151_207172;
var G__207179 = (i__207152_207173 + (1));
seq__207149_207170 = G__207176;
chunk__207150_207171 = G__207177;
count__207151_207172 = G__207178;
i__207152_207173 = G__207179;
continue;
} else {
var temp__4425__auto___207180 = cljs.core.seq.call(null,seq__207149_207170);
if(temp__4425__auto___207180){
var seq__207149_207181__$1 = temp__4425__auto___207180;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__207149_207181__$1)){
var c__25024__auto___207182 = cljs.core.chunk_first.call(null,seq__207149_207181__$1);
var G__207183 = cljs.core.chunk_rest.call(null,seq__207149_207181__$1);
var G__207184 = c__25024__auto___207182;
var G__207185 = cljs.core.count.call(null,c__25024__auto___207182);
var G__207186 = (0);
seq__207149_207170 = G__207183;
chunk__207150_207171 = G__207184;
count__207151_207172 = G__207185;
i__207152_207173 = G__207186;
continue;
} else {
var is_207187 = cljs.core.first.call(null,seq__207149_207181__$1);
var p_207188 = ccss_207169__$1.item(is_207187);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_207188)))){
j_207168.style.setProperty(p_207188,ccss_207169__$1.getPropertyValue(p_207188));
} else {
}

var G__207189 = cljs.core.next.call(null,seq__207149_207181__$1);
var G__207190 = null;
var G__207191 = (0);
var G__207192 = (0);
seq__207149_207170 = G__207189;
chunk__207150_207171 = G__207190;
count__207151_207172 = G__207191;
i__207152_207173 = G__207192;
continue;
}
} else {
}
}
break;
}

var G__207193 = seq__207144_207162;
var G__207194 = chunk__207145_207163;
var G__207195 = count__207146_207164;
var G__207196 = (i__207147_207165 + (1));
seq__207144_207162 = G__207193;
chunk__207145_207163 = G__207194;
count__207146_207164 = G__207195;
i__207147_207165 = G__207196;
continue;
} else {
var temp__4425__auto___207197 = cljs.core.seq.call(null,seq__207144_207162);
if(temp__4425__auto___207197){
var seq__207144_207198__$1 = temp__4425__auto___207197;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__207144_207198__$1)){
var c__25024__auto___207199 = cljs.core.chunk_first.call(null,seq__207144_207198__$1);
var G__207200 = cljs.core.chunk_rest.call(null,seq__207144_207198__$1);
var G__207201 = c__25024__auto___207199;
var G__207202 = cljs.core.count.call(null,c__25024__auto___207199);
var G__207203 = (0);
seq__207144_207162 = G__207200;
chunk__207145_207163 = G__207201;
count__207146_207164 = G__207202;
i__207147_207165 = G__207203;
continue;
} else {
var vec__207153_207204 = cljs.core.first.call(null,seq__207144_207198__$1);
var i_207205 = cljs.core.nth.call(null,vec__207153_207204,(0),null);
var j_207206 = cljs.core.nth.call(null,vec__207153_207204,(1),null);
j_207206.removeAttribute("id");

j_207206.removeAttribute("class");

j_207206.removeAttribute("data-reactid");

var ccss_207207__$1 = window.getComputedStyle(i_207205);
var seq__207154_207208 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_207207__$1.length));
var chunk__207155_207209 = null;
var count__207156_207210 = (0);
var i__207157_207211 = (0);
while(true){
if((i__207157_207211 < count__207156_207210)){
var is_207212 = cljs.core._nth.call(null,chunk__207155_207209,i__207157_207211);
var p_207213 = ccss_207207__$1.item(is_207212);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_207213)))){
j_207206.style.setProperty(p_207213,ccss_207207__$1.getPropertyValue(p_207213));
} else {
}

var G__207214 = seq__207154_207208;
var G__207215 = chunk__207155_207209;
var G__207216 = count__207156_207210;
var G__207217 = (i__207157_207211 + (1));
seq__207154_207208 = G__207214;
chunk__207155_207209 = G__207215;
count__207156_207210 = G__207216;
i__207157_207211 = G__207217;
continue;
} else {
var temp__4425__auto___207218__$1 = cljs.core.seq.call(null,seq__207154_207208);
if(temp__4425__auto___207218__$1){
var seq__207154_207219__$1 = temp__4425__auto___207218__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__207154_207219__$1)){
var c__25024__auto___207220 = cljs.core.chunk_first.call(null,seq__207154_207219__$1);
var G__207221 = cljs.core.chunk_rest.call(null,seq__207154_207219__$1);
var G__207222 = c__25024__auto___207220;
var G__207223 = cljs.core.count.call(null,c__25024__auto___207220);
var G__207224 = (0);
seq__207154_207208 = G__207221;
chunk__207155_207209 = G__207222;
count__207156_207210 = G__207223;
i__207157_207211 = G__207224;
continue;
} else {
var is_207225 = cljs.core.first.call(null,seq__207154_207219__$1);
var p_207226 = ccss_207207__$1.item(is_207225);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_207226)))){
j_207206.style.setProperty(p_207226,ccss_207207__$1.getPropertyValue(p_207226));
} else {
}

var G__207227 = cljs.core.next.call(null,seq__207154_207219__$1);
var G__207228 = null;
var G__207229 = (0);
var G__207230 = (0);
seq__207154_207208 = G__207227;
chunk__207155_207209 = G__207228;
count__207156_207210 = G__207229;
i__207157_207211 = G__207230;
continue;
}
} else {
}
}
break;
}

var G__207231 = cljs.core.next.call(null,seq__207144_207198__$1);
var G__207232 = null;
var G__207233 = (0);
var G__207234 = (0);
seq__207144_207162 = G__207231;
chunk__207145_207163 = G__207232;
count__207146_207164 = G__207233;
i__207147_207165 = G__207234;
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
dynomics.space.ui.make_handler = (function dynomics$space$ui$make_handler(transform,type_key,p__207235){
var map__207238 = p__207235;
var map__207238__$1 = ((((!((map__207238 == null)))?((((map__207238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__207238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__207238):map__207238);
var s = map__207238__$1;
var msgs = cljs.core.get.call(null,map__207238__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var current_tool = cljs.core.get.call(null,map__207238__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
return ((function (map__207238,map__207238__$1,s,msgs,current_tool){
return (function (e){
e.stopPropagation();

var mp = transform.call(null,e.clientX,e.clientY);
cljs.core.async.put_BANG_.call(null,msgs,cljs.core.merge.call(null,s,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),type_key,new cljs.core.Keyword(null,"type","type",1174270348),current_tool,new cljs.core.Keyword(null,"position","position",-2011731912),mp,new cljs.core.Keyword(null,"event","event",301435442),e], null)));

return null;
});
;})(map__207238,map__207238__$1,s,msgs,current_tool))
});
dynomics.space.ui.arrowhead = (function dynomics$space$ui$arrowhead(trajectory){
var vec__207242 = cljs.core.subvec.call(null,trajectory,((cljs.core.count.call(null,trajectory) - (1)) - (1)),cljs.core.count.call(null,trajectory));
var p1 = cljs.core.nth.call(null,vec__207242,(0),null);
var p2 = cljs.core.nth.call(null,vec__207242,(1),null);
var vec__207243 = p2;
var ox = cljs.core.nth.call(null,vec__207243,(0),null);
var oy = cljs.core.nth.call(null,vec__207243,(1),null);
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
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__207246){
var vec__207247 = p__207246;
var x = cljs.core.nth.call(null,vec__207247,(0),null);
var y = cljs.core.nth.call(null,vec__207247,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((-1) * x),y], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(-12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(-12)], null)], null)], null));
});
dynomics.space.ui.saddle_3 = (function dynomics$space$ui$saddle_3(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__207250){
var vec__207251 = p__207250;
var x = cljs.core.nth.call(null,vec__207251,(0),null);
var y = cljs.core.nth.call(null,vec__207251,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,((-1) * y)], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(-24)], null)], null)], null));
});
dynomics.space.ui.saddle_4 = (function dynomics$space$ui$saddle_4(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__207254){
var vec__207255 = p__207254;
var x = cljs.core.nth.call(null,vec__207255,(0),null);
var y = cljs.core.nth.call(null,vec__207255,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(-12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(-8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(-16)], null)], null)], null));
});
dynomics.space.ui.saddle_5 = (function dynomics$space$ui$saddle_5(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__207258){
var vec__207259 = p__207258;
var x = cljs.core.nth.call(null,vec__207259,(0),null);
var y = cljs.core.nth.call(null,vec__207259,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.04,-0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(-12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(-16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(-8)], null)], null)], null));
});
dynomics.space.ui.spiral = (function dynomics$space$ui$spiral(var_args){
var args207260 = [];
var len__25279__auto___207263 = arguments.length;
var i__25280__auto___207264 = (0);
while(true){
if((i__25280__auto___207264 < len__25279__auto___207263)){
args207260.push((arguments[i__25280__auto___207264]));

var G__207265 = (i__25280__auto___207264 + (1));
i__25280__auto___207264 = G__207265;
continue;
} else {
}
break;
}

var G__207262 = args207260.length;
switch (G__207262) {
case 3:
return dynomics.space.ui.spiral.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return dynomics.space.ui.spiral.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args207260.length)].join('')));

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
dynomics.space.ui.make_paths = (function dynomics$space$ui$make_paths(p__207267){
var map__207274 = p__207267;
var map__207274__$1 = ((((!((map__207274 == null)))?((((map__207274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__207274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__207274):map__207274);
var space = map__207274__$1;
var nodes = cljs.core.get.call(null,map__207274__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__207274__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var regions = cljs.core.get.call(null,map__207274__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var node_scale = cljs.core.get.call(null,map__207274__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
cljs.core.println.call(null,"Regions ",regions);

return cljs.core.map.call(null,((function (map__207274,map__207274__$1,space,nodes,edges,regions,node_scale){
return (function (region){
return cljs.core.reduce.call(null,((function (map__207274,map__207274__$1,space,nodes,edges,regions,node_scale){
return (function (beziers,connection){
return cljs.core.conj.call(null,beziers,cljs.core.map.call(null,((function (map__207274,map__207274__$1,space,nodes,edges,regions,node_scale){
return (function (p__207276){
var vec__207277 = p__207276;
var nid1 = cljs.core.nth.call(null,vec__207277,(0),null);
var cid1 = cljs.core.nth.call(null,vec__207277,(1),null);
var vec__207278 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx1 = cljs.core.nth.call(null,vec__207278,(0),null);
var ny1 = cljs.core.nth.call(null,vec__207278,(1),null);
var vec__207279 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx1 = cljs.core.nth.call(null,vec__207279,(0),null);
var cy1 = cljs.core.nth.call(null,vec__207279,(1),null);
return dynomics.ui.svg.make_bezier.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx1 + (node_scale * cx1)),(ny1 + (node_scale * cy1))], null)], null));
});})(map__207274,map__207274__$1,space,nodes,edges,regions,node_scale))
,cljs.core.map.call(null,dynomics.space.core.simplify_connection,connection)));
});})(map__207274,map__207274__$1,space,nodes,edges,regions,node_scale))
,cljs.core.PersistentVector.EMPTY,region);
});})(map__207274,map__207274__$1,space,nodes,edges,regions,node_scale))
,regions);
});
/**
 * Returns a palette of tools
 */
dynomics.space.ui.make_tools_palette_component = (function dynomics$space$ui$make_tools_palette_component(p__207280){
var map__207287 = p__207280;
var map__207287__$1 = ((((!((map__207287 == null)))?((((map__207287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__207287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__207287):map__207287);
var state = map__207287__$1;
var current_tool = cljs.core.get.call(null,map__207287__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
var tools = cljs.core.get.call(null,map__207287__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
var tools_order = cljs.core.get.call(null,map__207287__$1,new cljs.core.Keyword(null,"tools-order","tools-order",-615877648));
var state_updates = cljs.core.get.call(null,map__207287__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
return om.dom.div.call(null,{"className": "dynomics_tool_things"},om.dom.div.call(null,{"className": "dynomics_tool_selectors"},cljs.core.map.call(null,((function (map__207287,map__207287__$1,state,current_tool,tools,tools_order,state_updates){
return (function (p__207289){
var vec__207290 = p__207289;
var tk = cljs.core.nth.call(null,vec__207290,(0),null);
var map__207291 = cljs.core.nth.call(null,vec__207290,(1),null);
var map__207291__$1 = ((((!((map__207291 == null)))?((((map__207291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__207291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__207291):map__207291);
var description = cljs.core.get.call(null,map__207291__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var icon = cljs.core.get.call(null,map__207291__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var keybinding = cljs.core.get.call(null,map__207291__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
return om.dom.div.call(null,{"className": [cljs.core.str("dynomics_tool_selector "),cljs.core.str(((cljs.core._EQ_.call(null,tk,current_tool))?"dynomics_tool_selected":null))].join(''), "title": [cljs.core.str(description),cljs.core.str(" ( "),cljs.core.str((((keybinding instanceof cljs.core.Keyword))?cljs.core.name.call(null,keybinding):keybinding)),cljs.core.str(" )")].join(''), "onMouseDown": ((function (vec__207290,tk,map__207291,map__207291__$1,description,icon,keybinding,map__207287,map__207287__$1,state,current_tool,tools,tools_order,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__207290,tk,map__207291,map__207291__$1,description,icon,keybinding,map__207287,map__207287__$1,state,current_tool,tools,tools_order,state_updates){
return (function (s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),tk);
});})(vec__207290,tk,map__207291,map__207291__$1,description,icon,keybinding,map__207287,map__207287__$1,state,current_tool,tools,tools_order,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tool","tool",-1298696470),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null));

return null;
});})(vec__207290,tk,map__207291,map__207291__$1,description,icon,keybinding,map__207287,map__207287__$1,state,current_tool,tools,tools_order,state_updates))
},icon);
});})(map__207287,map__207287__$1,state,current_tool,tools,tools_order,state_updates))
,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,tools),tools_order))),om.dom.div.call(null,{"className": "dynomics_current_tool_text", "title": cljs.core.get_in.call(null,tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tool,new cljs.core.Keyword(null,"description","description",-1428560544)], null))},cljs.core.get_in.call(null,tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tool,new cljs.core.Keyword(null,"name","name",1843675177)], null))));
});
/**
 * Returns a node-type component for the node types palette,
 *   which can prerender its SVG to a canvas & therefore
 *   cache the resulting image, to save on components in the DOM if need be.
 */
dynomics.space.ui.make_node_types_cached_component = (function dynomics$space$ui$make_node_types_cached_component(p__207293,owner){
var map__207299 = p__207293;
var map__207299__$1 = ((((!((map__207299 == null)))?((((map__207299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__207299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__207299):map__207299);
var id = cljs.core.get.call(null,map__207299__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.call(null,map__207299__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(typeof dynomics.space.ui.t_dynomics$space$ui207301 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui207301 = (function (make_node_types_cached_component,p__207293,owner,map__207299,id,type,meta207302){
this.make_node_types_cached_component = make_node_types_cached_component;
this.p__207293 = p__207293;
this.owner = owner;
this.map__207299 = map__207299;
this.id = id;
this.type = type;
this.meta207302 = meta207302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui207301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__207299,map__207299__$1,id,type){
return (function (_207303,meta207302__$1){
var self__ = this;
var _207303__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui207301(self__.make_node_types_cached_component,self__.p__207293,self__.owner,self__.map__207299,self__.id,self__.type,meta207302__$1));
});})(map__207299,map__207299__$1,id,type))
;

dynomics.space.ui.t_dynomics$space$ui207301.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__207299,map__207299__$1,id,type){
return (function (_207303){
var self__ = this;
var _207303__$1 = this;
return self__.meta207302;
});})(map__207299,map__207299__$1,id,type))
;

dynomics.space.ui.t_dynomics$space$ui207301.prototype.om$core$IInitState$ = true;

dynomics.space.ui.t_dynomics$space$ui207301.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__207299,map__207299__$1,id,type){
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
});})(map__207299,map__207299__$1,id,type))
;

dynomics.space.ui.t_dynomics$space$ui207301.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui207301.prototype.om$core$IRender$render$arity$1 = ((function (map__207299,map__207299__$1,id,type){
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
});})(map__207299,map__207299__$1,id,type))
;

dynomics.space.ui.t_dynomics$space$ui207301.prototype.om$core$IDidMount$ = true;

dynomics.space.ui.t_dynomics$space$ui207301.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__207299,map__207299__$1,id,type){
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
});})(map__207299,map__207299__$1,id,type))
;

dynomics.space.ui.t_dynomics$space$ui207301.getBasis = ((function (map__207299,map__207299__$1,id,type){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-cached-component","make-node-types-cached-component",-655003199,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a node-type component for the node types palette,\n  which can prerender its SVG to a canvas & therefore\n  cache the resulting image, to save on components in the DOM if need be."], null)),new cljs.core.Symbol(null,"p__207293","p__207293",1231538274,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__207299","map__207299",1001423569,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"meta207302","meta207302",-1256998615,null)], null);
});})(map__207299,map__207299__$1,id,type))
;

dynomics.space.ui.t_dynomics$space$ui207301.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui207301.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui207301";

dynomics.space.ui.t_dynomics$space$ui207301.cljs$lang$ctorPrWriter = ((function (map__207299,map__207299__$1,id,type){
return (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"dynomics.space.ui/t_dynomics$space$ui207301");
});})(map__207299,map__207299__$1,id,type))
;

dynomics.space.ui.__GT_t_dynomics$space$ui207301 = ((function (map__207299,map__207299__$1,id,type){
return (function dynomics$space$ui$make_node_types_cached_component_$___GT_t_dynomics$space$ui207301(make_node_types_cached_component__$1,p__207293__$1,owner__$1,map__207299__$2,id__$1,type__$1,meta207302){
return (new dynomics.space.ui.t_dynomics$space$ui207301(make_node_types_cached_component__$1,p__207293__$1,owner__$1,map__207299__$2,id__$1,type__$1,meta207302));
});})(map__207299,map__207299__$1,id,type))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui207301(dynomics$space$ui$make_node_types_cached_component,p__207293,owner,map__207299__$1,id,type,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a component for the node types palette
 */
dynomics.space.ui.make_node_types_palette_component = (function dynomics$space$ui$make_node_types_palette_component(p__207304){
var map__207313 = p__207304;
var map__207313__$1 = ((((!((map__207313 == null)))?((((map__207313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__207313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__207313):map__207313);
var state = map__207313__$1;
var component = cljs.core.get.call(null,map__207313__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var state_updates = cljs.core.get.call(null,map__207313__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
if(typeof dynomics.space.ui.t_dynomics$space$ui207315 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui207315 = (function (make_node_types_palette_component,p__207304,map__207313,state,component,state_updates,meta207316){
this.make_node_types_palette_component = make_node_types_palette_component;
this.p__207304 = p__207304;
this.map__207313 = map__207313;
this.state = state;
this.component = component;
this.state_updates = state_updates;
this.meta207316 = meta207316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui207315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__207313,map__207313__$1,state,component,state_updates){
return (function (_207317,meta207316__$1){
var self__ = this;
var _207317__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui207315(self__.make_node_types_palette_component,self__.p__207304,self__.map__207313,self__.state,self__.component,self__.state_updates,meta207316__$1));
});})(map__207313,map__207313__$1,state,component,state_updates))
;

dynomics.space.ui.t_dynomics$space$ui207315.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__207313,map__207313__$1,state,component,state_updates){
return (function (_207317){
var self__ = this;
var _207317__$1 = this;
return self__.meta207316;
});})(map__207313,map__207313__$1,state,component,state_updates))
;

dynomics.space.ui.t_dynomics$space$ui207315.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui207315.prototype.om$core$IRender$render$arity$1 = ((function (map__207313,map__207313__$1,state,component,state_updates){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"className": "dynomics_node_types"},cljs.core.map.call(null,((function (this$__$1,map__207313,map__207313__$1,state,component,state_updates){
return (function (p__207318){
var map__207319 = p__207318;
var map__207319__$1 = ((((!((map__207319 == null)))?((((map__207319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__207319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__207319):map__207319);
var id = cljs.core.get.call(null,map__207319__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var stability = cljs.core.get.call(null,map__207319__$1,new cljs.core.Keyword(null,"stability","stability",1733225509));
var type = cljs.core.get.call(null,map__207319__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return om.dom.div.call(null,{"className": [cljs.core.str("dynomics_node_type_selector")].join(''), "title": [cljs.core.str("Set selected nodes to "),cljs.core.str(id),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,stability)),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,type))].join(''), "onMouseDown": ((function (map__207319,map__207319__$1,id,stability,type,this$__$1,map__207313,map__207313__$1,state,component,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.get_in.call(null,self__.component,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"node-types","node-types",1539943342),new cljs.core.Keyword(null,"tools","tools",-1241731990),id,new cljs.core.Keyword(null,"fn","fn",-1175266204)], null)),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Node type "),cljs.core.str(id)].join('')], null)], null));

return null;
});})(map__207319,map__207319__$1,id,stability,type,this$__$1,map__207313,map__207313__$1,state,component,state_updates))
},om.core.build.call(null,dynomics.space.ui.make_node_types_cached_component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("ntp"),cljs.core.str(id)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
});})(this$__$1,map__207313,map__207313__$1,state,component,state_updates))
,cljs.core.vals.call(null,dynomics.space.core.node_types)));
});})(map__207313,map__207313__$1,state,component,state_updates))
;

dynomics.space.ui.t_dynomics$space$ui207315.getBasis = ((function (map__207313,map__207313__$1,state,component,state_updates){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-palette-component","make-node-types-palette-component",54407202,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the node types palette"], null)),new cljs.core.Symbol(null,"p__207304","p__207304",-1012219199,null),new cljs.core.Symbol(null,"map__207313","map__207313",952198535,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"meta207316","meta207316",1141407790,null)], null);
});})(map__207313,map__207313__$1,state,component,state_updates))
;

dynomics.space.ui.t_dynomics$space$ui207315.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui207315.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui207315";

dynomics.space.ui.t_dynomics$space$ui207315.cljs$lang$ctorPrWriter = ((function (map__207313,map__207313__$1,state,component,state_updates){
return (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"dynomics.space.ui/t_dynomics$space$ui207315");
});})(map__207313,map__207313__$1,state,component,state_updates))
;

dynomics.space.ui.__GT_t_dynomics$space$ui207315 = ((function (map__207313,map__207313__$1,state,component,state_updates){
return (function dynomics$space$ui$make_node_types_palette_component_$___GT_t_dynomics$space$ui207315(make_node_types_palette_component__$1,p__207304__$1,map__207313__$2,state__$1,component__$1,state_updates__$1,meta207316){
return (new dynomics.space.ui.t_dynomics$space$ui207315(make_node_types_palette_component__$1,p__207304__$1,map__207313__$2,state__$1,component__$1,state_updates__$1,meta207316));
});})(map__207313,map__207313__$1,state,component,state_updates))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui207315(dynomics$space$ui$make_node_types_palette_component,p__207304,map__207313__$1,state,component,state_updates,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a component for an edge
 */
dynomics.space.ui.make_edge_component = (function dynomics$space$ui$make_edge_component(p__207321){
var map__207333 = p__207321;
var map__207333__$1 = ((((!((map__207333 == null)))?((((map__207333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__207333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__207333):map__207333);
var vec__207334 = cljs.core.get.call(null,map__207333__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__207335 = cljs.core.nth.call(null,vec__207334,(0),null);
var nid1 = cljs.core.nth.call(null,vec__207335,(0),null);
var nid2 = cljs.core.nth.call(null,vec__207335,(1),null);
var vec__207336 = cljs.core.nth.call(null,vec__207334,(1),null);
var nx1 = cljs.core.nth.call(null,vec__207336,(0),null);
var ny1 = cljs.core.nth.call(null,vec__207336,(1),null);
var vec__207337 = cljs.core.nth.call(null,vec__207334,(2),null);
var nx2 = cljs.core.nth.call(null,vec__207337,(0),null);
var ny2 = cljs.core.nth.call(null,vec__207337,(1),null);
var vec__207338 = cljs.core.nth.call(null,vec__207334,(3),null);
var cx1 = cljs.core.nth.call(null,vec__207338,(0),null);
var cx2 = cljs.core.nth.call(null,vec__207338,(1),null);
var vec__207339 = cljs.core.nth.call(null,vec__207334,(4),null);
var cy1 = cljs.core.nth.call(null,vec__207339,(0),null);
var cy2 = cljs.core.nth.call(null,vec__207339,(1),null);
var compatible_QMARK_ = cljs.core.get.call(null,map__207333__$1,new cljs.core.Keyword(null,"compatible?","compatible?",923422575));
var node_scale = cljs.core.get.call(null,map__207333__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
if(typeof dynomics.space.ui.t_dynomics$space$ui207341 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui207341 = (function (nx1,map__207333,cx1,ny2,vec__207337,make_edge_component,cy2,nx2,vec__207339,vec__207334,vec__207338,cy1,node_scale,ny1,cx2,compatible_QMARK_,vec__207336,p__207321,nid2,vec__207335,nid1,meta207342){
this.nx1 = nx1;
this.map__207333 = map__207333;
this.cx1 = cx1;
this.ny2 = ny2;
this.vec__207337 = vec__207337;
this.make_edge_component = make_edge_component;
this.cy2 = cy2;
this.nx2 = nx2;
this.vec__207339 = vec__207339;
this.vec__207334 = vec__207334;
this.vec__207338 = vec__207338;
this.cy1 = cy1;
this.node_scale = node_scale;
this.ny1 = ny1;
this.cx2 = cx2;
this.compatible_QMARK_ = compatible_QMARK_;
this.vec__207336 = vec__207336;
this.p__207321 = p__207321;
this.nid2 = nid2;
this.vec__207335 = vec__207335;
this.nid1 = nid1;
this.meta207342 = meta207342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui207341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__207333,map__207333__$1,vec__207334,vec__207335,nid1,nid2,vec__207336,nx1,ny1,vec__207337,nx2,ny2,vec__207338,cx1,cx2,vec__207339,cy1,cy2,compatible_QMARK_,node_scale){
return (function (_207343,meta207342__$1){
var self__ = this;
var _207343__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui207341(self__.nx1,self__.map__207333,self__.cx1,self__.ny2,self__.vec__207337,self__.make_edge_component,self__.cy2,self__.nx2,self__.vec__207339,self__.vec__207334,self__.vec__207338,self__.cy1,self__.node_scale,self__.ny1,self__.cx2,self__.compatible_QMARK_,self__.vec__207336,self__.p__207321,self__.nid2,self__.vec__207335,self__.nid1,meta207342__$1));
});})(map__207333,map__207333__$1,vec__207334,vec__207335,nid1,nid2,vec__207336,nx1,ny1,vec__207337,nx2,ny2,vec__207338,cx1,cx2,vec__207339,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui207341.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__207333,map__207333__$1,vec__207334,vec__207335,nid1,nid2,vec__207336,nx1,ny1,vec__207337,nx2,ny2,vec__207338,cx1,cx2,vec__207339,cy1,cy2,compatible_QMARK_,node_scale){
return (function (_207343){
var self__ = this;
var _207343__$1 = this;
return self__.meta207342;
});})(map__207333,map__207333__$1,vec__207334,vec__207335,nid1,nid2,vec__207336,nx1,ny1,vec__207337,nx2,ny2,vec__207338,cx1,cx2,vec__207339,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui207341.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui207341.prototype.om$core$IRender$render$arity$1 = ((function (map__207333,map__207333__$1,vec__207334,vec__207335,nid1,nid2,vec__207336,nx1,ny1,vec__207337,nx2,ny2,vec__207338,cx1,cx2,vec__207339,cy1,cy2,compatible_QMARK_,node_scale){
return (function (this__39037__auto__){
var self__ = this;
var this__39037__auto____$1 = this;
return om.dom.path.call(null,{"key": [cljs.core.str("edge_"),cljs.core.str(self__.nid1),cljs.core.str("_"),cljs.core.str(self__.nid2)].join(''), "className": [cljs.core.str("dynomics_edge "),cljs.core.str((cljs.core.truth_(self__.compatible_QMARK_)?"dynomics_compatible_edge":null))].join(''), "d": dynomics.ui.svg.to_svg_path.call(null,cljs.core.map.call(null,dynomics.ui.svg.make_bezier,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx1,self__.ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nx1 + (self__.node_scale * self__.cx1)),(self__.ny1 + (self__.node_scale * self__.cy1))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx2,self__.ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nx2 + (self__.node_scale * self__.cx2)),(self__.ny2 + (self__.node_scale * self__.cy2))], null)], null)], null)))});
});})(map__207333,map__207333__$1,vec__207334,vec__207335,nid1,nid2,vec__207336,nx1,ny1,vec__207337,nx2,ny2,vec__207338,cx1,cx2,vec__207339,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui207341.getBasis = ((function (map__207333,map__207333__$1,vec__207334,vec__207335,nid1,nid2,vec__207336,nx1,ny1,vec__207337,nx2,ny2,vec__207338,cx1,cx2,vec__207339,cy1,cy2,compatible_QMARK_,node_scale){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"map__207333","map__207333",1642697699,null),new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null),new cljs.core.Symbol(null,"vec__207337","vec__207337",-2042332408,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-edge-component","make-edge-component",-530385559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null)], null)], null),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Symbol(null,"compatible?","compatible?",-1731013194,null),new cljs.core.Keyword(null,"compatible?","compatible?",923422575),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for an edge"], null)),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null),new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"vec__207339","vec__207339",1748419821,null),new cljs.core.Symbol(null,"vec__207334","vec__207334",-499160274,null),new cljs.core.Symbol(null,"vec__207338","vec__207338",-1986808497,null),new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null),new cljs.core.Symbol(null,"compatible?","compatible?",-1731013194,null),new cljs.core.Symbol(null,"vec__207336","vec__207336",1708140473,null),new cljs.core.Symbol(null,"p__207321","p__207321",600049821,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null),new cljs.core.Symbol(null,"vec__207335","vec__207335",-849930626,null),new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"meta207342","meta207342",217187334,null)], null);
});})(map__207333,map__207333__$1,vec__207334,vec__207335,nid1,nid2,vec__207336,nx1,ny1,vec__207337,nx2,ny2,vec__207338,cx1,cx2,vec__207339,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui207341.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui207341.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui207341";

dynomics.space.ui.t_dynomics$space$ui207341.cljs$lang$ctorPrWriter = ((function (map__207333,map__207333__$1,vec__207334,vec__207335,nid1,nid2,vec__207336,nx1,ny1,vec__207337,nx2,ny2,vec__207338,cx1,cx2,vec__207339,cy1,cy2,compatible_QMARK_,node_scale){
return (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"dynomics.space.ui/t_dynomics$space$ui207341");
});})(map__207333,map__207333__$1,vec__207334,vec__207335,nid1,nid2,vec__207336,nx1,ny1,vec__207337,nx2,ny2,vec__207338,cx1,cx2,vec__207339,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.__GT_t_dynomics$space$ui207341 = ((function (map__207333,map__207333__$1,vec__207334,vec__207335,nid1,nid2,vec__207336,nx1,ny1,vec__207337,nx2,ny2,vec__207338,cx1,cx2,vec__207339,cy1,cy2,compatible_QMARK_,node_scale){
return (function dynomics$space$ui$make_edge_component_$___GT_t_dynomics$space$ui207341(nx1__$1,map__207333__$2,cx1__$1,ny2__$1,vec__207337__$1,make_edge_component__$1,cy2__$1,nx2__$1,vec__207339__$1,vec__207334__$1,vec__207338__$1,cy1__$1,node_scale__$1,ny1__$1,cx2__$1,compatible_QMARK___$1,vec__207336__$1,p__207321__$1,nid2__$1,vec__207335__$1,nid1__$1,meta207342){
return (new dynomics.space.ui.t_dynomics$space$ui207341(nx1__$1,map__207333__$2,cx1__$1,ny2__$1,vec__207337__$1,make_edge_component__$1,cy2__$1,nx2__$1,vec__207339__$1,vec__207334__$1,vec__207338__$1,cy1__$1,node_scale__$1,ny1__$1,cx2__$1,compatible_QMARK___$1,vec__207336__$1,p__207321__$1,nid2__$1,vec__207335__$1,nid1__$1,meta207342));
});})(map__207333,map__207333__$1,vec__207334,vec__207335,nid1,nid2,vec__207336,nx1,ny1,vec__207337,nx2,ny2,vec__207338,cx1,cx2,vec__207339,cy1,cy2,compatible_QMARK_,node_scale))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui207341(nx1,map__207333__$1,cx1,ny2,vec__207337,dynomics$space$ui$make_edge_component,cy2,nx2,vec__207339,vec__207334,vec__207338,cy1,node_scale,ny1,cx2,compatible_QMARK_,vec__207336,p__207321,nid2,vec__207335,nid1,null));
});
dynomics.space.ui.make_open_region_component = (function dynomics$space$ui$make_open_region_component(p__207344){
var map__207357 = p__207344;
var map__207357__$1 = ((((!((map__207357 == null)))?((((map__207357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__207357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__207357):map__207357);
var node_id = cljs.core.get.call(null,map__207357__$1,new cljs.core.Keyword(null,"node-id","node-id",779482292));
var quadrant_type = cljs.core.get.call(null,map__207357__$1,new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370));
var vec__207358 = cljs.core.get.call(null,map__207357__$1,new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631));
var qx = cljs.core.nth.call(null,vec__207358,(0),null);
var qy = cljs.core.nth.call(null,vec__207358,(1),null);
var vec__207359 = cljs.core.get.call(null,map__207357__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p1 = cljs.core.nth.call(null,vec__207359,(0),null);
var p2 = cljs.core.nth.call(null,vec__207359,(1),null);
var map__207360 = cljs.core.nth.call(null,vec__207359,(2),null);
var map__207360__$1 = ((((!((map__207360 == null)))?((((map__207360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__207360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__207360):map__207360);
var p3 = map__207360__$1;
var vec__207361 = cljs.core.get.call(null,map__207360__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var x = cljs.core.nth.call(null,vec__207361,(0),null);
var y = cljs.core.nth.call(null,vec__207361,(1),null);
var vec__207362 = cljs.core.get.call(null,map__207360__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__207363 = cljs.core.nth.call(null,vec__207362,(0),null);
var cx = cljs.core.nth.call(null,vec__207363,(0),null);
var cy = cljs.core.nth.call(null,vec__207363,(1),null);
var p4 = cljs.core.nth.call(null,vec__207359,(3),null);
if(typeof dynomics.space.ui.t_dynomics$space$ui207366 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui207366 = (function (x,vec__207361,vec__207362,p__207344,y,p2,p4,p3,vec__207363,qx,map__207360,vec__207359,map__207357,qy,vec__207358,p1,make_open_region_component,cx,cy,node_id,quadrant_type,meta207367){
this.x = x;
this.vec__207361 = vec__207361;
this.vec__207362 = vec__207362;
this.p__207344 = p__207344;
this.y = y;
this.p2 = p2;
this.p4 = p4;
this.p3 = p3;
this.vec__207363 = vec__207363;
this.qx = qx;
this.map__207360 = map__207360;
this.vec__207359 = vec__207359;
this.map__207357 = map__207357;
this.qy = qy;
this.vec__207358 = vec__207358;
this.p1 = p1;
this.make_open_region_component = make_open_region_component;
this.cx = cx;
this.cy = cy;
this.node_id = node_id;
this.quadrant_type = quadrant_type;
this.meta207367 = meta207367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui207366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__207357,map__207357__$1,node_id,quadrant_type,vec__207358,qx,qy,vec__207359,p1,p2,map__207360,map__207360__$1,p3,vec__207361,x,y,vec__207362,vec__207363,cx,cy,p4){
return (function (_207368,meta207367__$1){
var self__ = this;
var _207368__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui207366(self__.x,self__.vec__207361,self__.vec__207362,self__.p__207344,self__.y,self__.p2,self__.p4,self__.p3,self__.vec__207363,self__.qx,self__.map__207360,self__.vec__207359,self__.map__207357,self__.qy,self__.vec__207358,self__.p1,self__.make_open_region_component,self__.cx,self__.cy,self__.node_id,self__.quadrant_type,meta207367__$1));
});})(map__207357,map__207357__$1,node_id,quadrant_type,vec__207358,qx,qy,vec__207359,p1,p2,map__207360,map__207360__$1,p3,vec__207361,x,y,vec__207362,vec__207363,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui207366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__207357,map__207357__$1,node_id,quadrant_type,vec__207358,qx,qy,vec__207359,p1,p2,map__207360,map__207360__$1,p3,vec__207361,x,y,vec__207362,vec__207363,cx,cy,p4){
return (function (_207368){
var self__ = this;
var _207368__$1 = this;
return self__.meta207367;
});})(map__207357,map__207357__$1,node_id,quadrant_type,vec__207358,qx,qy,vec__207359,p1,p2,map__207360,map__207360__$1,p3,vec__207361,x,y,vec__207362,vec__207363,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui207366.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui207366.prototype.om$core$IRender$render$arity$1 = ((function (map__207357,map__207357__$1,node_id,quadrant_type,vec__207358,qx,qy,vec__207359,p1,p2,map__207360,map__207360__$1,p3,vec__207361,x,y,vec__207362,vec__207363,cx,cy,p4){
return (function (this__39037__auto__){
var self__ = this;
var this__39037__auto____$1 = this;
return om.dom.g.call(null,{},om.dom.defs.call(null,{},om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(self__.node_id),cljs.core.str("_"),cljs.core.str(self__.quadrant_type)].join(''), "gradientUnits": "userSpaceOnUse", "cx": self__.x, "cy": self__.y, "r": 0.04},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,self__.quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,self__.quadrant_type), "stopOpacity": "0"}))),om.dom.path.call(null,{"className": [cljs.core.str("ddynomics_open_region "),cljs.core.str([cljs.core.str("ddynomics_open_region_type_"),cljs.core.str(self__.quadrant_type)].join(''))].join(''), "fill": [cljs.core.str("url(#"),cljs.core.str([cljs.core.str("qg_"),cljs.core.str(self__.node_id),cljs.core.str("_"),cljs.core.str(self__.quadrant_type)].join('')),cljs.core.str(")")].join(''), "d": [cljs.core.str(dynomics.ui.svg.to_svg_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p1,self__.p2], null))),cljs.core.str(dynomics.ui.svg.to_svg_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,self__.p3,new cljs.core.Keyword(null,"ml","ml",1909675057),"L"),self__.p4], null))),cljs.core.str("z")].join('')}));
});})(map__207357,map__207357__$1,node_id,quadrant_type,vec__207358,qx,qy,vec__207359,p1,p2,map__207360,map__207360__$1,p3,vec__207361,x,y,vec__207362,vec__207363,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui207366.getBasis = ((function (map__207357,map__207357__$1,node_id,quadrant_type,vec__207358,qx,qy,vec__207359,p1,p2,map__207360,map__207360__$1,p3,vec__207361,x,y,vec__207362,vec__207363,cx,cy,p4){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"vec__207361","vec__207361",377457890,null),new cljs.core.Symbol(null,"vec__207362","vec__207362",407628194,null),new cljs.core.Symbol(null,"p__207344","p__207344",169242566,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null),new cljs.core.Symbol(null,"p4","p4",550404713,null),new cljs.core.Symbol(null,"p3","p3",-923395030,null),new cljs.core.Symbol(null,"vec__207363","vec__207363",1201308875,null),new cljs.core.Symbol(null,"qx","qx",876946123,null),new cljs.core.Symbol(null,"map__207360","map__207360",885992235,null),new cljs.core.Symbol(null,"vec__207359","vec__207359",1665678031,null),new cljs.core.Symbol(null,"map__207357","map__207357",-393797421,null),new cljs.core.Symbol(null,"qy","qy",1271868883,null),new cljs.core.Symbol(null,"vec__207358","vec__207358",2040245652,null),new cljs.core.Symbol(null,"p1","p1",703771573,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-open-region-component","make-open-region-component",530106712,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Keyword(null,"node-id","node-id",779482292),new cljs.core.Symbol(null,"quadrant-type","quadrant-type",333980157,null),new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"qx","qx",876946123,null),new cljs.core.Symbol(null,"qy","qy",1271868883,null)], null),new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"cy","cy",-1899104709,null)], null)], null),new cljs.core.Keyword(null,"control-points","control-points",-238538325),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"p3","p3",-923395030,null)], true, false),new cljs.core.Symbol(null,"p4","p4",550404713,null)], null),new cljs.core.Keyword(null,"points","points",-1486596883)], true, false)], null)))], null)),new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"cy","cy",-1899104709,null),new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Symbol(null,"quadrant-type","quadrant-type",333980157,null),new cljs.core.Symbol(null,"meta207367","meta207367",-1181797215,null)], null);
});})(map__207357,map__207357__$1,node_id,quadrant_type,vec__207358,qx,qy,vec__207359,p1,p2,map__207360,map__207360__$1,p3,vec__207361,x,y,vec__207362,vec__207363,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui207366.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui207366.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui207366";

dynomics.space.ui.t_dynomics$space$ui207366.cljs$lang$ctorPrWriter = ((function (map__207357,map__207357__$1,node_id,quadrant_type,vec__207358,qx,qy,vec__207359,p1,p2,map__207360,map__207360__$1,p3,vec__207361,x,y,vec__207362,vec__207363,cx,cy,p4){
return (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"dynomics.space.ui/t_dynomics$space$ui207366");
});})(map__207357,map__207357__$1,node_id,quadrant_type,vec__207358,qx,qy,vec__207359,p1,p2,map__207360,map__207360__$1,p3,vec__207361,x,y,vec__207362,vec__207363,cx,cy,p4))
;

dynomics.space.ui.__GT_t_dynomics$space$ui207366 = ((function (map__207357,map__207357__$1,node_id,quadrant_type,vec__207358,qx,qy,vec__207359,p1,p2,map__207360,map__207360__$1,p3,vec__207361,x,y,vec__207362,vec__207363,cx,cy,p4){
return (function dynomics$space$ui$make_open_region_component_$___GT_t_dynomics$space$ui207366(x__$1,vec__207361__$1,vec__207362__$1,p__207344__$1,y__$1,p2__$1,p4__$1,p3__$1,vec__207363__$1,qx__$1,map__207360__$2,vec__207359__$1,map__207357__$2,qy__$1,vec__207358__$1,p1__$1,make_open_region_component__$1,cx__$1,cy__$1,node_id__$1,quadrant_type__$1,meta207367){
return (new dynomics.space.ui.t_dynomics$space$ui207366(x__$1,vec__207361__$1,vec__207362__$1,p__207344__$1,y__$1,p2__$1,p4__$1,p3__$1,vec__207363__$1,qx__$1,map__207360__$2,vec__207359__$1,map__207357__$2,qy__$1,vec__207358__$1,p1__$1,make_open_region_component__$1,cx__$1,cy__$1,node_id__$1,quadrant_type__$1,meta207367));
});})(map__207357,map__207357__$1,node_id,quadrant_type,vec__207358,qx,qy,vec__207359,p1,p2,map__207360,map__207360__$1,p3,vec__207361,x,y,vec__207362,vec__207363,cx,cy,p4))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui207366(x,vec__207361,vec__207362,p__207344,y,p2,p4,p3,vec__207363,qx,map__207360__$1,vec__207359,map__207357__$1,qy,vec__207358,p1,dynomics$space$ui$make_open_region_component,cx,cy,node_id,quadrant_type,null));
});
/**
 * Returns a component for a node and its connections
 */
dynomics.space.ui.make_node_component = (function dynomics$space$ui$make_node_component(p__207369){
var map__207386 = p__207369;
var map__207386__$1 = ((((!((map__207386 == null)))?((((map__207386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__207386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__207386):map__207386);
var map__207387 = cljs.core.get.call(null,map__207386__$1,new cljs.core.Keyword(null,"node","node",581201198));
var map__207387__$1 = ((((!((map__207387 == null)))?((((map__207387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__207387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__207387):map__207387);
var vec__207388 = cljs.core.get.call(null,map__207387__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__207388,(0),null);
var y = cljs.core.nth.call(null,vec__207388,(1),null);
var t = cljs.core.get.call(null,map__207387__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var node_type = cljs.core.get.call(null,map__207387__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var id = cljs.core.get.call(null,map__207387__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var connections = cljs.core.get.call(null,map__207387__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var node_scale = cljs.core.get.call(null,map__207386__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var selected_nodes = cljs.core.get.call(null,map__207386__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var map__207389 = cljs.core.get.call(null,map__207386__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var map__207389__$1 = ((((!((map__207389 == null)))?((((map__207389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__207389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__207389):map__207389);
var current_tool = cljs.core.get.call(null,map__207389__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
var msgs = cljs.core.get.call(null,map__207386__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var pz = cljs.core.get.call(null,map__207386__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id], null);
if(typeof dynomics.space.ui.t_dynomics$space$ui207393 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui207393 = (function (t,connections,x,selected_nodes,current_tool,pz,p__207369,path,y,map__207386,make_node_component,vec__207388,node_scale,node_type,map__207389,msgs,id,map__207387,meta207394){
this.t = t;
this.connections = connections;
this.x = x;
this.selected_nodes = selected_nodes;
this.current_tool = current_tool;
this.pz = pz;
this.p__207369 = p__207369;
this.path = path;
this.y = y;
this.map__207386 = map__207386;
this.make_node_component = make_node_component;
this.vec__207388 = vec__207388;
this.node_scale = node_scale;
this.node_type = node_type;
this.map__207389 = map__207389;
this.msgs = msgs;
this.id = id;
this.map__207387 = map__207387;
this.meta207394 = meta207394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui207393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (path,map__207386,map__207386__$1,map__207387,map__207387__$1,vec__207388,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__207389,map__207389__$1,current_tool,msgs,pz){
return (function (_207395,meta207394__$1){
var self__ = this;
var _207395__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui207393(self__.t,self__.connections,self__.x,self__.selected_nodes,self__.current_tool,self__.pz,self__.p__207369,self__.path,self__.y,self__.map__207386,self__.make_node_component,self__.vec__207388,self__.node_scale,self__.node_type,self__.map__207389,self__.msgs,self__.id,self__.map__207387,meta207394__$1));
});})(path,map__207386,map__207386__$1,map__207387,map__207387__$1,vec__207388,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__207389,map__207389__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui207393.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (path,map__207386,map__207386__$1,map__207387,map__207387__$1,vec__207388,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__207389,map__207389__$1,current_tool,msgs,pz){
return (function (_207395){
var self__ = this;
var _207395__$1 = this;
return self__.meta207394;
});})(path,map__207386,map__207386__$1,map__207387,map__207387__$1,vec__207388,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__207389,map__207389__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui207393.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui207393.prototype.om$core$IRender$render$arity$1 = ((function (path,map__207386,map__207386__$1,map__207387,map__207387__$1,vec__207388,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__207389,map__207389__$1,current_tool,msgs,pz){
return (function (this__39037__auto__){
var self__ = this;
var this__39037__auto____$1 = this;
return om.dom.g.call(null,{"id": [cljs.core.str("node_"),cljs.core.str(self__.id)].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.x,self__.y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),self__.node_scale], null)), "className": [cljs.core.str("dynomics_node_subgraph "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,self__.path))?"dynomics_node_selected":null))].join(''), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"path","path",-188191168),self__.path,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"path","path",-188191168),self__.path,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null))},cljs.core.map.call(null,((function (this__39037__auto____$1,path,map__207386,map__207386__$1,map__207387,map__207387__$1,vec__207388,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__207389,map__207389__$1,current_tool,msgs,pz){
return (function (p__207396){
var vec__207397 = p__207396;
var i = cljs.core.nth.call(null,vec__207397,(0),null);
var v = cljs.core.nth.call(null,vec__207397,(1),null);
return om.dom.rect.call(null,{"className": [cljs.core.str("ddynomics_open_region_type_"),cljs.core.str(cljs.core.get_in.call(null,dynomics.space.core.node_types,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.node_type,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),v], null)))].join(''), "x": (0), "y": (0), "width": (1), "height": (1), "fill": [cljs.core.str("url(#qg_"),cljs.core.str(cljs.core.get_in.call(null,dynomics.space.core.node_types,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.node_type,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),v], null))),cljs.core.str(")")].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),((90) * (i - (1)))], null))});
});})(this__39037__auto____$1,path,map__207386,map__207386__$1,map__207387,map__207387__$1,vec__207388,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__207389,map__207389__$1,current_tool,msgs,pz))
,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,(4)),cljs.core.iterate.call(null,dynomics.space.core.P.call(null,dynomics.space.core.c_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)))),null,om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.3, "className": [cljs.core.str("dynomics_node_selector_dot")].join('')}),null,om.dom.rect.call(null,{"x": (0), "y": (0), "width": (1), "height": (1), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),(-1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),(2),(2)], null)), "className": [cljs.core.str("dynomics_node")].join('')}),om.dom.g.call(null,{"className": "dynomics_node_connections"},cljs.core.map.call(null,((function (this__39037__auto____$1,path,map__207386,map__207386__$1,map__207387,map__207387__$1,vec__207388,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__207389,map__207389__$1,current_tool,msgs,pz){
return (function (p__207398){
var map__207399 = p__207398;
var map__207399__$1 = ((((!((map__207399 == null)))?((((map__207399.cljs$lang$protocol_mask$partition0$ & (64))) || (map__207399.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__207399):map__207399);
var vec__207400 = cljs.core.get.call(null,map__207399__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var cx = cljs.core.nth.call(null,vec__207400,(0),null);
var cy = cljs.core.nth.call(null,vec__207400,(1),null);
var cid = cljs.core.get.call(null,map__207399__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return om.dom.g.call(null,{"className": "dynomics_node_connection", "id": [cljs.core.str("node_"),cljs.core.str(self__.id),cljs.core.str("_connection_"),cljs.core.str(cid)].join('')},om.dom.line.call(null,{"x1": (0), "y1": (0), "x2": cx, "y2": cy, "className": "dynomics_node_connection_line"}),(function (){var path__$1 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null);
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.27, "className": [cljs.core.str("dynomics_node_connection_dot "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,path__$1))?"dynomics_node_selected":null))].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),cx,cy], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"id","id",-1388402092),cid,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"id","id",-1388402092),cid,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null))});
})());
});})(this__39037__auto____$1,path,map__207386,map__207386__$1,map__207387,map__207387__$1,vec__207388,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__207389,map__207389__$1,current_tool,msgs,pz))
,self__.connections)));
});})(path,map__207386,map__207386__$1,map__207387,map__207387__$1,vec__207388,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__207389,map__207389__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui207393.getBasis = ((function (path,map__207386,map__207386__$1,map__207387,map__207387__$1,vec__207388,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__207389,map__207389__$1,current_tool,msgs,pz){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"current-tool","current-tool",699505924,null),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Symbol(null,"p__207369","p__207369",-2119633658,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"map__207386","map__207386",-102242933,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-component","make-node-component",-1574550003,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Keyword(null,"connections","connections",-2064090887)], true, false),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"current-tool","current-tool",699505924,null),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for a node and its connections"], null)),new cljs.core.Symbol(null,"vec__207388","vec__207388",-1082917171,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Symbol(null,"map__207389","map__207389",1331285274,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"map__207387","map__207387",555858719,null),new cljs.core.Symbol(null,"meta207394","meta207394",-1017585000,null)], null);
});})(path,map__207386,map__207386__$1,map__207387,map__207387__$1,vec__207388,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__207389,map__207389__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui207393.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui207393.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui207393";

dynomics.space.ui.t_dynomics$space$ui207393.cljs$lang$ctorPrWriter = ((function (path,map__207386,map__207386__$1,map__207387,map__207387__$1,vec__207388,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__207389,map__207389__$1,current_tool,msgs,pz){
return (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"dynomics.space.ui/t_dynomics$space$ui207393");
});})(path,map__207386,map__207386__$1,map__207387,map__207387__$1,vec__207388,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__207389,map__207389__$1,current_tool,msgs,pz))
;

dynomics.space.ui.__GT_t_dynomics$space$ui207393 = ((function (path,map__207386,map__207386__$1,map__207387,map__207387__$1,vec__207388,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__207389,map__207389__$1,current_tool,msgs,pz){
return (function dynomics$space$ui$make_node_component_$___GT_t_dynomics$space$ui207393(t__$1,connections__$1,x__$1,selected_nodes__$1,current_tool__$1,pz__$1,p__207369__$1,path__$1,y__$1,map__207386__$2,make_node_component__$1,vec__207388__$1,node_scale__$1,node_type__$1,map__207389__$2,msgs__$1,id__$1,map__207387__$2,meta207394){
return (new dynomics.space.ui.t_dynomics$space$ui207393(t__$1,connections__$1,x__$1,selected_nodes__$1,current_tool__$1,pz__$1,p__207369__$1,path__$1,y__$1,map__207386__$2,make_node_component__$1,vec__207388__$1,node_scale__$1,node_type__$1,map__207389__$2,msgs__$1,id__$1,map__207387__$2,meta207394));
});})(path,map__207386,map__207386__$1,map__207387,map__207387__$1,vec__207388,x,y,t,node_type,id,connections,node_scale,selected_nodes,map__207389,map__207389__$1,current_tool,msgs,pz))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui207393(t,connections,x,selected_nodes,current_tool,pz,p__207369,path,y,map__207386__$1,dynomics$space$ui$make_node_component,vec__207388,node_scale,node_type,map__207389__$1,msgs,id,map__207387__$1,null));
});
dynomics.space.ui.test_component = (function dynomics$space$ui$test_component(x){
if(typeof dynomics.space.ui.t_dynomics$space$ui207405 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui207405 = (function (test_component,x,meta207406){
this.test_component = test_component;
this.x = x;
this.meta207406 = meta207406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui207405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_207407,meta207406__$1){
var self__ = this;
var _207407__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui207405(self__.test_component,self__.x,meta207406__$1));
});

dynomics.space.ui.t_dynomics$space$ui207405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_207407){
var self__ = this;
var _207407__$1 = this;
return self__.meta207406;
});

dynomics.space.ui.t_dynomics$space$ui207405.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui207405.prototype.om$core$IRender$render$arity$1 = (function (this__39037__auto__){
var self__ = this;
var this__39037__auto____$1 = this;
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.2, "fill": (((0.5 > Math.random()))?"orange":"green")});
});

dynomics.space.ui.t_dynomics$space$ui207405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"test-component","test-component",1959093538,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)))], null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"meta207406","meta207406",1619536442,null)], null);
});

dynomics.space.ui.t_dynomics$space$ui207405.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui207405.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui207405";

dynomics.space.ui.t_dynomics$space$ui207405.cljs$lang$ctorPrWriter = (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"dynomics.space.ui/t_dynomics$space$ui207405");
});

dynomics.space.ui.__GT_t_dynomics$space$ui207405 = (function dynomics$space$ui$test_component_$___GT_t_dynomics$space$ui207405(test_component__$1,x__$1,meta207406){
return (new dynomics.space.ui.t_dynomics$space$ui207405(test_component__$1,x__$1,meta207406));
});

}

return (new dynomics.space.ui.t_dynomics$space$ui207405(dynomics$space$ui$test_component,x,null));
});
dynomics.space.ui.make_quadrant_gradients = (function dynomics$space$ui$make_quadrant_gradients(){
var iter__24993__auto__ = (function dynomics$space$ui$make_quadrant_gradients_$_iter__207412(s__207413){
return (new cljs.core.LazySeq(null,(function (){
var s__207413__$1 = s__207413;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__207413__$1);
if(temp__4425__auto__){
var s__207413__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__207413__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__207413__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__207415 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__207414 = (0);
while(true){
if((i__207414 < size__24992__auto__)){
var quadrant_type = cljs.core._nth.call(null,c__24991__auto__,i__207414);
cljs.core.chunk_append.call(null,b__207415,om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(quadrant_type)].join(''), "gradientUnits": "objectBoundingBox", "cx": (0), "cy": (0), "r": (1)},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "0"})));

var G__207416 = (i__207414 + (1));
i__207414 = G__207416;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__207415),dynomics$space$ui$make_quadrant_gradients_$_iter__207412.call(null,cljs.core.chunk_rest.call(null,s__207413__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__207415),null);
}
} else {
var quadrant_type = cljs.core.first.call(null,s__207413__$2);
return cljs.core.cons.call(null,om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(quadrant_type)].join(''), "gradientUnits": "objectBoundingBox", "cx": (0), "cy": (0), "r": (1)},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "0"})),dynomics$space$ui$make_quadrant_gradients_$_iter__207412.call(null,cljs.core.rest.call(null,s__207413__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24993__auto__.call(null,cljs.core.range.call(null,(4)));
});
/**
 * Returns a component for the phase-space editor
 */
dynomics.space.ui.make_space_component = (function dynomics$space$ui$make_space_component(p__207417){
var map__207427 = p__207417;
var map__207427__$1 = ((((!((map__207427 == null)))?((((map__207427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__207427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__207427):map__207427);
var state = map__207427__$1;
var map__207428 = cljs.core.get.call(null,map__207427__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__207428__$1 = ((((!((map__207428 == null)))?((((map__207428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__207428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__207428):map__207428);
var space = map__207428__$1;
var nodes = cljs.core.get.call(null,map__207428__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__207428__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var selected_nodes = cljs.core.get.call(null,map__207428__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var regions = cljs.core.get.call(null,map__207428__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var compatibilities = cljs.core.get.call(null,map__207428__$1,new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024));
var graph = cljs.core.get.call(null,map__207428__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var node_scale = cljs.core.get.call(null,map__207428__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var cf = cljs.core.get.call(null,map__207427__$1,new cljs.core.Keyword(null,"cf","cf",1480736310));
var map__207429 = cljs.core.get.call(null,map__207427__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var map__207429__$1 = ((((!((map__207429 == null)))?((((map__207429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__207429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__207429):map__207429);
var current_tool = cljs.core.get.call(null,map__207429__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
var msgs = cljs.core.get.call(null,map__207427__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var pz = cljs.core.get.call(null,map__207427__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
if(typeof dynomics.space.ui.t_dynomics$space$ui207433 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui207433 = (function (selected_nodes,current_tool,edges,pz,make_space_component,space,map__207427,node_scale,regions,state,map__207429,p__207417,compatibilities,msgs,nodes,map__207428,graph,cf,meta207434){
this.selected_nodes = selected_nodes;
this.current_tool = current_tool;
this.edges = edges;
this.pz = pz;
this.make_space_component = make_space_component;
this.space = space;
this.map__207427 = map__207427;
this.node_scale = node_scale;
this.regions = regions;
this.state = state;
this.map__207429 = map__207429;
this.p__207417 = p__207417;
this.compatibilities = compatibilities;
this.msgs = msgs;
this.nodes = nodes;
this.map__207428 = map__207428;
this.graph = graph;
this.cf = cf;
this.meta207434 = meta207434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui207433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__207427,map__207427__$1,state,map__207428,map__207428__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__207429,map__207429__$1,current_tool,msgs,pz){
return (function (_207435,meta207434__$1){
var self__ = this;
var _207435__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui207433(self__.selected_nodes,self__.current_tool,self__.edges,self__.pz,self__.make_space_component,self__.space,self__.map__207427,self__.node_scale,self__.regions,self__.state,self__.map__207429,self__.p__207417,self__.compatibilities,self__.msgs,self__.nodes,self__.map__207428,self__.graph,self__.cf,meta207434__$1));
});})(map__207427,map__207427__$1,state,map__207428,map__207428__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__207429,map__207429__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui207433.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__207427,map__207427__$1,state,map__207428,map__207428__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__207429,map__207429__$1,current_tool,msgs,pz){
return (function (_207435){
var self__ = this;
var _207435__$1 = this;
return self__.meta207434;
});})(map__207427,map__207427__$1,state,map__207428,map__207428__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__207429,map__207429__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui207433.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui207433.prototype.om$core$IRender$render$arity$1 = ((function (map__207427,map__207427__$1,state,map__207428,map__207428__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__207429,map__207429__$1,current_tool,msgs,pz){
return (function (this__39037__auto__){
var self__ = this;
var this__39037__auto____$1 = this;
return om.dom.div.call(null,{"className": [cljs.core.str("dynomics_space "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),self__.cf))?"selected_function":"hidden_function"))].join('')},om.dom.svg.call(null,{"zoomAndPan": false, "preserveAspectRatio": "xMidYMin", "width": "100%", "shape-rendering": "crispEdges", "xmlns": "http://www.w3.org/2000/svg", "className": "dynomics_space_svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "id": "space", "viewBox": "-1 -1 3 3", "height": "100%"},om.dom.defs.call(null,{},dynomics.space.ui.make_quadrant_gradients.call(null)),om.dom.g.call(null,{"id": "space_root", "onMouseMove": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null))},om.dom.rect.call(null,{"x": (-16), "y": (-16), "width": (32), "height": (32), "className": "dynomics_space_background"}),om.dom.rect.call(null,{"x": (0), "y": (0), "width": (1), "height": (1), "className": "dynomics_space_space"}),null,null,null,om.core.build_all.call(null,dynomics.space.ui.make_edge_component,cljs.core.map.call(null,((function (this__39037__auto____$1,map__207427,map__207427__$1,state,map__207428,map__207428__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__207429,map__207429__$1,current_tool,msgs,pz){
return (function (e){
return cljs.core.assoc.call(null,dynomics.space.core.with_compatibilities.call(null,e,self__.compatibilities),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale);
});})(this__39037__auto____$1,map__207427,map__207427__$1,state,map__207428,map__207428__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__207429,map__207429__$1,current_tool,msgs,pz))
,cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.edge_points,self__.nodes),self__.edges))),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__39037__auto____$1,map__207427,map__207427__$1,state,map__207428,map__207428__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__207429,map__207429__$1,current_tool,msgs,pz){
return (function (node){
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz], null));
});})(this__39037__auto____$1,map__207427,map__207427__$1,state,map__207428,map__207428__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__207429,map__207429__$1,current_tool,msgs,pz))
,cljs.core.vals.call(null,cljs.core.apply.call(null,cljs.core.dissoc,self__.nodes,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),cljs.core.map.call(null,cljs.core.last,self__.selected_nodes))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__39037__auto____$1,map__207427,map__207427__$1,state,map__207428,map__207428__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__207429,map__207429__$1,current_tool,msgs,pz){
return (function (node){
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz], null));
});})(this__39037__auto____$1,map__207427,map__207427__$1,state,map__207428,map__207428__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__207429,map__207429__$1,current_tool,msgs,pz))
,cljs.core.vals.call(null,cljs.core.select_keys.call(null,self__.nodes,cljs.core.map.call(null,cljs.core.last,self__.selected_nodes)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),null)));
});})(map__207427,map__207427__$1,state,map__207428,map__207428__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__207429,map__207429__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui207433.getBasis = ((function (map__207427,map__207427__$1,state,map__207428,map__207428__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__207429,map__207429__$1,current_tool,msgs,pz){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"current-tool","current-tool",699505924,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"pz","pz",-67109147,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-space-component","make-space-component",-638751478,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"compatibilities","compatibilities",289068503,null),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Keyword(null,"cf","cf",1480736310),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"current-tool","current-tool",699505924,null),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the phase-space editor"], null)),new cljs.core.Symbol(null,"space","space",1988665002,null),new cljs.core.Symbol(null,"map__207427","map__207427",510132846,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__207429","map__207429",-419721707,null),new cljs.core.Symbol(null,"p__207417","p__207417",242339446,null),new cljs.core.Symbol(null,"compatibilities","compatibilities",289068503,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"map__207428","map__207428",1176783611,null),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Symbol(null,"meta207434","meta207434",-1672821297,null)], null);
});})(map__207427,map__207427__$1,state,map__207428,map__207428__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__207429,map__207429__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui207433.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui207433.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui207433";

dynomics.space.ui.t_dynomics$space$ui207433.cljs$lang$ctorPrWriter = ((function (map__207427,map__207427__$1,state,map__207428,map__207428__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__207429,map__207429__$1,current_tool,msgs,pz){
return (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"dynomics.space.ui/t_dynomics$space$ui207433");
});})(map__207427,map__207427__$1,state,map__207428,map__207428__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__207429,map__207429__$1,current_tool,msgs,pz))
;

dynomics.space.ui.__GT_t_dynomics$space$ui207433 = ((function (map__207427,map__207427__$1,state,map__207428,map__207428__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__207429,map__207429__$1,current_tool,msgs,pz){
return (function dynomics$space$ui$make_space_component_$___GT_t_dynomics$space$ui207433(selected_nodes__$1,current_tool__$1,edges__$1,pz__$1,make_space_component__$1,space__$1,map__207427__$2,node_scale__$1,regions__$1,state__$1,map__207429__$2,p__207417__$1,compatibilities__$1,msgs__$1,nodes__$1,map__207428__$2,graph__$1,cf__$1,meta207434){
return (new dynomics.space.ui.t_dynomics$space$ui207433(selected_nodes__$1,current_tool__$1,edges__$1,pz__$1,make_space_component__$1,space__$1,map__207427__$2,node_scale__$1,regions__$1,state__$1,map__207429__$2,p__207417__$1,compatibilities__$1,msgs__$1,nodes__$1,map__207428__$2,graph__$1,cf__$1,meta207434));
});})(map__207427,map__207427__$1,state,map__207428,map__207428__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__207429,map__207429__$1,current_tool,msgs,pz))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui207433(selected_nodes,current_tool,edges,pz,dynomics$space$ui$make_space_component,space,map__207427__$1,node_scale,regions,state,map__207429__$1,p__207417,compatibilities,msgs,nodes,map__207428__$1,graph,cf,null));
});
/**
 * Returns a component for offscreen rendering
 */
dynomics.space.ui.make_prerender_component = (function dynomics$space$ui$make_prerender_component(p__207436){
var map__207444 = p__207436;
var map__207444__$1 = ((((!((map__207444 == null)))?((((map__207444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__207444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__207444):map__207444);
var state = map__207444__$1;
var map__207445 = cljs.core.get.call(null,map__207444__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__207445__$1 = ((((!((map__207445 == null)))?((((map__207445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__207445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__207445):map__207445);
var space = map__207445__$1;
var nodes = cljs.core.get.call(null,map__207445__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__207445__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var selected_nodes = cljs.core.get.call(null,map__207445__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var regions = cljs.core.get.call(null,map__207445__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var node_scale = cljs.core.get.call(null,map__207445__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var cf = cljs.core.get.call(null,map__207444__$1,new cljs.core.Keyword(null,"cf","cf",1480736310));
if(typeof dynomics.space.ui.t_dynomics$space$ui207448 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui207448 = (function (selected_nodes,map__207444,make_prerender_component,edges,space,map__207445,node_scale,regions,p__207436,state,nodes,cf,meta207449){
this.selected_nodes = selected_nodes;
this.map__207444 = map__207444;
this.make_prerender_component = make_prerender_component;
this.edges = edges;
this.space = space;
this.map__207445 = map__207445;
this.node_scale = node_scale;
this.regions = regions;
this.p__207436 = p__207436;
this.state = state;
this.nodes = nodes;
this.cf = cf;
this.meta207449 = meta207449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui207448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__207444,map__207444__$1,state,map__207445,map__207445__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (_207450,meta207449__$1){
var self__ = this;
var _207450__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui207448(self__.selected_nodes,self__.map__207444,self__.make_prerender_component,self__.edges,self__.space,self__.map__207445,self__.node_scale,self__.regions,self__.p__207436,self__.state,self__.nodes,self__.cf,meta207449__$1));
});})(map__207444,map__207444__$1,state,map__207445,map__207445__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.t_dynomics$space$ui207448.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__207444,map__207444__$1,state,map__207445,map__207445__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (_207450){
var self__ = this;
var _207450__$1 = this;
return self__.meta207449;
});})(map__207444,map__207444__$1,state,map__207445,map__207445__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.t_dynomics$space$ui207448.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui207448.prototype.om$core$IRender$render$arity$1 = ((function (map__207444,map__207444__$1,state,map__207445,map__207445__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (this__39037__auto__){
var self__ = this;
var this__39037__auto____$1 = this;
return om.dom.div.call(null,{"className": "prerender_component", "id": "prerender_component_all"},om.dom.canvas.call(null,{"id": "prerender_canvas_all", "width": (64), "height": (64)}),om.dom.svg.call(null,{"zoomAndPan": false, "preserveAspectRatio": "xMidYMin", "width": "100%", "shape-rendering": "crispEdges", "xmlns": "http://www.w3.org/2000/svg", "className": "dynomics_space_svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "id": "prerender_svg_all", "viewBox": "-1 -1 3 3", "height": "100%"},dynomics.space.ui.make_type_icon.call(null,(1))));
});})(map__207444,map__207444__$1,state,map__207445,map__207445__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.t_dynomics$space$ui207448.getBasis = ((function (map__207444,map__207444__$1,state,map__207445,map__207445__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"map__207444","map__207444",-1706086621,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-prerender-component","make-prerender-component",-630291485,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Keyword(null,"cf","cf",1480736310),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for offscreen rendering"], null)),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"space","space",1988665002,null),new cljs.core.Symbol(null,"map__207445","map__207445",-838035248,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"p__207436","p__207436",1574283379,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Symbol(null,"meta207449","meta207449",1392239185,null)], null);
});})(map__207444,map__207444__$1,state,map__207445,map__207445__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.t_dynomics$space$ui207448.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui207448.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui207448";

dynomics.space.ui.t_dynomics$space$ui207448.cljs$lang$ctorPrWriter = ((function (map__207444,map__207444__$1,state,map__207445,map__207445__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"dynomics.space.ui/t_dynomics$space$ui207448");
});})(map__207444,map__207444__$1,state,map__207445,map__207445__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.__GT_t_dynomics$space$ui207448 = ((function (map__207444,map__207444__$1,state,map__207445,map__207445__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function dynomics$space$ui$make_prerender_component_$___GT_t_dynomics$space$ui207448(selected_nodes__$1,map__207444__$2,make_prerender_component__$1,edges__$1,space__$1,map__207445__$2,node_scale__$1,regions__$1,p__207436__$1,state__$1,nodes__$1,cf__$1,meta207449){
return (new dynomics.space.ui.t_dynomics$space$ui207448(selected_nodes__$1,map__207444__$2,make_prerender_component__$1,edges__$1,space__$1,map__207445__$2,node_scale__$1,regions__$1,p__207436__$1,state__$1,nodes__$1,cf__$1,meta207449));
});})(map__207444,map__207444__$1,state,map__207445,map__207445__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui207448(selected_nodes,map__207444__$1,dynomics$space$ui$make_prerender_component,edges,space,map__207445__$1,node_scale,regions,p__207436,state,nodes,cf,null));
});

//# sourceMappingURL=ui.js.map