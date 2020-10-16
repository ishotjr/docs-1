(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var a=t(2),o=t(6),r=(t(0),t(93)),c={id:"webpack",title:"Webpack"},i={unversionedId:"docs/workflow/webpack",id:"docs/workflow/webpack",isDocsHomePage:!1,title:"Webpack",description:"This section is completely optional, and is not necessary in most use cases.",source:"@site/docs/docs/workflow/webpack.md",permalink:"/docs/workflow/webpack",lastUpdatedAt:1602871523,sidebar:"docs",previous:{title:"Testing",permalink:"/docs/workflow/testing"},next:{title:"Install Scripts",permalink:"/docs/workflow/install-scripts"}},s=[{value:"Background",id:"background",children:[]},{value:"Add your own custom Webpack Configuration",id:"add-your-own-custom-webpack-configuration",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This section is completely optional, and is not necessary in most use cases."))),Object(r.b)("h3",{id:"background"},"Background"),Object(r.b)("p",null,"Webpack is the bundler Adalo uses, and we supply a default config for every component library. In ",Object(r.b)("strong",{parentName:"p"},"most")," cases, the default config will be all you need. There are some cases though where you may want to use your own webpack configuration."),Object(r.b)("h3",{id:"add-your-own-custom-webpack-configuration"},"Add your own custom Webpack Configuration"),Object(r.b)("p",null,"In order to do this, create a webpack config file within your library's directory. Next, edit the ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," and add under the ",Object(r.b)("inlineCode",{parentName:"p"},"adalo")," property:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  "adalo": {\n    "displayName": "Example Library",\n    "components": [\n      {\n        "name": "ExampleComponent",\n        "manifest": "./components/ExampleComponent/manifest.json"\n      }\n    ],\n    "logo": "./logo.png",\n    "webpackConfig": "./relative/path/to/config"\n  }\n}\n')),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Make sure to make your config the only export of the webpack config file."))),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("p",null,"If you choose to specify your own webpack config file, you are welcome to use this file as a starting point."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const webpack = require('webpack')\nconst defaultConfig = {\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        use: {\n          loader: 'babel-loader',\n          options: {\n            presets: ['@babel/preset-react', '@babel/preset-env'],\n            plugins: ['@babel/plugin-proposal-class-properties'],\n          },\n        },\n      },\n      {\n        test: /\\.css$/,\n        use: ['style-loader', 'css-loader'],\n      },\n      {\n        test: [/\\.bmp$/, /\\.gif$/, /\\.jpe?g$/, /\\.png$/, /\\.ttf$/, /\\.otf$/],\n        loader: require.resolve('url-loader'),\n        options: {\n          // limit: 10000,\n          name: 'static/media/[name].[hash:8].[ext]',\n        },\n      },\n    ],\n  },\n  externals: {\n    react: 'React',\n    'react-native': 'ReactNative',\n  },\n  resolve: {\n    modules: ['node_modules'],\n    extensions: [\n      '.web.js',\n      '.js',\n      '.json',\n      '.web.jsx',\n      '.jsx',\n      '.web.react.js',\n      '.react.js',\n    ],\n  },\n  plugins: [\n    new webpack.optimize.LimitChunkCountPlugin({\n      maxChunks: 1,\n    }),\n  ],\n}\n\nmodule.exports = defaultConfig,\n")))}l.isMDXComponent=!0},93:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(t),u=a,m=b["".concat(c,".").concat(u)]||b[u]||d[u]||r;return t?o.a.createElement(m,i(i({ref:n},p),{},{components:t})):o.a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<r;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);