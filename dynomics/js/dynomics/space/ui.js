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
var args650890 = [];
var len__25269__auto___650893 = arguments.length;
var i__25270__auto___650894 = (0);
while(true){
if((i__25270__auto___650894 < len__25269__auto___650893)){
args650890.push((arguments[i__25270__auto___650894]));

var G__650895 = (i__25270__auto___650894 + (1));
i__25270__auto___650894 = G__650895;
continue;
} else {
}
break;
}

var G__650892 = args650890.length;
switch (G__650892) {
case 1:
return dynomics.space.ui.to_coords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.ui.to_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args650890.length)].join('')));

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
var args650897 = [];
var len__25269__auto___650900 = arguments.length;
var i__25270__auto___650901 = (0);
while(true){
if((i__25270__auto___650901 < len__25269__auto___650900)){
args650897.push((arguments[i__25270__auto___650901]));

var G__650902 = (i__25270__auto___650901 + (1));
i__25270__auto___650901 = G__650902;
continue;
} else {
}
break;
}

var G__650899 = args650897.length;
switch (G__650899) {
case 1:
return dynomics.space.ui.add_pan_zoom_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return dynomics.space.ui.add_pan_zoom_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args650897.length)].join('')));

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
dynomics.space.ui.toggle_pan_zoom_BANG_ = (function dynomics$space$ui$toggle_pan_zoom_BANG_(p__650904){
var map__650907 = p__650904;
var map__650907__$1 = ((((!((map__650907 == null)))?((((map__650907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650907):map__650907);
var pz = cljs.core.get.call(null,map__650907__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
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
dynomics.space.ui.disable_pan_zoom_BANG_ = (function dynomics$space$ui$disable_pan_zoom_BANG_(p__650909){
var map__650912 = p__650909;
var map__650912__$1 = ((((!((map__650912 == null)))?((((map__650912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650912):map__650912);
var pz = cljs.core.get.call(null,map__650912__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
pz.disablePan();

return pz.disableZoom();
});
dynomics.space.ui.enable_pan_zoom_BANG_ = (function dynomics$space$ui$enable_pan_zoom_BANG_(p__650914){
var map__650917 = p__650914;
var map__650917__$1 = ((((!((map__650917 == null)))?((((map__650917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650917):map__650917);
var pz = cljs.core.get.call(null,map__650917__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
pz.enablePan();

return pz.enableZoom();
});
dynomics.space.ui.render_to_image = (function dynomics$space$ui$render_to_image(var_args){
var args650919 = [];
var len__25269__auto___650936 = arguments.length;
var i__25270__auto___650937 = (0);
while(true){
if((i__25270__auto___650937 < len__25269__auto___650936)){
args650919.push((arguments[i__25270__auto___650937]));

var G__650938 = (i__25270__auto___650937 + (1));
i__25270__auto___650937 = G__650938;
continue;
} else {
}
break;
}

var G__650921 = args650919.length;
switch (G__650921) {
case 0:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args650919.length)].join('')));

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
var seq__650922_650940 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni1.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
)),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni2.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
))));
var chunk__650923_650941 = null;
var count__650924_650942 = (0);
var i__650925_650943 = (0);
while(true){
if((i__650925_650943 < count__650924_650942)){
var vec__650926_650944 = cljs.core._nth.call(null,chunk__650923_650941,i__650925_650943);
var i_650945 = cljs.core.nth.call(null,vec__650926_650944,(0),null);
var j_650946 = cljs.core.nth.call(null,vec__650926_650944,(1),null);
j_650946.removeAttribute("id");

j_650946.removeAttribute("class");

j_650946.removeAttribute("data-reactid");

var ccss_650947__$1 = window.getComputedStyle(i_650945);
var seq__650927_650948 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_650947__$1.length));
var chunk__650928_650949 = null;
var count__650929_650950 = (0);
var i__650930_650951 = (0);
while(true){
if((i__650930_650951 < count__650929_650950)){
var is_650952 = cljs.core._nth.call(null,chunk__650928_650949,i__650930_650951);
var p_650953 = ccss_650947__$1.item(is_650952);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_650953)))){
j_650946.style.setProperty(p_650953,ccss_650947__$1.getPropertyValue(p_650953));
} else {
}

var G__650954 = seq__650927_650948;
var G__650955 = chunk__650928_650949;
var G__650956 = count__650929_650950;
var G__650957 = (i__650930_650951 + (1));
seq__650927_650948 = G__650954;
chunk__650928_650949 = G__650955;
count__650929_650950 = G__650956;
i__650930_650951 = G__650957;
continue;
} else {
var temp__4425__auto___650958 = cljs.core.seq.call(null,seq__650927_650948);
if(temp__4425__auto___650958){
var seq__650927_650959__$1 = temp__4425__auto___650958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__650927_650959__$1)){
var c__25014__auto___650960 = cljs.core.chunk_first.call(null,seq__650927_650959__$1);
var G__650961 = cljs.core.chunk_rest.call(null,seq__650927_650959__$1);
var G__650962 = c__25014__auto___650960;
var G__650963 = cljs.core.count.call(null,c__25014__auto___650960);
var G__650964 = (0);
seq__650927_650948 = G__650961;
chunk__650928_650949 = G__650962;
count__650929_650950 = G__650963;
i__650930_650951 = G__650964;
continue;
} else {
var is_650965 = cljs.core.first.call(null,seq__650927_650959__$1);
var p_650966 = ccss_650947__$1.item(is_650965);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_650966)))){
j_650946.style.setProperty(p_650966,ccss_650947__$1.getPropertyValue(p_650966));
} else {
}

var G__650967 = cljs.core.next.call(null,seq__650927_650959__$1);
var G__650968 = null;
var G__650969 = (0);
var G__650970 = (0);
seq__650927_650948 = G__650967;
chunk__650928_650949 = G__650968;
count__650929_650950 = G__650969;
i__650930_650951 = G__650970;
continue;
}
} else {
}
}
break;
}

var G__650971 = seq__650922_650940;
var G__650972 = chunk__650923_650941;
var G__650973 = count__650924_650942;
var G__650974 = (i__650925_650943 + (1));
seq__650922_650940 = G__650971;
chunk__650923_650941 = G__650972;
count__650924_650942 = G__650973;
i__650925_650943 = G__650974;
continue;
} else {
var temp__4425__auto___650975 = cljs.core.seq.call(null,seq__650922_650940);
if(temp__4425__auto___650975){
var seq__650922_650976__$1 = temp__4425__auto___650975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__650922_650976__$1)){
var c__25014__auto___650977 = cljs.core.chunk_first.call(null,seq__650922_650976__$1);
var G__650978 = cljs.core.chunk_rest.call(null,seq__650922_650976__$1);
var G__650979 = c__25014__auto___650977;
var G__650980 = cljs.core.count.call(null,c__25014__auto___650977);
var G__650981 = (0);
seq__650922_650940 = G__650978;
chunk__650923_650941 = G__650979;
count__650924_650942 = G__650980;
i__650925_650943 = G__650981;
continue;
} else {
var vec__650931_650982 = cljs.core.first.call(null,seq__650922_650976__$1);
var i_650983 = cljs.core.nth.call(null,vec__650931_650982,(0),null);
var j_650984 = cljs.core.nth.call(null,vec__650931_650982,(1),null);
j_650984.removeAttribute("id");

j_650984.removeAttribute("class");

j_650984.removeAttribute("data-reactid");

var ccss_650985__$1 = window.getComputedStyle(i_650983);
var seq__650932_650986 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_650985__$1.length));
var chunk__650933_650987 = null;
var count__650934_650988 = (0);
var i__650935_650989 = (0);
while(true){
if((i__650935_650989 < count__650934_650988)){
var is_650990 = cljs.core._nth.call(null,chunk__650933_650987,i__650935_650989);
var p_650991 = ccss_650985__$1.item(is_650990);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_650991)))){
j_650984.style.setProperty(p_650991,ccss_650985__$1.getPropertyValue(p_650991));
} else {
}

var G__650992 = seq__650932_650986;
var G__650993 = chunk__650933_650987;
var G__650994 = count__650934_650988;
var G__650995 = (i__650935_650989 + (1));
seq__650932_650986 = G__650992;
chunk__650933_650987 = G__650993;
count__650934_650988 = G__650994;
i__650935_650989 = G__650995;
continue;
} else {
var temp__4425__auto___650996__$1 = cljs.core.seq.call(null,seq__650932_650986);
if(temp__4425__auto___650996__$1){
var seq__650932_650997__$1 = temp__4425__auto___650996__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__650932_650997__$1)){
var c__25014__auto___650998 = cljs.core.chunk_first.call(null,seq__650932_650997__$1);
var G__650999 = cljs.core.chunk_rest.call(null,seq__650932_650997__$1);
var G__651000 = c__25014__auto___650998;
var G__651001 = cljs.core.count.call(null,c__25014__auto___650998);
var G__651002 = (0);
seq__650932_650986 = G__650999;
chunk__650933_650987 = G__651000;
count__650934_650988 = G__651001;
i__650935_650989 = G__651002;
continue;
} else {
var is_651003 = cljs.core.first.call(null,seq__650932_650997__$1);
var p_651004 = ccss_650985__$1.item(is_651003);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_651004)))){
j_650984.style.setProperty(p_651004,ccss_650985__$1.getPropertyValue(p_651004));
} else {
}

