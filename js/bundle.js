!function(e){var i={};function t(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,i){if(1&i&&(e=t(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var s in e)t.d(n,s,function(i){return e[i]}.bind(null,s));return n},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},t.p="",t(t.s=0)}([function(e,i,t){e.exports=t(1)},function(e,i,t){"use strict";t.r(i);t(2),t(3),t(4),t(5),t(6),t(7);console.log("Works!")},function(e,i,t){},function(e,i){window.addEventListener("DOMContentLoaded",(function(){var e=function(e,i,t,n){var s;e=window.matchMedia(e);var o=function(){return e.matches?(console.log("matches"),s=new Swiper(i,t),console.log(s),void(n&&n(s))):(void 0!==s&&s.destroy(!0,!0),void console.log("not matches"))};e.addEventListener("change",o),o()},i=function(e){e&&e.on("slideChange",(function(i){console.log("*** mySwiper.activeIndex",e.activeIndex)}))};e("(max-width: 767px)",".swiper-companies",{loop:!0,pagination:{el:".swiper-pagination__companies"},breakpoints:{0:{slidesPerView:1,enabled:!0},320:{slidesPerView:1.1,enabled:!0},350:{slidesPerView:1.3,enabled:!0},390:{slidesPerView:1.5,enabled:!0},540:{slidesPerView:2,enabled:!0},620:{slidesPerView:2.1,enabled:!0},760:{slidesPerView:2.2,enabled:!0}}},i),e("(max-width: 767px)",".swiper-technique",{loop:!0,pagination:{el:".swiper-pagination__technique"},breakpoints:{0:{slidesPerView:1,enabled:!0},320:{slidesPerView:1.3,enabled:!0},350:{slidesPerView:1.5,enabled:!0},390:{slidesPerView:1.7,enabled:!0},540:{slidesPerView:1.9,enabled:!0},620:{slidesPerView:2.1,enabled:!0},760:{slidesPerView:2.3,enabled:!0}}},i),e("(max-width: 767px)",".swiper-prices",{loop:!0,pagination:{el:".swiper-pagination__prices"},breakpoints:{0:{slidesPerView:1,enabled:!0},320:{slidesPerView:1.2,enabled:!0},350:{slidesPerView:1.5,enabled:!0},390:{slidesPerView:1.7,enabled:!0},540:{slidesPerView:1.9,enabled:!0},620:{slidesPerView:2.1,enabled:!0},760:{slidesPerView:2.3,enabled:!0}}},i)}))},function(e,i){document.querySelector(".fog-of-war"),document.querySelector(".aside-left");var t=document.querySelectorAll(".read-more"),n=document.querySelector(".brands__read-more"),s=document.querySelector(".companies"),o=document.querySelector(".equipment-repair__read-more"),r=document.querySelector(".technique"),l=document.querySelector(".description__read-more"),c=document.querySelector(".description__other-text");t.forEach((function(e){var i=e.querySelector("span");e.addEventListener("click",(function(){e.classList.contains("read-more__open")?(i.textContent="Читать далее",e.classList.remove("read-more__open")):(i.textContent="Скрыть",e.classList.add("read-more__open"))}))})),n.addEventListener("click",(function(){s.classList.contains("companies__open")?s.classList.remove("companies__open"):s.classList.add("companies__open")})),o.addEventListener("click",(function(){r.classList.contains("technique__open")?r.classList.remove("technique__open"):r.classList.add("technique__open")})),l.addEventListener("click",(function(){c.classList.contains("description__open")?c.classList.remove("description__open"):c.classList.add("description__open")})),l.addEventListener("click",(function(){c.classList.contains("description__open")?c.classList.remove("description__open"):c.classList.add("description__open")}))},function(e,i){var t=document.querySelector(".header__burger"),n=document.querySelector(".aside-menu__burger"),s=document.querySelector(".aside-left"),o=document.querySelector(".fog-of-war-left");t.addEventListener("click",(function(){s.classList.add("aside-left__visible"),o.classList.add("fog-of-war-left__visible")})),n.addEventListener("click",(function(){s.classList.remove("aside-left__visible"),o.classList.remove("fog-of-war-left__visible")}))},function(e,i){var t=document.querySelectorAll(".tell"),n=document.querySelector(".tell-close"),s=document.querySelector(".aside-tell"),o=document.querySelector(".fog-of-war-right");t.forEach((function(e){e.addEventListener("click",(function(){e.classList.contains("aside-tell__visible")?(s.classList.remove("aside-tell__visible"),o.classList.remove("fog-of-war-right__visible")):(s.classList.add("aside-tell__visible"),o.classList.add("fog-of-war-right__visible"))}))})),n.addEventListener("click",(function(){s.classList.remove("aside-tell__visible"),o.classList.remove("fog-of-war-right__visible")}))},function(e,i){var t=document.querySelectorAll(".settings"),n=document.querySelector(".settings-close"),s=document.querySelector(".aside-settings"),o=document.querySelector(".fog-of-war-right");t.forEach((function(e){e.addEventListener("click",(function(){e.classList.contains("aside-settings__visible")?(s.classList.remove("aside-settings__visible"),o.classList.remove("fog-of-war-right__visible")):(s.classList.add("aside-settings__visible"),o.classList.add("fog-of-war-right__visible"))}))})),n.addEventListener("click",(function(){s.classList.remove("aside-settings__visible"),o.classList.remove("fog-of-war-right__visible")}))}]);
//# sourceMappingURL=bundle.js.map