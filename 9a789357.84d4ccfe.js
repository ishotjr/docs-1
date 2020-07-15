(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{113:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(6),o=(t(0),t(123)),p={id:"example-access-child-props",title:"Accessing Child Props"},c={id:"marketplace/examples/example-access-child-props",isDocsHomePage:!1,title:"Accessing Child Props",description:"When you put props under different childComponents they will show up as child props.",source:"@site/docs/marketplace/examples/example-access-child-props.md",permalink:"/marketplace/examples/example-access-child-props",sidebar:"docs",previous:{title:"Publishing Adalo Libraries",permalink:"/marketplace/publish-new-adalo-library"},next:{title:"Conditional Control",permalink:"/marketplace/examples/example-conditional"}},i=[],l={rightToc:i};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When you put props under different ",Object(o.b)("inlineCode",{parentName:"p"},"childComponents")," they will show up as child props."),Object(o.b)("p",null,"Example manifest:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  "childComponents": [\n    {\n      "name": "childComponent",\n      "displayName": "Child Component",\n      "props": [\n        {\n          "name": "exampleProp",\n          "displayName": "Example Prop",\n          "type": "text",\n          "default": "default",\n        },\n      ]\n    }\n  ]\n}\n')),Object(o.b)("p",null,"To access the prop ",Object(o.b)("inlineCode",{parentName:"p"},"exampleProp"),", you access it as a child prop to ",Object(o.b)("inlineCode",{parentName:"p"},"childComponent"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const {\n  childComponent: { exampleProp },\n} = this.props; // Same as doing this.props.childComponent.exampleProp\n")))}s.isMDXComponent=!0},123:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,b=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?a.a.createElement(b,c(c({ref:n},l),{},{components:t})):a.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var l=2;l<o;l++)p[l]=t[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);