var G__651005 = cljs.core.next.call(null,seq__650932_650997__$1);
var G__651006 = null;
var G__651007 = (0);
var G__651008 = (0);
seq__650932_650986 = G__651005;
chunk__650933_650987 = G__651006;
count__650934_650988 = G__651007;
i__650935_650989 = G__651008;
continue;
}
} else {
}
}
break;
}

var G__651009 = cljs.core.next.call(null,seq__650922_650976__$1);
var G__651010 = null;
var G__651011 = (0);
var G__651012 = (0);
seq__650922_650940 = G__651009;
chunk__650923_650941 = G__651010;
count__650924_650942 = G__651011;
i__650925_650943 = G__651012;
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
dynomics.space.ui.make_handler = (function dynomics$space$ui$make_handler(transform,type_key,p__651013){
var map__651016 = p__651013;
var map__651016__$1 = ((((!((map__651016 == null)))?((((map__651016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__651016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__651016):map__651016);
var s = map__651016__$1;
var msgs = cljs.core.get.call(null,map__651016__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var current_tool = cljs.core.get.call(null,map__651016__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
return ((function (map__651016,map__651016__$1,s,msgs,current_tool){
return (function (e){
e.stopPropagation();

var mp = transform.call(null,e.clientX,e.clientY);
cljs.core.async.put_BANG_.call(null,msgs,cljs.core.merge.call(null,s,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),type_key,new cljs.core.Keyword(null,"type","type",1174270348),current_tool,new cljs.core.Keyword(null,"position","position",-2011731912),mp,new cljs.core.Keyword(null,"event","event",301435442),e], null)));

return null;
});
;})(map__651016,map__651016__$1,s,msgs,current_tool))
});
dynomics.space.ui.arrowhead = (function dynomics$space$ui$arrowhead(trajectory){
var vec__651020 = cljs.core.subvec.call(null,trajectory,((cljs.core.count.call(null,trajectory) - (1)) - (1)),cljs.core.count.call(null,trajectory));
var p1 = cljs.core.nth.call(null,vec__651020,(0),null);
var p2 = cljs.core.nth.call(null,vec__651020,(1),null);
var vec__651021 = p2;
var ox = cljs.core.nth.call(null,vec__651021,(0),null);
var oy = cljs.core.nth.call(null,vec__651021,(1),null);
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
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__651024){
var vec__651025 = p__651024;
var x = cljs.core.nth.call(null,vec__651025,(0),null);
var y = cljs.core.nth.call(null,vec__651025,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((-1) * x),y], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(-12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(-12)], null)], null)], null));
});
dynomics.space.ui.saddle_3 = (function dynomics$space$ui$saddle_3(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__651028){
var vec__651029 = p__651028;
var x = cljs.core.nth.call(null,vec__651029,(0),null);
var y = cljs.core.nth.call(null,vec__651029,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,((-1) * y)], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(-24)], null)], null)], null));
});
dynomics.space.ui.saddle_4 = (function dynomics$space$ui$saddle_4(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__651032){
var vec__651033 = p__651032;
var x = cljs.core.nth.call(null,vec__651033,(0),null);
var y = cljs.core.nth.call(null,vec__651033,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(-12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(-8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(-16)], null)], null)], null));
});
dynomics.space.ui.saddle_5 = (function dynomics$space$ui$saddle_5(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__651036){
var vec__651037 = p__651036;
var x = cljs.core.nth.call(null,vec__651037,(0),null);
var y = cljs.core.nth.call(null,vec__651037,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.04,-0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(-12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(-16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(-8)], null)], null)], null));
});
dynomics.space.ui.spiral = (function dynomics$space$ui$spiral(var_args){
var args651038 = [];
var len__25269__auto___651041 = arguments.length;
var i__25270__auto___651042 = (0);
while(true){
if((i__25270__auto___651042 < len__25269__auto___651041)){
args651038.push((arguments[i__25270__auto___651042]));

var G__651043 = (i__25270__auto___651042 + (1));
i__25270__auto___651042 = G__651043;
continue;
} else {
}
break;
}

var G__651040 = args651038.length;
switch (G__651040) {
case 3:
return dynomics.space.ui.spiral.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return dynomics.space.ui.spiral.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args651038.length)].join('')));

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
cljs.core.println.call(null,"icon for type ",type_id);

om.dom.rect.call(null,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(-1),new cljs.core.Keyword(null,"y","y",-1757859776),(-1),new cljs.core.Keyword(null,"width","width",-384071477),(3),new cljs.core.Keyword(null,"height","height",1025178622),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"red"], null));

return om.dom.g.call(null,{"id": [cljs.core.str("dynomics_type_icon_"),cljs.core.str(type_id)].join(''), "className": [cljs.core.str("dynomics_type_icon "),cljs.core.str([cljs.core.str("type_icon_"),cljs.core.str(type_id)].join(''))].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),0.5,0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),0.05], null))},cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.ui.make_trajectory_group,true),dynomics.space.ui.get_icon_fn.call(null,type_id).call(null)));
});
dynomics.space.ui.make_prerender_icon = (function dynomics$space$ui$make_prerender_icon(id,type){
return om.dom.div.call(null,{},om.dom.canvas.call(null,{"id": [cljs.core.str("prerender_canvas_"),cljs.core.str(id)].join(''), "width": (32), "height": (32)}),om.dom.div.call(null,{"classsName": "dynomics_node_type_selector", "id": [cljs.core.str("prerender_svg_box_"),cljs.core.str(id)].join('')},om.dom.svg.call(null,{"zoomAndPan": false, "preserveAspectRatio": "xMidYMin", "width": "32px", "shape-rendering": "crispEdges", "xmlns": "http://www.w3.org/2000/svg", "classsName": "dynomics_space_svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "id": [cljs.core.str("prerender_svg_"),cljs.core.str(id)].join(''), "viewBox": "-1 -1 3 3", "height": "32px"},dynomics.space.ui.make_type_icon.call(null,id))));
});
dynomics.space.ui.make_paths = (function dynomics$space$ui$make_paths(p__651045){
var map__651052 = p__651045;
var map__651052__$1 = ((((!((map__651052 == null)))?((((map__651052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__651052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__651052):map__651052);
var space = map__651052__$1;
var nodes = cljs.core.get.call(null,map__651052__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__651052__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var regions = cljs.core.get.call(null,map__651052__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var node_scale = cljs.core.get.call(null,map__651052__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
cljs.core.println.call(null,"Regions ",regions);

return cljs.core.map.call(null,((function (map__651052,map__651052__$1,space,nodes,edges,regions,node_scale){
return (function (region){
return cljs.core.reduce.call(null,((function (map__651052,map__651052__$1,space,nodes,edges,regions,node_scale){
return (function (beziers,connection){
return cljs.core.conj.call(null,beziers,cljs.core.map.call(null,((function (map__651052,map__651052__$1,space,nodes,edges,regions,node_scale){
return (function (p__651054){
var vec__651055 = p__651054;
var nid1 = cljs.core.nth.call(null,vec__651055,(0),null);
var cid1 = cljs.core.nth.call(null,vec__651055,(1),null);
var vec__651056 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx1 = cljs.core.nth.call(null,vec__651056,(0),null);
var ny1 = cljs.core.nth.call(null,vec__651056,(1),null);
var vec__651057 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx1 = cljs.core.nth.call(null,vec__651057,(0),null);
var cy1 = cljs.core.nth.call(null,vec__651057,(1),null);
return dynomics.ui.svg.make_bezier.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx1 + (node_scale * cx1)),(ny1 + (node_scale * cy1))], null)], null));
});})(map__651052,map__651052__$1,space,nodes,edges,regions,node_scale))
,cljs.core.map.call(null,dynomics.space.core.simplify_connection,connection)));
});})(map__651052,map__651052__$1,space,nodes,edges,regions,node_scale))
,cljs.core.PersistentVector.EMPTY,region);
});})(map__651052,map__651052__$1,space,nodes,edges,regions,node_scale))
,regions);
});
/**
 * Returns a palette of tools
 */
dynomics.space.ui.make_tools_palette_component = (function dynomics$space$ui$make_tools_palette_component(p__651058){
var map__651065 = p__651058;
var map__651065__$1 = ((((!((map__651065 == null)))?((((map__651065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__651065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__651065):map__651065);
var state = map__651065__$1;
var current_tool = cljs.core.get.call(null,map__651065__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
var tools = cljs.core.get.call(null,map__651065__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
var tools_order = cljs.core.get.call(null,map__651065__$1,new cljs.core.Keyword(null,"tools-order","tools-order",-615877648));
var state_updates = cljs.core.get.call(null,map__651065__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
return om.dom.div.call(null,{"className": "dynomics_tool_things"},om.dom.div.call(null,{"className": "dynomics_tool_selectors"},cljs.core.map.call(null,((function (map__651065,map__651065__$1,state,current_tool,tools,tools_order,state_updates){
return (function (p__651067){
var vec__651068 = p__651067;
var tk = cljs.core.nth.call(null,vec__651068,(0),null);
var map__651069 = cljs.core.nth.call(null,vec__651068,(1),null);
var map__651069__$1 = ((((!((map__651069 == null)))?((((map__651069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__651069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__651069):map__651069);
var description = cljs.core.get.call(null,map__651069__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var icon = cljs.core.get.call(null,map__651069__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var keybinding = cljs.core.get.call(null,map__651069__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
return om.dom.div.call(null,{"className": [cljs.core.str("dynomics_tool_selector "),cljs.core.str(((cljs.core._EQ_.call(null,tk,current_tool))?"dynomics_tool_selected":null))].join(''), "title": [cljs.core.str(description),cljs.core.str(" ( "),cljs.core.str((((keybinding instanceof cljs.core.Keyword))?cljs.core.name.call(null,keybinding):keybinding)),cljs.core.str(" )")].join(''), "onMouseDown": ((function (vec__651068,tk,map__651069,map__651069__$1,description,icon,keybinding,map__651065,map__651065__$1,state,current_tool,tools,tools_order,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__651068,tk,map__651069,map__651069__$1,description,icon,keybinding,map__651065,map__651065__$1,state,current_tool,tools,tools_order,state_updates){
return (function (s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),tk);
});})(vec__651068,tk,map__651069,map__651069__$1,description,icon,keybinding,map__651065,map__651065__$1,state,current_tool,tools,tools_order,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tool","tool",-1298696470),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null));

return null;
});})(vec__651068,tk,map__651069,map__651069__$1,description,icon,keybinding,map__651065,map__651065__$1,state,current_tool,tools,tools_order,state_updates))
},icon);
});})(map__651065,map__651065__$1,state,current_tool,tools,tools_order,state_updates))
,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,tools),tools_order))),om.dom.div.call(null,{"className": "dynomics_current_tool_text", "title": cljs.core.get_in.call(null,tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tool,new cljs.core.Keyword(null,"description","description",-1428560544)], null))},cljs.core.get_in.call(null,tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tool,new cljs.core.Keyword(null,"name","name",1843675177)], null))));
});
/**
 * Returns a node-type component for the node types palette,
 *   which can prerender its SVG to a canvas & therefore
 *   cache the resulting image, to save on components in the DOM if need be.
 */
dynomics.space.ui.make_node_types_cached_component = (function dynomics$space$ui$make_node_types_cached_component(p__651071,owner){
var map__651077 = p__651071;
var map__651077__$1 = ((((!((map__651077 == null)))?((((map__651077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__651077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__651077):map__651077);
var id = cljs.core.get.call(null,map__651077__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.call(null,map__651077__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(typeof dynomics.space.ui.t_dynomics$space$ui651079 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui651079 = (function (make_node_types_cached_component,p__651071,owner,map__651077,id,type,meta651080){
this.make_node_types_cached_component = make_node_types_cached_component;
this.p__651071 = p__651071;
this.owner = owner;
this.map__651077 = map__651077;
this.id = id;
this.type = type;
this.meta651080 = meta651080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui651079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__651077,map__651077__$1,id,type){
return (function (_651081,meta651080__$1){
var self__ = this;
var _651081__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui651079(self__.make_node_types_cached_component,self__.p__651071,self__.owner,self__.map__651077,self__.id,self__.type,meta651080__$1));
});})(map__651077,map__651077__$1,id,type))
;

dynomics.space.ui.t_dynomics$space$ui651079.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__651077,map__651077__$1,id,type){
return (function (_651081){
var self__ = this;
var _651081__$1 = this;
return self__.meta651080;
});})(map__651077,map__651077__$1,id,type))
;

dynomics.space.ui.t_dynomics$space$ui651079.prototype.om$core$IInitState$ = true;

dynomics.space.ui.t_dynomics$space$ui651079.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__651077,map__651077__$1,id,type){
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
});})(map__651077,map__651077__$1,id,type))
;

dynomics.space.ui.t_dynomics$space$ui651079.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui651079.prototype.om$core$IRender$render$arity$1 = ((function (map__651077,map__651077__$1,id,type){
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
});})(map__651077,map__651077__$1,id,type))
;

dynomics.space.ui.t_dynomics$space$ui651079.prototype.om$core$IDidMount$ = true;

dynomics.space.ui.t_dynomics$space$ui651079.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__651077,map__651077__$1,id,type){
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
});})(map__651077,map__651077__$1,id,type))
;

dynomics.space.ui.t_dynomics$space$ui651079.getBasis = ((function (map__651077,map__651077__$1,id,type){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-cached-component","make-node-types-cached-component",-655003199,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a node-type component for the node types palette,\n  which can prerender its SVG to a canvas & therefore\n  cache the resulting image, to save on components in the DOM if need be."], null)),new cljs.core.Symbol(null,"p__651071","p__651071",600814251,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__651077","map__651077",-1791613237,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"meta651080","meta651080",-353063131,null)], null);
});})(map__651077,map__651077__$1,id,type))
;

