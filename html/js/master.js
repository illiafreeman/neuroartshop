$(document).ready(function(){
	$('.hambu').click(function(){
        $('#menu-min').toggleClass('vis');
        $('body').toggleClass('oh');
        $('#nav-icon4').toggleClass('open');
    });
	$('#catalog-sub').click(function(){
        $('#catalog-submenu').toggleClass('vis');
        $('body').addClass('oh');
    });
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