"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[5705],{39925:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var i=n(85893),t=n(11151);const a={title:"2020-05-27"},l="2020-05-27 conda-forge core meeting",c={id:"minutes/2020-05-27",title:"2020-05-27",description:"Attendees",source:"@site/community/minutes/2020-05-27.md",sourceDirName:"minutes",slug:"/minutes/2020-05-27",permalink:"/community/minutes/2020-05-27",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/community/minutes/2020-05-27.md",tags:[],version:"current",lastUpdatedAt:1710151931,formattedLastUpdatedAt:"Mar 11, 2024",frontMatter:{title:"2020-05-27"},sidebar:"community",previous:{title:"2020-06-22",permalink:"/community/minutes/2020-06-22"},next:{title:"2020-05-13",permalink:"/community/minutes/2020-05-13"}},r={},o=[{value:"Attendees",id:"attendees",level:2},{value:"Agenda",id:"agenda",level:2},{value:"Your agenda items",id:"your-agenda-items",level:3},{value:"Active votes",id:"active-votes",level:3},{value:"Subteam updates",id:"subteam-updates",level:3},{value:"Bot",id:"bot",level:4},{value:"Stuff from last week that we didnt get to",id:"stuff-from-last-week-that-we-didnt-get-to",level:5},{value:"ARM",id:"arm",level:4},{value:"POWER",id:"power",level:4},{value:"CUDA",id:"cuda",level:4},{value:"Docs",id:"docs",level:4},{value:"staged-recipes",id:"staged-recipes",level:4},{value:"website",id:"website",level:4},{value:"security+systems",id:"securitysystems",level:4},{value:"CI infrastructure",id:"ci-infrastructure",level:3},{value:"Compiler upgrade",id:"compiler-upgrade",level:4},{value:"CFEP updates",id:"cfep-updates",level:3},{value:"Open PRs",id:"open-prs",level:4},{value:"Discussion",id:"discussion",level:2},{value:"Check in on previous action items",id:"check-in-on-previous-action-items",level:2},{value:"Last meeting",id:"last-meeting",level:3},{value:"3 meetings ago",id:"3-meetings-ago",level:3},{value:"Move to Issue Tracker",id:"move-to-issue-tracker",level:3}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",input:"input",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"2020-05-27-conda-forge-core-meeting",children:"2020-05-27 conda-forge core meeting"}),"\n",(0,i.jsx)(s.h2,{id:"attendees",children:"Attendees"}),"\n",(0,i.jsx)(s.h2,{id:"agenda",children:"Agenda"}),"\n",(0,i.jsx)(s.h3,{id:"your-agenda-items",children:"Your agenda items"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," (all) intros for new people on the line?"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Marcelo!"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," (CJ) standing budget item"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (CJ) institutional partners metadata (",(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/conda-forge.github.io/pull/1028",children:"https://github.com/conda-forge/conda-forge.github.io/pull/1028"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0}),' (ED) Should we just merge in the cfep PRs with the status of "deferred" since there\'s zero action on any of them?']}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," (MRB) change how we mark packages as broken"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["currently we move packages to broken and remove them from main\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"this means users cannot recreate old envs where a package was marked as broken"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["new system would leave packages on main (only add broken label) and then remove them\nvia the removals section of the repo data patches\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"this is how defaults does it"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"do we need to announce this before switching? should we switch?"}),"\n",(0,i.jsxs)(s.li,{children:["side effects are that this procedure leaves the repodata in weird states\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"the only source of truth is the one on the CDN (any other source is wrong)"}),"\n",(0,i.jsx)(s.li,{children:"packages can have different looking requirements between broken and main labels even on the CDN"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"matching defaults is probably more important than the things above"}),"\n",(0,i.jsxs)(s.li,{children:["TODO:\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," document how users are supposed to interpret broken label"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," update how we, as core, are supposed to mark packages as broken"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (ED) document strategies for reproducible environments using conda-forge"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," (CJ) I'd like to form a finance subteam, if you are interested in serving please let me know."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"numfocus point of contact"}),"\n",(0,i.jsx)(s.li,{children:"responsible for letting core know where we stand financially"}),"\n",(0,i.jsx)(s.li,{children:"pending financial matters"}),"\n",(0,i.jsx)(s.li,{children:"acting as final approvers"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," (JJH) Should tk require freetype and X11? ",(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/tk-feedstock/pull/40",children:"https://github.com/conda-forge/tk-feedstock/pull/40"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Fonts will look nicer in TK applications"}),"\n",(0,i.jsxs)(s.li,{children:["Introduces new requirements (and download/disk space) to Python\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"fontconfig: 300kb, freetype: 1mb"}),"\n",(0,i.jsx)(s.li,{children:"some additional packages needed as well"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:'Recommendation is to create two variants, with and without "nice fonts"'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," (IF) Making a linux-anvil-ppc64le package and distributing cudatoolkit in the docker image"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/docker-images/pull/113",children:"https://github.com/conda-forge/docker-images/pull/113"})}),"\n",(0,i.jsxs)(s.li,{children:["There's no ",(0,i.jsx)(s.code,{children:"defaults::cudatoolkit"})," for ppc64le, but the docker image is still useful to have"]}),"\n",(0,i.jsxs)(s.li,{children:["Even though we can't redistribute ",(0,i.jsx)(s.code,{children:"defaults::cudatoolkit"})," we are doing it via docker as we are caching it."]}),"\n",(0,i.jsxs)(s.li,{children:["Notes:\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Make it clear to users that this docker image doesn't have cudatoolkit and why it doesn't have cudatoolkit."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0}),' (WV) "standardization" of a next gen package format and other parts of the conda ecosystem']}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Make available specs public? E.g: ",(0,i.jsx)(s.a,{href:"https://anaconda.atlassian.net/wiki/spaces/AD/pages/90210540/Conda+package+format+v2",children:"https://anaconda.atlassian.net/wiki/spaces/AD/pages/90210540/Conda+package+format+v2"})]}),"\n",(0,i.jsxs)(s.li,{children:["Some notes regarding a next version of the package spec are written down here: ",(0,i.jsx)(s.a,{href:"https://hackmd.io/axI1tQdwQB2pTJKt5XdY5w",children:"https://hackmd.io/axI1tQdwQB2pTJKt5XdY5w"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"this current spec doesn't support everything one needs for the current stack"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["also some discussion on gitter and at bot subteam meeting a few months ago\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["using python as the language came up more than once\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"objections are that it is not static metadata and might be too hard to parse"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["deprecate selectors in favor of ...\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"jinja2 if statements (hard to parse)"}),"\n",(0,i.jsxs)(s.li,{children:["letting any value in the config be a dict with the selector info in the key\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"this follows what rust does in their TOML"}),"\n",(0,i.jsx)(s.li,{children:"very easy to parse"}),"\n",(0,i.jsx)(s.li,{children:"always results in valid YAML"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"deprecate the use of some jinja2 elements (any control flow elements) since they are hard to parse"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"related to the conda working group that Kale is organizing"}),"\n",(0,i.jsxs)(s.li,{children:["Interest\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Jonathan Helmus"}),"\n",(0,i.jsx)(s.li,{children:"Wolf"}),"\n",(0,i.jsx)(s.li,{children:"Marcel"}),"\n",(0,i.jsxs)(s.li,{children:["Scopatz\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"specifically interested in the activation scripts"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"Cheng?"}),"\n",(0,i.jsx)(s.li,{children:"Matt B."}),"\n",(0,i.jsx)(s.li,{children:"Marcelo"}),"\n",(0,i.jsx)(s.li,{children:"Mike S."}),"\n",(0,i.jsx)(s.li,{children:"John"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," (UK) static libraries in conda-forge"]}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsx)(s.li,{children:"Our toolstack and systems are tailored for dynamic linkage, thus we want to focus on that in conda-forge"}),"\n",(0,i.jsxs)(s.li,{children:["Users are interested in static libraries for some use cases, e.g.\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Building wheels for PyPI on Windows"}),"\n",(0,i.jsx)(s.li,{children:"(MRB) Do we want to make a better effort to support this? Marking static packages and doing small\nmigrations when we move compilers as needed? Our answer has been no. (UK: Note that the reported breakages were because of LTO-\nenabled static libraries, that's a next level)"}),"\n",(0,i.jsx)(s.li,{children:"static libraries can have compatibility concerns with compilers and ld/binutils"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"Go and Rust are separate discussions (packaging and licensing, etc.)"}),"\n",(0,i.jsxs)(s.li,{children:["What do we do about accidental leakage?\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"remove them or mandate a split package"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," Add linting hints to builds to find them"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," Recommend how to package them"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," We should write docs saying we don't provide support and this is a bad idea."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"active-votes",children:"Active votes"}),"\n",(0,i.jsx)(s.h3,{id:"subteam-updates",children:"Subteam updates"}),"\n",(0,i.jsx)(s.h4,{id:"bot",children:"Bot"}),"\n",(0,i.jsx)(s.h5,{id:"stuff-from-last-week-that-we-didnt-get-to",children:"Stuff from last week that we didnt get to"}),"\n",(0,i.jsx)(s.h4,{id:"arm",children:"ARM"}),"\n",(0,i.jsx)(s.h4,{id:"power",children:"POWER"}),"\n",(0,i.jsx)(s.h4,{id:"cuda",children:"CUDA"}),"\n",(0,i.jsx)(s.h4,{id:"docs",children:"Docs"}),"\n",(0,i.jsx)(s.h4,{id:"staged-recipes",children:"staged-recipes"}),"\n",(0,i.jsx)(s.h4,{id:"website",children:"website"}),"\n",(0,i.jsx)(s.h4,{id:"securitysystems",children:"security+systems"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["(ED) Any other updates on this one? Need any help?\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["(MRB) CFEP-13 is done.\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Isuru suggested using the github api and that worked. Thanks!"}),"\n",(0,i.jsx)(s.li,{children:"All feedstocks converted over and staged-recipes is making new feedstocks with the right keys/tokens."}),"\n",(0,i.jsx)(s.li,{children:"To move forward, we simply have to deactivate the binstar token and put a new one on heroku."}),"\n",(0,i.jsx)(s.li,{children:"I will make an announcement and give people a few weeks."}),"\n",(0,i.jsx)(s.li,{children:"We probably want to solve the rerendering issues with github first."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"(MRB) next up is better user management"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"ci-infrastructure",children:"CI infrastructure"}),"\n",(0,i.jsx)(s.h4,{id:"compiler-upgrade",children:"Compiler upgrade"}),"\n",(0,i.jsx)(s.h3,{id:"cfep-updates",children:"CFEP updates"}),"\n",(0,i.jsx)(s.h4,{id:"open-prs",children:"Open PRs"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/7",children:"cfep-04"})," X11 and CDT policy"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"INACTIVE - Merge in with some inactive-esque status?"}),"\n",(0,i.jsx)(s.li,{children:"Needs new champion. Thanks for your work on this pkgw! Has unaddressed comments from pkgw as from Jan 10, 2020"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/9",children:"cfep-06"})," Staged-recipes review lifecycle"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"INACTIVE - Merge in with some inactive-esque status?"}),"\n",(0,i.jsx)(s.li,{children:"Lingering comment from @saraedum. @jakirkham, can you reply? Has unadressed comment from @saraedum from Jan 8, 2020"}),"\n",(0,i.jsx)(s.li,{children:"(MRB) The stalebot has solved the worst of the issues here. I think we could defer this one permanently."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/15",children:"cfep-10"})," Feedstock statuses, unmaintained"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"INACTIVE - Merge in with some inactive-esque status?"}),"\n",(0,i.jsx)(s.li,{children:"Needs another review. Has unaddressed updates from pkgw as of Jan 11, 2020"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/cfep/pull/23",children:"cfep-12"})," Removing packages that violate the terms of the source package"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'Active debate about moving to "broken" vs deleting from conda-forge channel'}),"\n",(0,i.jsx)(s.li,{children:"Active vote, ends on 2020-03-11"}),"\n",(0,i.jsx)(s.li,{children:"What were the results of the vote?"}),"\n",(0,i.jsx)(s.li,{children:"Did we hear back from NumFOCUS?"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"discussion",children:"Discussion"}),"\n",(0,i.jsx)(s.h2,{id:"check-in-on-previous-action-items",children:"Check in on previous action items"}),"\n",(0,i.jsx)(s.p,{children:"Copy previous action items from last meeting agenda."}),"\n",(0,i.jsx)(s.h3,{id:"last-meeting",children:"Last meeting"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (ED) Who we are page? Some combination of a FAQ and a who is everyone. FAQ things like:\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"who's the POC for CF <> Anaconda, CF <> NumFocus, CF <> Azure"}),"\n",(0,i.jsx)(s.li,{children:"who's the POC for the various subteams?"}),"\n",(0,i.jsx)(s.li,{children:"Informal information: roles, day jobs, bios, the whole nine yards, why you're here, etc."}),"\n",(0,i.jsx)(s.li,{children:"Public or internal? I don't really care either way. Anyone feel strongly one way or the other?"}),"\n",(0,i.jsx)(s.li,{children:"opt-in to public bios"}),"\n",(0,i.jsxs)(s.li,{children:["software carpentry has a large number of instructors and has ",(0,i.jsx)(s.a,{href:"https://carpentries.org/instructors",children:"https://carpentries.org/instructors"})]}),"\n",(0,i.jsx)(s.li,{children:'some concern about "yet another place to keep stuff up to date"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"3-meetings-ago",children:"3 meetings ago"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (Kale) schedule conda working group"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (CJ) Institutional Partners page in docs\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," TODO: Submit skeleton for PR into conda-forge.github.io repo"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"move-to-issue-tracker",children:"Move to Issue Tracker"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," cfep-10 next steps: CJ to call a vote for feedback"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," cfep-06 next steps: Ask staged recipes team to champion this CFEP and move it forward"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," jakirkham & CJ-wright to sync on adding CUDA to the migration bot"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (Eric) Scheduling Anaconda <-> conda-forge sync on anaconda.org requirements gathering\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Will try and get this scheduled in the next month."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (Anthony) Reach out to NumFocus to figure out legal ramifications of not including licenses in files."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (Eric) check internally for funding levels for hotels & flying folks from the community in?"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (Eric) Figure out finances of conda-forge to support themselves?"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (jjhelmus) Open up CFEP for which python's we're going to support"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," Remove conda forge readthedocs.\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"done already"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (jakirkham) write a blog post on CUDA stuff we discussed today"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (jakirkham) update docs on how to add CUDA support to feedstocks"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (jakirkham) will open an issue on conda-smithy to investigate Drone issues. (ping the aarch team)\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/conda-forge.github.io/issues/954",children:"https://github.com/conda-forge/conda-forge.github.io/issues/954"})}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>l});var i=n(67294);const t={},a=i.createContext(t);function l(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);