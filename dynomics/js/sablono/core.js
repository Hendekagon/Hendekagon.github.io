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
var G__86960__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__86958 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__86958,(0),null);
var body = cljs.core.nthnext.call(null,vec__86958,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__86960 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__86967__i = 0, G__86967__a = new Array(arguments.length -  0);
while (G__86967__i < G__86967__a.length) {G__86967__a[G__86967__i] = arguments[G__86967__i + 0]; ++G__86967__i;}
  args = new cljs.core.IndexedSeq(G__86967__a,0);
} 
return G__86960__delegate.call(this,args);};
G__86960.cljs$lang$maxFixedArity = 0;
G__86960.cljs$lang$applyTo = (function (arglist__86968){
var args = cljs.core.seq(arglist__86968);
return G__86960__delegate(args);
});
G__86960.cljs$core$IFn$_invoke$arity$variadic = G__86960__delegate;
return G__86960;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__36202__auto__ = (function sablono$core$update_arglists_$_iter__86974(s__86975){
return (new cljs.core.LazySeq(null,(function (){
var s__86975__$1 = s__86975;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__86975__$1);
if(temp__4657__auto__){
var s__86975__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__86975__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__86975__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__86977 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__86976 = (0);
while(true){
if((i__86976 < size__36201__auto__)){
var args = cljs.core._nth.call(null,c__36200__auto__,i__86976);
cljs.core.chunk_append.call(null,b__86977,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__86992 = (i__86976 + (1));
i__86976 = G__86992;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86977),sablono$core$update_arglists_$_iter__86974.call(null,cljs.core.chunk_rest.call(null,s__86975__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86977),null);
}
} else {
var args = cljs.core.first.call(null,s__86975__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__86974.call(null,cljs.core.rest.call(null,s__86975__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36202__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__36498__auto__ = [];
var len__36491__auto___87012 = arguments.length;
var i__36492__auto___87013 = (0);
while(true){
if((i__36492__auto___87013 < len__36491__auto___87012)){
args__36498__auto__.push((arguments[i__36492__auto___87013]));

var G__87020 = (i__36492__auto___87013 + (1));
i__36492__auto___87013 = G__87020;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((0) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__36499__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__36202__auto__ = (function sablono$core$iter__87003(s__87004){
return (new cljs.core.LazySeq(null,(function (){
var s__87004__$1 = s__87004;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__87004__$1);
if(temp__4657__auto__){
var s__87004__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__87004__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__87004__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__87006 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__87005 = (0);
while(true){
if((i__87005 < size__36201__auto__)){
var style = cljs.core._nth.call(null,c__36200__auto__,i__87005);
cljs.core.chunk_append.call(null,b__87006,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__87060 = (i__87005 + (1));
i__87005 = G__87060;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87006),sablono$core$iter__87003.call(null,cljs.core.chunk_rest.call(null,s__87004__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87006),null);
}
} else {
var style = cljs.core.first.call(null,s__87004__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__87003.call(null,cljs.core.rest.call(null,s__87004__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36202__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq87000){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq87000));
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
sablono.core.link_to87082 = (function sablono$core$link_to87082(var_args){
var args__36498__auto__ = [];
var len__36491__auto___87091 = arguments.length;
var i__36492__auto___87092 = (0);
while(true){
if((i__36492__auto___87092 < len__36491__auto___87091)){
args__36498__auto__.push((arguments[i__36492__auto___87092]));

var G__87094 = (i__36492__auto___87092 + (1));
i__36492__auto___87092 = G__87094;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to87082.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

sablono.core.link_to87082.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to87082.cljs$lang$maxFixedArity = (1);

sablono.core.link_to87082.cljs$lang$applyTo = (function (seq87084){
var G__87085 = cljs.core.first.call(null,seq87084);
var seq87084__$1 = cljs.core.next.call(null,seq87084);
return sablono.core.link_to87082.cljs$core$IFn$_invoke$arity$variadic(G__87085,seq87084__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to87082);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to87108 = (function sablono$core$mail_to87108(var_args){
var args__36498__auto__ = [];
var len__36491__auto___87117 = arguments.length;
var i__36492__auto___87118 = (0);
while(true){
if((i__36492__auto___87118 < len__36491__auto___87117)){
args__36498__auto__.push((arguments[i__36492__auto___87118]));

var G__87120 = (i__36492__auto___87118 + (1));
i__36492__auto___87118 = G__87120;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to87108.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

sablono.core.mail_to87108.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__87113){
var vec__87114 = p__87113;
var content = cljs.core.nth.call(null,vec__87114,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__35422__auto__ = content;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to87108.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to87108.cljs$lang$applyTo = (function (seq87109){
var G__87110 = cljs.core.first.call(null,seq87109);
var seq87109__$1 = cljs.core.next.call(null,seq87109);
return sablono.core.mail_to87108.cljs$core$IFn$_invoke$arity$variadic(G__87110,seq87109__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to87108);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list87133 = (function sablono$core$unordered_list87133(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__36202__auto__ = (function sablono$core$unordered_list87133_$_iter__87145(s__87146){
return (new cljs.core.LazySeq(null,(function (){
var s__87146__$1 = s__87146;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__87146__$1);
if(temp__4657__auto__){
var s__87146__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__87146__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__87146__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__87148 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__87147 = (0);
while(true){
if((i__87147 < size__36201__auto__)){
var x = cljs.core._nth.call(null,c__36200__auto__,i__87147);
cljs.core.chunk_append.call(null,b__87148,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__87154 = (i__87147 + (1));
i__87147 = G__87154;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87148),sablono$core$unordered_list87133_$_iter__87145.call(null,cljs.core.chunk_rest.call(null,s__87146__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87148),null);
}
} else {
var x = cljs.core.first.call(null,s__87146__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list87133_$_iter__87145.call(null,cljs.core.rest.call(null,s__87146__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36202__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list87133);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list87167 = (function sablono$core$ordered_list87167(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__36202__auto__ = (function sablono$core$ordered_list87167_$_iter__87204(s__87205){
return (new cljs.core.LazySeq(null,(function (){
var s__87205__$1 = s__87205;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__87205__$1);
if(temp__4657__auto__){
var s__87205__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__87205__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__87205__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__87207 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__87206 = (0);
while(true){
if((i__87206 < size__36201__auto__)){
var x = cljs.core._nth.call(null,c__36200__auto__,i__87206);
cljs.core.chunk_append.call(null,b__87207,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__87242 = (i__87206 + (1));
i__87206 = G__87242;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87207),sablono$core$ordered_list87167_$_iter__87204.call(null,cljs.core.chunk_rest.call(null,s__87205__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87207),null);
}
} else {
var x = cljs.core.first.call(null,s__87205__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list87167_$_iter__87204.call(null,cljs.core.rest.call(null,s__87205__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36202__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list87167);
/**
 * Create an image element.
 */
sablono.core.image87251 = (function sablono$core$image87251(var_args){
var args87252 = [];
var len__36491__auto___87267 = arguments.length;
var i__36492__auto___87271 = (0);
while(true){
if((i__36492__auto___87271 < len__36491__auto___87267)){
args87252.push((arguments[i__36492__auto___87271]));

var G__87278 = (i__36492__auto___87271 + (1));
i__36492__auto___87271 = G__87278;
continue;
} else {
}
break;
}

var G__87260 = args87252.length;
switch (G__87260) {
case 1:
return sablono.core.image87251.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image87251.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87252.length)].join('')));

}
});

sablono.core.image87251.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image87251.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image87251.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image87251);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__87302_SHARP_,p2__87303_SHARP_){
return [cljs.core.str(p1__87302_SHARP_),cljs.core.str("["),cljs.core.str(p2__87303_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__87309_SHARP_,p2__87310_SHARP_){
return [cljs.core.str(p1__87309_SHARP_),cljs.core.str("-"),cljs.core.str(p2__87310_SHARP_)].join('');
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
sablono.core.color_field87358 = (function sablono$core$color_field87358(var_args){
var args87359 = [];
var len__36491__auto___87709 = arguments.length;
var i__36492__auto___87710 = (0);
while(true){
if((i__36492__auto___87710 < len__36491__auto___87709)){
args87359.push((arguments[i__36492__auto___87710]));

var G__87711 = (i__36492__auto___87710 + (1));
i__36492__auto___87710 = G__87711;
continue;
} else {
}
break;
}

var G__87369 = args87359.length;
switch (G__87369) {
case 1:
return sablono.core.color_field87358.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field87358.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87359.length)].join('')));

}
});

sablono.core.color_field87358.cljs$core$IFn$_invoke$arity$1 = (function (name__41168__auto__){
return sablono.core.color_field87358.call(null,name__41168__auto__,null);
});

sablono.core.color_field87358.cljs$core$IFn$_invoke$arity$2 = (function (name__41168__auto__,value__41169__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__41168__auto__,value__41169__auto__);
});

sablono.core.color_field87358.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field87358);

/**
 * Creates a date input field.
 */
sablono.core.date_field87374 = (function sablono$core$date_field87374(var_args){
var args87375 = [];
var len__36491__auto___87717 = arguments.length;
var i__36492__auto___87718 = (0);
while(true){
if((i__36492__auto___87718 < len__36491__auto___87717)){
args87375.push((arguments[i__36492__auto___87718]));

var G__87719 = (i__36492__auto___87718 + (1));
i__36492__auto___87718 = G__87719;
continue;
} else {
}
break;
}

var G__87384 = args87375.length;
switch (G__87384) {
case 1:
return sablono.core.date_field87374.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field87374.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87375.length)].join('')));

}
});

sablono.core.date_field87374.cljs$core$IFn$_invoke$arity$1 = (function (name__41168__auto__){
return sablono.core.date_field87374.call(null,name__41168__auto__,null);
});

sablono.core.date_field87374.cljs$core$IFn$_invoke$arity$2 = (function (name__41168__auto__,value__41169__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__41168__auto__,value__41169__auto__);
});

sablono.core.date_field87374.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field87374);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field87388 = (function sablono$core$datetime_field87388(var_args){
var args87390 = [];
var len__36491__auto___87724 = arguments.length;
var i__36492__auto___87725 = (0);
while(true){
if((i__36492__auto___87725 < len__36491__auto___87724)){
args87390.push((arguments[i__36492__auto___87725]));

var G__87726 = (i__36492__auto___87725 + (1));
i__36492__auto___87725 = G__87726;
continue;
} else {
}
break;
}

var G__87400 = args87390.length;
switch (G__87400) {
case 1:
return sablono.core.datetime_field87388.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field87388.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87390.length)].join('')));

}
});

sablono.core.datetime_field87388.cljs$core$IFn$_invoke$arity$1 = (function (name__41168__auto__){
return sablono.core.datetime_field87388.call(null,name__41168__auto__,null);
});

sablono.core.datetime_field87388.cljs$core$IFn$_invoke$arity$2 = (function (name__41168__auto__,value__41169__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__41168__auto__,value__41169__auto__);
});

sablono.core.datetime_field87388.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field87388);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field87405 = (function sablono$core$datetime_local_field87405(var_args){
var args87406 = [];
var len__36491__auto___87732 = arguments.length;
var i__36492__auto___87733 = (0);
while(true){
if((i__36492__auto___87733 < len__36491__auto___87732)){
args87406.push((arguments[i__36492__auto___87733]));

var G__87735 = (i__36492__auto___87733 + (1));
i__36492__auto___87733 = G__87735;
continue;
} else {
}
break;
}

var G__87413 = args87406.length;
switch (G__87413) {
case 1:
return sablono.core.datetime_local_field87405.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field87405.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87406.length)].join('')));

}
});

sablono.core.datetime_local_field87405.cljs$core$IFn$_invoke$arity$1 = (function (name__41168__auto__){
return sablono.core.datetime_local_field87405.call(null,name__41168__auto__,null);
});

sablono.core.datetime_local_field87405.cljs$core$IFn$_invoke$arity$2 = (function (name__41168__auto__,value__41169__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__41168__auto__,value__41169__auto__);
});

sablono.core.datetime_local_field87405.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field87405);

/**
 * Creates a email input field.
 */
sablono.core.email_field87419 = (function sablono$core$email_field87419(var_args){
var args87420 = [];
var len__36491__auto___87742 = arguments.length;
var i__36492__auto___87744 = (0);
while(true){
if((i__36492__auto___87744 < len__36491__auto___87742)){
args87420.push((arguments[i__36492__auto___87744]));

var G__87746 = (i__36492__auto___87744 + (1));
i__36492__auto___87744 = G__87746;
continue;
} else {
}
break;
}

var G__87430 = args87420.length;
switch (G__87430) {
case 1:
return sablono.core.email_field87419.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field87419.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87420.length)].join('')));

}
});

sablono.core.email_field87419.cljs$core$IFn$_invoke$arity$1 = (function (name__41168__auto__){
return sablono.core.email_field87419.call(null,name__41168__auto__,null);
});

sablono.core.email_field87419.cljs$core$IFn$_invoke$arity$2 = (function (name__41168__auto__,value__41169__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__41168__auto__,value__41169__auto__);
});

sablono.core.email_field87419.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field87419);

/**
 * Creates a file input field.
 */
sablono.core.file_field87435 = (function sablono$core$file_field87435(var_args){
var args87436 = [];
var len__36491__auto___87748 = arguments.length;
var i__36492__auto___87749 = (0);
while(true){
if((i__36492__auto___87749 < len__36491__auto___87748)){
args87436.push((arguments[i__36492__auto___87749]));

var G__87750 = (i__36492__auto___87749 + (1));
i__36492__auto___87749 = G__87750;
continue;
} else {
}
break;
}

var G__87445 = args87436.length;
switch (G__87445) {
case 1:
return sablono.core.file_field87435.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field87435.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87436.length)].join('')));

}
});

sablono.core.file_field87435.cljs$core$IFn$_invoke$arity$1 = (function (name__41168__auto__){
return sablono.core.file_field87435.call(null,name__41168__auto__,null);
});

sablono.core.file_field87435.cljs$core$IFn$_invoke$arity$2 = (function (name__41168__auto__,value__41169__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__41168__auto__,value__41169__auto__);
});

sablono.core.file_field87435.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field87435);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field87449 = (function sablono$core$hidden_field87449(var_args){
var args87450 = [];
var len__36491__auto___87758 = arguments.length;
var i__36492__auto___87759 = (0);
while(true){
if((i__36492__auto___87759 < len__36491__auto___87758)){
args87450.push((arguments[i__36492__auto___87759]));

var G__87771 = (i__36492__auto___87759 + (1));
i__36492__auto___87759 = G__87771;
continue;
} else {
}
break;
}

var G__87475 = args87450.length;
switch (G__87475) {
case 1:
return sablono.core.hidden_field87449.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field87449.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87450.length)].join('')));

}
});

sablono.core.hidden_field87449.cljs$core$IFn$_invoke$arity$1 = (function (name__41168__auto__){
return sablono.core.hidden_field87449.call(null,name__41168__auto__,null);
});

sablono.core.hidden_field87449.cljs$core$IFn$_invoke$arity$2 = (function (name__41168__auto__,value__41169__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__41168__auto__,value__41169__auto__);
});

sablono.core.hidden_field87449.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field87449);

/**
 * Creates a month input field.
 */
sablono.core.month_field87479 = (function sablono$core$month_field87479(var_args){
var args87480 = [];
var len__36491__auto___87776 = arguments.length;
var i__36492__auto___87777 = (0);
while(true){
if((i__36492__auto___87777 < len__36491__auto___87776)){
args87480.push((arguments[i__36492__auto___87777]));

var G__87778 = (i__36492__auto___87777 + (1));
i__36492__auto___87777 = G__87778;
continue;
} else {
}
break;
}

var G__87494 = args87480.length;
switch (G__87494) {
case 1:
return sablono.core.month_field87479.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field87479.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87480.length)].join('')));

}
});

sablono.core.month_field87479.cljs$core$IFn$_invoke$arity$1 = (function (name__41168__auto__){
return sablono.core.month_field87479.call(null,name__41168__auto__,null);
});

sablono.core.month_field87479.cljs$core$IFn$_invoke$arity$2 = (function (name__41168__auto__,value__41169__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__41168__auto__,value__41169__auto__);
});

sablono.core.month_field87479.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field87479);

/**
 * Creates a number input field.
 */
sablono.core.number_field87505 = (function sablono$core$number_field87505(var_args){
var args87511 = [];
var len__36491__auto___87783 = arguments.length;
var i__36492__auto___87784 = (0);
while(true){
if((i__36492__auto___87784 < len__36491__auto___87783)){
args87511.push((arguments[i__36492__auto___87784]));

var G__87785 = (i__36492__auto___87784 + (1));
i__36492__auto___87784 = G__87785;
continue;
} else {
}
break;
}

var G__87518 = args87511.length;
switch (G__87518) {
case 1:
return sablono.core.number_field87505.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field87505.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87511.length)].join('')));

}
});

sablono.core.number_field87505.cljs$core$IFn$_invoke$arity$1 = (function (name__41168__auto__){
return sablono.core.number_field87505.call(null,name__41168__auto__,null);
});

sablono.core.number_field87505.cljs$core$IFn$_invoke$arity$2 = (function (name__41168__auto__,value__41169__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__41168__auto__,value__41169__auto__);
});

