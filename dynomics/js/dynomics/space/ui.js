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
var args103895 = [];
var len__36461__auto___103898 = arguments.length;
var i__36462__auto___103899 = (0);
while(true){
if((i__36462__auto___103899 < len__36461__auto___103898)){
args103895.push((arguments[i__36462__auto___103899]));

var G__103900 = (i__36462__auto___103899 + (1));
i__36462__auto___103899 = G__103900;
continue;
} else {
}
break;
}

var G__103897 = args103895.length;
switch (G__103897) {
case 1:
return dynomics.space.ui.convert_coords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.ui.convert_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args103895.length)].join('')));

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
var args103902 = [];
var len__36461__auto___103919 = arguments.length;
var i__36462__auto___103920 = (0);
while(true){
if((i__36462__auto___103920 < len__36461__auto___103919)){
args103902.push((arguments[i__36462__auto___103920]));

var G__103921 = (i__36462__auto___103920 + (1));
i__36462__auto___103920 = G__103921;
continue;
} else {
}
break;
}

var G__103904 = args103902.length;
switch (G__103904) {
case 0:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return dynomics.space.ui.render_to_image.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args103902.length)].join('')));

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
var seq__103905_103923 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni1.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
)),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,((function (up,svg,svgp,canvas,ccss,ni1,ni2){
return (function (){
return ni2.nextNode();
});})(up,svg,svgp,canvas,ccss,ni1,ni2))
))));
var chunk__103906_103924 = null;
var count__103907_103925 = (0);
var i__103908_103926 = (0);
while(true){
if((i__103908_103926 < count__103907_103925)){
var vec__103909_103927 = cljs.core._nth.call(null,chunk__103906_103924,i__103908_103926);
var i_103928 = cljs.core.nth.call(null,vec__103909_103927,(0),null);
var j_103929 = cljs.core.nth.call(null,vec__103909_103927,(1),null);
j_103929.removeAttribute("id");

j_103929.removeAttribute("class");

j_103929.removeAttribute("data-reactid");

var ccss_103930__$1 = window.getComputedStyle(i_103928);
var seq__103910_103931 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_103930__$1.length));
var chunk__103911_103932 = null;
var count__103912_103933 = (0);
var i__103913_103934 = (0);
while(true){
if((i__103913_103934 < count__103912_103933)){
var is_103935 = cljs.core._nth.call(null,chunk__103911_103932,i__103913_103934);
var p_103936 = ccss_103930__$1.item(is_103935);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_103936)))){
j_103929.style.setProperty(p_103936,ccss_103930__$1.getPropertyValue(p_103936));
} else {
}

var G__103937 = seq__103910_103931;
var G__103938 = chunk__103911_103932;
var G__103939 = count__103912_103933;
var G__103940 = (i__103913_103934 + (1));
seq__103910_103931 = G__103937;
chunk__103911_103932 = G__103938;
count__103912_103933 = G__103939;
i__103913_103934 = G__103940;
continue;
} else {
var temp__4657__auto___103941 = cljs.core.seq.call(null,seq__103910_103931);
if(temp__4657__auto___103941){
var seq__103910_103942__$1 = temp__4657__auto___103941;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__103910_103942__$1)){
var c__36203__auto___103943 = cljs.core.chunk_first.call(null,seq__103910_103942__$1);
var G__103944 = cljs.core.chunk_rest.call(null,seq__103910_103942__$1);
var G__103945 = c__36203__auto___103943;
var G__103946 = cljs.core.count.call(null,c__36203__auto___103943);
var G__103947 = (0);
seq__103910_103931 = G__103944;
chunk__103911_103932 = G__103945;
count__103912_103933 = G__103946;
i__103913_103934 = G__103947;
continue;
} else {
var is_103948 = cljs.core.first.call(null,seq__103910_103942__$1);
var p_103949 = ccss_103930__$1.item(is_103948);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_103949)))){
j_103929.style.setProperty(p_103949,ccss_103930__$1.getPropertyValue(p_103949));
} else {
}

var G__103950 = cljs.core.next.call(null,seq__103910_103942__$1);
var G__103951 = null;
var G__103952 = (0);
var G__103953 = (0);
seq__103910_103931 = G__103950;
chunk__103911_103932 = G__103951;
count__103912_103933 = G__103952;
i__103913_103934 = G__103953;
continue;
}
} else {
}
}
break;
}

var G__103954 = seq__103905_103923;
var G__103955 = chunk__103906_103924;
var G__103956 = count__103907_103925;
var G__103957 = (i__103908_103926 + (1));
seq__103905_103923 = G__103954;
chunk__103906_103924 = G__103955;
count__103907_103925 = G__103956;
i__103908_103926 = G__103957;
continue;
} else {
var temp__4657__auto___103958 = cljs.core.seq.call(null,seq__103905_103923);
if(temp__4657__auto___103958){
var seq__103905_103959__$1 = temp__4657__auto___103958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__103905_103959__$1)){
var c__36203__auto___103960 = cljs.core.chunk_first.call(null,seq__103905_103959__$1);
var G__103961 = cljs.core.chunk_rest.call(null,seq__103905_103959__$1);
var G__103962 = c__36203__auto___103960;
var G__103963 = cljs.core.count.call(null,c__36203__auto___103960);
var G__103964 = (0);
seq__103905_103923 = G__103961;
chunk__103906_103924 = G__103962;
count__103907_103925 = G__103963;
i__103908_103926 = G__103964;
continue;
} else {
var vec__103914_103965 = cljs.core.first.call(null,seq__103905_103959__$1);
var i_103966 = cljs.core.nth.call(null,vec__103914_103965,(0),null);
var j_103967 = cljs.core.nth.call(null,vec__103914_103965,(1),null);
j_103967.removeAttribute("id");

j_103967.removeAttribute("class");

j_103967.removeAttribute("data-reactid");

var ccss_103968__$1 = window.getComputedStyle(i_103966);
var seq__103915_103969 = cljs.core.seq.call(null,cljs.core.range.call(null,ccss_103968__$1.length));
var chunk__103916_103970 = null;
var count__103917_103971 = (0);
var i__103918_103972 = (0);
while(true){
if((i__103918_103972 < count__103917_103971)){
var is_103973 = cljs.core._nth.call(null,chunk__103916_103970,i__103918_103972);
var p_103974 = ccss_103968__$1.item(is_103973);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_103974)))){
j_103967.style.setProperty(p_103974,ccss_103968__$1.getPropertyValue(p_103974));
} else {
}

var G__103975 = seq__103915_103969;
var G__103976 = chunk__103916_103970;
var G__103977 = count__103917_103971;
var G__103978 = (i__103918_103972 + (1));
seq__103915_103969 = G__103975;
chunk__103916_103970 = G__103976;
count__103917_103971 = G__103977;
i__103918_103972 = G__103978;
continue;
} else {
var temp__4657__auto___103979__$1 = cljs.core.seq.call(null,seq__103915_103969);
if(temp__4657__auto___103979__$1){
var seq__103915_103980__$1 = temp__4657__auto___103979__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__103915_103980__$1)){
var c__36203__auto___103981 = cljs.core.chunk_first.call(null,seq__103915_103980__$1);
var G__103982 = cljs.core.chunk_rest.call(null,seq__103915_103980__$1);
var G__103983 = c__36203__auto___103981;
var G__103984 = cljs.core.count.call(null,c__36203__auto___103981);
var G__103985 = (0);
seq__103915_103969 = G__103982;
chunk__103916_103970 = G__103983;
count__103917_103971 = G__103984;
i__103918_103972 = G__103985;
continue;
} else {
var is_103986 = cljs.core.first.call(null,seq__103915_103980__$1);
var p_103987 = ccss_103968__$1.item(is_103986);
if(cljs.core.truth_(up.call(null,cljs.core.keyword.call(null,p_103987)))){
j_103967.style.setProperty(p_103987,ccss_103968__$1.getPropertyValue(p_103987));
} else {
}

var G__103988 = cljs.core.next.call(null,seq__103915_103980__$1);
var G__103989 = null;
var G__103990 = (0);
var G__103991 = (0);
seq__103915_103969 = G__103988;
chunk__103916_103970 = G__103989;
count__103917_103971 = G__103990;
i__103918_103972 = G__103991;
continue;
}
} else {
}
}
break;
}

