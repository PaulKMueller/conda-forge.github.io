"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[1777],{70407:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var s=i(85893),t=i(11151);const l={title:"2019-10-02"},r="2019-10-02 conda-forge core meeting",o={id:"minutes/2019-10-02",title:"2019-10-02",description:"Attendees",source:"@site/community/minutes/2019-10-02.md",sourceDirName:"minutes",slug:"/minutes/2019-10-02",permalink:"/community/minutes/2019-10-02",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/community/minutes/2019-10-02.md",tags:[],version:"current",lastUpdatedAt:1710151931,formattedLastUpdatedAt:"Mar 11, 2024",frontMatter:{title:"2019-10-02"},sidebar:"community",previous:{title:"2019-10-16",permalink:"/community/minutes/2019-10-16"},next:{title:"2019-09-18",permalink:"/community/minutes/2019-09-18"}},a={},d=[{value:"Attendees",id:"attendees",level:2},{value:"Agenda",id:"agenda",level:2},{value:"Subteam updates",id:"subteam-updates",level:3},{value:"Bot",id:"bot",level:4},{value:"ARM",id:"arm",level:4},{value:"Docs",id:"docs",level:4},{value:"staged-recipes",id:"staged-recipes",level:4},{value:"website",id:"website",level:4},{value:"CI infrastructure",id:"ci-infrastructure",level:3},{value:"Compiler upgrade",id:"compiler-upgrade",level:4},{value:"CFEP updates",id:"cfep-updates",level:3},{value:"cfep-03",id:"cfep-03",level:4},{value:"cfep-04",id:"cfep-04",level:4},{value:"cfep-05",id:"cfep-05",level:4},{value:"cfep-06",id:"cfep-06",level:4},{value:"cfep-08",id:"cfep-08",level:4},{value:"cfep-10",id:"cfep-10",level:4},{value:"Your agenda items",id:"your-agenda-items",level:3},{value:"Discussion",id:"discussion",level:2},{value:"jeremy howard&#39;s criticisms and discussion",id:"jeremy-howards-criticisms-and-discussion",level:3},{value:"Check in on previous action items",id:"check-in-on-previous-action-items",level:2},{value:"Last meeting",id:"last-meeting",level:3},{value:"2 meetings ago",id:"2-meetings-ago",level:3},{value:"3 meetings ago",id:"3-meetings-ago",level:3},{value:"New Action items",id:"new-action-items",level:2}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",input:"input",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"2019-10-02-conda-forge-core-meeting",children:"2019-10-02 conda-forge core meeting"}),"\n",(0,s.jsx)(n.h2,{id:"attendees",children:"Attendees"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Eric"}),"\n",(0,s.jsx)(n.li,{children:"John K."}),"\n",(0,s.jsx)(n.li,{children:"Sophia C."}),"\n",(0,s.jsx)(n.li,{children:"Jonathan H."}),"\n",(0,s.jsx)(n.li,{children:"Filipe"}),"\n",(0,s.jsx)(n.li,{children:"Marius"}),"\n",(0,s.jsx)(n.li,{children:"Lori"}),"\n",(0,s.jsx)(n.li,{children:"Scopatz"}),"\n",(0,s.jsx)(n.li,{children:"CJ"}),"\n",(0,s.jsx)(n.li,{children:"Mike S."}),"\n",(0,s.jsx)(n.li,{children:"Ralf G."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"agenda",children:"Agenda"}),"\n",(0,s.jsx)(n.p,{children:"Pre-arranged stuff to talk about.\nEmail core team on Monday of the week of the dev meeting to ask for things to talk about."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["(CJ) ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/torchvision-feedstock/issues/2",children:"Pytorch/torchvision discussion"})," (",(0,s.jsx)(n.a,{href:"https://twitter.com/jeremyphoward/status/1178351261608861701",children:"tweet"}),")\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"How do we get greater maitainer participation?"}),"\n",(0,s.jsx)(n.li,{children:"External users find it difficult to get involved"}),"\n",(0,s.jsx)(n.li,{children:"Standards centos6/7"}),"\n",(0,s.jsx)(n.li,{children:"Community ownership model improvements"}),"\n",(0,s.jsx)(n.li,{children:"Have a follow-on conversation with PyTorch maintainers, conda-forge and Anaconda?"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["(Filipe) NumFOCUS grants and more transperancy/communication with expenses\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Write up plan that we discussed on the call and make it public"}),"\n",(0,s.jsx)(n.li,{children:"Create finances subteam to approve disbursement of funds"}),"\n",(0,s.jsxs)(n.li,{children:["Numfocus workflow is:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"someone submits things through rocket"}),"\n",(0,s.jsx)(n.li,{children:"They update spreadsheet"}),"\n",(0,s.jsx)(n.li,{children:"Someone from conda-forge core needs to approve the new spend."}),"\n",(0,s.jsx)(n.li,{children:"Set up notifications for your user so that approvers are aware of when changes are made."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["(Filipe) CZI proposal (deadline December 2019)\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"link to bioconda issue"}),"\n",(0,s.jsx)(n.li,{children:"follow up with Bjorn"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://gitter.im/bioconda/core-x-conda-forge",children:"https://gitter.im/bioconda/core-x-conda-forge"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["(CJ) ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/15",children:"CFEP-10"})," for assigning standings to feedstocks\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Comment in PR that only 3 Version PRs will be issued by bot"}),"\n",(0,s.jsxs)(n.li,{children:["What are we supposed to do with conda packages for feedstocks that are no longer being actively maintained\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Epoch out packages archived feedstocks?\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Package based messaging?"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:'one user perspective: would prefer correct and/or up-to-date versus "works for the thing i did one year ago"'}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["(CJ) Testing story, encourage people to add full test suites?\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Mixed responce, table for later"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["(John) Update on GPU packaging\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Made docker images, based on NVIDIA CUDA images"}),"\n",(0,s.jsx)(n.li,{children:"Built UCX"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"(CJ) NumFOCUS sprint form"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"subteam-updates",children:"Subteam updates"}),"\n",(0,s.jsx)(n.h4,{id:"bot",children:"Bot"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["(CJ) Python 3.8 migration is ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-pinning-feedstock/pull/279",children:"ready"})]}),"\n",(0,s.jsxs)(n.li,{children:["(CJ) migration graphs are plotted (see ",(0,s.jsx)(n.a,{href:"https://github.com/regro/cf-graph-countyfair/blob/master/status/archrebuild.svg",children:"arch plot"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["(CJ) Heroku ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/status/issues/60",children:"running out of memory"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fix the rerender use lower RAM"}),"\n",(0,s.jsx)(n.li,{children:"Pay for larger RAM"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"arm",children:"ARM"}),"\n",(0,s.jsx)(n.h4,{id:"docs",children:"Docs"}),"\n",(0,s.jsx)(n.h4,{id:"staged-recipes",children:"staged-recipes"}),"\n",(0,s.jsx)(n.h4,{id:"website",children:"website"}),"\n",(0,s.jsx)(n.h3,{id:"ci-infrastructure",children:"CI infrastructure"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"(CJ) Problems with Appveyor downgrade to free?"}),"\n",(0,s.jsx)(n.li,{children:"(Marius, Isuru) Azure migration update?"}),"\n",(0,s.jsxs)(n.li,{children:["Do we want to roll out ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-smithy/issues/1131",children:"https://github.com/conda-forge/conda-smithy/issues/1131"})," to all feedstocks?"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"compiler-upgrade",children:"Compiler upgrade"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"(Isuru) Update to clang 8.0.1 and gfortran 7.3.0 on OSX"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No rebuild necessary. (Rebuild for gfortran 7.3.0 is already done. We build with 7.3.0 and 4.8.5)"}),"\n",(0,s.jsx)(n.li,{children:"This should be pain free except for some packages that do -Wall -Werror."}),"\n",(0,s.jsx)(n.li,{children:"We get better compilers."}),"\n",(0,s.jsx)(n.li,{children:"We don't have to rely on defaults as we build these in conda-forge CI."}),"\n",(0,s.jsx)(n.li,{children:"We get a linker that supports .tbds .\n(new linker might work with older compiler, but not sure about packages compiled with -flto)"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"cfep-updates",children:"CFEP updates"}),"\n",(0,s.jsx)(n.p,{children:"How do we start getting traction on these?"}),"\n",(0,s.jsx)(n.h4,{id:"cfep-03",children:"cfep-03"}),"\n",(0,s.jsx)(n.h4,{id:"cfep-04",children:"cfep-04"}),"\n",(0,s.jsx)(n.h4,{id:"cfep-05",children:"cfep-05"}),"\n",(0,s.jsx)(n.h4,{id:"cfep-06",children:"cfep-06"}),"\n",(0,s.jsx)(n.h4,{id:"cfep-08",children:"cfep-08"}),"\n",(0,s.jsx)(n.h4,{id:"cfep-10",children:"cfep-10"}),"\n",(0,s.jsx)(n.h3,{id:"your-agenda-items",children:"Your agenda items"}),"\n",(0,s.jsx)(n.h2,{id:"discussion",children:"Discussion"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Funding round?"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"jeremy-howards-criticisms-and-discussion",children:"jeremy howard's criticisms and discussion"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"It's still difficult to get involved"}),"\n",(0,s.jsxs)(n.li,{children:["Ralf, as a numpy / scipy maintainer, still struggles to understand how to get involved.\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"External project maintainers plus maintainers of recipe -- so-and-so already owns it how can i start contributing to the package."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"the average user doesn't want to think about glibc. it's an implementation detail that the average packager doesn't want to think about. Most people are happy to follow these guidelines"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"check-in-on-previous-action-items",children:"Check in on previous action items"}),"\n",(0,s.jsx)(n.p,{children:"Copy previous action items from last meeting agenda."}),"\n",(0,s.jsx)(n.h3,{id:"last-meeting",children:"Last meeting"}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Eric) Email out to see if we can get more engagement on regular dev meetings."]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Sophia) Set up meeting to talk about Condafile stuff."]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (CJ) write blog post on bot work and compiler migration"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Filipe) Ping Bjorn to try and get Debian community more involved with conda-forge"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Eric) Scheduling Anaconda <-> conda-forge sync on anaconda.org requirements gathering"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Anthony) Reach out to NumFocus to figure out legal ramifications of not including licenses in files."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-meetings-ago",children:"2 meetings ago"}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Filipe) Progress on setting up a self-hosted blog\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Medium seems to be generally downvoted"}),"\n",(0,s.jsx)(n.li,{children:"Host your own blog seems to be generally positive"}),"\n",(0,s.jsxs)(n.li,{children:["Can we mimic what Dask does for their dev blog? ",(0,s.jsx)(n.a,{href:"https://github.com/dask/dask-blog",children:"https://github.com/dask/dask-blog"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Needs Owner) Searching on our website is a little difficult"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0}),' (Filipe, Anthony) Improve docs on releasing conda-smithy. Currently says "use rever". Would be good to fill out more info there for those of us that are unfamiliar with rever.']}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-meetings-ago",children:"3 meetings ago"}),"\n",(0,s.jsx)(n.p,{children:"y"}),"\n",(0,s.jsx)(n.h2,{id:"new-action-items",children:"New Action items"}),"\n",(0,s.jsx)(n.p,{children:"Copy new action items to next meetings agenda so we can check in.\nMake sure each action item is assigned to someone or it will likely not get done."})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var s=i(67294);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);