var baseurl = 'http://www.captcha4charity.org/'

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
	//GET request to /numjobs
	updateJobCount($.get(baseurl+'numjobs'));
}, 5000);