sablono.core.number_field87505.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field87505);

/**
 * Creates a password input field.
 */
sablono.core.password_field87523 = (function sablono$core$password_field87523(var_args){
var args87526 = [];
var len__36491__auto___87792 = arguments.length;
var i__36492__auto___87793 = (0);
while(true){
if((i__36492__auto___87793 < len__36491__auto___87792)){
args87526.push((arguments[i__36492__auto___87793]));

var G__87794 = (i__36492__auto___87793 + (1));
i__36492__auto___87793 = G__87794;
continue;
} else {
}
break;
}

var G__87533 = args87526.length;
switch (G__87533) {
case 1:
return sablono.core.password_field87523.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field87523.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87526.length)].join('')));

}
});

sablono.core.password_field87523.cljs$core$IFn$_invoke$arity$1 = (function (name__41168__auto__){
return sablono.core.password_field87523.call(null,name__41168__auto__,null);
});

sablono.core.password_field87523.cljs$core$IFn$_invoke$arity$2 = (function (name__41168__auto__,value__41169__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__41168__auto__,value__41169__auto__);
});

sablono.core.password_field87523.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field87523);

/**
 * Creates a range input field.
 */
sablono.core.range_field87537 = (function sablono$core$range_field87537(var_args){
var args87538 = [];
var len__36491__auto___87800 = arguments.length;
var i__36492__auto___87801 = (0);
while(true){
if((i__36492__auto___87801 < len__36491__auto___87800)){
args87538.push((arguments[i__36492__auto___87801]));

var G__87803 = (i__36492__auto___87801 + (1));
i__36492__auto___87801 = G__87803;
continue;
} else {
}
break;
}

var G__87570 = args87538.length;
switch (G__87570) {
case 1:
return sablono.core.range_field87537.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field87537.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87538.length)].join('')));

}
});

