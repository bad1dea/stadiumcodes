(this.webpackJsonpstadiumcodes=this.webpackJsonpstadiumcodes||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),i=(n(16),n(17),n(2)),s=n(7),l=n(9),u=n(8),h=n(10);function d(e){return e>="0"&&e<="9"}function f(e){var t=(e.match(/N/g)||[]).length,n=(e.match(/H/g)||[]).length,a=(e.match(/C/g)||[]).length;return 3===t&&2===n&&0===a?"C":2===t&&2===n&&1===a?"N":3===t&&1===n&&1===a?"H":void 0}function m(e){if(e.length<8)return["Too short"];if(e.length>8)return["Too long"];for(var t=0;t<e.length;t++){var n=e.charAt(t);if(!d(n)&&"C"!==n&&"N"!==n&&"H"!==n)return["Invalid character: ".concat(n)]}return f(e)?[]:["Code does not match room pattern; check it's entered correctly"]}var v=function(e){var t=e.code,n=e.setCode,a=m(t);return o.a.createElement("div",{className:"CodeForm"},o.a.createElement("input",{type:"text",value:t,onChange:function(e){var t=e.target.value;return n(t.toUpperCase())}}),a&&""!==t&&o.a.createElement("ul",null,a.map((function(e,t){return o.a.createElement("li",{key:t},e)}))))},g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return n}(Object(h.a)(Error));function w(e,t){return{codesWithUnknowns:e,solvedCodes:t}}function p(e,t,n){return e.replace(new RegExp(t,"g"),n)}function E(e){for(var t=new Set,n=new Set,a=0;a<e.length;a++){var o=e.charAt(a);d(o)?t.add(o):n.add(o)}return[t,n]}function k(e){for(var t=new Map,n=0;n<8;n++){for(var a=new Set,o=new Set,r=0;r<e.length;r++){var c=e[r].charAt(n);d(c)?a.add(c):o.add(c)}if(a.size>1)throw new g("Conflicting digits on position ".concat(n+1));if(o.size>1)throw new g("Conflicting chars on position ".concat(n+1));if(1===a.size&&1===o.size){var i=a.values().next().value,s=o.values().next().value;if(t.has(s)&&t.get(s)!==i)throw new g("Two translations for: ".concat(s,": ").concat(i," && ").concat(t.get(s)));t.set(s,i)}}return t}function y(e){var t=[];return function e(t,n){var a=E(t),o=Object(i.a)(a,2),r=o[0],c=o[1];if(0===c.size)return void n.push(t);for(var s=c.values().next().value,l=0;l<10;l++){var u=l.toString();if(!r.has(u)){var h=p(t,s,u);1===c.size?n.push(h):e(h,n)}}}(e,t),t}function C(e){for(var t=[],n=[],a=0;a<e.length;a++){var o=e[a];0===m(o).length&&(n.push(o),t.push(f(o)))}if(0!==n.length){if(new Set(n).size!==n.length)throw new g("Duplicate Codes");if(new Set(t).size!==t.length)throw new g("Got codes from the same type of room; check they're entered correctly.");return 1===n.length?function(e){var t=f(e);if(!t)throw new g("Code could not be classified by room; check entry");var n=E(e),a=Object(i.a)(n,1)[0];if("C"===t)return w([e],y(e));var o=[],r=[];return a.forEach((function(n){var a=p(e,t,n);o.push(a),r=r.concat(y(a))})),w(o,r)}(n[0]):2===n.length?function(e,t){var n=k([e,t]);if(2!==n.size)throw new g("Missing mapping for one character, check code entry");var a=e;return n.forEach((function(e,t){return a=p(a,t,e)})),w([a],y(a))}(n[0],n[1]):function(e,t,n){var a=k([e,t,n]);if(3!==a.size)throw new g("Missing mapping for one character, check code entry");var o=e;return a.forEach((function(e,t){return o=p(o,t,e)})),w(void 0,[o])}(n[0],n[1],n[2])}}function b(e){var t=e.codes;return t?t.solvedCodes&&1===t.solvedCodes.length?o.a.createElement("div",{className:"ResultCodes"},"Code: ",o.a.createElement("strong",null,t.solvedCodes[0])):o.a.createElement("div",{className:"ResultCodes"},t.codesWithUnknowns&&o.a.createElement("div",null,o.a.createElement("div",null,"The codes with unknowns are:"),o.a.createElement("div",null,o.a.createElement("ul",{className:"CodesWithUnknowns"},t.codesWithUnknowns.map((function(e,t){return o.a.createElement("li",{key:t},e)}))))),t.solvedCodes&&o.a.createElement("div",null,o.a.createElement("p",null,"There are ",t.solvedCodes.length," potential codes:"),o.a.createElement("div",{className:"Codes"},t.solvedCodes.map((function(e,t){return o.a.createElement("section",{key:t},o.a.createElement("div",null,e))}))))):""}var N=function(){var e,t,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],s=r[1],l=Object(a.useState)(""),u=Object(i.a)(l,2),h=u[0],d=u[1],f=Object(a.useState)(""),m=Object(i.a)(f,2),w=m[0],p=m[1];try{t=C([c,h,w])}catch(E){e=E instanceof g?E.message:"Unknown"}return o.a.createElement("div",{className:"CodeList"},o.a.createElement(v,{key:"code1",code:c,setCode:s}),o.a.createElement(v,{key:"code2",code:h,setCode:d}),o.a.createElement(v,{key:"code3",code:w,setCode:p}),e&&o.a.createElement("ul",{className:"Errors"},o.a.createElement("li",null,e)),o.a.createElement(b,{codes:t}))};var S=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null,"Stadium Code Solver")),o.a.createElement("div",{className:"Instructions"},"Instructions: To get the 8 digit code to the Stadium Easter Egg (which launches fireworks, and gives you a blueprint), enter each code you find in a game into a text field below. Longer description of where/how to get codes can be found ",o.a.createElement("a",{href:"https://www.youtube.com/watch?v=GGJGbwQ8rtU"},"in this video"),'. Use "H" for the one that looks like a house, "N" for the one that looks like a nose, and "C" for the one that looks like a Chinese character. For example, you can enter: 64NNH1NH and/or 6C2NH1NH.'),o.a.createElement("div",{className:"Instructions"},"This calculator works with 1, 2 or 3 codes; the more you get, the less typing you'll have to do into the final pad. With one code, you'll have either 42 or 126 potential keys, 2 codes yields exactly 6 potentials, and 3 codes will solve it to 1. All of these are brute forceable in the general time limits plunder match, though typing all 126 can be frustrating, especially in an active warzone."),o.a.createElement(N,null),o.a.createElement("footer",null,"Thanks to ",o.a.createElement("a",{href:"https://www.twitch.tv/geekypastimes"},"GeekyPastimes")," for publishing info on the codes. Drop him a like & subscribe."))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.89ae2b71.chunk.js.map