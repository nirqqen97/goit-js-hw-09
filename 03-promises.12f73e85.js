var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var r=n[e];delete n[e];var t={id:e,exports:{}};return o[e]=t,r.call(t.exports,t,t.exports),t.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},e.parcelRequired7c6=r);var t=r("iQIUW");refs={formRef:document.querySelector(".form")},refs.formRef.addEventListener("submit",(function(e){e.preventDefault();const{elements:{delay:o,step:n,amount:r}}=e.currentTarget;l=Number(o.value),i=Number(n.value),s=Number(r.value);for(let e=0;e<s;e++)u(e,l).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`),t.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`),t.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)})),l+=i;e.currentTarget.reset()}));let l=null,i=null,s=null;function u(e,o){return new Promise(((n,r)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:o}):r({position:e,delay:o})}),o)}))}
//# sourceMappingURL=03-promises.12f73e85.js.map