// Compiled by ClojureScript 1.8.40 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__97715__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__97712 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__97712,(0),null);
var body = cljs.core.nthnext.call(null,vec__97712,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__97715 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__97740__i = 0, G__97740__a = new Array(arguments.length -  0);
while (G__97740__i < G__97740__a.length) {G__97740__a[G__97740__i] = arguments[G__97740__i + 0]; ++G__97740__i;}
  args = new cljs.core.IndexedSeq(G__97740__a,0);
} 
return G__97715__delegate.call(this,args);};
G__97715.cljs$lang$maxFixedArity = 0;
G__97715.cljs$lang$applyTo = (function (arglist__97743){
var args = cljs.core.seq(arglist__97743);
return G__97715__delegate(args);
});
G__97715.cljs$core$IFn$_invoke$arity$variadic = G__97715__delegate;
return G__97715;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__36172__auto__ = (function sablono$core$update_arglists_$_iter__97761(s__97762){
return (new cljs.core.LazySeq(null,(function (){
var s__97762__$1 = s__97762;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__97762__$1);
if(temp__4657__auto__){
var s__97762__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__97762__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__97762__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__97764 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__97763 = (0);
while(true){
if((i__97763 < size__36171__auto__)){
var args = cljs.core._nth.call(null,c__36170__auto__,i__97763);
cljs.core.chunk_append.call(null,b__97764,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__97782 = (i__97763 + (1));
i__97763 = G__97782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97764),sablono$core$update_arglists_$_iter__97761.call(null,cljs.core.chunk_rest.call(null,s__97762__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97764),null);
}
} else {
var args = cljs.core.first.call(null,s__97762__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__97761.call(null,cljs.core.rest.call(null,s__97762__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36172__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__36468__auto__ = [];
var len__36461__auto___97801 = arguments.length;
var i__36462__auto___97802 = (0);
while(true){
if((i__36462__auto___97802 < len__36461__auto___97801)){
args__36468__auto__.push((arguments[i__36462__auto___97802]));

var G__97803 = (i__36462__auto___97802 + (1));
i__36462__auto___97802 = G__97803;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((0) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__36469__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__36172__auto__ = (function sablono$core$iter__97792(s__97793){
return (new cljs.core.LazySeq(null,(function (){
var s__97793__$1 = s__97793;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__97793__$1);
if(temp__4657__auto__){
var s__97793__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__97793__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__97793__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__97795 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__97794 = (0);
while(true){
if((i__97794 < size__36171__auto__)){
var style = cljs.core._nth.call(null,c__36170__auto__,i__97794);
cljs.core.chunk_append.call(null,b__97795,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__97808 = (i__97794 + (1));
i__97794 = G__97808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97795),sablono$core$iter__97792.call(null,cljs.core.chunk_rest.call(null,s__97793__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97795),null);
}
} else {
var style = cljs.core.first.call(null,s__97793__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__97792.call(null,cljs.core.rest.call(null,s__97793__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36172__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq97791){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq97791));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to97811 = (function sablono$core$link_to97811(var_args){
var args__36468__auto__ = [];
var len__36461__auto___97814 = arguments.length;
var i__36462__auto___97815 = (0);
while(true){
if((i__36462__auto___97815 < len__36461__auto___97814)){
args__36468__auto__.push((arguments[i__36462__auto___97815]));

var G__97816 = (i__36462__auto___97815 + (1));
i__36462__auto___97815 = G__97816;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to97811.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

sablono.core.link_to97811.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to97811.cljs$lang$maxFixedArity = (1);

sablono.core.link_to97811.cljs$lang$applyTo = (function (seq97812){
var G__97813 = cljs.core.first.call(null,seq97812);
var seq97812__$1 = cljs.core.next.call(null,seq97812);
return sablono.core.link_to97811.cljs$core$IFn$_invoke$arity$variadic(G__97813,seq97812__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to97811);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to97819 = (function sablono$core$mail_to97819(var_args){
var args__36468__auto__ = [];
var len__36461__auto___97827 = arguments.length;
var i__36462__auto___97829 = (0);
while(true){
if((i__36462__auto___97829 < len__36461__auto___97827)){
args__36468__auto__.push((arguments[i__36462__auto___97829]));

var G__97830 = (i__36462__auto___97829 + (1));
i__36462__auto___97829 = G__97830;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to97819.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

sablono.core.mail_to97819.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__97824){
var vec__97825 = p__97824;
var content = cljs.core.nth.call(null,vec__97825,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__35392__auto__ = content;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to97819.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to97819.cljs$lang$applyTo = (function (seq97820){
var G__97821 = cljs.core.first.call(null,seq97820);
var seq97820__$1 = cljs.core.next.call(null,seq97820);
return sablono.core.mail_to97819.cljs$core$IFn$_invoke$arity$variadic(G__97821,seq97820__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to97819);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list97839 = (function sablono$core$unordered_list97839(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__36172__auto__ = (function sablono$core$unordered_list97839_$_iter__97900(s__97901){
return (new cljs.core.LazySeq(null,(function (){
var s__97901__$1 = s__97901;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__97901__$1);
if(temp__4657__auto__){
var s__97901__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__97901__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__97901__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__97903 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__97902 = (0);
while(true){
if((i__97902 < size__36171__auto__)){
var x = cljs.core._nth.call(null,c__36170__auto__,i__97902);
cljs.core.chunk_append.call(null,b__97903,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__97937 = (i__97902 + (1));
i__97902 = G__97937;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97903),sablono$core$unordered_list97839_$_iter__97900.call(null,cljs.core.chunk_rest.call(null,s__97901__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97903),null);
}
} else {
var x = cljs.core.first.call(null,s__97901__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list97839_$_iter__97900.call(null,cljs.core.rest.call(null,s__97901__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36172__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list97839);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list97950 = (function sablono$core$ordered_list97950(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__36172__auto__ = (function sablono$core$ordered_list97950_$_iter__97970(s__97971){
return (new cljs.core.LazySeq(null,(function (){
var s__97971__$1 = s__97971;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__97971__$1);
if(temp__4657__auto__){
var s__97971__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__97971__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__97971__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__97973 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__97972 = (0);
while(true){
if((i__97972 < size__36171__auto__)){
var x = cljs.core._nth.call(null,c__36170__auto__,i__97972);
cljs.core.chunk_append.call(null,b__97973,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__98011 = (i__97972 + (1));
i__97972 = G__98011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97973),sablono$core$ordered_list97950_$_iter__97970.call(null,cljs.core.chunk_rest.call(null,s__97971__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97973),null);
}
} else {
var x = cljs.core.first.call(null,s__97971__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list97950_$_iter__97970.call(null,cljs.core.rest.call(null,s__97971__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36172__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list97950);
/**
 * Create an image element.
 */
sablono.core.image98020 = (function sablono$core$image98020(var_args){
var args98022 = [];
var len__36461__auto___98100 = arguments.length;
var i__36462__auto___98101 = (0);
while(true){
if((i__36462__auto___98101 < len__36461__auto___98100)){
args98022.push((arguments[i__36462__auto___98101]));

var G__98102 = (i__36462__auto___98101 + (1));
i__36462__auto___98101 = G__98102;
continue;
} else {
}
break;
}

var G__98027 = args98022.length;
switch (G__98027) {
case 1:
return sablono.core.image98020.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image98020.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98022.length)].join('')));

}
});

sablono.core.image98020.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image98020.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image98020.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image98020);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__98105_SHARP_,p2__98106_SHARP_){
return [cljs.core.str(p1__98105_SHARP_),cljs.core.str("["),cljs.core.str(p2__98106_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__98109_SHARP_,p2__98110_SHARP_){
return [cljs.core.str(p1__98109_SHARP_),cljs.core.str("-"),cljs.core.str(p2__98110_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field98116 = (function sablono$core$color_field98116(var_args){
var args98117 = [];
var len__36461__auto___98402 = arguments.length;
var i__36462__auto___98403 = (0);
while(true){
if((i__36462__auto___98403 < len__36461__auto___98402)){
args98117.push((arguments[i__36462__auto___98403]));

var G__98405 = (i__36462__auto___98403 + (1));
i__36462__auto___98403 = G__98405;
continue;
} else {
}
break;
}

var G__98122 = args98117.length;
switch (G__98122) {
case 1:
return sablono.core.color_field98116.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field98116.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98117.length)].join('')));

}
});

sablono.core.color_field98116.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.color_field98116.call(null,name__40961__auto__,null);
});

sablono.core.color_field98116.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.color_field98116.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field98116);

/**
 * Creates a date input field.
 */
sablono.core.date_field98127 = (function sablono$core$date_field98127(var_args){
var args98128 = [];
var len__36461__auto___98415 = arguments.length;
var i__36462__auto___98417 = (0);
while(true){
if((i__36462__auto___98417 < len__36461__auto___98415)){
args98128.push((arguments[i__36462__auto___98417]));

var G__98418 = (i__36462__auto___98417 + (1));
i__36462__auto___98417 = G__98418;
continue;
} else {
}
break;
}

var G__98132 = args98128.length;
switch (G__98132) {
case 1:
return sablono.core.date_field98127.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field98127.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98128.length)].join('')));

}
});

sablono.core.date_field98127.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.date_field98127.call(null,name__40961__auto__,null);
});

sablono.core.date_field98127.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.date_field98127.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field98127);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field98133 = (function sablono$core$datetime_field98133(var_args){
var args98134 = [];
var len__36461__auto___98444 = arguments.length;
var i__36462__auto___98445 = (0);
while(true){
if((i__36462__auto___98445 < len__36461__auto___98444)){
args98134.push((arguments[i__36462__auto___98445]));

var G__98446 = (i__36462__auto___98445 + (1));
i__36462__auto___98445 = G__98446;
continue;
} else {
}
break;
}

var G__98139 = args98134.length;
switch (G__98139) {
case 1:
return sablono.core.datetime_field98133.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field98133.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98134.length)].join('')));

}
});

sablono.core.datetime_field98133.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.datetime_field98133.call(null,name__40961__auto__,null);
});

sablono.core.datetime_field98133.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.datetime_field98133.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field98133);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field98140 = (function sablono$core$datetime_local_field98140(var_args){
var args98141 = [];
var len__36461__auto___98449 = arguments.length;
var i__36462__auto___98450 = (0);
while(true){
if((i__36462__auto___98450 < len__36461__auto___98449)){
args98141.push((arguments[i__36462__auto___98450]));

var G__98451 = (i__36462__auto___98450 + (1));
i__36462__auto___98450 = G__98451;
continue;
} else {
}
break;
}

var G__98143 = args98141.length;
switch (G__98143) {
case 1:
return sablono.core.datetime_local_field98140.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field98140.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98141.length)].join('')));

}
});

sablono.core.datetime_local_field98140.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.datetime_local_field98140.call(null,name__40961__auto__,null);
});

sablono.core.datetime_local_field98140.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.datetime_local_field98140.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field98140);

/**
 * Creates a email input field.
 */
sablono.core.email_field98144 = (function sablono$core$email_field98144(var_args){
var args98145 = [];
var len__36461__auto___98467 = arguments.length;
var i__36462__auto___98468 = (0);
while(true){
if((i__36462__auto___98468 < len__36461__auto___98467)){
args98145.push((arguments[i__36462__auto___98468]));

var G__98469 = (i__36462__auto___98468 + (1));
i__36462__auto___98468 = G__98469;
continue;
} else {
}
break;
}

var G__98147 = args98145.length;
switch (G__98147) {
case 1:
return sablono.core.email_field98144.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field98144.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98145.length)].join('')));

}
});

sablono.core.email_field98144.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.email_field98144.call(null,name__40961__auto__,null);
});

sablono.core.email_field98144.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.email_field98144.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field98144);

/**
 * Creates a file input field.
 */
sablono.core.file_field98148 = (function sablono$core$file_field98148(var_args){
var args98149 = [];
var len__36461__auto___98476 = arguments.length;
var i__36462__auto___98477 = (0);
while(true){
if((i__36462__auto___98477 < len__36461__auto___98476)){
args98149.push((arguments[i__36462__auto___98477]));

var G__98478 = (i__36462__auto___98477 + (1));
i__36462__auto___98477 = G__98478;
continue;
} else {
}
break;
}

var G__98151 = args98149.length;
switch (G__98151) {
case 1:
return sablono.core.file_field98148.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field98148.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98149.length)].join('')));

}
});

sablono.core.file_field98148.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.file_field98148.call(null,name__40961__auto__,null);
});

sablono.core.file_field98148.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.file_field98148.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field98148);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field98152 = (function sablono$core$hidden_field98152(var_args){
var args98153 = [];
var len__36461__auto___98485 = arguments.length;
var i__36462__auto___98486 = (0);
while(true){
if((i__36462__auto___98486 < len__36461__auto___98485)){
args98153.push((arguments[i__36462__auto___98486]));

var G__98499 = (i__36462__auto___98486 + (1));
i__36462__auto___98486 = G__98499;
continue;
} else {
}
break;
}

var G__98155 = args98153.length;
switch (G__98155) {
case 1:
return sablono.core.hidden_field98152.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field98152.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98153.length)].join('')));

}
});

sablono.core.hidden_field98152.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.hidden_field98152.call(null,name__40961__auto__,null);
});

sablono.core.hidden_field98152.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.hidden_field98152.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field98152);

/**
 * Creates a month input field.
 */
sablono.core.month_field98156 = (function sablono$core$month_field98156(var_args){
var args98157 = [];
var len__36461__auto___98502 = arguments.length;
var i__36462__auto___98503 = (0);
while(true){
if((i__36462__auto___98503 < len__36461__auto___98502)){
args98157.push((arguments[i__36462__auto___98503]));

var G__98504 = (i__36462__auto___98503 + (1));
i__36462__auto___98503 = G__98504;
continue;
} else {
}
break;
}

var G__98159 = args98157.length;
switch (G__98159) {
case 1:
return sablono.core.month_field98156.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field98156.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98157.length)].join('')));

}
});

sablono.core.month_field98156.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.month_field98156.call(null,name__40961__auto__,null);
});

