"use strict";var t=function(t){return document.querySelector(t)},e={get:function(t){return localStorage.getItem("key")},set:function(t,e){localStorage.setItem(t,e)},update:function(t,n){void 0!==e.get(t)&&e.set(t,n)},validate:function(t){return null!==e.get(t)&&void 0!==e.get(t)},setMasive:function(t){var n=Object.keys(t),o=Object.values(t);n.forEach((function(t,n){e.set(t,o[n])}))}};e.setMasive({a:1,b:2,c:3}),t("#menu_button").addEventListener("click",(function(){t("#menu_container").classList.toggle("show_menu");var e=t("#menu_button").childNodes[1];e.classList.toggle("mdi-menu"),e.classList.toggle("mdi-close")})),t("#switch_theme").addEventListener("click",(function(){document.body.classList.toggle("dark")})),window.addEventListener("load",(function(){document.body.classList.toggle("dark")}));
//# sourceMappingURL=phpcentral-dist.js.map