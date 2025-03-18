"use strict";(self.webpackChunkcapella_documentation=self.webpackChunkcapella_documentation||[]).push([[9296],{377:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/06_create_image-fdd8a4ea3938a35ee4f9d53eccd56814.png"},1411:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/01_ami_catalog-90d8b61da9b3321fdf01291b71c857e1.png"},2196:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/02_security_group_rule-596fe9d8ff339ef2b69e9e8cd8682e2b.png"},2206:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/04_aws-2e6f179e8bb31f520e4956491ea9d78b.png"},3108:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"Cambria FTC/Release Notes/aws_ami_creation_editing/index","title":"AMI Creation and Editing","description":"Objective","source":"@site/docs/Cambria FTC/02-Release Notes/aws_ami_creation_editing/index.md","sourceDirName":"Cambria FTC/02-Release Notes/aws_ami_creation_editing","slug":"/Cambria FTC/Release Notes/aws_ami_creation_editing/","permalink":"/docs/Cambria FTC/Release Notes/aws_ami_creation_editing/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cambria FTC/02-Release Notes/aws_ami_creation_editing/index.md","tags":[],"version":"current","frontMatter":{},"sidebar":"FTCSidebar","previous":{"title":"AVID FTC Guide","permalink":"/docs/Cambria FTC/Release Notes/avid_ftc/"},"next":{"title":"Cambria Stream Technical Specifications","permalink":"/docs/Cambria FTC/Release Notes/cambria_stream_techspec/"}}');var i=s(4848),r=s(8453);const a={},o="AMI Creation and Editing",c={},l=[{value:"Objective",id:"objective",level:2},{value:"Creating an EC2 instance",id:"creating-an-ec2-instance",level:2},{value:"Connecting to your EC2 instance",id:"connecting-to-your-ec2-instance",level:2},{value:"Installing Cambria Products",id:"installing-cambria-products",level:2},{value:"Floating License Client Setup",id:"floating-license-client-setup",level:3},{value:"Manually setup client side after Floating Server is setup",id:"manually-setup-client-side-after-floating-server-is-setup",level:4},{value:"Nodelock License Setup",id:"nodelock-license-setup",level:3},{value:"Preparing the Instance for AMI Image Creation",id:"preparing-the-instance-for-ami-image-creation",level:2},{value:"Creating an AMI from the Instance",id:"creating-an-ami-from-the-instance",level:2}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"ami-creation-and-editing",children:"AMI Creation and Editing"})}),"\n",(0,i.jsx)(n.h2,{id:"objective",children:"Objective"}),"\n",(0,i.jsx)(n.p,{children:"This documentation assists with creating your own Amazon Machine Images (AMI) on Microsoft Windows Server 20XX Base for use with Cambria FTC/Cluster. These new AMIs can be used to create Amazon instances with Cambria Products."}),"\n",(0,i.jsx)(n.h2,{id:"creating-an-ec2-instance",children:"Creating an EC2 instance"}),"\n",(0,i.jsx)(n.p,{children:"Please follow the steps below:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the Amazon EC2 console at ",(0,i.jsx)(n.a,{href:"https://console.aws.amazon.com/ec2/",children:"https://console.aws.amazon.com/ec2/"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the navigation pane on the left, under ",(0,i.jsx)(n.strong,{children:"Images"}),", select ",(0,i.jsx)(n.strong,{children:"AMI Catalog"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.strong,{children:"Filter"})," options to scope the list of AMIs and select the Windows AMIs that meet your needs. For example, to view the Windows AMIs provided by AWS, select the ",(0,i.jsx)(n.strong,{children:"Search Bar"}),", type ",(0,i.jsx)(n.strong,{children:"Windows"}),", and look for the most recent ",(0,i.jsx)(n.strong,{children:"Server Base"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Example with Microsoft Windows Server 2022 Base"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(1411).A+"",width:"1228",height:"462"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click on ",(0,i.jsx)(n.strong,{children:"Select"})," for the AMI and then click ",(0,i.jsx)(n.strong,{children:"Launch Instance with AMI"}),". This will take you to the ",(0,i.jsx)(n.strong,{children:"Instance Creation Wizard"}),". Here you can choose the instance type based on your needs, add tags, configure Instance Details, set up key pairs, configure network settings, add storage, and review."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Name the instance something that will make it easy to figure out what it is used for. ",(0,i.jsx)(n.em,{children:"Ex. FTC Launcher"})]}),"\n",(0,i.jsxs)(n.li,{children:["Leave ",(0,i.jsx)(n.strong,{children:"Application and OS Images"})," as it is, since we set that up earlier when choosing the AMI Catalog."]}),"\n",(0,i.jsxs)(n.li,{children:["For the ",(0,i.jsx)(n.strong,{children:"Instance Type"}),", we recommend using ",(0,i.jsx)(n.strong,{children:"c5.large"}),", but you can choose an instance type of your liking. Ensure it has enough CPU and memory for your job."]}),"\n",(0,i.jsxs)(n.li,{children:["For ",(0,i.jsx)(n.strong,{children:"Key pair"}),", if you do not have one already, click on ",(0,i.jsx)(n.strong,{children:"Create new key pair"}),' and name it something easy to remember (like "FTC AMI Key"). Set the ',(0,i.jsx)(n.strong,{children:"Private key file format"})," to ",(0,i.jsx)(n.code,{children:".pem"})]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Create key pair"})," and save the ",(0,i.jsx)(n.code,{children:".pem"})," file in a secure location. This key will be used to connect to your Windows instance later."]}),"\n",(0,i.jsxs)(n.li,{children:["For ",(0,i.jsx)(n.strong,{children:"Network Settings"}),", configure ",(0,i.jsx)(n.strong,{children:"Security Groups"})," to allow Cambria FTC and Cambria Cluster to communicate:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Edit"})," and then ",(0,i.jsx)(n.strong,{children:"Add security group rule"})]}),"\n",(0,i.jsxs)(n.li,{children:["Add the following rule: ",(0,i.jsx)(n.strong,{children:"Type Info:"})," Custom TCP, ",(0,i.jsx)(n.strong,{children:"Port Range:"})," 8090-8119, ",(0,i.jsx)(n.strong,{children:"Source Type:"})," Anywhere"]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Add security group rule"})," again and add the following rule: ",(0,i.jsx)(n.strong,{children:"Type Info:"})," Custom TCP, ",(0,i.jsx)(n.strong,{children:"Port Range:"})," 8647-8650, ",(0,i.jsx)(n.strong,{children:"Source Type:"})," Anywhere"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(2196).A+"",width:"936",height:"626"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NOTE:"})," Add the following ",(0,i.jsx)(n.strong,{children:"Inbound Rules"})," to allow the AMI to reach Cambria Floating Server and allow Cambria products to communicate."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.strong,{children:"Launch"}),". After launching, click on ",(0,i.jsx)(n.strong,{children:"View all instances"})," to see the instance you just created."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"connecting-to-your-ec2-instance",children:"Connecting to your EC2 instance"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to the ",(0,i.jsx)(n.strong,{children:"Instances"})," section on AWS (located on the items list on the left). Find the instance that was just created and wait until the ",(0,i.jsx)(n.strong,{children:"Instance State"})," displays ",(0,i.jsx)(n.strong,{children:"running"})," and the ",(0,i.jsx)(n.strong,{children:"Status Checks"})," have completed."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(9714).A+"",width:"1226",height:"172"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select the ",(0,i.jsx)(n.strong,{children:"Connect"})," button and then click on ",(0,i.jsx)(n.strong,{children:"RDP client"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click on ",(0,i.jsx)(n.strong,{children:"Get Password"})," and then ",(0,i.jsx)(n.strong,{children:"Upload private key file"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Find the ",(0,i.jsx)(n.code,{children:".pem"})," file that you saved earlier and open it."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Decrypt Password"})," to generate a password. It should look something like this:"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GA%)8Z!ADU6N1Vogb4YUR6;S=1..?8&Q"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Download remote desktop file"}),", open the file, and select ",(0,i.jsx)(n.strong,{children:"Connect"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Remote Desktop will require you to enter the ",(0,i.jsx)(n.strong,{children:"Password"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Copy the password and paste it into the ",(0,i.jsx)(n.strong,{children:"Password"})," field, then click ",(0,i.jsx)(n.strong,{children:"OK"})," and ",(0,i.jsx)(n.strong,{children:"Yes"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"You should now be connected to the Windows Instance that you just created."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"installing-cambria-products",children:"Installing Cambria Products"}),"\n",(0,i.jsx)(n.p,{children:"Download and install Cluster/FTC/License Manager, preferably by copying and pasting the installer files from the physical machine being used or from the original installation source. After installing, you may follow these additional steps to prepare your AMI with licensing and Amazon S3 access. If you are using Nodelock licensing or do not need these steps, skip to Section 4."}),"\n",(0,i.jsx)(n.h3,{id:"floating-license-client-setup",children:"Floating License Client Setup"}),"\n",(0,i.jsx)(n.p,{children:"To configure a Floating License Client, if you have a Floating Licensing Server set up, point your instance to the public IP of the Floating Server Manager. This requires editing Registry settings on the AWS EC2 instance."}),"\n",(0,i.jsx)(n.h4,{id:"manually-setup-client-side-after-floating-server-is-setup",children:"Manually setup client side after Floating Server is setup"}),"\n",(0,i.jsx)(n.p,{children:"Modify the following registry path:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Computer\\HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\CAPELLA\\CambriaLicenseManager\n\nFloatServerAddress (String Value)\nIP of Floating Server Machine \n\nFloatServerPort (32-bit DWORD) (this is port 8090 in hex)\n1f9a \n\nLicenseMode (String Value)\nCryptlexFloat\n"})}),"\n",(0,i.jsx)(n.h3,{id:"nodelock-license-setup",children:"Nodelock License Setup"}),"\n",(0,i.jsxs)(n.p,{children:["If using ",(0,i.jsx)(n.strong,{children:"Nodelock licensing"}),", enter the license key as usual.",(0,i.jsx)(n.br,{}),"\n","This grants ",(0,i.jsx)(n.strong,{children:"CloudExtend"})," access to FTC, allowing it to work with ",(0,i.jsx)(n.strong,{children:"Cluster"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"preparing-the-instance-for-ami-image-creation",children:"Preparing the Instance for AMI Image Creation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"EC2 Instance"})," created above, open the ",(0,i.jsx)(n.strong,{children:"Start Menu"})," / ",(0,i.jsx)(n.strong,{children:"Windows Button"})," and select the down aarrow for ",(0,i.jsx)(n.strong,{children:"Amazon Web Services"}),". Select ",(0,i.jsx)(n.strong,{children:"Amazon EC2Launch settings application"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(2206).A+"",width:"396",height:"180"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"General Tab"}),", select ",(0,i.jsx)(n.strong,{children:"Random"})," for ",(0,i.jsx)(n.strong,{children:"Administrator password settings"})," (if not already selected) and click ",(0,i.jsx)(n.strong,{children:"Save"}),". A success popup should appear \u2014 click ",(0,i.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Shutdown with Sysprep"}),". A popup will ask if you want to prepare the instance for an image - click ",(0,i.jsx)(n.strong,{children:"Yes"})," and wait for Sysprep to complete shutting down Windows."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(9114).A+"",width:"454",height:"676"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This ensures future AMIs use ",(0,i.jsx)(n.strong,{children:"random key pairs"})," and ",(0,i.jsx)(n.strong,{children:"separate passwords"})," independent of the initial state."]}),"\n",(0,i.jsx)(n.h2,{id:"creating-an-ami-from-the-instance",children:"Creating an AMI from the Instance"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In AWS, go to ",(0,i.jsx)(n.strong,{children:"Instances"})," in the ",(0,i.jsx)(n.strong,{children:"AWS Items List"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Right-click the instance created in the above sections to be used as the basis for your AMI and select ",(0,i.jsx)(n.strong,{children:"Image and templates \u2192 Create Image"})," from the context menu."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(377).A+"",width:"936",height:"484"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Create Image"})," dialog box enter a ",(0,i.jsx)(n.strong,{children:"unique name"})," and ",(0,i.jsx)(n.strong,{children:"description"})," and select ",(0,i.jsx)(n.strong,{children:"Create Image"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["It may take a few minutes for the AMI to be created. AMI's are located under the Images section on the EC2 Dashboard. Set the filter to ",(0,i.jsx)(n.strong,{children:"Owned by me"})," to see your created AMI. Note: the image may not have a name, but you can find the name you set previously under the ",(0,i.jsx)(n.strong,{children:"AMI Name tab"}),". Make sure to name the image after you find it."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The AMI can now be launched into a new instance with ",(0,i.jsx)(n.strong,{children:"FTC installed"}),". Be sure to Terminate the original instance if it is no longer needed to avoid additional charges."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Now, an instance can be created from the AMI Image, and it can also be used for Cluster CloudExtend."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"For any questions or technical support, contact Capella Systems at:"}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udce7 ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"mailto:support@capellasystems.net",children:"support@capellasystems.net"})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(6540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}},9114:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/05_ec2_launch-046f99a9ed3036414175923038ecdae7.png"},9714:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/03_instances-19802b955492f5e36ef74a48dfc3f430.png"}}]);