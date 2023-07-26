import{h as f,_ as L,p as U}from"./hooks.module.7cc4e70a.js";import{C as M}from"./CheckIcon.ecb36f9c.js";import{o as e}from"./jsxRuntime.module.afbf92fe.js";import{k as _}from"./preact.module.7b19fc78.js";import{B as j}from"./building.0debfcad.js";import{d as T,h as A,a as $}from"./http.82ebf0f1.js";import{S as E}from"./Spinner.95905af5.js";import{p as R}from"./page.c1a8a472.js";import{U as D,S as H}from"./SelectRoadmapModal.62b2331f.js";import{g as q,s as I}from"./browser.bcc09af3.js";import{R as G}from"./RoleDropdown.0bcc7fe3.js";import{u as V}from"./use-toast.fb52de5d.js";import"./jwt.f0e0aa9c.js";import"./index.a98c85f5.js";import"./index.es.ebad3893.js";import"./resource-progress.b09662c1.js";/* empty css                       */import"./use-outside-click.85d1a62f.js";import"./use-keydown.41d75069.js";import"./close.3a539829.js";import"./toast.1fe7142d.js";function Y(i){const{steps:t,activeIndex:r=0,completeSteps:a=[]}=i;return e("ol",{className:"flex w-full items-center text-gray-500",children:t.map((c,m)=>{const h=a.includes(m),g=r===m,l=m===t.length-1;return e(_,{children:[e("li",{className:`flex items-center ${h||g?"text-black":"text-gray-400"}`,children:[h&&e(M,{additionalClasses:"mr-2 top-[0.5px] w-[18px] h-[18px]"}),!h&&e("span",{class:"mr-2 font-semibold",children:m+1}),e("span",{className:"flex flex-grow",children:c.label})]}),!l&&e("li",{className:"mx-5 flex flex-grow rounded-md bg-gray-200",children:e("span",{className:"h-1 w-full"})})]})})})}const F="/_astro/users.1dd5ca56.svg";function P(i){const{isLoading:t=!1,text:r="Next Step",type:a="button",loadingMessage:c="Please wait ..",onClick:m=()=>null,hasNextArrow:h=!0}=i;return e("button",{type:a,onClick:m,disabled:t,className:"rounded-md border border-black bg-black px-4 py-2 text-white disabled:opacity-50",children:t?e("span",{className:"flex items-center justify-center",children:[e(E,{}),e("span",{className:"ml-2",children:c})]}):e(_,{children:[r,h&&e("span",{className:"ml-1",children:"→"})]})})}const O=[{value:"company",label:"Company",icon:j,description:"Track the skills and learning progress of the tech team at your company"},{value:"study_group",label:"Study Group",icon:F,description:"Invite your friends or course-mates and track your learning progress together"}];function W(i){const{team:t,selectedTeamType:r,onStepComplete:a,setSelectedTeamType:c}=i,[m,h]=f(!1),[g,l]=f();async function p(){if(!t){a();return}h(!0),l("");const{response:d,error:y}=await T(`https://api.roadmap.sh/v1-update-team/${t._id}`,{name:t.name,website:t?.links?.website||void 0,type:r,gitHubUrl:t?.links?.github||void 0,...r==="company"&&{teamSize:t.teamSize,linkedInUrl:t?.links?.linkedIn||void 0}});if(y||!d){h(!1),l(y?.message||"Something went wrong");return}h(!1),l(""),a()}return e(_,{children:[e("div",{className:"flex flex-row gap-3",children:O.map(d=>e("button",{className:`flex flex-grow flex-col items-center rounded-lg border px-5 py-12 ${d.value==r?"border-gray-400 bg-gray-100":"border-gray-300 hover:border-gray-400 hover:bg-gray-50"}`,onClick:()=>c(d.value),children:[e("img",{alt:d.label,src:d.icon,className:`mb-3 h-12 w-12 opacity-10 ${d.value===r?"opacity-100":""}`}),e("span",{className:"mb-2 block text-2xl font-bold",children:d.label}),e("span",{className:"text-sm text-gray-500 leading-[21px]",children:d.description})]}))}),g&&e("div",{className:"mt-4 text-sm text-red-500",children:g}),e("div",{className:"mt-4 flex flex-row items-center justify-between gap-2",children:[e("a",{href:"/account",className:"rounded-md border border-red-400 bg-white px-8 py-2 text-red-500",children:"Cancel"}),e(P,{type:"button",onClick:p,isLoading:m,text:"Next Step",loadingMessage:"Updating team .."})]})]})}const J=["1-5","6-10","11-25","26-50","51-100","101-200","201-500","501-1000","1000+"];function K(i){const{team:t,selectedTeamType:r,onBack:a,onStepComplete:c}=i,[m,h]=f(""),g=L(null);U(()=>{g.current&&g.current.focus()},[g]);const[l,p]=f(!1),[d,y]=f(t?.name||""),[w,k]=f(t?.links?.website||""),[u,v]=f(t?.links?.linkedIn||""),[n,o]=f(t?.links?.github||""),[s,b]=f(t?.teamSize||"");return e("form",{onSubmit:async x=>{if(x.preventDefault(),p(!0),!d||!r){p(!1);return}let S,C;if(t?._id){if({response:S,error:C}=await T(`https://api.roadmap.sh/v1-update-team/${t._id}`,{name:d,website:w||void 0,type:r,gitHubUrl:n||void 0,...r==="company"&&{teamSize:s,linkedInUrl:u||void 0}}),C||S?.status!=="ok"){h(C?.message||"Something went wrong. Please try again."),p(!1);return}c({...t,name:d,_id:t._id,links:{website:w||t?.links?.website,linkedIn:u||t?.links?.linkedIn,github:n||t?.links?.github},type:r,teamSize:s})}else{if({response:S,error:C}=await A("https://api.roadmap.sh/v1-create-team",{name:d,website:w||void 0,type:r,gitHubUrl:n||void 0,...r==="company"&&{teamSize:s,linkedInUrl:u||void 0},roadmapIds:[],bestPracticeIds:[]}),C||!S?._id){h(C?.message||"Something went wrong. Please try again."),p(!1);return}c(S)}},children:[e("div",{className:"flex w-full flex-col",children:[e("label",{for:"name",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:r==="company"?"Company Name":"Group Name"}),e("input",{type:"text",name:"name",ref:g,autofocus:!0,id:"name",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"Roadmap Inc.",disabled:l,required:!0,value:d,onInput:x=>y(x.target.value)})]}),r==="company"&&e("div",{className:"mt-4 flex w-full flex-col",children:[e("label",{for:"website",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:"Website"}),e("input",{type:"url",name:"website",required:!0,id:"website",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://roadmap.sh",disabled:l,value:w,onInput:x=>k(x.target.value)})]}),r==="company"&&e("div",{className:"mt-4 flex w-full flex-col",children:[e("label",{for:"website",className:"text-sm leading-none text-slate-500",children:"Company LinkedIn URL"}),e("input",{type:"url",name:"website",id:"website",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://www.linkedin.com/company/roadmapsh",disabled:l,value:u,onInput:x=>v(x.target.value)})]}),e("div",{className:"mt-4 flex w-full flex-col",children:[e("label",{for:"website",className:"text-sm leading-none text-slate-500",children:"GitHub Organization URL"}),e("input",{type:"url",name:"website",id:"website",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://github.com/roadmapsh",disabled:l,value:n,onInput:x=>o(x.target.value)})]}),r==="company"&&e("div",{className:"mt-4 flex w-full flex-col",children:[e("label",{for:"team-size",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:"Tech Team Size"}),e("select",{name:"team-size",id:"team-size",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:r==="company",disabled:l,value:s,onChange:x=>b(x.target.value),children:[e("option",{value:"",selected:!0,children:"Select team size"}),J.map(x=>e("option",{value:x,children:[x," people"]}))]})]}),m&&e("div",{className:"mt-4 flex w-full flex-col",children:e("span",{className:"text-sm text-red-500",children:m})}),e("div",{className:"mt-4 flex flex-row items-center justify-between gap-2",children:[e("button",{type:"button",onClick:a,className:"rounded-md border border-red-400 bg-white px-4 py-2 text-red-500",children:[e("span",{className:"mr-1",children:"←"}),"Previous Step"]}),e(P,{isLoading:l,text:"Next Step",type:"submit",loadingMessage:"Creating team .."})]})]})}const Q="/_astro/chevron-down.d226c7e9.svg";function X(i){const{onClick:t,selectedCount:r,singularName:a,pluralName:c}=i,m=r===1?a:c;return e("div",{className:"flex cursor-text items-center justify-between rounded-md border border-gray-300 px-3 py-2.5 hover:border-gray-400/50 hover:bg-gray-50",role:"button",onClick:t,children:[r>0&&e("div",{className:"flex flex-col",children:[e("p",{className:"mb-1.5 text-base font-medium text-gray-800",children:[r," ",m," selected"]}),e("p",{className:"text-sm text-gray-400",children:"Click to add or change selection"})]}),r===0&&e("div",{className:"flex flex-col",children:e("p",{className:"text-base text-gray-400",children:["Click to select ",c]})}),e("img",{alt:a,src:Q,className:"relative top-[1px] h-[17px] w-[17px] opacity-40"})]})}function Z(i){const{teamId:t,teamResourceConfig:r=[],setTeamResourceConfig:a}=i,[c,m]=f(!1),[h,g]=f([]),[l,p]=f(""),[d,y]=f("");async function w(){const{error:n,response:o}=await $("/pages.json");if(n){y(n.message||"Something went wrong. Please try again!");return}if(!o)return[];const s=o.filter(b=>b.group==="Roadmaps").sort((b,N)=>b.title==="Android"?1:b.title.localeCompare(N.title));return g(s),o}async function k(n){if(!t)return;R.set("Deleting resource");const{error:o,response:s}=await T(`https://api.roadmap.sh/v1-delete-team-resource-config/${t}`,{resourceId:n,resourceType:"roadmap"});if(o||!s){y(o?.message||"Error deleting roadmap");return}a(s)}async function u(n){R.set("Removing roadmap"),k(n).finally(()=>{R.set("")})}async function v(n){if(!t)return;R.set("Adding roadmap to team");const{error:o,response:s}=await T(`https://api.roadmap.sh/v1-update-team-resource-config/${t}`,{teamId:t,resourceId:n,resourceType:"roadmap",removed:[]});if(o||!s){y(o?.message||"Error adding roadmap");return}a(s)}return U(()=>{w().finally()},[]),e("div",{children:[l&&e(D,{onClose:()=>p(""),resourceId:l,resourceType:"roadmap",teamId:t,setTeamResourceConfig:a,defaultRemovedItems:r.find(n=>n.resourceId===l)?.removed||[]}),c&&e(H,{onClose:()=>m(!1),teamResourceConfig:r,allRoadmaps:h,teamId:t,onRoadmapAdd:n=>{v(n).finally(()=>{R.set("")})},onRoadmapRemove:n=>{u(n).finally(()=>{})}}),e("div",{className:"mt-3",children:e(X,{onClick:()=>{m(!0)},selectedCount:r.length,singularName:"roadmap",pluralName:"roadmaps"})}),!r.length&&e("p",{className:"mb-3 mt-2 text-base text-gray-400",children:"No roadmaps selected."}),r.length>0&&e("div",{className:"mt-4 grid grid-cols-3 flex-wrap gap-2.5",children:r.map(({resourceId:n,removed:o})=>{const s=h.find(b=>b.id===n)?.title||"...";return e("div",{className:"flex flex-col items-start rounded-md border border-gray-300",children:[e("div",{className:"w-full px-3 pb-2 pt-4",children:[e("span",{className:"mb-0.5 block text-base font-medium leading-none text-black",children:s}),o.length>0?e("span",{className:"text-xs leading-none text-gray-900",children:[o.length," topic",o.length>1?"s":""," removed"]}):e("span",{className:"text-xs italic leading-none text-gray-400/60",children:"No changes made .."})]}),e("div",{className:"flex w-full justify-between p-3",children:[e("button",{type:"button",className:"text-xs text-gray-500 underline hover:text-black focus:outline-none",onClick:()=>p(n),children:"Customize"}),e("button",{type:"button",className:"text-xs text-red-500 underline hover:text-black",onClick:()=>u(n),children:"Remove"})]})]})})})]})}function ee(i){const{team:t,onBack:r,onNext:a,teamResourceConfig:c,setTeamResourceConfig:m}=i;return e(_,{children:[e("div",{className:"mt-4 flex w-full flex-col",children:[e("div",{className:"mb-1 mt-2",children:[e("h2",{className:"mb-1.5 text-2xl font-bold",children:"Select Roadmaps"}),e("p",{className:"text-sm text-gray-700",children:"You can always add and customize your roadmaps later."})]}),e(Z,{teamId:t._id,teamResourceConfig:c,setTeamResourceConfig:m})]}),e("div",{className:"mt-4 flex flex-row items-center justify-between gap-2",children:[e("button",{type:"button",onClick:r,className:"rounded-md border border-red-400 bg-white px-4 py-2 text-red-500",children:[e("span",{className:"mr-1",children:"←"}),"Previous Step"]}),e("button",{type:"submit",disabled:c.length===0,onClick:a,className:"rounded-md border bg-black px-4 py-2 text-white disabled:opacity-50",children:["Next Step",e("span",{className:"ml-1",children:"→"})]})]})]})}function te(i){const{className:t=""}=i;return e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:t,children:[e("path",{d:"M3 6h18"}),e("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),e("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),e("line",{x1:"10",x2:"10",y1:"11",y2:"17"}),e("line",{x1:"14",x2:"14",y1:"11",y2:"17"})]})}function z(){return`${new Date().getTime()}`}function re(i){const{onNext:t,onBack:r,team:a}=i,[c,m]=f(""),[h,g]=f(!1),l=L(null),[p,d]=f([{id:z(),email:"",role:"member"}]);async function y(){g(!0);const{error:u,response:v}=await A(`https://api.roadmap.sh/v1-invite-team/${a?._id}`,{members:p});if(u||!v){m(u?.message||"Something went wrong"),g(!1);return}t()}function w(){l.current&&l.current.focus()}function k(u){u.preventDefault(),y().finally(()=>null)}return U(()=>{w()},[p.length]),e("form",{className:"mt-4 flex w-full flex-col",onSubmit:k,children:[e("div",{class:"mb-1 mt-2",children:[e("h2",{class:"mb-2 text-2xl font-bold",children:"Invite your Team"}),e("p",{class:"text-sm text-gray-700",children:"Use the form below to invite your team members to your team. You can also invite them later."})]}),e("div",{className:"mt-4 flex flex-col gap-1",children:p.map((u,v)=>e("div",{className:"flex flex-row gap-2",children:[e("input",{ref:v===p.length-1?l:null,autofocus:!0,type:"email",name:"email",required:!0,id:"email",placeholder:"Email",value:u.email,onChange:n=>{const o=p.map(s=>s.id===u.id?{...s,email:n.target?.value}:s);d(o)},className:"flex-grow rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-900"}),e(G,{selectedRole:u.role,setSelectedRole:n=>{const o=p.map(s=>s.id===u.id?{...s,role:n}:s);d(o)}}),e("button",{disabled:p.length<=1,type:"button",className:"rounded-md border border-red-200 bg-white px-4 py-2 text-red-500 hover:bg-red-100 disabled:opacity-30",onClick:()=>{d(p.filter(n=>n.id!==u.id))},children:e(te,{className:"h-5 w-5"})})]},u.id))}),p.length<=30&&e("button",{onClick:()=>{d([...p,{id:z(),email:"",role:"member"}])},type:"button",className:"mt-2 rounded-md border border-dashed border-gray-400 py-2 text-sm text-gray-500 hover:border-gray-500 hover:text-gray-800",children:"+ Add another"}),c&&e("div",{className:"mt-2 text-sm font-medium text-red-500",role:"alert",children:c}),e("div",{className:"mt-4 flex flex-row items-center justify-between gap-2",children:[e("button",{type:"button",onClick:r,className:"rounded-md border border-red-400 bg-white px-4 py-2 text-red-500",children:[e("span",{className:"mr-1",children:"←"}),"Previous Step"]}),e("div",{className:"flex gap-2",children:[e("button",{type:"button",onClick:t,className:"rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-500 hover:border-gray-400 hover:text-black",children:"Skip for Now"}),e(P,{type:"submit",isLoading:h,text:"Send Invites",loadingMessage:"Updating team ..",hasNextArrow:!1})]})]})]})}function ae({team:i}){return e("div",{className:"mt-4 flex flex-col rounded-xl border py-12 text-center",children:e("div",{class:"mb-1 flex flex-col items-center",children:[e(M,{additionalClasses:"h-14 w-14 mb-4 opacity-100"}),e("h2",{class:"mb-2 text-2xl font-bold",children:"Team Created"}),e("p",{class:"text-sm text-gray-700",children:"Your team has been created. Happy learning!"}),e("a",{href:`/team/progress?t=${i._id}`,class:"mt-4 rounded-md bg-black px-5 py-1.5 text-sm text-white",children:"View Team"})]})})}function Ie(){const{s:i,t}=q(),r=V(),[a,c]=f(),[m,h]=f(!!t&&!a?._id),[g,l]=f(0);async function p(s,b){const{response:N,error:x}=await $(`https://api.roadmap.sh/v1-get-team/${s}`);if(x||!N){r.error(x?.message||"Error loading team"),window.location.href="/account";return}const S=parseInt(b,10),C=Array(S).fill(1).map((ne,B)=>B);c(N),u(N.type),n(C),l(S),await w(s)}const[d,y]=f([]);async function w(s){const{error:b,response:N}=await $(`https://api.roadmap.sh/v1-get-team-resource-config/${s}`);if(b||!Array.isArray(N)){console.error(b);return}y(N)}U(()=>{!t||!i||a||(R.set("Fetching team"),h(!0),p(t,i).finally(()=>{h(!1),R.set("")}))},[t,i]);const[k,u]=f(a?.type||"company"),[v,n]=f([0]);if(m)return null;let o=null;return g===0?o=e(W,{team:a,selectedTeamType:k,setSelectedTeamType:u,onStepComplete:()=>{a?._id&&I({t:a._id,s:"1"}),n([0]),l(1)}}):g===1?o=e(K,{team:a,onBack:()=>{a?._id&&I({t:a._id,s:"0"}),l(0)},onStepComplete:s=>{const b=s._id;I({t:b,s:"2"}),n([0,1]),l(2),c(s)},selectedTeamType:k}):g===2?o=e(ee,{team:a,teamResourceConfig:d,setTeamResourceConfig:y,onBack:()=>{a&&I({t:a._id,s:"1"}),l(1)},onNext:()=>{I({t,s:"3"}),n([0,1,2]),l(3)}}):g===3?o=e(re,{team:a,onBack:()=>{a&&I({t:a._id,s:"2"}),l(2)},onNext:()=>{a&&I({t:a._id,s:"4"}),n([0,1,2,3]),l(4)}}):g===4&&(o=e(ae,{team:a})),e("div",{className:"mx-auto max-w-[700px] py-6",children:[e("div",{className:"mb-8 flex flex-col items-center",children:[e("h1",{className:"text-4xl font-bold",children:"Create Team"}),e("p",{className:"mt-2 text-gray-500",children:"Complete the steps below to create your team"})]}),e("div",{className:"mb-8 mt-8 flex w-full",children:e(Y,{activeIndex:g,completeSteps:v,steps:[{label:"Type"},{label:"Details"},{label:"Skills"},{label:"Members"}]})}),o]})}export{Ie as CreateTeamForm};