dynomics.space.ui.t_dynomics$space$ui651079.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui651079.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui651079";

dynomics.space.ui.t_dynomics$space$ui651079.cljs$lang$ctorPrWriter = ((function (map__651077,map__651077__$1,id,type){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.space.ui/t_dynomics$space$ui651079");
});})(map__651077,map__651077__$1,id,type))
;

dynomics.space.ui.__GT_t_dynomics$space$ui651079 = ((function (map__651077,map__651077__$1,id,type){
return (function dynomics$space$ui$make_node_types_cached_component_$___GT_t_dynomics$space$ui651079(make_node_types_cached_component__$1,p__651071__$1,owner__$1,map__651077__$2,id__$1,type__$1,meta651080){
return (new dynomics.space.ui.t_dynomics$space$ui651079(make_node_types_cached_component__$1,p__651071__$1,owner__$1,map__651077__$2,id__$1,type__$1,meta651080));
});})(map__651077,map__651077__$1,id,type))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui651079(dynomics$space$ui$make_node_types_cached_component,p__651071,owner,map__651077__$1,id,type,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a component for the node types palette
 */
dynomics.space.ui.make_node_types_palette_component = (function dynomics$space$ui$make_node_types_palette_component(p__651082){
var map__651091 = p__651082;
var map__651091__$1 = ((((!((map__651091 == null)))?((((map__651091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__651091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__651091):map__651091);
var state = map__651091__$1;
var component = cljs.core.get.call(null,map__651091__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var state_updates = cljs.core.get.call(null,map__651091__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
if(typeof dynomics.space.ui.t_dynomics$space$ui651093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui651093 = (function (make_node_types_palette_component,p__651082,map__651091,state,component,state_updates,meta651094){
this.make_node_types_palette_component = make_node_types_palette_component;
this.p__651082 = p__651082;
this.map__651091 = map__651091;
this.state = state;
this.component = component;
this.state_updates = state_updates;
this.meta651094 = meta651094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui651093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__651091,map__651091__$1,state,component,state_updates){
return (function (_651095,meta651094__$1){
var self__ = this;
var _651095__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui651093(self__.make_node_types_palette_component,self__.p__651082,self__.map__651091,self__.state,self__.component,self__.state_updates,meta651094__$1));
});})(map__651091,map__651091__$1,state,component,state_updates))
;

dynomics.space.ui.t_dynomics$space$ui651093.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__651091,map__651091__$1,state,component,state_updates){
return (function (_651095){
var self__ = this;
var _651095__$1 = this;
return self__.meta651094;
});})(map__651091,map__651091__$1,state,component,state_updates))
;

dynomics.space.ui.t_dynomics$space$ui651093.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui651093.prototype.om$core$IRender$render$arity$1 = ((function (map__651091,map__651091__$1,state,component,state_updates){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"className": "dynomics_node_types"},cljs.core.map.call(null,((function (this$__$1,map__651091,map__651091__$1,state,component,state_updates){
return (function (p__651096){
var map__651097 = p__651096;
var map__651097__$1 = ((((!((map__651097 == null)))?((((map__651097.cljs$lang$protocol_mask$partition0$ & (64))) || (map__651097.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__651097):map__651097);
var id = cljs.core.get.call(null,map__651097__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var stability = cljs.core.get.call(null,map__651097__$1,new cljs.core.Keyword(null,"stability","stability",1733225509));
var type = cljs.core.get.call(null,map__651097__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return om.dom.div.call(null,{"className": [cljs.core.str("dynomics_node_type_selector")].join(''), "title": [cljs.core.str("Set selected nodes to "),cljs.core.str(id),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,stability)),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,type))].join(''), "onMouseDown": ((function (map__651097,map__651097__$1,id,stability,type,this$__$1,map__651091,map__651091__$1,state,component,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.get_in.call(null,self__.component,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"node-types","node-types",1539943342),new cljs.core.Keyword(null,"tools","tools",-1241731990),id,new cljs.core.Keyword(null,"fn","fn",-1175266204)], null)),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Node type "),cljs.core.str(id)].join('')], null)], null));

return null;
});})(map__651097,map__651097__$1,id,stability,type,this$__$1,map__651091,map__651091__$1,state,component,state_updates))
},om.core.build.call(null,dynomics.space.ui.make_node_types_cached_component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("ntp"),cljs.core.str(id)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
});})(this$__$1,map__651091,map__651091__$1,state,component,state_updates))
,cljs.core.vals.call(null,dynomics.space.core.node_types)));
});})(map__651091,map__651091__$1,state,component,state_updates))
;

dynomics.space.ui.t_dynomics$space$ui651093.getBasis = ((function (map__651091,map__651091__$1,state,component,state_updates){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-palette-component","make-node-types-palette-component",54407202,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the node types palette"], null)),new cljs.core.Symbol(null,"p__651082","p__651082",-36758819,null),new cljs.core.Symbol(null,"map__651091","map__651091",156518263,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"meta651094","meta651094",1437797142,null)], null);
});})(map__651091,map__651091__$1,state,component,state_updates))
;

dynomics.space.ui.t_dynomics$space$ui651093.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui651093.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui651093";

dynomics.space.ui.t_dynomics$space$ui651093.cljs$lang$ctorPrWriter = ((function (map__651091,map__651091__$1,state,component,state_updates){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.space.ui/t_dynomics$space$ui651093");
});})(map__651091,map__651091__$1,state,component,state_updates))
;

