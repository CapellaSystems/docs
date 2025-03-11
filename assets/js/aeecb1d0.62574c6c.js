"use strict";(self.webpackChunkcapella_documentation=self.webpackChunkcapella_documentation||[]).push([[2990],{2393:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"Cambria FTC/Tutorials/scriptable_workflow_guide/index","title":"(UC) Scriptable Workflow","description":"Overview","source":"@site/docs/Cambria FTC/04-Tutorials/scriptable_workflow_guide/index.md","sourceDirName":"Cambria FTC/04-Tutorials/scriptable_workflow_guide","slug":"/Cambria FTC/Tutorials/scriptable_workflow_guide/","permalink":"/docs/docs/Cambria FTC/Tutorials/scriptable_workflow_guide/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cambria FTC/04-Tutorials/scriptable_workflow_guide/index.md","tags":[],"version":"current","frontMatter":{},"sidebar":"FTCSidebar","previous":{"title":"Pay As You Go Licensing Guide","permalink":"/docs/docs/payg-licensing"},"next":{"title":"Welcome","permalink":"/docs/docs/Cambria FTC/FAQ/placeholder"}}');var r=i(4848),s=i(8453);const o={},a="(UC) Scriptable Workflow",l={},c=[{value:"Overview",id:"overview",level:2},{value:"Before Getting Started",id:"before-getting-started",level:3},{value:"What You Can Do With Scripts",id:"what-you-can-do-with-scripts",level:3},{value:"How Scripts Work",id:"how-scripts-work",level:2},{value:"Example of <code>Source</code> Section",id:"example-of-source-section",level:3},{value:"Script Transform Steps",id:"script-transform-steps",level:2},{value:"ModifyBitrateBasedOnSourceResolution.py",id:"modifybitratebasedonsourceresolutionpy",level:3},{value:"FailIfPal.py",id:"failifpalpy",level:3},{value:"UseHalfSourceFrameRateIfMoreThan30fps.py",id:"usehalfsourceframerateifmorethan30fpspy",level:3}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"uc-scriptable-workflow",children:"(UC) Scriptable Workflow"})}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"Scriptable Workflows enable users to customize encoding Job parameters at the beginning of a Job using Python or Perl scripts. These scripts can access video and audio properties of the source material, such as resolution, frame rate, loudness, and complexity, and adjust Job parameters accordingly. If the 'Group of Files' feature is enabled in Watch Folder, the script can access all files in the group and combine them in various ways."}),"\n",(0,r.jsx)(t.h3,{id:"before-getting-started",children:"Before Getting Started"}),"\n",(0,r.jsx)(t.p,{children:"To use Scriptable Workflows, users must be familiar with Cambria FTC and the Job XML format it employs. Job XML contains settings for sources, encoders, multiplexers, filters, as well as notification settings, upload settings, audio mapping, and more. The script will either modify or generate this Job XML."}),"\n",(0,r.jsx)(t.h3,{id:"what-you-can-do-with-scripts",children:"What You Can Do With Scripts"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Modifying target settings (resolution, frame rate, bitrate, etc.) based on source properties."}),"\n",(0,r.jsx)(t.li,{children:"Automatically failing the Job if a certain source property value exists."}),"\n",(0,r.jsx)(t.li,{children:"Automatically setting source segments (In and Out points)."}),"\n",(0,r.jsx)(t.li,{children:"Setting up complex Jobs, such as subtitling burn-in with titling in/out points controlled through a subtitling file, using the 'Group of Files' option in Watch Folder."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"how-scripts-work",children:"How Scripts Work"}),"\n",(0,r.jsxs)(t.p,{children:["Scripts are executed at the start of the Job, before source decoding starts. FTC will analyze the source file and augment the ",(0,r.jsx)(t.code,{children:"Source"})," section in the original Job XML with source elements and attributes."]}),"\n",(0,r.jsxs)(t.h3,{id:"example-of-source-section",children:["Example of ",(0,r.jsx)(t.code,{children:"Source"})," Section"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<Source Location="\\\\storage\\MP4\\movie_6ch.mp4" Duration27MHz="270000000" Name="Src1">\n    <VideoTrackInfo Format="H.264 Video" FrameMode="Progressive" FrameRateDen="1001" FrameRateNum="30000" Height="480" PixelAspectRatioHor="4" PixelAspectRatioVer="3" Width="640" ColorFormat="YUV 420" />\n    <AudioTrackInfo BitsPerSample="16" Format="AAC Audio" NbChannels="6" SampleRate="48000" />\n</Source>\n'})}),"\n",(0,r.jsx)(t.p,{children:"When running script analysis in 'Properties and Contents' mode (configurable in the Preset Editor's 'Script' tab), other information such as video complexity (a measure of how difficult a video is to encode) and audio loudness can augment the XML. For example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<AnalysisInfo>\n    <LoudnessMeterBS1770 TruePeakdbTP="-0.693612" PeakdbFS="-0.69363" LoudnessRangeLU="14.9317" LoudnessLUFS="-30.2088" />\n    <VideoComplexity PeakComplexity_30sec="1814.53" AvgComplexity="1556.81" />\n</AnalysisInfo>\n'})}),"\n",(0,r.jsx)(t.p,{children:"Compressed video/audio and muxer properties can also be analyzed:"}),"\n",(0,r.jsx)(t.p,{children:"(Requires FTC 3.4.1 or newer)"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<Muxer Format="MP4 Muxer" moov_at_start="0" isFragmented="0">\n    <Track handler="video" codec_type="avc1" />\n    <Track handler="soun" codec_type="mp4a" />\n</Muxer>\n'})}),"\n",(0,r.jsxs)(t.p,{children:["The script outputs a new Job XML that is used for transcoding. This process is called ",(0,r.jsx)(t.strong,{children:"Script Transform"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"script-transform-steps",children:"Script Transform Steps"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"The Python script is extracted from the original Job XML and saved to a file."}),"\n",(0,r.jsxs)(t.li,{children:["The original Job XML is saved to a file and modified to include source video and audio properties. This is referred to as the ",(0,r.jsx)(t.strong,{children:"Input XML"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["CpJobExec (FTC's tool) uses ",(0,r.jsx)(t.code,{children:"python.exe"})," or ",(0,r.jsx)(t.code,{children:"perl.exe"})," to execute the script. The script receives the Input XML as an argument and outputs a new Job XML."]}),"\n",(0,r.jsx)(t.li,{children:"CpJobExec reads the Output XML and runs the job using its settings."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," Temporary files (Input XML, Output XML, and script files) are automatically deleted unless preserved using the ",(0,r.jsx)(t.code,{children:"--s 1"})," command-line option."]}),"\n",(0,r.jsx)(t.p,{children:"Available encoding settings:\nThe script can add, remove or modify any settings stored in the Job XML. To get a list of which\nsettings can be modified, use FTC or the Manager to extract a Job XML which contains the desired\nvideo and audio encoders, video or audio filters, notification, upload, audio mapping, etc."}),"\n",(0,r.jsx)(t.h3,{id:"modifybitratebasedonsourceresolutionpy",children:"ModifyBitrateBasedOnSourceResolution.py"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"source = data.getElementsByTagName('Source')[0]\nvideo = source.getElementsByTagName('VideoTrackInfo')[0] if source.getElementsByTagName('VideoTrackInfo') else None\nheight = int(video.getAttribute('Height')) if video else 0\nisHD = height >= 720\nsettings = data.getElementsByTagName('Settings')[0]\nfor _setting in settings.childNodes:\n    if _setting.nodeType == _setting.ELEMENT_NODE and _setting.getAttribute('Type') == 'Video':\n        if not isHD:\n            _setting.setAttribute('BitrateKbps', '2000')\n        else:\n            _setting.setAttribute('BitrateKbps', '5000')\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"failifpalpy",children:"FailIfPal.py"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"source = data.getElementsByTagName('Source')[0]\nvideo = source.getElementsByTagName('VideoTrackInfo')[0]\nframeRateNum = int(video.getAttribute('FrameRateNum'))\nframeRateDen = int(video.getAttribute('FrameRateDen'))\n\nisPAL = (frameRateNum == 25 and frameRateDen == 1) or (frameRateNum == 50 and frameRateDen == 1)\n\njob = data.getElementsByTagName('Job')[0]\nif isPAL:\n    job.setAttribute('IsError', '1')\n    job.setAttribute('ErrorMessage', 'Source is PAL')\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"usehalfsourceframerateifmorethan30fpspy",children:"UseHalfSourceFrameRateIfMoreThan30fps.py"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"source = doc.getElementsByTagName('Source')[0]\nvideo = source.getElementsByTagName('VideoTrackInfo')[0]\n\nif video:\n    frameRateNum = int(video.getAttribute('FrameRateNum'))\n    frameRateDen = int(video.getAttribute('FrameRateDen'))\n    sourceFrameRate = frameRateNum / frameRateDen\n    setSame = 1 if sourceFrameRate <= 30 else 0\n\n    settings = doc.getElementsByTagName('Settings')[0]\n    for setting in settings.childNodes:\n        if setting.getAttribute('Type') == 'Video':\n            if setSame == 0:\n                setting.setAttribute('FrameRate', str(sourceFrameRate / 2))\n            else:\n                setting.setAttribute('FrameRate', str(sourceFrameRate))\n\n\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(6540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);