sablono.core.month_field98156.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.month_field98156.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field98156);

/**
 * Creates a number input field.
 */
sablono.core.number_field98160 = (function sablono$core$number_field98160(var_args){
var args98161 = [];
var len__36461__auto___98508 = arguments.length;
var i__36462__auto___98509 = (0);
while(true){
if((i__36462__auto___98509 < len__36461__auto___98508)){
args98161.push((arguments[i__36462__auto___98509]));

var G__98510 = (i__36462__auto___98509 + (1));
i__36462__auto___98509 = G__98510;
continue;
} else {
}
break;
}

var G__98164 = args98161.length;
switch (G__98164) {
case 1:
return sablono.core.number_field98160.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field98160.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98161.length)].join('')));

}
});

sablono.core.number_field98160.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.number_field98160.call(null,name__40961__auto__,null);
});

sablono.core.number_field98160.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.number_field98160.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field98160);

/**
 * Creates a password input field.
 */
sablono.core.password_field98167 = (function sablono$core$password_field98167(var_args){
var args98168 = [];
var len__36461__auto___98523 = arguments.length;
var i__36462__auto___98524 = (0);
while(true){
if((i__36462__auto___98524 < len__36461__auto___98523)){
args98168.push((arguments[i__36462__auto___98524]));

var G__98525 = (i__36462__auto___98524 + (1));
i__36462__auto___98524 = G__98525;
continue;
} else {
}
break;
}

var G__98170 = args98168.length;
switch (G__98170) {
case 1:
return sablono.core.password_field98167.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field98167.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98168.length)].join('')));

}
});

