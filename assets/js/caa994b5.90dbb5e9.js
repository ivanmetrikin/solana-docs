"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||l;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={title:"with self-hosted widget"},i="Manual withdraw with self-hosted widget",o={unversionedId:"manual-withdrawal/self-hosted-widget",id:"manual-withdrawal/self-hosted-widget",title:"with self-hosted widget",description:"1. Local build",source:"@site/docs/manual-withdrawal/self-hosted-widget.md",sourceDirName:"manual-withdrawal",slug:"/manual-withdrawal/self-hosted-widget",permalink:"/manual-withdrawal/self-hosted-widget",draft:!1,tags:[],version:"current",frontMatter:{title:"with self-hosted widget"},sidebar:"solidoSidebar",previous:{title:"with CLI",permalink:"/manual-withdrawal/cli"},next:{title:"Staking",permalink:"/staking/overview"}},s={},p=[{value:"1. Local build",id:"1-local-build",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Development",id:"development",level:3},{value:"2. Hosted version",id:"2-hosted-version",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"manual-withdraw-with-self-hosted-widget"},"Manual withdraw with self-hosted widget"),(0,a.kt)("h2",{id:"1-local-build"},"1. Local build"),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Node.js v18+"),(0,a.kt)("li",{parentName:"ul"},"Yarn package manager")),(0,a.kt)("p",null,"This project requires an ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file which is distributed via private communication channels.\nA sample can be found in ",(0,a.kt)("inlineCode",{parentName:"p"},"sample.env")),(0,a.kt)("h3",{id:"development"},"Development"),(0,a.kt)("p",null,"Step 1. Clone github repository ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/stsol-unstake-widget"},"stsol-unstake-widget")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/lidofinance/stsol-unstake-widget.git\n")),(0,a.kt)("p",null,"Step 2. Copy the contents of ",(0,a.kt)("inlineCode",{parentName:"p"},"sample.env")," to ",(0,a.kt)("inlineCode",{parentName:"p"},".env.local")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cp sample.env .env.local\n")),(0,a.kt)("p",null,"Optinal: provide your-own private solana RPC endpoint"),(0,a.kt)("p",null,"For the best experience, set your own RPC endpoint (",(0,a.kt)("inlineCode",{parentName:"p"},"VITE_SOLANA_RPC_ENDPOINT"),")"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://solana.com/rpc"},"List")," of free services to get solana RPC endpoint"),(0,a.kt)("p",null,"Step 3. Install dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install\n")),(0,a.kt)("p",null,"Step 4. Start the development server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn dev\n")),(0,a.kt)("p",null,"Step 5. Open ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:5173"},"http://localhost:5173")," with your browser to see the result."),(0,a.kt)("p",null,"Step 6. Optional. Now you can build and ",(0,a.kt)("a",{parentName:"p",href:"https://vitejs.dev/guide/static-deploy"},"deploy")," your own version of widget."),(0,a.kt)("h2",{id:"2-hosted-version"},"2. Hosted version"),(0,a.kt)("p",null,"You can use hosted version of this widget on ",(0,a.kt)("a",{parentName:"p",href:"https://lidofinance.github.io/stsol-unstake-widget"},"https://lidofinance.github.io/stsol-unstake-widget")),(0,a.kt)("p",null,"This version of widget rate-limited RPC endpoint - so it may be very slow"))}u.isMDXComponent=!0}}]);