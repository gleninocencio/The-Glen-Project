$(function(){
	$('.mobile-nav-trigger').on('click', function(){
		$(this).parents('.left_nav').siblings('.right_nav').toggleClass('mobile-nav-open');
	});
});