sablono.core.password_field98167.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.password_field98167.call(null,name__40961__auto__,null);
});

sablono.core.password_field98167.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.password_field98167.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field98167);

/**
 * Creates a range input field.
 */
sablono.core.range_field98171 = (function sablono$core$range_field98171(var_args){
var args98172 = [];
var len__36461__auto___98532 = arguments.length;
var i__36462__auto___98533 = (0);
while(true){
if((i__36462__auto___98533 < len__36461__auto___98532)){
args98172.push((arguments[i__36462__auto___98533]));

var G__98535 = (i__36462__auto___98533 + (1));
i__36462__auto___98533 = G__98535;
continue;
} else {
}
break;
}

var G__98174 = args98172.length;
switch (G__98174) {
case 1:
return sablono.core.range_field98171.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field98171.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98172.length)].join('')));

}
});

sablono.core.range_field98171.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.range_field98171.call(null,name__40961__auto__,null);
});

sablono.core.range_field98171.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.range_field98171.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field98171);

/**
 * Creates a search input field.
 */
sablono.core.search_field98175 = (function sablono$core$search_field98175(var_args){
var args98176 = [];
var len__36461__auto___98537 = arguments.length;
var i__36462__auto___98539 = (0);
while(true){
if((i__36462__auto___98539 < len__36461__auto___98537)){
args98176.push((arguments[i__36462__auto___98539]));

var G__98541 = (i__36462__auto___98539 + (1));
i__36462__auto___98539 = G__98541;
continue;
} else {
}
break;
}

var G__98181 = args98176.length;
switch (G__98181) {
case 1:
return sablono.core.search_field98175.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field98175.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98176.length)].join('')));

}
});

