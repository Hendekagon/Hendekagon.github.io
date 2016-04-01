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
var args93154 = [];
var len__36491__auto___93157 = arguments.length;
var i__36492__auto___93158 = (0);
while(true){
if((i__36492__auto___93158 < len__36491__auto___93157)){
args93154.push((arguments[i__36492__auto___93158]));

var G__93159 = (i__36492__auto___93158 + (1));
i__36492__auto___93158 = G__93159;
continue;
} else {
}
break;
}

var G__93156 = args93154.length;
switch (G__93156) {
case 1:
return dynomics.space.ui.convert_coords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.ui.convert_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args93154.length)].join('')));

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
var args93161 = [];
var len__36491__auto___93178 = arguments.length;
var i__36492__auto___93179 = (0);
while(true){
if((i__36492__auto___93179 < len__36491__auto___93178)){
args93161.push((arguments[i__36492__auto___93179]));

var G__93180 = (i__36492__auto___93179 + (1));
i__36492__auto___93179 = G__93180;
continue;
} else {
}
break;
}

var G__93163 = args93161.length;
switch (G__93163) {
case 0:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args93161.length)].join('')));

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
var seq__93164_93182 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni1.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
)),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni2.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
))));
var chunk__93165_93183 = null;
var count__93166_93184 = (0);
var i__93167_93185 = (0);
while(true){
if((i__93167_93185 < count__93166_93184)){
var vec__93168_93186 = cljs.core._nth.call(null,chunk__93165_93183,i__93167_93185);
var i_93187 = cljs.core.nth.call(null,vec__93168_93186,(0),null);
var j_93188 = cljs.core.nth.call(null,vec__93168_93186,(1),null);
j_93188.removeAttribute("id");

j_93188.removeAttribute("class");

j_93188.removeAttribute("data-reactid");

var ccss_93189__$1 = window.getComputedStyle(i_93187);
var seq__93169_93190 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_93189__$1.length));
var chunk__93170_93191 = null;
var count__93171_93192 = (0);
var i__93172_93193 = (0);
while(true){
if((i__93172_93193 < count__93171_93192)){
var is_93194 = cljs.core._nth.call(null,chunk__93170_93191,i__93172_93193);
var p_93195 = ccss_93189__$1.item(is_93194);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_93195)))){
j_93188.style.setProperty(p_93195,ccss_93189__$1.getPropertyValue(p_93195));
} else {
}

var G__93196 = seq__93169_93190;
var G__93197 = chunk__93170_93191;
var G__93198 = count__93171_93192;
var G__93199 = (i__93172_93193 + (1));
seq__93169_93190 = G__93196;
chunk__93170_93191 = G__93197;
count__93171_93192 = G__93198;
i__93172_93193 = G__93199;
continue;
} else {
var temp__4657__auto___93200 = cljs.core.seq.call(null,seq__93169_93190);
if(temp__4657__auto___93200){
var seq__93169_93201__$1 = temp__4657__auto___93200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__93169_93201__$1)){
var c__36233__auto___93202 = cljs.core.chunk_first.call(null,seq__93169_93201__$1);
var G__93203 = cljs.core.chunk_rest.call(null,seq__93169_93201__$1);
var G__93204 = c__36233__auto___93202;
var G__93205 = cljs.core.count.call(null,c__36233__auto___93202);
var G__93206 = (0);
seq__93169_93190 = G__93203;
chunk__93170_93191 = G__93204;
count__93171_93192 = G__93205;
i__93172_93193 = G__93206;
continue;
} else {
var is_93207 = cljs.core.first.call(null,seq__93169_93201__$1);
var p_93208 = ccss_93189__$1.item(is_93207);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_93208)))){
j_93188.style.setProperty(p_93208,ccss_93189__$1.getPropertyValue(p_93208));
} else {
}

var G__93209 = cljs.core.next.call(null,seq__93169_93201__$1);
var G__93210 = null;
var G__93211 = (0);
var G__93212 = (0);
seq__93169_93190 = G__93209;
chunk__93170_93191 = G__93210;
count__93171_93192 = G__93211;
i__93172_93193 = G__93212;
continue;
}
} else {
}
}
break;
}

var G__93213 = seq__93164_93182;
var G__93214 = chunk__93165_93183;
var G__93215 = count__93166_93184;
var G__93216 = (i__93167_93185 + (1));
seq__93164_93182 = G__93213;
chunk__93165_93183 = G__93214;
count__93166_93184 = G__93215;
i__93167_93185 = G__93216;
continue;
} else {
var temp__4657__auto___93217 = cljs.core.seq.call(null,seq__93164_93182);
if(temp__4657__auto___93217){
var seq__93164_93218__$1 = temp__4657__auto___93217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__93164_93218__$1)){
var c__36233__auto___93219 = cljs.core.chunk_first.call(null,seq__93164_93218__$1);
var G__93220 = cljs.core.chunk_rest.call(null,seq__93164_93218__$1);
var G__93221 = c__36233__auto___93219;
var G__93222 = cljs.core.count.call(null,c__36233__auto___93219);
var G__93223 = (0);
seq__93164_93182 = G__93220;
chunk__93165_93183 = G__93221;
count__93166_93184 = G__93222;
i__93167_93185 = G__93223;
continue;
} else {
var vec__93173_93224 = cljs.core.first.call(null,seq__93164_93218__$1);
var i_93225 = cljs.core.nth.call(null,vec__93173_93224,(0),null);
var j_93226 = cljs.core.nth.call(null,vec__93173_93224,(1),null);
j_93226.removeAttribute("id");

j_93226.removeAttribute("class");

j_93226.removeAttribute("data-reactid");

var ccss_93227__$1 = window.getComputedStyle(i_93225);
var seq__93174_93228 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_93227__$1.length));
var chunk__93175_93229 = null;
var count__93176_93230 = (0);
var i__93177_93231 = (0);
while(true){
if((i__93177_93231 < count__93176_93230)){
var is_93232 = cljs.core._nth.call(null,chunk__93175_93229,i__93177_93231);
var p_93233 = ccss_93227__$1.item(is_93232);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_93233)))){
j_93226.style.setProperty(p_93233,ccss_93227__$1.getPropertyValue(p_93233));
} else {
}

var G__93234 = seq__93174_93228;
var G__93235 = chunk__93175_93229;
var G__93236 = count__93176_93230;
var G__93237 = (i__93177_93231 + (1));
seq__93174_93228 = G__93234;
chunk__93175_93229 = G__93235;
count__93176_93230 = G__93236;
i__93177_93231 = G__93237;
continue;
} else {
var temp__4657__auto___93238__$1 = cljs.core.seq.call(null,seq__93174_93228);
if(temp__4657__auto___93238__$1){
var seq__93174_93239__$1 = temp__4657__auto___93238__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__93174_93239__$1)){
var c__36233__auto___93240 = cljs.core.chunk_first.call(null,seq__93174_93239__$1);
var G__93241 = cljs.core.chunk_rest.call(null,seq__93174_93239__$1);
var G__93242 = c__36233__auto___93240;
var G__93243 = cljs.core.count.call(null,c__36233__auto___93240);
var G__93244 = (0);
seq__93174_93228 = G__93241;
chunk__93175_93229 = G__93242;
count__93176_93230 = G__93243;
i__93177_93231 = G__93244;
continue;
} else {
var is_93245 = cljs.core.first.call(null,seq__93174_93239__$1);
var p_93246 = ccss_93227__$1.item(is_93245);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_93246)))){
j_93226.style.setProperty(p_93246,ccss_93227__$1.getPropertyValue(p_93246));
} else {
}

var G__93247 = cljs.core.next.call(null,seq__93174_93239__$1);
var G__93248 = null;
var G__93249 = (0);
var G__93250 = (0);
seq__93174_93228 = G__93247;
chunk__93175_93229 = G__93248;
count__93176_93230 = G__93249;
i__93177_93231 = G__93250;
continue;
}
} else {
}
}
break;
}

