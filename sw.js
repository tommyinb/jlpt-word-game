if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>r(e,l),u={module:{uri:l},exports:o,require:t};s[l]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(n(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/FileLoader-BNI2UNoF.js",revision:null},{url:"assets/index-BH7V8FgJ.js",revision:null},{url:"assets/index-BlUZlfA_.css",revision:null},{url:"assets/N1NounLoader-P6xKwhxZ.js",revision:null},{url:"assets/N1VerbLoader-D8Zqe7ES.js",revision:null},{url:"assets/N2AdjectiveLoader-C1b6KfgE.js",revision:null},{url:"assets/N2AdverbLoader-tqntMUCc.js",revision:null},{url:"assets/N2NounLoader-BKhth3lo.js",revision:null},{url:"assets/N2VerbLoader-D0U3mXZT.js",revision:null},{url:"assets/N5AdjectiveLoader-4CvJs9KO.js",revision:null},{url:"assets/N5AdverbLoader-B6RaU-BL.js",revision:null},{url:"assets/N5NounLoader-pTWXV203.js",revision:null},{url:"assets/N5VerbLoader-nKlAXwuK.js",revision:null},{url:"index.html",revision:"e5c7fc93b20bcef14cac66ac47af43bb"},{url:"registerSW.js",revision:"199d7372245ad158580acfee7fb8bd26"},{url:"icon.png",revision:"c6e3f9150d63e79bdfada047e8c7a88a"},{url:"manifest.webmanifest",revision:"14c39c137a96b544910aa4826d10ded0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