sablono.core.range_field87537.cljs$core$IFn$_invoke$arity$1 = (function (name__41168__auto__){
return sablono.core.range_field87537.call(null,name__41168__auto__,null);
});

sablono.core.range_field87537.cljs$core$IFn$_invoke$arity$2 = (function (name__41168__auto__,value__41169__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__41168__auto__,value__41169__auto__);
});

sablono.core.range_field87537.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field87537);

/**
 * Creates a search input field.
 */
sablono.core.search_field87575 = (function sablono$core$search_field87575(var_args){
var args87576 = [];
var len__36491__auto___87812 = arguments.length;
var i__36492__auto___87814 = (0);
while(true){
if((i__36492__auto___87814 < len__36491__auto___87812)){
args87576.push((arguments[i__36492__auto___87814]));

var G__87815 = (i__36492__auto___87814 + (1));
i__36492__auto___87814 = G__87815;
continue;
} else {
}
break;
}

var G__87583 = args87576.length;
switch (G__87583) {
case 1:
return sablono.core.search_field87575.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field87575.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87576.length)].join('')));

}
});

sablono.core.search_field87575.cljs$core$IFn$_invoke$arity$1 = (function (name__41168__auto__){
return sablono.core.search_field87575.call(null,name__41168__auto__,null);
});