var G__93251 = cljs.core.next.call(null,seq__93164_93218__$1);
var G__93252 = null;
var G__93253 = (0);
var G__93254 = (0);
seq__93164_93182 = G__93251;
chunk__93165_93183 = G__93252;
count__93166_93184 = G__93253;
i__93167_93185 = G__93254;
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
cljs.core.async.put_BANG_.call(null,msgch,cljs.core.merge.call(null,s,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Keyword(null,"deltaX","deltaX",-1317913656),new cljs.core.Keyword(null,"meta-key?","meta-key?",940581001),new cljs.core.Keyword(null,"transforms","transforms",793344554),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989),new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"deltaY","deltaY",-879493966),new cljs.core.Keyword(null,"which","which",-1255268941),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword(null,"alt-key?","alt-key?",234827606),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"deltaZ","deltaZ",1656656988),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword(null,"positions","positions",-1380538434)],[e.buttons,type_key,e.button,pl,e.deltaX,e.metaKey,transforms__$1,e.ctrlKey,new cljs.core.Keyword(null,"event","event",301435442),e.deltaY,e.which,(function (){var or__35422__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return cljs.core.keyword.call(null,(function (){var or__35422__auto____$1 = e.target.id;
if(cljs.core.truth_(or__35422__auto____$1)){
return or__35422__auto____$1;
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
var vec__93257 = cljs.core.subvec.call(null,trajectory,((cljs.core.count.call(null,trajectory) - (1)) - (1)),cljs.core.count.call(null,trajectory));
var p1 = cljs.core.nth.call(null,vec__93257,(0),null);
var p2 = cljs.core.nth.call(null,vec__93257,(1),null);
var v = cljs.core.map.call(null,cljs.core._,p1,p2);
var a = (dynomics.space.core.r2d * (dynomics.space.core.PI2 - dynomics.space.core.angle.call(null,v)));
var a1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);
var a2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
var a3 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null);
var vec__93258 = cljs.core.map.call(null,cljs.core._PLUS_,p2,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,0.505),v));
var ox = cljs.core.nth.call(null,vec__93258,(0),null);
var oy = cljs.core.nth.call(null,vec__93258,(1),null);
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
}),dynomics.space.core.midpoints.call(null,trajectory),cljs.core.map.call(null,(function (p__93261){
var vec__93262 = p__93261;
var p1 = cljs.core.nth.call(null,vec__93262,(0),null);
var p2 = cljs.core.nth.call(null,vec__93262,(1),null);
return dynomics.space.core.move_along.call(null,(1),p1,p2);
}),cljs.core.partition.call(null,(2),(1),trajectory))))], null)], null),null,(cljs.core.truth_(with_arrowhead)?dynomics.space.ui.arrowhead.call(null,cljs.core.vec.call(null,trajectory)):null)], null);
});
dynomics.space.ui.get_icon_fn = (function dynomics$space$ui$get_icon_fn(type_id){
return cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(0)], null),(8),(16),0.97,(0)),cljs.core.partial.call(null,dynomics.space.core.spiral,(32),1.1,0.5),cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null),(8),(16),1.045,(0)),cljs.core.partial.call(null,dynomics.space.core.saddle_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(8),(20)),cljs.core.partial.call(null,dynomics.space.core.spiral,(32),1.1,-0.5),cljs.core.partial.call(null,dynomics.space.core.saddle_3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(8),(20)),cljs.core.partial.call(null,dynomics.space.core.saddle_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(8),(20)),cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(0)], null),(1),(32),0.97,0.42),cljs.core.partial.call(null,dynomics.space.core.saddle_5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(8),(20)),cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(0)], null),(1),(16),0.91,-0.92)]),type_id,cljs.core.partial.call(null,dynomics.space.core.spiral,(155),1.02,0.1));
});
dynomics.space.ui.make_friendly_type_icon = (function dynomics$space$ui$make_friendly_type_icon(type_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("type_icon_"),cljs.core.str(type_id)].join(''),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("type_icon "),cljs.core.str([cljs.core.str("type_icon_"),cljs.core.str(type_id)].join(''))].join(''),new cljs.core.Keyword(null,"transform","transform",1381301764),dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),0.035], null))], null),cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.ui.make_bezier_trajectory_group,true),dynomics.space.ui.get_icon_fn.call(null,type_id).call(null))], null);
});
dynomics.space.ui.get_simple_icon_fn = (function dynomics$space$ui$get_simple_icon_fn(type_id){
return cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(0)], null),(4),(3),0.6,(0),dynomics.space.core.PIb4),cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(0)], null),(4),(3),1.2,0.75),cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(0)], null),(4),(3),2.0,(0),dynomics.space.core.PIb4),cljs.core.partial.call(null,dynomics.space.core.saddle_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(4),(20)),cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(0)], null),(4),(3),1.2,-0.75),cljs.core.partial.call(null,dynomics.space.core.saddle_3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(4),(20)),cljs.core.partial.call(null,dynomics.space.core.saddle_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(4),(20)),cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(4),(3),0.8,0.75),cljs.core.partial.call(null,dynomics.space.core.saddle_5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(4),(20)),cljs.core.partial.call(null,dynomics.space.core.spiral,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),(4),(3),0.8,-0.75)]),type_id,cljs.core.partial.call(null,dynomics.space.core.spiral,(155),1.02,0.1));
});
dynomics.space.ui.make_simple_type_icon = (function dynomics$space$ui$make_simple_type_icon(type_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("type_icon_simple_"),cljs.core.str(type_id)].join(''),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("type_icon "),cljs.core.str([cljs.core.str("type_icon_"),cljs.core.str(type_id)].join(''))].join(''),new cljs.core.Keyword(null,"transform","transform",1381301764),dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),0.035], null))], null),cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.ui.make_bezier_trajectory_group,true),dynomics.space.ui.get_simple_icon_fn.call(null,type_id).call(null))], null);
});
dynomics.space.ui.make_icon_pattern = (function dynomics$space$ui$make_icon_pattern(type_id){
return React.createElement("pattern",{"id": [cljs.core.str("node_type_pattern_"),cljs.core.str(type_id)].join(''), "patternUnits": "userSpaceOnUse", "x": (0), "y": (0), "width": (1), "height": (1), "viewBox": "-1 -1 2 2"},sablono.interpreter.interpret.call(null,dynomics.space.ui.make_friendly_type_icon.call(null,type_id)));
});
dynomics.space.ui.make_prerender_icon = (function dynomics$space$ui$make_prerender_icon(kind,iconfn,width,height,id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("prerender_canvas_"),cljs.core.str(cljs.core.name.call(null,kind)),cljs.core.str("_"),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classsName","classsName",2107715185),"node_type_selector",new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("prerender_svg_box_"),cljs.core.str(cljs.core.name.call(null,kind)),cljs.core.str("_"),cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"zoomAndPan","zoomAndPan",-449580731),new cljs.core.Keyword(null,"preserveAspectRatio","preserveAspectRatio",1832131817),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"shape-rendering","shape-rendering",955846315),new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),new cljs.core.Keyword(null,"classsName","classsName",2107715185),new cljs.core.Keyword(null,"xmlns:xlink","xmlns:xlink",-316591054),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),new cljs.core.Keyword(null,"height","height",1025178622)],[false,"xMidYMin",[cljs.core.str(width),cljs.core.str("px")].join(''),"crispEdges","http://www.w3.org/2000/svg","space_svg","http://www.w3.org/1999/xlink",[cljs.core.str("prerender_svg_"),cljs.core.str(cljs.core.name.call(null,kind)),cljs.core.str("_"),cljs.core.str(id)].join(''),"-1 -1 2 2",[cljs.core.str(height),cljs.core.str("px")].join('')]),iconfn.call(null,id)], null)], null)], null);
});
dynomics.space.ui.make_paths = (function dynomics$space$ui$make_paths(p__93263){
var map__93270 = p__93263;
var map__93270__$1 = ((((!((map__93270 == null)))?((((map__93270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93270):map__93270);
var space = map__93270__$1;
var nodes = cljs.core.get.call(null,map__93270__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__93270__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var regions = cljs.core.get.call(null,map__93270__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var node_scale = cljs.core.get.call(null,map__93270__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
cljs.core.println.call(null,"Regions ",regions);

return cljs.core.map.call(null,((function (map__93270,map__93270__$1,space,nodes,edges,regions,node_scale){
return (function (region){
return cljs.core.reduce.call(null,((function (map__93270,map__93270__$1,space,nodes,edges,regions,node_scale){
return (function (beziers,connection){
return cljs.core.conj.call(null,beziers,cljs.core.map.call(null,((function (map__93270,map__93270__$1,space,nodes,edges,regions,node_scale){
return (function (p__93272){
var vec__93273 = p__93272;
var nid1 = cljs.core.nth.call(null,vec__93273,(0),null);
var cid1 = cljs.core.nth.call(null,vec__93273,(1),null);
var vec__93274 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx1 = cljs.core.nth.call(null,vec__93274,(0),null);
var ny1 = cljs.core.nth.call(null,vec__93274,(1),null);
var vec__93275 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx1 = cljs.core.nth.call(null,vec__93275,(0),null);
var cy1 = cljs.core.nth.call(null,vec__93275,(1),null);
return dynomics.ui.svg.make_bezier_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx1 + (node_scale * cx1)),(ny1 + (node_scale * cy1))], null)], null));
});})(map__93270,map__93270__$1,space,nodes,edges,regions,node_scale))
,cljs.core.map.call(null,dynomics.space.core.simplify_connection,connection)));
});})(map__93270,map__93270__$1,space,nodes,edges,regions,node_scale))
,cljs.core.PersistentVector.EMPTY,region);
});})(map__93270,map__93270__$1,space,nodes,edges,regions,node_scale))
,regions);
});
/**
 * Returns a palette of tools
 */
dynomics.space.ui.make_tools_palette_component = (function dynomics$space$ui$make_tools_palette_component(p__93276){
var map__93283 = p__93276;
var map__93283__$1 = ((((!((map__93283 == null)))?((((map__93283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93283):map__93283);
var state = map__93283__$1;
var current_tool = cljs.core.get.call(null,map__93283__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
var tools = cljs.core.get.call(null,map__93283__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
var tools_order = cljs.core.get.call(null,map__93283__$1,new cljs.core.Keyword(null,"tools-order","tools-order",-615877648));
var state_updates = cljs.core.get.call(null,map__93283__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
return om.dom.div.call(null,{"className": "tool_things"},om.dom.div.call(null,{"className": "tool_selectors"},cljs.core.map.call(null,((function (map__93283,map__93283__$1,state,current_tool,tools,tools_order,state_updates){
return (function (p__93285){
var vec__93286 = p__93285;
var tk = cljs.core.nth.call(null,vec__93286,(0),null);
var map__93287 = cljs.core.nth.call(null,vec__93286,(1),null);
var map__93287__$1 = ((((!((map__93287 == null)))?((((map__93287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93287):map__93287);
var description = cljs.core.get.call(null,map__93287__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var icon = cljs.core.get.call(null,map__93287__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var keybinding = cljs.core.get.call(null,map__93287__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
return om.dom.div.call(null,{"className": [cljs.core.str("tool_selector "),cljs.core.str(((cljs.core._EQ_.call(null,tk,current_tool))?"tool_selected":null))].join(''), "title": [cljs.core.str(description),cljs.core.str(" ( "),cljs.core.str((((keybinding instanceof cljs.core.Keyword))?cljs.core.name.call(null,keybinding):keybinding)),cljs.core.str(" )")].join(''), "onMouseDown": ((function (vec__93286,tk,map__93287,map__93287__$1,description,icon,keybinding,map__93283,map__93283__$1,state,current_tool,tools,tools_order,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__93286,tk,map__93287,map__93287__$1,description,icon,keybinding,map__93283,map__93283__$1,state,current_tool,tools,tools_order,state_updates){
return (function (s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),tk);
});})(vec__93286,tk,map__93287,map__93287__$1,description,icon,keybinding,map__93283,map__93283__$1,state,current_tool,tools,tools_order,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tool","tool",-1298696470),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null));

return null;
});})(vec__93286,tk,map__93287,map__93287__$1,description,icon,keybinding,map__93283,map__93283__$1,state,current_tool,tools,tools_order,state_updates))
},icon);
});})(map__93283,map__93283__$1,state,current_tool,tools,tools_order,state_updates))
,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,tools),tools_order))),om.dom.div.call(null,{"className": "current_tool_text", "title": cljs.core.get_in.call(null,tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tool,new cljs.core.Keyword(null,"description","description",-1428560544)], null))},cljs.core.get_in.call(null,tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tool,new cljs.core.Keyword(null,"name","name",1843675177)], null))));
});
dynomics.space.ui.make_node_types_cached_component = (function dynomics$space$ui$make_node_types_cached_component(kind,render_fn){

return (function (p__93295,owner){
var map__93296 = p__93295;
var map__93296__$1 = ((((!((map__93296 == null)))?((((map__93296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93296):map__93296);
var id = cljs.core.get.call(null,map__93296__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var state_updates = cljs.core.get.call(null,map__93296__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var icon = cljs.core.get.call(null,map__93296__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
if(typeof dynomics.space.ui.t_dynomics$space$ui93298 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui93298 = (function (make_node_types_cached_component,kind,render_fn,p__93295,owner,map__93296,id,state_updates,icon,meta93299){
this.make_node_types_cached_component = make_node_types_cached_component;
this.kind = kind;
this.render_fn = render_fn;
this.p__93295 = p__93295;
this.owner = owner;
this.map__93296 = map__93296;
this.id = id;
this.state_updates = state_updates;
this.icon = icon;
this.meta93299 = meta93299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui93298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__93296,map__93296__$1,id,state_updates,icon){
return (function (_93300,meta93299__$1){
var self__ = this;
var _93300__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui93298(self__.make_node_types_cached_component,self__.kind,self__.render_fn,self__.p__93295,self__.owner,self__.map__93296,self__.id,self__.state_updates,self__.icon,meta93299__$1));
});})(map__93296,map__93296__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui93298.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__93296,map__93296__$1,id,state_updates,icon){
return (function (_93300){
var self__ = this;
var _93300__$1 = this;
return self__.meta93299;
});})(map__93296,map__93296__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui93298.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui93298.prototype.om$core$IRender$render$arity$1 = ((function (map__93296,map__93296__$1,id,state_updates,icon){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.icon)){
return om.dom.img.call(null,{"width": (32), "height": (32), "src": self__.icon, "draggable": false});
} else {
return sablono.interpreter.interpret.call(null,self__.render_fn.call(null,self__.id));
}
});})(map__93296,map__93296__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui93298.prototype.om$core$IDidMount$ = true;

dynomics.space.ui.t_dynomics$space$ui93298.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__93296,map__93296__$1,id,state_updates,icon){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,self__.icon)){
var dataurl = dynomics.space.ui.render_to_image.call(null,self__.kind,self__.id);
return cljs.core.async.put_BANG_.call(null,self__.state_updates,((function (dataurl,___$1,map__93296,map__93296__$1,id,state_updates,icon){
return (function (s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (dataurl,___$1,map__93296,map__93296__$1,id,state_updates,icon){
return (function (s__$1){
return cljs.core.assoc_in.call(null,s__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"icons","icons",-297140977),self__.kind,self__.id], null),dataurl);
});})(dataurl,___$1,map__93296,map__93296__$1,id,state_updates,icon))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"make","make",-1284043325),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null);
});})(dataurl,___$1,map__93296,map__93296__$1,id,state_updates,icon))
);
} else {
return null;
}
});})(map__93296,map__93296__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui93298.getBasis = ((function (map__93296,map__93296__$1,id,state_updates,icon){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-cached-component","make-node-types-cached-component",-655003199,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"render-fn","render-fn",2039328045,null)], null)))], null)),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"render-fn","render-fn",2039328045,null),new cljs.core.Symbol(null,"p__93295","p__93295",-391673108,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__93296","map__93296",564893101,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"icon","icon",-974829228,null),new cljs.core.Symbol(null,"meta93299","meta93299",-99260954,null)], null);
});})(map__93296,map__93296__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui93298.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui93298.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui93298";

dynomics.space.ui.t_dynomics$space$ui93298.cljs$lang$ctorPrWriter = ((function (map__93296,map__93296__$1,id,state_updates,icon){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"dynomics.space.ui/t_dynomics$space$ui93298");
});})(map__93296,map__93296__$1,id,state_updates,icon))
;

