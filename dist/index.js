/*!
 * meldCX Software Copyright Notice
 * 
 * Copyright © 2015 - 2018 by Meldcx Pty Ltd ACN 621 013 410 (meldCX). All Rights Reserved. All
 * materials available by meldCX are protected by copyright and trademark laws of Australia and international
 * treaties.
 * 
 * IMPORTANT NOTICE:
 * 
 * All computer software, source code, documentation, information or other technical information developed,
 * modified, or enhanced by meldCX is owned by meldCX and its related bodies corporate and is protected by
 * copyright law. You may not distribute, modify, transmit, use or reuse any part of the meldCX’s software
 * without the written consent of meldCX . Unauthorised use, duplication, adaptation, translation, creation of
 * derivative works, disclosure or distribution of meldCX’s software and products, or any portion of them, may
 * result in civil and criminal penalties.
 * 
 * meldCX’s software is for meldCX authorised users only. Use of meldCX’s software is subject to the terms of
 * meldCX’s software user license terms. Except as set forth in the software license agreement, all express or
 * implied conditions, representations and warranties, including any implied warranty of merchantability,
 * fitness for a particular purpose, or non-infringement, are disclaimed, except to the extent that such
 * disclaimers are held to be legally invalid.Third party software provided by meldCX is on-provided by meldCX
 * as licensee and is owned by the respective third party identified with that software.
 * 
 * meldCX, MELDCX, 3ELD and 3ELDCX are the registered and unregistered trademarks of
 * meldCX and/or its related companies.
 * 
 * Meldcx Pty Ltd
 * Level 2, 21 Cremorne Street
 * Richmond VIC 3121
 * Australia
 * 
 * Phone: (03) 9998 7630
 * Email: sales@meldcx.com
 * Webpage: www.meldcx.com
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@meldcx/agent/Agent.js":
/*!*********************************************!*\
  !*** ./node_modules/@meldcx/agent/Agent.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports=function(a){function c(f){if(d[f])return d[f].exports;var h=d[f]={i:f,l:!1,exports:{}};return a[f].call(h.exports,h,h.exports,c),h.l=!0,h.exports}var d={};return c.m=a,c.c=d,c.d=function(f,h,j){c.o(f,h)||Object.defineProperty(f,h,{configurable:!1,enumerable:!0,get:j})},c.n=function(f){var h=f&&f.__esModule?function(){return f['default']}:function(){return f};return c.d(h,'a',h),h},c.o=function(f,h){return Object.prototype.hasOwnProperty.call(f,h)},c.p='',c(c.s=3)}([function(a,c,d){var f=d(5),h=d(7),j=h;j.v1=f,j.v4=h,a.exports=j},function(a,c,d){(function(f){var h,j=f.crypto||f.msCrypto;if(j&&j.getRandomValues){var k=new Uint8Array(16);h=function(){return j.getRandomValues(k),k}}if(!h){var l=Array(16);h=function(){for(var o,m=0;16>m;m++)0==(3&m)&&(o=4294967296*Math.random()),l[m]=255&o>>>((3&m)<<3);return l}}a.exports=h}).call(c,d(6))},function(a){for(var f=[],h=0;256>h;++h)f[h]=(h+256).toString(16).substr(1);a.exports=function(j,k){var l=k||0,m=f;return m[j[l++]]+m[j[l++]]+m[j[l++]]+m[j[l++]]+'-'+m[j[l++]]+m[j[l++]]+'-'+m[j[l++]]+m[j[l++]]+'-'+m[j[l++]]+m[j[l++]]+'-'+m[j[l++]]+m[j[l++]]+m[j[l++]]+m[j[l++]]+m[j[l++]]+m[j[l++]]}},function(a,c,d){a.exports=d(4)},function(a,c,d){'use strict';function f(s){return s&&s.__esModule?s:{default:s}}function h(s,t){if(!(s instanceof t))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(c,'__esModule',{value:!0});var j=function(){function s(t,u){var v=[],w=!0,x=!1,y;try{for(var A,z=t[Symbol.iterator]();!(w=(A=z.next()).done)&&(v.push(A.value),!(u&&v.length===u));w=!0);}catch(B){x=!0,y=B}finally{try{!w&&z['return']&&z['return']()}finally{if(x)throw y}}return v}return function(t,u){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return s(t,u);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),k=function(){function s(t,u){for(var w,v=0;v<u.length;v++)w=u[v],w.enumerable=w.enumerable||!1,w.configurable=!0,'value'in w&&(w.writable=!0),Object.defineProperty(t,w.key,w)}return function(t,u,v){return u&&s(t.prototype,u),v&&s(t,v),t}}(),l=d(0),m=f(l),o=d(8),p=f(o),q=function(){function s(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0];h(this,s);var u=t?window:this;this._acw=new p.default,this._acw.setMountpoint(u),window.addEventListener('message',this._handleMessage.bind(this),{once:!0}),this.id=m.default.v4(),this.handlingMessage=!1}return k(s,[{key:'_handleMessage',value:function(u){var v=u.data,w=u.source,x=u.origin;if(!this.handlingMessage){this.handlingMessage=!0;var y=v.name;if('Agent.Init'===y){var z=j(v.parameters,3),A=z[0],B=z[1],C=z[2];if(A.length)try{return this._acw.setManifest(A),this._acw.setDisplay(B),this._acw.setRemote(C),this._acw.setTransport(w,window,x),void this._acw.start()}catch(D){console.error(D)}}this.handlingMessage=!1,window.addEventListener('message',this._handleMessage.bind(this),{once:!0})}}}]),s}();c.default=q},function(a,c,d){var h=d(1),j=d(2),k=h(),l=[1|k[0],k[1],k[2],k[3],k[4],k[5]],m=16383&(k[6]<<8|k[7]),o=0,p=0;a.exports=function(q,s,t){var u=s&&t||0,v=s||[];q=q||{};var w=void 0===q.clockseq?m:q.clockseq,x=void 0===q.msecs?new Date().getTime():q.msecs,y=void 0===q.nsecs?p+1:q.nsecs,z=x-o+(y-p)/1e4;if(0>z&&void 0===q.clockseq&&(w=16383&w+1),(0>z||x>o)&&void 0===q.nsecs&&(y=0),1e4<=y)throw new Error('uuid.v1(): Can\\'t create more than 10M uuids/sec');o=x,p=y,m=w,x+=1.22192928e13;var A=(1e4*(268435455&x)+y)%4294967296;v[u++]=255&A>>>24,v[u++]=255&A>>>16,v[u++]=255&A>>>8,v[u++]=255&A;var B=268435455&1e4*(x/4294967296);v[u++]=255&B>>>8,v[u++]=255&B,v[u++]=16|15&B>>>24,v[u++]=255&B>>>16,v[u++]=128|w>>>8,v[u++]=255&w;for(var C=q.node||l,D=0;6>D;++D)v[u+D]=C[D];return s?s:j(v)}},function(a){var d=function(){return this}();try{d=d||Function('return this')()||(1,eval)('this')}catch(f){'object'==typeof window&&(d=window)}a.exports=d},function(a,c,d){var h=d(1),j=d(2);a.exports=function(k,l,m){var o=l&&m||0;'string'==typeof k&&(l='binary'==k?Array(16):null,k=null),k=k||{};var p=k.random||(k.rng||h)();if(p[6]=64|15&p[6],p[8]=128|63&p[8],l)for(var q=0;16>q;++q)l[o+q]=p[q];return l||j(p)}},function(module,exports,__webpack_require__){'use strict';function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _toConsumableArray(a){if(Array.isArray(a)){for(var c=0,d=Array(a.length);c<a.length;c++)d[c]=a[c];return d}return Array.from(a)}function _classCallCheck(a,c){if(!(a instanceof c))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(exports,'__esModule',{value:!0});var _createClass=function(){function a(c,d){for(var h,f=0;f<d.length;f++)h=d[f],h.enumerable=h.enumerable||!1,h.configurable=!0,'value'in h&&(h.writable=!0),Object.defineProperty(c,h.key,h)}return function(c,d,f){return d&&a(c.prototype,d),f&&a(c,f),c}}(),_uuid2=__webpack_require__(0),_uuid3=_interopRequireDefault(_uuid2),_Config=__webpack_require__(9),_Config2=_interopRequireDefault(_Config),_Message=__webpack_require__(10),_Message2=_interopRequireDefault(_Message),AgentClientWire=function(){function AgentClientWire(){_classCallCheck(this,AgentClientWire),this._requests=new Map,this._queue=new Set,this._ready=!1,this.sender=null,this.receiver=null,this.origin=null,this.defaultTimeout=15,this.handlers={},this.handlers.AgentClientWireOnReady=new Map}return _createClass(AgentClientWire,[{key:'setMountpoint',value:function(){var c=this,d=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.mountpoint=d,this.mountpoint.onReady=function(f){return c._ready?void f():void c.handlers.AgentClientWireOnReady.set(_uuid3.default.v4(),f)},this.mountpoint.onReadyAsync=function(){return new Promise(function(f){c.mountpoint.onReady(function(){return f()})})}}},{key:'setManifest',value:function(){var c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.manifest=c}},{key:'setDisplay',value:function(c){this.displayId=c}},{key:'setRemote',value:function(c){this.remoteId=c}},{key:'setTransport',value:function(c,d,f){this.sender=c,this.receiver=d,this.origin=f}},{key:'start',value:function(){var c=this;this.receiver.addEventListener('message',this.message.bind(this)),this._queue.forEach(function(f){c.post(f),c._queue.delete(f)}),this.buildEndpoints(this.manifest,this.mountpoint);var d=Array.from(this.handlers.AgentClientWireOnReady.values());d.forEach(function(f){return f()}),this._ready=!0}},{key:'message',value:function(c){var d=c.data,f=d.type,h=d.event,j=d.destination,k=d.error,l=d.data;if(('response'===f||'response'===h)&&this._requests.has(j)){var m=this._requests.get(j),o=m.resolve,p=m.reject;if(k)return p(k);o.apply(void 0,_toConsumableArray(l))}'event'===h&&this.handlers[j]&&this.handlers[j].forEach(function(q){return q.apply(void 0,_toConsumableArray(l))})}},{key:'post',value:function(){var c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=c.message,f=d.message,h=d.transferList;if(window['AgentM.RPC']){var j=JSON.stringify(f);window['AgentM.RPC'].fromClient(j)}if(!this.sender&&!window['AgentM.RPC'])return this._queue.add(c);if(this.sender)try{this.sender.postMessage(f,this.origin,h)}catch(k){console.error(k)}}},{key:'checkArguments',value:function(c){return c.every(function(d){try{switch(!0){case d instanceof ArrayBuffer:return!0;default:JSON.stringify(d);}return!0}catch(f){return!1}})}},{key:'timeout',value:function(c){return new Promise(function(d,f){setTimeout(function(){return f(new Error('Request timed out'))},c)})}},{key:'emit',value:function(c,d,f){var h=this;return new Promise(function(j,k){try{h.checkArguments(f)||k(new Error('Untransferrable argument provided')),h._requests.set(c,{resolve:j,reject:k});var l=new _Message2.default(c,d,f,h.displayId);h.post(l)}catch(m){return k(m)}})}},{key:'notify',value:function(c,d,f){var j=_uuid3.default.v4(),k=d.find(function(m){return m instanceof _Config2.default}),l=f;return k&&(l=k.timeout),Promise.race([this.emit(j,c,d),this.timeout(l*1e3)])}},{key:'getEvaldArgument',value:function(code,ctx){switch(!0){case'this'===ctx:var thisself=this;return thisself.__eval=function(){var val=eval(code);return val},thisself.__eval();case'window'===ctx:return window.eval(code);default:var self=window[ctx];return self.__eval=function(){return eval(code)},self.__eval();}}},{key:'buildEndpoints',value:function(){var c=this,d=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},f=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};d.forEach(function(h){var j=h.namespace,k=h.properties,l=c.buildGenerateFromNamespace(f,j);k.forEach(function(m){var o=m.uuid,p=m.namespace,q=m.type,s=m.name,t=m.target,u=m.evaldParams,v=m.timeout;v=v||c.defaultTimeout;var w=c.buildGenerateFromNamespace(l,p);switch(!0){case'StandardMethod'===q:w[s]=function(){for(var x=arguments.length,y=Array(x),z=0;z<x;z++)y[z]=arguments[z];var A=y;if(u){var B=u.arg,C=u.code,D=u.ctx;if(A.length>=B&&(A[B-1]=c.getEvaldArgument(C,D)),A.length<B){var E=B-A.length,F=Array.from({length:E});A=[].concat(_toConsumableArray(A),_toConsumableArray(F)),A[B-1]=c.getEvaldArgument(C,D)}}return c.notify(o,A,v)};break;case'StandardProperty'===q:w[s]=t;break;case'EvaldMethod'===q:window.eval(t);break;case'EventListener'===q:c.handlers[s]=new Map,w[s]=function(x){var y=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},z=_uuid3.default.v4();return c.handlers[s].set(z,function(){return y.once&&c.handlers[s].delete(z),x.apply(void 0,arguments)}),function(){c.handlers[s].delete(z)}};}})})}},{key:'buildGenerateFromNamespace',value:function(){var c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'/',f=d.replace('/Agent','');if('/'===f)return c;var h=f.split('/').reverse().filter(function(k){return k});return function k(l){var m=h.pop();return m&&(l[m]=l[m]||{}),l[m]&&0<h.length?k(l[m]):l[m]}(c)}}]),AgentClientWire}();exports.default=AgentClientWire},function(a,c){'use strict';function f(j,k){if(!(j instanceof k))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(c,'__esModule',{value:!0});c.default=function j(){var k=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};f(this,j),Object.assign(this,k)}},function(a,c){'use strict';function f(k,l){if(!(k instanceof l))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(c,'__esModule',{value:!0});var h=function(){function k(l,m){for(var p,o=0;o<m.length;o++)p=m[o],p.enumerable=p.enumerable||!1,p.configurable=!0,'value'in p&&(p.writable=!0),Object.defineProperty(l,p.key,p)}return function(l,m,o){return m&&k(l.prototype,m),o&&k(l,o),l}}(),j=function(){function k(l,m,o,p){f(this,k),this.source=l,this.destination=m,this.arguments=o,this.displayId=p}return h(k,[{key:'setSource',value:function(m){this.source=m}},{key:'setDestination',value:function(m){this.destination=m}},{key:'setArguments',value:function(m){this.arguments=m}},{key:'setDisplay',value:function(m){this.displayId=m}},{key:'message',get:function(){var m=this.source,o=this.destination,p=this.arguments,q=this.displayId;return{message:{source:m,destination:o,arguments:p,displayId:q}}}}]),k}();c.default=j}]);\n\n//# sourceURL=webpack:///./node_modules/@meldcx/agent/Agent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _meldcx_agent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @meldcx/agent */ \"./node_modules/@meldcx/agent/Agent.js\");\n/* harmony import */ var _meldcx_agent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_meldcx_agent__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst agent = new _meldcx_agent__WEBPACK_IMPORTED_MODULE_0___default.a();\n\nwindow.agent = agent;\n\nconst reportError = err => console.error(err);\n\nconst onStatus = async () => {\n    const statusUpdate = res => onStatusResult.innerHTML = JSON.stringify(res);\n\n    try {\n        agent.Peripherals.Biometric.onStatus(statusUpdate);\n    } catch (ex) {\n        reportError(ex);\n    }\n};\n\nconst enrollScanner = async () => {\n    try {\n        const res = await agent.Peripherals.Biometric.enroll();\n        enrollResult.innerHTML = JSON.stringify(res);\n    } catch (ex) {\n        reportError(ex);\n    }\n};\n\nconst listFingersScanner = async () => {\n    try {\n        const res = await agent.Peripherals.Biometric.listFingers();\n        listFingersResult.innerHTML = JSON.stringify(res);\n    } catch (ex) {\n        reportError(ex);\n    }\n};\n\nconst verifyScanner = async () => {\n    try {\n        const res = await agent.Peripherals.Biometric.verify();\n        verifyResult.innerHTML = JSON.stringify(res);\n    } catch (ex) {\n        reportError(ex);\n    }\n};\n\nconst deleteAllScanner = async () => {\n    try {\n        const res = await agent.Peripherals.Biometric.deleteAll();\n        deleteAllResult.innerHTML = JSON.stringify(res);\n    } catch (ex) {\n        reportError(ex);\n    }\n};\n\nconst resetScanner = async () => {\n    try {\n        const res = await agent.Peripherals.Biometric.reset();\n        resetResult.innerHTML = JSON.stringify(res);\n    } catch (ex) {\n        reportError(ex);\n    }\n};\n\nconst init = async () => {\n    reportError('Agent Initialising');\n    await agent.onReadyAsync();\n\n    reportError('Agent is ready!');\n\n    onStatusButton.addEventListener('click', onStatus);\n    enrollButton.addEventListener('click', enrollScanner);\n    listFingersButton.addEventListener('click', listFingersScanner);\n    verifyButton.addEventListener('click', verifyScanner);\n    deleteAllButton.addEventListener('click', deleteAllScanner);\n    resetButton.addEventListener('click', resetScanner);\n};\n\nconst onStatusButton = document.getElementById('onStatus-button');\nconst enrollButton = document.getElementById('enroll-button');\nconst listFingersButton = document.getElementById('listFingers-button');\nconst verifyButton = document.getElementById('verify-button');\nconst deleteAllButton = document.getElementById('deleteAll-button');\nconst resetButton = document.getElementById('reset-button');\n\nconst onStatusResult = document.getElementById('onStatus-result');\nconst enrollResult = document.getElementById('enroll-result');\nconst listFingersResult = document.getElementById('listFingers-result');\nconst verifyResult = document.getElementById('verify-result');\nconst deleteAllResult = document.getElementById('deleteAll-result');\nconst resetResult = document.getElementById('reset-result');\n\ninit();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });