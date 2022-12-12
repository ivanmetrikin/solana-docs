"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1372],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(o),h=n,v=u["".concat(l,".").concat(h)]||u[h]||p[h]||a;return o?r.createElement(v,i(i({ref:t},c),{},{components:o})):r.createElement(v,i({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<a;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},6777:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=o(7462),n=(o(7294),o(3905));const a={id:"overview",title:"Overview",description:"Overview of Lido on Solana",keywords:["lido","solido","solana"],slug:"/",sidebar_position:1},i="Overview",s={unversionedId:"overview",id:"overview",title:"Overview",description:"Overview of Lido on Solana",source:"@site/docs/overview.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",description:"Overview of Lido on Solana",keywords:["lido","solido","solana"],slug:"/",sidebar_position:1},sidebar:"solidoSidebar",next:{title:"Staking",permalink:"/staking/overview"}},l={},d=[{value:"Lido on Solana",id:"lido-on-solana",level:2},{value:"How Lido on Solana works",id:"how-lido-on-solana-works",level:2}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("h2",{id:"lido-on-solana"},"Lido on Solana"),(0,n.kt)("p",null,"'Lido on Solana' is a Lido-DAO governed liquid staking protocol for the Solana blockchain. Anyone who stakes their SOL tokens with Lido will be issued an on-chain representation of SOL staking position with Lido validators, called ",(0,n.kt)("strong",{parentName:"p"},"stSOL"),". We will work to integrate stSOL widely into the Solana DeFi ecosystem to enable stSOL users to make use of their staked assets in a variety of applications."),(0,n.kt)("p",null,"Lido on Solana gives you:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Liquidity")," \u2014 No delegation/activation delays and the ability to sell your staked tokens"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"One-click staking")," \u2014 No complicated steps"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Decentralized security")," \u2014 Assets spread across the industry\u2019s leading validators chosen by the Lido DAO")),(0,n.kt)("h2",{id:"how-lido-on-solana-works"},"How Lido on Solana works"),(0,n.kt)("p",null,"Lido on Solana not only makes it very easy to stake but also provides further utility through stSOL. Let\u2019s look at the process in slight detail. A SOL token holder connects their wallet to the Lido interface (hosted at ",(0,n.kt)("a",{parentName:"p",href:"https://solana.lido.fi"},"https://solana.lido.fi"),") and deposits their tokens into the Lido program. They immediately receive stSOL tokens that represent a share of the total pool. Every user\u2019s tokens are first held in a pool controlled by the Lido program."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"How Lido on Solana works",src:o(8131).Z,width:"800",height:"350"})),(0,n.kt)("p",null,"The Lido program collects the deposited SOL and releases the newly minted stSOL to the user. Beneath the layer, the Lido Program will  distribute this SOL uniformly across those validators that are participating. When these delegations accrue rewards on the allotted stake, the total SOL under management increases and this increases the value of stSOL tokens. The Lido DAO governs the Lido Program \u2014 and also controls the list of validators that are part of this program."))}p.isMDXComponent=!0},8131:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/howlidoforsolanaworks-3e90edeff84e97f67855c90b192e43ec.png"}}]);