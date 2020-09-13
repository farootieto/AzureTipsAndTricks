(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{472:function(e,t,s){"use strict";s.r(t);var a=s(43),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("🔥 Make sure you "),s("a",{attrs:{href:"http://azuredev.tips?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("star the repo"),s("OutboundLink")],1),e._v(" to keep up to date with new tips and tricks.")]),e._v(" "),s("p",[e._v("💡 Learn more : "),s("a",{attrs:{href:"https://azure.microsoft.com/services/key-vault?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft Azure Key Vault"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("📺 Watch the video : "),s("a",{attrs:{href:"https://azure.microsoft.com/en-us/resources/videos/azure-key-vault-developer-quick-start/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting started with Azure Key Vault"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("h4",{attrs:{id:"using-secrets-in-scripts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-secrets-in-scripts","aria-hidden":"true"}},[e._v("#")]),e._v(" Using secrets in scripts")]),e._v(" "),s("p",[e._v("When you write deployment scripting you often need secrets / passwords. Using these secrets is often done by using variables and storing the plain text password or secure object (which is still security through obscurity). In some cases people paramatarize the values and have to input the secrets / passwords upon runtime. If you're working with a large number of secrets the latter can be quite time consuming.")]),e._v(" "),s("h4",{attrs:{id:"_1-leveraging-the-azure-key-vault"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-leveraging-the-azure-key-vault","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. Leveraging the Azure Key Vault")]),e._v(" "),s("p",[e._v("When using Microsoft Azure, it's a best practice to store your secrets in the Azure Key Vault. This can also be done when scripting your deployments. If you're deploying ARM Templates, you can query the key vault directly during the deployment (https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/key-vault-parameter?tabs=azure-cli) and this is often the most secure way.")]),e._v(" "),s("p",[e._v("However, sometimes you're just not deploying using ARM templates or you're using a combination of tools. Maybe you're not even deploying to Azure and you just need a place to store your secrets. Key Vault is there for you 😃")]),e._v(" "),s("h4",{attrs:{id:"_2-code-samples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-code-samples","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. Code samples")]),e._v(" "),s("p",[e._v("Note that the code requires you t be logged in to Azure using either Azure PowerShell or Azure CLI (depending on your preference).")]),e._v(" "),s("p",[e._v('The following code will retrieve all the secrets from your Azure KeyVault and store them in the hash table "'),s("em",[e._v("$keys")]),e._v('".')]),e._v(" "),s("p",[e._v('Upon succesful execution you can request the secrets from the table by simple parsing "'),s("em",[e._v("$keys.NameOfYourKeyVaultSecret")]),e._v('"')]),e._v(" "),s("p",[e._v('For example "'),s("em",[e._v("$keys.storageAccountkey")]),e._v('" would return the secret value of the "storageAccountKey" as stored in the Azure KeyVault.')]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('$keyvaultName = \'KeyVaultName\'\n$secrets = Get-AzKeyVaultSecret -VaultName $keyvaultName\n\n$keys =@{}\nforeach ($secret in $secrets)\n    {\n        $secretName = $secret.name\n        \n        $key = (Get-AzKeyVaultSecret -VaultName $keyvaultName -name $secretName).SecretValueText\n        $keys.Add("$secretName", "$key")\n    }\n\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br")])]),s("h5",{attrs:{id:"azure-cli-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#azure-cli-version","aria-hidden":"true"}},[e._v("#")]),e._v(" Azure CLI version")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('$keyvaultName = \'KeyVaultName\'\n$secrets = az keyvault secret list --vault-name $keyvaultName |convertFrom-Json\n    \n$keys =@{}\nforeach ($secret in $secrets)\n    {\n        $secretName = $secret.name\n\n        $key = az keyvault secret show --vault-name $keyvaultName --name $secretName --query value\n        $keys.Add("$secretName", "$key")\n    }\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])])])},[],!1,null,null,null);t.default=r.exports}}]);