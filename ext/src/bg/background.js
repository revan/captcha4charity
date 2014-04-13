// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

/**
 * Updates icon badge to jobCount
 */
var updateJobCount = function(jobCount){
	if(jobCount==0){
		chrome.browserAction.setBadgeText({text:""});
	}else{
		chrome.browserAction.setBadgeText({text:""+jobCount});
	}
};

//five second heartbeat, check for new jobs
setInterval(function(){
	//TODO: GET request

	updateJobCount(4);
}, 5000);