dynomics.space.ui.__GT_t_dynomics$space$ui651093 = ((function (map__651091,map__651091__$1,state,component,state_updates){
return (function dynomics$space$ui$make_node_types_palette_component_$___GT_t_dynomics$space$ui651093(make_node_types_palette_component__$1,p__651082__$1,map__651091__$2,state__$1,component__$1,state_updates__$1,meta651094){
return (new dynomics.space.ui.t_dynomics$space$ui651093(make_node_types_palette_component__$1,p__651082__$1,map__651091__$2,state__$1,component__$1,state_updates__$1,meta651094));
});})(map__651091,map__651091__$1,state,component,state_updates))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui651093(dynomics$space$ui$make_node_types_palette_component,p__651082,map__651091__$1,state,component,state_updates,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a component for an edge
 */
dynomics.space.ui.make_edge_component = (function dynomics$space$ui$make_edge_component(p__651099){
var map__651111 = p__651099;
var map__651111__$1 = ((((!((map__651111 == null)))?((((map__651111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__651111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__651111):map__651111);
var vec__651112 = cljs.core.get.call(null,map__651111__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__651113 = cljs.core.nth.call(null,vec__651112,(0),null);
var nid1 = cljs.core.nth.call(null,vec__651113,(0),null);
var nid2 = cljs.core.nth.call(null,vec__651113,(1),null);
var vec__651114 = cljs.core.nth.call(null,vec__651112,(1),null);
var nx1 = cljs.core.nth.call(null,vec__651114,(0),null);
var ny1 = cljs.core.nth.call(null,vec__651114,(1),null);
var vec__651115 = cljs.core.nth.call(null,vec__651112,(2),null);
var nx2 = cljs.core.nth.call(null,vec__651115,(0),null);
var ny2 = cljs.core.nth.call(null,vec__651115,(1),null);
var vec__651116 = cljs.core.nth.call(null,vec__651112,(3),null);
var cx1 = cljs.core.nth.call(null,vec__651116,(0),null);
var cx2 = cljs.core.nth.call(null,vec__651116,(1),null);
var vec__651117 = cljs.core.nth.call(null,vec__651112,(4),null);
var cy1 = cljs.core.nth.call(null,vec__651117,(0),null);
var cy2 = cljs.core.nth.call(null,vec__651117,(1),null);
var compatible_QMARK_ = cljs.core.get.call(null,map__651111__$1,new cljs.core.Keyword(null,"compatible?","compatible?",923422575));
var node_scale = cljs.core.get.call(null,map__651111__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
if(typeof dynomics.space.ui.t_dynomics$space$ui651119 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui651119 = (function (nx1,map__651111,vec__651114,cx1,ny2,vec__651116,vec__651117,make_edge_component,cy2,nx2,vec__651115,cy1,node_scale,ny1,cx2,compatible_QMARK_,vec__651113,nid2,vec__651112,p__651099,nid1,meta651120){
this.nx1 = nx1;
this.map__651111 = map__651111;
this.vec__651114 = vec__651114;
this.cx1 = cx1;
this.ny2 = ny2;
this.vec__651116 = vec__651116;
this.vec__651117 = vec__651117;
this.make_edge_component = make_edge_component;
this.cy2 = cy2;
this.nx2 = nx2;
this.vec__651115 = vec__651115;
this.cy1 = cy1;
this.node_scale = node_scale;
this.ny1 = ny1;
this.cx2 = cx2;
this.compatible_QMARK_ = compatible_QMARK_;
this.vec__651113 = vec__651113;
this.nid2 = nid2;
this.vec__651112 = vec__651112;
this.p__651099 = p__651099;
this.nid1 = nid1;
this.meta651120 = meta651120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui651119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__651111,map__651111__$1,vec__651112,vec__651113,nid1,nid2,vec__651114,nx1,ny1,vec__651115,nx2,ny2,vec__651116,cx1,cx2,vec__651117,cy1,cy2,compatible_QMARK_,node_scale){
return (function (_651121,meta651120__$1){
var self__ = this;
var _651121__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui651119(self__.nx1,self__.map__651111,self__.vec__651114,self__.cx1,self__.ny2,self__.vec__651116,self__.vec__651117,self__.make_edge_component,self__.cy2,self__.nx2,self__.vec__651115,self__.cy1,self__.node_scale,self__.ny1,self__.cx2,self__.compatible_QMARK_,self__.vec__651113,self__.nid2,self__.vec__651112,self__.p__651099,self__.nid1,meta651120__$1));
});})(map__651111,map__651111__$1,vec__651112,vec__651113,nid1,nid2,vec__651114,nx1,ny1,vec__651115,nx2,ny2,vec__651116,cx1,cx2,vec__651117,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui651119.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__651111,map__651111__$1,vec__651112,vec__651113,nid1,nid2,vec__651114,nx1,ny1,vec__651115,nx2,ny2,vec__651116,cx1,cx2,vec__651117,cy1,cy2,compatible_QMARK_,node_scale){
return (function (_651121){
var self__ = this;
var _651121__$1 = this;
return self__.meta651120;
});})(map__651111,map__651111__$1,vec__651112,vec__651113,nid1,nid2,vec__651114,nx1,ny1,vec__651115,nx2,ny2,vec__651116,cx1,cx2,vec__651117,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui651119.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui651119.prototype.om$core$IRender$render$arity$1 = ((function (map__651111,map__651111__$1,vec__651112,vec__651113,nid1,nid2,vec__651114,nx1,ny1,vec__651115,nx2,ny2,vec__651116,cx1,cx2,vec__651117,cy1,cy2,compatible_QMARK_,node_scale){
return (function (this__32689__auto__){
var self__ = this;
var this__32689__auto____$1 = this;
return om.dom.path.call(null,{"key": [cljs.core.str("edge_"),cljs.core.str(self__.nid1),cljs.core.str("_"),cljs.core.str(self__.nid2)].join(''), "className": [cljs.core.str("dynomics_edge "),cljs.core.str((cljs.core.truth_(self__.compatible_QMARK_)?"dynomics_compatible_edge":null))].join(''), "d": dynomics.ui.svg.to_svg_path.call(null,cljs.core.map.call(null,dynomics.ui.svg.make_bezier,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx1,self__.ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nx1 + (self__.node_scale * self__.cx1)),(self__.ny1 + (self__.node_scale * self__.cy1))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx2,self__.ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nx2 + (self__.node_scale * self__.cx2)),(self__.ny2 + (self__.node_scale * self__.cy2))], null)], null)], null)))});
});})(map__651111,map__651111__$1,vec__651112,vec__651113,nid1,nid2,vec__651114,nx1,ny1,vec__651115,nx2,ny2,vec__651116,cx1,cx2,vec__651117,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui651119.getBasis = ((function (map__651111,map__651111__$1,vec__651112,vec__651113,nid1,nid2,vec__651114,nx1,ny1,vec__651115,nx2,ny2,vec__651116,cx1,cx2,vec__651117,cy1,cy2,compatible_QMARK_,node_scale){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"map__651111","map__651111",1227764289,null),new cljs.core.Symbol(null,"vec__651114","vec__651114",-1029013404,null),new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null),new cljs.core.Symbol(null,"vec__651116","vec__651116",439818149,null),new cljs.core.Symbol(null,"vec__651117","vec__651117",1066492166,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-edge-component","make-edge-component",-530385559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null)], null)], null),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Symbol(null,"compatible?","compatible?",-1731013194,null),new cljs.core.Keyword(null,"compatible?","compatible?",923422575),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for an edge"], null)),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null),new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"vec__651115","vec__651115",1990870703,null),new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null),new cljs.core.Symbol(null,"compatible?","compatible?",-1731013194,null),new cljs.core.Symbol(null,"vec__651113","vec__651113",964421433,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null),new cljs.core.Symbol(null,"vec__651112","vec__651112",-1648224098,null),new cljs.core.Symbol(null,"p__651099","p__651099",1260129118,null),new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"meta651120","meta651120",1858543155,null)], null);
});})(map__651111,map__651111__$1,vec__651112,vec__651113,nid1,nid2,vec__651114,nx1,ny1,vec__651115,nx2,ny2,vec__651116,cx1,cx2,vec__651117,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui651119.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui651119.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui651119";

dynomics.space.ui.t_dynomics$space$ui651119.cljs$lang$ctorPrWriter = ((function (map__651111,map__651111__$1,vec__651112,vec__651113,nid1,nid2,vec__651114,nx1,ny1,vec__651115,nx2,ny2,vec__651116,cx1,cx2,vec__651117,cy1,cy2,compatible_QMARK_,node_scale){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.space.ui/t_dynomics$space$ui651119");
});})(map__651111,map__651111__$1,vec__651112,vec__651113,nid1,nid2,vec__651114,nx1,ny1,vec__651115,nx2,ny2,vec__651116,cx1,cx2,vec__651117,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.__GT_t_dynomics$space$ui651119 = ((function (map__651111,map__651111__$1,vec__651112,vec__651113,nid1,nid2,vec__651114,nx1,ny1,vec__651115,nx2,ny2,vec__651116,cx1,cx2,vec__651117,cy1,cy2,compatible_QMARK_,node_scale){
return (function dynomics$space$ui$make_edge_component_$___GT_t_dynomics$space$ui651119(nx1__$1,map__651111__$2,vec__651114__$1,cx1__$1,ny2__$1,vec__651116__$1,vec__651117__$1,make_edge_component__$1,cy2__$1,nx2__$1,vec__651115__$1,cy1__$1,node_scale__$1,ny1__$1,cx2__$1,compatible_QMARK___$1,vec__651113__$1,nid2__$1,vec__651112__$1,p__651099__$1,nid1__$1,meta651120){
return (new dynomics.space.ui.t_dynomics$space$ui651119(nx1__$1,map__651111__$2,vec__651114__$1,cx1__$1,ny2__$1,vec__651116__$1,vec__651117__$1,make_edge_component__$1,cy2__$1,nx2__$1,vec__651115__$1,cy1__$1,node_scale__$1,ny1__$1,cx2__$1,compatible_QMARK___$1,vec__651113__$1,nid2__$1,vec__651112__$1,p__651099__$1,nid1__$1,meta651120));
});})(map__651111,map__651111__$1,vec__651112,vec__651113,nid1,nid2,vec__651114,nx1,ny1,vec__651115,nx2,ny2,vec__651116,cx1,cx2,vec__651117,cy1,cy2,compatible_QMARK_,node_scale))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui651119(nx1,map__651111__$1,vec__651114,cx1,ny2,vec__651116,vec__651117,dynomics$space$ui$make_edge_component,cy2,nx2,vec__651115,cy1,node_scale,ny1,cx2,compatible_QMARK_,vec__651113,nid2,vec__651112,p__651099,nid1,null));
});
dynomics.space.ui.make_open_region_component = (function dynomics$space$ui$make_open_region_component(p__651122){
var map__651135 = p__651122;
var map__651135__$1 = ((((!((map__651135 == null)))?((((map__651135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__651135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__651135):map__651135);
var node_id = cljs.core.get.call(null,map__651135__$1,new cljs.core.Keyword(null,"node-id","node-id",779482292));
var quadrant_type = cljs.core.get.call(null,map__651135__$1,new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370));
var vec__651136 = cljs.core.get.call(null,map__651135__$1,new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631));
var qx = cljs.core.nth.call(null,vec__651136,(0),null);
var qy = cljs.core.nth.call(null,vec__651136,(1),null);
var vec__651137 = cljs.core.get.call(null,map__651135__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p1 = cljs.core.nth.call(null,vec__651137,(0),null);
var p2 = cljs.core.nth.call(null,vec__651137,(1),null);
var map__651138 = cljs.core.nth.call(null,vec__651137,(2),null);
var map__651138__$1 = ((((!((map__651138 == null)))?((((map__651138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__651138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__651138):map__651138);
var p3 = map__651138__$1;
var vec__651139 = cljs.core.get.call(null,map__651138__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var x = cljs.core.nth.call(null,vec__651139,(0),null);
var y = cljs.core.nth.call(null,vec__651139,(1),null);
var vec__651140 = cljs.core.get.call(null,map__651138__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__651141 = cljs.core.nth.call(null,vec__651140,(0),null);
var cx = cljs.core.nth.call(null,vec__651141,(0),null);
var cy = cljs.core.nth.call(null,vec__651141,(1),null);
var p4 = cljs.core.nth.call(null,vec__651137,(3),null);
if(typeof dynomics.space.ui.t_dynomics$space$ui651144 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui651144 = (function (x,y,p2,p4,p3,qx,map__651138,qy,map__651135,p1,vec__651136,vec__651140,make_open_region_component,vec__651141,cx,cy,vec__651137,node_id,vec__651139,p__651122,quadrant_type,meta651145){
this.x = x;
this.y = y;
this.p2 = p2;
this.p4 = p4;
this.p3 = p3;
this.qx = qx;
this.map__651138 = map__651138;
this.qy = qy;
this.map__651135 = map__651135;
this.p1 = p1;
this.vec__651136 = vec__651136;
this.vec__651140 = vec__651140;
this.make_open_region_component = make_open_region_component;
this.vec__651141 = vec__651141;
this.cx = cx;
this.cy = cy;
this.vec__651137 = vec__651137;
this.node_id = node_id;
this.vec__651139 = vec__651139;
this.p__651122 = p__651122;
this.quadrant_type = quadrant_type;
this.meta651145 = meta651145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui651144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__651135,map__651135__$1,node_id,quadrant_type,vec__651136,qx,qy,vec__651137,p1,p2,map__651138,map__651138__$1,p3,vec__651139,x,y,vec__651140,vec__651141,cx,cy,p4){
return (function (_651146,meta651145__$1){
var self__ = this;
var _651146__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui651144(self__.x,self__.y,self__.p2,self__.p4,self__.p3,self__.qx,self__.map__651138,self__.qy,self__.map__651135,self__.p1,self__.vec__651136,self__.vec__651140,self__.make_open_region_component,self__.vec__651141,self__.cx,self__.cy,self__.vec__651137,self__.node_id,self__.vec__651139,self__.p__651122,self__.quadrant_type,meta651145__$1));
});})(map__651135,map__651135__$1,node_id,quadrant_type,vec__651136,qx,qy,vec__651137,p1,p2,map__651138,map__651138__$1,p3,vec__651139,x,y,vec__651140,vec__651141,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui651144.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__651135,map__651135__$1,node_id,quadrant_type,vec__651136,qx,qy,vec__651137,p1,p2,map__651138,map__651138__$1,p3,vec__651139,x,y,vec__651140,vec__651141,cx,cy,p4){
return (function (_651146){
var self__ = this;
var _651146__$1 = this;
return self__.meta651145;
});})(map__651135,map__651135__$1,node_id,quadrant_type,vec__651136,qx,qy,vec__651137,p1,p2,map__651138,map__651138__$1,p3,vec__651139,x,y,vec__651140,vec__651141,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui651144.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui651144.prototype.om$core$IRender$render$arity$1 = ((function (map__651135,map__651135__$1,node_id,quadrant_type,vec__651136,qx,qy,vec__651137,p1,p2,map__651138,map__651138__$1,p3,vec__651139,x,y,vec__651140,vec__651141,cx,cy,p4){
return (function (this__32689__auto__){
var self__ = this;
var this__32689__auto____$1 = this;
return om.dom.g.call(null,{},null,om.dom.path.call(null,{"className": [cljs.core.str("dynomics_open_region "),cljs.core.str([cljs.core.str("dynomics_open_region_type_"),cljs.core.str(self__.quadrant_type)].join(''))].join(''), "d": [cljs.core.str(dynomics.ui.svg.to_svg_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p1,self__.p2], null))),cljs.core.str(dynomics.ui.svg.to_svg_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,self__.p3,new cljs.core.Keyword(null,"ml","ml",1909675057),"L"),self__.p4], null))),cljs.core.str("z")].join('')}));
});})(map__651135,map__651135__$1,node_id,quadrant_type,vec__651136,qx,qy,vec__651137,p1,p2,map__651138,map__651138__$1,p3,vec__651139,x,y,vec__651140,vec__651141,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui651144.getBasis = ((function (map__651135,map__651135__$1,node_id,quadrant_type,vec__651136,qx,qy,vec__651137,p1,p2,map__651138,map__651138__$1,p3,vec__651139,x,y,vec__651140,vec__651141,cx,cy,p4){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null),new cljs.core.Symbol(null,"p4","p4",550404713,null),new cljs.core.Symbol(null,"p3","p3",-923395030,null),new cljs.core.Symbol(null,"qx","qx",876946123,null),new cljs.core.Symbol(null,"map__651138","map__651138",1690229551,null),new cljs.core.Symbol(null,"qy","qy",1271868883,null),new cljs.core.Symbol(null,"map__651135","map__651135",1470292404,null),new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"vec__651136","vec__651136",-1786803786,null),new cljs.core.Symbol(null,"vec__651140","vec__651140",-882663850,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-open-region-component","make-open-region-component",530106712,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Keyword(null,"node-id","node-id",779482292),new cljs.core.Symbol(null,"quadrant-type","quadrant-type",333980157,null),new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"qx","qx",876946123,null),new cljs.core.Symbol(null,"qy","qy",1271868883,null)], null),new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"cy","cy",-1899104709,null)], null)], null),new cljs.core.Keyword(null,"control-points","control-points",-238538325),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"p3","p3",-923395030,null)], true, false),new cljs.core.Symbol(null,"p4","p4",550404713,null)], null),new cljs.core.Keyword(null,"points","points",-1486596883)], true, false)], null)))], null)),new cljs.core.Symbol(null,"vec__651141","vec__651141",2007071225,null),new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"cy","cy",-1899104709,null),new cljs.core.Symbol(null,"vec__651137","vec__651137",355064571,null),new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Symbol(null,"vec__651139","vec__651139",-654228292,null),new cljs.core.Symbol(null,"p__651122","p__651122",-920914883,null),new cljs.core.Symbol(null,"quadrant-type","quadrant-type",333980157,null),new cljs.core.Symbol(null,"meta651145","meta651145",612953258,null)], null);
});})(map__651135,map__651135__$1,node_id,quadrant_type,vec__651136,qx,qy,vec__651137,p1,p2,map__651138,map__651138__$1,p3,vec__651139,x,y,vec__651140,vec__651141,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui651144.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui651144.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui651144";

dynomics.space.ui.t_dynomics$space$ui651144.cljs$lang$ctorPrWriter = ((function (map__651135,map__651135__$1,node_id,quadrant_type,vec__651136,qx,qy,vec__651137,p1,p2,map__651138,map__651138__$1,p3,vec__651139,x,y,vec__651140,vec__651141,cx,cy,p4){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.space.ui/t_dynomics$space$ui651144");
});})(map__651135,map__651135__$1,node_id,quadrant_type,vec__651136,qx,qy,vec__651137,p1,p2,map__651138,map__651138__$1,p3,vec__651139,x,y,vec__651140,vec__651141,cx,cy,p4))
;

dynomics.space.ui.__GT_t_dynomics$space$ui651144 = ((function (map__651135,map__651135__$1,node_id,quadrant_type,vec__651136,qx,qy,vec__651137,p1,p2,map__651138,map__651138__$1,p3,vec__651139,x,y,vec__651140,vec__651141,cx,cy,p4){
return (function dynomics$space$ui$make_open_region_component_$___GT_t_dynomics$space$ui651144(x__$1,y__$1,p2__$1,p4__$1,p3__$1,qx__$1,map__651138__$2,qy__$1,map__651135__$2,p1__$1,vec__651136__$1,vec__651140__$1,make_open_region_component__$1,vec__651141__$1,cx__$1,cy__$1,vec__651137__$1,node_id__$1,vec__651139__$1,p__651122__$1,quadrant_type__$1,meta651145){
return (new dynomics.space.ui.t_dynomics$space$ui651144(x__$1,y__$1,p2__$1,p4__$1,p3__$1,qx__$1,map__651138__$2,qy__$1,map__651135__$2,p1__$1,vec__651136__$1,vec__651140__$1,make_open_region_component__$1,vec__651141__$1,cx__$1,cy__$1,vec__651137__$1,node_id__$1,vec__651139__$1,p__651122__$1,quadrant_type__$1,meta651145));
});})(map__651135,map__651135__$1,node_id,quadrant_type,vec__651136,qx,qy,vec__651137,p1,p2,map__651138,map__651138__$1,p3,vec__651139,x,y,vec__651140,vec__651141,cx,cy,p4))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui651144(x,y,p2,p4,p3,qx,map__651138__$1,qy,map__651135__$1,p1,vec__651136,vec__651140,dynomics$space$ui$make_open_region_component,vec__651141,cx,cy,vec__651137,node_id,vec__651139,p__651122,quadrant_type,null));
});
/**
 * Returns a component for a node and its connections
 */
dynomics.space.ui.make_node_component = (function dynomics$space$ui$make_node_component(p__651147){
var map__651162 = p__651147;
var map__651162__$1 = ((((!((map__651162 == null)))?((((map__651162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__651162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__651162):map__651162);
var map__651163 = cljs.core.get.call(null,map__651162__$1,new cljs.core.Keyword(null,"node","node",581201198));
var map__651163__$1 = ((((!((map__651163 == null)))?((((map__651163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__651163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__651163):map__651163);
var vec__651164 = cljs.core.get.call(null,map__651163__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__651164,(0),null);
var y = cljs.core.nth.call(null,vec__651164,(1),null);
var t = cljs.core.get.call(null,map__651163__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var pt = cljs.core.get.call(null,map__651163__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var id = cljs.core.get.call(null,map__651163__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var connections = cljs.core.get.call(null,map__651163__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var node_scale = cljs.core.get.call(null,map__651162__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var selected_nodes = cljs.core.get.call(null,map__651162__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var map__651165 = cljs.core.get.call(null,map__651162__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var map__651165__$1 = ((((!((map__651165 == null)))?((((map__651165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__651165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__651165):map__651165);
var current_tool = cljs.core.get.call(null,map__651165__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
var msgs = cljs.core.get.call(null,map__651162__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var pz = cljs.core.get.call(null,map__651162__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id], null);
if(typeof dynomics.space.ui.t_dynomics$space$ui651169 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui651169 = (function (t,connections,x,selected_nodes,map__651165,current_tool,pz,path,y,pt,map__651163,make_node_component,node_scale,vec__651164,p__651147,map__651162,msgs,id,meta651170){
this.t = t;
this.connections = connections;
this.x = x;
this.selected_nodes = selected_nodes;
this.map__651165 = map__651165;
this.current_tool = current_tool;
this.pz = pz;
this.path = path;
this.y = y;
this.pt = pt;
this.map__651163 = map__651163;
this.make_node_component = make_node_component;
this.node_scale = node_scale;
this.vec__651164 = vec__651164;
this.p__651147 = p__651147;
this.map__651162 = map__651162;
this.msgs = msgs;
this.id = id;
this.meta651170 = meta651170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui651169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (path,map__651162,map__651162__$1,map__651163,map__651163__$1,vec__651164,x,y,t,pt,id,connections,node_scale,selected_nodes,map__651165,map__651165__$1,current_tool,msgs,pz){
return (function (_651171,meta651170__$1){
var self__ = this;
var _651171__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui651169(self__.t,self__.connections,self__.x,self__.selected_nodes,self__.map__651165,self__.current_tool,self__.pz,self__.path,self__.y,self__.pt,self__.map__651163,self__.make_node_component,self__.node_scale,self__.vec__651164,self__.p__651147,self__.map__651162,self__.msgs,self__.id,meta651170__$1));
});})(path,map__651162,map__651162__$1,map__651163,map__651163__$1,vec__651164,x,y,t,pt,id,connections,node_scale,selected_nodes,map__651165,map__651165__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui651169.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (path,map__651162,map__651162__$1,map__651163,map__651163__$1,vec__651164,x,y,t,pt,id,connections,node_scale,selected_nodes,map__651165,map__651165__$1,current_tool,msgs,pz){
return (function (_651171){
var self__ = this;
var _651171__$1 = this;
return self__.meta651170;
});})(path,map__651162,map__651162__$1,map__651163,map__651163__$1,vec__651164,x,y,t,pt,id,connections,node_scale,selected_nodes,map__651165,map__651165__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui651169.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui651169.prototype.om$core$IRender$render$arity$1 = ((function (path,map__651162,map__651162__$1,map__651163,map__651163__$1,vec__651164,x,y,t,pt,id,connections,node_scale,selected_nodes,map__651165,map__651165__$1,current_tool,msgs,pz){
return (function (this__32689__auto__){
var self__ = this;
var this__32689__auto____$1 = this;
return om.dom.g.call(null,{"id": [cljs.core.str("node_"),cljs.core.str(self__.id)].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.x,self__.y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),self__.node_scale], null)), "className": [cljs.core.str("dynomics_node_subgraph "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,self__.path))?"dynomics_node_selected":null))].join(''), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"path","path",-188191168),self__.path,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"path","path",-188191168),self__.path,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null))},om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.3, "className": [cljs.core.str("dynomics_node_selector_dot")].join('')}),om.dom.text.call(null,{"x": (-4), "y": (4), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),0.05], null)), "fill": "black"},[cljs.core.str(self__.pt)].join('')),om.dom.rect.call(null,{"x": (0), "y": (0), "width": (1), "height": (1), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),(-1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),(2),(2)], null)), "className": [cljs.core.str("dynomics_node")].join('')}),om.dom.g.call(null,{"className": "dynomics_node_connections"},cljs.core.map.call(null,((function (this__32689__auto____$1,path,map__651162,map__651162__$1,map__651163,map__651163__$1,vec__651164,x,y,t,pt,id,connections,node_scale,selected_nodes,map__651165,map__651165__$1,current_tool,msgs,pz){
return (function (p__651172){
var map__651173 = p__651172;
var map__651173__$1 = ((((!((map__651173 == null)))?((((map__651173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__651173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__651173):map__651173);
var vec__651174 = cljs.core.get.call(null,map__651173__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var cx = cljs.core.nth.call(null,vec__651174,(0),null);
var cy = cljs.core.nth.call(null,vec__651174,(1),null);
var cid = cljs.core.get.call(null,map__651173__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return om.dom.g.call(null,{"className": "dynomics_node_connection", "id": [cljs.core.str("node_"),cljs.core.str(self__.id),cljs.core.str("_connection_"),cljs.core.str(cid)].join('')},om.dom.line.call(null,{"x1": (0), "y1": (0), "x2": cx, "y2": cy, "className": "dynomics_node_connection_line"}),(function (){var path__$1 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null);
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.27, "className": [cljs.core.str("dynomics_node_connection_dot "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,path__$1))?"dynomics_node_selected":null))].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),cx,cy], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"id","id",-1388402092),cid,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"id","id",-1388402092),cid,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null))});
})());
});})(this__32689__auto____$1,path,map__651162,map__651162__$1,map__651163,map__651163__$1,vec__651164,x,y,t,pt,id,connections,node_scale,selected_nodes,map__651165,map__651165__$1,current_tool,msgs,pz))
,self__.connections)));
});})(path,map__651162,map__651162__$1,map__651163,map__651163__$1,vec__651164,x,y,t,pt,id,connections,node_scale,selected_nodes,map__651165,map__651165__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui651169.getBasis = ((function (path,map__651162,map__651162__$1,map__651163,map__651163__$1,vec__651164,x,y,t,pt,id,connections,node_scale,selected_nodes,map__651165,map__651165__$1,current_tool,msgs,pz){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"map__651165","map__651165",-1072565149,null),new cljs.core.Symbol(null,"current-tool","current-tool",699505924,null),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"pt","pt",-2097974902,null),new cljs.core.Symbol(null,"map__651163","map__651163",917292972,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-component","make-node-component",-1574550003,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"pt","pt",-2097974902,null),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Keyword(null,"connections","connections",-2064090887)], true, false),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"current-tool","current-tool",699505924,null),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for a node and its connections"], null)),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"vec__651164","vec__651164",1234437329,null),new cljs.core.Symbol(null,"p__651147","p__651147",845318934,null),new cljs.core.Symbol(null,"map__651162","map__651162",2147386071,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta651170","meta651170",588885567,null)], null);
});})(path,map__651162,map__651162__$1,map__651163,map__651163__$1,vec__651164,x,y,t,pt,id,connections,node_scale,selected_nodes,map__651165,map__651165__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui651169.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui651169.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui651169";

dynomics.space.ui.t_dynomics$space$ui651169.cljs$lang$ctorPrWriter = ((function (path,map__651162,map__651162__$1,map__651163,map__651163__$1,vec__651164,x,y,t,pt,id,connections,node_scale,selected_nodes,map__651165,map__651165__$1,current_tool,msgs,pz){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.space.ui/t_dynomics$space$ui651169");
});})(path,map__651162,map__651162__$1,map__651163,map__651163__$1,vec__651164,x,y,t,pt,id,connections,node_scale,selected_nodes,map__651165,map__651165__$1,current_tool,msgs,pz))
;

