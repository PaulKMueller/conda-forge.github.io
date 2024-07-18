"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[2594],{25452:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=n(85893),t=n(11151);const l={title:"2020-07-22"},a="2020-07-22 conda-forge core meeting",c={id:"minutes/2020-07-22",title:"2020-07-22",description:"Attendees",source:"@site/community/minutes/2020-07-22.md",sourceDirName:"minutes",slug:"/minutes/2020-07-22",permalink:"/community/minutes/2020-07-22",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/community/minutes/2020-07-22.md",tags:[],version:"current",lastUpdatedAt:172129318e4,frontMatter:{title:"2020-07-22"},sidebar:"community",previous:{title:"2020-07-29",permalink:"/community/minutes/2020-07-29"},next:{title:"2020-07-15",permalink:"/community/minutes/2020-07-15"}},o={},d=[{value:"Attendees",id:"attendees",level:2},{value:"Agenda",id:"agenda",level:2},{value:"Standing items",id:"standing-items",level:3},{value:"Your new agenda items",id:"your-new-agenda-items",level:3},{value:"Stuff from last week that we didn&#39;t get to",id:"stuff-from-last-week-that-we-didnt-get-to",level:3},{value:"Active votes",id:"active-votes",level:3},{value:"Subteam updates",id:"subteam-updates",level:3},{value:"Bot",id:"bot",level:4},{value:"ARM",id:"arm",level:4},{value:"POWER",id:"power",level:4},{value:"CUDA",id:"cuda",level:4},{value:"Docs",id:"docs",level:4},{value:"staged-recipes",id:"staged-recipes",level:4},{value:"website",id:"website",level:4},{value:"security+systems",id:"securitysystems",level:4},{value:"CI infrastructure",id:"ci-infrastructure",level:3},{value:"Compiler upgrade",id:"compiler-upgrade",level:4},{value:"CFEP updates",id:"cfep-updates",level:3},{value:"Open PRs",id:"open-prs",level:4},{value:"Discussion",id:"discussion",level:2},{value:"Check in on previous action items",id:"check-in-on-previous-action-items",level:2},{value:"This meeting",id:"this-meeting",level:3},{value:"Last meeting",id:"last-meeting",level:3},{value:"2 meetings ago",id:"2-meetings-ago",level:3},{value:"3 meetings ago",id:"3-meetings-ago",level:3},{value:"Move to Issue Tracker",id:"move-to-issue-tracker",level:3}];function r(e){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",input:"input",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"2020-07-22-conda-forge-core-meeting",children:"2020-07-22 conda-forge core meeting"}),"\n",(0,i.jsx)(s.h2,{id:"attendees",children:"Attendees"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Filipe Fernandes"}),"\n",(0,i.jsx)(s.li,{children:"Jonathan Helmus"}),"\n",(0,i.jsx)(s.li,{children:"Keith Kraus"}),"\n",(0,i.jsx)(s.li,{children:"Eric Dill"}),"\n",(0,i.jsx)(s.li,{children:"Wolf Vollprecht"}),"\n",(0,i.jsx)(s.li,{children:"Marius van Niekerk"}),"\n",(0,i.jsx)(s.li,{children:"Matthew Becker"}),"\n",(0,i.jsx)(s.li,{children:"Anthony Scopatz"}),"\n",(0,i.jsx)(s.li,{children:"CJ Wright"}),"\n",(0,i.jsx)(s.li,{children:"Michael Sarahan"}),"\n",(0,i.jsx)(s.li,{children:"Cheng Lee"}),"\n",(0,i.jsx)(s.li,{children:"Marcell Bargull"}),"\n",(0,i.jsx)(s.li,{children:"Isuru Fernando"}),"\n",(0,i.jsx)(s.li,{children:"Ray Douglass"}),"\n",(0,i.jsx)(s.li,{children:"Marcelo Duarte Trevisani"}),"\n",(0,i.jsx)(s.li,{children:"John Kirkham"}),"\n",(0,i.jsx)(s.li,{children:"Uwe Korn"}),"\n",(0,i.jsx)(s.li,{children:"Sylvain Corlay"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"agenda",children:"Agenda"}),"\n",(0,i.jsx)(s.h3,{id:"standing-items",children:"Standing items"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," (CJ) budget, also finance subteam creation\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/conda-forge.github.io/pull/1093",children:"https://github.com/conda-forge/conda-forge.github.io/pull/1093"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," intros for new folks on the call"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"your-new-agenda-items",children:"Your new agenda items"}),"\n",(0,i.jsx)(s.h3,{id:"stuff-from-last-week-that-we-didnt-get-to",children:"Stuff from last week that we didn't get to"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," (CL) msys2 packages"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'Anaconda deciding on update plans for "defaults" channel'}),"\n",(0,i.jsx)(s.li,{children:"No immediate action needed at this time"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," (CJ) rebuild migration automerges default"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Currently either automerge is (org-wide?) on or off, but it would be good to allow ppl to\nchoose to automerge only for rebuilds and not version updates"}),"\n",(0,i.jsx)(s.li,{children:"These automerges may be safer than version automerges, since the deps\ndon't change and the build is more likely to fail if the package would be broken."}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/regro/cf-scripts/pull/1063",children:"https://github.com/regro/cf-scripts/pull/1063"})}),"\n",(0,i.jsx)(s.li,{children:"Overall response is positive, we need to document/announce this change"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," (CJ) s390x support"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/conda-smithy/issues/1359",children:"https://github.com/conda-forge/conda-smithy/issues/1359"})}),"\n",(0,i.jsx)(s.li,{children:"What is the minimum level of support we need before we would accept this"}),"\n",(0,i.jsx)(s.li,{children:"Should outline concerns in issue"}),"\n",(0,i.jsx)(s.li,{children:"Ask to first add platform to numpy/scipy CI?"}),"\n",(0,i.jsx)(s.li,{children:"Ask to build gcc?"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," What should we do with feedstocks that are not being maintained?"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Allow people who use package to step up to maintainance"}),"\n",(0,i.jsxs)(s.li,{children:["Should be aggresive on archiving feedstocks\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"And remove maintainers"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"Advertise un-maintained feedstocks (in docs?)"}),"\n",(0,i.jsx)(s.li,{children:"Notify for when a feedstock repo depends on something archived?"}),"\n",(0,i.jsx)(s.li,{children:"todo: cleanup teams post removal of users"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," (FF) new conda-build release that fixes the Windows prefix issue"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/conda/conda-build/issues/3909#issuecomment-62658654",children:"https://github.com/conda/conda-build/issues/3909#issuecomment-62658654"})}),"\n",(0,i.jsx)(s.li,{children:"coming soon, JJH will keep core updated on progress"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," (MRB) pinning epochs draft CFEP"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["see the draft here: ",(0,i.jsx)(s.a,{href:"https://hackmd.io/N1hoJGJBSqGTFd83pxCyYA",children:"https://hackmd.io/N1hoJGJBSqGTFd83pxCyYA"})]}),"\n",(0,i.jsx)(s.li,{children:"idea is to declare some pinning file as a pinning epoch"}),"\n",(0,i.jsx)(s.li,{children:"then we render a recipe with the epoch's pinnings and the latest pinnings"}),"\n",(0,i.jsxs)(s.li,{children:["discussion around burden on maintainers\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"opt-in vs opt-out model"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["discussion around how many of these we want to support\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"current suggestion (Uwe) is at most 2 pinnings + latest"}),"\n",(0,i.jsx)(s.li,{children:"tag pinning epochs every 6 months to a year or so which creates a ~yearly deprecation cycle"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"the bot will need to issue PRs to update feedstocks to next pinnings epoch as we move them along"}),"\n",(0,i.jsxs)(s.li,{children:["Alternative to build for multiple version of boost\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Make boost a matrix\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"1.70 (again) and 1.72"}),"\n",(0,i.jsx)(s.li,{children:"Keep a pinned boost version for at least [some time]?"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Should we do similar for ICU ?\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Uwe seemed to indicate no"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (ED) Welcome packets for new members and contributors? -- Delayed"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["new contributors to staged-recipes\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"stickers mailed to an address of their choosing?"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Staged-recipes\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"new contributors plus a mug"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Subteams?\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"As above plus any subteam specific stuff (e.g., maybe we need a bot sticker)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Core\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"staged-recipes plus a tshirt"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Concerns:\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"cost"}),"\n",(0,i.jsx)(s.li,{children:"who would mail stuff"}),"\n",(0,i.jsx)(s.li,{children:"privacy around people giving us a mailing address"}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://shop.spreadshirt.com/numfocus/",children:"https://shop.spreadshirt.com/numfocus/"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://shop.spreadshirt.com/numfocus/conda-forge+official+logo?idea=5bce3b332051763003022d31",children:"https://shop.spreadshirt.com/numfocus/conda-forge+official+logo?idea=5bce3b332051763003022d31"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (KK) Remove deprecation/warning of pre-link scripts in conda-build"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Warning currently swallows messages from our (NVIDIA) testing"}),"\n",(0,i.jsx)(s.li,{children:"Used in conda forge packages currently according to jakirkham"}),"\n",(0,i.jsxs)(s.li,{children:["Would be good to allow packages with proprietary licenses to display some message before package is actually installed\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"NVIDIA legal would prefer this for CUDA related packages, and want to pave the way for shipping compiler, headers, and other EULA protected bits"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"active-votes",children:"Active votes"}),"\n",(0,i.jsx)(s.h3,{id:"subteam-updates",children:"Subteam updates"}),"\n",(0,i.jsx)(s.h4,{id:"bot",children:"Bot"}),"\n",(0,i.jsx)(s.h4,{id:"arm",children:"ARM"}),"\n",(0,i.jsx)(s.h4,{id:"power",children:"POWER"}),"\n",(0,i.jsx)(s.h4,{id:"cuda",children:"CUDA"}),"\n",(0,i.jsx)(s.h4,{id:"docs",children:"Docs"}),"\n",(0,i.jsx)(s.h4,{id:"staged-recipes",children:"staged-recipes"}),"\n",(0,i.jsx)(s.h4,{id:"website",children:"website"}),"\n",(0,i.jsx)(s.h4,{id:"securitysystems",children:"security+systems"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," still need to finish CFEP-13 (can move ahead now that latest smithy is out)"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"ci-infrastructure",children:"CI infrastructure"}),"\n",(0,i.jsx)(s.h4,{id:"compiler-upgrade",children:"Compiler upgrade"}),"\n",(0,i.jsx)(s.h3,{id:"cfep-updates",children:"CFEP updates"}),"\n",(0,i.jsx)(s.h4,{id:"open-prs",children:"Open PRs"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/7",children:"cfep-04"})," X11 and CDT policy"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"INACTIVE - Merge in with some inactive-esque status?"}),"\n",(0,i.jsx)(s.li,{children:"Needs new champion. Thanks for your work on this pkgw! Has unaddressed comments from pkgw as from Jan 10, 2020"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/9",children:"cfep-06"})," Staged-recipes review lifecycle"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"INACTIVE - Merge in with some inactive-esque status?"}),"\n",(0,i.jsx)(s.li,{children:"Lingering comment from @saraedum. @jakirkham, can you reply? Has unadressed comment from @saraedum from Jan 8, 2020"}),"\n",(0,i.jsx)(s.li,{children:"(MRB) The stalebot has solved the worst of the issues here. I think we could defer this one permanently."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/15",children:"cfep-10"})," Feedstock statuses, unmaintained"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"INACTIVE - Merge in with some inactive-esque status?"}),"\n",(0,i.jsx)(s.li,{children:"Needs another review. Has unaddressed updates from pkgw as of Jan 11, 2020"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/cfep/pull/23",children:"cfep-12"})," Removing packages that violate the terms of the source package"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Stalled since May 26, 2020"}),"\n",(0,i.jsx)(s.li,{children:'Active debate about moving to "broken" vs deleting from conda-forge channel'}),"\n",(0,i.jsx)(s.li,{children:"Active vote, ends on 2020-03-11"}),"\n",(0,i.jsx)(s.li,{children:"What were the results of the vote?"}),"\n",(0,i.jsx)(s.li,{children:"Did we hear back from NumFOCUS?"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/cfep/pull/32",children:"cfep-17"})," Handling pin backports and dependency rebuilds"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Stalled debate about implementation details between Isuru, CJ and Matt"}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"UPDATE 2020-07-22"}),": We in principle have agreement to render the extra pinnings needed directly in the feedstock\non a temporary basis (i.e., until the migration has ended)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"discussion",children:"Discussion"}),"\n",(0,i.jsx)(s.h2,{id:"check-in-on-previous-action-items",children:"Check in on previous action items"}),"\n",(0,i.jsx)(s.p,{children:"Copy previous action items from last meeting agenda."}),"\n",(0,i.jsx)(s.h3,{id:"this-meeting",children:"This meeting"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," Figure out how to communicate breaking changes to users. Likely should open up an issue immediately for futher discussion. Ping @kkraus, plus capture notes from further up in these meeting notes"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (Eric) TODO: Make strict an option in conda_forge.yaml and turn it on by default. Open issue in conda-smithy"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"last-meeting",children:"Last meeting"}),"\n",(0,i.jsx)(s.h3,{id:"2-meetings-ago",children:"2 meetings ago"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," Eric to add a new page to our docs around how to engage with conda-forge and affiliated in a commercial relationship."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," Eric will get the NVBug link from Keith and archive it in the conda-forge google drive."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," John K. will update the cuda toolkit feedstock on the git repo to note the NVBug link to the internal NVIDIA issue tracker"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," Jonathan will update docs to note that some non-exhaustive list of packages (like cuda-toolkit, MKL, etc.)"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," Jonathan will review this ",(0,i.jsx)(s.a,{href:"https://github.com/AnacondaRecipes/cudatoolkit-feedstock/pull/7",children:"PR"})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"3-meetings-ago",children:"3 meetings ago"}),"\n",(0,i.jsx)(s.h3,{id:"move-to-issue-tracker",children:"Move to Issue Tracker"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (Kale) schedule conda working group"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," cfep-10 next steps: CJ to call a vote for feedback"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," cfep-06 next steps: Ask staged recipes team to champion this CFEP and move it forward"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," jakirkham & CJ-wright to sync on adding CUDA to the migration bot"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (Eric) Scheduling Anaconda <-> conda-forge sync on anaconda.org requirements gathering\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Will try and get this scheduled in the next month."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (Anthony) Reach out to NumFocus to figure out legal ramifications of not including licenses in files."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (Eric) check internally for funding levels for hotels & flying folks from the community in?"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (Eric) Figure out finances of conda-forge to support themselves?"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (jjhelmus) Open up CFEP for which python's we're going to support"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (jakirkham) write a blog post on CUDA stuff we discussed today"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (jakirkham) update docs on how to add CUDA support to feedstocks"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (jakirkham) will open an issue on conda-smithy to investigate Drone issues. (ping the aarch team)\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/conda-forge.github.io/issues/954",children:"https://github.com/conda-forge/conda-forge.github.io/issues/954"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (ED) Who we are page? Some combination of a FAQ and a who is everyone. FAQ things like:\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"who's the POC for CF <> Anaconda, CF <> NumFocus, CF <> Azure"}),"\n",(0,i.jsx)(s.li,{children:"who's the POC for the various subteams?"}),"\n",(0,i.jsx)(s.li,{children:"Informal information: roles, day jobs, bios, the whole nine yards, why you're here, etc."}),"\n",(0,i.jsx)(s.li,{children:"Public or internal? I don't really care either way. Anyone feel strongly one way or the other?"}),"\n",(0,i.jsx)(s.li,{children:"opt-in to public bios"}),"\n",(0,i.jsxs)(s.li,{children:["software carpentry has a large number of instructors and has ",(0,i.jsx)(s.a,{href:"https://carpentries.org/instructors",children:"https://carpentries.org/instructors"})]}),"\n",(0,i.jsx)(s.li,{children:'some concern about "yet another place to keep stuff up to date"'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (CJ) Form finance subteam"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (ED) document strategies for reproducible environments using conda-forge"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (UK) Static libraries stuff\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," Add linting hints to builds to find them"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," Recommend how to package them -> CFEP-18"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," We should write docs saying we don't provide support and this is a bad idea. -> CFEP-18"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>a});var i=n(67294);const t={},l=i.createContext(t);function a(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);