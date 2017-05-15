webpackJsonp([44,141],{5:function(n,a,s){"use strict";s(14),s(13)},13:function(n,a){},14:function(n,a){},15:function(n,a,s){"use strict";s(17)},17:function(n,a){},111:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(8),p=t(e),o=s(7),c=t(o),l=s(2),u=t(l),i=s(4),r=t(i),k=s(3),f=t(k),d=s(1),m=t(d),g=s(6),v=t(g),h=s(22),y=t(h),C=function(n,a){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(s[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,t=Object.getOwnPropertySymbols(n);e<t.length;e++)a.indexOf(t[e])<0&&(s[t[e]]=n[t[e]]);return s},N=function(n){function a(){return(0,u["default"])(this,a),(0,r["default"])(this,n.apply(this,arguments))}return(0,f["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.className,e=a.children,o=a.mode,l=a.iconName,u=a.leftContent,i=a.rightContent,r=a.onLeftClick,k=C(a,["prefixCls","className","children","mode","iconName","leftContent","rightContent","onLeftClick"]),f=(0,v["default"])((n={},(0,c["default"])(n,t,t),(0,c["default"])(n,s,!0),(0,c["default"])(n,s+"-"+o,!0),n));return m["default"].createElement("div",(0,p["default"])({},k,{className:f}),m["default"].createElement("div",{className:s+"-left",role:"button",onClick:r},l&&m["default"].createElement("span",{className:s+"-left-icon","aria-hidden":"true"},m["default"].createElement(y["default"],{type:l})),m["default"].createElement("span",{className:s+"-left-content"},u)),m["default"].createElement("div",{className:s+"-title"},e),m["default"].createElement("div",{className:s+"-right"},i))},a}(m["default"].Component);a["default"]=N,N.defaultProps={prefixCls:"am-navbar",mode:"dark",iconName:"left",onLeftClick:function(){}},n.exports=a["default"]},112:function(n,a,s){"use strict";s(5),s(15),s(133)},133:function(n,a){},539:function(n,a,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u5bfc\u822a\u680f","en-US":"NavBar"},filename:"components/nav-bar/demo/basic.md",id:"components-nav-bar-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> NavBar<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavBar</span> <span class="token attr-name">leftContent</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>back<span class="token punctuation">"</span></span>\n      <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span>\n      <span class="token attr-name">onLeftClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onLeftClick\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">rightContent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n        <span class="token operator">&lt;</span>Icon key<span class="token operator">=</span><span class="token string">"0"</span> type<span class="token operator">=</span><span class="token string">"search"</span> style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token string">\'0.32rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ellipsis<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">}</span>\n    <span class="token operator">></span>NavBar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavBar</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var a=s(1),t=(s(9),s(112),s(111)),e=n(t),p=(s(15),s(22)),o=n(p);return a.createElement("div",null,a.createElement(e["default"],{leftContent:"back",mode:"light",onLeftClick:function(){return console.log("onLeftClick")},rightContent:[a.createElement(o["default"],{key:"0",type:"search",style:{marginRight:"0.32rem"}}),a.createElement(o["default"],{key:"1",type:"ellipsis"})]},"NavBar"))}}},648:function(n,a,s){n.exports={basic:s(539)}}});