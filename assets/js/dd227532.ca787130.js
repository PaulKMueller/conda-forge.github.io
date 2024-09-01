"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[4553],{42526:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=i(85893),o=i(11151);const r={title:"2019-05-15"},t="2019-05-15 conda-forge meeting",l={id:"minutes/2019-05-15",title:"2019-05-15",description:"Pinned Items",source:"@site/community/minutes/2019-05-15.md",sourceDirName:"minutes",slug:"/minutes/2019-05-15",permalink:"/community/minutes/2019-05-15",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/community/minutes/2019-05-15.md",tags:[],version:"current",lastUpdatedAt:172514881e4,frontMatter:{title:"2019-05-15"},sidebar:"community",previous:{title:"2019-05-29",permalink:"/community/minutes/2019-05-29"},next:{title:"2019-04-17",permalink:"/community/minutes/2019-04-17"}},c={},d=[];function a(n){const e={a:"a",code:"code",h1:"h1",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"2019-05-15-conda-forge-meeting",children:"2019-05-15 conda-forge meeting"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Pinned Items"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Zoom instructions: ",(0,s.jsx)(e.a,{href:"https://paper.dropbox.com/doc/How-to-connect-to-zoom-odl94oveHyiRv6UqTtZE5",children:"+How to connect to zoom"})]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"New items"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Discuss the use of Drone (native ARM) in conda-forge.\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/conda-forge/conda-smithy/pull/1069",children:"https://github.com/conda-forge/conda-smithy/pull/1069"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:'Make conda-forge enhancements proposal a "first class citizen"  and it a voting process for approving them in our governance docs. (scopatz volunteered to add it to the docs.)'}),"\n",(0,s.jsxs)(e.li,{children:["SciPy plans and how to spend ESIP/NumFOCUS sprint grant money.\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Buy dedicated machines."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Elections/Governance\nUpcoming helper for staged-recipes\n- jan jansen (TODO)\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Staged-recipes team in Governance doc (Review and merge)\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/conda-forge/conda-forge.github.io/pull/738",children:"https://github.com/conda-forge/conda-forge.github.io/pull/738"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"Add formal budget team to Governance doc."}),"\n",(0,s.jsx)(e.li,{children:"Make the spreadsheets available to all (NumFOCUS team drive folder)."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:['Should we "dogfood"  ',(0,s.jsx)(e.code,{children:"strict"}),", which may be default in the next conda, in our CIs?\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/conda-forge/conda-forge-ci-setup-feedstock/pull/50",children:"https://github.com/conda-forge/conda-forge-ci-setup-feedstock/pull/50"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/conda-forge/staged-recipes/pull/8009",children:"https://github.com/conda-forge/staged-recipes/pull/8009"})}),"\n",(0,s.jsxs)(e.li,{children:["Perform switch after blas migration is more finished (ocefpaf: check the blas migration status.)\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Need to either copy over new compiler activation scripts package to cf"}),"\n",(0,s.jsx)(e.li,{children:"Or delete ours entirely"}),"\n",(0,s.jsx)(e.li,{children:"TODO: Verify that smithy and pinnings are fine for the compilers"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Azure status\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Need to fix windows (vc9/14 and cmake)"}),"\n",(0,s.jsx)(e.li,{children:"Credentials issues (need pipelines account to access Azure, will move to GH auth soon)"}),"\n",(0,s.jsx)(e.li,{children:"How to handle bespoke build agents (for builds taking longer than 6 hours (qt, compilers, etc.)"}),"\n",(0,s.jsx)(e.li,{children:"How to restart an Azure job?"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["NVIDIA\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Louder communication path for large ecosystem shifts (compiler migrations)\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Banner on AnacondaCloud, status updates on channel"}),"\n",(0,s.jsxs)(e.li,{children:["Print something while using ",(0,s.jsx)(e.code,{children:"conda install"})]}),"\n",(0,s.jsx)(e.li,{children:"More frequent updates"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"AnacondaCloud can fall over (mirroring conda)"}),"\n",(0,s.jsx)(e.li,{children:"Try to track down hard linked drivers in GPU packages."}),"\n",(0,s.jsx)(e.li,{children:"Progress on colo talks for bins of gpus at Anaconda (Waiting on Mike W. on this.)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Migrations\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Blas\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Underway"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Libprotobuf\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Underway"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["gfortran (wait for cfep-09)\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Need to build a migrator for new osx gfortran"}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://github.com/conda-forge/conda-forge-pinning-feedstock/pull/174",children:"https://github.com/conda-forge/conda-forge-pinning-feedstock/pull/174"})," maybe?"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Power and Arm\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Ongoing ",(0,s.jsx)(e.a,{href:"https://conda-forge.org/status/",children:"https://conda-forge.org/status/"})]}),"\n",(0,s.jsx)(e.li,{children:"More leafs to target?"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Openssl\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Underway"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Readline (wait for cfep-09)\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"ABI change"}),"\n",(0,s.jsx)(e.li,{children:"Needs migrator"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"@Christopher W : Add link to migration (conda-forge status?) docs for conda-forge.github.io (ocefpaf: I\u2019ll add the status link to the docs)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Nvidia relationship\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Building GPU packages using conda-forge packages, upload to their own channel after building with cudatoolkit on their own Jenkins system."}),"\n",(0,s.jsxs)(e.li,{children:["GPU compiler shim package: ",(0,s.jsx)(e.a,{href:"https://github.com/conda-forge/staged-recipes/pull/8229",children:"https://github.com/conda-forge/staged-recipes/pull/8229"})]}),"\n",(0,s.jsx)(e.li,{children:"Maybe form a working group?"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Perl ecosystem? (ocefpaf:Ask bBjorn G.)\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["move forward with plan to incorporate perl into CF\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Do we have an issue or something for this?"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["R 3.6 migration? (ocefpaf: Ask bBjorn G.)\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/conda-forge/r-base-feedstock/pull/82",children:"https://github.com/conda-forge/r-base-feedstock/pull/82"})}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>l,a:()=>t});var s=i(67294);const o={},r=s.createContext(o);function t(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:t(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);