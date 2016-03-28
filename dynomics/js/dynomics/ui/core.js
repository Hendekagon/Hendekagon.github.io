// Compiled by ClojureScript 1.8.40 {}
goog.provide('dynomics.ui.core');
goog.require('cljs.core');
goog.require('dynomics.space.core');
goog.require('dynomics.ui.css');
dynomics.ui.core.alphabet = cljs.core.PersistentHashMap.fromArrays([(65),(70),(74),(86),(72),(69),(85),(88),(77),(75),(90),(89),(66),(82),(76),(68),(83),(78),(81),(79),(87),(73),(67),(71),(80),(84)],[new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"u","u",-1156634785),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"t","t",-1397832519)]);
dynomics.ui.core.numbers = cljs.core.PersistentHashMap.fromArrays([(55),(54),(48),(50),(56),(51),(57),(53),(52),(49)],[new cljs.core.Keyword(null,"7","7",993885869),new cljs.core.Keyword(null,"6","6",-1107752709),new cljs.core.Keyword(null,"0","0",351625802),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"8","8",1405994928),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.Keyword(null,"9","9",1664767314),new cljs.core.Keyword(null,"5","5",538911032),new cljs.core.Keyword(null,"4","4",-1197948085),new cljs.core.Keyword(null,"1","1",-521621649)]);
dynomics.ui.core.keycode_to_keyword = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([(186),(188),(59),(20),(27),(39),(46),(222),(144),(192),(221),(32),(40),(91),(33),(13),(109),(191),(36),(187),(219),(93),(189),(220),(34),(17),(107),(35),(19),(9),(145),(45),(16),(38),(18),(37),(8),(190)],[new cljs.core.Keyword(null,"semicolon","semicolon",797086549),new cljs.core.Keyword(null,"comma","comma",1699024745),new cljs.core.Keyword(null,"semicolon","semicolon",797086549),new cljs.core.Keyword(null,"capslock","capslock",442493366),new cljs.core.Keyword(null,"esc","esc",-1671924121),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword("dynomics.ui.core","apostrophe","dynomics.ui.core/apostrophe",-1626458975),new cljs.core.Keyword(null,"numlock","numlock",-1383996470),new cljs.core.Keyword(null,"tilde","tilde",-306005780),new cljs.core.Keyword(null,"rightbracket","rightbracket",1179726122),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"leftmeta","leftmeta",-352234749),new cljs.core.Keyword(null,"pageup","pageup",1714543403),new cljs.core.Keyword(null,"enter","enter",1792452624),new cljs.core.Keyword(null,"minus","minus",-1683561492),new cljs.core.Keyword(null,"forwardslash","forwardslash",-1708238052),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"equals","equals",-463033970),new cljs.core.Keyword(null,"leftbracket","leftbracket",-1642269680),new cljs.core.Keyword(null,"rightmeta","rightmeta",-1579889813),new cljs.core.Keyword(null,"minus","minus",-1683561492),new cljs.core.Keyword(null,"backslash","backslash",1790786526),new cljs.core.Keyword(null,"pagedown","pagedown",-2069718984),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"equals","equals",-463033970),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"scrolllock","scrolllock",-960203019),new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"backspace","backspace",-696007848),new cljs.core.Keyword(null,"dot","dot",1442709401)]),dynomics.ui.core.alphabet,dynomics.ui.core.numbers);
dynomics.ui.core.rotate_left = (function dynomics$ui$core$rotate_left(v){
return cljs.core.conj.call(null,cljs.core.subvec.call(null,v,(1),cljs.core.count.call(null,v)),cljs.core.first.call(null,v));
});
dynomics.ui.core.rotate_right = (function dynomics$ui$core$rotate_right(v){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,v)], null),cljs.core.subvec.call(null,v,(0),(cljs.core.count.call(null,v) - (1))));
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
dynomics.ui.core.reset_keypath = (function dynomics$ui$core$reset_keypath(var_args){
var args92853 = [];
var len__26896__auto___92862 = arguments.length;
var i__26897__auto___92864 = (0);
while(true){
if((i__26897__auto___92864 < len__26896__auto___92862)){
args92853.push((arguments[i__26897__auto___92864]));

var G__92867 = (i__26897__auto___92864 + (1));
i__26897__auto___92864 = G__92867;
continue;
} else {
}
break;
}

var G__92857 = args92853.length;
switch (G__92857) {
case 1:
return dynomics.ui.core.reset_keypath.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.core.reset_keypath.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args92853.length)].join('')));

}
});

