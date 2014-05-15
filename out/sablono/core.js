// Compiled by ClojureScript 0.0-2173
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__6274__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__6273 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__6273,0,null);var body = cljs.core.nthnext.call(null,vec__6273,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__6274 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__6274__delegate.call(this,args);};
G__6274.cljs$lang$maxFixedArity = 0;
G__6274.cljs$lang$applyTo = (function (arglist__6275){
var args = cljs.core.seq(arglist__6275);
return G__6274__delegate(args);
});
G__6274.cljs$core$IFn$_invoke$arity$variadic = G__6274__delegate;
return G__6274;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4160__auto__ = (function iter__6280(s__6281){return (new cljs.core.LazySeq(null,(function (){var s__6281__$1 = s__6281;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6281__$1);if(temp__4092__auto__)
{var s__6281__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6281__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__6281__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__6283 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__6282 = 0;while(true){
if((i__6282 < size__4159__auto__))
{var args = cljs.core._nth.call(null,c__4158__auto__,i__6282);cljs.core.chunk_append.call(null,b__6283,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__6284 = (i__6282 + 1);
i__6282 = G__6284;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6283),iter__6280.call(null,cljs.core.chunk_rest.call(null,s__6281__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6283),null);
}
} else
{var args = cljs.core.first.call(null,s__6281__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__6280.call(null,cljs.core.rest.call(null,s__6281__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4160__auto__ = (function iter__6289(s__6290){return (new cljs.core.LazySeq(null,(function (){var s__6290__$1 = s__6290;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6290__$1);if(temp__4092__auto__)
{var s__6290__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6290__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__6290__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__6292 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__6291 = 0;while(true){
if((i__6291 < size__4159__auto__))
{var style = cljs.core._nth.call(null,c__4158__auto__,i__6291);cljs.core.chunk_append.call(null,b__6292,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__6293 = (i__6291 + 1);
i__6291 = G__6293;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6292),iter__6289.call(null,cljs.core.chunk_rest.call(null,s__6290__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6292),null);
}
} else
{var style = cljs.core.first.call(null,s__6290__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__6289.call(null,cljs.core.rest.call(null,s__6290__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__6294){
var styles = cljs.core.seq(arglist__6294);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to6295 = (function() { 
var link_to6295__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to6295 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to6295__delegate.call(this,url,content);};
link_to6295.cljs$lang$maxFixedArity = 1;
link_to6295.cljs$lang$applyTo = (function (arglist__6296){
var url = cljs.core.first(arglist__6296);
var content = cljs.core.rest(arglist__6296);
return link_to6295__delegate(url,content);
});
link_to6295.cljs$core$IFn$_invoke$arity$variadic = link_to6295__delegate;
return link_to6295;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to6295);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to6297 = (function() { 
var mail_to6297__delegate = function (e_mail,p__6298){var vec__6300 = p__6298;var content = cljs.core.nth.call(null,vec__6300,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3443__auto__ = content;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to6297 = function (e_mail,var_args){
var p__6298 = null;if (arguments.length > 1) {
  p__6298 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to6297__delegate.call(this,e_mail,p__6298);};
mail_to6297.cljs$lang$maxFixedArity = 1;
mail_to6297.cljs$lang$applyTo = (function (arglist__6301){
var e_mail = cljs.core.first(arglist__6301);
var p__6298 = cljs.core.rest(arglist__6301);
return mail_to6297__delegate(e_mail,p__6298);
});
mail_to6297.cljs$core$IFn$_invoke$arity$variadic = mail_to6297__delegate;
return mail_to6297;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to6297);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list6302 = (function unordered_list6302(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4160__auto__ = (function iter__6307(s__6308){return (new cljs.core.LazySeq(null,(function (){var s__6308__$1 = s__6308;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6308__$1);if(temp__4092__auto__)
{var s__6308__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6308__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__6308__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__6310 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__6309 = 0;while(true){
if((i__6309 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__6309);cljs.core.chunk_append.call(null,b__6310,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__6311 = (i__6309 + 1);
i__6309 = G__6311;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6310),iter__6307.call(null,cljs.core.chunk_rest.call(null,s__6308__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6310),null);
}
} else
{var x = cljs.core.first.call(null,s__6308__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__6307.call(null,cljs.core.rest.call(null,s__6308__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list6302);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list6312 = (function ordered_list6312(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4160__auto__ = (function iter__6317(s__6318){return (new cljs.core.LazySeq(null,(function (){var s__6318__$1 = s__6318;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6318__$1);if(temp__4092__auto__)
{var s__6318__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6318__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__6318__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__6320 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__6319 = 0;while(true){
if((i__6319 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__6319);cljs.core.chunk_append.call(null,b__6320,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__6321 = (i__6319 + 1);
i__6319 = G__6321;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6320),iter__6317.call(null,cljs.core.chunk_rest.call(null,s__6318__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6320),null);
}
} else
{var x = cljs.core.first.call(null,s__6318__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__6317.call(null,cljs.core.rest.call(null,s__6318__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list6312);
/**
* Create an image element.
*/
sablono.core.image6322 = (function() {
var image6322 = null;
var image6322__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image6322__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image6322 = function(src,alt){
switch(arguments.length){
case 1:
return image6322__1.call(this,src);
case 2:
return image6322__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image6322.cljs$core$IFn$_invoke$arity$1 = image6322__1;
image6322.cljs$core$IFn$_invoke$arity$2 = image6322__2;
return image6322;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image6322);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__6323_SHARP_,p2__6324_SHARP_){return [cljs.core.str(p1__6323_SHARP_),cljs.core.str("["),cljs.core.str(p2__6324_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__6325_SHARP_,p2__6326_SHARP_){return [cljs.core.str(p1__6325_SHARP_),cljs.core.str("-"),cljs.core.str(p2__6326_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field6327 = (function() {
var color_field6327 = null;
var color_field6327__1 = (function (name__5319__auto__){return color_field6327.call(null,name__5319__auto__,null);
});
var color_field6327__2 = (function (name__5319__auto__,value__5320__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1545688804,null))].join(''),name__5319__auto__,value__5320__auto__);
});
color_field6327 = function(name__5319__auto__,value__5320__auto__){
switch(arguments.length){
case 1:
return color_field6327__1.call(this,name__5319__auto__);
case 2:
return color_field6327__2.call(this,name__5319__auto__,value__5320__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field6327.cljs$core$IFn$_invoke$arity$1 = color_field6327__1;
color_field6327.cljs$core$IFn$_invoke$arity$2 = color_field6327__2;
return color_field6327;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field6327);
/**
* Creates a date input field.
*/
sablono.core.date_field6328 = (function() {
var date_field6328 = null;
var date_field6328__1 = (function (name__5319__auto__){return date_field6328.call(null,name__5319__auto__,null);
});
var date_field6328__2 = (function (name__5319__auto__,value__5320__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",-1637455513,null))].join(''),name__5319__auto__,value__5320__auto__);
});
date_field6328 = function(name__5319__auto__,value__5320__auto__){
switch(arguments.length){
case 1:
return date_field6328__1.call(this,name__5319__auto__);
case 2:
return date_field6328__2.call(this,name__5319__auto__,value__5320__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field6328.cljs$core$IFn$_invoke$arity$1 = date_field6328__1;
date_field6328.cljs$core$IFn$_invoke$arity$2 = date_field6328__2;
return date_field6328;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field6328);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field6329 = (function() {
var datetime_field6329 = null;
var datetime_field6329__1 = (function (name__5319__auto__){return datetime_field6329.call(null,name__5319__auto__,null);
});
var datetime_field6329__2 = (function (name__5319__auto__,value__5320__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))].join(''),name__5319__auto__,value__5320__auto__);
});
datetime_field6329 = function(name__5319__auto__,value__5320__auto__){
switch(arguments.length){
case 1:
return datetime_field6329__1.call(this,name__5319__auto__);
case 2:
return datetime_field6329__2.call(this,name__5319__auto__,value__5320__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field6329.cljs$core$IFn$_invoke$arity$1 = datetime_field6329__1;
datetime_field6329.cljs$core$IFn$_invoke$arity$2 = datetime_field6329__2;
return datetime_field6329;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field6329);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field6330 = (function() {
var datetime_local_field6330 = null;
var datetime_local_field6330__1 = (function (name__5319__auto__){return datetime_local_field6330.call(null,name__5319__auto__,null);
});
var datetime_local_field6330__2 = (function (name__5319__auto__,value__5320__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))].join(''),name__5319__auto__,value__5320__auto__);
});
datetime_local_field6330 = function(name__5319__auto__,value__5320__auto__){
switch(arguments.length){
case 1:
return datetime_local_field6330__1.call(this,name__5319__auto__);
case 2:
return datetime_local_field6330__2.call(this,name__5319__auto__,value__5320__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field6330.cljs$core$IFn$_invoke$arity$1 = datetime_local_field6330__1;
datetime_local_field6330.cljs$core$IFn$_invoke$arity$2 = datetime_local_field6330__2;
return datetime_local_field6330;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field6330);
/**
* Creates a email input field.
*/
sablono.core.email_field6331 = (function() {
var email_field6331 = null;
var email_field6331__1 = (function (name__5319__auto__){return email_field6331.call(null,name__5319__auto__,null);
});
var email_field6331__2 = (function (name__5319__auto__,value__5320__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1543912107,null))].join(''),name__5319__auto__,value__5320__auto__);
});
email_field6331 = function(name__5319__auto__,value__5320__auto__){
switch(arguments.length){
case 1:
return email_field6331__1.call(this,name__5319__auto__);
case 2:
return email_field6331__2.call(this,name__5319__auto__,value__5320__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field6331.cljs$core$IFn$_invoke$arity$1 = email_field6331__1;
email_field6331.cljs$core$IFn$_invoke$arity$2 = email_field6331__2;
return email_field6331;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field6331);
/**
* Creates a file input field.
*/
sablono.core.file_field6332 = (function() {
var file_field6332 = null;
var file_field6332__1 = (function (name__5319__auto__){return file_field6332.call(null,name__5319__auto__,null);
});
var file_field6332__2 = (function (name__5319__auto__,value__5320__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",-1637388491,null))].join(''),name__5319__auto__,value__5320__auto__);
});
file_field6332 = function(name__5319__auto__,value__5320__auto__){
switch(arguments.length){
case 1:
return file_field6332__1.call(this,name__5319__auto__);
case 2:
return file_field6332__2.call(this,name__5319__auto__,value__5320__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field6332.cljs$core$IFn$_invoke$arity$1 = file_field6332__1;
file_field6332.cljs$core$IFn$_invoke$arity$2 = file_field6332__2;
return file_field6332;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field6332);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field6333 = (function() {
var hidden_field6333 = null;
var hidden_field6333__1 = (function (name__5319__auto__){return hidden_field6333.call(null,name__5319__auto__,null);
});
var hidden_field6333__2 = (function (name__5319__auto__,value__5320__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))].join(''),name__5319__auto__,value__5320__auto__);
});
hidden_field6333 = function(name__5319__auto__,value__5320__auto__){
switch(arguments.length){
case 1:
return hidden_field6333__1.call(this,name__5319__auto__);
case 2:
return hidden_field6333__2.call(this,name__5319__auto__,value__5320__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field6333.cljs$core$IFn$_invoke$arity$1 = hidden_field6333__1;
hidden_field6333.cljs$core$IFn$_invoke$arity$2 = hidden_field6333__2;
return hidden_field6333;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field6333);
/**
* Creates a month input field.
*/
sablono.core.month_field6334 = (function() {
var month_field6334 = null;
var month_field6334__1 = (function (name__5319__auto__){return month_field6334.call(null,name__5319__auto__,null);
});
var month_field6334__2 = (function (name__5319__auto__,value__5320__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-1536451527,null))].join(''),name__5319__auto__,value__5320__auto__);
});
month_field6334 = function(name__5319__auto__,value__5320__auto__){
switch(arguments.length){
case 1:
return month_field6334__1.call(this,name__5319__auto__);
case 2:
return month_field6334__2.call(this,name__5319__auto__,value__5320__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field6334.cljs$core$IFn$_invoke$arity$1 = month_field6334__1;
month_field6334.cljs$core$IFn$_invoke$arity$2 = month_field6334__2;
return month_field6334;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field6334);
/**
* Creates a number input field.
*/
sablono.core.number_field6335 = (function() {
var number_field6335 = null;
var number_field6335__1 = (function (name__5319__auto__){return number_field6335.call(null,name__5319__auto__,null);
});
var number_field6335__2 = (function (name__5319__auto__,value__5320__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",1620071682,null))].join(''),name__5319__auto__,value__5320__auto__);
});
number_field6335 = function(name__5319__auto__,value__5320__auto__){
switch(arguments.length){
case 1:
return number_field6335__1.call(this,name__5319__auto__);
case 2:
return number_field6335__2.call(this,name__5319__auto__,value__5320__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field6335.cljs$core$IFn$_invoke$arity$1 = number_field6335__1;
number_field6335.cljs$core$IFn$_invoke$arity$2 = number_field6335__2;
return number_field6335;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field6335);
/**
* Creates a password input field.
*/
sablono.core.password_field6336 = (function() {
var password_field6336 = null;
var password_field6336__1 = (function (name__5319__auto__){return password_field6336.call(null,name__5319__auto__,null);
});
var password_field6336__2 = (function (name__5319__auto__,value__5320__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",-423545772,null))].join(''),name__5319__auto__,value__5320__auto__);
});
password_field6336 = function(name__5319__auto__,value__5320__auto__){
switch(arguments.length){
case 1:
return password_field6336__1.call(this,name__5319__auto__);
case 2:
return password_field6336__2.call(this,name__5319__auto__,value__5320__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field6336.cljs$core$IFn$_invoke$arity$1 = password_field6336__1;
password_field6336.cljs$core$IFn$_invoke$arity$2 = password_field6336__2;
return password_field6336;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field6336);
/**
* Creates a range input field.
*/
sablono.core.range_field6337 = (function() {
var range_field6337 = null;
var range_field6337__1 = (function (name__5319__auto__){return range_field6337.call(null,name__5319__auto__,null);
});
var range_field6337__2 = (function (name__5319__auto__,value__5320__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1532251402,null))].join(''),name__5319__auto__,value__5320__auto__);
});
range_field6337 = function(name__5319__auto__,value__5320__auto__){
switch(arguments.length){
case 1:
return range_field6337__1.call(this,name__5319__auto__);
case 2:
return range_field6337__2.call(this,name__5319__auto__,value__5320__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field6337.cljs$core$IFn$_invoke$arity$1 = range_field6337__1;
range_field6337.cljs$core$IFn$_invoke$arity$2 = range_field6337__2;
return range_field6337;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field6337);
/**
* Creates a search input field.
*/
sablono.core.search_field6338 = (function() {
var search_field6338 = null;
var search_field6338__1 = (function (name__5319__auto__){return search_field6338.call(null,name__5319__auto__,null);
});
var search_field6338__2 = (function (name__5319__auto__,value__5320__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",1748098913,null))].join(''),name__5319__auto__,value__5320__auto__);
});
search_field6338 = function(name__5319__auto__,value__5320__auto__){
switch(arguments.length){
case 1:
return search_field6338__1.call(this,name__5319__auto__);
case 2:
return search_field6338__2.call(this,name__5319__auto__,value__5320__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field6338.cljs$core$IFn$_invoke$arity$1 = search_field6338__1;
search_field6338.cljs$core$IFn$_invoke$arity$2 = search_field6338__2;
return search_field6338;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field6338);
/**
* Creates a tel input field.
*/
sablono.core.tel_field6339 = (function() {
var tel_field6339 = null;
var tel_field6339__1 = (function (name__5319__auto__){return tel_field6339.call(null,name__5319__auto__,null);
});
var tel_field6339__2 = (function (name__5319__auto__,value__5320__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))].join(''),name__5319__auto__,value__5320__auto__);
});
tel_field6339 = function(name__5319__auto__,value__5320__auto__){
switch(arguments.length){
case 1:
return tel_field6339__1.call(this,name__5319__auto__);
case 2:
return tel_field6339__2.call(this,name__5319__auto__,value__5320__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field6339.cljs$core$IFn$_invoke$arity$1 = tel_field6339__1;
tel_field6339.cljs$core$IFn$_invoke$arity$2 = tel_field6339__2;
return tel_field6339;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field6339);
/**
* Creates a text input field.
*/
sablono.core.text_field6340 = (function() {
var text_field6340 = null;
var text_field6340__1 = (function (name__5319__auto__){return text_field6340.call(null,name__5319__auto__,null);
});
var text_field6340__2 = (function (name__5319__auto__,value__5320__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-1636974874,null))].join(''),name__5319__auto__,value__5320__auto__);
});
text_field6340 = function(name__5319__auto__,value__5320__auto__){
switch(arguments.length){
case 1:
return text_field6340__1.call(this,name__5319__auto__);
case 2:
return text_field6340__2.call(this,name__5319__auto__,value__5320__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field6340.cljs$core$IFn$_invoke$arity$1 = text_field6340__1;
text_field6340.cljs$core$IFn$_invoke$arity$2 = text_field6340__2;
return text_field6340;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field6340);
/**
* Creates a time input field.
*/
sablono.core.time_field6341 = (function() {
var time_field6341 = null;
var time_field6341__1 = (function (name__5319__auto__){return time_field6341.call(null,name__5319__auto__,null);
});
var time_field6341__2 = (function (name__5319__auto__,value__5320__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1636971386,null))].join(''),name__5319__auto__,value__5320__auto__);
});
time_field6341 = function(name__5319__auto__,value__5320__auto__){
switch(arguments.length){
case 1:
return time_field6341__1.call(this,name__5319__auto__);
case 2:
return time_field6341__2.call(this,name__5319__auto__,value__5320__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field6341.cljs$core$IFn$_invoke$arity$1 = time_field6341__1;
time_field6341.cljs$core$IFn$_invoke$arity$2 = time_field6341__2;
return time_field6341;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field6341);
/**
* Creates a url input field.
*/
sablono.core.url_field6342 = (function() {
var url_field6342 = null;
var url_field6342__1 = (function (name__5319__auto__){return url_field6342.call(null,name__5319__auto__,null);
});
var url_field6342__2 = (function (name__5319__auto__,value__5320__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",-1640415448,null))].join(''),name__5319__auto__,value__5320__auto__);
});
url_field6342 = function(name__5319__auto__,value__5320__auto__){
switch(arguments.length){
case 1:
return url_field6342__1.call(this,name__5319__auto__);
case 2:
return url_field6342__2.call(this,name__5319__auto__,value__5320__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field6342.cljs$core$IFn$_invoke$arity$1 = url_field6342__1;
url_field6342.cljs$core$IFn$_invoke$arity$2 = url_field6342__2;
return url_field6342;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field6342);
/**
* Creates a week input field.
*/
sablono.core.week_field6343 = (function() {
var week_field6343 = null;
var week_field6343__1 = (function (name__5319__auto__){return week_field6343.call(null,name__5319__auto__,null);
});
var week_field6343__2 = (function (name__5319__auto__,value__5320__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",-1636886099,null))].join(''),name__5319__auto__,value__5320__auto__);
});
week_field6343 = function(name__5319__auto__,value__5320__auto__){
switch(arguments.length){
case 1:
return week_field6343__1.call(this,name__5319__auto__);
case 2:
return week_field6343__2.call(this,name__5319__auto__,value__5320__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field6343.cljs$core$IFn$_invoke$arity$1 = week_field6343__1;
week_field6343.cljs$core$IFn$_invoke$arity$2 = week_field6343__2;
return week_field6343;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field6343);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box6344 = (function() {
var check_box6344 = null;
var check_box6344__1 = (function (name){return check_box6344.call(null,name,null);
});
var check_box6344__2 = (function (name,checked_QMARK_){return check_box6344.call(null,name,checked_QMARK_,"true");
});
var check_box6344__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box6344 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box6344__1.call(this,name);
case 2:
return check_box6344__2.call(this,name,checked_QMARK_);
case 3:
return check_box6344__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box6344.cljs$core$IFn$_invoke$arity$1 = check_box6344__1;
check_box6344.cljs$core$IFn$_invoke$arity$2 = check_box6344__2;
check_box6344.cljs$core$IFn$_invoke$arity$3 = check_box6344__3;
return check_box6344;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box6344);
/**
* Creates a radio button.
*/
sablono.core.radio_button6345 = (function() {
var radio_button6345 = null;
var radio_button6345__1 = (function (group){return radio_button6345.call(null,group,null);
});
var radio_button6345__2 = (function (group,checked_QMARK_){return radio_button6345.call(null,group,checked_QMARK_,"true");
});
var radio_button6345__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button6345 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button6345__1.call(this,group);
case 2:
return radio_button6345__2.call(this,group,checked_QMARK_);
case 3:
return radio_button6345__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button6345.cljs$core$IFn$_invoke$arity$1 = radio_button6345__1;
radio_button6345.cljs$core$IFn$_invoke$arity$2 = radio_button6345__2;
radio_button6345.cljs$core$IFn$_invoke$arity$3 = radio_button6345__3;
return radio_button6345;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button6345);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options6346 = (function() {
var select_options6346 = null;
var select_options6346__1 = (function (coll){return select_options6346.call(null,coll,null);
});
var select_options6346__2 = (function (coll,selected){var iter__4160__auto__ = (function iter__6355(s__6356){return (new cljs.core.LazySeq(null,(function (){var s__6356__$1 = s__6356;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6356__$1);if(temp__4092__auto__)
{var s__6356__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6356__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__6356__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__6358 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__6357 = 0;while(true){
if((i__6357 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__6357);cljs.core.chunk_append.call(null,b__6358,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__6361 = x;var text = cljs.core.nth.call(null,vec__6361,0,null);var val = cljs.core.nth.call(null,vec__6361,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__6361,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options6346.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__6363 = (i__6357 + 1);
i__6357 = G__6363;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6358),iter__6355.call(null,cljs.core.chunk_rest.call(null,s__6356__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6358),null);
}
} else
{var x = cljs.core.first.call(null,s__6356__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__6362 = x;var text = cljs.core.nth.call(null,vec__6362,0,null);var val = cljs.core.nth.call(null,vec__6362,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__6362,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options6346.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__6355.call(null,cljs.core.rest.call(null,s__6356__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,coll);
});
select_options6346 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options6346__1.call(this,coll);
case 2:
return select_options6346__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options6346.cljs$core$IFn$_invoke$arity$1 = select_options6346__1;
select_options6346.cljs$core$IFn$_invoke$arity$2 = select_options6346__2;
return select_options6346;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options6346);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down6364 = (function() {
var drop_down6364 = null;
var drop_down6364__2 = (function (name,options){return drop_down6364.call(null,name,options,null);
});
var drop_down6364__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down6364 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down6364__2.call(this,name,options);
case 3:
return drop_down6364__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down6364.cljs$core$IFn$_invoke$arity$2 = drop_down6364__2;
drop_down6364.cljs$core$IFn$_invoke$arity$3 = drop_down6364__3;
return drop_down6364;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down6364);
/**
* Creates a text area element.
*/
sablono.core.text_area6365 = (function() {
var text_area6365 = null;
var text_area6365__1 = (function (name){return text_area6365.call(null,name,null);
});
var text_area6365__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area6365 = function(name,value){
switch(arguments.length){
case 1:
return text_area6365__1.call(this,name);
case 2:
return text_area6365__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area6365.cljs$core$IFn$_invoke$arity$1 = text_area6365__1;
text_area6365.cljs$core$IFn$_invoke$arity$2 = text_area6365__2;
return text_area6365;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area6365);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label6366 = (function label6366(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label6366);
/**
* Creates a submit button.
*/
sablono.core.submit_button6367 = (function submit_button6367(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button6367);
/**
* Creates a form reset button.
*/
sablono.core.reset_button6368 = (function reset_button6368(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button6368);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to6369 = (function() { 
var form_to6369__delegate = function (p__6370,body){var vec__6372 = p__6370;var method = cljs.core.nth.call(null,vec__6372,0,null);var action = cljs.core.nth.call(null,vec__6372,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to6369 = function (p__6370,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to6369__delegate.call(this,p__6370,body);};
form_to6369.cljs$lang$maxFixedArity = 1;
form_to6369.cljs$lang$applyTo = (function (arglist__6373){
var p__6370 = cljs.core.first(arglist__6373);
var body = cljs.core.rest(arglist__6373);
return form_to6369__delegate(p__6370,body);
});
form_to6369.cljs$core$IFn$_invoke$arity$variadic = form_to6369__delegate;
return form_to6369;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to6369);

//# sourceMappingURL=core.js.map