require("./ActionButton").init();
var chrome = require("./Chrome");

chrome.register();

exports.onUnload = function (reason){
	
    if(reason == "disable" || reason == "uninstall"){
		//remove listener and restore pref
		chrome.unregister();    
    }
};

