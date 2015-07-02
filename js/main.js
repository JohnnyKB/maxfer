$(document).ready(function(){

	// Returns a function, that, as long as it continues to be invoked, will not
	// be triggered. The function will be called after it stops being called for
	// N milliseconds. If `immediate` is passed, trigger the function on the
	// leading edge, instead of the trailing.
	debounce = function(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

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
	$('.first-feature').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible && visiblePartY == 'both') {
			$(this).addClass('inview');
			var k = 1;
			$(this).siblings('.feature').each(function(i, val){
				setTimeout(function(){
					$(val).addClass('inview');
				}, k*125);
				k++;
			});
			$(this).unbind('inview');
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

	// var reloadSource = debounce(function(e) {
	// 	var www = $(window).width();
	// 	$('.target').attr('src', 'http://placehold.it/'+www+'x470')
	// }, 150, false);

	// $(window).on('resize', reloadSource);

	
});