dynomics.space.ui.__GT_t_dynomics$space$ui651169 = ((function (path,map__651162,map__651162__$1,map__651163,map__651163__$1,vec__651164,x,y,t,pt,id,connections,node_scale,selected_nodes,map__651165,map__651165__$1,current_tool,msgs,pz){
return (function dynomics$space$ui$make_node_component_$___GT_t_dynomics$space$ui651169(t__$1,connections__$1,x__$1,selected_nodes__$1,map__651165__$2,current_tool__$1,pz__$1,path__$1,y__$1,pt__$1,map__651163__$2,make_node_component__$1,node_scale__$1,vec__651164__$1,p__651147__$1,map__651162__$2,msgs__$1,id__$1,meta651170){
return (new dynomics.space.ui.t_dynomics$space$ui651169(t__$1,connections__$1,x__$1,selected_nodes__$1,map__651165__$2,current_tool__$1,pz__$1,path__$1,y__$1,pt__$1,map__651163__$2,make_node_component__$1,node_scale__$1,vec__651164__$1,p__651147__$1,map__651162__$2,msgs__$1,id__$1,meta651170));
});})(path,map__651162,map__651162__$1,map__651163,map__651163__$1,vec__651164,x,y,t,pt,id,connections,node_scale,selected_nodes,map__651165,map__651165__$1,current_tool,msgs,pz))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui651169(t,connections,x,selected_nodes,map__651165__$1,current_tool,pz,path,y,pt,map__651163__$1,dynomics$space$ui$make_node_component,node_scale,vec__651164,p__651147,map__651162__$1,msgs,id,null));
});
dynomics.space.ui.test_component = (function dynomics$space$ui$test_component(x){
if(typeof dynomics.space.ui.t_dynomics$space$ui651179 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui651179 = (function (test_component,x,meta651180){
this.test_component = test_component;
this.x = x;
this.meta651180 = meta651180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui651179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_651181,meta651180__$1){
var self__ = this;
var _651181__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui651179(self__.test_component,self__.x,meta651180__$1));
});

dynomics.space.ui.t_dynomics$space$ui651179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_651181){
var self__ = this;
var _651181__$1 = this;
return self__.meta651180;
});