sablono.core.search_field98175.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.search_field98175.call(null,name__40961__auto__,null);
});

sablono.core.search_field98175.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.search_field98175.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field98175);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field98184 = (function sablono$core$tel_field98184(var_args){
var args98187 = [];
var len__36461__auto___98544 = arguments.length;
var i__36462__auto___98545 = (0);
while(true){
if((i__36462__auto___98545 < len__36461__auto___98544)){
args98187.push((arguments[i__36462__auto___98545]));

var G__98546 = (i__36462__auto___98545 + (1));
i__36462__auto___98545 = G__98546;
continue;
} else {
}
break;
}

var G__98358 = args98187.length;
switch (G__98358) {
case 1:
return sablono.core.tel_field98184.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field98184.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98187.length)].join('')));

}
});

sablono.core.tel_field98184.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.tel_field98184.call(null,name__40961__auto__,null);
});

sablono.core.tel_field98184.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.tel_field98184.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field98184);

/**
 * Creates a text input field.
 */
sablono.core.text_field98362 = (function sablono$core$text_field98362(var_args){
var args98363 = [];
var len__36461__auto___98548 = arguments.length;
var i__36462__auto___98549 = (0);
while(true){
if((i__36462__auto___98549 < len__36461__auto___98548)){
args98363.push((arguments[i__36462__auto___98549]));

var G__98550 = (i__36462__auto___98549 + (1));
i__36462__auto___98549 = G__98550;
continue;
} else {
}
break;
}

var G__98365 = args98363.length;
switch (G__98365) {
case 1:
return sablono.core.text_field98362.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field98362.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98363.length)].join('')));

}
});

