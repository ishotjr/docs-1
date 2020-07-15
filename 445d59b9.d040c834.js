(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{106:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return m}));var r=t(2),o=t(6),a=(t(0),t(123)),c={id:"example-toggle-child-component",title:"Toggle Child Component"},p={id:"marketplace/examples/example-toggle-child-component",isDocsHomePage:!1,title:"Toggle Child Component",description:"`json",source:"@site/docs/marketplace/examples/example-toggle-child-component.md",permalink:"/marketplace/examples/example-toggle-child-component",sidebar:"docs",previous:{title:"App Branding",permalink:"/marketplace/examples/example-app-branding"},next:{title:"Actions",permalink:"/marketplace/examples/example-actions"}},l=[],i={rightToc:l};function m(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "childComponents": [\n    {\n      "name": "childComponent",\n      "displayName": "Child Component",\n      "props": [\n        {\n          "name": "enabled",\n          "type": "boolean",\n          "default": true\n        }\n      ]\n    }\n  ]\n}\n}\n')),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"enabled"),' option will add a switch right next to the accordion which can turn on and off the child component.\nSee Adalo\'s "App Bar" for an example of what this looks like.x'))}m.isMDXComponent=!0},123:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),m=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=m(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=m(t),d=r,f=u["".concat(c,".").concat(d)]||u[d]||s[d]||a;return t?o.a.createElement(f,p(p({ref:n},i),{},{components:t})):o.a.createElement(f,p({ref:n},i))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<a;i++)c[i]=t[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);