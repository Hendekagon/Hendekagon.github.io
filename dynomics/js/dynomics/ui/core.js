// Compiled by ClojureScript 1.7.170 {}
goog.provide('dynomics.ui.core');
goog.require('cljs.core');
goog.require('dynomics.space.core');
cljs.core.enable_console_print_BANG_.call(null);
dynomics.ui.core.alphabet = cljs.core.PersistentHashMap.fromArrays([(65),(70),(74),(86),(72),(69),(85),(88),(77),(75),(90),(89),(66),(82),(76),(68),(83),(78),(81),(79),(87),(73),(67),(71),(80),(84)],[new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"u","u",-1156634785),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"t","t",-1397832519)]);
dynomics.ui.core.numbers = cljs.core.PersistentHashMap.fromArrays([(55),(54),(48),(50),(56),(51),(57),(53),(52),(49)],[new cljs.core.Keyword(null,"7","7",993885869),new cljs.core.Keyword(null,"6","6",-1107752709),new cljs.core.Keyword(null,"0","0",351625802),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"8","8",1405994928),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.Keyword(null,"9","9",1664767314),new cljs.core.Keyword(null,"5","5",538911032),new cljs.core.Keyword(null,"4","4",-1197948085),new cljs.core.Keyword(null,"1","1",-521621649)]);
dynomics.ui.core.keycode_to_keyword = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([(186),(188),(59),(20),(27),(39),(46),(222),(144),(192),(221),(32),(40),(91),(33),(13),(109),(191),(36),(187),(219),(93),(189),(220),(34),(17),(107),(35),(19),(9),(145),(45),(16),(38),(18),(37),(8),(190)],[new cljs.core.Keyword(null,"semicolon","semicolon",797086549),new cljs.core.Keyword(null,"comma","comma",1699024745),new cljs.core.Keyword(null,"semicolon","semicolon",797086549),new cljs.core.Keyword(null,"capslock","capslock",442493366),new cljs.core.Keyword(null,"esc","esc",-1671924121),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword("dynomics.ui.core","apostrophe","dynomics.ui.core/apostrophe",-1626458975),new cljs.core.Keyword(null,"numlock","numlock",-1383996470),new cljs.core.Keyword(null,"tilde","tilde",-306005780),new cljs.core.Keyword(null,"rightbracket","rightbracket",1179726122),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"leftmeta","leftmeta",-352234749),new cljs.core.Keyword(null,"pageup","pageup",1714543403),new cljs.core.Keyword(null,"enter","enter",1792452624),new cljs.core.Keyword(null,"minus","minus",-1683561492),new cljs.core.Keyword(null,"forwardslash","forwardslash",-1708238052),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"equals","equals",-463033970),new cljs.core.Keyword(null,"leftbracket","leftbracket",-1642269680),new cljs.core.Keyword(null,"rightmeta","rightmeta",-1579889813),new cljs.core.Keyword(null,"minus","minus",-1683561492),new cljs.core.Keyword(null,"backslash","backslash",1790786526),new cljs.core.Keyword(null,"pagedown","pagedown",-2069718984),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"equals","equals",-463033970),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"scrolllock","scrolllock",-960203019),new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"backspace","backspace",-696007848),new cljs.core.Keyword(null,"dot","dot",1442709401)]),dynomics.ui.core.alphabet,dynomics.ui.core.numbers);
dynomics.ui.core.rotate_left = (function dynomics$ui$core$rotate_left(v){
return cljs.core.conj.call(null,cljs.core.subvec.call(null,v,(1),cljs.core.count.call(null,v)),cljs.core.first.call(null,v));
});
dynomics.ui.core.rotate_right = (function dynomics$ui$core$rotate_right(v){
return cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.last.call(null,v),cljs.core.subvec.call(null,v,(0),(cljs.core.count.call(null,v) - (1)))));
});
dynomics.ui.core.kop = (function dynomics$ui$core$kop(x){
return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keypath","keypath",1965534711)], null),(function (p){
if((cljs.core.count.call(null,p) === (0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268)], null);
} else {
return cljs.core.subvec.call(null,p,(0),(cljs.core.count.call(null,p) - (1)));
}
}));
});
dynomics.ui.core.reset_keypath = (function dynomics$ui$core$reset_keypath(s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268)], null));
});
dynomics.ui.core.keydown = (function dynomics$ui$core$keydown(s){
return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keypath","keypath",1965534711)], null),(function (kp){
return cljs.core.conj.call(null,kp,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(s));
}));
});
dynomics.ui.core.keyup = (function dynomics$ui$core$keyup(var_args){
var args43076 = [];
var len__25223__auto___43079 = arguments.length;
var i__25224__auto___43080 = (0);
while(true){
if((i__25224__auto___43080 < len__25223__auto___43079)){
args43076.push((arguments[i__25224__auto___43080]));

var G__43081 = (i__25224__auto___43080 + (1));
i__25224__auto___43080 = G__43081;
continue;
} else {
}
break;
}

var G__43078 = args43076.length;
switch (G__43078) {
case 1:
return dynomics.ui.core.keyup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.core.keyup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43076.length)].join('')));

}
});

