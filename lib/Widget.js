var widget = require("sdk/widget"),
    Data = require("./Data"),
    PrefServ = require("./PrefServ"),
    widgetObj,
    js_on_tooltip =  "Javascript Enabled\nClick to disable",
	js_off_tooltip = "Javascript Disabled\nClick to enable";

exports.init = function(){
  
    widgetObj = widget.Widget({
        id: "toggle-js",
        label:"Toggle javascript",
        contentURL: Data.get('images/js_on.png'),
        onClick:toggleJS
    });

    //set icon and label to reflect the initial state
    setupIconAndLabel();

};

function toggleJS(){
  
	if(PrefServ.getter("javascript.enabled") == true)
		PrefServ.setter("javascript.enabled",false);
  	else
    	PrefServ.setter("javascript.enabled",true);
};



function setupIconAndLabel(){
	if(PrefServ.getter("javascript.enabled") == true){
    	widgetObj.tooltip = js_on_tooltip;
    	widgetObj.contentURL = Data.get("images/js_on.png");   
  	}
  	else{
    	widgetObj.tooltip = js_off_tooltip;
    	widgetObj.contentURL = Data.get("images/js_off.png");   
  	}
};


exports.setIconAndLabel = function(){
	setupIconAndLabel();
};