dynomics.ui.core.reset_keypath.cljs$core$IFn$_invoke$arity$1 = (function (state){
return dynomics.ui.core.reset_keypath.call(null,state,null);
});

dynomics.ui.core.reset_keypath.cljs$core$IFn$_invoke$arity$2 = (function (state,event){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268)], null));
});

dynomics.ui.core.reset_keypath.cljs$lang$maxFixedArity = 2;
dynomics.ui.core.keydown = (function dynomics$ui$core$keydown(state,event){
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keypath","keypath",1965534711)], null),(function (kp){
return cljs.core.conj.call(null,kp,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event));
})),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"keydown","keydown",-629268186));
});
dynomics.ui.core.keyup = (function dynomics$ui$core$keyup(var_args){
var args92891 = [];
var len__26896__auto___92898 = arguments.length;
var i__26897__auto___92900 = (0);
while(true){
if((i__26897__auto___92900 < len__26896__auto___92898)){
args92891.push((arguments[i__26897__auto___92900]));

var G__92901 = (i__26897__auto___92900 + (1));
i__26897__auto___92900 = G__92901;
continue;
} else {
}
break;
}

var G__92894 = args92891.length;
switch (G__92894) {
case 2:
return dynomics.ui.core.keyup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dynomics.ui.core.keyup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args92891.length)].join('')));

}
});

dynomics.ui.core.keyup.cljs$core$IFn$_invoke$arity$2 = (function (state,event){
return dynomics.ui.core.keyup.call(null,state,null,cljs.core.get_in.call(null,state,cljs.core.conj.call(null,new cljs.core.Keyword(null,"keypath","keypath",1965534711).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event)),cljs.core.identity));
});

dynomics.ui.core.keyup.cljs$core$IFn$_invoke$arity$3 = (function (s,e,f){
var or__25827__auto__ = f.call(null,dynomics.ui.core.kop.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"fn","fn",-1175266204),f.name)));
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return s;
}
});

dynomics.ui.core.keyup.cljs$lang$maxFixedArity = 3;
dynomics.ui.core.fn_for_event = (function dynomics$ui$core$fn_for_event(s,e){
if(cljs.core._EQ_.call(null,e,cljs.core.select_keys.call(null,s,cljs.core.keys.call(null,e)))){
return cljs.core.identity;
} else {
return cljs.core.get_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(e)], null),cljs.core.get_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"default","default",-1987822328)], null),cljs.core.identity));
}
});
dynomics.ui.core.push_history = (function dynomics$ui$core$push_history(state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (h){
return cljs.core.conj.call(null,(function (){var or__25827__auto__ = h;
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.apply.call(null,cljs.core.dissoc,state,new cljs.core.Keyword(null,"dont-record","dont-record",577283045).cljs$core$IFn$_invoke$arity$1(state)));
}));
});
dynomics.ui.core.keep_stuff = (function dynomics$ui$core$keep_stuff(cs,us){
return cljs.core.apply.call(null,cljs.core.assoc,us,cljs.core.mapcat.call(null,cljs.core.juxt.call(null,cljs.core.identity,(function (k){
return k.call(null,cs);
})),new cljs.core.Keyword(null,"dont-record","dont-record",577283045).cljs$core$IFn$_invoke$arity$1(cs)));
});
dynomics.ui.core.undo = (function dynomics$ui$core$undo(var_args){
var args92910 = [];
var len__26896__auto___92915 = arguments.length;
var i__26897__auto___92917 = (0);
while(true){
if((i__26897__auto___92917 < len__26896__auto___92915)){
args92910.push((arguments[i__26897__auto___92917]));

var G__92918 = (i__26897__auto___92917 + (1));
i__26897__auto___92917 = G__92918;
continue;
} else {
}
break;
}

var G__92913 = args92910.length;
switch (G__92913) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args92910.length)].join('')));

}
});