var G__103992 = cljs.core.next.call(null,seq__103905_103959__$1);
var G__103993 = null;
var G__103994 = (0);
var G__103995 = (0);
seq__103905_103923 = G__103992;
chunk__103906_103924 = G__103993;
count__103907_103925 = G__103994;
i__103908_103926 = G__103995;
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
var vec__103998 = cljs.core.subvec.call(null,trajectory,((cljs.core.count.call(null,trajectory) - (1)) - (1)),cljs.core.count.call(null,trajectory));
var p1 = cljs.core.nth.call(null,vec__103998,(0),null);
var p2 = cljs.core.nth.call(null,vec__103998,(1),null);
var v = cljs.core.map.call(null,cljs.core._,p1,p2);
var a = (dynomics.space.core.r2d * (dynomics.space.core.PI2 - dynomics.space.core.angle.call(null,v)));
var a1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);
var a2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
var a3 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null);
var vec__103999 = cljs.core.map.call(null,cljs.core._PLUS_,p2,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,0.505),v));
var ox = cljs.core.nth.call(null,vec__103999,(0),null);
var oy = cljs.core.nth.call(null,vec__103999,(1),null);
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
}),dynomics.space.core.midpoints.call(null,trajectory),cljs.core.map.call(null,(function (p__104002){
var vec__104003 = p__104002;
var p1 = cljs.core.nth.call(null,vec__104003,(0),null);
var p2 = cljs.core.nth.call(null,vec__104003,(1),null);
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
dynomics.space.ui.make_icon_pattern = (function dynomics$space$ui$make_icon_pattern(type_id){
return React.createElement("pattern",{"id": [cljs.core.str("node_type_pattern_"),cljs.core.str(type_id)].join(''), "patternUnits": "userSpaceOnUse", "x": (0), "y": (0), "width": (1), "height": (1), "viewBox": "-1 -1 2 2"},sablono.interpreter.interpret.call(null,dynomics.space.ui.make_friendly_type_icon.call(null,type_id)));
});
dynomics.space.ui.make_prerender_icon = (function dynomics$space$ui$make_prerender_icon(kind,iconfn,width,height,id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("prerender_canvas_"),cljs.core.str(cljs.core.name.call(null,kind)),cljs.core.str("_"),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classsName","classsName",2107715185),"node_type_selector",new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("prerender_svg_box_"),cljs.core.str(cljs.core.name.call(null,kind)),cljs.core.str("_"),cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"zoomAndPan","zoomAndPan",-449580731),new cljs.core.Keyword(null,"preserveAspectRatio","preserveAspectRatio",1832131817),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"shape-rendering","shape-rendering",955846315),new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),new cljs.core.Keyword(null,"classsName","classsName",2107715185),new cljs.core.Keyword(null,"xmlns:xlink","xmlns:xlink",-316591054),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),new cljs.core.Keyword(null,"height","height",1025178622)],[false,"xMidYMin",[cljs.core.str(width),cljs.core.str("px")].join(''),"crispEdges","http://www.w3.org/2000/svg","space_svg","http://www.w3.org/1999/xlink",[cljs.core.str("prerender_svg_"),cljs.core.str(cljs.core.name.call(null,kind)),cljs.core.str("_"),cljs.core.str(id)].join(''),"-1 -1 2 2",[cljs.core.str(height),cljs.core.str("px")].join('')]),iconfn.call(null,id)], null)], null)], null);
});
dynomics.space.ui.make_paths = (function dynomics$space$ui$make_paths(p__104004){
var map__104011 = p__104004;
var map__104011__$1 = ((((!((map__104011 == null)))?((((map__104011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104011):map__104011);
var space = map__104011__$1;
var nodes = cljs.core.get.call(null,map__104011__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__104011__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var regions = cljs.core.get.call(null,map__104011__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var node_scale = cljs.core.get.call(null,map__104011__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
cljs.core.println.call(null,"Regions ",regions);

return cljs.core.map.call(null,((function (map__104011,map__104011__$1,space,nodes,edges,regions,node_scale){
return (function (region){
return cljs.core.reduce.call(null,((function (map__104011,map__104011__$1,space,nodes,edges,regions,node_scale){
return (function (beziers,connection){
return cljs.core.conj.call(null,beziers,cljs.core.map.call(null,((function (map__104011,map__104011__$1,space,nodes,edges,regions,node_scale){
return (function (p__104013){
var vec__104014 = p__104013;
var nid1 = cljs.core.nth.call(null,vec__104014,(0),null);
var cid1 = cljs.core.nth.call(null,vec__104014,(1),null);
var vec__104015 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx1 = cljs.core.nth.call(null,vec__104015,(0),null);
var ny1 = cljs.core.nth.call(null,vec__104015,(1),null);
var vec__104016 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx1 = cljs.core.nth.call(null,vec__104016,(0),null);
var cy1 = cljs.core.nth.call(null,vec__104016,(1),null);
return dynomics.ui.svg.make_bezier_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx1 + (node_scale * cx1)),(ny1 + (node_scale * cy1))], null)], null));
});})(map__104011,map__104011__$1,space,nodes,edges,regions,node_scale))
,cljs.core.map.call(null,dynomics.space.core.simplify_connection,connection)));
});})(map__104011,map__104011__$1,space,nodes,edges,regions,node_scale))
,cljs.core.PersistentVector.EMPTY,region);
});})(map__104011,map__104011__$1,space,nodes,edges,regions,node_scale))
,regions);
});
/**
 * Returns a palette of tools
 */
dynomics.space.ui.make_tools_palette_component = (function dynomics$space$ui$make_tools_palette_component(p__104017){
var map__104024 = p__104017;
var map__104024__$1 = ((((!((map__104024 == null)))?((((map__104024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104024):map__104024);
var state = map__104024__$1;
var current_tool = cljs.core.get.call(null,map__104024__$1,new cljs.core.Keyword(null,"current-tool","current-tool",-941025603));
var tools = cljs.core.get.call(null,map__104024__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
var tools_order = cljs.core.get.call(null,map__104024__$1,new cljs.core.Keyword(null,"tools-order","tools-order",-615877648));
var state_updates = cljs.core.get.call(null,map__104024__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
return om.dom.div.call(null,{"className": "tool_things"},om.dom.div.call(null,{"className": "tool_selectors"},cljs.core.map.call(null,((function (map__104024,map__104024__$1,state,current_tool,tools,tools_order,state_updates){
return (function (p__104026){
var vec__104027 = p__104026;
var tk = cljs.core.nth.call(null,vec__104027,(0),null);
var map__104028 = cljs.core.nth.call(null,vec__104027,(1),null);
var map__104028__$1 = ((((!((map__104028 == null)))?((((map__104028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104028):map__104028);
var description = cljs.core.get.call(null,map__104028__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var icon = cljs.core.get.call(null,map__104028__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var keybinding = cljs.core.get.call(null,map__104028__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
return om.dom.div.call(null,{"className": [cljs.core.str("tool_selector "),cljs.core.str(((cljs.core._EQ_.call(null,tk,current_tool))?"tool_selected":null))].join(''), "title": [cljs.core.str(description),cljs.core.str(" ( "),cljs.core.str((((keybinding instanceof cljs.core.Keyword))?cljs.core.name.call(null,keybinding):keybinding)),cljs.core.str(" )")].join(''), "onMouseDown": ((function (vec__104027,tk,map__104028,map__104028__$1,description,icon,keybinding,map__104024,map__104024__$1,state,current_tool,tools,tools_order,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__104027,tk,map__104028,map__104028__$1,description,icon,keybinding,map__104024,map__104024__$1,state,current_tool,tools,tools_order,state_updates){
return (function (s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),tk);
});})(vec__104027,tk,map__104028,map__104028__$1,description,icon,keybinding,map__104024,map__104024__$1,state,current_tool,tools,tools_order,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tool","tool",-1298696470),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null));

return null;
});})(vec__104027,tk,map__104028,map__104028__$1,description,icon,keybinding,map__104024,map__104024__$1,state,current_tool,tools,tools_order,state_updates))
},icon);
});})(map__104024,map__104024__$1,state,current_tool,tools,tools_order,state_updates))
,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,tools),tools_order))),om.dom.div.call(null,{"className": "current_tool_text", "title": cljs.core.get_in.call(null,tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tool,new cljs.core.Keyword(null,"description","description",-1428560544)], null))},cljs.core.get_in.call(null,tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tool,new cljs.core.Keyword(null,"name","name",1843675177)], null))));
});
dynomics.space.ui.make_node_types_cached_component = (function dynomics$space$ui$make_node_types_cached_component(kind,render_fn){

return (function (p__104036,owner){
var map__104037 = p__104036;
var map__104037__$1 = ((((!((map__104037 == null)))?((((map__104037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104037):map__104037);
var id = cljs.core.get.call(null,map__104037__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var state_updates = cljs.core.get.call(null,map__104037__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var icon = cljs.core.get.call(null,map__104037__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
if(typeof dynomics.space.ui.t_dynomics$space$ui104039 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui104039 = (function (make_node_types_cached_component,kind,render_fn,p__104036,owner,map__104037,id,state_updates,icon,meta104040){
this.make_node_types_cached_component = make_node_types_cached_component;
this.kind = kind;
this.render_fn = render_fn;
this.p__104036 = p__104036;
this.owner = owner;
this.map__104037 = map__104037;
this.id = id;
this.state_updates = state_updates;
this.icon = icon;
this.meta104040 = meta104040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui104039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__104037,map__104037__$1,id,state_updates,icon){
return (function (_104041,meta104040__$1){
var self__ = this;
var _104041__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui104039(self__.make_node_types_cached_component,self__.kind,self__.render_fn,self__.p__104036,self__.owner,self__.map__104037,self__.id,self__.state_updates,self__.icon,meta104040__$1));
});})(map__104037,map__104037__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui104039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__104037,map__104037__$1,id,state_updates,icon){
return (function (_104041){
var self__ = this;
var _104041__$1 = this;
return self__.meta104040;
});})(map__104037,map__104037__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui104039.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui104039.prototype.om$core$IRender$render$arity$1 = ((function (map__104037,map__104037__$1,id,state_updates,icon){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.icon)){
return om.dom.img.call(null,{"width": (32), "height": (32), "src": self__.icon, "draggable": false});
} else {
return sablono.interpreter.interpret.call(null,self__.render_fn.call(null,self__.id));
}
});})(map__104037,map__104037__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui104039.prototype.om$core$IDidMount$ = true;

dynomics.space.ui.t_dynomics$space$ui104039.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__104037,map__104037__$1,id,state_updates,icon){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,self__.icon)){
var dataurl = dynomics.space.ui.render_to_image.call(null,self__.kind,self__.id);
return cljs.core.async.put_BANG_.call(null,self__.state_updates,((function (dataurl,___$1,map__104037,map__104037__$1,id,state_updates,icon){
return (function (s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (dataurl,___$1,map__104037,map__104037__$1,id,state_updates,icon){
return (function (s__$1){
return cljs.core.assoc_in.call(null,s__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"icons","icons",-297140977),self__.kind,self__.id], null),dataurl);
});})(dataurl,___$1,map__104037,map__104037__$1,id,state_updates,icon))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"make","make",-1284043325),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null);
});})(dataurl,___$1,map__104037,map__104037__$1,id,state_updates,icon))
);
} else {
return null;
}
});})(map__104037,map__104037__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui104039.getBasis = ((function (map__104037,map__104037__$1,id,state_updates,icon){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-cached-component","make-node-types-cached-component",-655003199,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"render-fn","render-fn",2039328045,null)], null)))], null)),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"render-fn","render-fn",2039328045,null),new cljs.core.Symbol(null,"p__104036","p__104036",-1665486896,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__104037","map__104037",-974836551,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"icon","icon",-974829228,null),new cljs.core.Symbol(null,"meta104040","meta104040",1437059576,null)], null);
});})(map__104037,map__104037__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui104039.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui104039.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui104039";

dynomics.space.ui.t_dynomics$space$ui104039.cljs$lang$ctorPrWriter = ((function (map__104037,map__104037__$1,id,state_updates,icon){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.space.ui/t_dynomics$space$ui104039");
});})(map__104037,map__104037__$1,id,state_updates,icon))
;

dynomics.space.ui.__GT_t_dynomics$space$ui104039 = ((function (map__104037,map__104037__$1,id,state_updates,icon){
return (function dynomics$space$ui$make_node_types_cached_component_$___GT_t_dynomics$space$ui104039(make_node_types_cached_component__$1,kind__$1,render_fn__$1,p__104036__$1,owner__$1,map__104037__$2,id__$1,state_updates__$1,icon__$1,meta104040){
return (new dynomics.space.ui.t_dynomics$space$ui104039(make_node_types_cached_component__$1,kind__$1,render_fn__$1,p__104036__$1,owner__$1,map__104037__$2,id__$1,state_updates__$1,icon__$1,meta104040));
});})(map__104037,map__104037__$1,id,state_updates,icon))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui104039(dynomics$space$ui$make_node_types_cached_component,kind,render_fn,p__104036,owner,map__104037__$1,id,state_updates,icon,cljs.core.PersistentArrayMap.EMPTY));
});
});
dynomics.space.ui.make_node_types_cached_image_component = (function dynomics$space$ui$make_node_types_cached_image_component(kind,render_fn){

return (function (p__104048,owner){
var map__104049 = p__104048;
var map__104049__$1 = ((((!((map__104049 == null)))?((((map__104049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104049):map__104049);
var id = cljs.core.get.call(null,map__104049__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var state_updates = cljs.core.get.call(null,map__104049__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var icon = cljs.core.get.call(null,map__104049__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
if(typeof dynomics.space.ui.t_dynomics$space$ui104051 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui104051 = (function (make_node_types_cached_image_component,kind,render_fn,p__104048,owner,map__104049,id,state_updates,icon,meta104052){
this.make_node_types_cached_image_component = make_node_types_cached_image_component;
this.kind = kind;
this.render_fn = render_fn;
this.p__104048 = p__104048;
this.owner = owner;
this.map__104049 = map__104049;
this.id = id;
this.state_updates = state_updates;
this.icon = icon;
this.meta104052 = meta104052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui104051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__104049,map__104049__$1,id,state_updates,icon){
return (function (_104053,meta104052__$1){
var self__ = this;
var _104053__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui104051(self__.make_node_types_cached_image_component,self__.kind,self__.render_fn,self__.p__104048,self__.owner,self__.map__104049,self__.id,self__.state_updates,self__.icon,meta104052__$1));
});})(map__104049,map__104049__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui104051.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__104049,map__104049__$1,id,state_updates,icon){
return (function (_104053){
var self__ = this;
var _104053__$1 = this;
return self__.meta104052;
});})(map__104049,map__104049__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui104051.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui104051.prototype.om$core$IRender$render$arity$1 = ((function (map__104049,map__104049__$1,id,state_updates,icon){
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
});})(map__104049,map__104049__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui104051.prototype.om$core$IDidMount$ = true;

dynomics.space.ui.t_dynomics$space$ui104051.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__104049,map__104049__$1,id,state_updates,icon){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,self__.icon)){
var dataurl = dynomics.space.ui.render_to_image.call(null,self__.kind,self__.id);
return cljs.core.async.put_BANG_.call(null,self__.state_updates,((function (dataurl,this$__$1,map__104049,map__104049__$1,id,state_updates,icon){
return (function (s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (dataurl,this$__$1,map__104049,map__104049__$1,id,state_updates,icon){
return (function (s__$1){
return cljs.core.assoc_in.call(null,s__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"icons","icons",-297140977),self__.kind,self__.id], null),dataurl);
});})(dataurl,this$__$1,map__104049,map__104049__$1,id,state_updates,icon))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"make","make",-1284043325),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null);
});})(dataurl,this$__$1,map__104049,map__104049__$1,id,state_updates,icon))
);
} else {
return null;
}
});})(map__104049,map__104049__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui104051.getBasis = ((function (map__104049,map__104049__$1,id,state_updates,icon){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-cached-image-component","make-node-types-cached-image-component",-1391243851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"render-fn","render-fn",2039328045,null)], null)))], null)),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"render-fn","render-fn",2039328045,null),new cljs.core.Symbol(null,"p__104048","p__104048",-1450532198,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__104049","map__104049",-1770235773,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"icon","icon",-974829228,null),new cljs.core.Symbol(null,"meta104052","meta104052",38949241,null)], null);
});})(map__104049,map__104049__$1,id,state_updates,icon))
;

