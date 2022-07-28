

$(document).ready(function(){
	$('.hambu').click(function(){
        $('#menu-min').toggleClass('vis');
        $('body').toggleClass('oh');
        $('#nav-icon4').toggleClass('open');
    });
	$('#catalog-sub').click(function(){
        $('#catalog-submenu').toggleClass('vis');
        $('body').addClass('oh');
        $('.back').addClass('vis');
		$('.hambu').removeClass('vis');
    });
	$('#brand-sub').click(function(){
        $('#brand-submenu').toggleClass('vis');
        $('body').addClass('oh');
        $('.back').addClass('vis');
		$('.hambu').removeClass('vis');
    });
	$('.back').click(function(){
        $('#catalog-submenu, #brand-submenu').removeClass('vis');
        $(this).removeClass('vis');
		$('.hambu').addClass('vis');
    });

	$('.filter__title').click(function (e) {
        $('.filter').not($(this).parents('.filter')).removeClass('filter_act');
        $(this).parents('.filter').toggleClass('filter_act');
    });
	// $('body').click(function () {
    //     $('.filter').removeClass('filter_act');
    // });
	// $('.filter__dropdown').click(function (e) {
    //     e.stopPropagation();
    //     $('.filter').not($(this).parents('.filter')).removeClass('filter_act');
    //     $(this).parents('.filter').toggleClass('filter_act');
    // });.filter_min
	$('.filter').click(function (e) {
        e.stopPropagation();
    });

	$('.filter__cat input[type="checkbox"]').change(function(){
        if (this.checked) {
            $(this).parents('.filter__cat').addClass('filter__cat_act');
        }else{
            $(this).parents('.filter__cat').removeClass('filter__cat_act');
        }
    });

    $('.filter__cat input[type="checkbox"]:checked').parents('.filter__cat').addClass('filter__cat_act');




	$('.filter-btn').click(function(){
        $('#filter-start').toggleClass('vis');
        $('body').addClass('oh');
    });
	$('.filter_close').click(function(){
        $('#filter-start').removeClass('vis');
		$('body').removeClass('oh');
    });
	
	$('.filter_back').click(function(){
        $('.filter_min-sub').removeClass('vis');
		$('body').removeClass('oh');
    });
	$('#filter-price').click(function(){
        $('#f5_min').toggleClass('vis');
        $('body').addClass('oh');
    });
	$('#f1_min').click(function(){
        $('#f1_min-filter').toggleClass('vis');
        $('body').addClass('oh');
    });
});