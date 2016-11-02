$(function() {
	$(".stat-name").lettering();
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    items:1,
	    nav: true,
	    navText: ["<span class='glyphicon glyphicon-chevron-left'></span>","<span class='glyphicon glyphicon-chevron-right'></span>"]
	});
	$('.feat-item').hover(function(){
		$(this).find('.feat-hcard').addClass('hcardopen')
	},
	function(){
		$(this).find('.feat-hcard').removeClass('hcardopen')
	})
});
