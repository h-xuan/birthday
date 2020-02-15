
$(function() {
  $(window).on("load", function() {


    $('.preloader').fadeOut('slow', function() {
      $(this).hide();
    });

  });
});


$(document).ready(function(){


	// setTimeout(function(){ $('#preloader').fadeOut() }, 1500);
	// $(".preloader").delay(1000).fadeOut("slow");
	$(".pulsestart").show();
	$(".resize").delay(3000).fadeOut();
	$(".pressbutt").hide();
	$(".pressbutt").delay(4000).fadeIn();
	$(".climb_boi").hide();
	$(".climb_one").hide();
	$(".climb_two").hide();
	$(".climb_three").hide();
	$(".climb_top").hide();
	$(".pulseone").hide();
	$(".pulsetwo").hide();
	$(".pulsethree").hide();
	$(".ouch").hide();
	$(".partyhorn").hide();
	$(".mail").hide();
	$(".reload").hide();

	$(".pulsestart").click(function(){
		$(this).hide();
		$(".pulsestart").hide();
		$(".pressbutt").fadeOut();
		$(".climb_boi").show();
		$(".pulseone").delay(500).fadeIn();
	});

	$(".pulseone").click(function(){
		$(this).hide();
		$(".pulseone").hide();
		$(".climb_boi").hide();
		$(".climb_one").show();
		$(".pulsetwo").delay(1200).fadeIn();
	});

	$(".pulsetwo").click(function(){
		$(this).hide();
		$(".pulsetwo").hide();
		$(".climb_one").hide();
		$(".climb_two").show();
		setTimeout(angry, 800);
		setTimeout(normal, 1600);
		$(".pulsethree").delay(1800).fadeIn();
	});

	$(".pulsethree").click(function(){
		$(this).hide();
		$(".pulsethree").hide();
		$(".climb_two").hide();
		$(".climb_three").show();
		setTimeout(reachTop, 2400);
		
	});

	function restart(){
		normal();
	// setTimeout(function(){ $('#preloader').fadeOut() }, 1500);
	// $(".preloader").delay(1000).fadeOut("slow");
	$(".pulsestart").show();
	$(".resize").delay(3000).fadeOut();
	$(".pressbutt").hide();
	$(".pressbutt").delay(4000).fadeIn();
	$(".climb_boi").hide();
	$(".climb_one").hide();
	$(".climb_two").hide();
	$(".climb_three").hide();
	$(".climb_top").hide();
	$(".pulseone").hide();
	$(".pulsetwo").hide();
	$(".pulsethree").hide();
	$(".ouch").hide();
	$(".partyhorn").hide();
	$(".mail").hide();
	$(".reload").hide();


	}

	function angry(){
		$("#leftbrow").css({"transform":"rotate(20deg)"});
		$("#rightbrow").css({"transform":"rotate(-20deg)"});
		$(".ouch").show();
	}
	function normal(){
		$("#leftbrow").css({"transform":"none"});
		$("#rightbrow").css({"transform":"none"});
		$("#lefteye").css({"height": "17px","border-radius": "45%"});
		$("#righteye").css({"height": "17px","border-radius": "45%"});
		$(".ouch").hide();
	}

	function reachTop(){
		$(".climb_three").hide();
		$(".climb_top").show();
		$(".partyhorn").show();
		$("#lefteye").css({"height": "17px",
	"width": "34px",
	"border-top-left-radius": "34px",
    "border-top-right-radius": "34px"});
		$("#righteye").css({"height": "17px",
	"width": "34px",
	"border-top-left-radius": "34px",
    "border-top-right-radius": "34px"});
		$(".eyebrow").css({"top":"-10px"});
		$(".mail").delay(800).fadeIn();
		$(".reload").delay(800).fadeIn();
		$('.reload').click(function() {
    	restart();
});
	}

});



