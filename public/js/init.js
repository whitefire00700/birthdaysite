//Hook up the tweet display

$(document).ready(function() {
						   
	$("#countdown").countdown({
				date: "09 October 2017 00:00:00",
				format: "on"
			},
			
			function() {
				alert('Inside');
			});
});	
