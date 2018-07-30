!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],t):"object"==typeof exports?exports["react-chatbot"]=t(require("react"),require("prop-types")):e["react-chatbot"]=t(e.React,e.PropTypes)}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="dist/",t(t.s=2)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=a.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),f=n(1),d=r(f),p=n(4),h=n(6),b=r(h);n(8);var g=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={loading:!1,finished:!1,userInput:!1,inputCall:null,lastId:null,notUnderstand:e.options.filter(function(e){return null===e.handle})[0],callMessages:[]},n.callTimer=null,n}return i(t,e),u(t,[{key:"getMessage",value:function(e){return this.props.options.filter(function(t){return!!t.handle&&(t.handle instanceof RegExp?new RegExp(t.handle).test(e.text):t.handle.toLowerCase()===e.text.toLowerCase())})[0]}},{key:"handleNewMessage",value:function(e){e.isUser?(this.renderMessage(e),this.sendBotReply(e)):this.renderDelayMessage(e),e.finish&&this.setState({finished:!0})}},{key:"sendBotReply",value:function(e){var t=this.state,n=t.notUnderstand,r=t.inputCall,a=r?this.getMessageById(r):this.getMessage(e)||n;this.renderDelayMessage(a,e)}},{key:"renderMessage",value:function(e){var t=this.props.onSendMessage;t&&t(e)}},{key:"renderDelayMessage",value:function(e,t){var n=this,r=this.props,a=r.onSendMessage,o=r.delay;this.setState({loading:!0,userInput:!!e.input,inputCall:e.input?e.call:null,lastId:e.id}),a&&setTimeout(function(){if(a(Object.assign({},e,{last:t})),n.setState({loading:!1}),e.call&&!n.state.userInput){var r=n.getMessageById(e.call);n.renderDelayMessage(r)}},o)}},{key:"onInputReply",value:function(e){var t=this.state,n=t.inputCall,r=t.lastId;"Enter"===e.key&&(this.handleNewMessage((0,p.serializeUserAnswer)(e.target.value,{nextId:n,lastId:r})),e.target.value="")}},{key:"sendAction",value:function(e){this.handleNewMessage((0,p.serializeUserAnswer)(e))}},{key:"getMessageById",value:function(e){var t=this.props.options;return e?t.filter(function(t){return e===t.id})[0]:[]}},{key:"getWelcomeMessage",value:function(){var e=this.props.welcomeId;return this.getMessageById(e)}},{key:"componentDidMount",value:function(){var e=this.getWelcomeMessage();this.handleNewMessage(e)}},{key:"componentDidUpdate",value:function(){this.messages&&(this.messages.scrollTop=this.messages.scrollHeight-this.messages.clientHeight)}},{key:"render",value:function(){var e=this,t=this.props,n=t.messages,r=t.hideAvatar,a=t.hideUserMessage,o=t.avatars,i=t.inputPlaceholder,u=this.state,l=u.loading,f=u.finished;return c.default.createElement("div",{className:"chat"},c.default.createElement("ul",{ref:function(t){return e.messages=t},className:"chat__messages"},n.map(function(t,n){return t.isUser&&a?null:c.default.createElement(b.default,s({hideAvatar:r,avatars:o,sendAction:e.sendAction.bind(e),key:t.id+"_"+n},t))}),l&&c.default.createElement(b.default,{placeholder:!0,hideAvatar:r,avatars:o})),c.default.createElement("div",{className:"chat__input"},c.default.createElement("input",{disabled:f,onKeyUp:this.onInputReply.bind(this),type:"text",placeholder:i})))}}]),t}(c.default.Component);g.defaultProps={hideUserMessage:!1,messages:[],welcomeMessage:[],hideAvatar:!1,delay:1e3,inputPlaceholder:"Enter you answer..."},g.propTypes={hideUserMessage:d.default.bool,inputPlaceholder:d.default.string,hideAvatar:d.default.bool,delay:d.default.number,welcomeMessage:d.default.oneOfType([d.default.string,d.default.array]),options:d.default.array.isRequired,messages:d.default.array.isRequired,onSendMessage:d.default.func},t.default=g},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(5);Object.defineProperty(t,"serializeUserAnswer",{enumerable:!0,get:function(){return r(a).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return Object.assign({},{text:e,isUser:!0},t)}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=r(a),i=n(7),s=r(i),u=n(1),l=r(u),c=function(e){var t=e.sendAction,n=e.placeholder,r=e.text,a=e.buttons,i=e.avatars,u=e.image,l=e.isUser,c=e.hideAvatar;return e.last,o.default.createElement("li",{className:(0,s.default)("chat__message",{"chat__message--user":l})},!c&&o.default.createElement("div",{className:"chat__avatar",style:{backgroundImage:i&&"url("+(l?i.user:i.bot)+")"}}),o.default.createElement("div",{className:"chat__content"},(n||r)&&o.default.createElement("div",{className:(0,s.default)("chat__text",{"chat__text--placeholder":n})},"function"==typeof r?r(e):r,n&&o.default.createElement("p",null,o.default.createElement("span",null,"."),o.default.createElement("span",null,"."),o.default.createElement("span",null,"."))),u&&o.default.createElement("div",{className:"chat__image",style:{backgroundImage:"url("+u+")"}}),o.default.createElement("div",{className:"chat__buttons"},a&&a.map(function(e,n){return o.default.createElement("button",{key:n,onClick:e.callback||t&&t.bind(void 0,e.value)},e.label)}))))};c.defaultProps={sendAction:function(){},placeholder:!1,text:"",buttons:[],avatars:{},image:"",isUser:!1,hideAvatar:!1},c.propTypes={sendAction:l.default.func,placeholder:l.default.bool,text:l.default.oneOfType([l.default.string,l.default.object,l.default.func]),buttons:l.default.array,avatars:l.default.object,image:l.default.string,isUser:l.default.bool,hideAvatar:l.default.bool},t.default=c},function(e,t,n){var r,a;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===a)for(var i in r)o.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}var o={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=n:(r=[],void 0!==(a=function(){return n}.apply(t,r))&&(e.exports=a))}()},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0};a.transform=void 0,a.insertInto=void 0,n(11)(r,a),r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(10)(!1),t.push([e.i,":root{--purple-dark:#8a5be8;--purple-bright:#a578ff;--buble-border-color:#e5ebf1;--input-border-color:#e8e8e8;--chat-width:350px;--chat-max-height:500px;--max-width-bubble:80%}.chat *{margin:0;padding:0;list-style:none;outline:none;font-family:Roboto;box-sizing:border-box}.chat{width:var(--chat-width)}.chat__messages{overflow:auto;max-height:var(--chat-max-height);padding-right:10px}.chat__message{display:flex;margin-bottom:20px}.chat__content{max-width:var(--max-width-bubble)}.chat__message--user{flex-direction:row-reverse}.chat__message--user .chat__avatar{margin-right:0;margin-left:10px}.chat__message--user .chat__text{border-radius:20px 20px 3px 20px}.chat__avatar{width:35px;height:35px;border-radius:30px;background-position:50%;background-size:cover;margin-right:10px}.chat__text{background:#fff;border:1px solid var(--buble-border-color);border-radius:20px 20px 20px 3px;padding:10px 20px}.chat__text--placeholder p span{animation:placeholder-dot .5s infinite both;animation-delay:.1s;margin-right:5px;font-weight:700;position:relative;top:-4px;font-size:16px}.chat__text--placeholder p span:nth-of-type(2){animation-delay:.2s}.chat__text--placeholder p span:nth-of-type(3){animation-delay:.3s}.chat__text img{width:100%;margin-top:5px;margin-bottom:5px}.chat__buttons{display:-webkit-flex;display:-ms-flex;display:flex}.chat__buttons button{flex:1;padding:11px 15px;border-radius:8px;border:0;background-color:var(--purple-dark);color:#fff;font-size:14px;cursor:pointer}.chat__buttons button:hover{background-color:var(--purple-bright)}.chat__buttons button:not(:last-of-type){margin-right:5px}.chat__input{margin-top:20px}.chat__input input{padding:10px 15px;border-radius:30px;border:1px solid var(--input-border-color);width:100%;font-size:14px}.chat__input input:disabled{background-color:#f9f9f9}.chat__image{margin-top:10px;width:100%;min-width:250px;height:150px;background-position:50%;-webkit-background-size:cover;background-size:cover;border-radius:8px}@-webkit-keyframes placeholder-dot{0%{opacity:.2}50%{opacity:1}to{opacity:.2}}",""])},function(e,t){function n(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var o=r(a);return[n].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<e.length;a++){var i=e[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=h[r.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](r.parts[o]);for(;o<r.parts.length;o++)a.parts.push(c(r.parts[o],t))}else{for(var i=[],o=0;o<r.parts.length;o++)i.push(c(r.parts[o],t));h[r.id]={id:r.id,refs:1,parts:i}}}}function a(e,t){for(var n=[],r={},a=0;a<e.length;a++){var o=e[a],i=t.base?o[0]+t.base:o[0],s=o[1],u=o[2],l=o[3],c={css:s,media:u,sourceMap:l};r[i]?r[i].parts.push(c):n.push(r[i]={id:i,parts:[c]})}return n}function o(e,t){var n=v(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=x[x.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=v(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,a)}}function i(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function s(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),l(t,e.attrs),o(e,t),t}function u(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",l(t,e.attrs),o(e,t),t}function l(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function c(e,t){var n,r,a,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var l=y++;n=m||(m=s(t)),r=f.bind(null,n,l,!1),a=f.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=p.bind(null,n,t),a=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=d.bind(null,n),a=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}function f(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function d(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var r=n.css,a=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||o)&&(r=_(r)),a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var i=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}var h={},b=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),g=function(e){return document.querySelector(e)},v=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=g.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),m=null,y=0,x=[],_=n(12);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=b()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=a(e,t);return r(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var s=n[i],u=h[s.id];u.refs--,o.push(u)}e&&r(a(e,t),t);for(var i=0;i<o.length;i++){var u=o[i];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete h[u.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a))return e;var o;return o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}}])});