dynomics.space.ui.t_dynomics$space$ui104051.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui104051.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui104051";

dynomics.space.ui.t_dynomics$space$ui104051.cljs$lang$ctorPrWriter = ((function (map__104049,map__104049__$1,id,state_updates,icon){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.space.ui/t_dynomics$space$ui104051");
});})(map__104049,map__104049__$1,id,state_updates,icon))
;

dynomics.space.ui.__GT_t_dynomics$space$ui104051 = ((function (map__104049,map__104049__$1,id,state_updates,icon){
return (function dynomics$space$ui$make_node_types_cached_image_component_$___GT_t_dynomics$space$ui104051(make_node_types_cached_image_component__$1,kind__$1,render_fn__$1,p__104048__$1,owner__$1,map__104049__$2,id__$1,state_updates__$1,icon__$1,meta104052){
return (new dynomics.space.ui.t_dynomics$space$ui104051(make_node_types_cached_image_component__$1,kind__$1,render_fn__$1,p__104048__$1,owner__$1,map__104049__$2,id__$1,state_updates__$1,icon__$1,meta104052));
});})(map__104049,map__104049__$1,id,state_updates,icon))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui104051(dynomics$space$ui$make_node_types_cached_image_component,kind,render_fn,p__104048,owner,map__104049__$1,id,state_updates,icon,cljs.core.PersistentArrayMap.EMPTY));
});
});
dynomics.space.ui.renderfn = (function dynomics$space$ui$renderfn(kind){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"friendly","friendly",281770577),cljs.core.partial.call(null,dynomics.space.ui.make_prerender_icon,kind,dynomics.space.ui.make_friendly_type_icon,(64),(64)),new cljs.core.Keyword(null,"simple","simple",-581868663),cljs.core.partial.call(null,dynomics.space.ui.make_prerender_icon,kind,dynomics.space.ui.make_simple_type_icon,(64),(64))], null).call(null,kind);
});
/**
 * Returns a component for the node types palette
 */
dynomics.space.ui.make_node_types_palette_component = (function dynomics$space$ui$make_node_types_palette_component(p__104054){
var map__104063 = p__104054;
var map__104063__$1 = ((((!((map__104063 == null)))?((((map__104063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104063):map__104063);
var state = map__104063__$1;
var state_updates = cljs.core.get.call(null,map__104063__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__104063__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var icons = cljs.core.get.call(null,map__104063__$1,new cljs.core.Keyword(null,"icons","icons",-297140977));
if(typeof dynomics.space.ui.t_dynomics$space$ui104065 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui104065 = (function (make_node_types_palette_component,p__104054,map__104063,state,state_updates,msgs,icons,meta104066){
this.make_node_types_palette_component = make_node_types_palette_component;
this.p__104054 = p__104054;
this.map__104063 = map__104063;
this.state = state;
this.state_updates = state_updates;
this.msgs = msgs;
this.icons = icons;
this.meta104066 = meta104066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui104065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__104063,map__104063__$1,state,state_updates,msgs,icons){
return (function (_104067,meta104066__$1){
var self__ = this;
var _104067__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui104065(self__.make_node_types_palette_component,self__.p__104054,self__.map__104063,self__.state,self__.state_updates,self__.msgs,self__.icons,meta104066__$1));
});})(map__104063,map__104063__$1,state,state_updates,msgs,icons))
;

dynomics.space.ui.t_dynomics$space$ui104065.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__104063,map__104063__$1,state,state_updates,msgs,icons){
return (function (_104067){
var self__ = this;
var _104067__$1 = this;
return self__.meta104066;
});})(map__104063,map__104063__$1,state,state_updates,msgs,icons))
;

dynomics.space.ui.t_dynomics$space$ui104065.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui104065.prototype.om$core$IRender$render$arity$1 = ((function (map__104063,map__104063__$1,state,state_updates,msgs,icons){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"className": [cljs.core.str("node_types")].join('')},cljs.core.map.call(null,((function (this$__$1,map__104063,map__104063__$1,state,state_updates,msgs,icons){
return (function (p__104068){
var map__104069 = p__104068;
var map__104069__$1 = ((((!((map__104069 == null)))?((((map__104069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104069):map__104069);
var id = cljs.core.get.call(null,map__104069__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var stability = cljs.core.get.call(null,map__104069__$1,new cljs.core.Keyword(null,"stability","stability",1733225509));
var type = cljs.core.get.call(null,map__104069__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return om.dom.div.call(null,{"className": [cljs.core.str("node_type_selector")].join(''), "title": [cljs.core.str("Set selected nodes to "),cljs.core.str(id),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,stability)),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,type))].join(''), "draggable": false, "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)), "onMouseMove": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"node-type","node-type",129492462),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null))},om.core.build.call(null,dynomics.space.ui.make_node_types_cached_component.call(null,new cljs.core.Keyword(null,"simple","simple",-581868663),dynomics.space.ui.renderfn.call(null,new cljs.core.Keyword(null,"simple","simple",-581868663))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("ntp"),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),cljs.core.get_in.call(null,self__.icons,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),id], null)),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),self__.state_updates], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
});})(this$__$1,map__104063,map__104063__$1,state,state_updates,msgs,icons))
,cljs.core.vals.call(null,dynomics.space.core.node_types)));
});})(map__104063,map__104063__$1,state,state_updates,msgs,icons))
;

dynomics.space.ui.t_dynomics$space$ui104065.getBasis = ((function (map__104063,map__104063__$1,state,state_updates,msgs,icons){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-types-palette-component","make-node-types-palette-component",54407202,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"icons","icons",1343390550,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the node types palette"], null)),new cljs.core.Symbol(null,"p__104054","p__104054",2119264002,null),new cljs.core.Symbol(null,"map__104063","map__104063",1422368683,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"icons","icons",1343390550,null),new cljs.core.Symbol(null,"meta104066","meta104066",-1319040909,null)], null);
});})(map__104063,map__104063__$1,state,state_updates,msgs,icons))
;

dynomics.space.ui.t_dynomics$space$ui104065.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui104065.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui104065";

dynomics.space.ui.t_dynomics$space$ui104065.cljs$lang$ctorPrWriter = ((function (map__104063,map__104063__$1,state,state_updates,msgs,icons){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.space.ui/t_dynomics$space$ui104065");
});})(map__104063,map__104063__$1,state,state_updates,msgs,icons))
;