dynomics.space.ui.__GT_t_dynomics$space$ui93298 = ((function (map__93296,map__93296__$1,id,state_updates,icon){
return (function dynomics$space$ui$make_node_types_cached_component_$___GT_t_dynomics$space$ui93298(make_node_types_cached_component__$1,kind__$1,render_fn__$1,p__93295__$1,owner__$1,map__93296__$2,id__$1,state_updates__$1,icon__$1,meta93299){
return (new dynomics.space.ui.t_dynomics$space$ui93298(make_node_types_cached_component__$1,kind__$1,render_fn__$1,p__93295__$1,owner__$1,map__93296__$2,id__$1,state_updates__$1,icon__$1,meta93299));
});})(map__93296,map__93296__$1,id,state_updates,icon))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui93298(dynomics$space$ui$make_node_types_cached_component,kind,render_fn,p__93295,owner,map__93296__$1,id,state_updates,icon,cljs.core.PersistentArrayMap.EMPTY));
});
});
dynomics.space.ui.make_node_types_cached_image_component = (function dynomics$space$ui$make_node_types_cached_image_component(kind,render_fn){

return (function (p__93307,owner){
var map__93308 = p__93307;
var map__93308__$1 = ((((!((map__93308 == null)))?((((map__93308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93308):map__93308);
var id = cljs.core.get.call(null,map__93308__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var state_updates = cljs.core.get.call(null,map__93308__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var icon = cljs.core.get.call(null,map__93308__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
if(typeof dynomics.space.ui.t_dynomics$space$ui93310 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui93310 = (function (make_node_types_cached_image_component,kind,render_fn,p__93307,owner,map__93308,id,state_updates,icon,meta93311){
this.make_node_types_cached_image_component = make_node_types_cached_image_component;
this.kind = kind;
this.render_fn = render_fn;
this.p__93307 = p__93307;
this.owner = owner;
this.map__93308 = map__93308;
this.id = id;
this.state_updates = state_updates;
this.icon = icon;
this.meta93311 = meta93311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui93310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__93308,map__93308__$1,id,state_updates,icon){
return (function (_93312,meta93311__$1){
var self__ = this;
var _93312__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui93310(self__.make_node_types_cached_image_component,self__.kind,self__.render_fn,self__.p__93307,self__.owner,self__.map__93308,self__.id,self__.state_updates,self__.icon,meta93311__$1));
});})(map__93308,map__93308__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui93310.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__93308,map__93308__$1,id,state_updates,icon){
return (function (_93312){
var self__ = this;
var _93312__$1 = this;
return self__.meta93311;
});})(map__93308,map__93308__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui93310.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui93310.prototype.om$core$IRender$render$arity$1 = ((function (map__93308,map__93308__$1,id,state_updates,icon){
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
});})(map__93308,map__93308__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui93310.prototype.om$core$IDidMount$ = true;

dynomics.space.ui.t_dynomics$space$ui93310.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__93308,map__93308__$1,id,state_updates,icon){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,self__.icon)){
var dataurl = dynomics.space.ui.render_to_image.call(null,self__.kind,self__.id);
return cljs.core.async.put_BANG_.call(null,self__.state_updates,((function (dataurl,this$__$1,map__93308,map__93308__$1,id,state_updates,icon){
return (function (s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (dataurl,this$__$1,map__93308,map__93308__$1,id,state_updates,icon){
return (function (s__$1){
return cljs.core.assoc_in.call(null,s__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"icons","icons",-297140977),self__.kind,self__.id], null),dataurl);
});})(dataurl,this$__$1,map__93308,map__93308__$1,id,state_updates,icon))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"make","make",-1284043325),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null);
});})(dataurl,this$__$1,map__93308,map__93308__$1,id,state_updates,icon))
);
} else {
return null;
}
});})(map__93308,map__93308__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui93310.getBasis = ((function (map__93308,map__93308__$1,id,state_updates,icon){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-cached-image-component","make-node-types-cached-image-component",-1391243851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"render-fn","render-fn",2039328045,null)], null)))], null)),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"render-fn","render-fn",2039328045,null),new cljs.core.Symbol(null,"p__93307","p__93307",1148218901,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__93308","map__93308",2118381001,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"icon","icon",-974829228,null),new cljs.core.Symbol(null,"meta93311","meta93311",-2131260598,null)], null);
});})(map__93308,map__93308__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui93310.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui93310.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui93310";

dynomics.space.ui.t_dynomics$space$ui93310.cljs$lang$ctorPrWriter = ((function (map__93308,map__93308__$1,id,state_updates,icon){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"dynomics.space.ui/t_dynomics$space$ui93310");
});})(map__93308,map__93308__$1,id,state_updates,icon))
;

dynomics.space.ui.__GT_t_dynomics$space$ui93310 = ((function (map__93308,map__93308__$1,id,state_updates,icon){
return (function dynomics$space$ui$make_node_types_cached_image_component_$___GT_t_dynomics$space$ui93310(make_node_types_cached_image_component__$1,kind__$1,render_fn__$1,p__93307__$1,owner__$1,map__93308__$2,id__$1,state_updates__$1,icon__$1,meta93311){
return (new dynomics.space.ui.t_dynomics$space$ui93310(make_node_types_cached_image_component__$1,kind__$1,render_fn__$1,p__93307__$1,owner__$1,map__93308__$2,id__$1,state_updates__$1,icon__$1,meta93311));
});})(map__93308,map__93308__$1,id,state_updates,icon))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui93310(dynomics$space$ui$make_node_types_cached_image_component,kind,render_fn,p__93307,owner,map__93308__$1,id,state_updates,icon,cljs.core.PersistentArrayMap.EMPTY));
});
});
dynomics.space.ui.renderfn = (function dynomics$space$ui$renderfn(kind){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"friendly","friendly",281770577),cljs.core.partial.call(null,dynomics.space.ui.make_prerender_icon,kind,dynomics.space.ui.make_friendly_type_icon,(256),(256)),new cljs.core.Keyword(null,"simple","simple",-581868663),cljs.core.partial.call(null,dynomics.space.ui.make_prerender_icon,kind,dynomics.space.ui.make_simple_type_icon,(256),(256))], null).call(null,kind);
});
dynomics.space.ui.make_node_types_palette_component = (function dynomics$space$ui$make_node_types_palette_component(kind){

return (function (p__93322){
var map__93323 = p__93322;
var map__93323__$1 = ((((!((map__93323 == null)))?((((map__93323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93323):map__93323);
var state = map__93323__$1;
var component = cljs.core.get.call(null,map__93323__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var state_updates = cljs.core.get.call(null,map__93323__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__93323__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var icons = cljs.core.get.call(null,map__93323__$1,new cljs.core.Keyword(null,"icons","icons",-297140977));
if(typeof dynomics.space.ui.t_dynomics$space$ui93325 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui93325 = (function (make_node_types_palette_component,kind,p__93322,map__93323,state,component,state_updates,msgs,icons,meta93326){
this.make_node_types_palette_component = make_node_types_palette_component;
this.kind = kind;
this.p__93322 = p__93322;
this.map__93323 = map__93323;
this.state = state;
this.component = component;
this.state_updates = state_updates;
this.msgs = msgs;
this.icons = icons;
this.meta93326 = meta93326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui93325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__93323,map__93323__$1,state,component,state_updates,msgs,icons){
return (function (_93327,meta93326__$1){
var self__ = this;
var _93327__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui93325(self__.make_node_types_palette_component,self__.kind,self__.p__93322,self__.map__93323,self__.state,self__.component,self__.state_updates,self__.msgs,self__.icons,meta93326__$1));
});})(map__93323,map__93323__$1,state,component,state_updates,msgs,icons))
;

dynomics.space.ui.t_dynomics$space$ui93325.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__93323,map__93323__$1,state,component,state_updates,msgs,icons){
return (function (_93327){
var self__ = this;
var _93327__$1 = this;
return self__.meta93326;
});})(map__93323,map__93323__$1,state,component,state_updates,msgs,icons))
;

dynomics.space.ui.t_dynomics$space$ui93325.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui93325.prototype.om$core$IRender$render$arity$1 = ((function (map__93323,map__93323__$1,state,component,state_updates,msgs,icons){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"className": [cljs.core.str("node_types")].join('')},cljs.core.map.call(null,((function (this$__$1,map__93323,map__93323__$1,state,component,state_updates,msgs,icons){
return (function (p__93328){
var map__93329 = p__93328;
var map__93329__$1 = ((((!((map__93329 == null)))?((((map__93329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93329):map__93329);
var id = cljs.core.get.call(null,map__93329__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var stability = cljs.core.get.call(null,map__93329__$1,new cljs.core.Keyword(null,"stability","stability",1733225509));
var type = cljs.core.get.call(null,map__93329__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return om.dom.div.call(null,{"className": [cljs.core.str("node_type_selector")].join(''), "title": [cljs.core.str("Set selected nodes to "),cljs.core.str(id),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,stability)),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,type))].join(''), "draggable": false, "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)), "onMouseMove": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null))},om.core.build.call(null,dynomics.space.ui.make_node_types_cached_component.call(null,self__.kind,dynomics.space.ui.renderfn.call(null,self__.kind)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("ntp"),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),cljs.core.get_in.call(null,self__.icons,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.kind,id], null)),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),self__.state_updates], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
});})(this$__$1,map__93323,map__93323__$1,state,component,state_updates,msgs,icons))
,cljs.core.vals.call(null,dynomics.space.core.node_types)));
});})(map__93323,map__93323__$1,state,component,state_updates,msgs,icons))
;

dynomics.space.ui.t_dynomics$space$ui93325.getBasis = ((function (map__93323,map__93323__$1,state,component,state_updates,msgs,icons){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-palette-component","make-node-types-palette-component",54407202,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kind","kind",923265724,null)], null)))], null)),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"p__93322","p__93322",192082336,null),new cljs.core.Symbol(null,"map__93323","map__93323",-1057839701,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"icons","icons",1343390550,null),new cljs.core.Symbol(null,"meta93326","meta93326",-584538045,null)], null);
});})(map__93323,map__93323__$1,state,component,state_updates,msgs,icons))
;

dynomics.space.ui.t_dynomics$space$ui93325.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui93325.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui93325";

dynomics.space.ui.t_dynomics$space$ui93325.cljs$lang$ctorPrWriter = ((function (map__93323,map__93323__$1,state,component,state_updates,msgs,icons){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"dynomics.space.ui/t_dynomics$space$ui93325");
});})(map__93323,map__93323__$1,state,component,state_updates,msgs,icons))
;

