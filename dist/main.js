(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),s=n.n(a)()(o());s.push([e.id,":root {\n    --main-bg-color: midnightblue;\n    --secondary-bg-color: rgb(178, 191, 213);\n    --main-font-color: white;\n}\n\nbody {\n    margin: 0 auto;\n}\n\n.navbar-logo {\n    font-weight: bold;\n    font-size: 2rem;\n}\n\n.navbar {\n    background-color: var(--main-bg-color);\n    height: 10vh;\n    display: flex;\n    justify-content: space-between;\n    padding: 20px;\n    align-items: center;\n    box-sizing: border-box;\n    color: var(--main-font-color);\n}\n\n#project-content {\n    background-color: var(--secondary-bg-color);\n    box-sizing: border-box;\n    padding: 10px;\n    height: 90vh;\n}\n\n.project-title {\n    margin-bottom: 0px;\n}\n\n.task-list {\n    gap: 10px;\n}\n\n.task {\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n    box-sizing: border-box;\n    background-color: rgb(218, 218, 218);\n    margin: 10px;\n    border-radius: 8px;\n}\n\n.delete-task {\n    border-radius: 30px;\n    border: none;\n    background-color: rgba(255, 255, 255, 0);\n}\n\n.delete-task:hover {\n    background-color: rgba(255, 255, 255, 0.531);\n}\n\n.delete-task:active {\n    background-color: rgba(255, 255, 255, 0.332);\n}",""]);const i=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=n(a[s]);t[i].references--}for(var c=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),s=n.n(a),i=n(565),c=n.n(i),d=n(216),l=n.n(d),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=class{constructor(e,t,n,r){this.name=e,this.comments=t,this.dueDate=n,this.priority=r}get name(){return this._name}set name(e){this._name=e}get comments(){return this._comments}set comments(e){this._comments=e}get dueDate(){return this._dueDate}set dueDate(e){this._dueDate=e}get priority(){return this._priority}set priority(e){this._priority=e}};function v(e,t,n){let r=document.createElement("div");r.classList.add("task");let o=document.createElement("div");o.classList.add("task-title"),o.textContent=t.name,r.appendChild(o);let a=document.createElement("button");a.classList.add("delete-task"),a.textContent="X",a.addEventListener("click",(n=>{e.taskList=e.taskList.filter((e=>e!=t)),n.currentTarget.parentElement.remove()})),r.appendChild(a),n.appendChild(r)}const g=new class{constructor(e){this.name=e,this.taskList=[]}get name(){return this._name}set name(e){this._name=e}addTask(e,t,n,r){let o=new h(e,t,n,r);this.taskList.push(o)}}("General");g.addTask("My Task","dude"),g.addTask("My Task 2",console.log(g)),console.log(g.taskList[1].comments),function(e,t){const n=document.createElement("h1");n.classList.add("project-title"),n.textContent=e.name;const r=document.createElement("div");r.classList.add("task-list"),function(e,t){for(let n=0;n<e.taskList.length;n++)v(e,e.taskList[n],t)}(e,r),t.appendChild(n),t.appendChild(r)}(g,document.getElementById("project-content"))})()})();