import{h as i,p as m}from"./hooks.module.7cc4e70a.js";import{a as c}from"./http.82ebf0f1.js";import{u as d}from"./use-auth.13ac07ad.js";import{p}from"./page.c1a8a472.js";import{u}from"./use-toast.fb52de5d.js";import{o as e}from"./jsxRuntime.module.afbf92fe.js";import"./preact.module.7b19fc78.js";import"./jwt.f0e0aa9c.js";import"./index.a98c85f5.js";import"./toast.1fe7142d.js";function $(){const[s,n]=i([]),r=d(),l=u();async function o(){const{response:a,error:t}=await c("https://api.roadmap.sh/v1-get-user-teams");if(t||!a){l.error(t?.message||"Something went wrong");return}n(a)}return m(()=>{o().finally(()=>{p.set("")})},[]),e("div",{className:"relative max-w-[500px] mx-auto",children:e("div",{className:"w-full px-2 py-2",children:[e("div",{className:"mb-8 hidden md:block",children:[e("h2",{className:"text-3xl font-bold sm:text-4xl",children:"Teams"}),e("p",{className:"mt-2 text-gray-400",children:"Here are the teams you are part of"})]}),e("ul",{class:"mb-3 flex flex-col gap-1",children:[e("li",{children:e("a",{className:"flex w-full cursor-pointer items-center justify-between gap-2 truncate rounded border p-2 text-sm font-medium hover:border-gray-300 hover:bg-gray-50",href:"/account",children:[e("span",{className:"flex flex-grow items-center gap-2",children:[e("img",{src:r?.avatar?`https://dodrc8eu8m09s.cloudfront.net/avatars/${r?.avatar}`:"/images/default-avatar.png",alt:r?.name||"",className:"h-6 w-6 rounded-full"}),e("span",{className:"truncate",children:"Personal Account"})]}),e("span",{children:"→"})]})}),s.map(a=>e("li",{children:e("a",{className:"flex w-full cursor-pointer items-center justify-between gap-2 rounded border p-2 text-sm font-medium hover:border-gray-300 hover:bg-gray-50",href:`/team/progress?t=${a._id}`,children:[e("span",{className:"flex flex-grow items-center gap-2",children:[e("img",{src:a.avatar?`https://dodrc8eu8m09s.cloudfront.net/avatars/${a.avatar}`:"/images/default-avatar.png",alt:a.name||"",className:"h-6 w-6 rounded-full"}),e("span",{className:"truncate",children:a.name})]}),e("span",{children:"→"})]})}))]}),e("a",{className:"inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400",href:"/team/new",children:[e("span",{class:"mr-2",children:"+"}),e("span",{children:"New Team"})]})]})})}export{$ as TeamsList};