dynomics.space.ui.__GT_t_dynomics$space$ui104065 = ((function (map__104063,map__104063__$1,state,state_updates,msgs,icons){
return (function dynomics$space$ui$make_node_types_palette_component_$___GT_t_dynomics$space$ui104065(make_node_types_palette_component__$1,p__104054__$1,map__104063__$2,state__$1,state_updates__$1,msgs__$1,icons__$1,meta104066){
return (new dynomics.space.ui.t_dynomics$space$ui104065(make_node_types_palette_component__$1,p__104054__$1,map__104063__$2,state__$1,state_updates__$1,msgs__$1,icons__$1,meta104066));
});})(map__104063,map__104063__$1,state,state_updates,msgs,icons))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui104065(dynomics$space$ui$make_node_types_palette_component,p__104054,map__104063__$1,state,state_updates,msgs,icons,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a component for an edge
 */
dynomics.space.ui.make_edge_component = (function dynomics$space$ui$make_edge_component(p__104071){
var map__104083 = p__104071;
var map__104083__$1 = ((((!((map__104083 == null)))?((((map__104083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104083):map__104083);
var vec__104084 = cljs.core.get.call(null,map__104083__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__104085 = cljs.core.nth.call(null,vec__104084,(0),null);
var nid1 = cljs.core.nth.call(null,vec__104085,(0),null);
var nid2 = cljs.core.nth.call(null,vec__104085,(1),null);
var vec__104086 = cljs.core.nth.call(null,vec__104084,(1),null);
var nx1 = cljs.core.nth.call(null,vec__104086,(0),null);
var ny1 = cljs.core.nth.call(null,vec__104086,(1),null);
var vec__104087 = cljs.core.nth.call(null,vec__104084,(2),null);
var nx2 = cljs.core.nth.call(null,vec__104087,(0),null);
var ny2 = cljs.core.nth.call(null,vec__104087,(1),null);
var vec__104088 = cljs.core.nth.call(null,vec__104084,(3),null);
var cx1 = cljs.core.nth.call(null,vec__104088,(0),null);
var cx2 = cljs.core.nth.call(null,vec__104088,(1),null);
var vec__104089 = cljs.core.nth.call(null,vec__104084,(4),null);
var cy1 = cljs.core.nth.call(null,vec__104089,(0),null);
var cy2 = cljs.core.nth.call(null,vec__104089,(1),null);
var compatible_QMARK_ = cljs.core.get.call(null,map__104083__$1,new cljs.core.Keyword(null,"compatible?","compatible?",923422575));
var node_scale = cljs.core.get.call(null,map__104083__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
if(typeof dynomics.space.ui.t_dynomics$space$ui104091 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui104091 = (function (nx1,cx1,vec__104085,ny2,vec__104088,make_edge_component,vec__104087,cy2,nx2,vec__104086,cy1,node_scale,ny1,cx2,vec__104084,vec__104089,compatible_QMARK_,p__104071,map__104083,nid2,nid1,meta104092){
this.nx1 = nx1;
this.cx1 = cx1;
this.vec__104085 = vec__104085;
this.ny2 = ny2;
this.vec__104088 = vec__104088;
this.make_edge_component = make_edge_component;
this.vec__104087 = vec__104087;
this.cy2 = cy2;
this.nx2 = nx2;
this.vec__104086 = vec__104086;
this.cy1 = cy1;
this.node_scale = node_scale;
this.ny1 = ny1;
this.cx2 = cx2;
this.vec__104084 = vec__104084;
this.vec__104089 = vec__104089;
this.compatible_QMARK_ = compatible_QMARK_;
this.p__104071 = p__104071;
this.map__104083 = map__104083;
this.nid2 = nid2;
this.nid1 = nid1;
this.meta104092 = meta104092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui104091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__104083,map__104083__$1,vec__104084,vec__104085,nid1,nid2,vec__104086,nx1,ny1,vec__104087,nx2,ny2,vec__104088,cx1,cx2,vec__104089,cy1,cy2,compatible_QMARK_,node_scale){
return (function (_104093,meta104092__$1){
var self__ = this;
var _104093__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui104091(self__.nx1,self__.cx1,self__.vec__104085,self__.ny2,self__.vec__104088,self__.make_edge_component,self__.vec__104087,self__.cy2,self__.nx2,self__.vec__104086,self__.cy1,self__.node_scale,self__.ny1,self__.cx2,self__.vec__104084,self__.vec__104089,self__.compatible_QMARK_,self__.p__104071,self__.map__104083,self__.nid2,self__.nid1,meta104092__$1));
});})(map__104083,map__104083__$1,vec__104084,vec__104085,nid1,nid2,vec__104086,nx1,ny1,vec__104087,nx2,ny2,vec__104088,cx1,cx2,vec__104089,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui104091.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__104083,map__104083__$1,vec__104084,vec__104085,nid1,nid2,vec__104086,nx1,ny1,vec__104087,nx2,ny2,vec__104088,cx1,cx2,vec__104089,cy1,cy2,compatible_QMARK_,node_scale){
return (function (_104093){
var self__ = this;
var _104093__$1 = this;
return self__.meta104092;
});})(map__104083,map__104083__$1,vec__104084,vec__104085,nid1,nid2,vec__104086,nx1,ny1,vec__104087,nx2,ny2,vec__104088,cx1,cx2,vec__104089,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui104091.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui104091.prototype.om$core$IRender$render$arity$1 = ((function (map__104083,map__104083__$1,vec__104084,vec__104085,nid1,nid2,vec__104086,nx1,ny1,vec__104087,nx2,ny2,vec__104088,cx1,cx2,vec__104089,cy1,cy2,compatible_QMARK_,node_scale){
return (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return om.dom.path.call(null,{"key": [cljs.core.str("edge_"),cljs.core.str(self__.nid1),cljs.core.str("_"),cljs.core.str(self__.nid2)].join(''), "className": [cljs.core.str("edge "),cljs.core.str((cljs.core.truth_(self__.compatible_QMARK_)?"compatible_edge":null))].join(''), "d": dynomics.ui.svg.to_svg_path.call(null,cljs.core.map.call(null,dynomics.ui.svg.make_bezier_point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx1,self__.ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.cx1,self__.cy1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nx2,self__.ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.cx2,self__.cy2], null)], null)], null)))});
});})(map__104083,map__104083__$1,vec__104084,vec__104085,nid1,nid2,vec__104086,nx1,ny1,vec__104087,nx2,ny2,vec__104088,cx1,cx2,vec__104089,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui104091.getBasis = ((function (map__104083,map__104083__$1,vec__104084,vec__104085,nid1,nid2,vec__104086,nx1,ny1,vec__104087,nx2,ny2,vec__104088,cx1,cx2,vec__104089,cy1,cy2,compatible_QMARK_,node_scale){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"vec__104085","vec__104085",643166532,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null),new cljs.core.Symbol(null,"vec__104088","vec__104088",-1247448123,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-edge-component","make-edge-component",-530385559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx1","nx1",678786784,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"ny2","ny2",-903408475,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx1","cx1",-778024764,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null)], null)], null),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Symbol(null,"compatible?","compatible?",-1731013194,null),new cljs.core.Keyword(null,"compatible?","compatible?",923422575),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511)], true, false)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for an edge"], null)),new cljs.core.Symbol(null,"vec__104087","vec__104087",1476472457,null),new cljs.core.Symbol(null,"cy2","cy2",-760307125,null),new cljs.core.Symbol(null,"nx2","nx2",2129091661,null),new cljs.core.Symbol(null,"vec__104086","vec__104086",2123975855,null),new cljs.core.Symbol(null,"cy1","cy1",-1518355761,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"ny1","ny1",-1297825487,null),new cljs.core.Symbol(null,"cx2","cx2",868312465,null),new cljs.core.Symbol(null,"vec__104084","vec__104084",-734004590,null),new cljs.core.Symbol(null,"vec__104089","vec__104089",-36806538,null),new cljs.core.Symbol(null,"compatible?","compatible?",-1731013194,null),new cljs.core.Symbol(null,"p__104071","p__104071",-1342202985,null),new cljs.core.Symbol(null,"map__104083","map__104083",-576506916,null),new cljs.core.Symbol(null,"nid2","nid2",-27012515,null),new cljs.core.Symbol(null,"nid1","nid1",689255262,null),new cljs.core.Symbol(null,"meta104092","meta104092",-279106710,null)], null);
});})(map__104083,map__104083__$1,vec__104084,vec__104085,nid1,nid2,vec__104086,nx1,ny1,vec__104087,nx2,ny2,vec__104088,cx1,cx2,vec__104089,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.t_dynomics$space$ui104091.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui104091.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui104091";

dynomics.space.ui.t_dynomics$space$ui104091.cljs$lang$ctorPrWriter = ((function (map__104083,map__104083__$1,vec__104084,vec__104085,nid1,nid2,vec__104086,nx1,ny1,vec__104087,nx2,ny2,vec__104088,cx1,cx2,vec__104089,cy1,cy2,compatible_QMARK_,node_scale){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.space.ui/t_dynomics$space$ui104091");
});})(map__104083,map__104083__$1,vec__104084,vec__104085,nid1,nid2,vec__104086,nx1,ny1,vec__104087,nx2,ny2,vec__104088,cx1,cx2,vec__104089,cy1,cy2,compatible_QMARK_,node_scale))
;

dynomics.space.ui.__GT_t_dynomics$space$ui104091 = ((function (map__104083,map__104083__$1,vec__104084,vec__104085,nid1,nid2,vec__104086,nx1,ny1,vec__104087,nx2,ny2,vec__104088,cx1,cx2,vec__104089,cy1,cy2,compatible_QMARK_,node_scale){
return (function dynomics$space$ui$make_edge_component_$___GT_t_dynomics$space$ui104091(nx1__$1,cx1__$1,vec__104085__$1,ny2__$1,vec__104088__$1,make_edge_component__$1,vec__104087__$1,cy2__$1,nx2__$1,vec__104086__$1,cy1__$1,node_scale__$1,ny1__$1,cx2__$1,vec__104084__$1,vec__104089__$1,compatible_QMARK___$1,p__104071__$1,map__104083__$2,nid2__$1,nid1__$1,meta104092){
return (new dynomics.space.ui.t_dynomics$space$ui104091(nx1__$1,cx1__$1,vec__104085__$1,ny2__$1,vec__104088__$1,make_edge_component__$1,vec__104087__$1,cy2__$1,nx2__$1,vec__104086__$1,cy1__$1,node_scale__$1,ny1__$1,cx2__$1,vec__104084__$1,vec__104089__$1,compatible_QMARK___$1,p__104071__$1,map__104083__$2,nid2__$1,nid1__$1,meta104092));
});})(map__104083,map__104083__$1,vec__104084,vec__104085,nid1,nid2,vec__104086,nx1,ny1,vec__104087,nx2,ny2,vec__104088,cx1,cx2,vec__104089,cy1,cy2,compatible_QMARK_,node_scale))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui104091(nx1,cx1,vec__104085,ny2,vec__104088,dynomics$space$ui$make_edge_component,vec__104087,cy2,nx2,vec__104086,cy1,node_scale,ny1,cx2,vec__104084,vec__104089,compatible_QMARK_,p__104071,map__104083__$1,nid2,nid1,null));
});
dynomics.space.ui.make_curve_component = (function dynomics$space$ui$make_curve_component(zoom,node_scale,nodes,msgs,selected_curves,p__104094){
var vec__104100 = p__104094;
var vec__104101 = cljs.core.nth.call(null,vec__104100,(0),null);
var id = cljs.core.nth.call(null,vec__104101,(0),null);
var node_cp_ids = cljs.core.nth.call(null,vec__104101,(1),null);
var curve_type = cljs.core.nth.call(null,vec__104100,(1),null);
var pth = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378),id], null);
var e = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"path","path",-188191168),pth], null);
if(typeof dynomics.space.ui.t_dynomics$space$ui104102 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui104102 = (function (vec__104101,pth,vec__104100,curve_type,zoom,node_cp_ids,node_scale,selected_curves,e,p__104094,make_curve_component,msgs,nodes,id,meta104103){
this.vec__104101 = vec__104101;
this.pth = pth;
this.vec__104100 = vec__104100;
this.curve_type = curve_type;
this.zoom = zoom;
this.node_cp_ids = node_cp_ids;
this.node_scale = node_scale;
this.selected_curves = selected_curves;
this.e = e;
this.p__104094 = p__104094;
this.make_curve_component = make_curve_component;
this.msgs = msgs;
this.nodes = nodes;
this.id = id;
this.meta104103 = meta104103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui104102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (pth,e,vec__104100,vec__104101,id,node_cp_ids,curve_type){
return (function (_104104,meta104103__$1){
var self__ = this;
var _104104__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui104102(self__.vec__104101,self__.pth,self__.vec__104100,self__.curve_type,self__.zoom,self__.node_cp_ids,self__.node_scale,self__.selected_curves,self__.e,self__.p__104094,self__.make_curve_component,self__.msgs,self__.nodes,self__.id,meta104103__$1));
});})(pth,e,vec__104100,vec__104101,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui104102.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (pth,e,vec__104100,vec__104101,id,node_cp_ids,curve_type){
return (function (_104104){
var self__ = this;
var _104104__$1 = this;
return self__.meta104103;
});})(pth,e,vec__104100,vec__104101,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui104102.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui104102.prototype.om$core$IRender$render$arity$1 = ((function (pth,e,vec__104100,vec__104101,id,node_cp_ids,curve_type){
return (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return om.dom.path.call(null,{"key": [cljs.core.str("curve_"),cljs.core.str(self__.id)].join(''), "className": [cljs.core.str("curve "),cljs.core.str((cljs.core.truth_(self__.curve_type)?[cljs.core.str("curve_"),cljs.core.str(self__.curve_type)].join(''):null)),cljs.core.str((cljs.core.truth_(self__.selected_curves.call(null,self__.pth))?" selected_curve":null))].join(''), "strokeWidth": ((self__.node_scale / (5)) / self__.zoom), "onClick": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "onMouseMove": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"curve","curve",-569677866),self__.msgs,self__.e), "d": dynomics.ui.svg.to_svg_path.call(null,dynomics.ui.svg.to_beziers.call(null,cljs.core.map.call(null,self__.nodes,cljs.core.map.call(null,cljs.core.first,self__.node_cp_ids)),cljs.core.map.call(null,cljs.core.last,self__.node_cp_ids)))});
});})(pth,e,vec__104100,vec__104101,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui104102.getBasis = ((function (pth,e,vec__104100,vec__104101,id,node_cp_ids,curve_type){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec__104101","vec__104101",683965347,null),new cljs.core.Symbol(null,"pth","pth",1900111558,null),new cljs.core.Symbol(null,"vec__104100","vec__104100",-806987704,null),new cljs.core.Symbol(null,"curve-type","curve-type",-1863700632,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"node-cp-ids","node-cp-ids",296302734,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"p__104094","p__104094",1901082197,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-curve-component","make-curve-component",-1782572970,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"node-cp-ids","node-cp-ids",296302734,null)], null),new cljs.core.Symbol(null,"curve-type","curve-type",-1863700632,null)], null)], null)))], null)),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta104103","meta104103",-1677677623,null)], null);
});})(pth,e,vec__104100,vec__104101,id,node_cp_ids,curve_type))
;

