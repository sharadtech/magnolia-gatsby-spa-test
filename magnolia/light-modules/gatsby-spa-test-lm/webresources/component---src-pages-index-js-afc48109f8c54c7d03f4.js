(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{NMtI:function(t,e,n){"use strict";t.exports=n("fKn4")},Q8kY:function(t,e,n){},RXBc:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("o0o1"),a=n.n(i);n("ls82");function c(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void n(l)}c.done?e(u):Promise.resolve(u).then(r,o)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){c(i,r,o,a,u,"next",t)}function u(t){c(i,r,o,a,u,"throw",t)}a(void 0)}))}}var l=n("dI71"),s=n("NMtI"),f={componentMappings:{"gatsby-spa-test-lm:pages/content":function(t){var e=t.top,n=t.main,r=t.bottom,i=t.title;return o.a.createElement("div",{className:"content-page"},o.a.createElement("div",{className:"hint"},"[Content Page]"),o.a.createElement("h1",null,i||t.metadata["@name"]),o.a.createElement("div",{className:"top"},o.a.createElement("div",{className:"hint"},"[Top Area]"),e&&o.a.createElement(s.EditableArea,{className:"Area",content:e})),o.a.createElement("main",null,o.a.createElement("div",{className:"hint"},"[Main Area]"),n&&o.a.createElement(s.EditableArea,{className:"Area",content:n})),o.a.createElement("div",{className:"bottom"},o.a.createElement("div",{className:"hint"},"[Bottom Area]"),r&&o.a.createElement(s.EditableArea,{className:"Area",content:r})))},"spa-test-lm:components/headline":function(t){return o.a.createElement("h2",{className:"Headline"},t.text)},"spa-test-lm:components/image":function(t){return o.a.createElement("img",{className:"Image",src:""+t.image["@link"],alt:"Etiam Purus"})},"spa-test-lm:components/richtext":function(t){return o.a.createElement("p",{className:"Paragraph",dangerouslySetInnerHTML:{__html:t.richText}})},"spa-test-lm:components/hero":function(t){return o.a.createElement("picture",null,o.a.createElement("source",{srcset:""+t.desktopImage["@link"],media:"(min-width: 800px)"}),o.a.createElement("source",{srcset:""+t.tabletImage["@link"],media:"(min-width: 600px)"}),o.a.createElement("source",{srcset:""+t.mobileImage["@link"],media:"(min-width: 0px)"}),o.a.createElement("img",{className:"Image",src:""+t.desktopImage["@link"],alt:t.alttext}))}}};function p(){return""+(Boolean("true")?"/magnoliaAuthor":"/magnoliaPublic")}function m(){return"en de fr".split(" ")}function d(t,e){return t.replace(new RegExp("/"+e+"($|/)"),"/")}function h(){for(var t=m(),e=0;e<t.length;e++){var n=t[e];if("undefined"==typeof window);else if(new RegExp("/"+n+"($|/)").test(window.location.pathname))return n}return t[0]}var y=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).state={},e.getPagePath=function(){var t=m(),e=h(),n="/gatsby-spa-test"+window.location.pathname.replace(new RegExp("(.*/gatsby-spa-test|.html)","g"),"");return e!==t[0]&&(n=d(n,e),n+="?lang="+e),n},e.loadPage=u(a.a.mark((function t(){var n,r,o,i,c,u,l,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.state.pathname!==window.location.pathname){t.next=2;break}return t.abrupt("return");case 2:return n=p(),r=e.getPagePath(),console.log("pagePath:"+r),o=n+"/.rest/delivery/pages/v1"+r,t.next=8,fetch(o);case 8:return i=t.sent,t.next=11,i.json();case 11:return c=t.sent,console.log("page content: ",c),u=c["mgnl:template"],console.log("templateId:",u),l=null,t.next=19,fetch(n+"/.rest/templateDefinition/v1/"+u);case 19:return s=t.sent,t.next=22,s.json();case 22:l=t.sent,console.log("definition:",l);case 24:e.setState({init:!0,content:c,templateDefinitions:l,pathname:window.location.pathname});case 25:case"end":return t.stop()}}),t)}))),e}Object(l.a)(e,t);var n=e.prototype;return n.inEditorPreview=function(){var t=window.location.href.indexOf("mgnlPreview=true")>0;return console.log("inEditorPreview:"+t),s.EditorContextHelper.inEditor()&&t},n.componentDidMount=function(){this.loadPage()},n.componentDidUpdate=function(){this.loadPage()},n.render=function(){return this.state.init?(console.log("config:",f),o.a.createElement(s.EditablePage,{templateDefinitions:this.state.templateDefinitions||{},content:this.state.content,config:f})):o.a.createElement("p",null,"NO PAGE.")},e}(o.a.Component),v=n("KQm4"),g=n("YwZP"),b=function(t){return t.isCurrent?{className:"active"}:{}},w=function(t){return o.a.createElement(g.Link,Object.assign({getProps:b},t))};var E=function(t){var e=t.navItems;return e?o.a.createElement("nav",{className:"Navigation"},e.map((function(e){var n=e["@path"].replace("/gatsby-spa-test","");return t.static&&(n="/static"+n),o.a.createElement(w,{key:e["@id"],to:n},e.navigationTitle||e.title||e["@name"])}))):o.a.createElement("div",null)};function P(){var t=o.a.useState([]),e=t[0],n=t[1];return o.a.useEffect((function(){function t(){return(t=u(a.a.mark((function t(){var e,r,o,i,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=p(),r=e+"/.rest/delivery/pagenav/v1/gatsby-spa-test",console.log("NAV URL:"+r),t.next=5,fetch(r);case 5:return o=t.sent,t.next=8,o.json();case 8:i=t.sent,c=i["@nodes"].map((function(t){return i[t]})),n([i].concat(Object(v.a)(c)));case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.length<1&&function(){t.apply(this,arguments)}()}),[e]),o.a.createElement(E,{navItems:e,static:!1})}n("Q8kY");var O=function(){return o.a.createElement("div",null,o.a.createElement("header",null,o.a.createElement(P,null)),o.a.createElement(y,null),o.a.createElement("footer",null,"Gatsby SPA Test | Sharad Kumar | Copyright © 2020"))};e.default=function(){return o.a.createElement(g.Router,null,o.a.createElement(O,{default:!0}))}},fKn4:function(t,e,n){var r;t.exports=(r=n("q1tI"),function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){t.exports=r},function(t,e,n){t.exports=n(5)()},function(t,e,n){"use strict";t.exports=n(4)},function(t,e,n){t.exports=n(7)},function(t,e,n){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.r(e),n.d(e,"TemplateAnnotations",(function(){return o})),n.d(e,"EditorContextHelper",(function(){return i}));var o=function(){var t={content:function(t,e){var n=t?t[e]:null;return null!=n?"website:".concat(n):""},availableComponents:function(t,e,n){return n&&n[e]?Object.keys(n[e]).map((function(t){return n[e][t].id})).join(","):""},showAddButton:function(t,e,n,r){return!n||null==n.maxComponents||!r||null==r.componentCount||r.componentCount<n.maxComponents},activationStatus:function(t){if(!t||!t["mgnl:activationStatus"]||"false"===t["mgnl:activationStatus"])return 0;var e=t["mgnl:lastModified"]?new Date(t["mgnl:lastModified"]):null,n=t["mgnl:lastActivated"]?new Date(t["mgnl:lastActivated"]):null;return e&&n&&e.getTime()>n.getTime()?1:2}},e={content:["@path",""],dialog:["dialog","",a]},n={name:["@name",""],content:e.content,availableComponents:["availableComponents",[]],type:["type","list",a],label:["title","",a],inherit:["inheritance",!1,a],optional:["optional",!1,a],createdAreaNode:["createAreaNode",!0,a],showAddButton:["maxComponents",!0],showNewComponentArea:[null,!0],description:["description","",a],activationStatus:[null,0]},o={content:e.content,dialog:e.dialog,label:["title","",a],description:["description","",a],activationStatus:[null,0]};return{getAreaCommentString:function(t,e,r){var o={componentCount:r},a=e&&e.areas?e.areas[t["@name"]]:{};return"cms:area ".concat(i(t,n,a,o))},getComponentCommentString:function(t,e){return"cms:component ".concat(i(t,o,e))},getPageCommentString:function(t,n){return"cms:page ".concat(i(t,e,n))}};function i(e,n,r,o){var i=[];return Object.keys(n).forEach((function(a){var c=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),3!==n.length);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(n[a]),u=c[0],l=c[1],s=c[2],f=t[a],p=l;f?p=f(e,u,r,o):s?p=s(r,u,l):null!=e&&null!==u&&(p=e[u]||"");var m={key:a,value:p};i.push("".concat(a,'="').concat(m.value,'"'))})),i.join(" ")}function a(t,e,n){var o=t&&"object"===r(t)&&e?t[e]:null;return o=null==o?n:o,null!=(o="boolean"==typeof n?Boolean(o):o)?o:n}}(),i=function(){return{inEditor:e,refresh:function(){e()&&window.parent.mgnlRefresh&&window.parent.mgnlRefresh()},inEditorPreview:function(){return t()&&window.parent.location.hash.endsWith(":view")}};function t(){return"undefined"!=typeof window&&Boolean(window.frameElement&&window.frameElement.className.includes("gwt-Frame"))}function e(){return t()&&window.parent.location.hash.endsWith(":edit")}}()}])},function(t,e,n){"use strict";var r=n(6);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){"use strict";n.r(e),n.d(e,"EditablePage",(function(){return x})),n.d(e,"EditableArea",(function(){return R})),n.d(e,"EditableComponent",(function(){return N})),n.d(e,"EditorContext",(function(){return s})),n.d(e,"RendererContext",(function(){return h})),n.d(e,"EditorContextHelper",(function(){return d}));var r=n(0),o=n.n(r),i=n(2),a=n(1),c=n.n(a),u=o.a.createContext(),l=u.Provider,s=(u.Consumer,u),f={CLOSED_AREA_COMMENT:"/cms:area",CLOSED_COMPONENT_COMMENT:"/cms:component",TEMPLATE_ID_PROP:"mgnl:template"};function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var m=function(){return{getRenderedComponent:function(e,n){if(!e||!n||!n[e[f.TEMPLATE_ID_PROP]])return o.a.createElement("div");var r=n[e[f.TEMPLATE_ID_PROP]];return o.a.createElement(r,t(e))},getComponentProperties:t,addComment:function(t,e,n){if("undefined"!=typeof document&&t){if(e){var r=document.createComment(e);t.insertBefore(r,t.firstChild)}if(n){var o=document.createComment(n);t.appendChild(o)}}}};function t(t){if(!t||"object"!==p(t))return{};var e={},n={};return Object.keys(t).forEach((function(r){r.startsWith("@")||r.startsWith("mgnl:")||r.startsWith("jcr:")?n[r]=t[r]:e[r]=t[r]})),e.metadata=n,e}}(),d=i.EditorContextHelper,h=s;function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function P(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O=function(t){function e(){return v(this,e),b(this,w(e).apply(this,arguments))}var n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(e,t),n=e,(r=[{key:"componentDidMount",value:function(){this.addCloseComment(),this.addOpenComment(),d.refresh()}},{key:"UNSAFE_componentWillUpdate",value:function(){this.node.firstChild.remove()}},{key:"componentDidUpdate",value:function(){this.addOpenComment(),d.refresh()}},{key:"addOpenComment",value:function(){var t=this.getContextValue();if(this.node){var e=t.content&&t.templateDefinitions?t.templateDefinitions[t.content[f.TEMPLATE_ID_PROP]]:null,n=i.TemplateAnnotations.getPageCommentString(t.content,e);m.addComment(this.node,n)}}},{key:"addCloseComment",value:function(){m.addComment(this.node,"/cms:page")}},{key:"hasPageComponent",value:function(){var t=this.getContextValue(),e=t.content,n=t.componentMappings;return e&&n&&n[e[f.TEMPLATE_ID_PROP]]}},{key:"getContextValue",value:function(){var t=this.props,e=t.templateDefinitions,n=t.content;return{templateDefinitions:e,componentMappings:t.config.componentMappings,content:n,isDevMode:!1}}},{key:"render",value:function(){var t=this,e=this.getContextValue(),n=this.props.children,r=this.hasPageComponent()?m.getRenderedComponent(e.content,e.componentMappings):n;return o.a.createElement(l,{value:e},o.a.createElement("div",{ref:function(e){return t.node=e},key:e.content["@id"]},r))}}])&&g(n.prototype,r),e}(o.a.PureComponent);P(O,"propTypes",{children:c.a.elementType,content:c.a.object,templateDefinitions:c.a.object,config:c.a.shape({componentMappings:c.a.object})}),P(O,"defaultProps",{children:null,content:null,templateDefinitions:null,config:{componentMappings:{}}});var x=O;function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function T(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var N=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=function(t,e){return!e||"object"!==_(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}(this,j(e).call(this,t))).constants=f,n}var n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(e,t),n=e,(r=[{key:"componentDidMount",value:function(){this.addComment(),this.removeRefs()}},{key:"addComment",value:function(){var t=this.context.isDevMode,e=this.props.content;if(this.openNode&&this.closeNode&&(t||d.inEditor())){var n=e[f.TEMPLATE_ID_PROP],r=this.context.templateDefinitions[n],o=i.TemplateAnnotations.getComponentCommentString(e,r),a=this.constants.CLOSED_COMPONENT_COMMENT;this.openNode.parentNode.insertBefore(document.createComment(o),this.openNode),this.closeNode.parentNode.insertBefore(document.createComment(a),this.closeNode)}}},{key:"removeRefs",value:function(){this.openNode&&this.closeNode&&(this.openNode.remove(),this.closeNode.remove())}},{key:"render",value:function(){var t=this,e=this.props.content,n=this.context.componentMappings,r=m.getRenderedComponent(e,n);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{ref:function(e){return t.openNode=e}}),r,o.a.createElement("div",{ref:function(e){return t.closeNode=e}}))}}])&&C(n.prototype,r),e}(o.a.PureComponent);function k(t){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function M(t){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function L(t,e){return(L=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function D(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}T(N,"propTypes",{content:c.a.object.isRequired}),T(N,"contextType",s);var I=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=function(t,e){return!e||"object"!==k(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}(this,M(e).call(this,t))).constants=f,n}var n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&L(t,e)}(e,t),n=e,(r=[{key:"componentDidMount",value:function(){if(!this.context)throw new Error("EditableArea component must be wrapped inside EditablePage component.");this.addComment()}},{key:"getParentTemplateId",value:function(){var t=this.props.parentTemplateId,e=this.context.content;return t||e[f.TEMPLATE_ID_PROP]}},{key:"addComment",value:function(){var t=this.context.isDevMode;if(this.node&&(t||d.inEditor())){var e=this.props.content,n=this.getParentTemplateId(),r=this.context.templateDefinitions[n],o=i.TemplateAnnotations.getAreaCommentString(e,r);m.addComment(this.node,o,this.constants.CLOSED_AREA_COMMENT)}}},{key:"render",value:function(){var t=this,e=this.props.content,n=e["@nodes"];return o.a.createElement("div",{ref:function(e){return t.node=e},key:e["@id"]},n.map((function(t){return o.a.createElement(N,{key:e[t]["@id"],content:e[t]})})))}}])&&A(n.prototype,r),e}(o.a.PureComponent);D(I,"propTypes",{content:c.a.object.isRequired,parentTemplateId:c.a.string}),D(I,"defaultProps",{parentTemplateId:null}),D(I,"contextType",s);var R=I}]))},ls82:function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(C){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return _()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=w(a,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(C){return{type:"throw",arg:C}}}t.wrap=u;var s={};function f(){}function p(){}function m(){}var d={};d[o]=function(){return this};var h=Object.getPrototypeOf,y=h&&h(h(x([])));y&&y!==e&&n.call(y,o)&&(d=y);var v=m.prototype=f.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var r;this._invoke=function(o,i){function a(){return new e((function(r,a){!function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function x(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=v.constructor=m,m.constructor=p,p.displayName=c(m,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,a,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},g(b.prototype),b.prototype[i]=function(){return this},t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new b(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(v),c(v,a,"Generator"),v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=x,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:x(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},o0o1:function(t,e,n){t.exports=n("ls82")}}]);
//# sourceMappingURL=component---src-pages-index-js-afc48109f8c54c7d03f4.js.map