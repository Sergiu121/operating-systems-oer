"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(a,".").concat(f)]||d[f]||c[f]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={},l="Type of Scheduler in `libult.so`",u={unversionedId:"Lab/Compute/quiz/type-of-scheduler-in-libult",id:"Lab/Compute/quiz/type-of-scheduler-in-libult",title:"Type of Scheduler in `libult.so`",description:"Question Text",source:"@site/docs/Lab/Compute/quiz/type-of-scheduler-in-libult.md",sourceDirName:"Lab/Compute/quiz",slug:"/Lab/Compute/quiz/type-of-scheduler-in-libult",permalink:"/operating-systems-oer/Lab/Compute/quiz/type-of-scheduler-in-libult",draft:!1,tags:[],version:"current",frontMatter:{}},a={},p=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"type-of-scheduler-in-libultso"},"Type of Scheduler in ",(0,i.kt)("inlineCode",{parentName:"h1"},"libult.so")),(0,i.kt)("h2",{id:"question-text"},"Question Text"),(0,i.kt)("p",null,"Inspect the code in ",(0,i.kt)("inlineCode",{parentName:"p"},"support/libult/threads.c")," further.\nWhich type of scheduler does ",(0,i.kt)("inlineCode",{parentName:"p"},"libult.so")," use?"),(0,i.kt)("h2",{id:"question-answers"},"Question Answers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It uses a preemptive scheduler")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It uses a cooperative scheduler"),(0,i.kt)("li",{parentName:"ul"},"It uses both a cooperative and a preemptive scheduler")),(0,i.kt)("h2",{id:"feedback"},"Feedback"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"libult.so")," uses a preemptive scheduler.\nIts timer is initialised in the ",(0,i.kt)("inlineCode",{parentName:"p"},"init_profiling_timer()")," function.\nThe context switch is performed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"handle_sigprof()")," function."))}c.isMDXComponent=!0}}]);