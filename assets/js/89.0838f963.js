(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{394:function(t,e,o){"use strict";o.r(e);var i=o(43),a=Object(i.a)({},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/information-protection/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Information Protection Documentation"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("h4",{attrs:{id:"getting-started-with-azure-information-protection"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-azure-information-protection","aria-hidden":"true"}},[t._v("#")]),t._v(" Getting Started with Azure Information Protection")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://azure.microsoft.com/services/information-protection?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Information Protection (AIP)"),o("OutboundLink")],1),t._v(" is a Microsoft Azure offering that works in conjunction with Microsoft Online services (Exchange Online, SharePoint Online, etc.) and Office 365 to categorize and protect documents and emails using labels and policies defined by an administrator. As a cloud-based solution, AIP is an "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/information-protection/aka?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("evolution"),o("OutboundLink")],1),t._v(" of a variety of technologies all focused on rights management, and it uses "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/information-protection/what-is-azure-rms?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Rights Management"),o("OutboundLink")],1),t._v(" as its protection technology.")]),t._v(" "),o("p",[t._v("Getting started requires an Azure subscription that includes AIP, and your organization would typically get this via Enterprise Mobility + Security, Microsoft 365 Enterprise, or volume licensing, or perhaps through a "),o("a",{attrs:{href:"https://partner.microsoft.com/en-qa/cloud-solution-provider",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cloud Solution Provider"),o("OutboundLink")],1),t._v(". To familiarize yourself with capabilities, though, you can sign up for a "),o("a",{attrs:{href:"https://portal.office.com/signup/logout?OfferId=87dd2714-d452-48a0-a809-d2f58c4f68b7",target:"_blank",rel:"noopener noreferrer"}},[t._v("free trial of Enterprise Mobility + Security E5"),o("OutboundLink")],1),t._v(" and get your own tenant with AIP.")]),t._v(" "),o("p",[t._v("Within the Azure portal, an administrator would define labels (and sublabels) to classify documents as well as policies to govern what can be done with those documents. AIP provides a set of default classification labels, but you can define whatever categories you like.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/aip-labels.png")}}),t._v(" "),o("p",[t._v("Each label, in turn, has a number of properties that indicate how documents with that label are marked (header, footer, watermark) and whether they should be protected from access by unauthorized users. Labels are included in one or more policies that govern conditions under which those labels are applied. For instance, you might want to automatically classify documents containing a Social Security number as personally identifiable information (PII) and enforce a policy that requires editors to explain any downgrading in the classification of such documents.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/aip-label.png")}}),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/aip-policy.png")}}),t._v(" "),o("p",[t._v("To actually label and protect files with AIP, you'll need to install the "),o("a",{attrs:{href:"https://www.microsoft.com/download/details.aspx?id=53018?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Information Protection client"),o("OutboundLink")],1),t._v(". Users of iOS, MacOS, and Android can still access protected documents via the "),o("a",{attrs:{href:"https://portal.azurerms.com/#/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Information Protection viewer app"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[t._v("If you've installed the AIP client, your Office ribbons should include a Protect option, and as in the case of Microsoft Word below, you'll see a menu bar reflecting the classifications of the AIP policy that applies. That policy information is automatically downloaded and updated when you sign into the AIP-enabled tenant within your Office app.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/aip-word-1.png")}}),t._v(" "),o("p",[t._v("Now, if you were to create and save a new document containing text that resembles a Social Security number, you'd be prompted to adjust the classification of the document accordingly. Had the condition been configured to automatically apply the label, that would have occurred without prompting. With the application of the PII label, the sensitivity level is updated and the (optional) watermark that was configured for that label appears.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/aip-word-2.png")}}),t._v(" "),o("p",[t._v("Now let's say you want to share this document (or one that was created before you installed the AIP client) with an individual in another organization. Within File Explorer, you'll find a context menu option named Classify and Protect, which allows you to apply marking and protection to files (of supported types). Using custom permissions, you can single out the recipients and then attach the file to a work or school account email.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/aip-explorer.png")}}),t._v(" "),o("p",[t._v("Authorized recipients will then be able to access the document with the assigned permissions, such as on an Android phone:")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/aip-droid.jpg")}}),t._v(" "),o("p",[t._v("Unauthorized users will be met with a message that they will need to get permission from the document owner to open the document.")]),t._v(" "),o("p",[t._v("Clearly, Azure Information Protection requires an organizational investment not only in licensing costs but also in terms of planning and document governance. A "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/information-protection/infoprotect-quick-start-tutorial?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("quick-start tutorial"),o("OutboundLink")],1),t._v(" goes into more detail in terms of implementation steps covered in this blog post. For those planning a rollout of a rights management solution, the "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/information-protection/deployment-roadmap?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Information Protection deployment roadmap"),o("OutboundLink")],1),t._v(" is a good guide to the steps for successful implementation.")])])},[],!1,null,null,null);e.default=a.exports}}]);