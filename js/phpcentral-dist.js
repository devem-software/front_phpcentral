!function(){"use strict";var e=[,function(e,t,n){n.r(t);var o={get:function(e){if(o.validate(e))return localStorage.getItem(e);console.error('la clave "'.concat(e,'" no está almacenada en el localStorage'))},set:function(e,t){o.validate(e)?(console.warn('la clave "'.concat(e,'" tiene el valor "').concat(o.get(e),'", el valor sera actualizado con el valor "').concat(t,'"')),localStorage.setItem(e,t)):localStorage.setItem(e,t)},update:function(e,t){o.validate(e)&&(o.get(e)===t?console.warn('la clave "'.concat(e,'" ya cuenta con el valor "').concat(e,'", no es necesario actualizar')):o.set(e,t))},validate:function(e){return null!==localStorage.getItem(e)&&void 0!==localStorage.getItem(e)},setMassive:function(e){var t=Object.keys(e),n=Object.values(e);t.forEach((function(e,t){o.set(e,n[t])}))},getMassive:function(e){var t=[];return e.forEach((function(e){t.push(o.get(e))})),t}};t.default=o}],t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};!function(){n.r(o);var e=n(1),t=function(e){return document.querySelector(e)};t("#menu_button").addEventListener("click",(function(){t("#menu_container").classList.toggle("show_menu");var e=t("#menu_button").childNodes[1];e.classList.toggle("mdi-menu"),e.classList.toggle("mdi-close")}));var a=t("#switch_theme"),c=t("#switch_theme_icon"),l=t("#switch_theme_label");a.addEventListener("click",(function(){var e=document.body.classList;e.toggle("dark"),e.contains("dark")?(console.log("el tema es oscuro"),c.classList=["mdi mdi-24px mdi-white-balance-sunny"],l.innerHTML="CAMBIAR A CLARO"):(console.log("el tema es claro"),c.classList=["mdi mdi-24px mdi-weather-night"],l.innerHTML="CAMBIAR A OSCURO")})),window.addEventListener("load",(function(){console.log(e.default.get("edwin"))}))}()}();
//# sourceMappingURL=phpcentral-dist.js.map