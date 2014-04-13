$('#newButton').click(function () {

	$('#prompt').attr('src', 'http://i.imgur.com/JtgFKl5.jpg')
});

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