sablono.core.text_field98362.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.text_field98362.call(null,name__40961__auto__,null);
});

sablono.core.text_field98362.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.text_field98362.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field98362);

/**
 * Creates a time input field.
 */
sablono.core.time_field98369 = (function sablono$core$time_field98369(var_args){
var args98370 = [];
var len__36461__auto___98565 = arguments.length;
var i__36462__auto___98566 = (0);
while(true){
if((i__36462__auto___98566 < len__36461__auto___98565)){
args98370.push((arguments[i__36462__auto___98566]));

var G__98570 = (i__36462__auto___98566 + (1));
i__36462__auto___98566 = G__98570;
continue;
} else {
}
break;
}

var G__98377 = args98370.length;
switch (G__98377) {
case 1:
return sablono.core.time_field98369.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field98369.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98370.length)].join('')));

}
});

sablono.core.time_field98369.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.time_field98369.call(null,name__40961__auto__,null);
});

sablono.core.time_field98369.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.time_field98369.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field98369);

/**
 * Creates a url input field.
 */
sablono.core.url_field98383 = (function sablono$core$url_field98383(var_args){
var args98384 = [];
var len__36461__auto___98572 = arguments.length;
var i__36462__auto___98573 = (0);
while(true){
if((i__36462__auto___98573 < len__36461__auto___98572)){
args98384.push((arguments[i__36462__auto___98573]));

var G__98574 = (i__36462__auto___98573 + (1));
i__36462__auto___98573 = G__98574;
continue;
} else {
}
break;
}

var G__98388 = args98384.length;
switch (G__98388) {
case 1:
return sablono.core.url_field98383.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field98383.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98384.length)].join('')));

}
});