dynomics.space.ui.t_dynomics$space$ui651179.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui651179.prototype.om$core$IRender$render$arity$1 = (function (this__32689__auto__){
var self__ = this;
var this__32689__auto____$1 = this;
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.2, "fill": (((0.5 > Math.random()))?"orange":"green")});
});

dynomics.space.ui.t_dynomics$space$ui651179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"test-component","test-component",1959093538,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)))], null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"meta651180","meta651180",-867007061,null)], null);
});

dynomics.space.ui.t_dynomics$space$ui651179.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui651179.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui651179";

dynomics.space.ui.t_dynomics$space$ui651179.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.space.ui/t_dynomics$space$ui651179");
});

dynomics.space.ui.__GT_t_dynomics$space$ui651179 = (function dynomics$space$ui$test_component_$___GT_t_dynomics$space$ui651179(test_component__$1,x__$1,meta651180){
return (new dynomics.space.ui.t_dynomics$space$ui651179(test_component__$1,x__$1,meta651180));
});

}

return (new dynomics.space.ui.t_dynomics$space$ui651179(dynomics$space$ui$test_component,x,null));
});
/**
 * Returns a component for the phase-space editor
 */
dynomics.space.ui.make_space_component = (function dynomics$space$ui$make_space_component(p__651182){
var map__651192 = p__651182;
var map__651192__$1 = ((((!((map__651192 == null)))?((((map__651192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__651192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__651192):map__651192);
var state = map__651192__$1;
var map__651193 = cljs.core.get.call(null,map__651192__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__651193__$1 = ((((!((map__651193 == null)))?((((map__651193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__651193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__651193):map__651193);
var space = map__651193__$1;
var nodes = cljs.core.get.call(null,map__651193__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__651193__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var selected_nodes = cljs.core.get.call(null,map__651193__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var regions = cljs.core.get.call(null,map__651193__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var compatibilities = cljs.core.get.call(null,map__651193__$1,new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024));
var graph = cljs.core.get.call(null,map__651193__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var node_scale = cljs.core.get.call(null,map__651193__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var cf = cljs.core.get.call(null,map__651192__$1,new cljs.core.Keyword(null,"cf","cf",1480736310));
var map__651194 = cljs.core.get.call(null,map__651192__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var map__651194__$1 = ((((!((map__651194 == null)))?((((map__651194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__651194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__651194):map__651194);
var current_tool = cljs.core.get.call(null,map__651194__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
var msgs = cljs.core.get.call(null,map__651192__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var pz = cljs.core.get.call(null,map__651192__$1,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277));
if(typeof dynomics.space.ui.t_dynomics$space$ui651198 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui651198 = (function (map__651194,selected_nodes,map__651192,current_tool,edges,pz,map__651193,make_space_component,space,p__651182,node_scale,regions,state,compatibilities,msgs,nodes,graph,cf,meta651199){
this.map__651194 = map__651194;
this.selected_nodes = selected_nodes;
this.map__651192 = map__651192;
this.current_tool = current_tool;
this.edges = edges;
this.pz = pz;
this.map__651193 = map__651193;
this.make_space_component = make_space_component;
this.space = space;
this.p__651182 = p__651182;
this.node_scale = node_scale;
this.regions = regions;
this.state = state;
this.compatibilities = compatibilities;
this.msgs = msgs;
this.nodes = nodes;
this.graph = graph;
this.cf = cf;
this.meta651199 = meta651199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui651198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__651192,map__651192__$1,state,map__651193,map__651193__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__651194,map__651194__$1,current_tool,msgs,pz){
return (function (_651200,meta651199__$1){
var self__ = this;
var _651200__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui651198(self__.map__651194,self__.selected_nodes,self__.map__651192,self__.current_tool,self__.edges,self__.pz,self__.map__651193,self__.make_space_component,self__.space,self__.p__651182,self__.node_scale,self__.regions,self__.state,self__.compatibilities,self__.msgs,self__.nodes,self__.graph,self__.cf,meta651199__$1));
});})(map__651192,map__651192__$1,state,map__651193,map__651193__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__651194,map__651194__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui651198.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__651192,map__651192__$1,state,map__651193,map__651193__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__651194,map__651194__$1,current_tool,msgs,pz){
return (function (_651200){
var self__ = this;
var _651200__$1 = this;
return self__.meta651199;
});})(map__651192,map__651192__$1,state,map__651193,map__651193__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__651194,map__651194__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui651198.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui651198.prototype.om$core$IRender$render$arity$1 = ((function (map__651192,map__651192__$1,state,map__651193,map__651193__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__651194,map__651194__$1,current_tool,msgs,pz){
return (function (this__32689__auto__){
var self__ = this;
var this__32689__auto____$1 = this;
return om.dom.div.call(null,{"className": [cljs.core.str("dynomics_space "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),self__.cf))?"selected_function":"hidden_function"))].join('')},om.dom.svg.call(null,{"zoomAndPan": false, "preserveAspectRatio": "xMidYMin", "width": "100%", "shape-rendering": "crispEdges", "xmlns": "http://www.w3.org/2000/svg", "className": "dynomics_space_svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "id": "space", "viewBox": "-1 -1 3 3", "height": "100%"},om.dom.g.call(null,{"id": "space_root", "onMouseMove": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.to_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),self__.current_tool], null))},om.dom.rect.call(null,{"x": (-16), "y": (-16), "width": (32), "height": (32), "className": "dynomics_space_background"}),om.dom.rect.call(null,{"x": (0), "y": (0), "width": (1), "height": (1), "className": "dynomics_space_space"}),null,null,om.core.build_all.call(null,dynomics.space.ui.make_open_region_component,cljs.core.mapcat.call(null,cljs.core.partial.call(null,dynomics.space.core.make_open_regions,self__.node_scale),dynomics.space.core.edge_pairs_by_node.call(null,self__.space))),om.core.build_all.call(null,dynomics.space.ui.make_edge_component,cljs.core.map.call(null,((function (this__32689__auto____$1,map__651192,map__651192__$1,state,map__651193,map__651193__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__651194,map__651194__$1,current_tool,msgs,pz){
return (function (e){
return cljs.core.assoc.call(null,dynomics.space.core.with_compatibilities.call(null,e,self__.compatibilities),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale);
});})(this__32689__auto____$1,map__651192,map__651192__$1,state,map__651193,map__651193__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__651194,map__651194__$1,current_tool,msgs,pz))
,cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.edge_points,self__.nodes),self__.edges))),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__32689__auto____$1,map__651192,map__651192__$1,state,map__651193,map__651193__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__651194,map__651194__$1,current_tool,msgs,pz){
return (function (node){
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz], null));
});})(this__32689__auto____$1,map__651192,map__651192__$1,state,map__651193,map__651193__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__651194,map__651194__$1,current_tool,msgs,pz))
,cljs.core.vals.call(null,cljs.core.apply.call(null,cljs.core.dissoc,self__.nodes,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),cljs.core.map.call(null,cljs.core.last,self__.selected_nodes))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__32689__auto____$1,map__651192,map__651192__$1,state,map__651193,map__651193__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__651194,map__651194__$1,current_tool,msgs,pz){
return (function (node){
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),self__.pz], null));
});})(this__32689__auto____$1,map__651192,map__651192__$1,state,map__651193,map__651193__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__651194,map__651194__$1,current_tool,msgs,pz))
,cljs.core.vals.call(null,cljs.core.select_keys.call(null,self__.nodes,cljs.core.map.call(null,cljs.core.last,self__.selected_nodes)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),null)));
});})(map__651192,map__651192__$1,state,map__651193,map__651193__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__651194,map__651194__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui651198.getBasis = ((function (map__651192,map__651192__$1,state,map__651193,map__651193__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__651194,map__651194__$1,current_tool,msgs,pz){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map__651194","map__651194",1974342560,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"map__651192","map__651192",1399783588,null),new cljs.core.Symbol(null,"current-tool","current-tool",699505924,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Symbol(null,"map__651193","map__651193",1916131144,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-space-component","make-space-component",-638751478,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"compatibilities","compatibilities",289068503,null),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Keyword(null,"cf","cf",1480736310),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"current-tool","current-tool",699505924,null),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the phase-space editor"], null)),new cljs.core.Symbol(null,"space","space",1988665002,null),new cljs.core.Symbol(null,"p__651182","p__651182",1400135981,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"compatibilities","compatibilities",289068503,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Symbol(null,"meta651199","meta651199",485390743,null)], null);
});})(map__651192,map__651192__$1,state,map__651193,map__651193__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__651194,map__651194__$1,current_tool,msgs,pz))
;

