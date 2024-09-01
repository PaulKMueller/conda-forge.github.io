"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[9036],{98465:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=i(85893),a=i(11151);const o={title:"Tips & tricks"},t="Tips & tricks",r={id:"user/tipsandtricks",title:"Tips & tricks",description:"Using multiple channels",source:"@site/docs/user/tipsandtricks.md",sourceDirName:"user",slug:"/user/tipsandtricks",permalink:"/docs/user/tipsandtricks",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/docs/user/tipsandtricks.md",tags:[],version:"current",lastUpdatedAt:172514881e4,frontMatter:{title:"Tips & tricks"},sidebar:"docs",previous:{title:"A brief introduction",permalink:"/docs/user/introduction"},next:{title:"Using conda-smithy to manage your CI",permalink:"/docs/user/ci-skeleton"}},l={},c=[{value:"Using multiple channels",id:"using-multiple-channels",level:2},{value:"Why does that happen?",id:"why-does-that-happen",level:3},{value:"How to fix it?",id:"how-to-fix-it",level:3},{value:"Using External Message Passing Interface (MPI) Libraries",id:"using-external-message-passing-interface-mpi-libraries",level:2},{value:"Installing Apple Intel packages on Apple Silicon",id:"installing-apple-intel-packages-on-apple-silicon",level:2},{value:"Installing CUDA-enabled packages like TensorFlow and PyTorch",id:"installing-cuda-enabled-packages-like-tensorflow-and-pytorch",level:2},{value:"Using PyPy as an interpreter",id:"using-pypy-as-an-interpreter",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"tips-tricks"})}),"\n",(0,s.jsx)(n.h1,{id:"tips--tricks",children:"Tips & tricks"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"multiple-channels"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"using-multiple-channels"})}),"\n",(0,s.jsx)(n.h2,{id:"using-multiple-channels",children:"Using multiple channels"}),"\n",(0,s.jsx)(n.p,{children:"It is quite common to install a package from conda-forge and,\nwhen trying to use it,\nsee an error like (OS X example):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"ImportError: dlopen(.../site-packages/rpy2/rinterface/_rinterface.so, 2): Library not loaded: @rpath/libicuuc.54.dylib\n  Referenced from: .../site-packages/rpy2/rinterface/_rinterface.so\n  Reason: image not found\n"})}),"\n",(0,s.jsxs)(n.p,{children:["That happens because either the correct version of ",(0,s.jsx)(n.code,{children:"icu"}),",\nor any other package in the error,\nis not present or the package is missing altogether."]}),"\n",(0,s.jsxs)(n.p,{children:["You can confirm this by issuing the command ",(0,s.jsx)(n.code,{children:"conda list"})," and searching for the package in question."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"why-does-that-happen"})}),"\n",(0,s.jsx)(n.h3,{id:"why-does-that-happen",children:"Why does that happen?"}),"\n",(0,s.jsxs)(n.p,{children:["The conda-forge and ",(0,s.jsx)(n.code,{children:"defaults"})," are not 100% compatible.\nIn the example above it is known that ",(0,s.jsx)(n.code,{children:"defaults"})," uses ",(0,s.jsx)(n.code,{children:"icu 54.*"})," while conda-forge relies on ",(0,s.jsx)(n.code,{children:"icu 56.*"}),",\nthat mismatch can lead to errors when the install environment is mixing packages from multiple channels."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["All of conda-forge software pinning can be found at: ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-pinning-feedstock/blob/master/recipe/conda_build_config.yaml",children:"https://github.com/conda-forge/conda-forge-pinning-feedstock/blob/master/recipe/conda_build_config.yaml"})]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"how-to-fix-it"})}),"\n",(0,s.jsx)(n.h3,{id:"how-to-fix-it",children:"How to fix it?"}),"\n",(0,s.jsxs)(n.p,{children:["Newer ",(0,s.jsx)(n.code,{children:"conda"})," versions (>=4.6) introduced a strict channel priority feature.\nType ",(0,s.jsx)(n.code,{children:"conda config --describe channel_priority"})," for more information."]}),"\n",(0,s.jsxs)(n.p,{children:["The solution is to add the ",(0,s.jsx)(n.code,{children:"conda-forge"})," channel on top of ",(0,s.jsx)(n.code,{children:"defaults"})," in your ",(0,s.jsx)(n.code,{children:".condarc"})," file when using conda-forge packages\nand activate the strict channel priority with:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ conda config --set channel_priority strict\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will ensure that all the dependencies come from the ",(0,s.jsx)(n.code,{children:"conda-forge"})," channel unless they exist only on ",(0,s.jsx)(n.code,{children:"defaults"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Here is how a ",(0,s.jsx)(n.code,{children:".condarc"})," file would look like:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ cat .condarc\nchannel_priority: strict\nchannels:\n  - conda-forge\n  - defaults\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In addition to the channel priority, we recommend always installing your packages inside a new environment instead of the ",(0,s.jsx)(n.code,{children:"base"})," environment from anaconda/miniconda.\nUsing envs make it easier to debug problems with packages and ensure the stability of your root env."]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["In the past conda-forge used to vendorize some of ",(0,s.jsx)(n.code,{children:"defaults"})," dependencies that were not built in our infrastructure,\nlike compilers run-times, to avoid the mixing channel problem.\nHowever, with the ",(0,s.jsx)(n.code,{children:"strict"})," option, we no longer have to vendorize those (this led to its own set of problems),\ninstead, we removed everything that is not built in conda-forge and let ",(0,s.jsx)(n.code,{children:"strict"})," pull those from ",(0,s.jsx)(n.code,{children:"defaults"}),"."]}),(0,s.jsxs)(n.p,{children:["TL;DR if you are experiencing missing compilers run-times like ",(0,s.jsx)(n.code,{children:"libgcc-ng"}),",\nthat is probably because you removed ",(0,s.jsx)(n.code,{children:"defaults"}),",\njust re-add it and activate ",(0,s.jsx)(n.code,{children:"strict"})," for a smooth and stable experience when installing packages."]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"using-external-message-passing-interface-mpi-libraries"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"id1"})}),"\n",(0,s.jsx)(n.h2,{id:"using-external-message-passing-interface-mpi-libraries",children:"Using External Message Passing Interface (MPI) Libraries"}),"\n",(0,s.jsxs)(n.p,{children:["On some high-performance computing (HPC) systems, users are expected to use the\nMPI binaries that are available on the system as opposed to those built by conda-forge.\nThese binaries are typically specialized for the system and interface properly with job\nschedulers, etc. However, this practice creates issues for conda-forge users. When you install\na package from conda-forge that relies on MPI, ",(0,s.jsx)(n.code,{children:"conda"})," will install the MPI binaries\nbuilt by conda-forge and the package will link to those binaries. This setup often either\ndoes not work at all or functions in unexpected ways on HPC systems."]}),"\n",(0,s.jsxs)(n.p,{children:["To solve these issues, conda-forge has created special dummy builds of the ",(0,s.jsx)(n.code,{children:"mpich"})," and ",(0,s.jsx)(n.code,{children:"openmpi"}),"\nlibraries that are simply shell packages with no contents. These packages allow the ",(0,s.jsx)(n.code,{children:"conda"})," solver to produce\ncorrect environments while avoiding installing MPI binaries from conda-forge. You can install the\ndummy package with the following command"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ conda install "mpich=x.y.z=external_*"\n$ conda install "openmpi=x.y.z=external_*"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["As long as you have the local copies of the ",(0,s.jsx)(n.code,{children:"mpich"}),"/",(0,s.jsx)(n.code,{children:"openmpi"})," library in your linking paths and\nthe local version matches the ",(0,s.jsx)(n.code,{children:"conda"})," version within the proper ABI range, then this procedure should\nwork. At runtime, the conda-forge package that depends on MPI should find the\nlocal copy of ",(0,s.jsx)(n.code,{children:"mpich"}),"/",(0,s.jsx)(n.code,{children:"openmpi"})," and link to it."]}),"\n",(0,s.jsxs)(n.p,{children:["Another point for using your own MPI binaries specialized for the system is that\nif you care about ultimate performance, you should build/install your MPI backend yourself,\nand not rely on conda-forge packages (they are built for compatibility rather than performance).\nDue to the constrained build environment of conda-forge packages there might be the lack of such important features\nas XPMEM and CMA for ",(0,s.jsx)(n.code,{children:"mpich"})," and ",(0,s.jsx)(n.code,{children:"openmpi"}),", respectively."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"apple-silicon-rosetta"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"installing-apple-intel-packages-on-apple-silicon"})}),"\n",(0,s.jsx)(n.h2,{id:"installing-apple-intel-packages-on-apple-silicon",children:"Installing Apple Intel packages on Apple Silicon"}),"\n",(0,s.jsxs)(n.p,{children:["Using ",(0,s.jsx)(n.a,{href:"https://support.apple.com/en-us/HT211861",children:"Rosetta 2"}),", you can install packages originally compiled for Mac computers with Intel processors on Mac computers with Apple silicon processors."]}),"\n",(0,s.jsx)(n.p,{children:"This can be enabled per environment using the following commands:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'CONDA_SUBDIR=osx-64 conda create -n your_environment_name python   # Create a new environment called your_environment_name with intel packages.\nconda activate your_environment_name\npython -c "import platform;print(platform.machine())"  # Confirm that the correct values are being used.\nconda config --env --set subdir osx-64  # Make sure that conda commands in this environment use intel packages.\n'})}),"\n",(0,s.jsx)(n.p,{children:"To verify that the correct platform is being used, run the following commands after the environment has been activated:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'python -c "import platform;print(platform.machine())"  # Should print "x86_64"\necho "CONDA_SUBDIR: $CONDA_SUBDIR"  # Should print "CONDA_SUBDIR: osx-64"\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"installing-packages-for-gpus-and-cpus"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"installing-cuda-enabled-packages-like-tensorflow-and-pytorch"})}),"\n",(0,s.jsx)(n.h2,{id:"installing-cuda-enabled-packages-like-tensorflow-and-pytorch",children:"Installing CUDA-enabled packages like TensorFlow and PyTorch"}),"\n",(0,s.jsxs)(n.p,{children:["In conda-forge, some packages are available with GPU support. These packages not only take significantly longer to compile and build, but they also result in rather large binaries that users then download. As an effort to maximize accessibility for users with lower connection and/or storage bandwidth, there is an ongoing effort to limit installing packages compiled for GPUs unnecessarily on CPU-only machines by default. This is accomplished by adding a run dependency, ",(0,s.jsx)(n.code,{children:"__cuda"}),", that detects if the local machine has a GPU. However, this introduces challenges to users who may prefer to still download and use GPU-enabled packages even on a non-GPU machine. For example, login nodes on HPCs often do not have GPUs and their compute counterparts with GPUs often do not have internet access. In this case, a user can override the default setting via the environment variable ",(0,s.jsx)(n.code,{children:"CONDA_OVERRIDE_CUDA"})," to install GPU packages on the login node to be used later on the compute node. At the time of writing (February 2022), we have concluded this safe default behavior is best for most of conda-forge users, with an easy override option available and documented. Please let us know if you have thoughts on or issues with this."]}),"\n",(0,s.jsxs)(n.p,{children:["In order to override the default behavior, a user can set the environment variable ",(0,s.jsx)(n.code,{children:"CONDA_OVERRIDE_CUDA"})," like below to install TensorFlow with GPU support even on a machine with CPU only."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'CONDA_OVERRIDE_CUDA="11.2" conda install "tensorflow==2.7.0=cuda112*" -c conda-forge\n# OR\nCONDA_OVERRIDE_CUDA="11.2" mamba install "tensorflow==2.7.0=cuda112*" -c conda-forge\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:['You should select the cudatoolkit version most appropriate for your GPU; currently, we have "10.2", "11.0", "11.1", and "11.2" builds available, where the "11.2" builds are compatible with all cudatoolkits>=11.2. At the time of writing (Mar 2022), there seems to be a bug in how the CUDA builds are resolved by ',(0,s.jsx)(n.code,{children:"mamba"}),", defaulting to ",(0,s.jsx)(n.code,{children:"cudatoolkit==10.2"}),"; thus, it is prudent to be as explicit as possible like above or by adding ",(0,s.jsx)(n.code,{children:"cudatoolkit>=11.2"})," or similar to the line above."]})}),"\n",(0,s.jsxs)(n.p,{children:["For context, installing the TensorFlow 2.7.0 CUDA-enabled variant, ",(0,s.jsx)(n.code,{children:"tensorflow==2.7.0=cuda*"}),", results in approximately 2 GB of packages to download while the CPU variant, ",(0,s.jsx)(n.code,{children:"tensorflow=2.7.0=cpu*"}),", results in approximately 200 MB to download. That is a significant bandwidth and storage wasted if one only needs the CPU only variant!"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"pypy"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"using-pypy-as-an-interpreter"})}),"\n",(0,s.jsx)(n.h2,{id:"using-pypy-as-an-interpreter",children:"Using PyPy as an interpreter"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"conda-forge"})," channel supports creating and installing packages into\nenvironments using the ",(0,s.jsx)(n.a,{href:"https://www.pypy.org",children:"PyPy interpreter"}),". Many packages are already\navailable. You need to enable the ",(0,s.jsx)(n.code,{children:"conda-forge"})," channel and use\nthe ",(0,s.jsx)(n.code,{children:"pypy"})," identifier when creating your environment:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ conda create -c conda-forge -n my-pypy-env pypy python=3.8\n$ conda activate my-pypy-env\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Currently supported python versions are 3.8 and 3.9. Support for ",(0,s.jsx)(n.code,{children:"pypy3.7"}),"\nhas been dropped. While you can still create a python 3.7 environment, you\nyou will not be getting updates as new package versions are released (including\npypy itself)."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"As of March 8 2020, if you are using defaults as a low priority channel,\nthen you need to use strict channel priority as the metadata in defaults\nhas not been patched yet which allows cpython extension packages to be\ninstalled alongside pypy."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ conda config --set channel_priority strict\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>t});var s=i(67294);const a={},o=s.createContext(a);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);