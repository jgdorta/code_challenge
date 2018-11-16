 var utils = (function() {
    
    function isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    function setErrorParams(context, statusCode, details, statusText) {
        context.setVariable('flow.usersapi.error.statusCode', statusCode);
        context.setVariable('flow.usersapi.error.details', details);
        context.setVariable('flow.usersapi.error.statusText', statusText);
    }
    
    return {
        isEmpty: isEmpty,
        setErrorParams: setErrorParams
    };    
})();