dynomics.space.ui.t_dynomics$space$ui104102.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui104102.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui104102";

dynomics.space.ui.t_dynomics$space$ui104102.cljs$lang$ctorPrWriter = ((function (pth,e,vec__104100,vec__104101,id,node_cp_ids,curve_type){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.space.ui/t_dynomics$space$ui104102");
});})(pth,e,vec__104100,vec__104101,id,node_cp_ids,curve_type))
;

dynomics.space.ui.__GT_t_dynomics$space$ui104102 = ((function (pth,e,vec__104100,vec__104101,id,node_cp_ids,curve_type){
return (function dynomics$space$ui$make_curve_component_$___GT_t_dynomics$space$ui104102(vec__104101__$1,pth__$1,vec__104100__$1,curve_type__$1,zoom__$1,node_cp_ids__$1,node_scale__$1,selected_curves__$1,e__$1,p__104094__$1,make_curve_component__$1,msgs__$1,nodes__$1,id__$1,meta104103){
return (new dynomics.space.ui.t_dynomics$space$ui104102(vec__104101__$1,pth__$1,vec__104100__$1,curve_type__$1,zoom__$1,node_cp_ids__$1,node_scale__$1,selected_curves__$1,e__$1,p__104094__$1,make_curve_component__$1,msgs__$1,nodes__$1,id__$1,meta104103));
});})(pth,e,vec__104100,vec__104101,id,node_cp_ids,curve_type))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui104102(vec__104101,pth,vec__104100,curve_type,zoom,node_cp_ids,node_scale,selected_curves,e,p__104094,dynomics$space$ui$make_curve_component,msgs,nodes,id,null));
});
dynomics.space.ui.make_open_region_component = (function dynomics$space$ui$make_open_region_component(p__104105){
var map__104118 = p__104105;
var map__104118__$1 = ((((!((map__104118 == null)))?((((map__104118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104118):map__104118);
var node_id = cljs.core.get.call(null,map__104118__$1,new cljs.core.Keyword(null,"node-id","node-id",779482292));
var quadrant_type = cljs.core.get.call(null,map__104118__$1,new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370));
var vec__104119 = cljs.core.get.call(null,map__104118__$1,new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631));
var qx = cljs.core.nth.call(null,vec__104119,(0),null);
var qy = cljs.core.nth.call(null,vec__104119,(1),null);
var vec__104120 = cljs.core.get.call(null,map__104118__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p1 = cljs.core.nth.call(null,vec__104120,(0),null);
var p2 = cljs.core.nth.call(null,vec__104120,(1),null);
var map__104121 = cljs.core.nth.call(null,vec__104120,(2),null);
var map__104121__$1 = ((((!((map__104121 == null)))?((((map__104121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104121):map__104121);
var p3 = map__104121__$1;
var vec__104122 = cljs.core.get.call(null,map__104121__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var x = cljs.core.nth.call(null,vec__104122,(0),null);
var y = cljs.core.nth.call(null,vec__104122,(1),null);
var vec__104123 = cljs.core.get.call(null,map__104121__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__104124 = cljs.core.nth.call(null,vec__104123,(0),null);
var cx = cljs.core.nth.call(null,vec__104124,(0),null);
var cy = cljs.core.nth.call(null,vec__104124,(1),null);
var p4 = cljs.core.nth.call(null,vec__104120,(3),null);
if(typeof dynomics.space.ui.t_dynomics$space$ui104127 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui104127 = (function (x,map__104121,vec__104123,vec__104122,y,p2,p4,p3,qx,vec__104124,map__104118,qy,p__104105,p1,make_open_region_component,vec__104120,cx,cy,node_id,vec__104119,quadrant_type,meta104128){
this.x = x;
this.map__104121 = map__104121;
this.vec__104123 = vec__104123;
this.vec__104122 = vec__104122;
this.y = y;
this.p2 = p2;
this.p4 = p4;
this.p3 = p3;
this.qx = qx;
this.vec__104124 = vec__104124;
this.map__104118 = map__104118;
this.qy = qy;
this.p__104105 = p__104105;
this.p1 = p1;
this.make_open_region_component = make_open_region_component;
this.vec__104120 = vec__104120;
this.cx = cx;
this.cy = cy;
this.node_id = node_id;
this.vec__104119 = vec__104119;
this.quadrant_type = quadrant_type;
this.meta104128 = meta104128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui104127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__104118,map__104118__$1,node_id,quadrant_type,vec__104119,qx,qy,vec__104120,p1,p2,map__104121,map__104121__$1,p3,vec__104122,x,y,vec__104123,vec__104124,cx,cy,p4){
return (function (_104129,meta104128__$1){
var self__ = this;
var _104129__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui104127(self__.x,self__.map__104121,self__.vec__104123,self__.vec__104122,self__.y,self__.p2,self__.p4,self__.p3,self__.qx,self__.vec__104124,self__.map__104118,self__.qy,self__.p__104105,self__.p1,self__.make_open_region_component,self__.vec__104120,self__.cx,self__.cy,self__.node_id,self__.vec__104119,self__.quadrant_type,meta104128__$1));
});})(map__104118,map__104118__$1,node_id,quadrant_type,vec__104119,qx,qy,vec__104120,p1,p2,map__104121,map__104121__$1,p3,vec__104122,x,y,vec__104123,vec__104124,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui104127.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__104118,map__104118__$1,node_id,quadrant_type,vec__104119,qx,qy,vec__104120,p1,p2,map__104121,map__104121__$1,p3,vec__104122,x,y,vec__104123,vec__104124,cx,cy,p4){
return (function (_104129){
var self__ = this;
var _104129__$1 = this;
return self__.meta104128;
});})(map__104118,map__104118__$1,node_id,quadrant_type,vec__104119,qx,qy,vec__104120,p1,p2,map__104121,map__104121__$1,p3,vec__104122,x,y,vec__104123,vec__104124,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui104127.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui104127.prototype.om$core$IRender$render$arity$1 = ((function (map__104118,map__104118__$1,node_id,quadrant_type,vec__104119,qx,qy,vec__104120,p1,p2,map__104121,map__104121__$1,p3,vec__104122,x,y,vec__104123,vec__104124,cx,cy,p4){
return (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return om.dom.g.call(null,{},om.dom.defs.call(null,{},om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(self__.node_id),cljs.core.str("_"),cljs.core.str(self__.quadrant_type)].join(''), "gradientUnits": "userSpaceOnUse", "cx": self__.x, "cy": self__.y, "r": 0.04},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,self__.quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,self__.quadrant_type), "stopOpacity": "0"}))),om.dom.path.call(null,{"className": [cljs.core.str("dopen_region "),cljs.core.str([cljs.core.str("dopen_region_type_"),cljs.core.str(self__.quadrant_type)].join(''))].join(''), "fill": [cljs.core.str("url(#"),cljs.core.str([cljs.core.str("qg_"),cljs.core.str(self__.node_id),cljs.core.str("_"),cljs.core.str(self__.quadrant_type)].join('')),cljs.core.str(")")].join(''), "d": [cljs.core.str(dynomics.ui.svg.to_svg_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p1,self__.p2], null))),cljs.core.str(dynomics.ui.svg.to_svg_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,self__.p3,new cljs.core.Keyword(null,"ml","ml",1909675057),"L"),self__.p4], null))),cljs.core.str("z")].join('')}));
});})(map__104118,map__104118__$1,node_id,quadrant_type,vec__104119,qx,qy,vec__104120,p1,p2,map__104121,map__104121__$1,p3,vec__104122,x,y,vec__104123,vec__104124,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui104127.getBasis = ((function (map__104118,map__104118__$1,node_id,quadrant_type,vec__104119,qx,qy,vec__104120,p1,p2,map__104121,map__104121__$1,p3,vec__104122,x,y,vec__104123,vec__104124,cx,cy,p4){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"map__104121","map__104121",-381215840,null),new cljs.core.Symbol(null,"vec__104123","vec__104123",323878307,null),new cljs.core.Symbol(null,"vec__104122","vec__104122",1611885892,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null),new cljs.core.Symbol(null,"p4","p4",550404713,null),new cljs.core.Symbol(null,"p3","p3",-923395030,null),new cljs.core.Symbol(null,"qx","qx",876946123,null),new cljs.core.Symbol(null,"vec__104124","vec__104124",1700020939,null),new cljs.core.Symbol(null,"map__104118","map__104118",-1020460080,null),new cljs.core.Symbol(null,"qy","qy",1271868883,null),new cljs.core.Symbol(null,"p__104105","p__104105",-1509843245,null),new cljs.core.Symbol(null,"p1","p1",703771573,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-open-region-component","make-open-region-component",530106712,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Keyword(null,"node-id","node-id",779482292),new cljs.core.Symbol(null,"quadrant-type","quadrant-type",333980157,null),new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"qx","qx",876946123,null),new cljs.core.Symbol(null,"qy","qy",1271868883,null)], null),new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"cy","cy",-1899104709,null)], null)], null),new cljs.core.Keyword(null,"control-points","control-points",-238538325),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"p3","p3",-923395030,null)], true, false),new cljs.core.Symbol(null,"p4","p4",550404713,null)], null),new cljs.core.Keyword(null,"points","points",-1486596883)], true, false)], null)))], null)),new cljs.core.Symbol(null,"vec__104120","vec__104120",-395316904,null),new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"cy","cy",-1899104709,null),new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Symbol(null,"vec__104119","vec__104119",1185977532,null),new cljs.core.Symbol(null,"quadrant-type","quadrant-type",333980157,null),new cljs.core.Symbol(null,"meta104128","meta104128",539260327,null)], null);
});})(map__104118,map__104118__$1,node_id,quadrant_type,vec__104119,qx,qy,vec__104120,p1,p2,map__104121,map__104121__$1,p3,vec__104122,x,y,vec__104123,vec__104124,cx,cy,p4))
;