dynomics.space.ui.__GT_t_dynomics$space$ui93325 = ((function (map__93323,map__93323__$1,state,component,state_updates,msgs,icons){
return (function dynomics$space$ui$make_node_types_palette_component_$___GT_t_dynomics$space$ui93325(make_node_types_palette_component__$1,kind__$1,p__93322__$1,map__93323__$2,state__$1,component__$1,state_updates__$1,msgs__$1,icons__$1,meta93326){
return (new dynomics.space.ui.t_dynomics$space$ui93325(make_node_types_palette_component__$1,kind__$1,p__93322__$1,map__93323__$2,state__$1,component__$1,state_updates__$1,msgs__$1,icons__$1,meta93326));
});})(map__93323,map__93323__$1,state,component,state_updates,msgs,icons))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui93325(dynomics$space$ui$make_node_types_palette_component,kind,p__93322,map__93323__$1,state,component,state_updates,msgs,icons,cljs.core.PersistentArrayMap.EMPTY));
});
});
/**
 * Returns a component for an edge
 */
dynomics.space.ui.make_edge_component = (function dynomics$space$ui$make_edge_component(p__93331){
var map__93343 = p__93331;
var map__93343__$1 = ((((!((map__93343 == null)))?((((map__93343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93343):map__93343);
var vec__93344 = cljs.core.get.call(null,map__93343__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__93345 = cljs.core.nth.call(null,vec__93344,(0),null);
var nid1 = cljs.core.nth.call(null,vec__93345,(0),null);
var nid2 = cljs.core.nth.call(null,vec__93345,(1),null);
var vec__93346 = cljs.core.nth.call(null,vec__93344,(1),null);
var nx1 = cljs.core.nth.call(null,vec__93346,(0),null);
var ny1 = cljs.core.nth.call(null,vec__93346,(1),null);
var vec__93347 = cljs.core.nth.call(null,vec__93344,(2),null);
var nx2 = cljs.core.nth.call(null,vec__93347,(0),null);
var ny2 = cljs.core.nth.call(null,vec__93347,(1),null);
var vec__93348 = cljs.core.nth.call(null,vec__93344,(3),null);
var cx1 = cljs.core.nth.call(null,vec__93348,(0),null);
var cx2 = cljs.core.nth.call(null,vec__93348,(1),null);
var vec__93349 = cljs.core.nth.call(null,vec__93344,(4),null);
var cy1 = cljs.core.nth.call(null,vec__93349,(0),null);
var cy2 = cljs.core.nth.call(null,vec__93349,(1),null);
var compatible_QMARK_ = cljs.core.get.call(null,map__93343__$1,new cljs.core.Keyword(null,"compatible?","compatible?",923422575));
var node_scale = cljs.core.get.call(null,map__93343__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
if(typeof dynomics.space.ui.t_dynomics$space$ui93351 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui93351 = (function (nx1,vec__93345,map__93343,cx1,ny2,vec__93347,make_edge_component,cy2,nx2,p__93331,cy1,node_scale,ny1,cx2,vec__93344,vec__93346,compatible_QMARK_,vec__93348,nid2,nid1,vec__93349,meta93352){
this.nx1 = nx1;
this.vec__93345 = vec__93345;
this.map__93343 = map__93343;
this.cx1 = cx1;
this.ny2 = ny2;
this.vec__93347 = vec__93347;
this.make_edge_component = make_edge_component;
this.cy2 = cy2;
this.nx2 = nx2;
this.p__93331 = p__93331;
this.cy1 = cy1;
this.node_scale = node_scale;
this.ny1 = ny1;
this.cx2 = cx2;
this.vec__93344 = vec__93344;
this.vec__93346 = vec__93346;
this.compatible_QMARK_ = compatible_QMARK_;
this.vec__93348 = vec__93348;
this.nid2 = nid2;
this.nid1 = nid1;
this.vec__93349 = vec__93349;
this.meta93352 = meta93352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui93351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__93343,map__93343__$1,vec__93344,vec__93345,nid1,nid2,vec__93346,nx1,ny1,vec__93347,nx2,ny2,vec__93348,cx1,cx2,vec__93349,cy1,cy2,compatible_QMARK_,node_scale){
return (function (_93353,meta93352__$1){
var self__ = this;
var _93353__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui93351(self__.nx1,self__.vec__93345,self__.map__93343,self__.cx1,self__.ny2,self__.vec__93347,self__.make_edge_component,self__.cy2,self__.nx2,self__.p__93331,self__.cy1,self__.node_scale,self__.ny1,self__.cx2,self__.vec__93344,self__.vec__93346,self__.compatible_QMARK_,self__.vec__93348,self__.nid2,self__.nid1,self__.vec__93349,meta93352__$1));
});})(map__93343,map__93343__$1,vec__93344,vec__93345,nid1,nid2,vec__93346,nx1,ny1,vec__93347,nx2,ny2,vec__93348,cx1,cx2,vec__93349,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui93351.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__93343,map__93343__$1,vec__93344,vec__93345,nid1,nid2,vec__93346,nx1,ny1,vec__93347,nx2,ny2,vec__93348,cx1,cx2,vec__93349,cy1,cy2,compatible_QMARK_,node_scale){
return (function (_93353){
var self__ = this;
var _93353__$1 = this;
return self__.meta93352;
});})(map__93343,map__93343__$1,vec__93344,vec__93345,nid1,nid2,vec__93346,nx1,ny1,vec__93347,nx2,ny2,vec__93348,cx1,cx2,vec__93349,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui93351.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui93351.prototype.om$core$IRender$render$arity$1 = ((function (map__93343,map__93343__$1,vec__93344,vec__93345,nid1,nid2,vec__93346,nx1,ny1,vec__93347,nx2,ny2,vec__93348,cx1,cx2,vec__93349,cy1,cy2,compatible_QMARK_,node_scale){
return (function (this__44714__auto__){
var self__ = this;
var this__44714__auto____$1 = this;
return om.dom.path.call(null,{"key": [cljs.core.str("edge_"),cljs.core.str(self__.nid1),cljs.core.str("_"),cljs.core.str(self__.nid2)].join(''), "className": [cljs.core.str("edge "),cljs.core.str((cljs.core.truth_(self__.compatible_QMARK_)?"compatible_edge":null))].join(''), "d": dynomics.ui.svg.to_svg_path.call(null,cljs.core.map.call(null,dynomics.ui.svg.make_bezier_point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx1,self__.ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.cx1,self__.cy1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx2,self__.ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.cx2,self__.cy2], null)], null)], null)))});
});})(map__93343,map__93343__$1,vec__93344,vec__93345,nid1,nid2,vec__93346,nx1,ny1,vec__93347,nx2,ny2,vec__93348,cx1,cx2,vec__93349,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui93351.getBasis = ((function (map__93343,map__93343__$1,vec__93344,vec__93345,nid1,nid2,vec__93346,nx1,ny1,vec__93347,nx2,ny2,vec__93348,cx1,cx2,vec__93349,cy1,cy2,compatible_QMARK_,node_scale){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"vec__93345","vec__93345",595746178,null),new cljs.core.Symbol(null,"map__93343","map__93343",1256204739,null),new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null),new cljs.core.Symbol(null,"vec__93347","vec__93347",-887001049,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-edge-component","make-edge-component",-530385559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null)], null)], null),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Symbol(null,"compatible?","compatible?",-1731013194,null),new cljs.core.Keyword(null,"compatible?","compatible?",923422575),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for an edge"], null)),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null),new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"p__93331","p__93331",-360435218,null),new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null),new cljs.core.Symbol(null,"vec__93344","vec__93344",-426056429,null),new cljs.core.Symbol(null,"vec__93346","vec__93346",1763809621,null),new cljs.core.Symbol(null,"compatible?","compatible?",-1731013194,null),new cljs.core.Symbol(null,"vec__93348","vec__93348",2045558680,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null),new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"vec__93349","vec__93349",327387999,null),new cljs.core.Symbol(null,"meta93352","meta93352",1876259012,null)], null);
});})(map__93343,map__93343__$1,vec__93344,vec__93345,nid1,nid2,vec__93346,nx1,ny1,vec__93347,nx2,ny2,vec__93348,cx1,cx2,vec__93349,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui93351.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui93351.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui93351";

dynomics.space.ui.t_dynomics$space$ui93351.cljs$lang$ctorPrWriter = ((function (map__93343,map__93343__$1,vec__93344,vec__93345,nid1,nid2,vec__93346,nx1,ny1,vec__93347,nx2,ny2,vec__93348,cx1,cx2,vec__93349,cy1,cy2,compatible_QMARK_,node_scale){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"dynomics.space.ui/t_dynomics$space$ui93351");
});})(map__93343,map__93343__$1,vec__93344,vec__93345,nid1,nid2,vec__93346,nx1,ny1,vec__93347,nx2,ny2,vec__93348,cx1,cx2,vec__93349,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.__GT_t_dynomics$space$ui93351 = ((function (map__93343,map__93343__$1,vec__93344,vec__93345,nid1,nid2,vec__93346,nx1,ny1,vec__93347,nx2,ny2,vec__93348,cx1,cx2,vec__93349,cy1,cy2,compatible_QMARK_,node_scale){
return (function dynomics$space$ui$make_edge_component_$___GT_t_dynomics$space$ui93351(nx1__$1,vec__93345__$1,map__93343__$2,cx1__$1,ny2__$1,vec__93347__$1,make_edge_component__$1,cy2__$1,nx2__$1,p__93331__$1,cy1__$1,node_scale__$1,ny1__$1,cx2__$1,vec__93344__$1,vec__93346__$1,compatible_QMARK___$1,vec__93348__$1,nid2__$1,nid1__$1,vec__93349__$1,meta93352){
return (new dynomics.space.ui.t_dynomics$space$ui93351(nx1__$1,vec__93345__$1,map__93343__$2,cx1__$1,ny2__$1,vec__93347__$1,make_edge_component__$1,cy2__$1,nx2__$1,p__93331__$1,cy1__$1,node_scale__$1,ny1__$1,cx2__$1,vec__93344__$1,vec__93346__$1,compatible_QMARK___$1,vec__93348__$1,nid2__$1,nid1__$1,vec__93349__$1,meta93352));
});})(map__93343,map__93343__$1,vec__93344,vec__93345,nid1,nid2,vec__93346,nx1,ny1,vec__93347,nx2,ny2,vec__93348,cx1,cx2,vec__93349,cy1,cy2,compatible_QMARK_,node_scale))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui93351(nx1,vec__93345,map__93343__$1,cx1,ny2,vec__93347,dynomics$space$ui$make_edge_component,cy2,nx2,p__93331,cy1,node_scale,ny1,cx2,vec__93344,vec__93346,compatible_QMARK_,vec__93348,nid2,nid1,vec__93349,null));
});
dynomics.space.ui.make_curve_component = (function dynomics$space$ui$make_curve_component(zoom,node_scale,nodes,msgs,selected_curves,p__93354){
var vec__93360 = p__93354;
var vec__93361 = cljs.core.nth.call(null,vec__93360,(0),null);
var id = cljs.core.nth.call(null,vec__93361,(0),null);
var node_cp_ids = cljs.core.nth.call(null,vec__93361,(1),null);
var curve_type = cljs.core.nth.call(null,vec__93360,(1),null);
var pth = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378),id], null);
var e = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"path","path",-188191168),pth], null);
if(typeof dynomics.space.ui.t_dynomics$space$ui93362 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui93362 = (function (p__93354,pth,curve_type,zoom,vec__93360,node_cp_ids,node_scale,selected_curves,e,make_curve_component,msgs,nodes,id,vec__93361,meta93363){
this.p__93354 = p__93354;
this.pth = pth;
this.curve_type = curve_type;
this.zoom = zoom;
this.vec__93360 = vec__93360;
this.node_cp_ids = node_cp_ids;
this.node_scale = node_scale;
this.selected_curves = selected_curves;
this.e = e;
this.make_curve_component = make_curve_component;
this.msgs = msgs;
this.nodes = nodes;
this.id = id;
this.vec__93361 = vec__93361;
this.meta93363 = meta93363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui93362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (pth,e,vec__93360,vec__93361,id,node_cp_ids,curve_type){
return (function (_93364,meta93363__$1){
var self__ = this;
var _93364__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui93362(self__.p__93354,self__.pth,self__.curve_type,self__.zoom,self__.vec__93360,self__.node_cp_ids,self__.node_scale,self__.selected_curves,self__.e,self__.make_curve_component,self__.msgs,self__.nodes,self__.id,self__.vec__93361,meta93363__$1));
});})(pth,e,vec__93360,vec__93361,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui93362.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (pth,e,vec__93360,vec__93361,id,node_cp_ids,curve_type){
return (function (_93364){
var self__ = this;
var _93364__$1 = this;
return self__.meta93363;
});})(pth,e,vec__93360,vec__93361,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui93362.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui93362.prototype.om$core$IRender$render$arity$1 = ((function (pth,e,vec__93360,vec__93361,id,node_cp_ids,curve_type){
return (function (this__44714__auto__){
var self__ = this;
var this__44714__auto____$1 = this;
return om.dom.path.call(null,{"key": [cljs.core.str("curve_"),cljs.core.str(self__.id)].join(''), "className": [cljs.core.str("curve "),cljs.core.str((cljs.core.truth_(self__.curve_type)?[cljs.core.str("curve_"),cljs.core.str(self__.curve_type)].join(''):null)),cljs.core.str((cljs.core.truth_(self__.selected_curves.call(null,self__.pth))?" selected_curve":null))].join(''), "strokeWidth": ((self__.node_scale / (5)) / self__.zoom), "onClick": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "onMouseMove": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "d": dynomics.ui.svg.to_svg_path.call(null,dynomics.ui.svg.to_beziers.call(null,cljs.core.map.call(null,self__.nodes,cljs.core.map.call(null,cljs.core.first,self__.node_cp_ids)),cljs.core.map.call(null,cljs.core.last,self__.node_cp_ids)))});
});})(pth,e,vec__93360,vec__93361,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui93362.getBasis = ((function (pth,e,vec__93360,vec__93361,id,node_cp_ids,curve_type){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__93354","p__93354",-1347858080,null),new cljs.core.Symbol(null,"pth","pth",1900111558,null),new cljs.core.Symbol(null,"curve-type","curve-type",-1863700632,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"vec__93360","vec__93360",1724664429,null),new cljs.core.Symbol(null,"node-cp-ids","node-cp-ids",296302734,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-curve-component","make-curve-component",-1782572970,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"node-cp-ids","node-cp-ids",296302734,null)], null),new cljs.core.Symbol(null,"curve-type","curve-type",-1863700632,null)], null)], null)))], null)),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"vec__93361","vec__93361",948020767,null),new cljs.core.Symbol(null,"meta93363","meta93363",-1118193209,null)], null);
});})(pth,e,vec__93360,vec__93361,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui93362.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui93362.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui93362";

dynomics.space.ui.t_dynomics$space$ui93362.cljs$lang$ctorPrWriter = ((function (pth,e,vec__93360,vec__93361,id,node_cp_ids,curve_type){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"dynomics.space.ui/t_dynomics$space$ui93362");
});})(pth,e,vec__93360,vec__93361,id,node_cp_ids,curve_type))
;

