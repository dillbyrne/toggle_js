var Data = require("sdk/self").data;

exports.get = function(content) {
	return Data.url(content);
};