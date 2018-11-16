var userId = context.getVariable("user.id");

var error = false;

if (typeof(userId) === "undefined" || userId === null || userId === "" || 
    isNaN(userId) || Number(userId) < 0 || (Number(userId) % 1 !== 0)) {
    
    utils.setErrorParams(context, '400', 'Invalid user id', 'bad_request');
    error = true;
}