sablono.core.search_field87575.cljs$core$IFn$_invoke$arity$2 = (function (name__41168__auto__,value__41169__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__41168__auto__,value__41169__auto__);
});

sablono.core.search_field87575.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field87575);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field87591 = (function sablono$core$tel_field87591(var_args){
var args87592 = [];
var len__36491__auto___87818 = arguments.length;
var i__36492__auto___87819 = (0);
while(true){
if((i__36492__auto___87819 < len__36491__auto___87818)){
args87592.push((arguments[i__36492__auto___87819]));

var G__87821 = (i__36492__auto___87819 + (1));
i__36492__auto___87819 = G__87821;
continue;
} else {
}
break;
}

var G__87599 = args87592.length;
switch (G__87599) {
case 1:
return sablono.core.tel_field87591.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field87591.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87592.length)].join('')));

}
});

sablono.core.tel_field87591.cljs$core$IFn$_invoke$arity$1 = (function (name__41168__auto__){
return sablono.core.tel_field87591.call(null,name__41168__auto__,null);
});

sablono.core.tel_field87591.cljs$core$IFn$_invoke$arity$2 = (function (name__41168__auto__,value__41169__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__41168__auto__,value__41169__auto__);
});

sablono.core.tel_field87591.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field87591);

/**
 * Creates a text input field.
 */
