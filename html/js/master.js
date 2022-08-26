

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
	$('.add-fav').click(function (e) {
        $(this).toggleClass('act');
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

	



	$('#f5_min').click(function(){
        $('#f5').toggleClass('vis-min');
        $('body').addClass('oh');
    });
	$('#f1_min').click(function(){
        $('#f1').toggleClass('vis-min');
        $('body').addClass('oh');
    });
	$('#f2_min').click(function(){
        $('#f2').toggleClass('vis-min');
        $('body').addClass('oh');
    });
	$('#f3_min').click(function(){
        $('#f3').toggleClass('vis-min');
        $('body').addClass('oh');
    });
	$('#f4_min').click(function(){
        $('#f4').toggleClass('vis-min');
        $('body').addClass('oh');
    });

});
$(document).on('click','.vis-min .filter__title span',function(){
	$('.filter').removeClass('vis-min');
	//$('body').removeClass('oh');
});
$(document).on('click','.add-card-btn:not(.btn_dis)',function(){
	$('.note').addClass('act');
    setTimeout(function(){
        $('.note').removeClass('act');
    }, 2000);
});
$(document).on('click','.promo',function(){
	$('.note').addClass('act');
    setTimeout(function(){
        $('.note').removeClass('act');
    }, 2000);
});
$(document).on('click','.main-nav span',function(){
	$(this).toggleClass('act');
});