$(document).ready(function(){
	$('.slider').slick({
		dots: true
	});
	$('.popular-products-group').slick({
		infinite: true,
  		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 960,
			  settings: {
				centerMode: true,
				arrows: false,
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			  }
			}
		  ]
	});
	$('.team-slider').slick({
		infinite: true,
  		slidesToShow: 3,
		slidesToScroll: 1
	});
});