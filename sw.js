if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>r(e,l),u={module:{uri:l},exports:o,require:t};s[l]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(n(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/FileLoader-C9132J3O.js",revision:null},{url:"assets/index-BesQh8cG.css",revision:null},{url:"assets/index-DhUThKGR.js",revision:null},{url:"assets/N2AdjectiveLoader-C6VOlDnP.js",revision:null},{url:"assets/N2AdverbLoader-rge-sFi9.js",revision:null},{url:"assets/N2VerbLoader-C3dmyLnw.js",revision:null},{url:"assets/N5AdjectiveLoader-B3pbAoh1.js",revision:null},{url:"assets/N5AdverbLoader-CwN75rns.js",revision:null},{url:"assets/N5NounLoader-tf-sY7AY.js",revision:null},{url:"assets/N5VerbLoader-_saLDjN7.js",revision:null},{url:"index.html",revision:"1807c945e90aa772536d2cff63925f66"},{url:"registerSW.js",revision:"199d7372245ad158580acfee7fb8bd26"},{url:"icon.png",revision:"6021ecebd778ca864919ff840a56d94f"},{url:"manifest.webmanifest",revision:"14c39c137a96b544910aa4826d10ded0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
