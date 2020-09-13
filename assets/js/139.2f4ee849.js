(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{564:function(e,t,a){"use strict";a.r(t);var r=a(43),o=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("🔥 Checkout our new Azure Developer page at "),a("a",{attrs:{href:"https://azure.com/developer?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("azure.com/developer"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/storage/blobs/storage-blob-static-website?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Static website hosting in Azure Storage"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("📺 Watch the video : "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=T6pepcxEudI&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=74&t=0s?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Use Blazor and C# to host a static website in Azure Storage"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"host-a-client-side-blazor-app-as-a-static-website-in-azure-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host-a-client-side-blazor-app-as-a-static-website-in-azure-storage","aria-hidden":"true"}},[e._v("#")]),e._v(" Host a client-side Blazor app as a static website in Azure Storage")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://dotnet.microsoft.com/apps/aspnet/web-apps/client?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blazor"),a("OutboundLink")],1),e._v(" is a cool, new feature of ASP.NET that allows you to build interactive web UIs using C# instead of JavaScript. And you can run your client-side C# code directly in the browser, using "),a("a",{attrs:{href:"https://webassembly.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebAssembly"),a("OutboundLink")],1),e._v(", which is a standard that is supported by all modern, major browsers.")]),e._v(" "),a("p",[e._v("In this article, we'll create a client-side Blazor web application and host it in "),a("a",{attrs:{href:"https://azure.microsoft.com/services/storage/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Storage"),a("OutboundLink")],1),e._v(" using the "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/storage/blobs/storage-blob-static-website?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Static Websites"),a("OutboundLink")],1),e._v(" feature.")]),e._v(" "),a("h4",{attrs:{id:"creating-the-blazor-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-blazor-app","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating the Blazor app")]),e._v(" "),a("p",[e._v("We will first create the Blazor application. I'm going to use Visual Studio 2019 to do that. To follow along, you'll need the following:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://dotnet.microsoft.com/download/dotnet-core/3.0?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET Core 3.0 SDK (latest version)"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Get the Blazor templates by executing the following command on the command line:"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dotnet new -i Microsoft.AspNetCore.Blazor.Templates\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://visualstudio.microsoft.com/vs/?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio 2019"),a("OutboundLink")],1),e._v(" with the ASP.NET and web development workload selected as well as the latest "),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=aspnet.blazor",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blazor"),a("OutboundLink")],1),e._v(" extension from the Visual Studio Marketplace")]),e._v(" "),a("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),a("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),a("OutboundLink")],1),e._v(" before you begin)")])]),e._v(" "),a("p",[e._v("Let's create the Blazor app:")]),e._v(" "),a("ol",[a("li",[e._v("Open Visual Studio 2019")]),e._v(" "),a("li",[e._v("Create a "),a("strong",[e._v("new project")]),e._v(" "),a("ol",[a("li",[e._v("Choose "),a("strong",[e._v("ASP.NET Core Web Application")])]),e._v(" "),a("li",[e._v("Give it a "),a("strong",[e._v("name")])]),e._v(" "),a("li",[e._v("Choose the template "),a("strong",[e._v("Blazor (client-side)")]),e._v(", as in the image below:")])])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/25createnewblazorapp.png")}}),e._v(" "),a("p",[e._v("(Create a new client-side Blazor app in Visual Studio)")]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Click "),a("strong",[e._v("Create")])])]),e._v(" "),a("p",[e._v("You should now have a client-side Blazor application. Take a look at it in the solution explorer. It will look like this:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/25blazorapp.png")}}),e._v(" "),a("p",[e._v("(The folder structure of a default client-side Blazor app)")]),e._v(" "),a("p",[e._v("If you open the page "),a("strong",[e._v("Counter.razor")]),e._v(", you'll see an example of how you can use Blazor to work with the UI. Cool right? You can have the UI trigger C# methods and do whatever you want, like increment an int.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@page "/counter"\n\n<h1>Counter</h1>\n\n<p>Current count: @currentCount</p>\n\n<button class="btn btn-primary" @onclick="@IncrementCount">Click me</button>\n\n@code {\n    int currentCount = 0;\n\n    void IncrementCount()\n    {\n        currentCount++;\n    }\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br")])]),a("p",[e._v("Run the application locally by "),a("strong",[e._v("pressing "),a("strong",[e._v("F5")])]),e._v(". You'll notice that is fast. You can also debug the C# code by putting a breakpoint in it.")]),e._v(" "),a("h4",{attrs:{id:"publish-the-blazor-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publish-the-blazor-app","aria-hidden":"true"}},[e._v("#")]),e._v(" Publish the Blazor app")]),e._v(" "),a("p",[e._v("To be able to host the Blazor app, we need to publish the files that we need to run it. That's easy in Visual Studio.")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("Right-click")]),e._v(" the Blazor project and click "),a("strong",[e._v("Publish")])]),e._v(" "),a("li",[e._v("Choose "),a("strong",[e._v("Folder")]),e._v(" as the publish target")]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("Publish")]),e._v(" to publish the files")]),e._v(" "),a("li",[e._v("Navigate to the published files. Navigate to the "),a("strong",[e._v("dist")]),e._v(" folder. We need the contents of that folder to run the website. It should look like this:")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/25distfolder.png")}}),e._v(" "),a("p",[e._v("(The result of publishing a client-side Blazor app)")]),e._v(" "),a("h4",{attrs:{id:"create-an-azure-storage-account-and-enable-the-static-website-feature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-azure-storage-account-and-enable-the-static-website-feature","aria-hidden":"true"}},[e._v("#")]),e._v(" Create an Azure Storage Account and enable the Static website feature")]),e._v(" "),a("p",[e._v("Now that we have a working static web app, we can run it in Azure. We are going to run it as a "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/storage/blobs/storage-blob-static-website?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("static website"),a("OutboundLink")],1),e._v(" in "),a("a",{attrs:{href:"https://azure.microsoft.com/services/storage/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Storage"),a("OutboundLink")],1),e._v(". Running the app in there is very inexpensive, reliable and performant.")]),e._v(" "),a("p",[e._v("Let's start by creating a new Azure Storage account.")]),e._v(" "),a("ol",[a("li",[e._v("Go to the "),a("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Click the "),a("strong",[e._v("Create a resource")]),e._v(" button (the plus-sign in the top left corner)")]),e._v(" "),a("li",[e._v("Search for or select "),a("strong",[e._v("Storage account")]),e._v(". This will open the "),a("strong",[e._v("Create storage account")]),e._v(" blade\n"),a("ol",[a("li",[e._v("Select an "),a("strong",[e._v("Azure subscription")])]),e._v(" "),a("li",[e._v("Select or create a "),a("strong",[e._v("Resource group")])]),e._v(" "),a("li",[e._v("Fill in a "),a("strong",[e._v("name")])]),e._v(" "),a("li",[e._v("Make sure that the account is a "),a("strong",[e._v("StorageV2 account")])]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("Review + create")])]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("Create")])])])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/25createazurestorage.png")}}),e._v(" "),a("p",[e._v("(Create a new Azure Storage account)")]),e._v(" "),a("p",[e._v("When the storage account is created, we can enable its "),a("strong",[e._v("static website")]),e._v(" feature.")]),e._v(" "),a("ol",[a("li",[e._v("Go to the Azure storage account in the Azure portal")]),e._v(" "),a("li",[e._v("Click on the "),a("strong",[e._v("static website")]),e._v(" menu-item")]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("enable")])]),e._v(" "),a("li",[e._v("Fill in "),a("strong",[e._v("index.html")]),e._v(" as the "),a("strong",[e._v("index document name")]),e._v(". This will be the default file that is used when we navigate to the website")]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("Save")]),e._v(" to enable the setting")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/25azurestaticwebsite.png")}}),e._v(" "),a("p",[e._v("(The static website feature in Azure Storage)")]),e._v(" "),a("p",[e._v("This Azure Storage Account can now host a static website. Notice the "),a("strong",[e._v("Primary endpoint URL")]),e._v(" and "),a("strong",[e._v("copy it")]),e._v(". That is the URL that we use to reach the website.")]),e._v(" "),a("h4",{attrs:{id:"copy-the-blazor-app-into-azure-storage-and-test-the-website"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copy-the-blazor-app-into-azure-storage-and-test-the-website","aria-hidden":"true"}},[e._v("#")]),e._v(" Copy the Blazor app into Azure Storage and test the website")]),e._v(" "),a("p",[e._v("There is only one more thing to do: copy the files of the Blazor application into the Azure Storage Account.\nWe will do that using the "),a("a",{attrs:{href:"https://azure.microsoft.com/features/storage-explorer/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Storage Explorer"),a("OutboundLink")],1),e._v(", which is a free tool that you can use to manage Azure Storage.")]),e._v(" "),a("ol",[a("li",[e._v("Open the Azure Storage Explorer and make sure that you are signed into your Azure account")]),e._v(" "),a("li",[e._v("Navigate to the Azure storage account that we've created")]),e._v(" "),a("li",[e._v("Drill down into "),a("strong",[e._v("Blob Storage")])]),e._v(" "),a("li",[e._v("The static website feature looks for files in the "),a("strong",[e._v("$web")]),e._v(" container that it created. Click on the "),a("strong",[e._v("$web")]),e._v(" container")]),e._v(" "),a("li",[e._v("Now open an explorer window to the "),a("strong",[e._v("dist folder")]),e._v(" of the published Blazor app. Select the contents of the dist folder and drag that onto the storage explorer. It will automatically upload the files into the $web container")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/25azurestorageexplorer.png")}}),e._v(" "),a("p",[e._v("(Azure Storage Explorer)")]),e._v(" "),a("p",[e._v("That's it!")]),e._v(" "),a("p",[e._v("Now go to a browser and paste in the "),a("strong",[e._v("Primary endpoint URL")]),e._v(" of the Azure Storage static website. Here we go. A static Blazor website running in Azure!")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/25blazorinstaticwebsite.png")}}),e._v(" "),a("p",[e._v("(Blazor app running in Azure Storage as a static website)")]),e._v(" "),a("p",[e._v("We've just deployed the app manually, but you can also automate this process by using "),a("a",{attrs:{href:"https://azure.microsoft.com/services/devops/pipelines?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure DevOps Pipelines"),a("OutboundLink")],1),e._v(". This is easy to setup and eliminates errors that we might introduce by copying things manually. You can learn how to get started with Azure DevOps Pipelines "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/devops/pipelines/create-first-pipeline?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("Blazor is a very cool feature of ASP.NET Core that allows you to use C# instead of JavaScript, to create web UIs. Many .NET developers have dreamed about that for a long time, and now it is finally here.")]),e._v(" "),a("p",[e._v("And when you've created a website with Blazor, there is nothing simpler than running it as a static website in Azure Storage. It is extremely simple to use and it is inexpensive. It is also very reliable, as Azure Storage is highly available by default and makes sure that you never lose data. On top of that, your website will be very fast, because Azure Storage is very fast and Blazor is very fast. You can learn more about Blazor "),a("a",{attrs:{href:"https://dotnet.microsoft.com/apps/aspnet/web-apps/client?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". Go and check it out!")])])},[],!1,null,null,null);t.default=o.exports}}]);