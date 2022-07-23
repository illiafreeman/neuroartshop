$(document).ready(function(){
	$('.slider').slick({
		dots: true
	});
	$('.popular-products-group').slick({
		infinite: true,
  		slidesToShow: 4,
		slidesToScroll: 1
	});
	$('.team-slider').slick({
		infinite: true,
  		slidesToShow: 3,
		slidesToScroll: 1
	});
});