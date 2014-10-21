var ui = require("sdk/ui"),
    Data = require("./Data"),
    PrefServ = require("./PrefServ"),
    button,
    js_on_tooltip =  "Javascript Enabled\nClick to disable",
	js_off_tooltip = "Javascript Disabled\nClick to enable";

exports.init = function(){
  
    button = ui.ActionButton({
        id: "toggle-js",
        label:"Toggle javascript",
        icon:{
			"16": Data.get('images/js_on16.png'),
			"32": Data.get('images/js_on32.png'),
			"64": Data.get('images/js_on64.png'),
		},
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
    	button.label = js_on_tooltip;
    	button.icon["16"] = Data.get("images/js_on.png");   
    	button.icon["32"] = Data.get("images/js_on.png");   
    	button.icon["64"] = Data.get("images/js_on.png");   
    	button.icon =  Data.get("images/js_on64.png");  
  	}
  	else{
    	button.label = js_off_tooltip;
    	button.icon["16"] = Data.get("images/js_off.png");   
    	button.icon["32"] = Data.get("images/js_off.png");   
    	button.icon["64"] = Data.get("images/js_off.png");   
    	button.icon =  Data.get("images/js_off64.png");  
  	}
};


exports.setIconAndLabel = function(){
	setupIconAndLabel();
};