dynomics.space.ui.t_dynomics$space$ui104127.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui104127.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui104127";

dynomics.space.ui.t_dynomics$space$ui104127.cljs$lang$ctorPrWriter = ((function (map__104118,map__104118__$1,node_id,quadrant_type,vec__104119,qx,qy,vec__104120,p1,p2,map__104121,map__104121__$1,p3,vec__104122,x,y,vec__104123,vec__104124,cx,cy,p4){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.space.ui/t_dynomics$space$ui104127");
});})(map__104118,map__104118__$1,node_id,quadrant_type,vec__104119,qx,qy,vec__104120,p1,p2,map__104121,map__104121__$1,p3,vec__104122,x,y,vec__104123,vec__104124,cx,cy,p4))
;

dynomics.space.ui.__GT_t_dynomics$space$ui104127 = ((function (map__104118,map__104118__$1,node_id,quadrant_type,vec__104119,qx,qy,vec__104120,p1,p2,map__104121,map__104121__$1,p3,vec__104122,x,y,vec__104123,vec__104124,cx,cy,p4){
return (function dynomics$space$ui$make_open_region_component_$___GT_t_dynomics$space$ui104127(x__$1,map__104121__$2,vec__104123__$1,vec__104122__$1,y__$1,p2__$1,p4__$1,p3__$1,qx__$1,vec__104124__$1,map__104118__$2,qy__$1,p__104105__$1,p1__$1,make_open_region_component__$1,vec__104120__$1,cx__$1,cy__$1,node_id__$1,vec__104119__$1,quadrant_type__$1,meta104128){
return (new dynomics.space.ui.t_dynomics$space$ui104127(x__$1,map__104121__$2,vec__104123__$1,vec__104122__$1,y__$1,p2__$1,p4__$1,p3__$1,qx__$1,vec__104124__$1,map__104118__$2,qy__$1,p__104105__$1,p1__$1,make_open_region_component__$1,vec__104120__$1,cx__$1,cy__$1,node_id__$1,vec__104119__$1,quadrant_type__$1,meta104128));
});})(map__104118,map__104118__$1,node_id,quadrant_type,vec__104119,qx,qy,vec__104120,p1,p2,map__104121,map__104121__$1,p3,vec__104122,x,y,vec__104123,vec__104124,cx,cy,p4))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui104127(x,map__104121__$1,vec__104123,vec__104122,y,p2,p4,p3,qx,vec__104124,map__104118__$1,qy,p__104105,p1,dynomics$space$ui$make_open_region_component,vec__104120,cx,cy,node_id,vec__104119,quadrant_type,null));
});
/**
 * Returns a component for a node and its connections
 */
dynomics.space.ui.make_node_component = (function dynomics$space$ui$make_node_component(p__104130){
var map__104149 = p__104130;
var map__104149__$1 = ((((!((map__104149 == null)))?((((map__104149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104149):map__104149);
var map__104150 = cljs.core.get.call(null,map__104149__$1,new cljs.core.Keyword(null,"node","node",581201198));
var map__104150__$1 = ((((!((map__104150 == null)))?((((map__104150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104150):map__104150);
var node = map__104150__$1;
var vec__104151 = cljs.core.get.call(null,map__104150__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__104151,(0),null);
var y = cljs.core.nth.call(null,vec__104151,(1),null);
var t = cljs.core.get.call(null,map__104150__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var node_type = cljs.core.get.call(null,map__104150__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var id = cljs.core.get.call(null,map__104150__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var connections = cljs.core.get.call(null,map__104150__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var selected_nodes = cljs.core.get.call(null,map__104149__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var active_nodes = cljs.core.get.call(null,map__104149__$1,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891));
var show = cljs.core.get.call(null,map__104149__$1,new cljs.core.Keyword(null,"show","show",-576705889));
var state_updates = cljs.core.get.call(null,map__104149__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var zoom = cljs.core.get.call(null,map__104149__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var node_scale = cljs.core.get.call(null,map__104149__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var icons = cljs.core.get.call(null,map__104149__$1,new cljs.core.Keyword(null,"icons","icons",-297140977));
var msgs = cljs.core.get.call(null,map__104149__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var pth = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id], null);
if(typeof dynomics.space.ui.t_dynomics$space$ui104154 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui104154 = (function (t,connections,x,selected_nodes,active_nodes,show,pth,y,state_updates,zoom,make_node_component,node_scale,node_type,node,p__104130,icons,map__104149,msgs,id,vec__104151,map__104150,meta104155){
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
this.make_node_component = make_node_component;
this.node_scale = node_scale;
this.node_type = node_type;
this.node = node;
this.p__104130 = p__104130;
this.icons = icons;
this.map__104149 = map__104149;
this.msgs = msgs;
this.id = id;
this.vec__104151 = vec__104151;
this.map__104150 = map__104150;
this.meta104155 = meta104155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui104154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (pth,map__104149,map__104149__$1,map__104150,map__104150__$1,node,vec__104151,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function (_104156,meta104155__$1){
var self__ = this;
var _104156__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui104154(self__.t,self__.connections,self__.x,self__.selected_nodes,self__.active_nodes,self__.show,self__.pth,self__.y,self__.state_updates,self__.zoom,self__.make_node_component,self__.node_scale,self__.node_type,self__.node,self__.p__104130,self__.icons,self__.map__104149,self__.msgs,self__.id,self__.vec__104151,self__.map__104150,meta104155__$1));
});})(pth,map__104149,map__104149__$1,map__104150,map__104150__$1,node,vec__104151,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
;

dynomics.space.ui.t_dynomics$space$ui104154.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (pth,map__104149,map__104149__$1,map__104150,map__104150__$1,node,vec__104151,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function (_104156){
var self__ = this;
var _104156__$1 = this;
return self__.meta104155;
});})(pth,map__104149,map__104149__$1,map__104150,map__104150__$1,node,vec__104151,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
;

dynomics.space.ui.t_dynomics$space$ui104154.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui104154.prototype.om$core$IRender$render$arity$1 = ((function (pth,map__104149,map__104149__$1,map__104150,map__104150__$1,node,vec__104151,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return om.dom.g.call(null,{"id": [cljs.core.str("node_"),cljs.core.str(self__.id)].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.x,self__.y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),(self__.node_scale / (cljs.core.truth_(self__.zoom)?self__.zoom:(1)))], null)), "className": [cljs.core.str("node_subgraph "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,self__.pth))?"node_selected":null))].join(''), "onClick": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),self__.pth,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),self__.pth,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),self__.pth], null)), "onMouseMove": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"node","node",581201198),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),self__.pth], null))},(cljs.core.truth_((function (){var and__35380__auto__ = self__.node_type;
if(cljs.core.truth_(and__35380__auto__)){
return self__.show.call(null,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295));
} else {
return and__35380__auto__;
}
})())?cljs.core.map.call(null,((function (this__44434__auto____$1,pth,map__104149,map__104149__$1,map__104150,map__104150__$1,node,vec__104151,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function (p__104157){
var vec__104158 = p__104157;
var i = cljs.core.nth.call(null,vec__104158,(0),null);
var v = cljs.core.nth.call(null,vec__104158,(1),null);
return om.dom.path.call(null,{"className": [cljs.core.str("quadrant quadrant_type_"),cljs.core.str(cljs.core.get_in.call(null,dynomics.space.core.node_types,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.node_type,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),v], null)))].join(''), "d": "M0,0 v-1 A1,1 0 0,0 -1,0 z", "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),((-90) * i)], null))});
});})(this__44434__auto____$1,pth,map__104149,map__104149__$1,map__104150,map__104150__$1,node,vec__104151,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
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
})())?om.dom.g.call(null,{"className": (cljs.core.truth_(cljs.core.some.call(null,self__.selected_nodes,cljs.core.map.call(null,((function (this__44434__auto____$1,pth,map__104149,map__104149__$1,map__104150,map__104150__$1,node,vec__104151,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function (p__104159){
var map__104160 = p__104159;
var map__104160__$1 = ((((!((map__104160 == null)))?((((map__104160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104160):map__104160);
var cid = cljs.core.get.call(null,map__104160__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null);
});})(this__44434__auto____$1,pth,map__104149,map__104149__$1,map__104150,map__104150__$1,node,vec__104151,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
,self__.connections)))?"node_connections_selected":"node_connections")},cljs.core.map.call(null,((function (this__44434__auto____$1,pth,map__104149,map__104149__$1,map__104150,map__104150__$1,node,vec__104151,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function (p__104162){
var map__104163 = p__104162;
var map__104163__$1 = ((((!((map__104163 == null)))?((((map__104163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104163):map__104163);
var vec__104164 = cljs.core.get.call(null,map__104163__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var scx = cljs.core.nth.call(null,vec__104164,(0),null);
var scy = cljs.core.nth.call(null,vec__104164,(1),null);
var cid = cljs.core.get.call(null,map__104163__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vec__104166 = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(self__.zoom / self__.node_scale)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scx,scy], null));
var cx = cljs.core.nth.call(null,vec__104166,(0),null);
var cy = cljs.core.nth.call(null,vec__104166,(1),null);
return om.dom.g.call(null,{"className": [cljs.core.str("node_connection"),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null)))?"node_connections_selected":null))].join(''), "id": [cljs.core.str("node_"),cljs.core.str(self__.id),cljs.core.str("_connection_"),cljs.core.str(cid)].join('')},om.dom.line.call(null,{"x1": (0), "y1": (0), "x2": cx, "y2": cy, "className": "node_connection_line"}),(function (){var path = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.id,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid], null);
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.15, "className": [cljs.core.str("node_connection_dot "),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,path))?"node_selected":null))].join(''), "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),cx,cy], null)), "onClick": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"connector","connector",-1517293248),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"id","id",-1388402092),cid], null)), "onMouseDown": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"connector","connector",-1517293248),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"id","id",-1388402092),cid], null)), "onMouseUp": dynomics.space.ui.make_handler.call(null,dynomics.space.ui.convert_coords.call(null,"space_root"),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"connector","connector",-1517293248),self__.msgs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"id","id",-1388402092),cid], null))});
})());
});})(this__44434__auto____$1,pth,map__104149,map__104149__$1,map__104150,map__104150__$1,node,vec__104151,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
,self__.connections)):null),om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": (1), "transform": "scale(0.2)", "className": [cljs.core.str("node_selector_dot"),cljs.core.str((cljs.core.truth_(self__.selected_nodes.call(null,self__.pth))?"node_selected":null))].join('')}));
});})(pth,map__104149,map__104149__$1,map__104150,map__104150__$1,node,vec__104151,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
;

dynomics.space.ui.t_dynomics$space$ui104154.getBasis = ((function (pth,map__104149,map__104149__$1,map__104150,map__104150__$1,node,vec__104151,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.Symbol(null,"pth","pth",1900111558,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-node-component","make-node-component",-1574550003,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"connections","connections",-423559360,null),new cljs.core.Keyword(null,"connections","connections",-2064090887),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"node","node",-2073234571,null)], true, false),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"icons","icons",1343390550,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null)],[new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),new cljs.core.Keyword(null,"icons","icons",-297140977),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)])], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for a node and its connections"], null)),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol(null,"p__104130","p__104130",-1497448778,null),new cljs.core.Symbol(null,"icons","icons",1343390550,null),new cljs.core.Symbol(null,"map__104149","map__104149",-1294687462,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"vec__104151","vec__104151",802963772,null),new cljs.core.Symbol(null,"map__104150","map__104150",181583391,null),new cljs.core.Symbol(null,"meta104155","meta104155",-194480989,null)], null);
});})(pth,map__104149,map__104149__$1,map__104150,map__104150__$1,node,vec__104151,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
;

dynomics.space.ui.t_dynomics$space$ui104154.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui104154.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui104154";

dynomics.space.ui.t_dynomics$space$ui104154.cljs$lang$ctorPrWriter = ((function (pth,map__104149,map__104149__$1,map__104150,map__104150__$1,node,vec__104151,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.space.ui/t_dynomics$space$ui104154");
});})(pth,map__104149,map__104149__$1,map__104150,map__104150__$1,node,vec__104151,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
;

dynomics.space.ui.__GT_t_dynomics$space$ui104154 = ((function (pth,map__104149,map__104149__$1,map__104150,map__104150__$1,node,vec__104151,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs){
return (function dynomics$space$ui$make_node_component_$___GT_t_dynomics$space$ui104154(t__$1,connections__$1,x__$1,selected_nodes__$1,active_nodes__$1,show__$1,pth__$1,y__$1,state_updates__$1,zoom__$1,make_node_component__$1,node_scale__$1,node_type__$1,node__$1,p__104130__$1,icons__$1,map__104149__$2,msgs__$1,id__$1,vec__104151__$1,map__104150__$2,meta104155){
return (new dynomics.space.ui.t_dynomics$space$ui104154(t__$1,connections__$1,x__$1,selected_nodes__$1,active_nodes__$1,show__$1,pth__$1,y__$1,state_updates__$1,zoom__$1,make_node_component__$1,node_scale__$1,node_type__$1,node__$1,p__104130__$1,icons__$1,map__104149__$2,msgs__$1,id__$1,vec__104151__$1,map__104150__$2,meta104155));
});})(pth,map__104149,map__104149__$1,map__104150,map__104150__$1,node,vec__104151,x,y,t,node_type,id,connections,selected_nodes,active_nodes,show,state_updates,zoom,node_scale,icons,msgs))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui104154(t,connections,x,selected_nodes,active_nodes,show,pth,y,state_updates,zoom,dynomics$space$ui$make_node_component,node_scale,node_type,node,p__104130,icons,map__104149__$1,msgs,id,vec__104151,map__104150__$1,null));
});
dynomics.space.ui.test_component = (function dynomics$space$ui$test_component(x){
if(typeof dynomics.space.ui.t_dynomics$space$ui104170 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui104170 = (function (test_component,x,meta104171){
this.test_component = test_component;
this.x = x;
this.meta104171 = meta104171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui104170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_104172,meta104171__$1){
var self__ = this;
var _104172__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui104170(self__.test_component,self__.x,meta104171__$1));
});

dynomics.space.ui.t_dynomics$space$ui104170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_104172){
var self__ = this;
var _104172__$1 = this;
return self__.meta104171;
});

