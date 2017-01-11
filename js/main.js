$(document).ready(function() {
	$("#meat").css("display", "none");
    $("#meat").fadeIn(1000);
    
	$("a").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("#meat").fadeOut(1000, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
	
});
