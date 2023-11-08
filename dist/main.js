(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,":root {\n    --main-bg-color: midnightblue;\n    --secondary-bg-color: rgb(178, 191, 213);\n    --main-font-color: white;\n}\n\nbody {\n    margin: 0 auto;\n}\n\n.navbar-logo {\n    font-weight: bold;\n    font-size: 2rem;\n}\n\n.navbar {\n    background-color: var(--main-bg-color);\n    height: 10vh;\n    display: flex;\n    justify-content: space-between;\n    padding: 20px;\n    align-items: center;\n    box-sizing: border-box;\n    color: var(--main-font-color);\n}\n\n#project-content {\n    background-color: var(--secondary-bg-color);\n    box-sizing: border-box;\n    padding: 10px;\n    height: 90vh;\n}\n\n.project-title {\n    margin-bottom: 0px;\n}\n\n.task-list {\n    gap: 10px;\n}\n\n.task {\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n    box-sizing: border-box;\n    background-color: rgb(255, 255, 255);\n    margin: 10px;\n    border-radius: 8px;\n    flex-wrap: wrap;\n}\n\n.task::after {\n    width: 100%;\n    height: 3px;\n    background-color: rgb(255, 0, 0);\n    content: '';\n    margin-top: 8px;\n    border-radius: 8px;\n    border-top-right-radius: 0px;\n    border-top-left-radius: 0px;\n}\n\n.task-title-container {\n    width: calc(100% - 30px);\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n}\n\n.task-title {\n    font-weight: 800;\n    box-sizing: border-box;\n}\n\n.task-title[contenteditable='true'],\n.comment-section[contenteditable='true'] {\n    font-weight: lighter;\n    font-size: .9rem;\n    padding: 2px;\n    border: 1px dashed grey;\n    border-radius: 8px;\n}\n\n\n.edit {\n    scale: 60%;\n    opacity: 20%;\n    border-radius: 8px;\n}\n\n.edit:hover {\n    opacity: 100%;\n    scale: 65%;\n}\n\n.edit:active {\n    scale: 60%;\n}\n\n.delete-task {\n    border-radius: 30px;\n    border: none;\n    background-color: rgba(255, 255, 255, 0);\n}\n\n.delete-task:hover {\n    background-color: rgb(208, 208, 208);\n}\n\n.delete-task:active {\n    background-color: rgb(150, 150, 150);\n}\n\n.comment-section {\n    display: flex;\n    align-items: center;\n    width: 75%;\n}\n\n.date-picker,\n.empty-date-picker {\n    border: none;\n    border-radius: 6px;\n    padding: 2px;\n    font-family: Arial, Helvetica, sans-serif;\n    width: 100px;\n    align-self: flex-end;\n}\n\n.empty-date-picker::before {\n    width: 100px;\n    background-color: rgba(255, 255, 255, 0);\n    content: 'Due Date';\n    padding-left: 3px;\n    vertical-align: middle;\n    margin: auto;\n    color: grey;\n    font-style: italic;\n}",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=a(m,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var c=r(e,a),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),s=n(565),c=n.n(s),d=n(216),l=n.n(d),p=n(589),u=n.n(p),m=n(426),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=class{constructor(e,t,n,r){this.name=e,this.comments=t,this.dueDate=n,this.priority=r}get name(){return this._name}set name(e){this._name=e}get comment(){return this._comment}set comment(e){this._comment=e}get dueDate(){return this._dueDate}set dueDate(e){this._dueDate=e}get priority(){return this._priority}set priority(e){this._priority=e}},g=n.p+"9c1d0dcf9918d4367d56.svg";function b(e,t,n){let r=document.createElement("div");r.classList.add("task");let a=document.createElement("div");a.classList.add("task-title-container");let o=document.createElement("div");o.classList.add("task-title"),o.textContent=t.name,a.appendChild(o);let i=new Image;i.classList.add("edit"),i.src=g,v(i,o),a.appendChild(i),r.appendChild(a);let s=document.createElement("button");s.classList.add("delete-task"),s.textContent="X",s.addEventListener("click",(n=>{e.taskList=e.taskList.filter((e=>e!=t)),n.currentTarget.parentElement.remove()})),r.appendChild(s);let c=document.createElement("div");c.classList.add("comment-section");let d=document.createElement("div");d.classList.add("comment-section-content"),d.textContent="Insert Comment Here",c.appendChild(d);let l=new Image;l.classList.add("edit"),l.src=g,v(l,d),c.appendChild(l),r.appendChild(c);let p=document.createElement("input");p.className=""===p.value?"empty-date-picker":"date-picker",p.setAttribute("type","date"),p.addEventListener("input",(e=>{p.className=""===p.value?"empty-date-picker":"date-picker"})),r.appendChild(p),n.appendChild(r)}function v(e,t){e.addEventListener("click",(()=>{t.setAttribute("contenteditable","true"!=t.getAttribute("contenteditable")?"true":"false"),t.focus()}))}const y=new class{constructor(e){this.name=e,this.taskList=[]}get name(){return this._name}set name(e){this._name=e}addTask(e,t,n,r){let a=new h(e,t,n,r);this.taskList.push(a)}}("General");y.addTask("My Task"),y.addTask("My Task 2"),function(e,t){const n=document.createElement("h1");n.classList.add("project-title"),n.textContent=e.name;const r=document.createElement("div");r.classList.add("task-list"),function(e,t){for(let n=0;n<e.taskList.length;n++)b(e,e.taskList[n],t)}(e,r),t.appendChild(n),t.appendChild(r)}(y,document.getElementById("project-content"))})()})();