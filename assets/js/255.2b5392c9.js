(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{533:function(t,s,n){"use strict";n.r(s);var a=n(43),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("💡 Learn more : "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/storage/common/storage-account-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure storage account overview"),n("OutboundLink")],1),t._v(".")])]),t._v(" "),n("h4",{attrs:{id:"copy-azure-storage-blobs-and-files-via-c"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#copy-azure-storage-blobs-and-files-via-c","aria-hidden":"true"}},[t._v("#")]),t._v(" Copy Azure Storage Blobs and Files via C#")]),t._v(" "),n("p",[t._v("Last week we've reviewed the following options with Azure Storage :")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip74.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with Azure Storage Blobs and Files through the Portal"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip75.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create an Azure Storage Blob Container through C#"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip76.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Uploading and Downloading a Stream into an Azure Storage Blob"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip77.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with Azure Storage Explorer"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("Today, we are going to copy Azure Storage Blobs (and Files) via C#. Go ahead and open the Azure Portal and open the C# app that we worked with "),n("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip75.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("earlier"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("The goal of this exercise is to copy a file inside our Azure Storage Container to a new file. So for example, our Azure Storage Container only contains one file now:")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/storageacct4.png")}}),t._v(" "),n("p",[t._v("In the "),n("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip76.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("previous post"),n("OutboundLink")],1),t._v(", we created the Azure Storage Blob Container and uploaded a file to it.")]),t._v(" "),n("p",[t._v("Now we are going to copy a new file inside of it with the name "),n("strong",[t._v("mikepic-backup.png")]),t._v(".")]),t._v(" "),n("div",{staticClass:"language-csharp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BlobServiceClient")]),t._v(" serviceClient "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BlobServiceClient")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CloudConfigurationManager"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetSetting")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"StorageConnection"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BlobContainerClient")]),t._v(" container "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" serviceClient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetBlobContainerClient")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"images-backup"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateIfNotExists")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PublicAccessType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Blob"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BlockBlobClient")]),t._v(" blockBlob "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetBlockBlobClient")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mikepic.png"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//lines added")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BlockBlobClient")]),t._v(" copyBlockBlob "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetBlockBlobClient")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mikepic-backup.png"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    copyBlockBlob"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("StartCopyFromUri")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blockBlob"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Uri"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//end lines added")]),t._v("\n    Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadLine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br")])]),n("p",[t._v("If we run the application and switch over to our Storage Account and navigate inside the container, we'll see our file has copied successfully:")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/azasynccopy1.png")}})])},[],!1,null,null,null);s.default=e.exports}}]);