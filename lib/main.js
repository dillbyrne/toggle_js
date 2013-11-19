var widgets = require("sdk/widget");
var data = require("sdk/self").data;
var pref_serv = require("sdk/preferences/service");
var pref_js_enabled = "javascript.enabled";

var js_on_tooltip =  "Javascript Enabled\nClick to disable";
var js_off_tooltip = "Javascript Disabled\nClick to enable";

//monitor pref_js_enabled for changes outside of this addon
const {Ci, Cu} = require("chrome");
const {Services} = Cu.import("resource://gre/modules/Services.jsm", {});

function observe(subject, topic, data) {
    // instanceof actually also "casts" subject
    if (!(subject instanceof Ci.nsIPrefBranch)) {
        return;
    }
    setIconAndLabel();
}

var branch = Services.prefs.getBranch(pref_js_enabled)
branch.addObserver("", observe, false);

exports.onUnload = function() {
    // Need to remove our observer again! This isn't automatic and will leak
    // otherwise.
    branch.removeObserver("", observe);

    //restore changes made by addon
    pref_serv.reset(pref_js_enabled);
};




var widget = widgets.Widget({
  id: "toggle-js",
  label: "Toggle Javascript",
  contentURL: data.url("js_on.png"),
  onClick:toggleJS  
});


//set initial icon and label
setIconAndLabel();


function setIconAndLabel(){
  if(pref_serv.get(pref_js_enabled) == true){
    widget.tooltip = js_on_tooltip;
    widget.contentURL = data.url("js_on.png");   
  }
  else{
    widget.tooltip = js_off_tooltip;
    widget.contentURL = data.url("js_off.png");   
  }
}


function toggleJS(){
  
  if(pref_serv.get(pref_js_enabled) == true)
    pref_serv.set(pref_js_enabled,false);
  else
    pref_serv.set(pref_js_enabled,true);
}