dynomics.ui.core.undo.cljs$core$IFn$_invoke$arity$1 = (function (s){
if(cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(s))){
return dynomics.ui.core.undo.call(null,s,dynomics.ui.core.rotate_right.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(s)))))?s:dynomics.ui.core.push_history.call(null,s)))));
} else {
return s;
}
});

dynomics.ui.core.undo.cljs$core$IFn$_invoke$arity$2 = (function (s,h){
return dynomics.ui.core.undo.call(null,s,h,cljs.core.last.call(null,h));
});

dynomics.ui.core.undo.cljs$core$IFn$_invoke$arity$3 = (function (cs,h,us){
if(cljs.core.truth_(us)){
return dynomics.ui.core.reset_keypath.call(null,cljs.core.assoc.call(null,dynomics.ui.core.keep_stuff.call(null,cs,us),new cljs.core.Keyword(null,"history","history",-247395220),h,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"undo","undo",-1818036302)));
} else {
return cs;
}
});

dynomics.ui.core.undo.cljs$lang$maxFixedArity = 3;
dynomics.ui.core.redo = (function dynomics$ui$core$redo(var_args){
var args92923 = [];
var len__26896__auto___92930 = arguments.length;
var i__26897__auto___92931 = (0);
while(true){
if((i__26897__auto___92931 < len__26896__auto___92930)){
args92923.push((arguments[i__26897__auto___92931]));

var G__92932 = (i__26897__auto___92931 + (1));
i__26897__auto___92931 = G__92932;
continue;
} else {
}
break;
}

var G__92927 = args92923.length;
switch (G__92927) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args92923.length)].join('')));

}
});

dynomics.ui.core.redo.cljs$core$IFn$_invoke$arity$1 = (function (s){
if(cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(s))){
return dynomics.ui.core.redo.call(null,s,dynomics.ui.core.rotate_left.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(s)))))?s:dynomics.ui.core.push_history.call(null,s)))));
} else {
return s;
}
});

dynomics.ui.core.redo.cljs$core$IFn$_invoke$arity$2 = (function (s,h){
return dynomics.ui.core.redo.call(null,s,h,cljs.core.last.call(null,h));
});

dynomics.ui.core.redo.cljs$core$IFn$_invoke$arity$3 = (function (cs,h,us){
if(cljs.core.truth_(us)){
return dynomics.ui.core.reset_keypath.call(null,cljs.core.assoc.call(null,dynomics.ui.core.keep_stuff.call(null,cs,us),new cljs.core.Keyword(null,"history","history",-247395220),h,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"undo","undo",-1818036302)));
} else {
return cs;
}
});

dynomics.ui.core.redo.cljs$lang$maxFixedArity = 3;
dynomics.ui.core.add_keybinding = (function dynomics$ui$core$add_keybinding(s,k,f){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),k,k], null),f);
});
dynomics.ui.core.do_undo = (function dynomics$ui$core$do_undo(s,e){
return dynomics.ui.core.undo.call(null,s);
});
dynomics.ui.core.do_redo = (function dynomics$ui$core$do_redo(s,e){
return dynomics.ui.core.redo.call(null,s);
});
dynomics.ui.core.default_keymap = (function dynomics$ui$core$default_keymap(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",-789527183),dynomics.ui.core.do_undo], null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),dynomics.ui.core.do_redo], null),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.identity,new cljs.core.Keyword(null,"esc","esc",-1671924121),dynomics.ui.core.reset_keypath], null);
});
/**
 * Returns an updated version of the given state,
 *   either in response to the given event e, or according
 *   to the given function f
 */