dynomics.space.ui.__GT_t_dynomics$space$ui93362 = ((function (pth,e,vec__93360,vec__93361,id,node_cp_ids,curve_type){
return (function dynomics$space$ui$make_curve_component_$___GT_t_dynomics$space$ui93362(p__93354__$1,pth__$1,curve_type__$1,zoom__$1,vec__93360__$1,node_cp_ids__$1,node_scale__$1,selected_curves__$1,e__$1,make_curve_component__$1,msgs__$1,nodes__$1,id__$1,vec__93361__$1,meta93363){
return (new dynomics.space.ui.t_dynomics$space$ui93362(p__93354__$1,pth__$1,curve_type__$1,zoom__$1,vec__93360__$1,node_cp_ids__$1,node_scale__$1,selected_curves__$1,e__$1,make_curve_component__$1,msgs__$1,nodes__$1,id__$1,vec__93361__$1,meta93363));
});})(pth,e,vec__93360,vec__93361,id,node_cp_ids,curve_type))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui93362(p__93354,pth,curve_type,zoom,vec__93360,node_cp_ids,node_scale,selected_curves,e,dynomics$space$ui$make_curve_component,msgs,nodes,id,vec__93361,null));
});
dynomics.space.ui.make_open_region_component = (function dynomics$space$ui$make_open_region_component(p__93365){
var map__93378 = p__93365;
var map__93378__$1 = ((((!((map__93378 == null)))?((((map__93378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93378):map__93378);
var node_id = cljs.core.get.call(null,map__93378__$1,new cljs.core.Keyword(null,"node-id","node-id",779482292));
var quadrant_type = cljs.core.get.call(null,map__93378__$1,new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370));
var vec__93379 = cljs.core.get.call(null,map__93378__$1,new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631));
var qx = cljs.core.nth.call(null,vec__93379,(0),null);
var qy = cljs.core.nth.call(null,vec__93379,(1),null);
var vec__93380 = cljs.core.get.call(null,map__93378__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p1 = cljs.core.nth.call(null,vec__93380,(0),null);
var p2 = cljs.core.nth.call(null,vec__93380,(1),null);
var map__93381 = cljs.core.nth.call(null,vec__93380,(2),null);
var map__93381__$1 = ((((!((map__93381 == null)))?((((map__93381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93381):map__93381);
var p3 = map__93381__$1;
var vec__93382 = cljs.core.get.call(null,map__93381__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var x = cljs.core.nth.call(null,vec__93382,(0),null);
var y = cljs.core.nth.call(null,vec__93382,(1),null);
var vec__93383 = cljs.core.get.call(null,map__93381__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__93384 = cljs.core.nth.call(null,vec__93383,(0),null);
var cx = cljs.core.nth.call(null,vec__93384,(0),null);
var cy = cljs.core.nth.call(null,vec__93384,(1),null);
var p4 = cljs.core.nth.call(null,vec__93380,(3),null);
if(typeof dynomics.space.ui.t_dynomics$space$ui93387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui93387 = (function (vec__93382,vec__93379,x,vec__93383,y,p2,p4,p3,qx,vec__93380,vec__93384,map__93378,p__93365,map__93381,qy,p1,make_open_region_component,cx,cy,node_id,quadrant_type,meta93388){
this.vec__93382 = vec__93382;
this.vec__93379 = vec__93379;
this.x = x;
this.vec__93383 = vec__93383;
this.y = y;
this.p2 = p2;
this.p4 = p4;
this.p3 = p3;
this.qx = qx;
this.vec__93380 = vec__93380;
this.vec__93384 = vec__93384;
this.map__93378 = map__93378;
this.p__93365 = p__93365;
this.map__93381 = map__93381;
this.qy = qy;
this.p1 = p1;
this.make_open_region_component = make_open_region_component;
this.cx = cx;
this.cy = cy;
this.node_id = node_id;
this.quadrant_type = quadrant_type;
this.meta93388 = meta93388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui93387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__93378,map__93378__$1,node_id,quadrant_type,vec__93379,qx,qy,vec__93380,p1,p2,map__93381,map__93381__$1,p3,vec__93382,x,y,vec__93383,vec__93384,cx,cy,p4){
return (function (_93389,meta93388__$1){
var self__ = this;
var _93389__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui93387(self__.vec__93382,self__.vec__93379,self__.x,self__.vec__93383,self__.y,self__.p2,self__.p4,self__.p3,self__.qx,self__.vec__93380,self__.vec__93384,self__.map__93378,self__.p__93365,self__.map__93381,self__.qy,self__.p1,self__.make_open_region_component,self__.cx,self__.cy,self__.node_id,self__.quadrant_type,meta93388__$1));
});})(map__93378,map__93378__$1,node_id,quadrant_type,vec__93379,qx,qy,vec__93380,p1,p2,map__93381,map__93381__$1,p3,vec__93382,x,y,vec__93383,vec__93384,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui93387.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__93378,map__93378__$1,node_id,quadrant_type,vec__93379,qx,qy,vec__93380,p1,p2,map__93381,map__93381__$1,p3,vec__93382,x,y,vec__93383,vec__93384,cx,cy,p4){
return (function (_93389){
var self__ = this;
var _93389__$1 = this;
return self__.meta93388;
});})(map__93378,map__93378__$1,node_id,quadrant_type,vec__93379,qx,qy,vec__93380,p1,p2,map__93381,map__93381__$1,p3,vec__93382,x,y,vec__93383,vec__93384,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui93387.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui93387.prototype.om$core$IRender$render$arity$1 = ((function (map__93378,map__93378__$1,node_id,quadrant_type,vec__93379,qx,qy,vec__93380,p1,p2,map__93381,map__93381__$1,p3,vec__93382,x,y,vec__93383,vec__93384,cx,cy,p4){
return (function (this__44714__auto__){
var self__ = this;
var this__44714__auto____$1 = this;
return om.dom.g.call(null,{},om.dom.defs.call(null,{},om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(self__.node_id),cljs.core.str("_"),cljs.core.str(self__.quadrant_type)].join(''), "gradientUnits": "userSpaceOnUse", "cx": self__.x, "cy": self__.y, "r": 0.04},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,self__.quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,self__.quadrant_type), "stopOpacity": "0"}))),om.dom.path.call(null,{"className": [cljs.core.str("dopen_region "),cljs.core.str([cljs.core.str("dopen_region_type_"),cljs.core.str(self__.quadrant_type)].join(''))].join(''), "fill": [cljs.core.str("url(#"),cljs.core.str([cljs.core.str("qg_"),cljs.core.str(self__.node_id),cljs.core.str("_"),cljs.core.str(self__.quadrant_type)].join('')),cljs.core.str(")")].join(''), "d": [cljs.core.str(dynomics.ui.svg.to_svg_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p1,self__.p2], null))),cljs.core.str(dynomics.ui.svg.to_svg_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,self__.p3,new cljs.core.Keyword(null,"ml","ml",1909675057),"L"),self__.p4], null))),cljs.core.str("z")].join('')}));
});})(map__93378,map__93378__$1,node_id,quadrant_type,vec__93379,qx,qy,vec__93380,p1,p2,map__93381,map__93381__$1,p3,vec__93382,x,y,vec__93383,vec__93384,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui93387.getBasis = ((function (map__93378,map__93378__$1,node_id,quadrant_type,vec__93379,qx,qy,vec__93380,p1,p2,map__93381,map__93381__$1,p3,vec__93382,x,y,vec__93383,vec__93384,cx,cy,p4){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec__93382","vec__93382",-69093856,null),new cljs.core.Symbol(null,"vec__93379","vec__93379",1074610976,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"vec__93383","vec__93383",-1344682812,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null),new cljs.core.Symbol(null,"p4","p4",550404713,null),new cljs.core.Symbol(null,"p3","p3",-923395030,null),new cljs.core.Symbol(null,"qx","qx",876946123,null),new cljs.core.Symbol(null,"vec__93380","vec__93380",1750350603,null),new cljs.core.Symbol(null,"vec__93384","vec__93384",804536078,null),new cljs.core.Symbol(null,"map__93378","map__93378",-834718833,null),new cljs.core.Symbol(null,"p__93365","p__93365",-1849880625,null),new cljs.core.Symbol(null,"map__93381","map__93381",-713187183,null),new cljs.core.Symbol(null,"qy","qy",1271868883,null),new cljs.core.Symbol(null,"p1","p1",703771573,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-open-region-component","make-open-region-component",530106712,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Keyword(null,"node-id","node-id",779482292),new cljs.core.Symbol(null,"quadrant-type","quadrant-type",333980157,null),new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"qx","qx",876946123,null),new cljs.core.Symbol(null,"qy","qy",1271868883,null)], null),new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"cy","cy",-1899104709,null)], null)], null),new cljs.core.Keyword(null,"control-points","control-points",-238538325),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"p3","p3",-923395030,null)], true, false),new cljs.core.Symbol(null,"p4","p4",550404713,null)], null),new cljs.core.Keyword(null,"points","points",-1486596883)], true, false)], null)))], null)),new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"cy","cy",-1899104709,null),new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Symbol(null,"quadrant-type","quadrant-type",333980157,null),new cljs.core.Symbol(null,"meta93388","meta93388",-2081838743,null)], null);
});})(map__93378,map__93378__$1,node_id,quadrant_type,vec__93379,qx,qy,vec__93380,p1,p2,map__93381,map__93381__$1,p3,vec__93382,x,y,vec__93383,vec__93384,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui93387.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui93387.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui93387";

dynomics.space.ui.t_dynomics$space$ui93387.cljs$lang$ctorPrWriter = ((function (map__93378,map__93378__$1,node_id,quadrant_type,vec__93379,qx,qy,vec__93380,p1,p2,map__93381,map__93381__$1,p3,vec__93382,x,y,vec__93383,vec__93384,cx,cy,p4){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"dynomics.space.ui/t_dynomics$space$ui93387");
});})(map__93378,map__93378__$1,node_id,quadrant_type,vec__93379,qx,qy,vec__93380,p1,p2,map__93381,map__93381__$1,p3,vec__93382,x,y,vec__93383,vec__93384,cx,cy,p4))
;

