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
var G__286217__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__286214 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__286214,(0),null);
var body = cljs.core.nthnext.call(null,vec__286214,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__286217 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__286224__i = 0, G__286224__a = new Array(arguments.length -  0);
while (G__286224__i < G__286224__a.length) {G__286224__a[G__286224__i] = arguments[G__286224__i + 0]; ++G__286224__i;}
  args = new cljs.core.IndexedSeq(G__286224__a,0);
} 
return G__286217__delegate.call(this,args);};
G__286217.cljs$lang$maxFixedArity = 0;
G__286217.cljs$lang$applyTo = (function (arglist__286226){
var args = cljs.core.seq(arglist__286226);
return G__286217__delegate(args);
});
G__286217.cljs$core$IFn$_invoke$arity$variadic = G__286217__delegate;
return G__286217;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__36172__auto__ = (function sablono$core$update_arglists_$_iter__286239(s__286240){
return (new cljs.core.LazySeq(null,(function (){
var s__286240__$1 = s__286240;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__286240__$1);
if(temp__4657__auto__){
var s__286240__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__286240__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__286240__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__286242 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__286241 = (0);
while(true){
if((i__286241 < size__36171__auto__)){
var args = cljs.core._nth.call(null,c__36170__auto__,i__286241);
cljs.core.chunk_append.call(null,b__286242,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__286248 = (i__286241 + (1));
i__286241 = G__286248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__286242),sablono$core$update_arglists_$_iter__286239.call(null,cljs.core.chunk_rest.call(null,s__286240__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__286242),null);
}
} else {
var args = cljs.core.first.call(null,s__286240__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__286239.call(null,cljs.core.rest.call(null,s__286240__$2)));
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
var len__36461__auto___286260 = arguments.length;
var i__36462__auto___286261 = (0);
while(true){
if((i__36462__auto___286261 < len__36461__auto___286260)){
args__36468__auto__.push((arguments[i__36462__auto___286261]));

var G__286262 = (i__36462__auto___286261 + (1));
i__36462__auto___286261 = G__286262;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((0) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__36469__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__36172__auto__ = (function sablono$core$iter__286253(s__286254){
return (new cljs.core.LazySeq(null,(function (){
var s__286254__$1 = s__286254;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__286254__$1);
if(temp__4657__auto__){
var s__286254__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__286254__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__286254__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__286256 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__286255 = (0);
while(true){
if((i__286255 < size__36171__auto__)){
var style = cljs.core._nth.call(null,c__36170__auto__,i__286255);
cljs.core.chunk_append.call(null,b__286256,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__286273 = (i__286255 + (1));
i__286255 = G__286273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__286256),sablono$core$iter__286253.call(null,cljs.core.chunk_rest.call(null,s__286254__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__286256),null);
}
} else {
var style = cljs.core.first.call(null,s__286254__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__286253.call(null,cljs.core.rest.call(null,s__286254__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq286252){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq286252));
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
sablono.core.link_to286285 = (function sablono$core$link_to286285(var_args){
var args__36468__auto__ = [];
var len__36461__auto___286298 = arguments.length;
var i__36462__auto___286299 = (0);
while(true){
if((i__36462__auto___286299 < len__36461__auto___286298)){
args__36468__auto__.push((arguments[i__36462__auto___286299]));

var G__286300 = (i__36462__auto___286299 + (1));
i__36462__auto___286299 = G__286300;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to286285.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

sablono.core.link_to286285.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to286285.cljs$lang$maxFixedArity = (1);

sablono.core.link_to286285.cljs$lang$applyTo = (function (seq286287){
var G__286288 = cljs.core.first.call(null,seq286287);
var seq286287__$1 = cljs.core.next.call(null,seq286287);
return sablono.core.link_to286285.cljs$core$IFn$_invoke$arity$variadic(G__286288,seq286287__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to286285);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to286304 = (function sablono$core$mail_to286304(var_args){
var args__36468__auto__ = [];
var len__36461__auto___286315 = arguments.length;
var i__36462__auto___286316 = (0);
while(true){
if((i__36462__auto___286316 < len__36461__auto___286315)){
args__36468__auto__.push((arguments[i__36462__auto___286316]));

var G__286317 = (i__36462__auto___286316 + (1));
i__36462__auto___286316 = G__286317;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to286304.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

sablono.core.mail_to286304.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__286308){
var vec__286309 = p__286308;
var content = cljs.core.nth.call(null,vec__286309,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__35392__auto__ = content;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to286304.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to286304.cljs$lang$applyTo = (function (seq286305){
var G__286306 = cljs.core.first.call(null,seq286305);
var seq286305__$1 = cljs.core.next.call(null,seq286305);
return sablono.core.mail_to286304.cljs$core$IFn$_invoke$arity$variadic(G__286306,seq286305__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to286304);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list286355 = (function sablono$core$unordered_list286355(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__36172__auto__ = (function sablono$core$unordered_list286355_$_iter__286365(s__286366){
return (new cljs.core.LazySeq(null,(function (){
var s__286366__$1 = s__286366;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__286366__$1);
if(temp__4657__auto__){
var s__286366__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__286366__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__286366__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__286368 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__286367 = (0);
while(true){
if((i__286367 < size__36171__auto__)){
var x = cljs.core._nth.call(null,c__36170__auto__,i__286367);
cljs.core.chunk_append.call(null,b__286368,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__286387 = (i__286367 + (1));
i__286367 = G__286387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__286368),sablono$core$unordered_list286355_$_iter__286365.call(null,cljs.core.chunk_rest.call(null,s__286366__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__286368),null);
}
} else {
var x = cljs.core.first.call(null,s__286366__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list286355_$_iter__286365.call(null,cljs.core.rest.call(null,s__286366__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list286355);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list286397 = (function sablono$core$ordered_list286397(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__36172__auto__ = (function sablono$core$ordered_list286397_$_iter__286411(s__286412){
return (new cljs.core.LazySeq(null,(function (){
var s__286412__$1 = s__286412;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__286412__$1);
if(temp__4657__auto__){
var s__286412__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__286412__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__286412__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__286414 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__286413 = (0);
while(true){
if((i__286413 < size__36171__auto__)){
var x = cljs.core._nth.call(null,c__36170__auto__,i__286413);
cljs.core.chunk_append.call(null,b__286414,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__286425 = (i__286413 + (1));
i__286413 = G__286425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__286414),sablono$core$ordered_list286397_$_iter__286411.call(null,cljs.core.chunk_rest.call(null,s__286412__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__286414),null);
}
} else {
var x = cljs.core.first.call(null,s__286412__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list286397_$_iter__286411.call(null,cljs.core.rest.call(null,s__286412__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list286397);
/**
 * Create an image element.
 */
sablono.core.image286429 = (function sablono$core$image286429(var_args){
var args286431 = [];
var len__36461__auto___286441 = arguments.length;
var i__36462__auto___286442 = (0);
while(true){
if((i__36462__auto___286442 < len__36461__auto___286441)){
args286431.push((arguments[i__36462__auto___286442]));

var G__286444 = (i__36462__auto___286442 + (1));
i__36462__auto___286442 = G__286444;
continue;
} else {
}
break;
}

var G__286438 = args286431.length;
switch (G__286438) {
case 1:
return sablono.core.image286429.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image286429.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286431.length)].join('')));

}
});

sablono.core.image286429.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image286429.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image286429.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image286429);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__286450_SHARP_,p2__286451_SHARP_){
return [cljs.core.str(p1__286450_SHARP_),cljs.core.str("["),cljs.core.str(p2__286451_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__286456_SHARP_,p2__286457_SHARP_){
return [cljs.core.str(p1__286456_SHARP_),cljs.core.str("-"),cljs.core.str(p2__286457_SHARP_)].join('');
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
sablono.core.color_field286469 = (function sablono$core$color_field286469(var_args){
var args286471 = [];
var len__36461__auto___286769 = arguments.length;
var i__36462__auto___286770 = (0);
while(true){
if((i__36462__auto___286770 < len__36461__auto___286769)){
args286471.push((arguments[i__36462__auto___286770]));

var G__286773 = (i__36462__auto___286770 + (1));
i__36462__auto___286770 = G__286773;
continue;
} else {
}
break;
}

var G__286479 = args286471.length;
switch (G__286479) {
case 1:
return sablono.core.color_field286469.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field286469.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286471.length)].join('')));

}
});

sablono.core.color_field286469.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.color_field286469.call(null,name__40961__auto__,null);
});

sablono.core.color_field286469.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.color_field286469.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field286469);

/**
 * Creates a date input field.
 */
sablono.core.date_field286482 = (function sablono$core$date_field286482(var_args){
var args286484 = [];
var len__36461__auto___286780 = arguments.length;
var i__36462__auto___286781 = (0);
while(true){
if((i__36462__auto___286781 < len__36461__auto___286780)){
args286484.push((arguments[i__36462__auto___286781]));

var G__286785 = (i__36462__auto___286781 + (1));
i__36462__auto___286781 = G__286785;
continue;
} else {
}
break;
}

var G__286491 = args286484.length;
switch (G__286491) {
case 1:
return sablono.core.date_field286482.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field286482.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286484.length)].join('')));

}
});

sablono.core.date_field286482.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.date_field286482.call(null,name__40961__auto__,null);
});

sablono.core.date_field286482.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.date_field286482.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field286482);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field286495 = (function sablono$core$datetime_field286495(var_args){
var args286496 = [];
var len__36461__auto___286805 = arguments.length;
var i__36462__auto___286806 = (0);
while(true){
if((i__36462__auto___286806 < len__36461__auto___286805)){
args286496.push((arguments[i__36462__auto___286806]));

var G__286808 = (i__36462__auto___286806 + (1));
i__36462__auto___286806 = G__286808;
continue;
} else {
}
break;
}

var G__286512 = args286496.length;
switch (G__286512) {
case 1:
return sablono.core.datetime_field286495.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field286495.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286496.length)].join('')));

}
});

sablono.core.datetime_field286495.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.datetime_field286495.call(null,name__40961__auto__,null);
});

sablono.core.datetime_field286495.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.datetime_field286495.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field286495);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field286518 = (function sablono$core$datetime_local_field286518(var_args){
var args286519 = [];
var len__36461__auto___286822 = arguments.length;
var i__36462__auto___286823 = (0);
while(true){
if((i__36462__auto___286823 < len__36461__auto___286822)){
args286519.push((arguments[i__36462__auto___286823]));

var G__286826 = (i__36462__auto___286823 + (1));
i__36462__auto___286823 = G__286826;
continue;
} else {
}
break;
}

var G__286526 = args286519.length;
switch (G__286526) {
case 1:
return sablono.core.datetime_local_field286518.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field286518.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286519.length)].join('')));

}
});

sablono.core.datetime_local_field286518.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.datetime_local_field286518.call(null,name__40961__auto__,null);
});

sablono.core.datetime_local_field286518.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.datetime_local_field286518.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field286518);

/**
 * Creates a email input field.
 */
sablono.core.email_field286530 = (function sablono$core$email_field286530(var_args){
var args286532 = [];
var len__36461__auto___286848 = arguments.length;
var i__36462__auto___286849 = (0);
while(true){
if((i__36462__auto___286849 < len__36461__auto___286848)){
args286532.push((arguments[i__36462__auto___286849]));

var G__286853 = (i__36462__auto___286849 + (1));
i__36462__auto___286849 = G__286853;
continue;
} else {
}
break;
}

var G__286552 = args286532.length;
switch (G__286552) {
case 1:
return sablono.core.email_field286530.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field286530.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286532.length)].join('')));

}
});

sablono.core.email_field286530.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.email_field286530.call(null,name__40961__auto__,null);
});

sablono.core.email_field286530.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.email_field286530.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field286530);

/**
 * Creates a file input field.
 */
sablono.core.file_field286554 = (function sablono$core$file_field286554(var_args){
var args286555 = [];
var len__36461__auto___286897 = arguments.length;
var i__36462__auto___286898 = (0);
while(true){
if((i__36462__auto___286898 < len__36461__auto___286897)){
args286555.push((arguments[i__36462__auto___286898]));

var G__286902 = (i__36462__auto___286898 + (1));
i__36462__auto___286898 = G__286902;
continue;
} else {
}
break;
}

var G__286566 = args286555.length;
switch (G__286566) {
case 1:
return sablono.core.file_field286554.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field286554.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286555.length)].join('')));

}
});

sablono.core.file_field286554.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.file_field286554.call(null,name__40961__auto__,null);
});

sablono.core.file_field286554.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.file_field286554.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field286554);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field286570 = (function sablono$core$hidden_field286570(var_args){
var args286572 = [];
var len__36461__auto___286914 = arguments.length;
var i__36462__auto___286916 = (0);
while(true){
if((i__36462__auto___286916 < len__36461__auto___286914)){
args286572.push((arguments[i__36462__auto___286916]));

var G__286919 = (i__36462__auto___286916 + (1));
i__36462__auto___286916 = G__286919;
continue;
} else {
}
break;
}

var G__286576 = args286572.length;
switch (G__286576) {
case 1:
return sablono.core.hidden_field286570.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field286570.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286572.length)].join('')));

}
});

sablono.core.hidden_field286570.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.hidden_field286570.call(null,name__40961__auto__,null);
});

sablono.core.hidden_field286570.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.hidden_field286570.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field286570);

/**
 * Creates a month input field.
 */
sablono.core.month_field286601 = (function sablono$core$month_field286601(var_args){
var args286604 = [];
var len__36461__auto___286928 = arguments.length;
var i__36462__auto___286929 = (0);
while(true){
if((i__36462__auto___286929 < len__36461__auto___286928)){
args286604.push((arguments[i__36462__auto___286929]));

var G__286934 = (i__36462__auto___286929 + (1));
i__36462__auto___286929 = G__286934;
continue;
} else {
}
break;
}

var G__286608 = args286604.length;
switch (G__286608) {
case 1:
return sablono.core.month_field286601.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field286601.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286604.length)].join('')));

}
});

