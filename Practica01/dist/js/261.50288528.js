"use strict";(self["webpackChunkPractica01"]=self["webpackChunkPractica01"]||[]).push([[261],{4261:(t,e,r)=>{r.r(e),r.d(e,{MENU_BACK_BUTTON_PRIORITY:()=>c,OVERLAY_BACK_BUTTON_PRIORITY:()=>i,blockHardwareBackButton:()=>n,startHardwareBackButton:()=>a});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const n=()=>{document.addEventListener("backbutton",(()=>{}))},a=()=>{const t=document;let e=!1;t.addEventListener("backbutton",(()=>{if(e)return;let r=0,n=[];const a=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,e){n.push({priority:t,handler:e,id:r++})}}});t.dispatchEvent(a);const i=async t=>{try{if(null===t||void 0===t?void 0:t.handler){const e=t.handler(c);null!=e&&await e}}catch(e){console.error(e)}},c=()=>{if(n.length>0){let t={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};n.forEach((e=>{e.priority>=t.priority&&(t=e)})),e=!0,n=n.filter((e=>e.id!==t.id)),i(t).then((()=>e=!1))}};c()}))},i=100,c=99}}]);
//# sourceMappingURL=261.50288528.js.map