$(document).ready(function(){
	$('.slider').slick({
		dots: true,
		responsive: [
			{
				breakpoint: 600,
				settings: {
				  arrows: false
				}
			  }
		]
	});
	$('.popular-products-group').slick({
		infinite: true,
  		slidesToShow: 4,
		slidesToScroll: 4,
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
			  breakpoint: 600,
			  settings: {
				arrows: false,
				centerMode: true,
				slidesToShow: 2
			  }
			},
			{
				breakpoint: 480,
				settings: {
				  arrows: false,
				  centerMode: true,
				  slidesToShow: 1
				}
			  }
		]
	});
	$('.team-slider').slick({
		infinite: true,
  		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 960,
			  settings: {
				//centerMode: true,
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1
			  }
			}
		]
	});
});