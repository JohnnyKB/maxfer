$(document).ready(function(){
	$('.navmenu__item').on('click', function(){
		$(this).toggleClass('active');
	});
	$('.feature').on('click', function(){
		if ($(this).siblings().hasClass('active')) {
			$(this).siblings().removeClass('active');
			$(this).toggleClass('active');
		} else {
			$(this).toggleClass('active');
		}
	});
});