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
	$('.first-feature').bind('inview', function(event, visible) {
		if (visible) {
			$(this).addClass('inview');
			var k = 1;
			$(this).siblings('.feature').each(function(i, val){
				setTimeout(function(){
					$(val).addClass('inview');
				}, k*125);
				k++;
			});
		}
	});
$("#offmenu").mmenu({
		"slidingSubmenus": false,
		"offCanvas": {
		"position": "right"
	},
	"extensions": [
		"effect-slide",
		"pageshadow",
		"theme-white",
		"border-full"
		]
	});
});