sablono.core.month_field286601.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.month_field286601.call(null,name__40961__auto__,null);
});

sablono.core.month_field286601.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.month_field286601.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field286601);

/**
 * Creates a number input field.
 */
sablono.core.number_field286612 = (function sablono$core$number_field286612(var_args){
var args286613 = [];
var len__36461__auto___286976 = arguments.length;
var i__36462__auto___286978 = (0);
while(true){
if((i__36462__auto___286978 < len__36461__auto___286976)){
args286613.push((arguments[i__36462__auto___286978]));

var G__286982 = (i__36462__auto___286978 + (1));
i__36462__auto___286978 = G__286982;
continue;
} else {
}
break;
}

var G__286623 = args286613.length;
switch (G__286623) {
case 1:
return sablono.core.number_field286612.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field286612.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286613.length)].join('')));

}
});

sablono.core.number_field286612.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.number_field286612.call(null,name__40961__auto__,null);
});

sablono.core.number_field286612.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.number_field286612.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field286612);

/**
 * Creates a password input field.
 */
sablono.core.password_field286627 = (function sablono$core$password_field286627(var_args){
var args286628 = [];
var len__36461__auto___286992 = arguments.length;
var i__36462__auto___286993 = (0);
while(true){
if((i__36462__auto___286993 < len__36461__auto___286992)){
args286628.push((arguments[i__36462__auto___286993]));

var G__286998 = (i__36462__auto___286993 + (1));
i__36462__auto___286993 = G__286998;
continue;
} else {
}
break;
}

var G__286635 = args286628.length;
switch (G__286635) {
case 1:
return sablono.core.password_field286627.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field286627.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286628.length)].join('')));

}
});

