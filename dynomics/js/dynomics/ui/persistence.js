// Compiled by ClojureScript 1.8.34 {}
goog.provide('dynomics.ui.persistence');
goog.require('cljs.core');
goog.require('dynomics.space.core');
goog.require('cognitect.transit');
dynomics.ui.persistence.filter_state = (function dynomics$ui$persistence$filter_state(state){
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.Keyword(null,"show","show",-576705889)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"space","space",348133475),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"space","space",348133475).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"graph","graph",1558099509)),new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.update_in.call(null,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),cljs.core.str)], null));
});
dynomics.ui.persistence.merge_state = (function dynomics$ui$persistence$merge_state(state,ps){
cljs.core.println.call(null,"Merge loaded state ",cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(ps)));

return cljs.core.assoc.call(null,cljs.core.merge.call(null,state,ps),new cljs.core.Keyword(null,"space","space",348133475),dynomics.space.core.add_graph.call(null,new cljs.core.Keyword(null,"space","space",348133475).cljs$core$IFn$_invoke$arity$1(ps)));
});
dynomics.ui.persistence.persist_BANG_ = (function dynomics$ui$persistence$persist_BANG_(state){
localStorage.setItem("space/state",cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),dynomics.ui.persistence.filter_state.call(null,state)));

return state;
});
dynomics.ui.persistence.get_state_BANG_ = (function dynomics$ui$persistence$get_state_BANG_(state){
cljs.core.println.call(null,"load state");

return dynomics.ui.persistence.merge_state.call(null,state,cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),localStorage.getItem("space/state")));
});
