"use strict";(self.webpackChunkcapella_documentation=self.webpackChunkcapella_documentation||[]).push([[4800],{182:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"Cambria FTC/Installation Guides/Kubernetes/AWS/Akamai_Linode_Kubernetes_CambriaClusterFTC_Installation","title":"(Example) Cambria Cluster / FTC 5.4.0","description":"Help documentation for Akamai Cloud Kubernetes with Cambria Cluster and FTC 5.4.0.","source":"@site/docs/Cambria FTC/01-Installation Guides/01-Kubernetes/01-AWS/Akamai_Linode_Kubernetes_CambriaClusterFTC_Installation.md","sourceDirName":"Cambria FTC/01-Installation Guides/01-Kubernetes/01-AWS","slug":"/Cambria FTC/Installation Guides/Kubernetes/AWS/Akamai_Linode_Kubernetes_CambriaClusterFTC_Installation","permalink":"/docs/Cambria FTC/Installation Guides/Kubernetes/AWS/Akamai_Linode_Kubernetes_CambriaClusterFTC_Installation","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cambria FTC/01-Installation Guides/01-Kubernetes/01-AWS/Akamai_Linode_Kubernetes_CambriaClusterFTC_Installation.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"(Example) Cambria Cluster / FTC 5.4.0","sidebar_position":1,"description":"Help documentation for Akamai Cloud Kubernetes with Cambria Cluster and FTC 5.4.0."},"sidebar":"FTCSidebar","next":{"title":"Welcome","permalink":"/docs/Cambria FTC/Installation Guides/Kubernetes/Akamai/placeholder"}}');var r=i(4848),s=i(8453);const a={title:"(Example) Cambria Cluster / FTC 5.4.0",sidebar_position:1,description:"Help documentation for Akamai Cloud Kubernetes with Cambria Cluster and FTC 5.4.0."},o="Akamai Cloud Kubernetes Help Documentation",l={},d=[{value:"Document History",id:"document-history",level:2},{value:"Limitations and Security Information",id:"limitations-and-security-information",level:2},{value:"Document Overview",id:"document-overview",level:2},{value:"1. Overview",id:"1-overview",level:2},{value:"2. Create Kubernetes Cluster",id:"2-create-kubernetes-cluster",level:2},{value:"Windows:",id:"windows",level:3},{value:"Linux:",id:"linux",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"akamai-cloud-kubernetes-help-documentation",children:"Akamai Cloud Kubernetes Help Documentation"})}),"\n",(0,r.jsx)(n.h2,{id:"document-history",children:"Document History"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Version"}),(0,r.jsx)(n.th,{children:"Date"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5.3.0"}),(0,r.jsx)(n.td,{children:"06/07/2024"}),(0,r.jsx)(n.td,{children:"Updated for release 5.3.0.20102 (Linux), 5.3.0.20015 (Windows)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5.4.0"}),(0,r.jsx)(n.td,{children:"10/03/2024"}),(0,r.jsx)(n.td,{children:"Updated for release 5.4.0.21627 (Linux)"})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Download the online version of this document for the latest information and files. Always ensure you download the latest files."})}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.p,{children:"Do not proceed with the installation process unless you agree to the End User License Agreement (EULA) for our products. You can download and read the EULA for the following:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.dropbox.com/s/oemlax63aatjjiw/EULA_Cluster.pdf?dl=0",children:"Cambria Cluster"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.dropbox.com/s/ualv9usxsowh6m2/EULA_FTC.pdf?dl=0",children:"Cambria FTC"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.dropbox.com/s/1wg7ee7a59kzi8h/EULA_Cambria_License_Manager.pdf?dl=0",children:"Cambria License Manager"})}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"limitations-and-security-information",children:"Limitations and Security Information"}),"\n",(0,r.jsxs)(n.p,{children:["Cambria FTC, Cluster, and License Manager are installed on Linux Docker containers. Limitations and security checks for this version are detailed in our ",(0,r.jsx)(n.a,{href:"https://www.dropbox.com/scl/fi/scur4u2gquntj08p50bqf/Linux_Cambria_Cluster_and_FTC_5_4_0_Guide.pdf?rlkey=swowq9u34pz640uo227dtqbnp",children:"general Linux Documents"}),"."]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["These documents are for informational purposes only. The Kubernetes setup begins in ",(0,r.jsx)(n.strong,{children:"Section 2: Create Kubernetes Cluster"}),"."]}),(0,r.jsx)(n.p,{children:"This document references Kubernetes version 1.31 only."})]}),"\n",(0,r.jsxs)(n.admonition,{type:"important",children:[(0,r.jsx)(n.p,{children:"PDF documents may have copy/paste issues. For best results, download this document and any referenced PDFs, and open them in a PDF viewer such as Adobe Acrobat."}),(0,r.jsx)(n.p,{children:"For multi-line commands, copy each line individually and ensure the copied command matches the document."})]}),"\n",(0,r.jsx)(n.h2,{id:"document-overview",children:"Document Overview"}),"\n",(0,r.jsx)(n.p,{children:"This document provides a walkthrough for the installation and initial testing of Cambria Cluster and Cambria FTC in a Kubernetes environment. The key topics covered include:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Overview of the Cambria Cluster / FTC environment in Kubernetes."}),"\n",(0,r.jsx)(n.li,{children:"Creating and configuring the Kubernetes Cluster."}),"\n",(0,r.jsx)(n.li,{children:"Installing Cambria Cluster and Cambria FTC on the Kubernetes Cluster."}),"\n",(0,r.jsx)(n.li,{children:"Verifying the installation."}),"\n",(0,r.jsx)(n.li,{children:"Testing Cambria Cluster / FTC applications."}),"\n",(0,r.jsx)(n.li,{children:"Viewing performance metrics using Prometheus / Grafana."}),"\n",(0,r.jsx)(n.li,{children:"Updating Cambria Cluster / FTC applications on Kubernetes."}),"\n",(0,r.jsx)(n.li,{children:"Deleting a Kubernetes Cluster."}),"\n",(0,r.jsx)(n.li,{children:"Quick reference for Kubernetes installation."}),"\n",(0,r.jsx)(n.li,{children:"Quick reference for important Kubernetes components (URLs, template projects, test players, etc)."}),"\n",(0,r.jsx)(n.li,{children:"Glossary of important terms."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"1-overview",children:"1. Overview"}),"\n",(0,r.jsx)(n.p,{children:"Capella\u2019s Cambria Cluster deployment is recommended to run on at least 3 nodes (replica = 3) with a service (Load Balancer) exposing the application externally. Each pod contains the following containers:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cambria Cluster (application):"})," Core application."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Auto-Scale FTC dotnet tool:"})," Spawns Cambria FTC machines based on the number of queued transcoding jobs. The formula is: ",(0,r.jsx)(n.code,{children:"(number of jobs + 2) / 3"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Leader Elector tool:"})," Selects the main Cambria Cluster pod, with others as backups in case of failure."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Additionally, a PostgreSQL database runs in a separate pod for each Cambria Cluster node, with data replication across pods to preserve data integrity."}),"\n",(0,r.jsx)(n.p,{children:"Cambria FTC deployments run on separate pods, each containing:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cambria FTC (application):"})," Core application."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Auto-Connect FTC dotnet tool:"})," Lists pods, finds Cambria Cluster, and connects the FTC application to it. If no cluster is found within ~20 minutes, the node pool is recycled."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"PostgreSQL:"})," Database for Cambria FTC application."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Each Kubernetes node runs either the Cluster deployment or the FTC deployment."}),"\n",(0,r.jsx)(n.h2,{id:"2-create-kubernetes-cluster",children:"2. Create Kubernetes Cluster"}),"\n",(0,r.jsx)(n.p,{children:"To create a Kubernetes Cluster on Akamai Cloud, follow these steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a directory to store all setup files. This will be referred to as your ",(0,r.jsx)(n.code,{children:"kubernetes"})," directory."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"windows",children:"Windows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p C:/Users/<your-username>/kubernetes/Akamai\n"})}),"\n",(0,r.jsx)(n.h3,{id:"linux",children:"Linux:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p /home/<your-username>/kubernetes/Akamai\n\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(6540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);