"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[330],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={},o="ULT Thread IDs",s={unversionedId:"Lab/Compute/quiz/ult-thread-ids",id:"Lab/Compute/quiz/ult-thread-ids",title:"ULT Thread IDs",description:"Question Text",source:"@site/docs/Lab/Compute/quiz/ult-thread-ids.md",sourceDirName:"Lab/Compute/quiz",slug:"/Lab/Compute/quiz/ult-thread-ids",permalink:"/operating-systems-oer/Lab/Compute/quiz/ult-thread-ids",draft:!1,tags:[],version:"current",frontMatter:{}},l={},u=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ult-thread-ids"},"ULT Thread IDs"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"Why do the thread id's returned by ",(0,a.kt)("inlineCode",{parentName:"p"},"threads_create()")," start from 2 and not 1 or 0?\nWhy is this necessary."),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Because ID 0 is associated with the main thread.\nThis is an implementation detail and can be omitted.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Because ID 0 belongs to the main thread.\nThis is needed in order to associate a ",(0,a.kt)("inlineCode",{parentName:"li"},"ucontext_t")," with the main thread as well, so the main thread can also be run.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Because the underlying kernel thread is assigned ID 1.\nThis is mandatory in order for the OS's scheduler to run this thread."),(0,a.kt)("li",{parentName:"ul"},"Because ",(0,a.kt)("inlineCode",{parentName:"li"},"libult.so")," first creates a pool of threads from which it ",(0,a.kt)("inlineCode",{parentName:"li"},"threads_create()")," retrieves the threads it returns.")),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"threads_create()")," function calls ",(0,a.kt)("inlineCode",{parentName:"p"},"init_first_context()"),", which, in turn, calls ",(0,a.kt)("inlineCode",{parentName:"p"},"tcb_new()"),", thus creating the first context associated with the main thread (the one calling ",(0,a.kt)("inlineCode",{parentName:"p"},"threads_create()")," the first time).\nWithout this, the scheduler in ",(0,a.kt)("inlineCode",{parentName:"p"},"libult.so")," wouldn't be able to run the main thread."))}d.isMDXComponent=!0}}]);