sablono.core.password_field286627.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.password_field286627.call(null,name__40961__auto__,null);
});

sablono.core.password_field286627.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.password_field286627.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field286627);

/**
 * Creates a range input field.
 */
sablono.core.range_field286644 = (function sablono$core$range_field286644(var_args){
var args286650 = [];
var len__36461__auto___287008 = arguments.length;
var i__36462__auto___287009 = (0);
while(true){
if((i__36462__auto___287009 < len__36461__auto___287008)){
args286650.push((arguments[i__36462__auto___287009]));

var G__287015 = (i__36462__auto___287009 + (1));
i__36462__auto___287009 = G__287015;
continue;
} else {
}
break;
}

var G__286654 = args286650.length;
switch (G__286654) {
case 1:
return sablono.core.range_field286644.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field286644.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286650.length)].join('')));

}
});

sablono.core.range_field286644.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.range_field286644.call(null,name__40961__auto__,null);
});

sablono.core.range_field286644.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.range_field286644.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field286644);

/**
 * Creates a search input field.
 */
sablono.core.search_field286661 = (function sablono$core$search_field286661(var_args){
var args286662 = [];
var len__36461__auto___287034 = arguments.length;
var i__36462__auto___287035 = (0);
while(true){
if((i__36462__auto___287035 < len__36461__auto___287034)){
args286662.push((arguments[i__36462__auto___287035]));

var G__287037 = (i__36462__auto___287035 + (1));
i__36462__auto___287035 = G__287037;
continue;
} else {
}
break;
}

var G__286689 = args286662.length;
switch (G__286689) {
case 1:
return sablono.core.search_field286661.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field286661.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286662.length)].join('')));

}
});

