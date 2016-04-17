const { PrefsTarget } = require("sdk/preferences/event-target");

var actionButton = require("./ActionButton"),
	target = PrefsTarget({ branchName: ""});
	

exports.register = function() {

	target.on("javascript.enabled", actionButton.setIconAndLabel);
};

exports.unregister = function() {

	target.off("enabled",function(){
		require("./PrefServ").resetter("javascript.enabled");
	});
};

