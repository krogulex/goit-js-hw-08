function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var l=o("kEUo3");const n=document.querySelector("input"),u=document.querySelector("textarea"),i=(document.querySelector("submit"),document.querySelector(".feedback-form")),d={email:"",textarea:""};i.addEventListener("input",e(l).throttle((function(){d.email=n.value,d.textarea=u.value,localStorage.setItem("feedback-form-state",JSON.stringify(d))}),500));const c=localStorage.getItem("feedback-form-state"),f=JSON.parse(c);f&&f.email&&(""===f.email?n.value="":n.value=f.email),f&&f.textarea&&(""===f.textarea?u.value="":u.value=f.textarea),i.addEventListener("submit",(e=>{e.preventDefault();const t=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(t),n.value="",u.value="",localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.97d3ce62.js.map