sablono.core.url_field98383.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.url_field98383.call(null,name__40961__auto__,null);
});

sablono.core.url_field98383.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.url_field98383.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field98383);

/**
 * Creates a week input field.
 */
sablono.core.week_field98395 = (function sablono$core$week_field98395(var_args){
var args98396 = [];
var len__36461__auto___98593 = arguments.length;
var i__36462__auto___98594 = (0);
while(true){
if((i__36462__auto___98594 < len__36461__auto___98593)){
args98396.push((arguments[i__36462__auto___98594]));

var G__98595 = (i__36462__auto___98594 + (1));
i__36462__auto___98594 = G__98595;
continue;
} else {
}
break;
}

var G__98400 = args98396.length;
switch (G__98400) {
case 1:
return sablono.core.week_field98395.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field98395.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98396.length)].join('')));

}
});

sablono.core.week_field98395.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.week_field98395.call(null,name__40961__auto__,null);
});

sablono.core.week_field98395.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.week_field98395.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field98395);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box98600 = (function sablono$core$check_box98600(var_args){
var args98601 = [];
var len__36461__auto___98607 = arguments.length;
var i__36462__auto___98608 = (0);
while(true){
if((i__36462__auto___98608 < len__36461__auto___98607)){
args98601.push((arguments[i__36462__auto___98608]));

var G__98609 = (i__36462__auto___98608 + (1));
i__36462__auto___98608 = G__98609;
continue;
} else {
}
break;
}

var G__98604 = args98601.length;
switch (G__98604) {
case 1:
return sablono.core.check_box98600.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box98600.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box98600.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98601.length)].join('')));

}
});

sablono.core.check_box98600.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box98600.call(null,name,null);
});

sablono.core.check_box98600.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box98600.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box98600.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box98600.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box98600);
/**
 * Creates a radio button.
 */
sablono.core.radio_button98618 = (function sablono$core$radio_button98618(var_args){
var args98619 = [];
var len__36461__auto___98628 = arguments.length;
var i__36462__auto___98629 = (0);
while(true){
if((i__36462__auto___98629 < len__36461__auto___98628)){
args98619.push((arguments[i__36462__auto___98629]));

var G__98631 = (i__36462__auto___98629 + (1));
i__36462__auto___98629 = G__98631;
continue;
} else {
}
break;
}

var G__98626 = args98619.length;
switch (G__98626) {
case 1:
return sablono.core.radio_button98618.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button98618.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button98618.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98619.length)].join('')));

}
});

sablono.core.radio_button98618.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button98618.call(null,group,null);
});