dynomics.ui.core.keyup.cljs$core$IFn$_invoke$arity$1 = (function (s){
return dynomics.ui.core.keyup.call(null,s,cljs.core.get_in.call(null,s,cljs.core.conj.call(null,new cljs.core.Keyword(null,"keypath","keypath",1965534711).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(s)),cljs.core.identity));
});

dynomics.ui.core.keyup.cljs$core$IFn$_invoke$arity$2 = (function (s,f){
var or__24165__auto__ = f.call(null,dynomics.ui.core.kop.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"fn","fn",-1175266204),f.name)));
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return s;
}
});

dynomics.ui.core.keyup.cljs$lang$maxFixedArity = 2;
dynomics.ui.core.fn_for_event = (function dynomics$ui$core$fn_for_event(s,e){
if(cljs.core._EQ_.call(null,e,cljs.core.select_keys.call(null,s,cljs.core.keys.call(null,e)))){
return cljs.core.identity;
} else {
return cljs.core.get_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(e)], null),cljs.core.get_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"default","default",-1987822328)], null),cljs.core.identity));
}
});
dynomics.ui.core.push_history = (function dynomics$ui$core$push_history(state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (h){
return cljs.core.conj.call(null,h,cljs.core.apply.call(null,cljs.core.dissoc,state,new cljs.core.Keyword(null,"dont-record","dont-record",577283045).cljs$core$IFn$_invoke$arity$1(state)));
}));
});
dynomics.ui.core.keep_stuff = (function dynomics$ui$core$keep_stuff(cs,us){
return cljs.core.apply.call(null,cljs.core.assoc,us,cljs.core.mapcat.call(null,cljs.core.juxt.call(null,cljs.core.identity,(function (k){
return k.call(null,cs);
})),new cljs.core.Keyword(null,"dont-record","dont-record",577283045).cljs$core$IFn$_invoke$arity$1(cs)));
});
dynomics.ui.core.undo = (function dynomics$ui$core$undo(var_args){
var args43083 = [];
var len__25223__auto___43086 = arguments.length;
var i__25224__auto___43087 = (0);
while(true){
if((i__25224__auto___43087 < len__25223__auto___43086)){
args43083.push((arguments[i__25224__auto___43087]));

var G__43088 = (i__25224__auto___43087 + (1));
i__25224__auto___43087 = G__43088;
continue;
} else {
}
break;
}

var G__43085 = args43083.length;
switch (G__43085) {
case 1:
return dynomics.ui.core.undo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.core.undo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dynomics.ui.core.undo.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43083.length)].join('')));

}
});

dynomics.ui.core.undo.cljs$core$IFn$_invoke$arity$1 = (function (s){
return dynomics.ui.core.undo.call(null,s,dynomics.ui.core.rotate_right.call(null,dynomics.ui.core.rotate_right.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(s))));
});

dynomics.ui.core.undo.cljs$core$IFn$_invoke$arity$2 = (function (s,h){
return dynomics.ui.core.undo.call(null,s,h,cljs.core.first.call(null,h));
});

dynomics.ui.core.undo.cljs$core$IFn$_invoke$arity$3 = (function (cs,h,us){
if(cljs.core.truth_(us)){
return dynomics.ui.core.reset_keypath.call(null,dynomics.ui.core.keep_stuff.call(null,cs,cljs.core.assoc.call(null,us,new cljs.core.Keyword(null,"history","history",-247395220),h,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"undo","undo",-1818036302))));
} else {
return cs;
}
});

dynomics.ui.core.undo.cljs$lang$maxFixedArity = 3;
dynomics.ui.core.redo = (function dynomics$ui$core$redo(var_args){
var args43090 = [];
var len__25223__auto___43093 = arguments.length;
var i__25224__auto___43094 = (0);
while(true){
if((i__25224__auto___43094 < len__25223__auto___43093)){
args43090.push((arguments[i__25224__auto___43094]));

var G__43095 = (i__25224__auto___43094 + (1));
i__25224__auto___43094 = G__43095;
continue;
} else {
}
break;
}

var G__43092 = args43090.length;
switch (G__43092) {
case 1:
return dynomics.ui.core.redo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.core.redo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dynomics.ui.core.redo.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43090.length)].join('')));

}
});

dynomics.ui.core.redo.cljs$core$IFn$_invoke$arity$1 = (function (s){
return dynomics.ui.core.redo.call(null,s,dynomics.ui.core.rotate_left.call(null,dynomics.ui.core.rotate_left.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(s))));
});

