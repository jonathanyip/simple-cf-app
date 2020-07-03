<cfscript>
	// Set the correct headers
	// 200 == HTTP OK, JSON content type
	cfheader(statusCode="200")
	cfheader(name="Content-Type", value="application/json")

	// Sample GET parameters
	youSaid = "I didn't hear from you"
	if (structKeyExists(url, "input"))
		youSaid = url.input;

	// Create a JSON response
	response = structNew()
	response["msg"] = "Hello World!!!!!!"
	response["youSaid"] = youSaid
</cfscript>

<cfoutput>#serializeJSON(response)#</cfoutput>
