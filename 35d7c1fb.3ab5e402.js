(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{105:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(2),a=t(6),o=(t(0),t(123)),c={id:"example-custom-webpack",title:"Custom Webpack Config"},i={id:"marketplace/examples/example-custom-webpack",isDocsHomePage:!1,title:"Custom Webpack Config",description:"If you choose to specify your own webpack config file, you are welcome to use this file as a starting point.",source:"@site/docs/marketplace/examples/example-custom-webpack.md",permalink:"/marketplace/examples/example-custom-webpack",sidebar:"docs",previous:{title:"Slider",permalink:"/marketplace/examples/example-slider"},next:{title:"@adalo/cli",permalink:"/marketplace/adalo-cli"}},s=[],p={rightToc:s};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you choose to specify your own webpack config file, you are welcome to use this file as a starting point."),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Make sure to make your config the only export of the webpack config file."))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const webpack = require('webpack')\nconst defaultConfig = {\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        use: {\n          loader: 'babel-loader',\n          options: {\n            presets: ['@babel/preset-react', '@babel/preset-env'],\n            plugins: ['@babel/plugin-proposal-class-properties'],\n          },\n        },\n      },\n      {\n        test: /\\.css$/,\n        use: ['style-loader', 'css-loader'],\n      },\n      {\n        test: [/\\.bmp$/, /\\.gif$/, /\\.jpe?g$/, /\\.png$/, /\\.ttf$/, /\\.otf$/],\n        loader: require.resolve('url-loader'),\n        options: {\n          // limit: 10000,\n          name: 'static/media/[name].[hash:8].[ext]',\n        },\n      },\n    ],\n  },\n  externals: {\n    react: 'React',\n    'react-native': 'ReactNative',\n  },\n  resolve: {\n    modules: ['node_modules'],\n    extensions: [\n      '.web.js',\n      '.js',\n      '.json',\n      '.web.jsx',\n      '.jsx',\n      '.web.react.js',\n      '.react.js',\n    ],\n  },\n  plugins: [\n    new webpack.optimize.LimitChunkCountPlugin({\n      maxChunks: 1,\n    }),\n  ],\n}\n\nmodule.exports = defaultConfig,\n")))}l.isMDXComponent=!0},123:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),b=r,f=u["".concat(c,".").concat(b)]||u[b]||m[b]||o;return t?a.a.createElement(f,i(i({ref:n},p),{},{components:t})):a.a.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);