sablono.core.text_field87613 = (function sablono$core$text_field87613(var_args){
var args87614 = [];
var len__36491__auto___87828 = arguments.length;
var i__36492__auto___87829 = (0);
while(true){
if((i__36492__auto___87829 < len__36491__auto___87828)){
args87614.push((arguments[i__36492__auto___87829]));

var G__87830 = (i__36492__auto___87829 + (1));
i__36492__auto___87829 = G__87830;
continue;
} else {
}
break;
}

var G__87647 = args87614.length;
switch (G__87647) {
case 1:
return sablono.core.text_field87613.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field87613.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87614.length)].join('')));

}
});

sablono.core.text_field87613.cljs$core$IFn$_invoke$arity$1 = (function (name__41168__auto__){
return sablono.core.text_field87613.call(null,name__41168__auto__,null);
});

sablono.core.text_field87613.cljs$core$IFn$_invoke$arity$2 = (function (name__41168__auto__,value__41169__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__41168__auto__,value__41169__auto__);
});

sablono.core.text_field87613.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field87613);

/**
 * Creates a time input field.
 */
sablono.core.time_field87653 = (function sablono$core$time_field87653(var_args){
var args87655 = [];
var len__36491__auto___87850 = arguments.length;
var i__36492__auto___87851 = (0);
while(true){
if((i__36492__auto___87851 < len__36491__auto___87850)){
args87655.push((arguments[i__36492__auto___87851]));

var G__87852 = (i__36492__auto___87851 + (1));
i__36492__auto___87851 = G__87852;
continue;
} else {
}
break;
}

var G__87662 = args87655.length;
switch (G__87662) {
case 1:
return sablono.core.time_field87653.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field87653.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87655.length)].join('')));

}
});

