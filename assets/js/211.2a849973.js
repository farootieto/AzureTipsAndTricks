(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{487:function(e,t,a){"use strict";a.r(t);var r=a(43),n=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h4",{attrs:{id:"my-scenario-tracking-run-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#my-scenario-tracking-run-data","aria-hidden":"true"}},[e._v("#")]),e._v(" My Scenario - Tracking Run Data")]),e._v(" "),a("p",[e._v("I thought I'd use this week's Tip and Tricks series to show a practical example of how I am using Azure. I've started running outdoors and would like to extract several links that my app generates via email and send them to my OneDrive account automatically vs doing it manually after each run. I'm also concerned that the app that generates my data may be abandoned one day. In order to secure my data, I used a combination of "),a("a",{attrs:{href:"http://www.zapier.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zappier.com"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"http://www.azure.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure"),a("OutboundLink")],1),e._v(" to solve my problem and over the course of this week, we'll cover the following sections needed in order to implement this:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip37.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("This post - Parse Emails to be used in a Azure Logic Apps"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip38.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create JSON Schema to be used in a Azure Logic Apps"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip39.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Setup an HTTP Request Trigger that is used in an Azure Logic Apps"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip40.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Upload Files from a URL with Azure Logic Apps"),a("OutboundLink")],1)])]),e._v(" "),a("h4",{attrs:{id:"parse-emails-to-be-used-in-a-azure-logic-apps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parse-emails-to-be-used-in-a-azure-logic-apps","aria-hidden":"true"}},[e._v("#")]),e._v(" Parse Emails to be used in a Azure Logic Apps")]),e._v(" "),a("p",[e._v("Once a run is complete, the app that I use (Runmeter) generates an email with a link to the run data (GPX, CSV, KML File) in the following format:")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Finished Run: Oct 19, 2017 at 8:46:32 PM \nRoute: New Route \nExplorer Link: http://runmeter.com/xxx/Run-20171019-2045 \nImport Link: http://share.abvio.com/xxx/Runmeter-Run-20171019-2045.kml \nRun Time: 1:04 \nStopped Time: 0:00 \nDistance: 0.00 miles \nAverage: 0:00 /mile \nFastest Pace: 0:00 /mile \nCalories: 4 \nGPX Link: http://share.abvio.com/xxx/Runmeter-Run-20171019-2045.gpx \nCSV Link: http://share.abvio.com/xxx/Runmeter-Run-20171019-2045.csv \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("p",[e._v("The pieces of data that we'd like to extract are the "),a("code",[e._v("kml")]),e._v(", "),a("code",[e._v("gpx")]),e._v(", "),a("code",[e._v("csv")]),e._v(" URLs and the last piece of the Explorer Link URL. After we have the URLs, then we are going to download them automatically into a OneDrive folder.")]),e._v(" "),a("p",[e._v("I decided to use "),a("a",{attrs:{href:"http://parser.zapier.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("parser.zappier.com"),a("OutboundLink")],1),e._v(" to parse my email data. I did so for a couple of reason:")]),e._v(" "),a("ul",[a("li",[e._v("It's free")]),e._v(" "),a("li",[e._v("The parser engine is a lot better than I can write myself.")]),e._v(" "),a("li",[e._v("It's really simple to use")])]),e._v(" "),a("p",[e._v("So fire up "),a("a",{attrs:{href:"http://parser.zapier.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("parser.zappier.com"),a("OutboundLink")],1),e._v(" and create a mailbox. You'll need to send an email to it as it will be your starting template. Once you've sent an email, then select the pieces of data that you want to use and give them a name. In the example below, I've already selected 4 pieces of data and show how to create a new one.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/parseblog1.gif")}}),e._v(" "),a("p",[e._v("Now that you have your mailbox created and the parser engine knows what data to extract, we can connect the app to "),a("a",{attrs:{href:"https://zapier.com/app/editor",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Zappier Editor"),a("OutboundLink")],1),e._v(". But first let's review the pieces of data that we wanted to extract and why.")]),e._v(" "),a("ul",[a("li",[e._v("Filename - This is the general filename that the app uses and I think it's a piece of data we may want to store.")]),e._v(" "),a("li",[e._v("CSV URL - A URL to the CSV File that we'll be posting to OneDrive.")]),e._v(" "),a("li",[e._v("GPX URL - A URL to the GPX File that we'll be posting to OneDrive.")]),e._v(" "),a("li",[e._v("KML URL - A URL to the KML File that we'll be posting to OneDrive.")])])])},[],!1,null,null,null);t.default=n.exports}}]);