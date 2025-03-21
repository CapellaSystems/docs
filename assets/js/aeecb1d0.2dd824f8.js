"use strict";(self.webpackChunkcapella_documentation=self.webpackChunkcapella_documentation||[]).push([[2990],{2393:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"Cambria FTC/Tutorials/scriptable_workflow_guide/scriptable-workflow","title":"Scriptable Workflow","description":"Overview","source":"@site/docs/Cambria FTC/04-Tutorials/scriptable_workflow_guide/index.md","sourceDirName":"Cambria FTC/04-Tutorials/scriptable_workflow_guide","slug":"/Cambria FTC/Tutorials/scriptable_workflow_guide/","permalink":"/docs/Cambria FTC/Tutorials/scriptable_workflow_guide/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cambria FTC/04-Tutorials/scriptable_workflow_guide/index.md","tags":[],"version":"current","frontMatter":{"id":"scriptable-workflow","title":"Scriptable Workflow"},"sidebar":"FTCSidebar","previous":{"title":"Pay As You Go Licensing Guide","permalink":"/docs/payg-licensing"},"next":{"title":"Welcome","permalink":"/docs/Cambria FTC/FAQ/placeholder"}}');var s=i(4848),o=i(8453);const r={id:"scriptable-workflow",title:"Scriptable Workflow"},a="(UC) Scriptable Workflow",l={},c=[{value:"Overview",id:"overview",level:2},{value:"Before Getting Started",id:"before-getting-started",level:3},{value:"What You Can Do With Scripts",id:"what-you-can-do-with-scripts",level:3},{value:"How Scripts Work",id:"how-scripts-work",level:2},{value:"Example of <code>Source</code> Section",id:"example-of-source-section",level:3},{value:"Script Transform Steps",id:"script-transform-steps",level:2},{value:"Sample Scripts",id:"sample-scripts",level:2},{value:"2. Writing a Script",id:"2-writing-a-script",level:2},{value:"Header/Footage",id:"headerfootage",level:3},{value:"Common Footer",id:"common-footer",level:3},{value:"Special Job Settings",id:"special-job-settings",level:3},{value:"3. Editing/Troubleshooting a Custom Script",id:"3-editingtroubleshooting-a-custom-script",level:2},{value:"4. Sample Script Logic (Simplified)",id:"4-sample-script-logic-simplified",level:2},{value:"ModifyBitrateBasedOnSourceResolution.py",id:"modifybitratebasedonsourceresolutionpy",level:3},{value:"FailIfPAL.py",id:"failifpalpy",level:3},{value:"UseHalfSourceFrameRateIfMoreThan30fps.py",id:"usehalfsourceframerateifmorethan30fpspy",level:3},{value:"PassthroughAudioIfAC3.py (Perl)",id:"passthroughaudioifac3py-perl",level:3}];function d(e){const t={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"uc-scriptable-workflow",children:"(UC) Scriptable Workflow"})}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"Scriptable Workflows enable users to customize encoding Job parameters at the beginning of a Job using Python or Perl scripts. These scripts can access video and audio properties of the source material, such as resolution, frame rate, loudness, and complexity, and adjust Job parameters accordingly. If the 'Group of Files' feature is enabled in Watch Folder, the script can access all files in the group and combine them in various ways."}),"\n",(0,s.jsx)(t.h3,{id:"before-getting-started",children:"Before Getting Started"}),"\n",(0,s.jsx)(t.p,{children:"To use Scriptable Workflows, users must be familiar with Cambria FTC and the Job XML format it employs. Job XML contains settings for sources, encoders, multiplexers, filters, as well as notification settings, upload settings, audio mapping, and more. The script will either modify or generate this Job XML."}),"\n",(0,s.jsx)(t.h3,{id:"what-you-can-do-with-scripts",children:"What You Can Do With Scripts"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Modifying target settings (resolution, frame rate, bitrate, etc.) based on source properties."}),"\n",(0,s.jsx)(t.li,{children:"Automatically failing the Job if a certain source property value exists."}),"\n",(0,s.jsx)(t.li,{children:"Automatically setting source segments (In and Out points)."}),"\n",(0,s.jsx)(t.li,{children:"Setting up complex Jobs, such as subtitling burn-in with titling in/out points controlled through a subtitling file, using the 'Group of Files' option in Watch Folder."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"how-scripts-work",children:"How Scripts Work"}),"\n",(0,s.jsxs)(t.p,{children:["Scripts are executed at the start of the Job, before source decoding starts. FTC will analyze the source file and augment the ",(0,s.jsx)(t.code,{children:"Source"})," section in the original Job XML with source elements and attributes."]}),"\n",(0,s.jsxs)(t.h3,{id:"example-of-source-section",children:["Example of ",(0,s.jsx)(t.code,{children:"Source"})," Section"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<Source Location="\\\\storage\\MP4\\movie_6ch.mp4" Duration27MHz="270000000" Name="Src1">\n    <VideoTrackInfo Format="H.264 Video" FrameMode="Progressive" FrameRateDen="1001" FrameRateNum="30000" Height="480" PixelAspectRatioHor="4" PixelAspectRatioVer="3" Width="640" ColorFormat="YUV 420" />\n    <AudioTrackInfo BitsPerSample="16" Format="AAC Audio" NbChannels="6" SampleRate="48000" />\n</Source>\n'})}),"\n",(0,s.jsx)(t.p,{children:"When running script analysis in 'Properties and Contents' mode (configurable in the Preset Editor's 'Script' tab), other information such as video complexity (a measure of how difficult a video is to encode) and audio loudness can augment the XML. For example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<AnalysisInfo>\n    <LoudnessMeterBS1770 TruePeakdbTP="-0.693612" PeakdbFS="-0.69363" LoudnessRangeLU="14.9317" LoudnessLUFS="-30.2088" />\n    <VideoComplexity PeakComplexity_30sec="1814.53" AvgComplexity="1556.81" />\n</AnalysisInfo>\n'})}),"\n",(0,s.jsx)(t.p,{children:"Compressed video/audio and muxer properties can also be analyzed:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<Muxer Format="MP4 Muxer" moov_at_start="0" isFragmented="0">\n    <Track handler="video" codec_type="avc1" />\n    <Track handler="soun" codec_type="mp4a" />\n</Muxer>\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The script outputs a new Job XML that is used for transcoding. This process is called ",(0,s.jsx)(t.strong,{children:"Script Transform"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"script-transform-steps",children:"Script Transform Steps"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"The Python script is extracted from the original Job XML and saved to a file."}),"\n",(0,s.jsxs)(t.li,{children:["The original Job XML is saved to a file and modified to include source video and audio properties. This is referred to as the ",(0,s.jsx)(t.strong,{children:"Input XML"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["CpJobExec (FTC's tool) uses ",(0,s.jsx)(t.code,{children:"python.exe"})," or ",(0,s.jsx)(t.code,{children:"perl.exe"})," to execute the script. The script receives the Input XML as an argument and outputs a new Job XML."]}),"\n",(0,s.jsx)(t.li,{children:"CpJobExec reads the Output XML and runs the job using its settings."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," Temporary files (Input XML, Output XML, and script files) are automatically deleted unless preserved using the ",(0,s.jsx)(t.code,{children:"--s 1"})," command-line option."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Available encoding settings"}),":\nThe script can add, remove or modify any settings stored in the Job XML. To get a list of which settings can be modified, use the Manager to extract a Job XML which contains the desired video and audio encoders, video or audio filters, notification, upload, audio mapping, etc."]}),"\n",(0,s.jsx)(t.h2,{id:"sample-scripts",children:"Sample Scripts"}),"\n",(0,s.jsxs)(t.p,{children:["Sample scripts can be found as part of the FTC installation package, located in:\n",(0,s.jsx)(t.code,{children:"C:\\Users\\Public\\Documents\\Capella\\Cambria\\Scripts"})]}),"\n",(0,s.jsx)(t.p,{children:"Users may use them as-is or customize a script to their liking. Some example scripts:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"ModifyBitrateBasedOnSourceResolution.py\nScript looks at the width/height of the source. If it is SD, it sets the H.264 bitrate to 2000bps. If it is\nHD, it sets the bitrate to 5000mbps. [This assumes that the XML setting for bitrate is 'BitrateKbps',\nwhich is not the case for all encoders]."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"FailIfPAL.py\nScript looks at the frame rate and makes the job fail if the frame rate is PAL (ie 25 or 50)."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"FailIfNotHD.py\nScript looks at the frame size and makes the job fail if the width is less than 1280 or if the height is less\nthan 720."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"SetInTimecodeTo_01_00_00_00.py\nScript sets the In Timecode to 01:00:00:00, and sets no Out point (so we keep transcoding until the end\nof the file)."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Create5MinuteSegment.py\nScript set In point at 0 and Out point at 5 minutes."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"UseHalfSourceFrameRateIfMoreThan30fps.pl\nScript inspects the source frame rate. If it is 30 or less, output frame rate is set to source frame rate. If it\nis over 30, output frame rate is set to half of source frame rate. [This assumes that the target can use any\nframe rate, so for example this wouldn't work with DV output]."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"AddPreroll_Postroll.py\nStitches the source file with a preroll and/or postroll source file."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"MapAdditionalAudio.py\nUsed with Watch Folder 'Group of Files'. Combines audio from external sources to the audio of the\nmain source file. This can for example combine audio of different languages into a multi-track source."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"PassthroughAudioIfAC3.py\nIf the source's audio is encoded in AC-3 format, use Audio Passthrough. Otherwise, re-encode audio to\nthe format specified in the original job encoding settings."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"SkipAdaptiveStreamingLayersBasedOnSourceResolution.py\nRemoves any Adaptive Streaming (DASH, Smooth Streaming) layer if that layer's resolution is higher\nthan the source resolution."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"AdaptiveBitrateLadderBasedOnVideoComplexity.py\nMeasures the source video complexity (a measure of how difficult it is to encode) and modifies the\nbitrate for each DASH or HLS layer. Less complex sources will be encoded at lower bitrate than more\ndifficult sources."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"2-writing-a-script",children:"2. Writing a Script"}),"\n",(0,s.jsx)(t.p,{children:"This section will cover the basics of writing a script. We will see how to get the source's properties and\nhow to modify the encoding settings."}),"\n",(0,s.jsx)(t.h3,{id:"headerfootage",children:"Header/Footage"}),"\n",(0,s.jsx)(t.p,{children:"Scripts should start with the following code, which validates the inputs (source XML file and output\nXML file) and parses the input into the $data variable. In this document, this code is referred to as the\n'common header'."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"#!/usr/bin/env python3\nimport sys\nimport xml.dom.minidom\n\ndef main():\n    if len(sys.argv) != 3:\n        print(\"\\nUsage: ModifyXML.py inputXML outputXML\\n\")\n        return\n\n    inputPath = sys.argv[1]\n    outputPath = sys.argv[2]\n\n    with open(inputPath, 'r') as f:\n        xmlContent = f.read()\n    doc = xml.dom.minidom.parseString(xmlContent)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Scripts should end with the following code, which closes the input and output files, and writes the\nmodified Job XML contents into the output location. In this document, this code is referred to as the\n'common footer'."}),"\n",(0,s.jsx)(t.h3,{id:"common-footer",children:"Common Footer"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"    with open(outputPath, 'w') as f:\n        f.write(doc.toxml())\n"})}),"\n",(0,s.jsx)(t.h3,{id:"special-job-settings",children:"Special Job Settings"}),"\n",(0,s.jsx)(t.p,{children:"The following special settings can be added to a job settings, under the 'Job' element.\nTo cause the transcoding to fail (for example because the source has unacceptable properties, such as\nresolution too low):"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"job.setAttribute('IsError', '1')\njob.setAttribute('ErrorMessage', 'Source resolution is too low')\n"})}),"\n",(0,s.jsx)(t.p,{children:"To skip transcoding altogether, without causing the job to fail:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"job.setAttribute('NoAction', '1')\n"})}),"\n",(0,s.jsx)(t.h2,{id:"3-editingtroubleshooting-a-custom-script",children:"3. Editing/Troubleshooting a Custom Script"}),"\n",(0,s.jsx)(t.p,{children:"To retain and reuse the temporary Script Transform files:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Create a Job XML that contains a script. You can do this by \u201cqueuing\u201d an encoding job. Then\nfrom Cambria Manager, right click on the Job and select \u2018Diagnostics\u2019 \u2018Extract Job XML\u2019. A \uf0e0\nJobData.xml file will be created."}),"\n",(0,s.jsx)(t.li,{children:"Open up command prompt (CMD)"}),"\n",(0,s.jsx)(t.li,{children:"Change directory to C:\\Program Files (x86)\\Capella\\Cambria\\cpx64"}),"\n",(0,s.jsx)(t.li,{children:"Run CpJobExec.exe --xml JobData.xml --s 1"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The \u201c--s 1\u201d parameter for CpJobExec.exe will turn off the automatic delete of the Script Transform\nfiles.\nLocation and description of Script Transform Files:\nC:\\Users\\Public\\Documents\\Capella\\Cambria\\Scripts_Tmp",(0,s.jsx)(t.br,{}),"\n","The folder will include these files:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Input XML: src_xxxxx.xml (original Job XML with Source elements and attributes)"}),"\n",(0,s.jsx)(t.li,{children:"Output XML: tgt_xxxxx.xml (job XML generate by the script)"}),"\n",(0,s.jsx)(t.li,{children:"Python Script: script_xxxxx.py (the script used)"}),"\n",(0,s.jsx)(t.li,{children:"Batch file: rerun_xxxxx.bat (used to re-run the script and generate a new job XML)"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"You can now modify the script and re-execute it by double-clicking the 'rerun_xxxxx.bat' file. This\nwill overwrite the 'tgt_xxxxx.xml' file."}),"\n",(0,s.jsx)(t.p,{children:"You can also test different input properties by modifying the 'src_xxxxx.xml' file."}),"\n",(0,s.jsx)(t.h2,{id:"4-sample-script-logic-simplified",children:"4. Sample Script Logic (Simplified)"}),"\n",(0,s.jsx)(t.p,{children:"This section contains the logic of different scripts, with the common header, common footer and\nvariable declaration removed for simplicity."}),"\n",(0,s.jsx)(t.h3,{id:"modifybitratebasedonsourceresolutionpy",children:"ModifyBitrateBasedOnSourceResolution.py"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"source = data.getElementsByTagName('Source')[0]\nvideo = source.getElementsByTagName('VideoTrackInfo')[0] if source.getElementsByTagName('VideoTrackInfo') else None\nheight = int(video.getAttribute('Height')) if video else 0\nisHD = height >= 720\nsettings = data.getElementsByTagName('Settings')[0]\nfor _setting in settings.childNodes:\n    if _setting.nodeType == _setting.ELEMENT_NODE and _setting.getAttribute('Type') == 'Video':\n        _setting.setAttribute('BitrateKbps', '5000' if isHD else '2000')\n"})}),"\n",(0,s.jsx)(t.h3,{id:"failifpalpy",children:"FailIfPAL.py"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"source = data.getElementsByTagName('Source')[0]\nvideo = source.getElementsByTagName('VideoTrackInfo')[0]\nframeRateNum = int(video.getAttribute('FrameRateNum'))\nframeRateDen = int(video.getAttribute('FrameRateDen'))\nisPAL = (frameRateNum == 25 and frameRateDen == 1) or (frameRateNum == 50 and frameRateDen == 1)\njob = data.getElementsByTagName('Job')[0]\nif isPAL:\n    job.setAttribute('IsError', '1')\n    job.setAttribute('ErrorMessage', 'Source is PAL')\n"})}),"\n",(0,s.jsx)(t.h3,{id:"usehalfsourceframerateifmorethan30fpspy",children:"UseHalfSourceFrameRateIfMoreThan30fps.py"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"source = doc.getElementsByTagName('Source')[0]\nvideo = source.getElementsByTagName('VideoTrackInfo')[0]\nif video:\n    frameRateNum = int(video.getAttribute('FrameRateNum'))\n    frameRateDen = int(video.getAttribute('FrameRateDen'))\n    sourceFrameRate = frameRateNum / frameRateDen\n    setSame = sourceFrameRate <= 30\n    settings = doc.getElementsByTagName('Settings')[0]\n    for setting in settings.childNodes:\n        if setting.getAttribute('Type') == 'Video':\n            setting.setAttribute('FrameRate', str(sourceFrameRate if setSame else sourceFrameRate / 2))\n"})}),"\n",(0,s.jsx)(t.h3,{id:"passthroughaudioifac3py-perl",children:"PassthroughAudioIfAC3.py (Perl)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-perl",children:"$source = $data->getElementsByTagName('Source')->item(0);\n$audio = $source->getElementsByTagName('AudioTrackInfo')->item(0);\nif($audio) {\n    $format = $audio->getAttribute('Format');\n    if ($format eq 'AC-3 Audio') {\n        $isAC3 = 1;\n    }\n    $settings = $data->getElementsByTagName('Settings')->item(0);\n    @list = $settings->getChildNodes;\n    for my $_setting (@list) {\n        $type = $_setting->getAttribute('Type');\n        if ($type eq 'Audio') {\n            if ($isAC3 == 1) {\n                $_setting->setAttribute('EncoderName', 'Audio Passthrough');\n            }\n        }\n    }\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var n=i(6540);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);