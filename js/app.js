$(function() {
	$(".stat-name").lettering();
	$('.about-slider').owlCarousel({
	    loop:true,
	    margin:10,
	    items:1,
	    nav: true,
	    navText: ["<span class='glyphicon glyphicon-chevron-left'></span>","<span class='glyphicon glyphicon-chevron-right'></span>"]
	});
	$('.testi-slider').owlCarousel({
	    autoplay: true,
		center: true,
		loop: true,
	    items:3,
	    margin:15,
	    nav: true,
	    navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
	})
	$('.feat-item').hover(function(){
		$(this).find('.feat-hcard').addClass('hcardopen')
	},
	function(){
		$(this).find('.feat-hcard').removeClass('hcardopen')
	})
	$('.team-member').hover(function(){
		$(this).find('.team-info').addClass('tcardopen')
	},
	function(){
		$(this).find('.team-info').removeClass('tcardopen')
	})
});