sablono.core.search_field286661.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.search_field286661.call(null,name__40961__auto__,null);
});

sablono.core.search_field286661.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.search_field286661.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field286661);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field286694 = (function sablono$core$tel_field286694(var_args){
var args286695 = [];
var len__36461__auto___287043 = arguments.length;
var i__36462__auto___287044 = (0);
while(true){
if((i__36462__auto___287044 < len__36461__auto___287043)){
args286695.push((arguments[i__36462__auto___287044]));

var G__287045 = (i__36462__auto___287044 + (1));
i__36462__auto___287044 = G__287045;
continue;
} else {
}
break;
}

var G__286702 = args286695.length;
switch (G__286702) {
case 1:
return sablono.core.tel_field286694.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field286694.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286695.length)].join('')));

}
});

sablono.core.tel_field286694.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.tel_field286694.call(null,name__40961__auto__,null);
});

sablono.core.tel_field286694.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.tel_field286694.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field286694);

/**
 * Creates a text input field.
 */
sablono.core.text_field286704 = (function sablono$core$text_field286704(var_args){
var args286707 = [];
var len__36461__auto___287051 = arguments.length;
var i__36462__auto___287052 = (0);
while(true){
if((i__36462__auto___287052 < len__36461__auto___287051)){
args286707.push((arguments[i__36462__auto___287052]));

var G__287053 = (i__36462__auto___287052 + (1));
i__36462__auto___287052 = G__287053;
continue;
} else {
}
break;
}

var G__286714 = args286707.length;
switch (G__286714) {
case 1:
return sablono.core.text_field286704.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field286704.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286707.length)].join('')));

}
});

