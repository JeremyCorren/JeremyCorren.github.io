$(document).ready(function() {
	
	$("#meat").css("display", "none");

    $("#meat").fadeIn(2000);
    
	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("#meat").fadeOut(1000, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
	
});