sablono.core.time_field87653.cljs$core$IFn$_invoke$arity$1 = (function (name__41168__auto__){
return sablono.core.time_field87653.call(null,name__41168__auto__,null);
});

sablono.core.time_field87653.cljs$core$IFn$_invoke$arity$2 = (function (name__41168__auto__,value__41169__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__41168__auto__,value__41169__auto__);
});

sablono.core.time_field87653.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field87653);

/**
 * Creates a url input field.
 */
sablono.core.url_field87668 = (function sablono$core$url_field87668(var_args){
var args87669 = [];
var len__36491__auto___87858 = arguments.length;
var i__36492__auto___87859 = (0);
while(true){
if((i__36492__auto___87859 < len__36491__auto___87858)){
args87669.push((arguments[i__36492__auto___87859]));

var G__87861 = (i__36492__auto___87859 + (1));
i__36492__auto___87859 = G__87861;
continue;
} else {
}
break;
}

var G__87700 = args87669.length;
switch (G__87700) {
case 1:
return sablono.core.url_field87668.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field87668.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87669.length)].join('')));

}
});

sablono.core.url_field87668.cljs$core$IFn$_invoke$arity$1 = (function (name__41168__auto__){
return sablono.core.url_field87668.call(null,name__41168__auto__,null);
});