sablono.core.text_field286704.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.text_field286704.call(null,name__40961__auto__,null);
});

sablono.core.text_field286704.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.text_field286704.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field286704);

/**
 * Creates a time input field.
 */
sablono.core.time_field286719 = (function sablono$core$time_field286719(var_args){
var args286721 = [];
var len__36461__auto___287058 = arguments.length;
var i__36462__auto___287059 = (0);
while(true){
if((i__36462__auto___287059 < len__36461__auto___287058)){
args286721.push((arguments[i__36462__auto___287059]));

var G__287061 = (i__36462__auto___287059 + (1));
i__36462__auto___287059 = G__287061;
continue;
} else {
}
break;
}

var G__286728 = args286721.length;
switch (G__286728) {
case 1:
return sablono.core.time_field286719.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field286719.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286721.length)].join('')));

}
});

sablono.core.time_field286719.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.time_field286719.call(null,name__40961__auto__,null);
});

sablono.core.time_field286719.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.time_field286719.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field286719);

/**
 * Creates a url input field.
 */
sablono.core.url_field286739 = (function sablono$core$url_field286739(var_args){
var args286741 = [];
var len__36461__auto___287067 = arguments.length;
var i__36462__auto___287068 = (0);
while(true){
if((i__36462__auto___287068 < len__36461__auto___287067)){
args286741.push((arguments[i__36462__auto___287068]));

var G__287069 = (i__36462__auto___287068 + (1));
i__36462__auto___287068 = G__287069;
continue;
} else {
}
break;
}

var G__286746 = args286741.length;
switch (G__286746) {
case 1:
return sablono.core.url_field286739.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field286739.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286741.length)].join('')));

}
});

