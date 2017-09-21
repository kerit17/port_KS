$(document).ready(function(){
	var home;
	var about;
	var projects;
	var connect;
	
	// On load
		$(".home").show();
		$(".about").hide();
		$(".projects").hide();
		$(".connect").hide();

	//Home Button pushed
	$(".homeBtn").on("click", function(){
		$(".home").show();
		$(".about").hide();
		$(".projects").hide();
		$(".connect").hide();
	});

	// About Button pushed
	$(".aboutBtn").on("click", function(){
		$(".home").hide();
		$(".about").show();
		$(".projects").hide();
		$(".connect").hide();
	});

	// Projects Button pushed
	$(".projectsBtn").on("click", function(){
		$(".home").hide();
		$(".about").hide();
		$(".projects").show();
		$(".connect").hide();
	});
	
	//Connect button pushed
	$(".connectBtn").on("click", function(){
		$(".home").hide();
		$(".about").hide();
		$(".projects").show();
		$(".connect").hide();
	});

});