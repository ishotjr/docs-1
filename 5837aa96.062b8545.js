(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{107:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return m}));var a=t(2),r=t(6),o=(t(0),t(115)),c={id:"package.json",title:"package.json"},i={id:"package.json",isDocsHomePage:!1,title:"package.json",description:"Example",source:"@site/docs/package.json.md",permalink:"/package.json",sidebar:"someSidebar",previous:{title:"CLI",permalink:"/cli"},next:{title:"Component Manifest",permalink:"/manifest"}},l=[{value:"Example",id:"example",children:[]},{value:"Keys",id:"keys",children:[{value:"<code>displayName</code>",id:"displayname",children:[]},{value:"<code>components</code>",id:"components",children:[]}]}],p={rightToc:l};function m(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"In your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," you will need to add an additional section called ",Object(o.b)("inlineCode",{parentName:"p"},'"adalo"')," that will look something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "my-package",\n  "version": "0.0.1",\n  "dependencies": { ... },\n  "adalo": {\n    "displayName": "My Package",\n    "components": [\n      {\n        // "name" must match the exported name from your module.\n        // i.e. if you `import { FirstComponent } from \'my-package\'` then you would put:\n        "name": "FirstCompnent",\n\n        // "manifest" is the relative path to the manifest.json file, relative to package.json\n        "manifest": "./src/FirstComponent/manifest.json"\n      },\n      {\n        "name": "Second Component",\n        "manifest": "./src/SecondComponent/manifest.json"\n      }\n    ]\n  }\n}\n')),Object(o.b)("h2",{id:"keys"},"Keys"),Object(o.b)("h3",{id:"displayname"},Object(o.b)("inlineCode",{parentName:"h3"},"displayName")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"))),Object(o.b)("p",null,"Name of your package"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "adalo": {\n    "displayName": "My Package"\n  }\n}\n')),Object(o.b)("h3",{id:"components"},Object(o.b)("inlineCode",{parentName:"h3"},"components")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("inlineCode",{parentName:"li"},"Array"))),Object(o.b)("p",null,"An array of objects containing a ",Object(o.b)("inlineCode",{parentName:"p"},"name")," and ",Object(o.b)("inlineCode",{parentName:"p"},"manifest")," key"),Object(o.b)("h4",{id:"name"},Object(o.b)("inlineCode",{parentName:"h4"},"name")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"))),Object(o.b)("p",null,"Name of your component"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Your name should match the exported name from your module"))),Object(o.b)("h4",{id:"manifest"},Object(o.b)("inlineCode",{parentName:"h4"},"manifest")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"))),Object(o.b)("p",null,"Relative path, from the ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),", to the ",Object(o.b)("inlineCode",{parentName:"p"},"manifest.json")," for your component"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "adalo": {\n    "components": [\n      {\n        "name": "FirstComponent",\n        "manifest": "./src/FirstComponent/manifest.json"\n      }\n    ]\n  }\n}\n')))}m.isMDXComponent=!0},115:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),m=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=m(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=m(t),d=a,u=b["".concat(c,".").concat(d)]||b[d]||s[d]||o;return t?r.a.createElement(u,i(i({ref:n},p),{},{components:t})):r.a.createElement(u,i({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);