sablono.core.url_field87668.cljs$core$IFn$_invoke$arity$2 = (function (name__41168__auto__,value__41169__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__41168__auto__,value__41169__auto__);
});

sablono.core.url_field87668.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field87668);

/**
 * Creates a week input field.
 */
sablono.core.week_field87704 = (function sablono$core$week_field87704(var_args){
var args87705 = [];
var len__36491__auto___87864 = arguments.length;
var i__36492__auto___87865 = (0);
while(true){
if((i__36492__auto___87865 < len__36491__auto___87864)){
args87705.push((arguments[i__36492__auto___87865]));

var G__87866 = (i__36492__auto___87865 + (1));
i__36492__auto___87865 = G__87866;
continue;
} else {
}
break;
}

var G__87708 = args87705.length;
switch (G__87708) {
case 1:
return sablono.core.week_field87704.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field87704.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87705.length)].join('')));

}
});

sablono.core.week_field87704.cljs$core$IFn$_invoke$arity$1 = (function (name__41168__auto__){
return sablono.core.week_field87704.call(null,name__41168__auto__,null);
});

sablono.core.week_field87704.cljs$core$IFn$_invoke$arity$2 = (function (name__41168__auto__,value__41169__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__41168__auto__,value__41169__auto__);
});

sablono.core.week_field87704.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field87704);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box87871 = (function sablono$core$check_box87871(var_args){
var args87872 = [];
var len__36491__auto___87881 = arguments.length;
var i__36492__auto___87882 = (0);
while(true){
if((i__36492__auto___87882 < len__36491__auto___87881)){
args87872.push((arguments[i__36492__auto___87882]));

var G__87883 = (i__36492__auto___87882 + (1));
i__36492__auto___87882 = G__87883;
continue;
} else {
}
break;
}

var G__87876 = args87872.length;
switch (G__87876) {
case 1:
return sablono.core.check_box87871.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box87871.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box87871.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87872.length)].join('')));

}
});

sablono.core.check_box87871.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box87871.call(null,name,null);
});

sablono.core.check_box87871.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box87871.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box87871.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box87871.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box87871);
/**
 * Creates a radio button.
 */
sablono.core.radio_button87897 = (function sablono$core$radio_button87897(var_args){
var args87898 = [];
var len__36491__auto___87904 = arguments.length;
var i__36492__auto___87905 = (0);
while(true){
if((i__36492__auto___87905 < len__36491__auto___87904)){
args87898.push((arguments[i__36492__auto___87905]));

var G__87908 = (i__36492__auto___87905 + (1));
i__36492__auto___87905 = G__87908;
continue;
} else {
}
break;
}

var G__87903 = args87898.length;
switch (G__87903) {
case 1:
return sablono.core.radio_button87897.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button87897.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button87897.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87898.length)].join('')));

}
});

sablono.core.radio_button87897.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button87897.call(null,group,null);
});