dynomics.space.ui.t_dynomics$space$ui104170.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui104170.prototype.om$core$IRender$render$arity$1 = (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return om.dom.circle.call(null,{"cx": (0), "cy": (0), "r": 0.2, "fill": (((0.5 > Math.random()))?"orange":"green")});
});

dynomics.space.ui.t_dynomics$space$ui104170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"test-component","test-component",1959093538,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)))], null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"meta104171","meta104171",1335114728,null)], null);
});

dynomics.space.ui.t_dynomics$space$ui104170.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui104170.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui104170";

dynomics.space.ui.t_dynomics$space$ui104170.cljs$lang$ctorPrWriter = (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.space.ui/t_dynomics$space$ui104170");
});

dynomics.space.ui.__GT_t_dynomics$space$ui104170 = (function dynomics$space$ui$test_component_$___GT_t_dynomics$space$ui104170(test_component__$1,x__$1,meta104171){
return (new dynomics.space.ui.t_dynomics$space$ui104170(test_component__$1,x__$1,meta104171));
});

}

return (new dynomics.space.ui.t_dynomics$space$ui104170(dynomics$space$ui$test_component,x,null));
});
dynomics.space.ui.make_quadrant_gradients = (function dynomics$space$ui$make_quadrant_gradients(){
var iter__36172__auto__ = (function dynomics$space$ui$make_quadrant_gradients_$_iter__104177(s__104178){
return (new cljs.core.LazySeq(null,(function (){
var s__104178__$1 = s__104178;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__104178__$1);
if(temp__4657__auto__){
var s__104178__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__104178__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__104178__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__104180 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__104179 = (0);
while(true){
if((i__104179 < size__36171__auto__)){
var quadrant_type = cljs.core._nth.call(null,c__36170__auto__,i__104179);
cljs.core.chunk_append.call(null,b__104180,om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(quadrant_type)].join(''), "gradientUnits": "objectBoundingBox", "cx": (0), "cy": (0), "r": (1)},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "0"})));

var G__104181 = (i__104179 + (1));
i__104179 = G__104181;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__104180),dynomics$space$ui$make_quadrant_gradients_$_iter__104177.call(null,cljs.core.chunk_rest.call(null,s__104178__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__104180),null);
}
} else {
var quadrant_type = cljs.core.first.call(null,s__104178__$2);
return cljs.core.cons.call(null,om.dom.radialGradient.call(null,{"id": [cljs.core.str("qg_"),cljs.core.str(quadrant_type)].join(''), "gradientUnits": "objectBoundingBox", "cx": (0), "cy": (0), "r": (1)},om.dom.stop.call(null,{"offset": "0", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "1"}),om.dom.stop.call(null,{"offset": "1", "stopColor": cljs.core.get.call(null,dynomics.ui.css.quadrant_types_colours,quadrant_type), "stopOpacity": "0"})),dynomics$space$ui$make_quadrant_gradients_$_iter__104177.call(null,cljs.core.rest.call(null,s__104178__$2)));
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
dynomics.space.ui.make_node_context_menu = (function dynomics$space$ui$make_node_context_menu(p__104182){
var map__104188 = p__104182;
var map__104188__$1 = ((((!((map__104188 == null)))?((((map__104188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104188):map__104188);
var s = map__104188__$1;
var map__104189 = cljs.core.get.call(null,map__104188__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__104189__$1 = ((((!((map__104189 == null)))?((((map__104189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104189):map__104189);
var vec__104190 = cljs.core.get.call(null,map__104189__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__104190,(0),null);
var y = cljs.core.nth.call(null,vec__104190,(1),null);
var sn = cljs.core.get.call(null,map__104188__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var state_updates = cljs.core.get.call(null,map__104188__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__104188__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
return om.dom.circle.call(null,{"id": "add-node-button", "cx": 0.5, "cy": 0.5, "r": 0.1, "fill": "red"});
});
dynomics.space.ui.context_menu_fn = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),dynomics.space.ui.make_node_context_menu], null);
/**
 * Returns a component for the phase-space editor
 */
dynomics.space.ui.make_space_component = (function dynomics$space$ui$make_space_component(p__104193){
var map__104203 = p__104193;
var map__104203__$1 = ((((!((map__104203 == null)))?((((map__104203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104203):map__104203);
var state = map__104203__$1;
var vec__104204 = cljs.core.get.call(null,map__104203__$1,new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331));
var ox = cljs.core.nth.call(null,vec__104204,(0),null);
var oy = cljs.core.nth.call(null,vec__104204,(1),null);
var show = cljs.core.get.call(null,map__104203__$1,new cljs.core.Keyword(null,"show","show",-576705889));
var zoom = cljs.core.get.call(null,map__104203__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var vec__104205 = cljs.core.get.call(null,map__104203__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var px = cljs.core.nth.call(null,vec__104205,(0),null);
var py = cljs.core.nth.call(null,vec__104205,(1),null);
var icons = cljs.core.get.call(null,map__104203__$1,new cljs.core.Keyword(null,"icons","icons",-297140977));
var su = cljs.core.get.call(null,map__104203__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__104203__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var map__104206 = cljs.core.get.call(null,map__104203__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__104206__$1 = ((((!((map__104206 == null)))?((((map__104206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104206):map__104206);
var space = map__104206__$1;
var selected_nodes = cljs.core.get.call(null,map__104206__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var active_nodes = cljs.core.get.call(null,map__104206__$1,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891));
var edges = cljs.core.get.call(null,map__104206__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var curves = cljs.core.get.call(null,map__104206__$1,new cljs.core.Keyword(null,"curves","curves",-510805378));
var curve_types = cljs.core.get.call(null,map__104206__$1,new cljs.core.Keyword(null,"curve-types","curve-types",1650772099));
var node_scale = cljs.core.get.call(null,map__104206__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var regions = cljs.core.get.call(null,map__104206__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958));
var selected_curves = cljs.core.get.call(null,map__104206__$1,new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493));
var compatibilities = cljs.core.get.call(null,map__104206__$1,new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024));
var nodes = cljs.core.get.call(null,map__104206__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var graph = cljs.core.get.call(null,map__104206__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var context_menu = cljs.core.get.call(null,map__104203__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var cf = cljs.core.get.call(null,map__104203__$1,new cljs.core.Keyword(null,"cf","cf",1480736310));
if(typeof dynomics.space.ui.t_dynomics$space$ui104209 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.space.ui.t_dynomics$space$ui104209 = (function (map__104206,vec__104204,selected_nodes,active_nodes,py,edges,oy,curves,show,zoom,make_space_component,space,curve_types,node_scale,regions,ox,selected_curves,px,p__104193,state,vec__104205,icons,compatibilities,su,msgs,nodes,graph,context_menu,map__104203,cf,meta104210){
this.map__104206 = map__104206;
this.vec__104204 = vec__104204;
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
this.p__104193 = p__104193;
this.state = state;
this.vec__104205 = vec__104205;
this.icons = icons;
this.compatibilities = compatibilities;
this.su = su;
this.msgs = msgs;
this.nodes = nodes;
this.graph = graph;
this.context_menu = context_menu;
this.map__104203 = map__104203;
this.cf = cf;
this.meta104210 = meta104210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.space.ui.t_dynomics$space$ui104209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__104203,map__104203__$1,state,vec__104204,ox,oy,show,zoom,vec__104205,px,py,icons,su,msgs,map__104206,map__104206__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (_104211,meta104210__$1){
var self__ = this;
var _104211__$1 = this;
return (new dynomics.space.ui.t_dynomics$space$ui104209(self__.map__104206,self__.vec__104204,self__.selected_nodes,self__.active_nodes,self__.py,self__.edges,self__.oy,self__.curves,self__.show,self__.zoom,self__.make_space_component,self__.space,self__.curve_types,self__.node_scale,self__.regions,self__.ox,self__.selected_curves,self__.px,self__.p__104193,self__.state,self__.vec__104205,self__.icons,self__.compatibilities,self__.su,self__.msgs,self__.nodes,self__.graph,self__.context_menu,self__.map__104203,self__.cf,meta104210__$1));
});})(map__104203,map__104203__$1,state,vec__104204,ox,oy,show,zoom,vec__104205,px,py,icons,su,msgs,map__104206,map__104206__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui104209.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__104203,map__104203__$1,state,vec__104204,ox,oy,show,zoom,vec__104205,px,py,icons,su,msgs,map__104206,map__104206__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (_104211){
var self__ = this;
var _104211__$1 = this;
return self__.meta104210;
});})(map__104203,map__104203__$1,state,vec__104204,ox,oy,show,zoom,vec__104205,px,py,icons,su,msgs,map__104206,map__104206__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui104209.prototype.om$core$IRender$ = true;

dynomics.space.ui.t_dynomics$space$ui104209.prototype.om$core$IRender$render$arity$1 = ((function (map__104203,map__104203__$1,state,vec__104204,ox,oy,show,zoom,vec__104205,px,py,icons,su,msgs,map__104206,map__104206__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return om.dom.div.call(null,{"className": [cljs.core.str("space "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),self__.cf))?"selected_function":"hidden_function"))].join('')},om.dom.svg.call(null,{"image-rendering": "optimizeQuality", "zoomAndPan": false, "preserveAspectRatio": "xMidYMin", "width": "100%", "shape-rendering": "crispEdges", "xmlns": "http://www.w3.org/2000/svg", "className": "space_svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "id": "space", "viewBox": "-1 -1 2 2", "height": "100%"},om.dom.defs.call(null,{"key": "defs"}),om.dom.g.call(null,{"id": "space_root", "key": "space_root", "onMouseMove": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseDown": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseUp": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onWheel": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"space","space",348133475),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onContextMenu": ((function (this__44434__auto____$1,map__104203,map__104203__$1,state,vec__104204,ox,oy,show,zoom,vec__104205,px,py,icons,su,msgs,map__104206,map__104206__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (e){
e.preventDefault();

return null;
});})(this__44434__auto____$1,map__104203,map__104203__$1,state,vec__104204,ox,oy,show,zoom,vec__104205,px,py,icons,su,msgs,map__104206,map__104206__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
, "transform": dynomics.ui.svg.trs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.ox,self__.oy], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),self__.zoom,self__.zoom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),self__.px,self__.py], null))},om.dom.rect.call(null,{"x": (-16), "y": (-16), "width": (32), "height": (32), "className": "space_background"}),om.dom.rect.call(null,{"x": (0), "y": (0), "width": (1), "height": (1), "className": "space_space"}),om.core.build_all.call(null,cljs.core.partial.call(null,dynomics.space.ui.make_curve_component,self__.zoom,self__.node_scale,self__.nodes,self__.msgs,self__.selected_curves),cljs.core.map.call(null,cljs.core.vector,self__.curves,cljs.core.map.call(null,cljs.core.comp.call(null,self__.curve_types,cljs.core.key),self__.curves))),null,null,om.core.build_all.call(null,dynomics.space.ui.make_edge_component,cljs.core.map.call(null,((function (this__44434__auto____$1,map__104203,map__104203__$1,state,vec__104204,ox,oy,show,zoom,vec__104205,px,py,icons,su,msgs,map__104206,map__104206__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (e){
return cljs.core.assoc.call(null,dynomics.space.core.with_compatibilities.call(null,e,self__.compatibilities),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale);
});})(this__44434__auto____$1,map__104203,map__104203__$1,state,vec__104204,ox,oy,show,zoom,vec__104205,px,py,icons,su,msgs,map__104206,map__104206__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
,cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.edge_points,self__.nodes),self__.edges))),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__44434__auto____$1,map__104203,map__104203__$1,state,vec__104204,ox,oy,show,zoom,vec__104205,px,py,icons,su,msgs,map__104206,map__104206__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (node){
return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),self__.su,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),self__.zoom,new cljs.core.Keyword(null,"show","show",-576705889),self__.show,new cljs.core.Keyword(null,"icons","icons",-297140977),self__.icons,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891),self__.active_nodes], null),new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''));
});})(this__44434__auto____$1,map__104203,map__104203__$1,state,vec__104204,ox,oy,show,zoom,vec__104205,px,py,icons,su,msgs,map__104206,map__104206__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
,cljs.core.vals.call(null,cljs.core.apply.call(null,cljs.core.dissoc,self__.nodes,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),cljs.core.map.call(null,cljs.core.last,self__.selected_nodes))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),om.core.build_all.call(null,dynomics.space.ui.make_node_component,cljs.core.map.call(null,((function (this__44434__auto____$1,map__104203,map__104203__$1,state,vec__104204,ox,oy,show,zoom,vec__104205,px,py,icons,su,msgs,map__104206,map__104206__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (node){
return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),self__.su,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),self__.zoom,new cljs.core.Keyword(null,"show","show",-576705889),self__.show,new cljs.core.Keyword(null,"icons","icons",-297140977),self__.icons,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),self__.node_scale,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891),self__.active_nodes], null),new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("node_"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))].join(''));
});})(this__44434__auto____$1,map__104203,map__104203__$1,state,vec__104204,ox,oy,show,zoom,vec__104205,px,py,icons,su,msgs,map__104206,map__104206__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
,cljs.core.vals.call(null,cljs.core.select_keys.call(null,self__.nodes,cljs.core.map.call(null,cljs.core.last,self__.selected_nodes)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),null,null)));
});})(map__104203,map__104203__$1,state,vec__104204,ox,oy,show,zoom,vec__104205,px,py,icons,su,msgs,map__104206,map__104206__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui104209.getBasis = ((function (map__104203,map__104203__$1,state,vec__104204,ox,oy,show,zoom,vec__104205,px,py,icons,su,msgs,map__104206,map__104206__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (){
return new cljs.core.PersistentVector(null, 31, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map__104206","map__104206",-294229088,null),new cljs.core.Symbol(null,"vec__104204","vec__104204",1474073633,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Symbol(null,"py","py",-1256449853,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"oy","oy",809196068,null),new cljs.core.Symbol(null,"curves","curves",1129726149,null),new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-space-component","make-space-component",-638751478,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ox","ox",-2083100366,null),new cljs.core.Symbol(null,"oy","oy",809196068,null)], null),new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"px","px",1921861426,null),new cljs.core.Symbol(null,"py","py",-1256449853,null)], null),new cljs.core.Symbol(null,"icons","icons",1343390550,null),new cljs.core.Symbol(null,"su","su",155163255,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"curves","curves",1129726149,null),new cljs.core.Symbol(null,"curve-types","curve-types",-1003663670,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.Symbol(null,"active-nodes","active-nodes",2144900418,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"compatibilities","compatibilities",289068503,null),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null)],[new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"icons","icons",-297140977),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"cf","cf",1480736310)])], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the phase-space editor"], null)),new cljs.core.Symbol(null,"space","space",1988665002,null),new cljs.core.Symbol(null,"curve-types","curve-types",-1003663670,null),new cljs.core.Symbol(null,"node-scale","node-scale",63028016,null),new cljs.core.Symbol(null,"regions","regions",616715569,null),new cljs.core.Symbol(null,"ox","ox",-2083100366,null),new cljs.core.Symbol(null,"selected-curves","selected-curves",669070034,null),new cljs.core.Symbol(null,"px","px",1921861426,null),new cljs.core.Symbol(null,"p__104193","p__104193",-1889572524,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"vec__104205","vec__104205",-770523018,null),new cljs.core.Symbol(null,"icons","icons",1343390550,null),new cljs.core.Symbol(null,"compatibilities","compatibilities",289068503,null),new cljs.core.Symbol(null,"su","su",155163255,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Symbol(null,"map__104203","map__104203",2062403164,null),new cljs.core.Symbol(null,"cf","cf",-1173699459,null),new cljs.core.Symbol(null,"meta104210","meta104210",2124549120,null)], null);
});})(map__104203,map__104203__$1,state,vec__104204,ox,oy,show,zoom,vec__104205,px,py,icons,su,msgs,map__104206,map__104206__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.t_dynomics$space$ui104209.cljs$lang$type = true;

dynomics.space.ui.t_dynomics$space$ui104209.cljs$lang$ctorStr = "dynomics.space.ui/t_dynomics$space$ui104209";

dynomics.space.ui.t_dynomics$space$ui104209.cljs$lang$ctorPrWriter = ((function (map__104203,map__104203__$1,state,vec__104204,ox,oy,show,zoom,vec__104205,px,py,icons,su,msgs,map__104206,map__104206__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.space.ui/t_dynomics$space$ui104209");
});})(map__104203,map__104203__$1,state,vec__104204,ox,oy,show,zoom,vec__104205,px,py,icons,su,msgs,map__104206,map__104206__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

dynomics.space.ui.__GT_t_dynomics$space$ui104209 = ((function (map__104203,map__104203__$1,state,vec__104204,ox,oy,show,zoom,vec__104205,px,py,icons,su,msgs,map__104206,map__104206__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf){
return (function dynomics$space$ui$make_space_component_$___GT_t_dynomics$space$ui104209(map__104206__$2,vec__104204__$1,selected_nodes__$1,active_nodes__$1,py__$1,edges__$1,oy__$1,curves__$1,show__$1,zoom__$1,make_space_component__$1,space__$1,curve_types__$1,node_scale__$1,regions__$1,ox__$1,selected_curves__$1,px__$1,p__104193__$1,state__$1,vec__104205__$1,icons__$1,compatibilities__$1,su__$1,msgs__$1,nodes__$1,graph__$1,context_menu__$1,map__104203__$2,cf__$1,meta104210){
return (new dynomics.space.ui.t_dynomics$space$ui104209(map__104206__$2,vec__104204__$1,selected_nodes__$1,active_nodes__$1,py__$1,edges__$1,oy__$1,curves__$1,show__$1,zoom__$1,make_space_component__$1,space__$1,curve_types__$1,node_scale__$1,regions__$1,ox__$1,selected_curves__$1,px__$1,p__104193__$1,state__$1,vec__104205__$1,icons__$1,compatibilities__$1,su__$1,msgs__$1,nodes__$1,graph__$1,context_menu__$1,map__104203__$2,cf__$1,meta104210));
});})(map__104203,map__104203__$1,state,vec__104204,ox,oy,show,zoom,vec__104205,px,py,icons,su,msgs,map__104206,map__104206__$1,space,selected_nodes,active_nodes,edges,curves,curve_types,node_scale,regions,selected_curves,compatibilities,nodes,graph,context_menu,cf))
;

}

return (new dynomics.space.ui.t_dynomics$space$ui104209(map__104206__$1,vec__104204,selected_nodes,active_nodes,py,edges,oy,curves,show,zoom,dynomics$space$ui$make_space_component,space,curve_types,node_scale,regions,ox,selected_curves,px,p__104193,state,vec__104205,icons,compatibilities,su,msgs,nodes,graph,context_menu,map__104203__$1,cf,null));
});
