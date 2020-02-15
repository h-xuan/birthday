$(document).ready(function(){

	$("#moving").hide();

	$("p").click(function(){
		$(this).hide();
		$("#showp").show();
	});

	$("#idle").click(function(){
		$(this).hide();
		$("#moving").show();
	});
});