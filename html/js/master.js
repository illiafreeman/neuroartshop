

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
	$('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });






});