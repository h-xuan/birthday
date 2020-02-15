$(document).ready(function(){

	$(".climb_boi").hide();
	$(".climb_one").hide();
	$(".pulseone").hide();

	$(".pulsestart").click(function(){
		$(this).hide();
		$(".climb_boi").show();
		$(".pulseone").delay(500).show(0);
	});

	$(".pulseone").click(function(){
		$(this).hide();
		$(".climb_boi").hide();
		$(".climb_one").show();
	});
});