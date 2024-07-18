"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[3866],{18025:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=i(85893),o=i(11151);const a={title:"2017-11-16"},s="2017-11-16 compiler meeting notes",r={id:"minutes/2017-11-16",title:"2017-11-16",description:"Scheduled time https://anaconda.webex.com/anaconda-en/j.php?MTID=m11b5ddad66325da22bbe58d7d1c02809",source:"@site/community/minutes/2017-11-16.md",sourceDirName:"minutes",slug:"/minutes/2017-11-16",permalink:"/community/minutes/2017-11-16",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/community/minutes/2017-11-16.md",tags:[],version:"current",lastUpdatedAt:1721294414e3,frontMatter:{title:"2017-11-16"},sidebar:"community",previous:{title:"2018-02-20",permalink:"/community/minutes/2018-02-20"},next:{title:"2017-08-11",permalink:"/community/minutes/2017-08-11"}},c={},l=[{value:"Adopting Anaconda compilers",id:"adopting-anaconda-compilers",level:2},{value:"Compiler flag unification",id:"compiler-flag-unification",level:2},{value:"Conda-build 3: strategy for moving",id:"conda-build-3-strategy-for-moving",level:2},{value:"Fortran support on Windows",id:"fortran-support-on-windows",level:2},{value:"OpenMP behavior",id:"openmp-behavior",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"2017-11-16-compiler-meeting-notes",children:"2017-11-16 compiler meeting notes"}),"\n",(0,t.jsxs)(n.p,{children:["Scheduled time: 9 AM central.  Meeting link: ",(0,t.jsx)(n.a,{href:"https://anaconda.webex.com/anaconda-en/j.php?MTID=m11b5ddad66325da22bbe58d7d1c02809",children:"https://anaconda.webex.com/anaconda-en/j.php?MTID=m11b5ddad66325da22bbe58d7d1c02809"})]}),"\n",(0,t.jsx)(n.h2,{id:"adopting-anaconda-compilers",children:"Adopting Anaconda compilers"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Linux: gcc 7.2"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Prefixed compilers: require activation"}),"\n",(0,t.jsx)(n.li,{children:"Common adaptations required for new anaconda compilers:"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Mac: LLVM/clang 4.0.1"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"prefixed compilers: require activation"}),"\n",(0,t.jsx)(n.li,{children:"common adaptations required for new anaconda compilers:"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Windows: activation scripts"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Need adaptation for Appveyor compiler locations"}),"\n",(0,t.jsxs)(n.li,{children:["common adaptations required:\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["cmake\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"clear CC and/or CXX vars"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"import os"}),"\n",(0,t.jsx)(n.p,{children:'print("Hello World")'}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"compiler-flag-unification",children:"Compiler flag unification"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"GCC"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["toolchain: ",(0,t.jsx)(n.a,{href:"https://github.com/conda-forge/toolchain-feedstock/blob/master/recipe/activate.sh",children:"https://github.com/conda-forge/toolchain-feedstock/blob/master/recipe/activate.sh"})]}),"\n",(0,t.jsxs)(n.li,{children:["toolchain3: ",(0,t.jsx)(n.a,{href:"https://github.com/conda-forge/toolchain3-feedstock/blob/master/recipe/activate.sh",children:"https://github.com/conda-forge/toolchain3-feedstock/blob/master/recipe/activate.sh"})]}),"\n",(0,t.jsxs)(n.li,{children:["anaconda: ",(0,t.jsx)(n.a,{href:"https://github.com/AnacondaRecipes/aggregate/blob/master/ctng-compilers-activation-feedstock/recipe/conda_build_config.cos6.x86_64.yaml#L41-L54",children:"https://github.com/AnacondaRecipes/aggregate/blob/master/ctng-compilers-activation-feedstock/recipe/conda_build_config.cos6.x86_64.yaml#L41-L54"}),"\n| Variable | toolchain only                          | anaconda only                                                                                                                                             |  |\n| -------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |  |\n| CFLAGS   | -m${ARCH}                               | march=nocona -mtune=haswell -ftree-vectorize -fPIC -fstack-protector-strong -fno-plt -O2 -pipe                                                            |  |\n| CPPFLAGS |                                         | -D_FORTIFY_SOURCE=2 -O2                                                                                                                                   |  |\n| CXXFLAGS | -DBOOST_MATH_DISABLE_FLOAT128 -m${ARCH} | -fvisibility-inlines-hidden -std=c++17 -fmessage-length=0 -march=nocona -mtune=haswell -ftree-vectorize -fPIC -fstack-protector-strong -fno-plt -O2 -pipe |  |\n| LDFLAGS  | -Wl,-rpath,$PREFIX/lib                  | Wl,-O2 -Wl,--sort-common -Wl,--as-needed -Wl,-z,relro -Wl,-z,now                                                                                          |  |"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"LLVM/clang"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["toolchain: ",(0,t.jsx)(n.a,{href:"https://github.com/conda-forge/toolchain-feedstock/blob/master/recipe/activate.sh",children:"https://github.com/conda-forge/toolchain-feedstock/blob/master/recipe/activate.sh"})]}),"\n",(0,t.jsxs)(n.li,{children:["toolchain3: ",(0,t.jsx)(n.a,{href:"https://github.com/conda-forge/toolchain3-feedstock/blob/master/recipe/activate.sh",children:"https://github.com/conda-forge/toolchain3-feedstock/blob/master/recipe/activate.sh"})]}),"\n",(0,t.jsxs)(n.li,{children:["anaconda: ",(0,t.jsx)(n.a,{href:"https://github.com/AnacondaRecipes/aggregate/blob/master/clang/build.sh",children:"https://github.com/AnacondaRecipes/aggregate/blob/master/clang/build.sh"}),"\n| Variable   | toolchain only                                                          | anaconda only                                                                                                                                                                |\n| ---------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| CPPFLAGS   |                                                                         | -mmacosx-version-min=${MACOSX_VERSION_MIN}                                                                                                                                   |\n| CFLAGS     | -mmacosx-version-min=${MACOSX_VERSION_MIN} -m${ARCH}                    | -march=core2 -mtune=haswell -mssse3 -ftree-vectorize -fPIC -fPIE -fstack-protector-strong -O2 -pipe                                                                          |\n| CXXFLAGS   | -mmacosx-version-min=${MACOSX_VERSION_MIN} -m${ARCH}                    | -march=core2 -mtune=haswell -mssse3 -ftree-vectorize -fPIC -fPIE -fstack-protector-strong -O2 -pipe -stdlib=libc++ -fvisibility-inlines-hidden -std=c++14 -fmessage-length=0 |\n| LDFLAGS    | -mmacosx-version-min=${MACOSX_VERSION_MIN} -lc++ -Wl,-rpath,$PREFIX/lib | -pie                                                                                                                                                                         |\n| LDFLAGS_CC |                                                                         | -Wl,-pie -Wl,-headerpad_max_install_names                                                                                                                                    |\n|            |                                                                         |                                                                                                                                                                              |"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fortran"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"toolchain: (not set)"}),"\n",(0,t.jsx)(n.li,{children:"toolchain3: (not set)"}),"\n",(0,t.jsxs)(n.li,{children:["anaconda:\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Linux: ",(0,t.jsx)(n.a,{href:"https://github.com/AnacondaRecipes/aggregate/blob/master/ctng-compilers-activation-feedstock/recipe/conda_build_config.cos6.x86_64.yaml#L46",children:"https://github.com/AnacondaRecipes/aggregate/blob/master/ctng-compilers-activation-feedstock/recipe/conda_build_config.cos6.x86_64.yaml#L46"})]}),"\n",(0,t.jsxs)(n.li,{children:["Mac: ",(0,t.jsx)(n.a,{href:"https://github.com/AnacondaRecipes/aggregate/blob/master/gfortran-feedstock/recipe/build.sh#L5",children:"https://github.com/AnacondaRecipes/aggregate/blob/master/gfortran-feedstock/recipe/build.sh#L5"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Windows: flags that affect some things (cmake)\n| Variable       | anaconda value                  |\n| -------------- | ------------------------------- |\n| CFLAGS         | %CFLAGS% -MD -GL                |\n| CXXFLAGS       | %CXXFLAGS% -MD -GL              |\n| LDFLAGS_SHARED | %LDFLAGS_SHARED% -LTCG ucrt.lib |"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'Overall: everyone receptive to new compilers.  Mike to provide way of keeping host and build prefix separate, even when not cross compiling.  This would avoid need for things like "always_include_files" and would facilitate conda-forge keeping their llvmdev recipe as is (for cling usage).'}),"\n",(0,t.jsx)(n.p,{children:"Filipe: this is really little more than a vendor change.  We already depend on other vendors for compilers (RH for devtoolset2; apple for existing clang), we\u2019re only switching to a different vendor, not fundamentally changing what we do."}),"\n",(0,t.jsx)(n.p,{children:"Need to maintain llvm with cling patches, but this will not be the default compiler."}),"\n",(0,t.jsx)(n.h2,{id:"conda-build-3-strategy-for-moving",children:"Conda-build 3: strategy for moving"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["install and use with c-b-a (no cb3 matrix)\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Waiting on feedback from issue ",(0,t.jsx)(n.a,{href:"https://github.com/conda-tools/conda-build-all/issues/94",children:"https://github.com/conda-tools/conda-build-all/issues/94"})," but mostly seems OK."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Mike: needs to fix \u2014skip-existing.  Concern is that re-rendering should not generate new packages when only some dependency has changed (bugfix bump?)\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Jonathan to explore ways to skip uploads when only hash has changed as a temporary workaround."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["replace c-b-a with cb3 matrix support\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["replace pinning script with central conda_build_config.yaml\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Re-render installs from conda-forge central config package, uses that config"}),"\n",(0,t.jsx)(n.li,{children:"Each recipe can have its own conda_build_config.yaml alongside its meta.yaml file to override anything"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Where/how to store intermediate files and distribute CI jobs\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"John recommended committing these to the feedstock repo during re-rendering"}),"\n",(0,t.jsx)(n.li,{children:"Jonathan wondered about committing the full conda_build_config.yaml to the repo, or pulling it in as a dependency at build time, but then reducing it using environment variables."}),"\n",(0,t.jsx)(n.li,{children:"Mike wondered about CONDA_VARIANT_* as a pattern for environment variables that CB might recognize, so that we keep the current CI scheme.  This probably also integrates with Jonathan\u2019s idea of reducing the matrix on a per-job basis.  Conda-smithy would create the set of jobs, each with different env vars to reduce the overall matrix for each job."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["use run_exports and use either c-b-a or cb3\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"People generally interested, but needs to be implemented and proven over time.  Good experience so far with defaults."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"fortran-support-on-windows",children:"Fortran support on Windows"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"gfortran (msys2) / Flang"}),"\n",(0,t.jsx)(n.li,{children:"Timeline for adding either"}),"\n",(0,t.jsx)(n.li,{children:"Mike asked that whatever is done is done with community approval, for the sake of maintaining a high quality user experience."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"openmp-behavior",children:"OpenMP behavior"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Currently, needs extra package on mac, but is included on Linux (not active in flags, though)"}),"\n",(0,t.jsx)(n.li,{children:"What is desirable default behavior?"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>s});var t=i(67294);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);