sablono.core.radio_button87897.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button87897.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button87897.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button87897.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button87897);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options87923 = (function sablono$core$select_options87923(coll){
var iter__36202__auto__ = (function sablono$core$select_options87923_$_iter__87934(s__87935){
return (new cljs.core.LazySeq(null,(function (){
var s__87935__$1 = s__87935;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__87935__$1);
if(temp__4657__auto__){
var s__87935__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__87935__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__87935__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__87937 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__87936 = (0);
while(true){
if((i__87936 < size__36201__auto__)){
var x = cljs.core._nth.call(null,c__36200__auto__,i__87936);
cljs.core.chunk_append.call(null,b__87937,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__87964 = x;
var text = cljs.core.nth.call(null,vec__87964,(0),null);
var val = cljs.core.nth.call(null,vec__87964,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__87964,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options87923.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__87972 = (i__87936 + (1));
i__87936 = G__87972;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87937),sablono$core$select_options87923_$_iter__87934.call(null,cljs.core.chunk_rest.call(null,s__87935__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87937),null);
}
} else {
var x = cljs.core.first.call(null,s__87935__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__87965 = x;
var text = cljs.core.nth.call(null,vec__87965,(0),null);
var val = cljs.core.nth.call(null,vec__87965,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__87965,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options87923.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options87923_$_iter__87934.call(null,cljs.core.rest.call(null,s__87935__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36202__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options87923);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down87992 = (function sablono$core$drop_down87992(var_args){
var args87993 = [];
var len__36491__auto___88001 = arguments.length;
var i__36492__auto___88002 = (0);
while(true){
if((i__36492__auto___88002 < len__36491__auto___88001)){
args87993.push((arguments[i__36492__auto___88002]));

var G__88007 = (i__36492__auto___88002 + (1));
i__36492__auto___88002 = G__88007;
continue;
} else {
}
break;
}

var G__87995 = args87993.length;
switch (G__87995) {
case 2:
return sablono.core.drop_down87992.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down87992.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87993.length)].join('')));

}
});

sablono.core.drop_down87992.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down87992.call(null,name,options,null);
});

sablono.core.drop_down87992.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down87992.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down87992);
/**
 * Creates a text area element.
 */
sablono.core.text_area88009 = (function sablono$core$text_area88009(var_args){
var args88010 = [];
var len__36491__auto___88019 = arguments.length;
var i__36492__auto___88020 = (0);
while(true){
if((i__36492__auto___88020 < len__36491__auto___88019)){
args88010.push((arguments[i__36492__auto___88020]));

var G__88022 = (i__36492__auto___88020 + (1));
i__36492__auto___88020 = G__88022;
continue;
} else {
}
break;
}

var G__88014 = args88010.length;
switch (G__88014) {
case 1:
return sablono.core.text_area88009.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area88009.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args88010.length)].join('')));

}
});

sablono.core.text_area88009.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area88009.call(null,name,null);
});

sablono.core.text_area88009.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area88009.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area88009);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label88028 = (function sablono$core$label88028(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label88028);
/**
 * Creates a submit button.
 */
sablono.core.submit_button88066 = (function sablono$core$submit_button88066(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button88066);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button88067 = (function sablono$core$reset_button88067(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button88067);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to88068 = (function sablono$core$form_to88068(var_args){
var args__36498__auto__ = [];
var len__36491__auto___88101 = arguments.length;
var i__36492__auto___88102 = (0);
while(true){
if((i__36492__auto___88102 < len__36491__auto___88101)){
args__36498__auto__.push((arguments[i__36492__auto___88102]));

var G__88103 = (i__36492__auto___88102 + (1));
i__36492__auto___88102 = G__88103;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to88068.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

sablono.core.form_to88068.cljs$core$IFn$_invoke$arity$variadic = (function (p__88081,body){
var vec__88082 = p__88081;
var method = cljs.core.nth.call(null,vec__88082,(0),null);
var action = cljs.core.nth.call(null,vec__88082,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to88068.cljs$lang$maxFixedArity = (1);

sablono.core.form_to88068.cljs$lang$applyTo = (function (seq88070){
var G__88072 = cljs.core.first.call(null,seq88070);
var seq88070__$1 = cljs.core.next.call(null,seq88070);
return sablono.core.form_to88068.cljs$core$IFn$_invoke$arity$variadic(G__88072,seq88070__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to88068);