sablono.core.url_field286739.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.url_field286739.call(null,name__40961__auto__,null);
});

sablono.core.url_field286739.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.url_field286739.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field286739);

/**
 * Creates a week input field.
 */
sablono.core.week_field286757 = (function sablono$core$week_field286757(var_args){
var args286758 = [];
var len__36461__auto___287074 = arguments.length;
var i__36462__auto___287075 = (0);
while(true){
if((i__36462__auto___287075 < len__36461__auto___287074)){
args286758.push((arguments[i__36462__auto___287075]));

var G__287076 = (i__36462__auto___287075 + (1));
i__36462__auto___287075 = G__287076;
continue;
} else {
}
break;
}

var G__286764 = args286758.length;
switch (G__286764) {
case 1:
return sablono.core.week_field286757.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field286757.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286758.length)].join('')));

}
});

sablono.core.week_field286757.cljs$core$IFn$_invoke$arity$1 = (function (name__40961__auto__){
return sablono.core.week_field286757.call(null,name__40961__auto__,null);
});

sablono.core.week_field286757.cljs$core$IFn$_invoke$arity$2 = (function (name__40961__auto__,value__40962__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__40961__auto__,value__40962__auto__);
});

sablono.core.week_field286757.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field286757);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box287087 = (function sablono$core$check_box287087(var_args){
var args287088 = [];
var len__36461__auto___287095 = arguments.length;
var i__36462__auto___287096 = (0);
while(true){
if((i__36462__auto___287096 < len__36461__auto___287095)){
args287088.push((arguments[i__36462__auto___287096]));

var G__287099 = (i__36462__auto___287096 + (1));
i__36462__auto___287096 = G__287099;
continue;
} else {
}
break;
}

var G__287091 = args287088.length;
switch (G__287091) {
case 1:
return sablono.core.check_box287087.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box287087.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box287087.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args287088.length)].join('')));

}
});

sablono.core.check_box287087.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box287087.call(null,name,null);
});

sablono.core.check_box287087.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box287087.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box287087.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box287087.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box287087);
/**
 * Creates a radio button.
 */
sablono.core.radio_button287107 = (function sablono$core$radio_button287107(var_args){
var args287108 = [];
var len__36461__auto___287117 = arguments.length;
var i__36462__auto___287118 = (0);
while(true){
if((i__36462__auto___287118 < len__36461__auto___287117)){
args287108.push((arguments[i__36462__auto___287118]));

var G__287121 = (i__36462__auto___287118 + (1));
i__36462__auto___287118 = G__287121;
continue;
} else {
}
break;
}

var G__287114 = args287108.length;
switch (G__287114) {
case 1:
return sablono.core.radio_button287107.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button287107.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button287107.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args287108.length)].join('')));

}
});

sablono.core.radio_button287107.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button287107.call(null,group,null);
});

