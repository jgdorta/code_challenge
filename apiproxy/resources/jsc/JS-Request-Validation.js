var content = context.getVariable("request.content");

if (typeof(content) === "undefined" || content === null || content === "") {
    utils.setErrorParams(context, "405", "Invalid input", "Not_allowed");
} else {
    var jsonContent = JSON.parse(content);
    
    if (Array.isArray(jsonContent) || utils.isEmpty(jsonContent)) {
        utils.setErrorParams(context, "405", "Invalid input", "Not_allowed");
    }
}