dynomics.space.ui.__GT_t_dynomics$space$ui93387 = ((function (map__93378,map__93378__$1,node_id,quadrant_type,vec__93379,qx,qy,vec__93380,p1,p2,map__93381,map__93381__$1,p3,vec__93382,x,y,vec__93383,vec__93384,cx,cy,p4){
return (function dynomics$space$ui$make_open_region_component_$___GT_t_dynomics$space$ui93387(vec__93382__$1,vec__93379__$1,x__$1,vec__93383__$1,y__$1,p2__$1,p4__$1,p3__$1,qx__$1,vec__93380__$1,vec__93384__$1,map__93378__$2,p__93365__$1,map__93381__$2,qy__$1,p1__$1,make_open_region_component__$1,cx__$1,cy__$1,node_id__$1,quadrant_type__$1,meta93388){
return (new dynomics.space.ui.t_dynomics$space$ui93387(vec__93382__$1,vec__93379__$1,x__$1,vec__93383__$1,y__$1,p2__$1,p4__$1,p3__$1,qx__$1,vec__93380__$1,vec__93384__$1,map__93378__$2,p__93365__$1,map__93381__$2,qy__$1,p1__$1,make_open_region_component__$1,cx__$1,cy__$1,node_id__$1,quadrant_type__$1,meta93388));
});})(map__93378,map__93378__$1,node_id,quadrant_type,vec__93379,qx,qy,vec__93380,p1,p2,map__93381,map__93381__$1,p3,vec__93382,x,y,vec__93383,vec__93384,cx,cy,p4))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui93387(vec__93382,vec__93379,x,vec__93383,y,p2,p4,p3,qx,vec__93380,vec__93384,map__93378__$1,p__93365,map__93381__$1,qy,p1,dynomics$space$ui$make_open_region_component,cx,cy,node_id,quadrant_type,null));
});
/**
 * Returns a component for a node and its connections
 */
dynomics.space.ui.make_node_component = (function dynomics$space$ui$make_node_component(p__93390){
var map__93409 = p__93390;
var map__93409__$1 = ((((!((map__93409 == null)))?((((map__93409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93409):map__93409);
var map__93410 = cljs.core.get.call(null,map__93409__$1,new cljs.core.Keyword(null,"node","node",581201198));
var map__93410__$1 = ((((!((map__93410 == null)))?((((map__93410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93410):map__93410);
var node = map__93410__$1;
var vec__93411 = cljs.core.get.call(null,map__93410__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__93411,(0),null);
var y = cljs.core.nth.call(null,vec__93411,(1),null);
var t = cljs.core.get.call(null,map__93410__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var node_type = cljs.core.get.call(null,map__93410__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var id = cljs.core.get.call(null,map__93410__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var connections = cljs.core.get.call(null,map__93410__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var selected_nodes = cljs.core.get.call(null,map__93409__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var active_nodes = cljs.core.get.call(null,map__93409__$1,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891));
var show = cljs.core.get.call(null,map__93409__$1,new cljs.core.Keyword(null,"show","show",-576705889));
var state_updates = cljs.core.get.call(null,map__93409__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var zoom = cljs.core.get.call(null,map__93409__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var node_scale = cljs.core.get.call(null,map__93409__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var icons = cljs.core.get.call(null,map__93409__$1,new cljs.core.Keyword(null,"icons","icons",-297140977));
var msgs = cljs.core.get.call(null,map__93409__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var pth = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id], null);
if(typeof dynomics.space.ui.t_dynomics$space$ui93414 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui93414 = (function (t,connections,x,selected_nodes,active_nodes,show,pth,y,state_updates,zoom,map__93410,map__93409,vec__93411,make_node_component,node_scale,node_type,node,icons,msgs,id,p__93390,meta93415){
this.t = t;
this.connections = connections;
this.x = x;
this.selected_nodes = selected_nodes;
this.active_nodes = active_nodes;
this.show = show;
this.pth = pth;
this.y = y;
this.state_updates = state_updates;
this.zoom = zoom;
this.map__93410 = map__93410;
this.map__93409 = map__93409;
this.vec__93411 = vec__93411;
this.make_node_component = make_node_component;
this.node_scale = node_scale;
this.node_type = node_type;
this.node = node;
this.icons = icons;
this.msgs = msgs;
this.id = id;
this.p__93390 = p__93390;
this.meta93415 = meta93415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui93414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (pth,map__93409,map__93409__$1,map__93410,map__93410__$1,node,vec__93411,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function (_93416,meta93415__$1){
var self__ = this;
var _93416__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui93414(self__.t,self__.connections,self__.x,self__.selected_nodes,self__.active_nodes,self__.show,self__.pth,self__.y,self__.state_updates,self__.zoom,self__.map__93410,self__.map__93409,self__.vec__93411,self__.make_node_component,self__.node_scale,self__.node_type,self__.node,self__.icons,self__.msgs,self__.id,self__.p__93390,meta93415__$1));
});})(pth,map__93409,map__93409__$1,map__93410,map__93410__$1,node,vec__93411,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
;

dynomics.space.ui.t_dynomics$space$ui93414.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (pth,map__93409,map__93409__$1,map__93410,map__93410__$1,node,vec__93411,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function (_93416){
var self__ = this;
var _93416__$1 = this;
return self__.meta93415;
});})(pth,map__93409,map__93409__$1,map__93410,map__93410__$1,node,vec__93411,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
;

dynomics.space.ui.t_dynomics$space$ui93414.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui93414.prototype.om$core$IRender$render$arity$1 = ((function (pth,map__93409,map__93409__$1,map__93410,map__93410__$1,node,vec__93411,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function (this__44714__auto__){
var self__ = this;
var this__44714__auto____$1 = this;
return om.dom.g.call(null,{"id": [cljs.core.str("node_"),cljs.core.str(self__.id)].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.x,self__.y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),(self__.node_scale / (cljs.core.truth_(self__.zoom)?self__.zoom:(1)))], null)), "className": [cljs.core.str("node_subgraph "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,self__.pth))?"node_selected":null))].join(''), "onClick": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),self__.pth,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),self__.pth,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),self__.pth], null)), "onMouseMove": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),self__.pth], null))},(cljs.core.truth_((function (){var and__35410__auto__ = self__.node_type;
if(cljs.core.truth_(and__35410__auto__)){
return self__.show.call(null,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295));
} else {
return and__35410__auto__;
}
})())?cljs.core.map.call(null,((function (this__44714__auto____$1,pth,map__93409,map__93409__$1,map__93410,map__93410__$1,node,vec__93411,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function (p__93417){
var vec__93418 = p__93417;
var i = cljs.core.nth.call(null,vec__93418,(0),null);
var v = cljs.core.nth.call(null,vec__93418,(1),null);
return om.dom.path.call(null,{"className": [cljs.core.str("quadrant quadrant_type_"),cljs.core.str(cljs.core.get_in.call(null,dynomics.space.core.node_types,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.node_type,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),v], null)))].join(''), "d": "M0,0 v-1 A1,1 0 0,0 -1,0 z", "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),((-90) * i)], null))});
});})(this__44714__auto____$1,pth,map__93409,map__93409__$1,map__93410,map__93410__$1,node,vec__93411,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,(4)),cljs.core.iterate.call(null,cljs.core.partial.call(null,dynomics.space.core.c_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null)))):null),(cljs.core.truth_((function (){var and__35410__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"intersection","intersection",2003891010),self__.t);
if(and__35410__auto__){
return self__.show.call(null,new cljs.core.Keyword(null,"node-types","node-types",1539943342));
} else {
return and__35410__auto__;
}
})())?om.core.build.call(null,dynomics.space.ui.make_node_types_cached_image_component.call(null,new cljs.core.Keyword(null,"friendly","friendly",281770577),dynomics.space.ui.renderfn.call(null,new cljs.core.Keyword(null,"friendly","friendly",281770577))),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.node_type,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),((1) / self__.zoom),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),self__.state_updates,new cljs.core.Keyword(null,"icon","icon",1679606541),cljs.core.get_in.call(null,self__.icons,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"friendly","friendly",281770577),self__.node_type], null)),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("nntp"),cljs.core.str(self__.id)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)):null),(cljs.core.truth_((function (){var and__35410__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"intersection","intersection",2003891010),self__.t);
if(and__35410__auto__){
return self__.show.call(null,new cljs.core.Keyword(null,"quadrant-icons","quadrant-icons",737862449));
} else {
return and__35410__auto__;
}
})())?om.core.build.call(null,dynomics.space.ui.make_node_types_cached_image_component.call(null,new cljs.core.Keyword(null,"simple","simple",-581868663),dynomics.space.ui.renderfn.call(null,new cljs.core.Keyword(null,"simple","simple",-581868663))),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.node_type,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),((1) / self__.zoom),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),self__.state_updates,new cljs.core.Keyword(null,"icon","icon",1679606541),cljs.core.get_in.call(null,self__.icons,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),self__.node_type], null)),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("nntpp"),cljs.core.str(self__.id)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)):null),(cljs.core.truth_((function (){var and__35410__auto__ = self__.active_nodes;
if(cljs.core.truth_(and__35410__auto__)){
return self__.active_nodes.call(null,self__.pth);
} else {
return and__35410__auto__;
}
})())?om.dom.g.call(null,{"className": (cljs.core.truth_(cljs.core.some.call(null,self__.selected_nodes,cljs.core.map.call(null,((function (this__44714__auto____$1,pth,map__93409,map__93409__$1,map__93410,map__93410__$1,node,vec__93411,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function (p__93419){
var map__93420 = p__93419;
var map__93420__$1 = ((((!((map__93420 == null)))?((((map__93420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93420):map__93420);
var cid = cljs.core.get.call(null,map__93420__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null);
});})(this__44714__auto____$1,pth,map__93409,map__93409__$1,map__93410,map__93410__$1,node,vec__93411,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
,self__.connections)))?"node_connections_selected":"node_connections")},cljs.core.map.call(null,((function (this__44714__auto____$1,pth,map__93409,map__93409__$1,map__93410,map__93410__$1,node,vec__93411,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function (p__93422){
var map__93423 = p__93422;
var map__93423__$1 = ((((!((map__93423 == null)))?((((map__93423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93423):map__93423);
var vec__93424 = cljs.core.get.call(null,map__93423__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var scx = cljs.core.nth.call(null,vec__93424,(0),null);
var scy = cljs.core.nth.call(null,vec__93424,(1),null);
var cid = cljs.core.get.call(null,map__93423__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vec__93426 = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(self__.zoom / self__.node_scale)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scx,scy], null));
var cx = cljs.core.nth.call(null,vec__93426,(0),null);
var cy = cljs.core.nth.call(null,vec__93426,(1),null);
return om.dom.g.call(null,{"className": [cljs.core.str("node_connection"),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null)))?"node_connections_selected":null))].join(''), "id": [cljs.core.str("node_"),cljs.core.str(self__.id),cljs.core.str("_connection_"),cljs.core.str(cid)].join('')},om.dom.line.call(null,{"x1": (0), "y1": (0), "x2": cx, "y2": cy, "className": "node_connection_line"}),(function (){var path = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null);
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.15, "className": [cljs.core.str("node_connection_dot "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,path))?"node_selected":null))].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),cx,cy], null)), "onClick": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"connector","connector",-1517293248),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"id","id",-1388402092),cid], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"connector","connector",-1517293248),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"id","id",-1388402092),cid], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"connector","connector",-1517293248),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"id","id",-1388402092),cid], null))});
})());
});})(this__44714__auto____$1,pth,map__93409,map__93409__$1,map__93410,map__93410__$1,node,vec__93411,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
,self__.connections)):null),om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": (1), "transform": "scale(0.2)", "className": [cljs.core.str("node_selector_dot"),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,self__.pth))?"node_selected":null))].join('')}));
});})(pth,map__93409,map__93409__$1,map__93410,map__93410__$1,node,vec__93411,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
;

dynomics.space.ui.t_dynomics$space$ui93414.getBasis = ((function (pth,map__93409,map__93409__$1,map__93410,map__93410__$1,node,vec__93411,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.Symbol(null,"pth","pth",1900111558,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"map__93410","map__93410",1448937674,null),new cljs.core.Symbol(null,"map__93409","map__93409",-326524630,null),new cljs.core.Symbol(null,"vec__93411","vec__93411",1283185162,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-component","make-node-component",-1574550003,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Keyword(null,"connections","connections",-2064090887),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"node","node",-2073234571,null)], true, false),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"icons","icons",1343390550,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null)],[new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),new cljs.core.Keyword(null,"icons","icons",-297140977),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)])], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for a node and its connections"], null)),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol(null,"icons","icons",1343390550,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"p__93390","p__93390",-106597859,null),new cljs.core.Symbol(null,"meta93415","meta93415",-458694808,null)], null);
});})(pth,map__93409,map__93409__$1,map__93410,map__93410__$1,node,vec__93411,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
;

dynomics.space.ui.t_dynomics$space$ui93414.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui93414.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui93414";

dynomics.space.ui.t_dynomics$space$ui93414.cljs$lang$ctorPrWriter = ((function (pth,map__93409,map__93409__$1,map__93410,map__93410__$1,node,vec__93411,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"dynomics.space.ui/t_dynomics$space$ui93414");
});})(pth,map__93409,map__93409__$1,map__93410,map__93410__$1,node,vec__93411,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
;

dynomics.space.ui.__GT_t_dynomics$space$ui93414 = ((function (pth,map__93409,map__93409__$1,map__93410,map__93410__$1,node,vec__93411,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function dynomics$space$ui$make_node_component_$___GT_t_dynomics$space$ui93414(t__$1,connections__$1,x__$1,selected_nodes__$1,active_nodes__$1,show__$1,pth__$1,y__$1,state_updates__$1,zoom__$1,map__93410__$2,map__93409__$2,vec__93411__$1,make_node_component__$1,node_scale__$1,node_type__$1,node__$1,icons__$1,msgs__$1,id__$1,p__93390__$1,meta93415){
return (new dynomics.space.ui.t_dynomics$space$ui93414(t__$1,connections__$1,x__$1,selected_nodes__$1,active_nodes__$1,show__$1,pth__$1,y__$1,state_updates__$1,zoom__$1,map__93410__$2,map__93409__$2,vec__93411__$1,make_node_component__$1,node_scale__$1,node_type__$1,node__$1,icons__$1,msgs__$1,id__$1,p__93390__$1,meta93415));
});})(pth,map__93409,map__93409__$1,map__93410,map__93410__$1,node,vec__93411,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui93414(t,connections,x,selected_nodes,active_nodes,show,pth,y,state_updates,zoom,map__93410__$1,map__93409__$1,vec__93411,dynomics$space$ui$make_node_component,node_scale,node_type,node,icons,msgs,id,p__93390,null));
});
dynomics.space.ui.test_component = (function dynomics$space$ui$test_component(x){
if(typeof dynomics.space.ui.t_dynomics$space$ui93430 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui93430 = (function (test_component,x,meta93431){
this.test_component = test_component;
this.x = x;
this.meta93431 = meta93431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui93430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_93432,meta93431__$1){
var self__ = this;
var _93432__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui93430(self__.test_component,self__.x,meta93431__$1));
});

dynomics.space.ui.t_dynomics$space$ui93430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_93432){
var self__ = this;
var _93432__$1 = this;
return self__.meta93431;
});

