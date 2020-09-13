(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{415:function(e,t,a){"use strict";a.r(t);var o=a(43),n=Object(o.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/api-management/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure API Management"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("📺 Watch the video : "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=gA2yxwKo0M0&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=55?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to get started with Azure API Management"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"getting-started-with-azure-api-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-azure-api-management","aria-hidden":"true"}},[e._v("#")]),e._v(" Getting started with Azure API Management")]),e._v(" "),a("p",[e._v("When you are developing APIs that other people use, you should seriously consider using "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/api-management/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure API Management"),a("OutboundLink")],1),e._v(". This service acts as a gatekeeper in front of your API and adds many features, like:")]),e._v(" "),a("ul",[a("li",[e._v("Securing your API, including setting quotas and request throttling")]),e._v(" "),a("li",[e._v("A developer portal for people that use your API, which includes documentation and security key management")]),e._v(" "),a("li",[e._v("Self-service subscriptions for API users")]),e._v(" "),a("li",[e._v("Transform the external appearance of your API calls")]),e._v(" "),a("li",[e._v("See who used your API and how much they used it")])]),e._v(" "),a("p",[e._v("Let's explore how you can get started with Azure API Management.")]),e._v(" "),a("h5",{attrs:{id:"creating-an-azure-api-management-instance-and-importing-an-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-azure-api-management-instance-and-importing-an-api","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating an Azure API Management instance and importing an API")]),e._v(" "),a("p",[e._v("We'll start by creating a new Azure API Management instance and putting it in front of an API.")]),e._v(" "),a("ol",[a("li",[e._v("In the Azure portal, click the "),a("strong",[e._v('"Add a resource" button')]),e._v(" (the green plus sign in the top-left corner) and search for "),a("strong",[e._v("API Management")])]),e._v(" "),a("li",[e._v("Click on the "),a("strong",[e._v("API Management")]),e._v(" search result and click "),a("strong",[e._v("Create")])]),e._v(" "),a("li",[e._v("This opens up the API Management Creation blade. Fill out all of the information and pick a pricing tier. The "),a("strong",[e._v("Development tier")]),e._v(" is fine for this tutorial")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/CreateAPIManagement.png")}}),e._v(" "),a("p",[e._v("(Create Azure API Management blade in the Azure portal)")]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Click "),a("strong",[e._v("Create")]),e._v(" to deploy the new API Management instance. This will take a while to complete")])]),e._v(" "),a("p",[e._v("When the deployment is done, you can take a look at your API Management instance. When it is new, it is just an empty gateway that is not exposing anything. So let's give it an API to expose and protect:")]),e._v(" "),a("ol",[a("li",[e._v("Click on the "),a("strong",[e._v("APIs menu")])]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("Add API")])]),e._v(" "),a("li",[e._v("Select "),a("strong",[e._v("OpenAPI specification")]),e._v(", as the API that we are going to protect is discoverable with this protocol")]),e._v(" "),a("li",[e._v("Put this URL (http://conferenceapi.azurewebsites.net/?format=json) in the OpenAPI specification textbox. This will fill in most of the other textboxes automatically. The URL is a demo API that is created by Microsoft")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/ImportingAnAPI.png")}}),e._v(" "),a("p",[e._v("(Add a new API in the Azure portal)")]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Make sure that you select one or more "),a("strong",[e._v("products")]),e._v(" to associate with this API. You need this to publish the API. I will tell you more about products later on")]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("Create")]),e._v(" to add and publish the API. The API is now available on a URL like this https://tipsandtricksmanagement.azure-api.net/")])]),e._v(" "),a("p",[e._v("We now have an API that is protected and exposed by API management. And so, we can try it out. We can test it out right here, from the Azure portal.")]),e._v(" "),a("ol",[a("li",[e._v("In the APIs menu, click on the API that we've just added")]),e._v(" "),a("li",[e._v("Click on the "),a("strong",[e._v("Test")]),e._v(" tab")]),e._v(" "),a("li",[e._v("Select the "),a("strong",[e._v("GetSessions")]),e._v(" method to test")]),e._v(" "),a("li",[e._v("Leave all of the information as is and click "),a("strong",[e._v("Send")]),e._v(". The API will now send back a response that is visible in the portal")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/TestingTheAPI.png")}}),e._v(" "),a("p",[e._v("(Testing the API in the Azure portal)")]),e._v(" "),a("p",[e._v("When you test the API from the Azure portal, you might notice that you can select a subscription key that is sent with the test, like in the image above.\nThis key authorizes you to use the API as, per default, the API is protected and can't be used without authorization.")]),e._v(" "),a("p",[e._v("You can now also go to the developer portal and test the API. The developer portal is a website that users of the API will visit to test the API and get documentation about it.\nYou can get to the developer portal by clicking on the "),a("strong",[e._v("Developer portal button")]),e._v(" in the top of the API Management service in the Azure portal.")]),e._v(" "),a("p",[e._v("Once you are in the developer, portal, you can see the API, like in the image below.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/TestingTheAPIInDeveloperPortal.png")}}),e._v(" "),a("p",[e._v("(Testing the API in the developer portal)")]),e._v(" "),a("h5",{attrs:{id:"monetizing-your-api-with-subscriptions-and-products"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monetizing-your-api-with-subscriptions-and-products","aria-hidden":"true"}},[e._v("#")]),e._v(" Monetizing your API with subscriptions and products")]),e._v(" "),a("p",[e._v("Now that we have an API that is being exposed and protected by API Management, we can start to monetize it. We do this using "),a("strong",[e._v("products")]),e._v(" and "),a("strong",[e._v("subscriptions")]),e._v(".")]),e._v(" "),a("p",[e._v("You've already seen products when you added the API in the previous step. A product in API Management is a thing that represents API capabilities that you can sell to your customers. In a new API Management instance, there are already two products added, the "),a("strong",[e._v("Starter")]),e._v(" and the "),a("strong",[e._v("Unlimited")]),e._v(" product. In the previous step, we've associated the Starter product with the demo API. This means that customers can create a subscription to the Starter product and get access to the API as far as the product allows it. The product itself defines which capabilities customers (users) can use and how much of them they can use.")]),e._v(" "),a("p",[e._v("So the relationship between subscriptions, products and API is this:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Product")]),e._v(" "),a("ul",[a("li",[e._v("Has one or more "),a("strong",[e._v("APIs")]),e._v(" associated with it")]),e._v(" "),a("li",[e._v("Defines the "),a("strong",[e._v("capabilities")]),e._v(" and "),a("strong",[e._v("limits")]),e._v(" of the APIs associated with it")]),e._v(" "),a("li",[e._v("Has one or more "),a("strong",[e._v("Subscriptions")]),e._v(" to it\n"),a("ul",[a("li",[e._v("A "),a("strong",[e._v("Subscription")]),e._v(" has a "),a("strong",[e._v("user")]),e._v(" associated with it")])])])])])]),e._v(" "),a("p",[e._v("Users can create subscriptions for your API by signing up in the developer portal. This is your public portal that you can use to sell subscriptions to your APIs and for users to start using it. The developer portal comes with lots of features out-of-the-box and you can customize it fully to fit your style and support your payment methods.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/DeveloperPortal.png")}}),e._v(" "),a("p",[e._v("(Users can sign up to use an API in the developer portal)")]),e._v(" "),a("p",[e._v("The products determine which capabilities you expose and how much they can be used. The starter product, for instance, has some policies set on it that limit its usage. It has a rate limit of 5 calls per 60 seconds. And a quota that restricts the user to a total of 100 calls per 7 days. You can also restrict the amount of data going in and out and even transform XML to JSON using policies.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/ProductPolicies.png")}}),e._v(" "),a("p",[e._v("(Set policies on a product in the Azure portal)")]),e._v(" "),a("p",[e._v("You can set policies on a product, and you can even apply them to a specific user or subscription.")]),e._v(" "),a("p",[e._v("And once you have users that use your APIs, you can monitor "),a("strong",[e._v("how")]),e._v(" they use your API. You can track this in detail by analyzing how many call a certain user makes and from where the calls are made. Pretty cool, right?")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/AnalyzeUsage.png")}}),e._v(" "),a("p",[e._v("(Analyze API usage in the Azure portal)")]),e._v(" "),a("h5",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("Azure API Management is a very powerful and versatile product. In this post, you've seen only some of its capabilities. You can do a lot more with API Management, like version your API, secure it and monitor it. Go and check it "),a("a",{attrs:{href:"https://azure.microsoft.com/services/api-management?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("out"),a("OutboundLink")],1),e._v("!")])])},[],!1,null,null,null);t.default=n.exports}}]);