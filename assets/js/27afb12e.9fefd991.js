"use strict";(self.webpackChunkcapella_documentation=self.webpackChunkcapella_documentation||[]).push([[8043],{95:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"Cambria FTC/Tutorials/cambria-ftc-and-cluster-trusted-executables","title":"Cambria FTC and Cluster Trusted Executables and Scripts","description":"Objective","source":"@site/docs/Cambria FTC/04-Tutorials/cambria-ftc-and-cluster-trusted-executables.md","sourceDirName":"Cambria FTC/04-Tutorials","slug":"/Cambria FTC/Tutorials/cambria-ftc-and-cluster-trusted-executables","permalink":"/docs/docs/Cambria FTC/Tutorials/cambria-ftc-and-cluster-trusted-executables","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cambria FTC/04-Tutorials/cambria-ftc-and-cluster-trusted-executables.md","tags":[],"version":"current","frontMatter":{"title":"Cambria FTC and Cluster Trusted Executables and Scripts"},"sidebar":"FTCSidebar","previous":{"title":"SetYouTubeThumbnail","permalink":"/docs/docs/Cambria FTC/API/methods/SetYouTubeThumbnail"},"next":{"title":"Cambria FTC ARIB STD B37 Captions Extraction and Conversion","permalink":"/docs/docs/Cambria FTC/Tutorials/cambria-ftc-arib-stdb3/"}}');var n=s(4848),i=s(8453);const a={title:"Cambria FTC and Cluster Trusted Executables and Scripts"},c="Cambria FTC and Cluster: Trusted Executables and Scripts",o={},l=[{value:"Objective",id:"objective",level:2},{value:"Description",id:"description",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Registering Trusted Executables",id:"registering-trusted-executables",level:3},{value:"Registering Trusted Perl Scripts",id:"registering-trusted-perl-scripts",level:3},{value:"Using Python Scripts",id:"using-python-scripts",level:3},{value:"Security Considerations",id:"security-considerations",level:2}];function d(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"cambria-ftc-and-cluster-trusted-executables-and-scripts",children:"Cambria FTC and Cluster: Trusted Executables and Scripts"})}),"\n",(0,n.jsx)(t.h2,{id:"objective",children:"Objective"}),"\n",(0,n.jsxs)(t.p,{children:["This document serves as a guide on how to use ",(0,n.jsx)(t.strong,{children:"trusted executables and scripts"})," on ",(0,n.jsx)(t.strong,{children:"Cambria FTC and Cluster"}),". Starting in the ",(0,n.jsx)(t.strong,{children:"5.2 release"}),", any executables (",(0,n.jsx)(t.strong,{children:"post-tasks, notifications"}),") or ",(0,n.jsx)(t.strong,{children:"Perl scripts"})," (",(0,n.jsx)(t.strong,{children:"scriptable workflow"}),") used as part of a ",(0,n.jsx)(t.strong,{children:"Job"})," must be ",(0,n.jsx)(t.strong,{children:"trusted"})," by the machine executing the job."]}),"\n",(0,n.jsxs)(t.p,{children:["Organizations should consult their ",(0,n.jsx)(t.strong,{children:"IT department"})," to determine the necessity of this feature and assist with its implementation."]}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"The reason why executables and scripts need to be trusted is to ensure that only authorized programs are executed on a machine. When a script or an executable is registered as trusted, it means that the user or the system administrator has explicitly allowed it to run on the machine. Without this trust, any script or executable could potentially run on a machine, including those that are malicious or harmful."}),"\n",(0,n.jsx)(t.p,{children:"By registering trusted executables and scripts, organizations can ensure that only authorized programs are executed on their machines, thereby reducing the risk of malware infections, data theft, and other security breaches. Additionally, the trusted list can help prevent unauthorized modifications to scripts or executables, as any change to the program will change its SHA256 hash, requiring the trusted list to be updated."}),"\n",(0,n.jsx)(t.p,{children:"Overall, the registration of trusted executables and scripts is an important security measure that helps to mitigate the risk of security incidents caused by malicious programs, and organizations should take this process seriously to ensure the safety of their systems and data."}),"\n",(0,n.jsx)(t.h2,{id:"instructions",children:"Instructions"}),"\n",(0,n.jsx)(t.h3,{id:"registering-trusted-executables",children:"Registering Trusted Executables"}),"\n",(0,n.jsxs)(t.p,{children:["To register a ",(0,n.jsx)(t.strong,{children:"trusted executable"}),", follow these steps:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Generate the SHA256 hash"})," for the executable file using the ",(0,n.jsx)(t.strong,{children:"SHA256 hash calculator"})," in the ",(0,n.jsx)(t.strong,{children:"FTC/Cluster Post Task tab"})," in ",(0,n.jsx)(t.strong,{children:"Preset Editor"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Open the ",(0,n.jsx)(t.strong,{children:"Registry Editor"})," by typing ",(0,n.jsx)(t.code,{children:"regedit"})," in the ",(0,n.jsx)(t.strong,{children:"search bar"})," or ",(0,n.jsx)(t.strong,{children:"Run dialog (Win+R)"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Navigate to the registry key:","\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\CAPELLA\\CAMBRIA\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Create a new string value"})," called ",(0,n.jsx)(t.strong,{children:"TrustedAppSHA256"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Set the value"})," of ",(0,n.jsx)(t.code,{children:"TrustedAppSHA256"})," to the ",(0,n.jsx)(t.strong,{children:"SHA256"})," of the executable.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If there are ",(0,n.jsx)(t.strong,{children:"multiple executables"}),", separate them with ",(0,n.jsx)(t.strong,{children:"commas"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Repeat"})," these steps for ",(0,n.jsx)(t.strong,{children:"each machine"})," where the executable should be trusted."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Alternatively, create a ",(0,n.jsx)(t.code,{children:".reg"})," file containing the ",(0,n.jsx)(t.strong,{children:"SHA256 hashes"})," and ",(0,n.jsx)(t.strong,{children:"run it as administrator"})," on each machine."]}),"\n",(0,n.jsx)(t.h3,{id:"registering-trusted-perl-scripts",children:"Registering Trusted Perl Scripts"}),"\n",(0,n.jsxs)(t.p,{children:["To register a ",(0,n.jsx)(t.strong,{children:"trusted Perl script"}),", follow the same steps as ",(0,n.jsx)(t.strong,{children:"trusted executables"}),", but use the registry key ",(0,n.jsx)(t.strong,{children:"TrustedScriptSHA256"})," instead of ",(0,n.jsx)(t.strong,{children:"TrustedAppSHA256"}),"."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," Any changes to a Perl script will ",(0,n.jsx)(t.strong,{children:"modify"})," its SHA256 hash, requiring the trusted list to be ",(0,n.jsx)(t.strong,{children:"updated"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"using-python-scripts",children:"Using Python Scripts"}),"\n",(0,n.jsxs)(t.p,{children:["Python scripts ",(0,n.jsx)(t.strong,{children:"execute in a sandbox"}),", meaning they ",(0,n.jsx)(t.strong,{children:"do not"})," need to be registered as trusted."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["However, ",(0,n.jsx)(t.strong,{children:"Python scripts do not have network access"}),", which may be required for some workflows."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"security-considerations",children:"Security Considerations"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Trusted executables"})," can be called with ",(0,n.jsx)(t.strong,{children:"different arguments"}),", so ensure they ",(0,n.jsx)(t.strong,{children:"do not allow unintended actions"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"If an executable accepts file names"}),", verify that the files are of the ",(0,n.jsx)(t.strong,{children:"expected type"})," and do ",(0,n.jsx)(t.strong,{children:"not"})," contain ",(0,n.jsx)(t.strong,{children:"malicious content"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Perl scripts"})," that accept ",(0,n.jsx)(t.strong,{children:"user input"})," should ",(0,n.jsx)(t.strong,{children:"validate input"})," to prevent ",(0,n.jsx)(t.strong,{children:"injection attacks"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["If ",(0,n.jsx)(t.strong,{children:"network access is unnecessary"}),", prefer using ",(0,n.jsx)(t.strong,{children:"Python scripts"})," instead of Perl to ",(0,n.jsx)(t.strong,{children:"reduce security risks"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Organizations should ",(0,n.jsx)(t.strong,{children:"work with their IT department"})," to properly ",(0,n.jsx)(t.strong,{children:"identify risky executables and scripts"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>c});var r=s(6540);const n={},i=r.createContext(n);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);