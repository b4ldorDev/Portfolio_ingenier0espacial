(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[162],{7804:(e,t,s)=>{Promise.resolve().then(s.bind(s,8048))},8048:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x});var a=s(5155),o=s(2979),i=s(4974),l=s(2115),n=s(7401);let r=(0,n.A)("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]),c=(0,n.A)("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]),u=(0,n.A)("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]),m=(0,n.A)("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]),d=(0,n.A)("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]),p=(0,n.A)("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]),h=e=>{let{playlist:t}=e,s=(0,l.useRef)(null),[o,i]=(0,l.useState)(!1),[n,h]=(0,l.useState)(0),[x,g]=(0,l.useState)(null),[y,f]=(0,l.useState)(50),[w,b]=(0,l.useState)(!1),[v,_]=(0,l.useState)(166);(0,l.useEffect)(()=>{let e=()=>{_(window.innerWidth<640?120:166)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let j=(0,l.useCallback)(()=>{n<t.length-1&&(h(e=>e+1),null==x||x.load(t[n+1].url,{auto_play:!0}))},[n,t,x]);return(0,l.useEffect)(()=>{let e=document.createElement("script");return e.src="https://w.soundcloud.com/player/api.js",e.async=!0,document.body.appendChild(e),e.onload=()=>{let e=window.SC;if(e){let t=e.Widget(s.current);g(t),t.bind(e.Widget.Events.READY,()=>{t.setVolume(y)}),t.bind(e.Widget.Events.PLAY,()=>{i(!0)}),t.bind(e.Widget.Events.PAUSE,()=>{i(!1)}),t.bind(e.Widget.Events.FINISH,()=>{j()})}},()=>{document.body.contains(e)&&document.body.removeChild(e)}},[j,y]),(0,a.jsxs)("div",{className:"w-full max-w-2xl mx-auto space-y-4 px-2 sm:px-0",children:[(0,a.jsxs)("div",{className:"bg-modGreen shadow-lg rounded-lg p-2 sm:p-4",children:[(0,a.jsx)("div",{className:"mb-2 md:hidden",children:(0,a.jsx)("h3",{className:"font-semibold text-xs truncate",children:t[n].title})}),(0,a.jsx)("iframe",{ref:s,width:"100%",height:v,scrolling:"no",frameBorder:"no",src:"https://w.soundcloud.com/player/?url=".concat(t[n].url,"&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"),className:"rounded-lg"}),(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-between mt-2 sm:mt-4 space-y-2 sm:space-y-0",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-2 sm:space-x-4",children:[(0,a.jsx)("button",{onClick:()=>{n>0&&(h(e=>e-1),null==x||x.load(t[n-1].url,{auto_play:!0}))},disabled:0===n,className:"p-1 sm:p-2 rounded-full hover:bg-gray-100 disabled:opacity-50",children:(0,a.jsx)(r,{className:"w-4 h-4 sm:w-6 sm:h-6"})}),(0,a.jsx)("button",{onClick:()=>{x&&(o?x.pause():x.play())},className:"p-1 sm:p-2 rounded-full hover:bg-gray-100",children:o?(0,a.jsx)(c,{className:"w-4 h-4 sm:w-6 sm:h-6"}):(0,a.jsx)(u,{className:"w-4 h-4 sm:w-6 sm:h-6"})}),(0,a.jsx)("button",{onClick:j,disabled:n===t.length-1,className:"p-1 sm:p-2 rounded-full hover:bg-gray-100 disabled:opacity-50",children:(0,a.jsx)(m,{className:"w-4 h-4 sm:w-6 sm:h-6"})})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-2 sm:space-x-4",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-1 sm:space-x-2",children:[(0,a.jsx)(d,{className:"w-4 h-4 sm:w-5 sm:h-5"}),(0,a.jsx)("input",{type:"range",min:"0",max:"100",value:y,onChange:e=>{let t=parseInt(e.target.value);f(t),null==x||x.setVolume(t/100)},className:"w-16 sm:w-24"})]}),(0,a.jsx)("button",{onClick:()=>b(!w),className:"sm:hidden p-1 rounded-full hover:bg-gray-100",children:(0,a.jsx)(p,{className:"w-4 h-4 sm:w-6 sm:h-6"})})]})]})]}),(0,a.jsxs)("div",{className:"bg-modGreen shadow-lg rounded-lg p-2 sm:p-4 ".concat(!w&&"hidden sm:block"),children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[(0,a.jsx)("h3",{className:"font-bold text-sm sm:text-base",children:"Lista de reproducci\xf3n"}),(0,a.jsx)("button",{onClick:()=>b(!1),className:"sm:hidden p-1 hover:bg-modGreen2 rounded text-sm",children:"\xd7"})]}),(0,a.jsx)("div",{className:"space-y-1 sm:space-y-2 max-h-48 sm:max-h-60 overflow-y-auto",children:t.map((e,t)=>(0,a.jsxs)("button",{onClick:()=>{h(t),null==x||x.load(e.url,{auto_play:!0}),b(!1)},className:"w-full text-left p-1.5 sm:p-2 rounded hover:bg-modGreen2 text-xs sm:text-sm ".concat(n===t?"bg-modGreen2":""),children:[t+1,". ",e.title]},t))})]})]})};function x(){return(0,a.jsxs)("main",{children:[(0,a.jsx)(i.default,{}),(0,a.jsxs)("div",{className:"flex justify-center items-center h-screen",children:[(0,a.jsx)(o.CoverParticles,{}),(0,a.jsx)("h1",{}),(0,a.jsx)("span",{}),(0,a.jsx)(h,{playlist:[{url:"https://soundcloud.com/manuespacial-419137814/epilogo?in=user-483599245/sets/portafolio-animacion-cortos&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",title:"Ep\xedlogo"},{url:"https://soundcloud.com/user-483599245/corto-jm?in=user-483599245/sets/portafolio-animacion-cortos&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",title:"Corto JM"},{url:"https://soundcloud.com/user-483599245/me-gustas-y-oajala-un-dia?in=user-483599245/sets/portafolio-animacion-cortos&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",title:"Me gustas y Ojal\xe1 un d\xeda"},{url:"https://soundcloud.com/manuespacial-419137814/lejos-muy-lejos?in=user-483599245/sets/portafolio-animacion-cortos&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",title:"Lejos muy lejos "},{url:"https://soundcloud.com/user-483599245/night-waves?in=user-483599245/sets/portafolio-animacion-cortos&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",title:"Night waves"},{url:"https://soundcloud.com/manuespacial-419137814/la-gran-cueva?in=user-483599245/sets/portafolio-animacion-cortos&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",title:"La gran cueva"},{url:"https://soundcloud.com/user-483599245/sonic-track?in=user-483599245/sets/portafolio-animacion-cortos&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",title:"Sonic Track"},{url:"https://soundcloud.com/manuespacial-419137814/momentoalatoreocontigo523leer-descripcion?in=user-483599245/sets/portafolio-animacion-cortos&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",title:"Momento aleatorio Contigo"},{url:"https://soundcloud.com/manuespacial-419137814/quisiera-pasar-un-dia-contigo?in=user-483599245/sets/portafolio-animacion-cortos&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",title:"Quisiera pasar un d\xeda contigo en Italia"},{url:"https://soundcloud.com/user-483599245/persona5-track?in=user-483599245/sets/portafolio-animacion-cortos",title:"Persona 5 Track"},{url:"https://soundcloud.com/user-483599245/aereo-manu?in=user-483599245/sets/portafolio-animacion-cortos&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",title:"Aereo Manu"},{url:"https://soundcloud.com/manuespacial-419137814/empty?in=user-483599245/sets/portafolio-animacion-cortos&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",title:"Empty"}]})]})]})}},2979:(e,t,s)=>{"use strict";s.d(t,{CoverParticles:()=>n});var a=s(5155),o=s(2115),i=s(8975),l=s(6737);let n=()=>{let[e,t]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{(0,i.iC)(async e=>{await (0,l.m)(e)}).then(()=>{t(!0)})},[]),(0,a.jsx)(a.Fragment,{children:e&&(0,a.jsxs)("div",{className:"m-[0px]",children:[(0,a.jsx)(i.Ay,{id:"tsparticles",options:{background:{color:{value:"transparent"}},fpsLimit:120,interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"}},modes:{push:{quantity:4},repulse:{distance:300,duration:.2}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},move:{direction:"none",enable:!0,outModes:{default:"bounce"},random:!1,speed:2,straight:!1},number:{density:{enable:!0},value:80},opacity:{value:.5},shape:{type:"circle"},size:{value:{min:1,max:5}}},detectRetina:!0}})," "]})})}},4974:(e,t,s)=>{"use strict";s.d(t,{default:()=>n});var a=s(5155),o=s(7518),i=s(5683),l=s(9124);let n=()=>(0,a.jsx)(i.N,{mode:"wait",children:(0,a.jsx)(l.P.div,{className:"fixed top-0 bottom-0 right-full w-screen z-30 bg-[#d26019]",variants:o.y,initial:"initial",animate:"animate",exit:"exit",transition:{delay:.2,duration:.6,ease:"easeInOut"}})})},7401:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var a=s(2115);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return t.filter((e,t,s)=>!!e&&""!==e.trim()&&s.indexOf(e)===t).join(" ").trim()};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,a.forwardRef)((e,t)=>{let{color:s="currentColor",size:o=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:c="",children:u,iconNode:m,...d}=e;return(0,a.createElement)("svg",{ref:t,...l,width:o,height:o,stroke:s,strokeWidth:r?24*Number(n)/Number(o):n,className:i("lucide",c),...d},[...m.map(e=>{let[t,s]=e;return(0,a.createElement)(t,s)}),...Array.isArray(u)?u:[u]])}),r=(e,t)=>{let s=(0,a.forwardRef)((s,l)=>{let{className:r,...c}=s;return(0,a.createElement)(n,{ref:l,iconNode:t,className:i("lucide-".concat(o(e)),r),...c})});return s.displayName="".concat(e),s}},7518:(e,t,s)=>{"use strict";s.d(t,{q:()=>o,y:()=>a});let a={initial:{x:"100%",width:"100%"},animate:{x:"0%",width:"0%"},exit:{x:["0%","100%"],width:["0%","100%"]}},o=e=>({visible:{x:"0",y:"0",opacity:1,transition:{type:"tween",duration:1.4,delay:.5,ease:[.25,.25,.25,.75]}},hidden:{x:"right"==e?80:0,y:"bottom"==e?-80:0,opacity:1,transition:{type:"tween",duration:1.4,delay:.5,ease:[.25,.25,.25,.75]}}})}},e=>{var t=t=>e(e.s=t);e.O(0,[124,665,441,517,358],()=>t(7804)),_N_E=e.O()}]);