dynomics.ui.core.update_state = (function dynomics$ui$core$update_state(var_args){
var args92943 = [];
var len__26896__auto___92949 = arguments.length;
var i__26897__auto___92950 = (0);
while(true){
if((i__26897__auto___92950 < len__26896__auto___92949)){
args92943.push((arguments[i__26897__auto___92950]));

var G__92952 = (i__26897__auto___92950 + (1));
i__26897__auto___92950 = G__92952;
continue;
} else {
}
break;
}

var G__92945 = args92943.length;
switch (G__92945) {
case 2:
return dynomics.ui.core.update_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dynomics.ui.core.update_state.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args92943.length)].join('')));

}
});

dynomics.ui.core.update_state.cljs$core$IFn$_invoke$arity$2 = (function (s,e){
return dynomics.ui.core.update_state.call(null,s,e,dynomics.ui.core.fn_for_event.call(null,s,e));
});

dynomics.ui.core.update_state.cljs$core$IFn$_invoke$arity$3 = (function (s,e,f){
var ns = f.call(null,s);
var g = (function (){var or__25827__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return f.name;
}
})();
if(cljs.core.truth_((function (){var or__25827__auto__ = cljs.core.get_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"dont-record","dont-record",577283045)], null));
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return (cljs.core._EQ_.call(null,g,new cljs.core.Keyword(null,"keydown","keydown",-629268186))) || (cljs.core._EQ_.call(null,g,new cljs.core.Keyword(null,"undo","undo",-1818036302))) || (cljs.core._EQ_.call(null,g,new cljs.core.Keyword(null,"redo","redo",501190664))) || (cljs.core._EQ_.call(null,g,"cljs$core$identity"));
}
})())){
return cljs.core.dissoc.call(null,ns,new cljs.core.Keyword(null,"fn","fn",-1175266204));
} else {
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,ns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version","version",425292698)], null),cljs.core.inc),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(dynomics.ui.core.push_history.call(null,s)));
}
});

dynomics.ui.core.update_state.cljs$lang$maxFixedArity = 3;
dynomics.ui.core.tu = (function dynomics$ui$core$tu(s){
return dynomics.ui.core.update_state.call(null,s,cljs.core.PersistentArrayMap.EMPTY,(function (ss){
return cljs.core.assoc.call(null,ss,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("update "),cljs.core.str(new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(ss))].join('')], null));
}));
});
/**
 * Returns a blank default state
 */
dynomics.ui.core.make_state = (function dynomics$ui$core$make_state(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"dt","dt",-368444759),new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"app-name","app-name",-268811251),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"keyup","keyup",-794526927),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"app-version","app-version",361554836),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.Keyword(null,"show","show",-576705889)],[false,(1),dynomics.space.core.make_phase_space.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"show-history","show-history",1972567130)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),dynomics.ui.core.keydown], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,-0.5], null),(0),false,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),null,dynomics.ui.core.default_keymap.call(null),"Dynomics",new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"esc","esc",-1671924121),dynomics.ui.core.reset_keypath,new cljs.core.Keyword(null,"default","default",-1987822328),dynomics.ui.core.keyup], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vx","vx",-1685168462),(0),new cljs.core.Keyword(null,"vy","vy",-2018509997),(0),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"current-function","current-function",1894670892),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"functions","functions",184951466),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"appropriate-functions","appropriate-functions",-849142485),cljs.core.PersistentArrayMap.EMPTY], null),"0.1.0-alpha",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"-start-"], null),(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"bezier-handles","bezier-handles",-1862540150),null,new cljs.core.Keyword(null,"node-types","node-types",1539943342),null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),null,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),null,new cljs.core.Keyword(null,"curves","curves",-510805378),null], null), null)]);
});
dynomics.ui.core.test_state = (function dynomics$ui$core$test_state(){
return cljs.core.select_keys.call(null,dynomics.ui.core.make_state.call(null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),new cljs.core.Keyword(null,"action","action",-811238024)], null));
});
dynomics.ui.core.print_state = (function dynomics$ui$core$print_state(s){
return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"version","version",425292698),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,new cljs.core.Keyword(null,"version","version",425292698)),new cljs.core.Keyword(null,"history","history",-247395220))).call(null,s);
});