sablono.core.radio_button98618.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button98618.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button98618.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button98618.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button98618);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options98633 = (function sablono$core$select_options98633(coll){
var iter__36172__auto__ = (function sablono$core$select_options98633_$_iter__98642(s__98643){
return (new cljs.core.LazySeq(null,(function (){
var s__98643__$1 = s__98643;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__98643__$1);
if(temp__4657__auto__){
var s__98643__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__98643__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__98643__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__98645 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__98644 = (0);
while(true){
if((i__98644 < size__36171__auto__)){
var x = cljs.core._nth.call(null,c__36170__auto__,i__98644);
cljs.core.chunk_append.call(null,b__98645,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__98649 = x;
var text = cljs.core.nth.call(null,vec__98649,(0),null);
var val = cljs.core.nth.call(null,vec__98649,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__98649,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options98633.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__98655 = (i__98644 + (1));
i__98644 = G__98655;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__98645),sablono$core$select_options98633_$_iter__98642.call(null,cljs.core.chunk_rest.call(null,s__98643__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__98645),null);
}
} else {
var x = cljs.core.first.call(null,s__98643__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__98651 = x;
var text = cljs.core.nth.call(null,vec__98651,(0),null);
var val = cljs.core.nth.call(null,vec__98651,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__98651,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options98633.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options98633_$_iter__98642.call(null,cljs.core.rest.call(null,s__98643__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36172__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options98633);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down98668 = (function sablono$core$drop_down98668(var_args){
var args98669 = [];
var len__36461__auto___98676 = arguments.length;
var i__36462__auto___98677 = (0);
while(true){
if((i__36462__auto___98677 < len__36461__auto___98676)){
args98669.push((arguments[i__36462__auto___98677]));

var G__98678 = (i__36462__auto___98677 + (1));
i__36462__auto___98677 = G__98678;
continue;
} else {
}
break;
}

var G__98674 = args98669.length;
switch (G__98674) {
case 2:
return sablono.core.drop_down98668.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down98668.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98669.length)].join('')));

}
});

sablono.core.drop_down98668.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down98668.call(null,name,options,null);
});

sablono.core.drop_down98668.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down98668.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down98668);
/**
 * Creates a text area element.
 */
sablono.core.text_area98681 = (function sablono$core$text_area98681(var_args){
var args98682 = [];
var len__36461__auto___98736 = arguments.length;
var i__36462__auto___98737 = (0);
while(true){
if((i__36462__auto___98737 < len__36461__auto___98736)){
args98682.push((arguments[i__36462__auto___98737]));

var G__98738 = (i__36462__auto___98737 + (1));
i__36462__auto___98737 = G__98738;
continue;
} else {
}
break;
}

var G__98685 = args98682.length;
switch (G__98685) {
case 1:
return sablono.core.text_area98681.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area98681.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98682.length)].join('')));

}
});

sablono.core.text_area98681.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area98681.call(null,name,null);
});

sablono.core.text_area98681.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area98681.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area98681);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label98742 = (function sablono$core$label98742(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label98742);
/**
 * Creates a submit button.
 */
sablono.core.submit_button98775 = (function sablono$core$submit_button98775(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button98775);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button98776 = (function sablono$core$reset_button98776(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button98776);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to98780 = (function sablono$core$form_to98780(var_args){
var args__36468__auto__ = [];
var len__36461__auto___98828 = arguments.length;
var i__36462__auto___98829 = (0);
while(true){
if((i__36462__auto___98829 < len__36461__auto___98828)){
args__36468__auto__.push((arguments[i__36462__auto___98829]));

var G__98830 = (i__36462__auto___98829 + (1));
i__36462__auto___98829 = G__98830;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to98780.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

sablono.core.form_to98780.cljs$core$IFn$_invoke$arity$variadic = (function (p__98806,body){
var vec__98807 = p__98806;
var method = cljs.core.nth.call(null,vec__98807,(0),null);
var action = cljs.core.nth.call(null,vec__98807,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to98780.cljs$lang$maxFixedArity = (1);

sablono.core.form_to98780.cljs$lang$applyTo = (function (seq98782){
var G__98783 = cljs.core.first.call(null,seq98782);
var seq98782__$1 = cljs.core.next.call(null,seq98782);
return sablono.core.form_to98780.cljs$core$IFn$_invoke$arity$variadic(G__98783,seq98782__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to98780);
