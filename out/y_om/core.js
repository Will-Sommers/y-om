// Compiled by ClojureScript 0.0-2173
goog.provide('y_om.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('y_om.app_state');
goog.require('y_om.app_state');
cljs.core.enable_console_print_BANG_.call(null);
y_om.core.display_QMARK_ = (function display_QMARK_(show_input_QMARK_){if(cljs.core.truth_(show_input_QMARK_))
{return "";
} else
{return "hide";
}
});
y_om.core.toggle_input = (function toggle_input(owner){var current_state = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"show-input?","show-input?",4131470839));return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"show-input?","show-input?",4131470839),cljs.core.not.call(null,current_state));
});
y_om.core.submit_card = (function submit_card(owner,data){var element = om.core.get_node.call(null,owner,"add-card");var text = element.value;om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"cards","cards",1108335317),(function (p1__6260_SHARP_){return cljs.core.conj.call(null,p1__6260_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",1017456887),text], null));
}));
element.value = "";
return y_om.core.toggle_input.call(null,owner);
});
y_om.core.add_column = (function add_column(owner,data){if(typeof y_om.core.t6266 !== 'undefined')
{} else
{
/**
* @constructor
*/
y_om.core.t6266 = (function (data,owner,add_column,meta6267){
this.data = data;
this.owner = owner;
this.add_column = add_column;
this.meta6267 = meta6267;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
y_om.core.t6266.cljs$lang$type = true;
y_om.core.t6266.cljs$lang$ctorStr = "y-om.core/t6266";
y_om.core.t6266.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"y-om.core/t6266");
});
y_om.core.t6266.prototype.om$core$IRender$ = true;
y_om.core.t6266.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "column"},React.DOM.div({"className": "add-column"},"Add a list..."));
});
y_om.core.t6266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6268){var self__ = this;
var _6268__$1 = this;return self__.meta6267;
});
y_om.core.t6266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6268,meta6267__$1){var self__ = this;
var _6268__$1 = this;return (new y_om.core.t6266(self__.data,self__.owner,self__.add_column,meta6267__$1));
});
y_om.core.__GT_t6266 = (function __GT_t6266(data__$1,owner__$1,add_column__$1,meta6267){return (new y_om.core.t6266(data__$1,owner__$1,add_column__$1,meta6267));
});
}
return (new y_om.core.t6266(data,owner,add_column,null));
});
y_om.core.card_view = (function card_view(data,owner){if(typeof y_om.core.t6275 !== 'undefined')
{} else
{
/**
* @constructor
*/
y_om.core.t6275 = (function (owner,data,card_view,meta6276){
this.owner = owner;
this.data = data;
this.card_view = card_view;
this.meta6276 = meta6276;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
y_om.core.t6275.cljs$lang$type = true;
y_om.core.t6275.cljs$lang$ctorStr = "y-om.core/t6275";
y_om.core.t6275.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"y-om.core/t6275");
});
y_om.core.t6275.prototype.om$core$IRender$ = true;
y_om.core.t6275.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var attrs6278 = new cljs.core.Keyword(null,"task","task",1017456887).cljs$core$IFn$_invoke$arity$1(self__.data);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs6278))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list-card"], null)], null),attrs6278)):{"className": "list-card"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs6278))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs6278)], null))));
});
y_om.core.t6275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6277){var self__ = this;
var _6277__$1 = this;return self__.meta6276;
});
y_om.core.t6275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6277,meta6276__$1){var self__ = this;
var _6277__$1 = this;return (new y_om.core.t6275(self__.owner,self__.data,self__.card_view,meta6276__$1));
});
y_om.core.__GT_t6275 = (function __GT_t6275(owner__$1,data__$1,card_view__$1,meta6276){return (new y_om.core.t6275(owner__$1,data__$1,card_view__$1,meta6276));
});
}
return (new y_om.core.t6275(owner,data,card_view,null));
});
y_om.core.columns_view = (function columns_view(data,owner){if(typeof y_om.core.t6286 !== 'undefined')
{} else
{
/**
* @constructor
*/
y_om.core.t6286 = (function (owner,data,columns_view,meta6287){
this.owner = owner;
this.data = data;
this.columns_view = columns_view;
this.meta6287 = meta6287;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
y_om.core.t6286.cljs$lang$type = true;
y_om.core.t6286.cljs$lang$ctorStr = "y-om.core/t6286";
y_om.core.t6286.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"y-om.core/t6286");
});
y_om.core.t6286.prototype.om$core$IRender$ = true;
y_om.core.t6286.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "column"},(function (){var attrs6289 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.data);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs6289))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["column-header"], null)], null),attrs6289)):{"className": "column-header"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs6289))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs6289)], null))));
})(),((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317).cljs$core$IFn$_invoke$arity$1(self__.data)))?React.DOM.div({"className": "empty-column"}):sablono.interpreter.interpret.call(null,om.core.build_all.call(null,y_om.core.card_view,new cljs.core.Keyword(null,"cards","cards",1108335317).cljs$core$IFn$_invoke$arity$1(self__.data)))),React.DOM.div({"className": y_om.core.display_QMARK_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"show-input?","show-input?",4131470839)))},sablono.interpreter.input.call(null,{"type": "textarea", "autoComplete": "off", "ref": "add-card", "onKeyDown": (function (p1__6279_SHARP_){if(cljs.core._EQ_.call(null,13,p1__6279_SHARP_.keyCode))
{return y_om.core.submit_card.call(null,self__.owner,self__.data);
} else
{return null;
}
})}),sablono.interpreter.interpret.call(null,sablono.core.submit_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return y_om.core.submit_card.call(null,self__.owner,self__.data);
})], null),"Add")),React.DOM.a({"className": "close", "onClick": (function (){return y_om.core.toggle_input.call(null,self__.owner);
})},"Close")),React.DOM.div(null,React.DOM.a({"onClick": (function (){return y_om.core.toggle_input.call(null,self__.owner);
}), "className": y_om.core.display_QMARK_.call(null,cljs.core.not.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"show-input?","show-input?",4131470839))))},"Add a new card...")));
});
y_om.core.t6286.prototype.om$core$IInitState$ = true;
y_om.core.t6286.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-input?","show-input?",4131470839),false], null);
});
y_om.core.t6286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6288){var self__ = this;
var _6288__$1 = this;return self__.meta6287;
});
y_om.core.t6286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6288,meta6287__$1){var self__ = this;
var _6288__$1 = this;return (new y_om.core.t6286(self__.owner,self__.data,self__.columns_view,meta6287__$1));
});
y_om.core.__GT_t6286 = (function __GT_t6286(owner__$1,data__$1,columns_view__$1,meta6287){return (new y_om.core.t6286(owner__$1,data__$1,columns_view__$1,meta6287));
});
}
return (new y_om.core.t6286(owner,data,columns_view,null));
});
y_om.core.toggle_board_attribute = (function toggle_board_attribute(data,attribute){return om.core.transact_BANG_.call(null,data,attribute,(function (){return cljs.core.not.call(null,attribute.call(null,cljs.core.deref.call(null,data)));
}));
});
