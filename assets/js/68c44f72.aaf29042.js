"use strict";(self.webpackChunkcapella_documentation=self.webpackChunkcapella_documentation||[]).push([[4909],{1833:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"Cambria FTC/Release Notes/cambria_stream_techspec/index","title":"Cambria Stream Technical Specifications","description":"Version 9/9/2024","source":"@site/docs/Cambria FTC/02-Release Notes/cambria_stream_techspec/index.md","sourceDirName":"Cambria FTC/02-Release Notes/cambria_stream_techspec","slug":"/Cambria FTC/Release Notes/cambria_stream_techspec/","permalink":"/CapellaDocumentsTest/docs/Cambria FTC/Release Notes/cambria_stream_techspec/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cambria FTC/02-Release Notes/cambria_stream_techspec/index.md","tags":[],"version":"current","frontMatter":{},"sidebar":"FTCSidebar","previous":{"title":"Welcome","permalink":"/CapellaDocumentsTest/docs/Cambria FTC/Installation Guides/Windows/placeholder"},"next":{"title":"(UC) Cambria 5.4","permalink":"/CapellaDocumentsTest/docs/Cambria FTC/Release Notes/release_notes/"}}');var t=i(4848),a=i(8453);const s={},o="Cambria Stream Technical Specifications",d={},l=[{value:"Purpose of this Document",id:"purpose-of-this-document",level:2},{value:"Overview of Functionality",id:"overview-of-functionality",level:2},{value:"General Overview",id:"general-overview",level:2},{value:"Input Features",id:"input-features",level:2},{value:"Ad Insertion, Closed Caption, CSM, OCR",id:"ad-insertion-closed-caption-csm-ocr",level:2},{value:"Distribution, Monetization, Low Latency and Output Features",id:"distribution-monetization-low-latency-and-output-features",level:2},{value:"Automation Features",id:"automation-features",level:2},{value:"Cambria Stream Manager",id:"cambria-stream-manager",level:2},{value:"Deployment and Operating Systems",id:"deployment-and-operating-systems",level:2},{value:"Operational Modes and Licensing Models",id:"operational-modes-and-licensing-models",level:2}];function c(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"cambria-stream-technical-specifications",children:"Cambria Stream Technical Specifications"})}),"\n",(0,t.jsx)(n.p,{children:"Version: 5.3.0, Published: 9/9/2024"}),"\n",(0,t.jsx)(n.h2,{id:"purpose-of-this-document",children:"Purpose of this Document"}),"\n",(0,t.jsx)(n.p,{children:"This document provides an overview of the Cambria Stream packager and encoder and its functionality, differentiates the available versions, identifies key features, and details the minimum system requirements and available licensing options."}),"\n",(0,t.jsx)(n.p,{children:"Note: Cambria Stream can be abbreviated as CS and Cambria Stream Manager can be\nabbreviated as CSM in this document."}),"\n",(0,t.jsx)(n.h2,{id:"overview-of-functionality",children:"Overview of Functionality"}),"\n",(0,t.jsx)(n.p,{children:"Cambria Stream is a software-based production suite for professional packaging and live streaming/encoding broadcast production. This all-in-one system handles live ad insertion production functions, encoding, packaging and distribution."}),"\n",(0,t.jsxs)(n.p,{children:["Cambria Stream operates in 2 main modes: ",(0,t.jsx)(n.strong,{children:"Encoding"})," and ",(0,t.jsx)(n.strong,{children:"Packaging"}),". Packaging mode can either be ABR (HLS/DASH/CMAF) passthrough packaging or Single Stream (RTP,SRT,RTMP) in/out passthrough packaging."]}),"\n",(0,t.jsx)(n.p,{children:"Cambria Stream Manager\u2019s has a web-based UI. Please follow the deployment/installation guide on how to access the UI. [NEED LINK TO INSTALL GUIDE]"}),"\n",(0,t.jsx)(n.p,{children:"Cambria Stream does not have a UI, however Ad Break Control for an individual CS instance has a web-based UI."}),"\n",(0,t.jsx)(n.p,{children:"CS and CSM can be installed either on-premise (Windows or Ubuntu) through a local installation, or through a Docker container deployment. Kubernetes deployment is also supported. Please refer to the Kubernetes/Docker guide for installation instructions. [NEED LINK TO KUBERNETES GUIDE]"}),"\n",(0,t.jsx)(n.h2,{id:"general-overview",children:"General Overview"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Comprehensive Live and File-Based Inputs"})}),"\n",(0,t.jsx)(n.p,{children:"Input a variety of live and VOD sources at up to 4K, including RTMP, RTP, SRT, Zixi and SDI"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Exceptional Output Format Support"})}),"\n",(0,t.jsx)(n.p,{children:"Encode video into DASH, HLS (TS) transport stream, HLS (fMP4) fragmented MP4, and CMAF encoding ladders for immediate distribution. Native support for various CDNs and Object Storage services such as Akamai (MSL), AWS MediaStore, AWS Media Package v1, AWS S3, Unified Streaming, WebDAV, and Akamai Object Storage. Encode video into Multi Bitrate SRT, RTP and File targets. Single stream passthrough is supported to RTMP, SRT/TS, Zixi/TS, RTP/UDP and File based targets."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Unique Monetization Features"})}),"\n",(0,t.jsx)(n.p,{children:"Supports SCTE-35 (RTP/SRT), ESAM and manual server side ad insertion (only for Encode project type)."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Broadcast Automation"})}),"\n",(0,t.jsx)(n.p,{children:"Control Cambria Stream via the WEB-based UI or REST API with a scheduler, live machine failover, and other automation features."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Access Additional Functionality via Sister Products"})}),"\n",(0,t.jsx)(n.p,{children:"Sister products include Cambria Stream Manager and Cambria Ad Break Control."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"DRM support for ABR outputs"})}),"\n",(0,t.jsx)(n.p,{children:"Cambria Stream Encoder supports multi-DRM via CPIX and is compatible with all major DRM systems. DRM providers: CPIX, Irdeto and Axinom. DRM Types are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"HLS/TS, HLS/MP4, - Fairplay"}),"\n",(0,t.jsx)(n.li,{children:"DASH  - Widevine or PlayReady"}),"\n",(0,t.jsx)(n.li,{children:"CMAF/DASH -  Widevine or PlayReady"}),"\n",(0,t.jsx)(n.li,{children:"CMAF/HLS - Fairplay"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Encoders: CPU-based and GPU-based"})}),"\n",(0,t.jsx)(n.p,{children:"CPU-based encoding: Cambria Stream integrates x264 and x265 encoders to ensure the highest-quality video output. Fully licensed and integrated with x264 for H264 codec and x265 for HEVC codec."}),"\n",(0,t.jsxs)(n.p,{children:["GPU-based encoding: Cambria Stream uses Nvidia cards with NVENC for hardware-based encoding. 7th NVENC Generation (or newer) Qualified GPUs are recommended for better performance and least limitations. For a list of GPUs, please visit ",(0,t.jsx)(n.a,{href:"https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new",children:"https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," The only officially supported card (Capella tested): PNY NVIDIA Quadro RTX 4000"]}),"\n",(0,t.jsx)(n.p,{children:"H264 NVENC and HEVC NVENC codecs were added to all Cambria Stream Encode targets. Please make sure that the project type is set to Encode. In the video settings, the user can find this option in the codec dropdown."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),": the user must have an H264 (NVENC) and HEVC (NVENC) license and supported graphics card in order to use this. Cambria Stream will provide an error if no proper graphics card was detected or if the graphics card driver version needs to be updated."]}),"\n",(0,t.jsx)(n.h2,{id:"input-features",children:"Input Features"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"AJA Capture Card Support"})}),"\n",(0,t.jsx)(n.p,{children:"Cambria Stream supports four OEM capture boards from AJA(Corvid 88 \u2013 8 I/O channels; Corvid 44 \u2013 4 independent channels; Kona LHi \u2013 single channel (SDI/HDMI);  Kona 1 \u2013 single channel."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Video File Input Support and File Playlist"})}),"\n",(0,t.jsxs)(n.p,{children:["Cambria Stream can import numerous video file formats, including MP4, TS, WMV, and MOV files and use them as sources during a broadcast. Project type must be ",(0,t.jsx)(n.strong,{children:"Single Stream Out passthrough"})," or ",(0,t.jsx)(n.strong,{children:"ABR out passthrough"}),". Please select the source to be Playlist. Create a single playlist with a group of files for repeated playback."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"IP Stream input: UDP/RTP/RTMP/SRT"})}),"\n",(0,t.jsx)(n.p,{children:"Use an incoming RTP/UDP, RTMP, SRT and Zixi live stream as a live capture input. Supported in all project types. Latency in all sources can be set to Normal, Low or Prioritize Stability. RTP and Zixi sources also support FEC mode."}),"\n",(0,t.jsx)(n.p,{children:"Here are the file types recommended for importing into a Cambria Stream project for deployment without slowing system performance:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Input Format"}),(0,t.jsx)(n.th,{children:"Container"}),(0,t.jsx)(n.th,{children:"Video Codec"}),(0,t.jsx)(n.th,{children:"Audio Codec"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Flash Video"}),(0,t.jsx)(n.td,{children:"F4V"}),(0,t.jsx)(n.td,{children:"H.264"}),(0,t.jsx)(n.td,{children:"MPEG-2 AAC"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Generic MP4"}),(0,t.jsx)(n.td,{children:"MP4"}),(0,t.jsx)(n.td,{children:"H.264"}),(0,t.jsx)(n.td,{children:"MPEG-2 AAC"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Generic TS"}),(0,t.jsx)(n.td,{children:"MPEG-2 TS"}),(0,t.jsx)(n.td,{children:"H.264"}),(0,t.jsx)(n.td,{children:"MPEG-2 AAC, MPEG-1 Layer-2, AC-3*"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Generic TS"}),(0,t.jsx)(n.td,{children:"MPEG-2 TS"}),(0,t.jsx)(n.td,{children:"MPEG-2"}),(0,t.jsx)(n.td,{children:"MPEG-2 AAC, MPEG-1 Layer-2, AC-3*"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Generic PS"}),(0,t.jsx)(n.td,{children:"MPEG-2 PS"}),(0,t.jsx)(n.td,{children:"MPEG-2"}),(0,t.jsx)(n.td,{children:"MPEG-2 AAC, MPEG-1 Layer-2, AC-3*"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MPEG-1 PS"}),(0,t.jsx)(n.td,{children:"MPEG-1"}),(0,t.jsx)(n.td,{children:"MPEG-1"}),(0,t.jsx)(n.td,{children:"MPEG-2 AAC, MPEG-1 Layer-2, AC-3*"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"HDV"}),(0,t.jsx)(n.td,{children:"MPEG-2 TS"}),(0,t.jsx)(n.td,{children:"MPEG-2"}),(0,t.jsx)(n.td,{children:"MPEG-1 Layer 2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"QuickTime**"}),(0,t.jsx)(n.td,{children:"MOV"}),(0,t.jsx)(n.td,{children:"DSV25"}),(0,t.jsx)(n.td,{children:"Linear PCM"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Windows Media"}),(0,t.jsx)(n.td,{children:"WMV"}),(0,t.jsx)(n.td,{children:"Windows Media Video"}),(0,t.jsx)(n.td,{children:"Windows Media Audio"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Cambria Stream Encoder mode supported formats"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(9318).A+"",width:"782",height:"554"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Cambria Stream Packager mode supported formats"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(3497).A+"",width:"798",height:"572"})}),"\n",(0,t.jsx)(n.h2,{id:"ad-insertion-closed-caption-csm-ocr",children:"Ad Insertion, Closed Caption, CSM, OCR"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Ad Slate"})}),"\n",(0,t.jsx)(n.p,{children:"Can designate a file as an Ad slate to play insert into production when ad is supposed to be playing, so if Ad insertion fails on server side, viewers will see the slate rather than live action. Currently Ad slate source is only supported if project type is set to Encode."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Closed Caption Support"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Encode mode:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Inputs Teletext in RTP and SRT sources."}),"\n",(0,t.jsx)(n.li,{children:"Output: HLS and DASH"}),"\n",(0,t.jsxs)(n.li,{children:["Subtitle format:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For HLS: WebVTT"}),"\n",(0,t.jsx)(n.li,{children:"For Dash: WebVTT, TTML and EBU-TT-D"}),"\n",(0,t.jsx)(n.li,{children:"User needs to specify subtitle tracks in HLS and Dash targets."}),"\n",(0,t.jsx)(n.li,{children:"User needs to specify Teletext page number of the captions from the source"}),"\n",(0,t.jsx)(n.li,{children:"In Encode mode, user also has an option to burn in DVB captions on the video by specifying the DVB subtitle page ID. Setting can be found in sources tab."}),"\n",(0,t.jsx)(n.li,{children:"ARIB STD-B37 captions in SDI input are also supported in single target encode mode. Outputs can be RTP or SRT (TS based) and output will be embedded as ARIB STD-B24, ARIB STD-B40, and/or SMPTE2038."}),"\n",(0,t.jsx)(n.li,{children:"Cambria Stream also supports converting ARIB STD B37 from SDI to WEBVTT captions inside HLS and Dash"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"ABR passthrough mode:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Inputs Teletext in RTP and SRT sources."}),"\n",(0,t.jsx)(n.li,{children:"Output: HLS and DASH"}),"\n",(0,t.jsxs)(n.li,{children:["Subtitle format:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For HLS: WebVTT"}),"\n",(0,t.jsx)(n.li,{children:"For Dash: WebVTT, TTML and EBU-TT-D"}),"\n",(0,t.jsx)(n.li,{children:"User needs to specify subtitle tracks in HLS and Dash targets."}),"\n",(0,t.jsx)(n.li,{children:"User needs to specify Teletext page number of the captions from the source"}),"\n",(0,t.jsx)(n.li,{children:"User will need to pick which source the teletext captions are coming from"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Single stream out (passthrough) mode:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Captions: Native 608/708 captions in h264 in TS will be passed through to TS based targets."}),"\n",(0,t.jsx)(n.li,{children:"Input: RTP,"}),"\n",(0,t.jsx)(n.li,{children:"Output RTP, SRT"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Cambria Stream Manager"})}),"\n",(0,t.jsx)(n.p,{children:"The Cambria Stream Manager is specifically designed for streaming broadcasters handling a high-volume, automated live streaming workflow with commercial ad insertion. This highly scalable solution manages multiple Cambria Stream instances over a network monitoring scheduled events, job failover, email notifications and monitoring, SDI rerouting, and regular machine maintenance with redundancy support. Cambria Stream Manager offers a cost-effective alternative to hardware encoders within a fully automated live streaming workflow."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"OCR auto ad break"})}),"\n",(0,t.jsx)(n.p,{children:"Current implementation of auto ad break is a feature that uses OCR to detect specific text in a stream and use this information to insert ad breaks into the stream."}),"\n",(0,t.jsx)(n.p,{children:"The user configures the area in the video frames where the text is expected to appear and the OCR tool will receive this information and determine whether the text has been found."}),"\n",(0,t.jsx)(n.p,{children:"If the text has been found, Cambria Stream uses a user-configurable Python script to do the ad insertion work."}),"\n",(0,t.jsx)(n.h2,{id:"distribution-monetization-low-latency-and-output-features",children:"Distribution, Monetization, Low Latency and Output Features"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Streaming to Akamai MSL servers via ABR"})}),"\n",(0,t.jsx)(n.p,{children:"Can stream to Akamai servers via HLS, CMAF (including CMAF-CTE chunked), and MPEG-DASH formats. If project type is Encode then HLS can be specified as either TS or fMP4."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Streaming to WebDAV servers via ABR"})}),"\n",(0,t.jsx)(n.p,{children:"Can stream to WebDAV servers via HLS, CMAF (including CMAF-CTE chunked), and MPEG-DASH formats. If project type is Encode then HLS can be specified as either TS or fMP4."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Streaming to AWS MediaStore via ABR"})}),"\n",(0,t.jsx)(n.p,{children:"Can stream to AWS Media Store via HLS, CMAF (including CMAF-CTE chunked), and MPEG-DASH formats. User will need to enter AWS MediaStore End Point along with Subfolder, AWS Region, AWS Access Key ID, and AWS Secret Key. If project type is Encode then HLS can be specified as either TS or fMP4."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Streaming to AWS S3 via ABR"})}),"\n",(0,t.jsx)(n.p,{children:"Can stream to AWS S3 via HLS, CMAF (including CMAF-CTE chunked), and MPEG-DASH formats. User will need to enter AWS S3 Bucket name along with Subfolder, AWS Region, AWS Access Key ID, and AWS Secret Key. If project type is Encode then HLS can be specified as either TS or fMP4."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Streaming to Akamai Object Storage"})}),"\n",(0,t.jsx)(n.p,{children:"Can stream to Akamai Object Storage via HLS, CMAF (including CMAF-CTE chunked), and MPEG-DASH formats. User will need to enter their Access Key ID and Secret Key for the storage along with the bucket name, subfolder and region. If project type is Encode then HLS can be specified as either TS or fMP4."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Streaming to AWS Media Package v1"})}),"\n",(0,t.jsx)(n.p,{children:"Can stream to AWS Media Package v1 via HLS, CMAF (including CMAF-CTE chunked), and MPEG-DASH formats. User will need to enter username and password along with the target URL. If project type is Encode then HLS can be specified as either TS or fMP4."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"RTP/UDP, SRT/TS, Zixi/TS, Generic RTMP Support"})}),"\n",(0,t.jsx)(n.p,{children:"If project type is set to Single Stream Out passthrough, then CS supports distribution via RTP/UDP, SRT/TS, Zixi/TS and RTMP to any compatible server. Can distribute to generic RTMP server if no service-specific preset exists."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Comprehensive Output Format Support for Streaming/Recording"})}),"\n",(0,t.jsx)(n.p,{children:"Encode program stream to H.264/HEVC output in single file MP4 or TS or HLS, DASH, or CMAF formats for immediate distribution and/or archiving."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Low Latency"})}),"\n",(0,t.jsx)(n.p,{children:"Cambria Stream supports low latency streaming for both encoding and packaging. There is standard low latency with all of the available output options, as well as CMAF Chunked Transfer Encoding (CTE), also known as ultra-low latency. In order for low latency to work properly, users will need to configure the following:"}),"\n",(0,t.jsx)(n.p,{children:"For encoding projects:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In the source, set the Latency Mode to 'Low'"}),"\n",(0,t.jsx)(n.li,{children:"In the target, go to the Video settings and check the 'Low Latency' checkbox"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For All projects:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Make sure the incoming stream is in some sort of low latency mode and that the timestamp is accurate and matching to the Cambria Stream instance the stream will run on."}),"\n",(0,t.jsx)(n.li,{children:"For Adaptive Streaming targets (DASH/CMAF/HLS), lower the Initial Cache Size (sec) value. Test different values as this could also impact the stream stability."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For CMAF CTE:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Follow the steps above depending on the type of project"}),"\n",(0,t.jsx)(n.li,{children:"In the CMAF CTE settings, check the CMAF CTE checkbox and set the chunk size as desired. The lower the value, the lower the latency will be. Test different values as this could also impact the stream stability"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Capella measures latency in stages, but the value recorded is the end-to-end latency. To measure end-to-end latency, use an incoming source that has timestamp information. Capture the timestamp of the incoming signal and also of the stream playing back on the player (Eg. DASH.JS Reference player) at the same time, such as by using a screenshot capturing tool. Compare the two values to get the relative end-to-end latency. Perform this action several times to get an average latency value."}),"\n",(0,t.jsx)(n.p,{children:"The measured latency values (SRT is used as source) are as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CMAF CTE (Encoder): ~7-8 seconds"}),"\n",(0,t.jsx)(n.li,{children:"CMAF (Encoder): ~9-10 seconds"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"automation-features",children:"Automation Features"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Modern REST API"})}),"\n",(0,t.jsx)(n.p,{children:"All aspects of the live production can be controlled via the Rest API, including Ad insertion. Cambria Stream\u2019s REST architecture is similar to popular APIs such as Facebook or Twitter and is familiar to developers."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Comprehensive Logging Functionality"})}),"\n",(0,t.jsx)(n.p,{children:"The system can log all events during a broadcast and save the log files automatically."}),"\n",(0,t.jsx)(n.h2,{id:"cambria-stream-manager",children:"Cambria Stream Manager"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Overview"})}),"\n",(0,t.jsx)(n.p,{children:"The Cambria Stream Manager is specifically designed for streaming broadcasters handling a high-volume, automated live streaming/packaging workflow with commercial ad insertion. This highly scalable solution manages multiple Cambria Stream instances over a network, monitoring scheduled events, job failover, and regular machine maintenance with redundancy support through pod failover in the kubernetes environment. Cambria Stream Manager offers a cost-effective alternative to hardware encoders within a fully automated live streaming and packaging workflow."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Program Scheduler"})}),"\n",(0,t.jsx)(n.p,{children:"Allows broadcasters to automatically start and stop streams of registered live events broadcast via Cambria Stream. Users can preset multiple live events with individual project settings and recurring timetables. Configurable program settings include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Name and Description."}),"\n",(0,t.jsx)(n.li,{children:"Frequency: One time, daily, weekly."}),"\n",(0,t.jsx)(n.li,{children:"Maximum Retry Duration if event fails."}),"\n",(0,t.jsx)(n.li,{children:"Starting date, time and ending time (or none if unlimited duration)."}),"\n",(0,t.jsx)(n.li,{children:"Cambria Stream machine assignment."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Machines"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Overview. Users can add, remove, and control all Cambria Stream installations from a single user interface."}),"\n",(0,t.jsx)(n.li,{children:"Program assignments. Assigning programs to a Cambria Stream instance or allowing Stream Manager to control."}),"\n",(0,t.jsx)(n.li,{children:"Failover. Automatically reassign a job to an available Cambria Stream instance in case of a failure on the network."}),"\n",(0,t.jsx)(n.li,{children:"Project density. Set the number of programs that can be run on any single Cambria Stream instance."}),"\n",(0,t.jsx)(n.li,{children:"Monitoring. Monitor the encode speed, network speed, CPU usage, memory usage, IP Address, Uptime, and the Cambria Stream Version on any Cambria Stream instance."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Redundancy in Windows deployment"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Note: The following redundancy workflow is legacy and is intended to be used only for on-premise Windows installation with a Desktop UI. Desktop UI for a Windows installation can be found here:\n"C:\\Program Files (x86)\\Capella\\CambriaStreamManager\\cpx64\\CambriaLiveManager.exe" Below features will not work through a regular/default WebUI for CSM.'}),"\n",(0,t.jsx)(n.li,{children:"Cambria Stream Manager can be made fully redundant by adding a backup Cambria Stream Manager. In the event of a failure to the main Cambria Stream Manager, the backup takes over immediately without downtime."}),"\n",(0,t.jsx)(n.li,{children:"You can assign each Stream Manager instance a redundancy role (Primary, Backup, No Backup, Stopped). Backups monitor primary machine and automatically assume operation in the case of failure."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Redundancy in a Linux Kubernetes Deployment"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Users can specify the number of Manager pods desired in a kubernetes cluster. Recommended count is 3 manager pods per cluster. By default only one manager pod will be selected as a leader and will be functional. In case the leader pod goes offline, then another available manager pod in the pool will be selected as a leader. Database is also replicated in the Kubernetes environment. Users can specify how many Postgres replicas are needed for the cluster."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Monitoring"})}),"\n",(0,t.jsx)(n.p,{children:"Note: the below works on an on-premise local installation in Linux or Windows. In the Kubernetes environment please check with your Kubernetes vendor if emailing within the cluster is supported."}),"\n",(0,t.jsx)(n.p,{children:"Users can send email notifications as follows:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Category"}),(0,t.jsx)(n.th,{children:"Notification"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Machine"}),(0,t.jsxs)(n.td,{children:["- License expiration ",(0,t.jsx)("br",{})," - Machine has not been rebooted ",(0,t.jsx)("br",{})," - Periodically send machine status ",(0,t.jsx)("br",{})," - Running out of disk space (Manager Machine)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Program (Information)"}),(0,t.jsxs)(n.td,{children:["- Prior to program ",(0,t.jsx)("br",{})," - Streaming starts ",(0,t.jsx)("br",{})," - Streaming stops"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"General Running Program Error"}),(0,t.jsxs)(n.td,{children:["- Program / streaming error ",(0,t.jsx)("br",{})," -  Low processing or delivering speed"]})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Output Preview"})}),"\n",(0,t.jsx)(n.p,{children:"Displays program output from all running programs. Capabilities include:"}),"\n",(0,t.jsx)(n.p,{children:"Status bars. Show the status of encoding and network performance."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Ad Break Control"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Overview."})," Cambria Stream supports a variety of advertising related workflows, including:"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Manual ad triggering."})," Can use an Ad preset, reuse an Ad break, and adjust start and end points. Ad settings must be specified at the event creation in the project settings. On the fly ad setting adjustments are not supported such as changing the Ad Marker Source."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"SCTE-35 commercial cue tone support."})," Ingest SCTE35 signals and output to various streaming output formats such as HLS, MPEG-Dash and CMAF."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"API-based cues ESAM."})," Includes support for ESAM-based ad signaling (per CableLabs).  Post/fetch ESAM XML with ad splice points and insert SCTE35 markers for ad pod insertion."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ARIB STD-B39."})," Supports ad signals through ARIB STD-B39 from SDI signal source. Works on on-prem Docker-Linux or Windows installation only. Docker or kubernetes for ARIB in SDI is not supported."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"deployment-and-operating-systems",children:"Deployment and Operating Systems"}),"\n",(0,t.jsx)(n.p,{children:"These requirements are for build 5.2.0.17038 of Cambria Stream and Cambria Stream Manager"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Operating System"})}),"\n",(0,t.jsx)(n.p,{children:"For on-premise direct installation Windows 11, Server 2022 is required. (Windows should be updated through Microsoft Windows Update before installing the application)"}),"\n",(0,t.jsx)(n.p,{children:"Note: For Linux, installation can be done through Docker."}),"\n",(0,t.jsx)(n.p,{children:"Docker host should preferably be Ubuntu as well, however other Linux distributions may also be supported as a Docker host. Please refer to the installation/deployment guide for Kubernetes. [NEED LINK]"}),"\n",(0,t.jsx)(n.p,{children:"Recommended Windows Settings for Cambria Stream and Stream Manager"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Disable automatic Windows Update"}),"\n",(0,t.jsx)(n.li,{children:"Disable screen saver"}),"\n",(0,t.jsx)(n.li,{children:"Avoid installing other programs on the Cambria Stream machine"}),"\n",(0,t.jsx)(n.li,{children:"Do not install applications (filter) that uses DirectShow as this could conflict with Cambria Stream"}),"\n",(0,t.jsx)(n.li,{children:"Please do not set any power save mode for HDD and CPU"}),"\n",(0,t.jsx)(n.li,{children:"Install Cambria Stream on the admin account"}),"\n",(0,t.jsx)(n.li,{children:"Anti-Virus settings. Cambria Stream will be connected to an Internet connection. Ensure to install antivirus software such as Microsoft Security Essentials as necessary to avoid unwanted malware on the machine."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Deployment"})}),"\n",(0,t.jsx)(n.p,{children:"Please refer to the Kubernetes Installation guide for further information. [NEED LINK]"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"On-premise installation: Windows and Ubuntu 20.04.6"}),"\n",(0,t.jsx)(n.li,{children:"Docker: through Docker Compose"}),"\n",(0,t.jsx)(n.li,{children:"Kubernetes (Akamai Clous Kubernetes, etc)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Cambria Stream Benchmarks"})}),"\n",(0,t.jsx)(n.p,{children:"Note: Please refer to Kubernetes installation guide for cloud machine benchmarks."}),"\n",(0,t.jsx)(n.p,{children:"Real-time Performance Benchmarks: Cambria Stream projects can be configured in a variety of ways; this generally results in differences in resource usage. Below are examples of typical cases running on the recommended system specification."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Machine Configuration: HP Z4"}),"\n",(0,t.jsx)(n.li,{children:"Operating System: Windows 10 SP1 64-bit"}),"\n",(0,t.jsx)(n.li,{children:"Processor Intel Core i9-7940X @ 3.10GHz (14-core Skylake-X)"}),"\n",(0,t.jsx)(n.li,{children:"Memory 32 GB (4x8 GB) DDR4-2666"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Benchmark Configuration: Packaging Only Programs (3 video/audio layers)\nPackager only programs! 75 input RTP streams and 25 HLS output streams (each with 3 video/audio layers \u2013 1080p/720p/480p)."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Input"}),(0,t.jsx)(n.th,{children:"Output"}),(0,t.jsx)(n.th,{children:"CPU Utilization"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"25x RTP groups (3x RTP streams each)"}),(0,t.jsx)(n.td,{children:"25x HLS (1080p/720p/480p)"}),(0,t.jsx)(n.td,{children:"50% and 30% with previews disabled"})]})})]}),"\n",(0,t.jsx)(n.p,{children:"Benchmark Configuration: Encoding Programs output to HLS (4 video/audio layers). Two input RTP streams, both are encoding to different HLS output streams (each with 4 video/audio layers \u2013 1080p/720p/480p/360p)."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Input"}),(0,t.jsx)(n.th,{children:"Output"}),(0,t.jsx)(n.th,{children:"CPU Utilization"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3x RTP (1080p)"}),(0,t.jsx)(n.td,{children:"3x HLS (1080p/720p/480p/360p)"}),(0,t.jsx)(n.td,{children:"75%"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"operational-modes-and-licensing-models",children:"Operational Modes and Licensing Models"}),"\n",(0,t.jsx)(n.p,{children:"This section describes how Cambria Stream can operate and the licensing models."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Operational Modes"})}),"\n",(0,t.jsx)(n.p,{children:"The Cambria Stream Manager series automates live streaming of multiple events based on your schedule. It seamlessly integrates with your existing playout and ad scheduling systems and combines live and file assets."}),"\n",(0,t.jsx)(n.p,{children:"CSM manages multiple Cambria Stream instances for a fully automated live streaming workflow that handles ad insertion, scheduled live streaming, monitoring, notifications and more."}),"\n",(0,t.jsx)(n.p,{children:"CSM includes a scheduler that allows broadcasters to automatically start and stop streams of registered live events. Operators can present multiple live events with individual project settings and recurring timetables."}),"\n",(0,t.jsxs)(n.p,{children:["Cambria Stream operates in 2 main modes: ",(0,t.jsx)(n.strong,{children:"Encoding"})," and ",(0,t.jsx)(n.strong,{children:"Packaging"}),". Packaging mode can either be ABR (HLS/DASH/CMAF) passthrough packaging or Single Stream (RTP,SRT,RTMP) in/out passthrough packaging."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Licensing Models"})}),"\n",(0,t.jsxs)(n.p,{children:["Cambria Stream is purchased on a per-channel basis. The number of individual video layers (ABR packaging or Multi-bitrate SRT/RTP) in the channel ",(0,t.jsx)(n.strong,{children:"is not restricted"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Cambria Stream Manager is purchased on a per-machine basis."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"For any questions or technical support, contact Capella Systems at:"}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udce7 ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"mailto:support@capellasystems.net",children:"support@capellasystems.net"})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},3497:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/02_packager_file_formats-41be3958ec7dbb7cb796f63837aebe79.png"},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var r=i(6540);const t={},a=r.createContext(t);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:n},e.children)}},9318:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/01_encoder_file_formats-b59856309b6c0b158fa7ea0e05ae8d00.png"}}]);