dynomics.space.ui.t_dynomics$space$ui651198.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui651198.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui651198";

dynomics.space.ui.t_dynomics$space$ui651198.cljs$lang$ctorPrWriter = ((function (map__651192,map__651192__$1,state,map__651193,map__651193__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__651194,map__651194__$1,current_tool,msgs,pz){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.space.ui/t_dynomics$space$ui651198");
});})(map__651192,map__651192__$1,state,map__651193,map__651193__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__651194,map__651194__$1,current_tool,msgs,pz))
;

dynomics.space.ui.__GT_t_dynomics$space$ui651198 = ((function (map__651192,map__651192__$1,state,map__651193,map__651193__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__651194,map__651194__$1,current_tool,msgs,pz){
return (function dynomics$space$ui$make_space_component_$___GT_t_dynomics$space$ui651198(map__651194__$2,selected_nodes__$1,map__651192__$2,current_tool__$1,edges__$1,pz__$1,map__651193__$2,make_space_component__$1,space__$1,p__651182__$1,node_scale__$1,regions__$1,state__$1,compatibilities__$1,msgs__$1,nodes__$1,graph__$1,cf__$1,meta651199){
return (new dynomics.space.ui.t_dynomics$space$ui651198(map__651194__$2,selected_nodes__$1,map__651192__$2,current_tool__$1,edges__$1,pz__$1,map__651193__$2,make_space_component__$1,space__$1,p__651182__$1,node_scale__$1,regions__$1,state__$1,compatibilities__$1,msgs__$1,nodes__$1,graph__$1,cf__$1,meta651199));
});})(map__651192,map__651192__$1,state,map__651193,map__651193__$1,space,nodes,edges,selected_nodes,regions,compatibilities,graph,node_scale,cf,map__651194,map__651194__$1,current_tool,msgs,pz))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui651198(map__651194__$1,selected_nodes,map__651192__$1,current_tool,edges,pz,map__651193__$1,dynomics$space$ui$make_space_component,space,p__651182,node_scale,regions,state,compatibilities,msgs,nodes,graph,cf,null));
});
/**
 * Returns a component for offscreen rendering
 */
