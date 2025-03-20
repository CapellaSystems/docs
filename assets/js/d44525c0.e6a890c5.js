"use strict";(self.webpackChunkcapella_documentation=self.webpackChunkcapella_documentation||[]).push([[4164],{1715:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"Cambria FTC/Release Notes/postgres_migration/index","title":"Cambria FTC and Cluster 5.0: Database Migration","description":"Note: If you have not downloaded any Cambria FTC/Cluster software before version 5.0, then this document does not apply to you. This document only applies for users who want to migrate their database information from Postgres 9.3 over to Postgres 14.3.","source":"@site/docs/Cambria FTC/02-Release Notes/postgres_migration/index.md","sourceDirName":"Cambria FTC/02-Release Notes/postgres_migration","slug":"/Cambria FTC/Release Notes/postgres_migration/","permalink":"/docs/Cambria FTC/Release Notes/postgres_migration/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cambria FTC/02-Release Notes/postgres_migration/index.md","tags":[],"version":"current","frontMatter":{},"sidebar":"FTCSidebar","previous":{"title":"Cambria Stream Technical Specifications","permalink":"/docs/Cambria FTC/Release Notes/cambria_stream_techspec/"},"next":{"title":"index","permalink":"/docs/Cambria FTC/Release Notes/release_notes/"}}');var r=t(4848),a=t(8453);const o={},i="Cambria FTC and Cluster 5.0: Database Migration",l={},d=[{value:"Objective",id:"objective",level:2},{value:"Quick Details",id:"quick-details",level:2},{value:"Database Migration Steps For Users with Standalone FTC and Cluster",id:"database-migration-steps-for-users-with-standalone-ftc-and-cluster",level:2},{value:"Optional Step:",id:"optional-step",level:3},{value:"Database Migration Steps For Users with Cluster Redundancy Primary/Backup Workflow:",id:"database-migration-steps-for-users-with-cluster-redundancy-primarybackup-workflow",level:2}];function c(e){const s={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"cambria-ftc-and-cluster-50-database-migration",children:"Cambria FTC and Cluster 5.0: Database Migration"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note:"})," If you have not downloaded any Cambria FTC/Cluster software before version 5.0, then this document does not apply to you. This document only applies for users who want to migrate their database information from Postgres 9.3 over to Postgres 14.3."]}),"\n",(0,r.jsx)(s.h2,{id:"objective",children:"Objective"}),"\n",(0,r.jsx)(s.p,{children:"Cambria FTC/Cluster versions 4.8 and lower used Postgres Database version 9.3 to store information such as settings, watch folders, job settings, etc. With the update to FTC/Cluster 5.0, the Postgres Database will now be upgraded to version 14.3. Due to the change, old settings and information that were stored in the previous database may need to be transferred into the new one. This document will show the required steps to migrate all of the data from the old Postgres Database to the new one so that all of the previous settings and information will be restored."}),"\n",(0,r.jsx)(s.h2,{id:"quick-details",children:"Quick Details"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Database migration between Postgres 9.3 and 14.3 is ",(0,r.jsx)(s.strong,{children:"not automatic"})]}),"\n",(0,r.jsxs)(s.li,{children:["Installing Cluster/FTC ver. 5.0 will come with a ",(0,r.jsx)(s.strong,{children:"clean"})," Database (postgres 14.3)"]}),"\n",(0,r.jsx)(s.li,{children:"Postgres 9.3 will still be installed on the system, which will be used to migrate all of the information to Postgres 14.3"}),"\n",(0,r.jsx)(s.li,{children:"Only migration from Postgres 9.3 (FTC/Cluster versions 4.8 or lower) to Postgres 14.3 (FTC/Cluster 5.0 and above) is supported"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"database-migration-steps-for-users-with-standalone-ftc-and-cluster",children:"Database Migration Steps For Users with Standalone FTC and Cluster"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Uninstall FTC/Cluster if the version is from 4.8 or lower."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Install FTC/Cluster 5.0 or above. Postgres 14.3 will automatically be installed."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:['From the start menu type "Cambria PostgreSQL Database Migration Tool" and run the program. If the tool can not be found, run ',(0,r.jsx)(s.strong,{children:"PostgreSQLUpdater.exe"})," generally located in these locations."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["For FTC:",(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.code,{children:"C:\\Program Files (x86)\\Capella\\Cambria\\cpx64\\PostgreSQLUpdater.exe"})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["For Cluster:",(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.code,{children:"C:\\Program Files (x86)\\Capella\\CambriaCluster\\cpx64\\PostgreSQLUpdater.exe"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Follow the instructions on the screen."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Check the database by seeing if old jobs and watch folders have been migrated over via Cambria Manager (or Cluster Manager)."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"optional-step",children:"Optional Step:"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"WARNING:"})," We recommend ",(0,r.jsx)(s.strong,{children:"NOT"})," to remove Postgres 9.3, but it is an option because it is no longer needed. Removing it will no longer allow downgrading from FTC 5.0 because Postgres 9.3 does ",(0,r.jsx)(s.strong,{children:"NOT"})," accept database files from Postgres 14.3, and there is no workaround. Please double check that everything has migrated correctly before removing Postgres 9.3 if you choose to do so."]}),"\n",(0,r.jsx)(s.h2,{id:"database-migration-steps-for-users-with-cluster-redundancy-primarybackup-workflow",children:"Database Migration Steps For Users with Cluster Redundancy Primary/Backup Workflow:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["In the Backup Cluster, set the redundancy role to be ",(0,r.jsx)(s.strong,{children:"Stopped"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["In the Primary Cluster, set the redundancy role to be ",(0,r.jsx)(s.strong,{children:"No Backup"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Upgrade the build on the Primary to ver 5.0 or above."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Run ",(0,r.jsx)(s.strong,{children:"PostgreSQLUpdater.exe"})," on the Primary (only) with the new build"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"C:\\Program Files (x86)\\Capella\\CambriaCluster\\cpx64\\PostgreSQLUpdater.exe"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Upgrade the build on Backup machine while redundancy is set to ",(0,r.jsx)(s.strong,{children:"Stopped"}),". In the new build, redundancy role will be started with ",(0,r.jsx)(s.strong,{children:"No Backup"})," and an empty database."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Establish redundancy connection between Primary and Backup."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.p,{children:"For any questions or technical support, contact Capella Systems at:"}),"\n",(0,r.jsxs)(s.p,{children:["\ud83d\udce7 ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"mailto:support@capellasystems.net",children:"support@capellasystems.net"})})]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>i});var n=t(6540);const r={},a=n.createContext(r);function o(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);