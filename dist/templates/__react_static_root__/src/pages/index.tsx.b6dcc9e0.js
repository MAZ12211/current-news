(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{55:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),c=n(0),l=n.n(c),i=function(e){var t=e.news;return l.a.createElement("div",{className:"card block"},l.a.createElement("div",{className:"news-header-container"},l.a.createElement("h2",{className:"news-header"},l.a.createElement("img",{src:t.favicon,alt:"favicon"}),l.a.createElement("a",{href:t.link},t.title)),l.a.createElement("p",null,t.tags)),l.a.createElement("div",{className:"news-button-container"},t.discuss.map((function(e,n){if(e!==t.link){var a=new URL(e);return l.a.createElement("a",{key:n,className:"news-button block",href:e},a.hostname)}return null}))))},o={display:"flex",flexFlow:"row wrap",justifyContent:"center"},s=function(e){var t=e.active,n=e.tags,a=e.onClick;return l.a.createElement("div",{style:o},n.sort((function(e,t){return e.localeCompare(t)})).map((function(e,n){return l.a.createElement("button",{key:n,onClick:function(){a&&a(e)},className:e===t?"block accent round":"block round"},e)})))},u=n(14);t.default=function(){var e=Object(u.useSiteData)();if(void 0===e)return l.a.createElement("div",null,"Failed to load!");var t=Object(c.useState)(function(e){if("undefined"!=typeof document)return window.localStorage.getItem(e)}("tag")),n=r()(t,2),a=n[0],o=n[1],m=Object(c.useState)(e.items),f=r()(m,2),d=f[0],w=f[1];return Object(c.useEffect)((function(){var t,n;w(e.items.filter((function(e){return e.tags.includes(a)}))),t="tag",n=a,"undefined"!=typeof document&&window.localStorage.setItem(t,n)}),[a]),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h1",null,"Current News"),l.a.createElement(s,{tags:e.tags,active:a,onClick:function(e){return o(e)}}),l.a.createElement("div",{className:"newsWrapper"},d.map((function(e,t){return l.a.createElement(i,{key:t,news:e})}))))}}}]);