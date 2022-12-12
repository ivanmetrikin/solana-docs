"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4726],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var r=n.createContext({}),c=function(t){var e=n.useContext(r),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},d=function(t){var e=c(t.components);return n.createElement(r.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,r=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),h=c(a),u=o,g=h["".concat(r,".").concat(u)]||h[u]||p[u]||i;return a?n.createElement(g,s(s({ref:e},d),{},{components:a})):n.createElement(g,s({ref:e},d))}));function u(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,s=new Array(i);s[0]=h;var l={};for(var r in e)hasOwnProperty.call(e,r)&&(l[r]=e[r]);l.originalType=t,l.mdxType="string"==typeof t?t:o,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4169:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var n=a(7462),o=(a(7294),a(3905));const i=a.p+"assets/images/wallet_list-7f20f73e26c3ff9d9677656dda406c54.png",s=a.p+"assets/images/connect_dialog_2-c30ccf8135fa1f76b273b6953610ab75.png";var l=a(3902);a(1599);a.p;const r={title:"Solflare",description:"Overview of user staking in Lido on Solana with Solflare",keywords:["staking","end-user","lido","solana","solflare"],sidebar_label:"Solflare",sidebar_position:3},c="How to Stake Solana on Lido",d={unversionedId:"staking/solflare",id:"staking/solflare",title:"Solflare",description:"Overview of user staking in Lido on Solana with Solflare",source:"@site/docs/staking/solflare.md",sourceDirName:"staking",slug:"/staking/solflare",permalink:"/staking/solflare",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Solflare",description:"Overview of user staking in Lido on Solana with Solflare",keywords:["staking","end-user","lido","solana","solflare"],sidebar_label:"Solflare",sidebar_position:3},sidebar:"solidoSidebar",previous:{title:"Phantom",permalink:"/staking/phantom"},next:{title:"Ledger",permalink:"/staking/ledger"}},p={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Lido on Solana staking guide",id:"lido-on-solana-staking-guide",level:2},{value:"Step 1: Create or Restore Solflare Wallet",id:"step-1-create-or-restore-solflare-wallet",level:2},{value:"Creating the wallet",id:"creating-the-wallet",level:3},{value:"Restoring the wallet",id:"restoring-the-wallet",level:3},{value:"Logged In",id:"logged-in",level:3},{value:"Step 2: Connect Lido to Solflare",id:"step-2-connect-lido-to-solflare",level:2},{value:"Step 3: Explore the interface",id:"step-3-explore-the-interface",level:2},{value:"Account info",id:"account-info",level:3},{value:"Transaction Parameters",id:"transaction-parameters",level:3},{value:"Lido Statistics",id:"lido-statistics",level:3},{value:"FAQs",id:"faqs",level:3},{value:"Step 4: Stake your SOL",id:"step-4-stake-your-sol",level:2},{value:"Step 5: View the transaction on Blockexplorer",id:"step-5-view-the-transaction-on-blockexplorer",level:2},{value:"Step 6: Unstaking and utlizing stSOL",id:"step-6-unstaking-and-utlizing-stsol",level:2},{value:"Utilizing and exchanging stSOL",id:"utilizing-and-exchanging-stsol",level:3}],u={toc:h};function g(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-stake-solana-on-lido"},"How to Stake Solana on Lido"),(0,o.kt)("p",null,"A quick guide on staking your Solana on the Lido widget"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"\u2018Lido on Solana\u2019 is a Lido-DAO governed liquid staking protocol for the Solana blockchain. Anyone who stakes their SOL tokens with Lido will be issued an on-chain representation of SOL staking position with Lido validators, called stSOL. This will allow Solana token holders to get liquidity on their staked assets which can then be traded, or further utilized as collateral in DeFi products."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Widget",src:a(3043).Z,width:"2698",height:"1428"})),(0,o.kt)("h2",{id:"lido-on-solana-staking-guide"},"Lido on Solana staking guide"),(0,o.kt)("p",null,"In this step-by-step guide, we will learn how to stake your Solana via the Lido staking widget. This guide shows the testnet for demonstration purposes. However, the process remains the same for mainnet. You can use one of the following wallets to connect to Lido. The facility to use the hardware wallet Ledger is also provided. This guarantees an extra layer of security for the user."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Phantom"),(0,o.kt)("li",{parentName:"ol"},"Solflare"),(0,o.kt)("li",{parentName:"ol"},"Ledger"),(0,o.kt)("li",{parentName:"ol"},"Sollet"),(0,o.kt)("li",{parentName:"ol"},"Solong")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"step-1-create-or-restore-solflare-wallet"},"Step 1: Create or Restore Solflare Wallet"),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("a",{parentName:"p",href:"https://solflare.com/"},"https://solflare.com/")," to create/restore your solana wallet."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Solflare",src:a(8981).Z,width:"2698",height:"1238"})),(0,o.kt)("h3",{id:"creating-the-wallet"},"Creating the wallet"),(0,o.kt)("p",null,"If you do not have a wallet you yet, you should"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new wallet,"),(0,o.kt)("li",{parentName:"ol"},"Note down your password, and"),(0,o.kt)("li",{parentName:"ol"},"Download the kyestore file, and\nstore these in a safe place. Follow the onscreen instructions and make sure to fund your wallet with some SOL tokens before interacting with Lido")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create 1",src:a(9797).Z,width:"2190",height:"1178"}),"\n",(0,o.kt)("img",{alt:"Create 2",src:a(3083).Z,width:"2282",height:"1344"}),"\n",(0,o.kt)("img",{alt:"Create 3",src:a(4632).Z,width:"2184",height:"1196"}),"\n",(0,o.kt)("img",{alt:"Create 4",src:a(1812).Z,width:"2354",height:"1248"}),"\n",(0,o.kt)("img",{alt:"Create 5",src:a(2747).Z,width:"2396",height:"1352"})),(0,o.kt)("h3",{id:"restoring-the-wallet"},"Restoring the wallet"),(0,o.kt)("p",null,"If you already have a wallet, you can restore it on solflare using the associated password and keystore file. Follow the online instructions to restore your SOL account."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Restore 1",src:a(7145).Z,width:"2310",height:"1372"}),"\n",(0,o.kt)("img",{alt:"Restore 2",src:a(5262).Z,width:"2328",height:"1332"})),(0,o.kt)("h3",{id:"logged-in"},"Logged In"),(0,o.kt)("p",null,"Once you have funded your Solflare wallet with Solana, you can log in to solflare webapp to see your account details."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Logged In",src:a(9413).Z,width:"2476",height:"1242"})),(0,o.kt)("h2",{id:"step-2-connect-lido-to-solflare"},"Step 2: Connect Lido to Solflare"),(0,o.kt)("p",null,"Once your wallet is setup visit ",(0,o.kt)("a",{parentName:"p",href:"https://solana.lido.fi"},"https://solana.lido.fi")," to stake your SOL tokens. Now connect your Solflare account to the Lido interface."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Connect",src:a(9273).Z,width:"2872",height:"528"})),(0,o.kt)("p",null,"Pressing the connect wallet button, on the top right hand corner of the screen, pops up the wallet screen."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:i,alt:"Wallets",width:"350"})),(0,o.kt)("p",null,"Selecting your wallet and pressing the connect button takes you to another window with the wallet\u2019s browser extension. On this window you will have to ",(0,o.kt)("strong",{parentName:"p"},"approve the connection"),". Make sure to verify the details listed on the approval screen by Solflare."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Approve Connection",src:a(586).Z,width:"2436",height:"1168"})),(0,o.kt)("p",null,"If you have set a password to open the wallet, you might get prompted to unlock your wallet. You will, then, have to allow Lido to connect to your wallet and fetch its balance. Once connected you would be able to see your balance on the Lido widget."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Connected Widget",src:a(6978).Z,width:"2728",height:"968"})),(0,o.kt)("p",null,"Before you interact with the widget further it is important to explore the widget and understand its functionality."),(0,o.kt)("h2",{id:"step-3-explore-the-interface"},"Step 3: Explore the interface"),(0,o.kt)("p",null,"At the top you can see your account\u2019s information\u200a\u2014\u200ayour current stSOL balance and the number of SOL tokens available for staking. For new account holders, the staked amount (stSOL) will be 0 in the beginning. You can also see the returns you will get by staking with Lido under Lido APR. Below that you can enter the number of SOL you want to stake."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Interface",src:a(8574).Z,width:"2042",height:"922"})),(0,o.kt)("h3",{id:"account-info"},"Account info"),(0,o.kt)("p",null,"You can go to the top-right corner of the screen and click on your connected account. This lets you take a look at your address and disconnect at any point during the process.\nThe address for the demo account is"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"GMXFs1SpNhwVW7m9sHTZks5oEEtAVqmySX2zkJ5ffUT"))),(0,o.kt)("p",null,"Its transaction history can be viewed on the blockexplorer ",(0,o.kt)("a",{parentName:"p",href:"https://solana.fm/address/GMXFs1SpNhwVW7m9sHTZks5oEEtAVqmySX2zkJ5ffUT?cluster=testnet-qn1"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Transaction Parameters",src:a(7597).Z,width:"1934",height:"314"})),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:s,alt:"Connect Dialog",width:"350"})),(0,o.kt)("h3",{id:"transaction-parameters"},"Transaction Parameters"),(0,o.kt)("p",null,"When you enter the amount of SOL you want to stake, the values below the submit button change automatically. These values give you specific information about the transaction you are about to perform. It tells you the"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Exchange rate of SOL v/s stSOL at the moment"),(0,o.kt)("li",{parentName:"ul"},"Amount of stSOL you will receive"),(0,o.kt)("li",{parentName:"ul"},"Transaction cost"),(0,o.kt)("li",{parentName:"ul"},"Fee that will be deducted for this transaction")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Transaction Parameters",src:a(8988).Z,width:"2490",height:"1184"})),(0,o.kt)("h3",{id:"lido-statistics"},"Lido Statistics"),(0,o.kt)("p",null,"Just below the transaction parameters you also see global Lido statistics. This gives you a clear idea of how much SOL is being staked worldwide and other information regarding the liquid staking ecosystem."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lido Parameters",src:a(8439).Z,width:"2370",height:"420"})),(0,o.kt)("h3",{id:"faqs"},"FAQs"),(0,o.kt)("p",null,"You can see the FAQ section right below the Lido statistics. It is prudent to familiarize yourself with some of the basic features of liquid staking and the risks involved. The FAQ section also gives more information about the stSOL and its value. In case, you have even more questions you can always reach out to the Lido on Solana team for any clarifications. The contact information is given at the end of this article."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Faqs",src:a(8387).Z,width:"2178",height:"1224"})),(0,o.kt)("h2",{id:"step-4-stake-your-sol"},"Step 4: Stake your SOL"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Stake",src:a(1868).Z,width:"2854",height:"882"})),(0,o.kt)("p",null,"To stake your SOL with lido enter the amount you wanter to stake. Once you submit you might get redirected to your wallet. On the lido widget will see a pop-up showing the state of your transaction. The Lido widget waits for you to approve this transaction through your wallet."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note ",(0,o.kt)("strong",{parentName:"p"},"This transaction will only go through if you go back to your wallet and approve it."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Staking",src:a(5898).Z,width:"2316",height:"1170"})),(0,o.kt)("p",null,"You get additional information about the transaction details while approving the transaction. Go ahead and approve the transaction."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Approve 1",src:a(6226).Z,width:"2536",height:"1316"})),(0,o.kt)("p",null,"After verifying the information you can approve now."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Approve 2",src:a(6794).Z,width:"2504",height:"1202"})),(0,o.kt)("h2",{id:"step-5-view-the-transaction-on-blockexplorer"},"Step 5: View the transaction on Blockexplorer"),(0,o.kt)("p",null,"Once you hit approve on your wallet, you can come back to the lido widget and click on ",(0,o.kt)("strong",{parentName:"p"},"View on Solana Blockexplorer.")),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:l.Z,alt:"View Tx",width:"500"})),(0,o.kt)("p",null,"This is useful as it tells you the ",(0,o.kt)("a",{parentName:"p",href:"https://solana.fm/tx/3sLpWNJrhY7nUWKuLJx6nTGjxaJNUGTYVsFT8Uh9UNa5nQ2rRMZZcnb66ELEMSME5cmUycP4V4CUoBSvhAjLiwdw?cluster=testnet-qn1"},"current status")," of your transaction."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Link for the above transaction - ",(0,o.kt)("a",{parentName:"p",href:"https://solana.fm/tx/3sLpWNJrhY7nUWKuLJx6nTGjxaJNUGTYVsFT8Uh9UNa5nQ2rRMZZcnb66ELEMSME5cmUycP4V4CUoBSvhAjLiwdw?cluster=testnet-qn1"},"https://solana.fm/tx/3sLpWNJrhY7nUWKuLJx6nTGjxaJNUGTYVsFT8Uh9UNa5nQ2rRMZZcnb66ELEMSME5cmUycP4V4CUoBSvhAjLiwdw?cluster=testnet-qn1"))),(0,o.kt)("p",null,"If you look at the Confirmations field you can slowly see it increasing from 0 to 32. Once it reaches the MAX number of confirmations your transaction gets added to the blockchain"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Confirmation 1",src:a(8373).Z,width:"2138",height:"1174"}),"\n",(0,o.kt)("img",{alt:"Confirmation 2",src:a(8522).Z,width:"2068",height:"700"}),"\n",(0,o.kt)("img",{alt:"Confirmation 3",src:a(5307).Z,width:"2070",height:"310"})),(0,o.kt)("p",null,"Finally, after 32 confirmations the transaction gets confirmed. The lido widget will reflect the new balance"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Confirmation 4",src:a(3006).Z,width:"1864",height:"928"})),(0,o.kt)("p",null,"You can now go back to the Lido widget and look at your updated stSOL balance. Just below the stSOL balance, you will also be able to see the amount of SOL you can get back for it a.k.a the exchange rate."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Update",src:a(8122).Z,width:"2318",height:"1158"}),"\n",(0,o.kt)("img",{alt:"Updated",src:a(5618).Z,width:"1922",height:"336"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note 1: We had 2 SOL in the beginning and we staked 1 SOL. We should be left with 1 SOL but we had to pay an additional 0.0021 SOL as the rent for the new stSOL account that got created for us.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note 2: This rent is a one-time fee that won\u2019t reccur on the next staking transaction.")),(0,o.kt)("h2",{id:"step-6-unstaking-and-utlizing-stsol"},"Step 6: Unstaking and utlizing stSOL"),(0,o.kt)("p",null,"To withdraw click on the ",(0,o.kt)("strong",{parentName:"p"},"Unstake")," tab and enter the amount of stSOL that you would like to unstake in the field provided below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"unstake-amount",src:a(4167).Z,width:"2532",height:"1328"})),(0,o.kt)("p",null,"Then click unstake and head over to your wallet to approve the transaction."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to note down the transaction hash or the link provided on the screen. This allows for an easier debugging in case of a failed transaction.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"unstake-transaction",src:a(308).Z,width:"2526",height:"1308"})),(0,o.kt)("p",null,"The Solana blockchain waits for 32 confirmations (called MAX Confirmations) before making a transaction 'final'. Once the transaction gets the ",(0,o.kt)("inlineCode",{parentName:"p"},"MAX Confirmations")," the Lido program splits off a stake account with the redeemed SOL amount and transfers it to you. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to note down the stake account address by clicking on the blockexplorer link provided on the screen.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"unstake-successful",src:a(3130).Z,width:"2572",height:"1262"})),(0,o.kt)("p",null,"After unstaking go back to your wallet and click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Staking")," tab in the solflare wallet."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"stakingtab",src:a(7475).Z,width:"2720",height:"1290"})),(0,o.kt)("p",null,"You will see a number of deactivating stake accounts. ",(0,o.kt)("inlineCode",{parentName:"p"},"Click to expand")," the staking account details."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Note that the option to view deactivating stake accounts is visible only in Phantom and Solflare wallets. On Sollet or Solong you will not be able to see these stake accounts. This is not a cause for concern as you can always migrate from Sollet/Solong to either Phantom or Solflare for free")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"stake-accounts",src:a(7859).Z,width:"2748",height:"1492"})),(0,o.kt)("p",null,"You will then see your deactivating stake account where you can keep a track of your deactivating stake. If you issue the unstake instruction when epoch ",(0,o.kt)("inlineCode",{parentName:"p"},"N")," is going on, the deactivation will start immediately and your stake will completely deactivate at epoch ",(0,o.kt)("inlineCode",{parentName:"p"},"N+1"),"."),(0,o.kt)("p",null,"For example, for the stake account shown in the example above the ",(0,o.kt)("inlineCode",{parentName:"p"},"Unstake")," was done at epoch ",(0,o.kt)("inlineCode",{parentName:"p"},"225"),", the stake started deactivating within the same epoch and the SOL became available for withdrawing at epoch ",(0,o.kt)("inlineCode",{parentName:"p"},"226")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"epochN+2",src:a(4295).Z,width:"1972",height:"462"})),(0,o.kt)("p",null,"After your stake gets completely deactivated, you will see that a ",(0,o.kt)("inlineCode",{parentName:"p"},"Withdraw")," button appears below your stake account. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Withdraw-Button",src:a(3882).Z,width:"2602",height:"878"})),(0,o.kt)("p",null,"You can withdraw your SOL by clicking on ",(0,o.kt)("inlineCode",{parentName:"p"},"Withdraw"),". The SOL tokens should immediately reflect in your account. This complete process from first ",(0,o.kt)("inlineCode",{parentName:"p"},"unstaking")," to finally ",(0,o.kt)("inlineCode",{parentName:"p"},"withdrawing")," your stakes takes between 3-5 days to complete. For users who desire instant liquidity, the preferred option is to exchange stSOL on the open market, e.g. on the supported AMM pools on Saber and Raydium."),(0,o.kt)("h3",{id:"utilizing-and-exchanging-stsol"},"Utilizing and exchanging stSOL"),(0,o.kt)("p",null,"The following AMM pools and markets exist for exchanging stSOL or adding liquidity to pools."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Provider"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Link"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Saber"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Swap stSOL for SOL"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://app.saber.so/#/swap"},"https://app.saber.so/#/swap"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Saber"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Add Liquidity to Pool"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://app.saber.so/#/pools/stsol/deposit"},"https://app.saber.so/#/pools/stsol/deposit"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Saber"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Farming"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://app.saber.so/#/quarries/stsol/stake"},"https://app.saber.so/#/quarries/stsol/stake"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Raydium"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Swap stSOL for USDC"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://raydium.io/swap/?ammId=6a1CsrpeZubDjEJE9s1CMVheB6HWM5d7m1cj2jkhyXhj"},"Raydium Pool"))))))}g.isMDXComponent=!0},1599:(t,e,a)=>{a.p},3902:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/view_tx-dfd323a7dd1a452a2dc4876e8ac1b760.png"},9273:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/connect-3dc119fcf29f83cab7aff88398f35670.png"},4295:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/epochNplus2-ea6a9cac48f1249350d06807421a7be6.png"},8387:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/faqs-671274d0d5fdd0090752e3091275d9bf.png"},8574:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/interface-49238591196cf9e54fd5ad68297ec267.png"},8439:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/lido_params-537175b3683c562d73893a34ab7a7614.png"},1868:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/stake-f2349237ab1661f08b0cb0e988f5e5de.png"},4167:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/unstake-amount-7bb01c1db556314bc6797382c9af577c.png"},3130:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/unstake-successful-a1fd6fb114c97e369a3d224daf523da4.png"},308:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/unstake-transaction-5117356faee669f6fb7de9bfed28de17.png"},3043:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/widget-e2704ae984009eee59cfd911dc01736a.png"},7597:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/account_info-6560940154697e5e541522ecfd09c7e9.png"},6226:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/approve1-103f8101cca410234f7a1be79c90ec5a.png"},6794:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/approve2-f24b22f37d0ddc67ba904f4e696bd98f.png"},586:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/approve_connection-ba0bf7d1c7357ff76990bad3f83c0427.png"},8373:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/confirmations1-da0b647168b33c77c0eb800cbcb187ad.png"},8522:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/confirmations2-aaa332bafb825d35a4792df9835609de.png"},5307:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/confirmations3-dc4d65f450893cf5e1500db518903b63.png"},3006:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/confirmations4-d091d2fe48f993ea41fb1eb3203dc8f1.png"},6978:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/connected_widget-e7370bf4b11d943c0b9d146d1bebc1a7.png"},9797:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/create1-561d49882782263c730af2557570db48.png"},3083:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/create2-85e20162ea6efdc5eebf840119513263.png"},4632:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/create3-2bbfa6790277c7aed47c4c5f025868dc.png"},1812:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/create4-bad783196c0abbafa700bfe05d30dad9.png"},2747:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/create5_alt-e6decb61608f2584be80fa2e0f23b867.png"},9413:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/logged_in-d71d66615ec28ff1aba0b5d422bd3470.png"},7145:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/restore1-4c8c8532f7b45298a5fd9f93f056d4ac.png"},5262:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/restore2-61929f1e4495cdf37922677767a4574d.png"},8981:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/solflaredotcom-22b31576f57d589c5a53ed4bf9545e86.png"},7859:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/stakeaccounts-9824e4d1cf62f0af96de3acb60f1e058.png"},5898:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/staking-53acea6c2bf57e92dc53e0a4bfbf74ac.png"},7475:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/stakingtab-f3165548c20ff712f2056e694474727b.png"},8988:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tx_params-9613ae72e5860b9d4ac94570d20f9eaa.png"},8122:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/update-e463f745c9555950cd1d49f15ed0fad6.png"},5618:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/updated-2c5becf2d6d680d23ee21d8515c8c8e2.png"},3882:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/withdraw-button-f3b916db63980a9ca344b9c9f00d28d6.png"}}]);