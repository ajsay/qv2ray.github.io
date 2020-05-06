(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{338:function(e,o,t){"use strict";t.r(o);var a=t(18),r=Object(a.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"step-2-configuring-v2ray-core"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-configuring-v2ray-core"}},[e._v("#")]),e._v(" Step 2: Configuring V2Ray Core")]),e._v(" "),t("p",[e._v("After a correct and successful installation of Qv2ray onto your system, it is necessary to configure Qv2ray on V2Ray core files before actually using it.")]),e._v(" "),t("h2",{attrs:{id:"download-v2ray-core-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-v2ray-core-files"}},[e._v("#")]),e._v(" Download V2Ray Core Files")]),e._v(" "),t("p",[e._v("Due to political reasons, Qv2ray itself "),t("strong",[e._v("does not")]),e._v(" include a distribution of V2Ray executable files, namely the V2Ray core, and most of the time it it required for user themselves to download them.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Core Management: Manual vs Automatic")]),e._v(" "),t("p",[e._v("If you are using a distribution with V2Ray core and assets packages, it’ll be the best to install through package manager since the system will handle the automatic upgrade of v2ray core. For Arch Linux users, installing only one package "),t("code",[e._v("v2ray")]),e._v(" is enough. For other distributions, please read below.")])]),e._v(" "),t("p",[e._v("Go to "),t("a",{attrs:{href:"https://github.com/v2ray/v2ray-core/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("the official GitHub Release page of v2ray/v2ray-core"),t("OutboundLink")],1),e._v(" and check the recent stable builds. Choose according to your platform in the asset files. For example, Windows 64-bit users may download "),t("code",[e._v("v2ray-windows-64.zip")]),e._v(", Mac OS users may download "),t("code",[e._v("v2ray-macos.zip")]),e._v(", and for most of the Linux users, "),t("code",[e._v("v2ray-linux-64.zip")]),e._v(".")]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("Sharpen Your Eyes")]),e._v(" "),t("p",[e._v("Do not download "),t("code",[e._v("v2ray-linux-arm64.zip")]),e._v(" if you are running Qv2ray on "),t("code",[e._v("x86_64")]),e._v(" ("),t("code",[e._v("amd64")]),e._v(") platform.\nTo make it clear, "),t("code",[e._v("arm64")]),e._v(" is completely different from "),t("code",[e._v("amd64")]),e._v(". Make sure you don't do like this.")])]),e._v(" "),t("h2",{attrs:{id:"place-your-v2ray-core"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#place-your-v2ray-core"}},[e._v("#")]),e._v(" Place Your V2Ray Core")]),e._v(" "),t("p",[e._v("Extract the v2ray core files into a fixed position. As a default, it is suggested to extract the files into "),t("code",[e._v("$QV2RAY_CONFIG_PATH/vcore")]),e._v(", where "),t("code",[e._v("$QV2RAY_CONFIG_PATH")]),e._v(" is the directory where Qv2ray store it’s data.")]),e._v(" "),t("p",[e._v("The directory "),t("code",[e._v("vcore")]),e._v(" could be in one of these locations:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("./config/")]),e._v(" ("),t("code",[e._v("config")]),e._v(" subdirectory aside Qv2ray executable, which is recommended for Windows Users)")]),e._v(" "),t("li",[t("code",[e._v("~/.qv2ray/")]),e._v(" (in a dedicated directory of your home folder)")]),e._v(" "),t("li",[t("code",[e._v("~/.config/qv2ray/")]),e._v(" (standard XDG configuration path)")])]),e._v(" "),t("p",[e._v("Afterwards, please make sure that these files exists directly in your "),t("code",[e._v("vcore")]),e._v(" directory:")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("v2ray")]),e._v(" / "),t("code",[e._v("v2ray.exe")]),e._v(": core executable file")]),e._v(" "),t("li",[t("code",[e._v("v2ctl")]),e._v(" / "),t("code",[e._v("v2ctl.exe")]),e._v(": core controlling program")]),e._v(" "),t("li",[t("code",[e._v("geoip.dat")]),e._v(": IP rules database")]),e._v(" "),t("li",[t("code",[e._v("geosite.dat")]),e._v(": domain rules database")])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Special Hint for Linux / macOS Users")]),e._v(" "),t("p",[e._v("You should always grant "),t("strong",[e._v("executable permission")]),e._v(" to "),t("code",[e._v("v2ray")]),e._v(" and "),t("code",[e._v("v2ctl")]),e._v(".\nThis is usually done by executing "),t("code",[e._v("chmod +x")]),e._v(" on these files.")])]),e._v(" "),t("h2",{attrs:{id:"configure-qv2ray-to-use-the-core"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-qv2ray-to-use-the-core"}},[e._v("#")]),e._v(" Configure Qv2ray to Use the Core")]),e._v(" "),t("p",[e._v("Open Qv2ray and go to Preference Window. In "),t("strong",[e._v("General Settings")]),e._v(" -> "),t("strong",[e._v("V2Ray Settings")]),e._v(", configure as follows:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Core Executable Path")]),e._v(": Set this to where your V2Ray executable exists. This can be the full path of your "),t("code",[e._v("v2ray.exe")]),e._v(" on Windows, or that "),t("code",[e._v("v2ray")]),e._v(" executable file on Linux / macOS.")]),e._v(" "),t("li",[t("strong",[e._v("V2Ray Assets Directory")]),e._v(": Set this to where "),t("code",[e._v("geoip.dat")]),e._v(" and "),t("code",[e._v("geosite.dat")]),e._v(" are located.")])]),e._v(" "),t("p",[e._v("After configuring, you can click on "),t("strong",[e._v("Check V2Ray Core Settings")]),e._v(" button to validate your V2Ray core settings. Repeat trying until you get the check passed.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("No Matryoshka!")]),e._v(" "),t("p",[e._v("Never ever point "),t("strong",[e._v("Core Executable Path")]),e._v(" to "),t("strong",[e._v("Qv2ray Executable")]),e._v("!\nThis will not cause a fork bomb since Qv2ray is single-instanced.\nDo note that V2Ray Core Executable is like "),t("code",[e._v("v2ray")]),e._v(" or "),t("code",[e._v("v2ray.exe")]),e._v(", instead of "),t("code",[e._v("qv2ray")]),e._v(" or "),t("code",[e._v("qv2ray.exe")]),e._v("!")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Hint for Arch Linux Users")]),e._v(" "),t("p",[e._v("If you use "),t("code",[e._v("v2ray")]),e._v(" package, the suggested configuration is as follows:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Core Executable Path")]),e._v(": "),t("code",[e._v("/usr/bin/v2ray")])]),e._v(" "),t("li",[t("strong",[e._v("V2Ray Assets Directory")]),e._v(": "),t("code",[e._v("/usr/lib/v2ray")])])])])])}),[],!1,null,null,null);o.default=r.exports}}]);