dynomics.space.ui.t_dynomics$space$ui93430.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui93430.prototype.om$core$IRender$render$arity$1 = (function (this__44714__auto__){
var self__ = this;
var this__44714__auto____$1 = this;
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.2, "fill": (((0.5 > Math.random()))?"orange":"green")});
});

dynomics.space.ui.t_dynomics$space$ui93430.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"test-component","test-component",1959093538,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)))], null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"meta93431","meta93431",1638814571,null)], null);
});

dynomics.space.ui.t_dynomics$space$ui93430.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui93430.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui93430";

dynomics.space.ui.t_dynomics$space$ui93430.cljs$lang$ctorPrWriter = (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"dynomics.space.ui/t_dynomics$space$ui93430");
});

dynomics.space.ui.__GT_t_dynomics$space$ui93430 = (function dynomics$space$ui$test_component_$___GT_t_dynomics$space$ui93430(test_component__$1,x__$1,meta93431){
return (new dynomics.space.ui.t_dynomics$space$ui93430(test_component__$1,x__$1,meta93431));
});

}

return (new dynomics.space.ui.t_dynomics$space$ui93430(dynomics$space$ui$test_component,x,null));
});
dynomics.space.ui.make_quadrant_gradients = (function dynomics$space$ui$make_quadrant_gradients(){
var iter__36202__auto__ = (function dynomics$space$ui$make_quadrant_gradients_$_iter__93437(s__93438){
return (new cljs.core.LazySeq(null,(function (){
var s__93438__$1 = s__93438;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__93438__$1);
if(temp__4657__auto__){
var s__93438__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__93438__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__93438__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__93440 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__93439 = (0);
while(true){
if((i__93439 < size__36201__auto__)){
var quadrant_type = cljs.core._nth.call(null,c__36200__auto__,i__93439);
cljs.core.chunk_append.call(null,b__93440,om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(quadrant_type)].join(''), "gradientUnits": "objectBoundingBox", "cx": (0), "cy": (0), "r": (1)},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "0"})));

var G__93441 = (i__93439 + (1));
i__93439 = G__93441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__93440),dynomics$space$ui$make_quadrant_gradients_$_iter__93437.call(null,cljs.core.chunk_rest.call(null,s__93438__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__93440),null);
}
} else {
var quadrant_type = cljs.core.first.call(null,s__93438__$2);
return cljs.core.cons.call(null,om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(quadrant_type)].join(''), "gradientUnits": "objectBoundingBox", "cx": (0), "cy": (0), "r": (1)},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "0"})),dynomics$space$ui$make_quadrant_gradients_$_iter__93437.call(null,cljs.core.rest.call(null,s__93438__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36202__auto__.call(null,cljs.core.range.call(null,(4)));
});
dynomics.space.ui.make_node_context_menu = (function dynomics$space$ui$make_node_context_menu(p__93442){
var map__93448 = p__93442;
var map__93448__$1 = ((((!((map__93448 == null)))?((((map__93448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93448):map__93448);
var s = map__93448__$1;
var map__93449 = cljs.core.get.call(null,map__93448__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__93449__$1 = ((((!((map__93449 == null)))?((((map__93449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93449):map__93449);
var vec__93450 = cljs.core.get.call(null,map__93449__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__93450,(0),null);
var y = cljs.core.nth.call(null,vec__93450,(1),null);
var sn = cljs.core.get.call(null,map__93448__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var state_updates = cljs.core.get.call(null,map__93448__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__93448__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
return om.dom.circle.call(null,{"id": "add-node-button", "cx": 0.5, "cy": 0.5, "r": 0.1, "fill": "red"});
});
dynomics.space.ui.context_menu_fn = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),dynomics.space.ui.make_node_context_menu], null);
/**
 * Returns a component for the phase-space editor
 */
dynomics.space.ui.make_space_component = (function dynomics$space$ui$make_space_component(p__93453){
var map__93463 = p__93453;
var map__93463__$1 = ((((!((map__93463 == null)))?((((map__93463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93463):map__93463);
var state = map__93463__$1;
var vec__93464 = cljs.core.get.call(null,map__93463__$1,new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331));
var ox = cljs.core.nth.call(null,vec__93464,(0),null);
var oy = cljs.core.nth.call(null,vec__93464,(1),null);
var show = cljs.core.get.call(null,map__93463__$1,new cljs.core.Keyword(null,"show","show",-576705889));
var zoom = cljs.core.get.call(null,map__93463__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var vec__93465 = cljs.core.get.call(null,map__93463__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var px = cljs.core.nth.call(null,vec__93465,(0),null);
var py = cljs.core.nth.call(null,vec__93465,(1),null);
var icons = cljs.core.get.call(null,map__93463__$1,new cljs.core.Keyword(null,"icons","icons",-297140977));
var su = cljs.core.get.call(null,map__93463__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__93463__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var map__93466 = cljs.core.get.call(null,map__93463__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__93466__$1 = ((((!((map__93466 == null)))?((((map__93466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93466):map__93466);
var space = map__93466__$1;
var selected_nodes = cljs.core.get.call(null,map__93466__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var active_nodes = cljs.core.get.call(null,map__93466__$1,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891));
var edges = cljs.core.get.call(null,map__93466__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var curves = cljs.core.get.call(null,map__93466__$1,new cljs.core.Keyword(null,"curves","curves",-510805378));
var curve_types = cljs.core.get.call(null,map__93466__$1,new cljs.core.Keyword(null,"curve-types","curve-types",1650772099));
var node_scale = cljs.core.get.call(null,map__93466__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var regions = cljs.core.get.call(null,map__93466__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var selected_curves = cljs.core.get.call(null,map__93466__$1,new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493));
var compatibilities = cljs.core.get.call(null,map__93466__$1,new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024));
var nodes = cljs.core.get.call(null,map__93466__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var graph = cljs.core.get.call(null,map__93466__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var context_menu = cljs.core.get.call(null,map__93463__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var cf = cljs.core.get.call(null,map__93463__$1,new cljs.core.Keyword(null,"cf","cf",1480736310));
if(typeof dynomics.space.ui.t_dynomics$space$ui93469 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui93469 = (function (selected_nodes,active_nodes,p__93453,py,vec__93464,edges,oy,curves,show,vec__93465,zoom,make_space_component,space,curve_types,map__93463,map__93466,node_scale,regions,ox,selected_curves,px,state,icons,compatibilities,su,msgs,nodes,graph,context_menu,cf,meta93470){
this.selected_nodes = selected_nodes;
this.active_nodes = active_nodes;
this.p__93453 = p__93453;
this.py = py;
this.vec__93464 = vec__93464;
this.edges = edges;
this.oy = oy;
this.curves = curves;
this.show = show;
this.vec__93465 = vec__93465;
this.zoom = zoom;
this.make_space_component = make_space_component;
this.space = space;
this.curve_types = curve_types;
this.map__93463 = map__93463;
this.map__93466 = map__93466;
this.node_scale = node_scale;
this.regions = regions;
this.ox = ox;
this.selected_curves = selected_curves;
this.px = px;
this.state = state;
this.icons = icons;
this.compatibilities = compatibilities;
this.su = su;
this.msgs = msgs;
this.nodes = nodes;
this.graph = graph;
this.context_menu = context_menu;
this.cf = cf;
this.meta93470 = meta93470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui93469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__93463,map__93463__$1,state,vec__93464,ox,oy,show,zoom,vec__93465,px,py,icons,su,msgs,map__93466,map__93466__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (_93471,meta93470__$1){
var self__ = this;
var _93471__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui93469(self__.selected_nodes,self__.active_nodes,self__.p__93453,self__.py,self__.vec__93464,self__.edges,self__.oy,self__.curves,self__.show,self__.vec__93465,self__.zoom,self__.make_space_component,self__.space,self__.curve_types,self__.map__93463,self__.map__93466,self__.node_scale,self__.regions,self__.ox,self__.selected_curves,self__.px,self__.state,self__.icons,self__.compatibilities,self__.su,self__.msgs,self__.nodes,self__.graph,self__.context_menu,self__.cf,meta93470__$1));
});})(map__93463,map__93463__$1,state,vec__93464,ox,oy,show,zoom,vec__93465,px,py,icons,su,msgs,map__93466,map__93466__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui93469.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__93463,map__93463__$1,state,vec__93464,ox,oy,show,zoom,vec__93465,px,py,icons,su,msgs,map__93466,map__93466__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (_93471){
var self__ = this;
var _93471__$1 = this;
return self__.meta93470;
});})(map__93463,map__93463__$1,state,vec__93464,ox,oy,show,zoom,vec__93465,px,py,icons,su,msgs,map__93466,map__93466__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui93469.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui93469.prototype.om$core$IRender$render$arity$1 = ((function (map__93463,map__93463__$1,state,vec__93464,ox,oy,show,zoom,vec__93465,px,py,icons,su,msgs,map__93466,map__93466__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (this__44714__auto__){
var self__ = this;
var this__44714__auto____$1 = this;
return om.dom.div.call(null,{"className": [cljs.core.str("space "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),self__.cf))?"selected_function":"hidden_function"))].join('')},om.dom.svg.call(null,{"image-rendering": "optimizeQuality", "zoomAndPan": false, "preserveAspectRatio": "xMidYMin", "width": "100%", "shape-rendering": "crispEdges", "xmlns": "http://www.w3.org/2000/svg", "className": "space_svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "id": "space", "viewBox": "-1 -1 2 2", "height": "100%"},om.dom.defs.call(null,{"key": "defs"}),om.dom.g.call(null,{"id": "space_root", "key": "space_root", "onMouseMove": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseDown": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseUp": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onWheel": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onContextMenu": ((function (this__44714__auto____$1,map__93463,map__93463__$1,state,vec__93464,ox,oy,show,zoom,vec__93465,px,py,icons,su,msgs,map__93466,map__93466__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (e){
e.preventDefault();

return null;
});})(this__44714__auto____$1,map__93463,map__93463__$1,state,vec__93464,ox,oy,show,zoom,vec__93465,px,py,icons,su,msgs,map__93466,map__93466__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
, "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.ox,self__.oy], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),self__.zoom,self__.zoom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.px,self__.py], null))},om.dom.rect.call(null,{"x": (-16), "y": (-16), "width": (32), "height": (32), "className": "space_background"}),om.dom.rect.call(null,{"x": (0), "y": (0), "width": (1), "height": (1), "className": "space_space"}),om.core.build_all.call(null,cljs.core.partial.call(null,dynomics.space.ui.make_curve_component,self__.zoom,self__.node_scale,self__.nodes,self__.msgs,self__.selected_curves),cljs.core.map.call(null,cljs.core.vector,self__.curves,cljs.core.map.call(null,cljs.core.comp.call(null,self__.curve_types,cljs.core.key),self__.curves))),null,null,om.core.build_all.call(null,dynomics.space.ui.make_edge_component,cljs.core.map.call(null,((function (this__44714__auto____$1,map__93463,map__93463__$1,state,vec__93464,ox,oy,show,zoom,vec__93465,px,py,icons,su,msgs,map__93466,map__93466__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (e){
return cljs.core.assoc.call(null,dynomics.space.core.with_compatibilities.call(null,e,self__.compatibilities),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale);
});})(this__44714__auto____$1,map__93463,map__93463__$1,state,vec__93464,ox,oy,show,zoom,vec__93465,px,py,icons,su,msgs,map__93466,map__93466__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
,cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.edge_points,self__.nodes),self__.edges))),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__44714__auto____$1,map__93463,map__93463__$1,state,vec__93464,ox,oy,show,zoom,vec__93465,px,py,icons,su,msgs,map__93466,map__93466__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (node){
return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),self__.su,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),self__.zoom,new cljs.core.Keyword(null,"show","show",-576705889),self__.show,new cljs.core.Keyword(null,"icons","icons",-297140977),self__.icons,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891),self__.active_nodes], null),new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''));
});})(this__44714__auto____$1,map__93463,map__93463__$1,state,vec__93464,ox,oy,show,zoom,vec__93465,px,py,icons,su,msgs,map__93466,map__93466__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
,cljs.core.vals.call(null,cljs.core.apply.call(null,cljs.core.dissoc,self__.nodes,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),cljs.core.map.call(null,cljs.core.last,self__.selected_nodes))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__44714__auto____$1,map__93463,map__93463__$1,state,vec__93464,ox,oy,show,zoom,vec__93465,px,py,icons,su,msgs,map__93466,map__93466__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (node){
return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),self__.su,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),self__.zoom,new cljs.core.Keyword(null,"show","show",-576705889),self__.show,new cljs.core.Keyword(null,"icons","icons",-297140977),self__.icons,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891),self__.active_nodes], null),new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''));
});})(this__44714__auto____$1,map__93463,map__93463__$1,state,vec__93464,ox,oy,show,zoom,vec__93465,px,py,icons,su,msgs,map__93466,map__93466__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
,cljs.core.vals.call(null,cljs.core.select_keys.call(null,self__.nodes,cljs.core.map.call(null,cljs.core.last,self__.selected_nodes)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),null,null)));
});})(map__93463,map__93463__$1,state,vec__93464,ox,oy,show,zoom,vec__93465,px,py,icons,su,msgs,map__93466,map__93466__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui93469.getBasis = ((function (map__93463,map__93463__$1,state,vec__93464,ox,oy,show,zoom,vec__93465,px,py,icons,su,msgs,map__93466,map__93466__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (){
return new cljs.core.PersistentVector(null, 31, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Symbol(null,"p__93453","p__93453",356428482,null),new cljs.core.Symbol(null,"py","py",-1256449853,null),new cljs.core.Symbol(null,"vec__93464","vec__93464",190471587,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"oy","oy",809196068,null),new cljs.core.Symbol(null,"curves","curves",1129726149,null),new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.Symbol(null,"vec__93465","vec__93465",520352647,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-space-component","make-space-component",-638751478,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ox","ox",-2083100366,null),new cljs.core.Symbol(null,"oy","oy",809196068,null)], null),new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"px","px",1921861426,null),new cljs.core.Symbol(null,"py","py",-1256449853,null)], null),new cljs.core.Symbol(null,"icons","icons",1343390550,null),new cljs.core.Symbol(null,"su","su",155163255,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"curves","curves",1129726149,null),new cljs.core.Symbol(null,"curve-types","curve-types",-1003663670,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"compatibilities","compatibilities",289068503,null),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null)],[new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"icons","icons",-297140977),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"cf","cf",1480736310)])], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the phase-space editor"], null)),new cljs.core.Symbol(null,"space","space",1988665002,null),new cljs.core.Symbol(null,"curve-types","curve-types",-1003663670,null),new cljs.core.Symbol(null,"map__93463","map__93463",-1502485908,null),new cljs.core.Symbol(null,"map__93466","map__93466",-572314836,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"ox","ox",-2083100366,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.Symbol(null,"px","px",1921861426,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"icons","icons",1343390550,null),new cljs.core.Symbol(null,"compatibilities","compatibilities",289068503,null),new cljs.core.Symbol(null,"su","su",155163255,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Symbol(null,"meta93470","meta93470",-320730427,null)], null);
});})(map__93463,map__93463__$1,state,vec__93464,ox,oy,show,zoom,vec__93465,px,py,icons,su,msgs,map__93466,map__93466__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui93469.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui93469.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui93469";

dynomics.space.ui.t_dynomics$space$ui93469.cljs$lang$ctorPrWriter = ((function (map__93463,map__93463__$1,state,vec__93464,ox,oy,show,zoom,vec__93465,px,py,icons,su,msgs,map__93466,map__93466__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"dynomics.space.ui/t_dynomics$space$ui93469");
});})(map__93463,map__93463__$1,state,vec__93464,ox,oy,show,zoom,vec__93465,px,py,icons,su,msgs,map__93466,map__93466__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.__GT_t_dynomics$space$ui93469 = ((function (map__93463,map__93463__$1,state,vec__93464,ox,oy,show,zoom,vec__93465,px,py,icons,su,msgs,map__93466,map__93466__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function dynomics$space$ui$make_space_component_$___GT_t_dynomics$space$ui93469(selected_nodes__$1,active_nodes__$1,p__93453__$1,py__$1,vec__93464__$1,edges__$1,oy__$1,curves__$1,show__$1,vec__93465__$1,zoom__$1,make_space_component__$1,space__$1,curve_types__$1,map__93463__$2,map__93466__$2,node_scale__$1,regions__$1,ox__$1,selected_curves__$1,px__$1,state__$1,icons__$1,compatibilities__$1,su__$1,msgs__$1,nodes__$1,graph__$1,context_menu__$1,cf__$1,meta93470){
return (new dynomics.space.ui.t_dynomics$space$ui93469(selected_nodes__$1,active_nodes__$1,p__93453__$1,py__$1,vec__93464__$1,edges__$1,oy__$1,curves__$1,show__$1,vec__93465__$1,zoom__$1,make_space_component__$1,space__$1,curve_types__$1,map__93463__$2,map__93466__$2,node_scale__$1,regions__$1,ox__$1,selected_curves__$1,px__$1,state__$1,icons__$1,compatibilities__$1,su__$1,msgs__$1,nodes__$1,graph__$1,context_menu__$1,cf__$1,meta93470));
});})(map__93463,map__93463__$1,state,vec__93464,ox,oy,show,zoom,vec__93465,px,py,icons,su,msgs,map__93466,map__93466__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui93469(selected_nodes,active_nodes,p__93453,py,vec__93464,edges,oy,curves,show,vec__93465,zoom,dynomics$space$ui$make_space_component,space,curve_types,map__93463__$1,map__93466__$1,node_scale,regions,ox,selected_curves,px,state,icons,compatibilities,su,msgs,nodes,graph,context_menu,cf,null));
});
