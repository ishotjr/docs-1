(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{68:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var o=t(2),a=t(6),r=(t(0),t(93)),c={id:"actions",title:"Actions"},i={unversionedId:"docs/interactions/actions",id:"docs/interactions/actions",isDocsHomePage:!1,title:"Actions",description:"Actions in Adalo are one way to connect your component to the rest of the Adalo ecosystem. You can add actions to your component by declaring them as props in the component manifest:",source:"@site/docs/docs/interactions/actions.md",permalink:"/docs/interactions/actions",lastUpdatedAt:1602871523,sidebar:"docs",previous:{title:"Component Rendering",permalink:"/docs/interactions/component-rendering"},next:{title:"Child Components",permalink:"/docs/interactions/child-components"}},s=[{value:"Arguments as Magic Text",id:"arguments-as-magic-text",children:[]}],p={rightToc:s};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Actions in Adalo are one way to connect your component to the rest of the Adalo ecosystem. You can add actions to your component by declaring them as props in the component manifest:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  "props": [\n    {\n      "name": "exampleAction",\n      "displayName": "Additional Actions when Example Occurs",\n      "type": "action",\n    },\n  ]\n}\n')),Object(r.b)("p",null,"In the code, ",Object(r.b)("inlineCode",{parentName:"p"},"exampleAction")," will now refer to a function that, when called,\nwill execute the actions that the app creator specifies. You can call it like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"exampleFunc = () => {\n  const { exampleAction } = this.props;\n  if (exampleAction) exampleAction();\n};\n")),Object(r.b)("p",null,"Try to include actions wherever you can. For example, an image component should have an action for when the user clicks on the image."),Object(r.b)("h3",{id:"arguments-as-magic-text"},"Arguments as Magic Text"),Object(r.b)("p",null,"To route data from your component to actions, you need to do two things: specify\narguments in the ",Object(r.b)("inlineCode",{parentName:"p"},"manifest.json")," and add those arguments when you call the actions\nin your code."),Object(r.b)("p",null,"manifest.json:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  "props": [\n    {\n      "name": "exampleAction",\n      "displayName": "Example Action",\n      "type": "action",\n      "arguments": [\n        {\n          "type": "number",\n          "displayName": "Argument 1"\n        },\n        {\n          "type": "text",\n          "displayName": "Argument 2"\n        }\n      ]\n    }\n  ]\n}\n')),Object(r.b)("p",null,'In the "recommender", where Adalo suggests different magic texts for the app creator,\nyour component will now show up as an expandable tab, and ',Object(r.b)("inlineCode",{parentName:"p"},"Argument 1")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Argument 2"),'\nwill show up as options for actions under "Example Action".'),Object(r.b)("p",null,'It is datatype specific, so "Argument 2" will NOT show up if the field is number-only.'),Object(r.b)("p",null,"To actually send those values to Adalo, you must send them as arguments:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'exampleFunc = () => {\n  const arg1 = 0;\n  const arg2 = "text";\n  const { exampleAction } = this.props;\n  if (exampleAction) exampleAction(arg1, arg2);\n};\n')))}l.isMDXComponent=!0},93:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,b=u["".concat(c,".").concat(d)]||u[d]||m[d]||r;return t?a.a.createElement(b,i(i({ref:n},p),{},{components:t})):a.a.createElement(b,i({ref:n},p))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<r;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);