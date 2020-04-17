(this["webpackJsonplarge-scale-solutions-ts-react-redux"]=this["webpackJsonplarge-scale-solutions-ts-react-redux"]||[]).push([[0],{53:function(e,t,a){e.exports=a(84)},58:function(e,t,a){},59:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var r,n=a(1),o=a.n(n),c=a(22),i=a.n(c),s=(a(58),a(59),a(17)),m=a(11),u=a(42),d=a(47),l=a(10),p="[item] get list items from DB ",v="[item] set list items in store ",f="[item] set status for item in list items",b="[item] set status for item in removed list items",y="[item] set remove data for item",h="[item] set recover data for item",I="[item] remove item from list items",g="[item] remove item from removed list items",j="[item] concat item to list items",O="[item] concat item to removed list items",x="[path] set base path in store",w="[description] get description current item from DB",E="[description] set description current item in store",k="[getFailure] Get failure",L=function(e){return{type:k,payload:e}},C={listItems:[{}],removedListItems:[],descriptionItem:{},basePath:""},D=Object(m.combineReducers)({item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(l.a)({},e,{listItems:t.payload});case f:var a=e.listItems.map((function(e){return e.id===t.payload&&(e.removed=!0),e}));return Object(l.a)({},e,{listItems:a});case b:var r=e.removedListItems.map((function(e){return e.id===t.payload&&(e.removed=!1),e}));return Object(l.a)({},e,{removedListItems:r});case y:var n=e.listItems.map((function(e){return e.id===t.payload.itemId&&(e.removedData=t.payload.data),e}));return Object(l.a)({},e,{listItems:n});case h:var o=e.removedListItems.map((function(e){return e.id===t.payload.itemId&&(console.log(t.payload.data),e.recoveredData=t.payload.data),e}));return Object(l.a)({},e,{listItems:o});case I:var c=e.listItems.filter((function(e){return e.id!==t.payload}));return Object(l.a)({},e,{listItems:c});case g:var i=e.removedListItems.filter((function(e){return e.id!==t.payload}));return Object(l.a)({},e,{removedListItems:i});case j:var s=e.listItems.concat(t.payload).sort((function(e,t){return e.name&&t.name?e.name.toLowerCase()>t.name.toLowerCase()?1:-1:0}));return Object(l.a)({},e,{listItems:s});case O:var m=e.removedListItems.concat(t.payload).sort((function(e,t){return e.name&&t.name?e.name.toLowerCase()>t.name.toLowerCase()?1:-1:0}));return Object(l.a)({},e,{removedListItems:m});case x:return Object(l.a)({},e,{basePath:t.payload});case E:return Object(l.a)({},e,{descriptionItem:t.payload});default:return e}}}),P=a(9),F=a.n(P),N=a(6),B=a(29),_=a(43),S=a(66),W=function e(){Object(_.a)(this,e)};W.getListItemsFromDB=Object(B.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.get("https://mrsoft.by/tz20/list.json");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),W.getDescriptionCurrentItemFromDB=function(){var e=Object(B.a)(F.a.mark((function e(t,a){var r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.get("".concat(t).concat(a));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),function(e){e.loading="loading",e.loaded="loaded",e.notFound="notFound",e.error="error"}(r||(r={}));var J="[loading] set list items loading state",M="[loading] set description item loading state",z=function(e){return{type:J,payload:e}},G=function(e){return{type:M,payload:e}},R=F.a.mark(q),T=F.a.mark(A),$=F.a.mark(H);function q(e){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(N.a)(z(r.loading));case 3:return e.next=5,W.getListItemsFromDB();case 5:if(!(t=e.sent).data.length||!t.data[0].id){e.next=17;break}return e.next=9,t.data.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:-1}));case 9:return e.next=11,Object(N.a)((n=t.data,{type:v,payload:n}));case 11:return e.next=13,Object(N.a)((a=t.basepath,{type:x,payload:a}));case 13:return e.next=15,Object(N.a)(z(r.loaded));case 15:e.next=19;break;case 17:return e.next=19,Object(N.a)(z(r.notFound));case 19:e.next=27;break;case 21:return e.prev=21,e.t0=e.catch(0),e.next=25,Object(N.a)(z(r.error));case 25:return e.next=27,Object(N.a)(L(e.t0));case 27:case"end":return e.stop()}var a,n}),R,null,[[0,21]])}function A(e){var t;return F.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(N.a)(G(r.loading));case 3:return a.next=5,W.getDescriptionCurrentItemFromDB(e.payload.basePath,e.payload.userLink);case 5:if(!(t=a.sent).id){a.next=13;break}return a.next=9,Object(N.a)({type:E,payload:t});case 9:return a.next=11,Object(N.a)(G(r.loaded));case 11:a.next=15;break;case 13:return a.next=15,Object(N.a)(G(r.notFound));case 15:a.next=23;break;case 17:return a.prev=17,a.t0=a.catch(0),a.next=21,Object(N.a)(G(r.error));case 21:return a.next=23,Object(N.a)(L(a.t0));case 23:case"end":return a.stop()}}),T,null,[[0,17]])}function H(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.b)(p,q);case 2:return e.next=4,Object(N.b)(w,A);case 4:case"end":return e.stop()}}),$)}var K=a(96),Q=a(95),U=function(e){var t=e.item,a=e.basePath,r=e.dispatch,c=e.className;Object(n.useEffect)((function(){console.log("hi")}),[t]);var i=function(e,a){var n;a?(r(function(e){return{type:b,payload:e}}(t.id)),r(function(e){return{type:g,payload:e}}(t.id)),r(function(e){return{type:j,payload:e}}(t))):(r((n=t.id,{type:f,payload:n})),r(function(e,t){return{type:y,payload:{itemId:e,data:t}}}(t.id,(new Date).toString().slice(0,24))),r(function(e){return{type:I,payload:e}}(t.id)),r(function(e){return{type:O,payload:e}}(t)))};return o.a.createElement("li",{onClick:function(){return!t.removed&&r(function(e,t){return{type:w,payload:{basePath:e,userLink:t}}}(a,t.more))},className:"".concat(c," cardItemContainer")},o.a.createElement(Q.a,{component:"div",className:"cardItemContainer_info"},o.a.createElement("div",null," ","name: ".concat(t.name)," "),o.a.createElement("div",null," ","info: ".concat(t.shortInfo)," ")),o.a.createElement(Q.a,{component:"div",className:"cardItemContainer_remove"},o.a.createElement("input",{type:"checkbox",onChange:function(e){return i(0,t.removed||!1)},checked:t.removed||!1}),o.a.createElement("p",null,void 0!==t.removed&&!t.removed&&"recover data: ".concat(t.recoveredData)||t.removed&&"remove data: ".concat(t.removedData))))},V=Object(s.b)((function(e){return{listItems:e.item.listItems,removedListItems:e.item.removedListItems,descriptionItem:e.item.descriptionItem,basePath:e.item.basePath}}))((function(e){var t=e.listItems,a=e.removedListItems,r=(e.descriptionItem,e.basePath),c=e.dispatch;return Object(n.useEffect)((function(){c({type:p})}),[c]),o.a.createElement(o.a.Fragment,null,!1,o.a.createElement(Q.a,{component:"div",display:"grid",className:"listItemsContainer"},o.a.createElement(K.a,{className:"listItemsContainer_list"},t.length>0&&t[0].id&&t.concat(a).map((function(e){return!e.removed&&o.a.createElement(U,{item:e,basePath:r,dispatch:c,key:e.id,className:"active_cart_item"})||e.removed&&o.a.createElement(U,{item:e,basePath:r,dispatch:c,key:e.id,className:"remove_cart_item"})})))),!1,!1)})),X=Object(s.b)((function(e){return{descriptionItem:e.item.descriptionItem,basePath:e.item.basePath}}))((function(e){var t=e.descriptionItem,a=e.basePath;e.dispatch;return o.a.createElement(o.a.Fragment,null,!1,o.a.createElement(Q.a,{component:"div",display:"grid",className:"descriptionItemContainer"},t.bio&&"".concat(t.bio),t.pic&&o.a.createElement("img",{src:"".concat(a).concat(t.pic)})),!1,!1)})),Y=Object(d.a)(),Z=Object(m.createStore)(D,Object(u.composeWithDevTools)({trace:!0,traceLimit:25})(Object(m.applyMiddleware)(Y)));Y.run(H);var ee=function(){return o.a.createElement(s.a,{store:Z},o.a.createElement(Q.a,{component:"div",className:"wrapper"},o.a.createElement(V,null),o.a.createElement(X,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.b81984ee.chunk.js.map