dynomics.ui.core.redo.cljs$core$IFn$_invoke$arity$2 = (function (s,h){
return dynomics.ui.core.redo.call(null,s,h,cljs.core.last.call(null,h));
});

dynomics.ui.core.redo.cljs$core$IFn$_invoke$arity$3 = (function (cs,h,rs){
if(cljs.core.truth_(rs)){
return dynomics.ui.core.reset_keypath.call(null,dynomics.ui.core.keep_stuff.call(null,cs,cljs.core.assoc.call(null,rs,new cljs.core.Keyword(null,"history","history",-247395220),h,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"redo","redo",501190664))));
} else {
return cs;
}
});

dynomics.ui.core.redo.cljs$lang$maxFixedArity = 3;
dynomics.ui.core.add_keybinding = (function dynomics$ui$core$add_keybinding(s,k,f){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),k,k], null),f);
});
dynomics.ui.core.default_keymap = (function dynomics$ui$core$default_keymap(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"z","z",-789527183),dynomics.ui.core.undo,new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",-789527183),dynomics.ui.core.redo], null),new cljs.core.Keyword(null,"shift","shift",997140064),cljs.core.identity], null),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),cljs.core.identity], null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),dynomics.ui.core.redo], null),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.identity,new cljs.core.Keyword(null,"esc","esc",-1671924121),dynomics.ui.core.reset_keypath], null);
});
/**
 * Returns an updated version of the given state,
 *   either in response to the given event e, or according
 *   to the given function f
 */
dynomics.ui.core.update_state = (function dynomics$ui$core$update_state(var_args){
var args43097 = [];
var len__25223__auto___43100 = arguments.length;
var i__25224__auto___43101 = (0);
while(true){
if((i__25224__auto___43101 < len__25223__auto___43100)){
args43097.push((arguments[i__25224__auto___43101]));

var G__43102 = (i__25224__auto___43101 + (1));
i__25224__auto___43101 = G__43102;
continue;
} else {
}
break;
}

var G__43099 = args43097.length;
switch (G__43099) {
case 2:
return dynomics.ui.core.update_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dynomics.ui.core.update_state.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43097.length)].join('')));

}
});

dynomics.ui.core.update_state.cljs$core$IFn$_invoke$arity$2 = (function (s,e){
return dynomics.ui.core.update_state.call(null,cljs.core.merge.call(null,s,e),e,dynomics.ui.core.fn_for_event.call(null,s,e));
});

dynomics.ui.core.update_state.cljs$core$IFn$_invoke$arity$3 = (function (s,e,f){
var ns = f.call(null,s);
var g = (function (){var or__24165__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return f.name;
}
})();
if(cljs.core.truth_((function (){var or__24165__auto__ = cljs.core.get_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"dont-record","dont-record",577283045)], null));
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return (cljs.core._EQ_.call(null,g,new cljs.core.Keyword(null,"undo","undo",-1818036302))) || (cljs.core._EQ_.call(null,g,new cljs.core.Keyword(null,"redo","redo",501190664))) || (cljs.core._EQ_.call(null,g,"cljs$core$identity"));
}
})())){
return cljs.core.update_in.call(null,ns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version","version",425292698)], null),cljs.core.inc);
} else {
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,ns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version","version",425292698)], null),cljs.core.inc),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(dynomics.ui.core.push_history.call(null,s)));
}
});

dynomics.ui.core.update_state.cljs$lang$maxFixedArity = 3;
/**
 * Returns a blank default state
 */
dynomics.ui.core.make_state = (function dynomics$ui$core$make_state(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"dt","dt",-368444759),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"app-name","app-name",-268811251),new cljs.core.Keyword(null,"keyup","keyup",-794526927),new cljs.core.Keyword(null,"vx","vx",-1685168462),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"app-version","app-version",361554836),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"version","version",425292698)],[dynomics.space.core.make_phase_space.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"show-history","show-history",1972567130)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),dynomics.ui.core.keydown], null),(0),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"-start-"], null)], null)], null),dynomics.ui.core.default_keymap.call(null),"Dynomics",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"esc","esc",-1671924121),dynomics.ui.core.reset_keypath,new cljs.core.Keyword(null,"default","default",-1987822328),dynomics.ui.core.keyup], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vx","vx",-1685168462),(0),new cljs.core.Keyword(null,"vy","vy",-2018509997),(0),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"current-function","current-function",1894670892),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"functions","functions",184951466),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"appropriate-functions","appropriate-functions",-849142485),cljs.core.PersistentArrayMap.EMPTY], null),"0.1.0-alpha",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268)], null),cljs.core.PersistentArrayMap.EMPTY,(0)]);
});

//# sourceMappingURL=core.js.map