sablono.core.radio_button287107.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button287107.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button287107.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button287107.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button287107);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options287129 = (function sablono$core$select_options287129(coll){
var iter__36172__auto__ = (function sablono$core$select_options287129_$_iter__287149(s__287150){
return (new cljs.core.LazySeq(null,(function (){
var s__287150__$1 = s__287150;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__287150__$1);
if(temp__4657__auto__){
var s__287150__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__287150__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__287150__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__287152 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__287151 = (0);
while(true){
if((i__287151 < size__36171__auto__)){
var x = cljs.core._nth.call(null,c__36170__auto__,i__287151);
cljs.core.chunk_append.call(null,b__287152,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__287159 = x;
var text = cljs.core.nth.call(null,vec__287159,(0),null);
var val = cljs.core.nth.call(null,vec__287159,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__287159,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options287129.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__287173 = (i__287151 + (1));
i__287151 = G__287173;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__287152),sablono$core$select_options287129_$_iter__287149.call(null,cljs.core.chunk_rest.call(null,s__287150__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__287152),null);
}
} else {
var x = cljs.core.first.call(null,s__287150__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__287162 = x;
var text = cljs.core.nth.call(null,vec__287162,(0),null);
var val = cljs.core.nth.call(null,vec__287162,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__287162,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options287129.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options287129_$_iter__287149.call(null,cljs.core.rest.call(null,s__287150__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options287129);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down287182 = (function sablono$core$drop_down287182(var_args){
var args287183 = [];
var len__36461__auto___287189 = arguments.length;
var i__36462__auto___287190 = (0);
while(true){
if((i__36462__auto___287190 < len__36461__auto___287189)){
args287183.push((arguments[i__36462__auto___287190]));

var G__287194 = (i__36462__auto___287190 + (1));
i__36462__auto___287190 = G__287194;
continue;
} else {
}
break;
}

var G__287188 = args287183.length;
switch (G__287188) {
case 2:
return sablono.core.drop_down287182.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down287182.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args287183.length)].join('')));

}
});

sablono.core.drop_down287182.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down287182.call(null,name,options,null);
});

sablono.core.drop_down287182.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down287182.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down287182);
/**
 * Creates a text area element.
 */
sablono.core.text_area287211 = (function sablono$core$text_area287211(var_args){
var args287212 = [];
var len__36461__auto___287219 = arguments.length;
var i__36462__auto___287220 = (0);
while(true){
if((i__36462__auto___287220 < len__36461__auto___287219)){
args287212.push((arguments[i__36462__auto___287220]));

var G__287222 = (i__36462__auto___287220 + (1));
i__36462__auto___287220 = G__287222;
continue;
} else {
}
break;
}

var G__287217 = args287212.length;
switch (G__287217) {
case 1:
return sablono.core.text_area287211.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area287211.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args287212.length)].join('')));

}
});

sablono.core.text_area287211.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area287211.call(null,name,null);
});

sablono.core.text_area287211.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area287211.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area287211);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label287234 = (function sablono$core$label287234(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label287234);
/**
 * Creates a submit button.
 */
sablono.core.submit_button287237 = (function sablono$core$submit_button287237(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button287237);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button287244 = (function sablono$core$reset_button287244(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button287244);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to287245 = (function sablono$core$form_to287245(var_args){
var args__36468__auto__ = [];
var len__36461__auto___287260 = arguments.length;
var i__36462__auto___287261 = (0);
while(true){
if((i__36462__auto___287261 < len__36461__auto___287260)){
args__36468__auto__.push((arguments[i__36462__auto___287261]));

var G__287267 = (i__36462__auto___287261 + (1));
i__36462__auto___287261 = G__287267;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to287245.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

sablono.core.form_to287245.cljs$core$IFn$_invoke$arity$variadic = (function (p__287253,body){
var vec__287254 = p__287253;
var method = cljs.core.nth.call(null,vec__287254,(0),null);
var action = cljs.core.nth.call(null,vec__287254,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to287245.cljs$lang$maxFixedArity = (1);

sablono.core.form_to287245.cljs$lang$applyTo = (function (seq287246){
var G__287247 = cljs.core.first.call(null,seq287246);
var seq287246__$1 = cljs.core.next.call(null,seq287246);
return sablono.core.form_to287245.cljs$core$IFn$_invoke$arity$variadic(G__287247,seq287246__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to287245);