dynomics.space.ui.make_prerender_component = (function dynomics$space$ui$make_prerender_component(p__651201){
var map__651209 = p__651201;
var map__651209__$1 = ((((!((map__651209 == null)))?((((map__651209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__651209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__651209):map__651209);
var state = map__651209__$1;
var map__651210 = cljs.core.get.call(null,map__651209__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__651210__$1 = ((((!((map__651210 == null)))?((((map__651210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__651210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__651210):map__651210);
var space = map__651210__$1;
var nodes = cljs.core.get.call(null,map__651210__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__651210__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var selected_nodes = cljs.core.get.call(null,map__651210__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var regions = cljs.core.get.call(null,map__651210__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var node_scale = cljs.core.get.call(null,map__651210__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var cf = cljs.core.get.call(null,map__651209__$1,new cljs.core.Keyword(null,"cf","cf",1480736310));
if(typeof dynomics.space.ui.t_dynomics$space$ui651213 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui651213 = (function (selected_nodes,p__651201,make_prerender_component,edges,space,map__651210,node_scale,regions,state,map__651209,nodes,cf,meta651214){
this.selected_nodes = selected_nodes;
this.p__651201 = p__651201;
this.make_prerender_component = make_prerender_component;
this.edges = edges;
this.space = space;
this.map__651210 = map__651210;
this.node_scale = node_scale;
this.regions = regions;
this.state = state;
this.map__651209 = map__651209;
this.nodes = nodes;
this.cf = cf;
this.meta651214 = meta651214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui651213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__651209,map__651209__$1,state,map__651210,map__651210__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (_651215,meta651214__$1){
var self__ = this;
var _651215__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui651213(self__.selected_nodes,self__.p__651201,self__.make_prerender_component,self__.edges,self__.space,self__.map__651210,self__.node_scale,self__.regions,self__.state,self__.map__651209,self__.nodes,self__.cf,meta651214__$1));
});})(map__651209,map__651209__$1,state,map__651210,map__651210__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.t_dynomics$space$ui651213.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__651209,map__651209__$1,state,map__651210,map__651210__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (_651215){
var self__ = this;
var _651215__$1 = this;
return self__.meta651214;
});})(map__651209,map__651209__$1,state,map__651210,map__651210__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.t_dynomics$space$ui651213.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui651213.prototype.om$core$IRender$render$arity$1 = ((function (map__651209,map__651209__$1,state,map__651210,map__651210__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (this__32689__auto__){
var self__ = this;
var this__32689__auto____$1 = this;
return om.dom.div.call(null,{"className": "prerender_component", "id": "prerender_component_all"},om.dom.canvas.call(null,{"id": "prerender_canvas_all", "width": (64), "height": (64)}),om.dom.svg.call(null,{"zoomAndPan": false, "preserveAspectRatio": "xMidYMin", "width": "100%", "shape-rendering": "crispEdges", "xmlns": "http://www.w3.org/2000/svg", "className": "dynomics_space_svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "id": "prerender_svg_all", "viewBox": "-1 -1 3 3", "height": "100%"},dynomics.space.ui.make_type_icon.call(null,(1))));
});})(map__651209,map__651209__$1,state,map__651210,map__651210__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.t_dynomics$space$ui651213.getBasis = ((function (map__651209,map__651209__$1,state,map__651210,map__651210__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"p__651201","p__651201",1397877955,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-prerender-component","make-prerender-component",-630291485,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Keyword(null,"cf","cf",1480736310),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for offscreen rendering"], null)),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"space","space",1988665002,null),new cljs.core.Symbol(null,"map__651210","map__651210",-750506006,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__651209","map__651209",-64466087,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Symbol(null,"meta651214","meta651214",1204898777,null)], null);
});})(map__651209,map__651209__$1,state,map__651210,map__651210__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.t_dynomics$space$ui651213.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui651213.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui651213";

dynomics.space.ui.t_dynomics$space$ui651213.cljs$lang$ctorPrWriter = ((function (map__651209,map__651209__$1,state,map__651210,map__651210__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.space.ui/t_dynomics$space$ui651213");
});})(map__651209,map__651209__$1,state,map__651210,map__651210__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

dynomics.space.ui.__GT_t_dynomics$space$ui651213 = ((function (map__651209,map__651209__$1,state,map__651210,map__651210__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf){
return (function dynomics$space$ui$make_prerender_component_$___GT_t_dynomics$space$ui651213(selected_nodes__$1,p__651201__$1,make_prerender_component__$1,edges__$1,space__$1,map__651210__$2,node_scale__$1,regions__$1,state__$1,map__651209__$2,nodes__$1,cf__$1,meta651214){
return (new dynomics.space.ui.t_dynomics$space$ui651213(selected_nodes__$1,p__651201__$1,make_prerender_component__$1,edges__$1,space__$1,map__651210__$2,node_scale__$1,regions__$1,state__$1,map__651209__$2,nodes__$1,cf__$1,meta651214));
});})(map__651209,map__651209__$1,state,map__651210,map__651210__$1,space,nodes,edges,selected_nodes,regions,node_scale,cf))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui651213(selected_nodes,p__651201,dynomics$space$ui$make_prerender_component,edges,space,map__651210__$1,node_scale,regions,state,map__651209__$1,nodes,cf,null));
});

//# sourceMappingURL=ui.js.map