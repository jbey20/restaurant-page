(()=>{"use strict";var __webpack_modules__={204:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>loadPage});const loadPage=()=>{const head=document.head,style=document.createElement("link");head.appendChild(style),style.rel="stylesheet",style.href="/src/stylesheets/home-style.css";const content=document.getElementById("content"),header=document.createElement("header");header.classList.add("header");const navList=document.createElement("ul");navList.classList.add("header-list"),navList.classList.add("header-right");const item0=document.createElement("a");item0.classList.add("logo"),item0.textContent="Truffoni's";const item1=document.createElement("a");item1.textContent="Home",item1.classList.add("active");const item2=document.createElement("a");item2.textContent="Menu";const item3=document.createElement("a");item3.textContent="Make a Reservation";for(let i=0;i<=3;i++)eval(`item${i}.classList.add('header-list-item')`);const main=document.createElement("main"),title=document.createElement("h1");title.textContent="Truffoni's Steakhouse";const subtitle=document.createElement("h2");subtitle.textContent="Home of the original Sloppy Steak";const copy=document.createElement("p");copy.textContent="If you USED to be a piece of s@#!, you'll love it here!";const background=document.createElement("img");content.appendChild(header),header.appendChild(item0),header.appendChild(navList);for(let i=1;i<=3;i++)eval(`navList.appendChild(item${i})`);content.appendChild(main),main.appendChild(title),main.appendChild(subtitle),main.appendChild(copy)}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var a=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](a,a.exports,__webpack_require__),a.exports}__webpack_require__.d=(e,t)=>{for(var a in t)__webpack_require__.o(t,a)&&!__webpack_require__.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var __webpack_exports__={};(0,__webpack_require__(204).i)()})();