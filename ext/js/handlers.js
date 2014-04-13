var baseurl = 'http://www.captcha4charity.org/'
var rid = 0;

//set focus on captcha field
setTimeout( function() { $( '#promptField' ).focus() }, 100 );

/**
 * CAPTCHA fetch button callback
 */
$('#newButton').click(function () {

	//$("#DateCountdown").fadeOut();
	
	//GET /?

	//$('#prompt').attr('src', url);

	//$("#DateCountdown").TimeCircles().destroy();
	$("#DateCountdown").attr('data-date', '2015-01-01 00:23:00');
	//instantiates countdown
	$("#DateCountdown").TimeCircles({
	    "animation": "smooth",
	    "bg_width": 1,
	    "fg_width": 0.04,
	    "circle_bg_color": "#EEEEEE",
	    "time": {
	        "Days": {
	            "text": "Days",
	            "color": "#CCCCCC",
	            "show": false
	        },
	        "Hours": {
	            "text": "Hours",
	            "color": "#CCCCCC",
	            "show": false
	        },
	        "Minutes": {
	            "text": "Minutes",
	            "color": "#CCCCCC",
	            "show": true
	        },
	        "Seconds": {
	            "text": "Seconds",
	            "color": "#CCCCCC",
	            "show": true
	        }
	    }
	});
});

//click the CAPTCHA fetch button on load:
//$('#newButton').click();


/**
 * Submit button for CAPTCHA prompt
 */
$('#promptButton').click(function(){
	$('#prompt').attr('src', '');
	$("#DateCountdown").TimeCircles().destroy();

	//POST to /solve with a form (rid, soln)
	$.post(baseurl+'solve', {rid:rid, soln:$('#promptField').val()});

	//click the CAPTCHA fetch button
	//$('#newButton').click();
	$('#promptField').val('').focus();
})

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

/**
 * Fetches score of team
 */
var fetchTeamScore = function(teamName){
	//TODO GET request
	return 3.15;
}

/**
 * Heartbeat function updates stats
 */
setInterval(function(){
	$('#earnings').text('$'+fetchTeamScore($('#teamField').val()));
}, 5000);
$('#earnings').text('$'+fetchTeamScore($('#teamField').val()));
