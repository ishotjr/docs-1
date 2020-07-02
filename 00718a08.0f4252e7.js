(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{117:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),m=p(t),s=a,d=m["".concat(o,".").concat(s)]||m[s]||u[s]||i;return t?r.a.createElement(d,l(l({ref:n},c),{},{components:t})):r.a.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var b in n)hasOwnProperty.call(n,b)&&(l[b]=n[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},95:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return c}));var a=t(2),r=(t(0),t(117));const i={id:"package-json",title:"package.json"},o={id:"package-json",isDocsHomePage:!1,title:"package.json",description:"Your package.json is the source for information about your library.",source:"@site/docs/package-json.md",permalink:"/package-json",sidebar:"docs",previous:{title:"@adalo/cli",permalink:"/adalo-cli"},next:{title:"manifest.json",permalink:"/manifest-json"}},l=[{value:"Keys",id:"keys",children:[{value:"<code>name</code>",id:"name",children:[]},{value:"<code>author</code>",id:"author",children:[]},{value:"<code>description</code>",id:"description",children:[]},{value:"<code>version</code>",id:"version",children:[]},{value:"<code>main</code>",id:"main",children:[]},{value:"<code>adalo</code>",id:"adalo",children:[]}]},{value:"Example",id:"example",children:[]}],b={rightToc:l};function c({components:e,...n}){return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Your ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," is the source for information about your library. "),Object(r.b)("h2",{id:"keys"},"Keys"),Object(r.b)("h3",{id:"name"},Object(r.b)("inlineCode",{parentName:"h3"},"name")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("inlineCode",{parentName:"li"},"String")),Object(r.b)("li",{parentName:"ul"},"Format: ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wiktionary.org/wiki/kebab_case"}),"kebab-case"))),Object(r.b)("p",null,"The name of your Adalo Library. This will be used for referencing your library and deploying to our registry."),Object(r.b)("p",null,"When choosing a name for your Library, choose a name that"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"is unique"),Object(r.b)("li",{parentName:"ul"},"is descriptive")),Object(r.b)("p",null,"Additionally, when choosing a name for an unpublished library, also choose a name that"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"is not already owned by someone else"),Object(r.b)("li",{parentName:"ul"},"is not spelled in a smiliar way to another library name"),Object(r.b)("li",{parentName:"ul"},"will not confuse others about authorship")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Once you have published your library you can ",Object(r.b)("strong",{parentName:"p"},"NOT")," change your library name."))),Object(r.b)("h3",{id:"author"},Object(r.b)("inlineCode",{parentName:"h3"},"author")),Object(r.b)("p",null,"The author property is currently used to show who the Library was created by in the Marketplace Library Browser."),Object(r.b)("h3",{id:"description"},Object(r.b)("inlineCode",{parentName:"h3"},"description")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("inlineCode",{parentName:"li"},"String"))),Object(r.b)("p",null,"The description of your Adalo Library. This will be used in the Marketplace Library Browser."),Object(r.b)("h3",{id:"version"},Object(r.b)("inlineCode",{parentName:"h3"},"version")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("inlineCode",{parentName:"li"},"String"))),Object(r.b)("p",null,"The current version of your Adalo Library. We use ",Object(r.b)("inlineCode",{parentName:"p"},"semver")," for versioning at Adalo."),Object(r.b)("p",null,"For any changes to any of your Components ",Object(r.b)("inlineCode",{parentName:"p"},"manifest.json")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Additions require a minor version upgrade: ",Object(r.b)("inlineCode",{parentName:"li"},"1.0.0")," => ",Object(r.b)("inlineCode",{parentName:"li"},"1.1.0")),Object(r.b)("li",{parentName:"ul"},"Removals or Heavy Modifications require a major version upgrade: ",Object(r.b)("inlineCode",{parentName:"li"},"1.0.0")," => ",Object(r.b)("inlineCode",{parentName:"li"},"2.0.0"))),Object(r.b)("h3",{id:"main"},Object(r.b)("inlineCode",{parentName:"h3"},"main")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("inlineCode",{parentName:"li"},"String")),Object(r.b)("li",{parentName:"ul"},"Format: Relative path to image"),Object(r.b)("li",{parentName:"ul"},"Allowed File Extensions: ",Object(r.b)("inlineCode",{parentName:"li"},".js"))),Object(r.b)("p",null,"The main entry point for your Library."),Object(r.b)("h3",{id:"adalo"},Object(r.b)("inlineCode",{parentName:"h3"},"adalo")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("inlineCode",{parentName:"li"},"Object"))),Object(r.b)("p",null,"Information about your Library."),Object(r.b)("h4",{id:"logo"},Object(r.b)("inlineCode",{parentName:"h4"},"logo")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("inlineCode",{parentName:"li"},"String")),Object(r.b)("li",{parentName:"ul"},"Format: Relative path to image"),Object(r.b)("li",{parentName:"ul"},"Allowed File Extensions: ",Object(r.b)("inlineCode",{parentName:"li"},".png")),Object(r.b)("li",{parentName:"ul"},"Dimensions:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"min-height: 90px")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"min-width: 90px"))))),Object(r.b)("p",null,"This image will be used in the Component Marketplace Browser. Logos should be at least ",Object(r.b)("inlineCode",{parentName:"p"},"90px x 90px"),"."),Object(r.b)("h5",{id:"example-logo"},"Example Logo"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/static/img/example-logo.png",alt:"Example logo for Libraries"}))),Object(r.b)("h4",{id:"displayname"},Object(r.b)("inlineCode",{parentName:"h4"},"displayName")),Object(r.b)("p",null,"This will be the name display in the Component Marketplace Browser."),Object(r.b)("h4",{id:"components"},Object(r.b)("inlineCode",{parentName:"h4"},"components")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("inlineCode",{parentName:"li"},"Array"))),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "example-library",\n  "description": "An example library description",\n  "author": "Bob Smith",\n  "version": "1.2.3",\n  "main": "index.js",\n  "adalo": {\n    "displayName": "Example Library",\n    "components": [\n      { name: \'ExampleComponent\', manifest: \'./components/ExampleComponent/manifest.json\' }\n    ],\n    "logo": "./logo.png"\n  }\n}\n')))}c.isMDXComponent=!0}}]);