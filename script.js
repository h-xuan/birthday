
$(function() {
  $(window).on("load", function() {
    $('.preloader').fadeOut('slow', function() {
      $(this).remove();
    });
  });
});
$(document).ready(function(){


	$(".climb_boi").hide();
	$(".climb_one").hide();
	$(".climb_two").hide();
	$(".climb_three").hide();
	$(".pulseone").hide();
	$(".pulsetwo").hide();
	$(".pulsethree").hide();

	$(".pulsestart").click(function(){
		$(this).hide();
		$(".climb_boi").show();
		$(".pulseone").delay(500).show(0);
	});

	$(".pulseone").click(function(){
		$(this).hide();
		$(".climb_boi").hide();
		$(".climb_one").show();
		$(".pulsetwo").delay(1200).show(0);
	});

	$(".pulsetwo").click(function(){
		$(this).hide();
		$(".climb_one").hide();
		$(".climb_two").show();
		$(".pulsethree").delay(1800).show(0);
	});

	$(".pulsethree").click(function(){
		$(this).hide();
		$(".climb_two").hide();
		$(".climb_three").show();
		
	});
});