var target = $('.target');
var body = $('body');
var toplevel_items = $('.navmenu__item');

$(document).ready(function(){

	startPage();
	loadOffmenu();
	loadButtons();

	$('.navmenu__item a').on('click', function(){
		toplevelCheck($(this));
	});

	$('.trigger').on('click', loadPage);
});

function toplevelCheck(item) {
	var page = item.data('page');
	if (item.data('toplevel')) {
		if (!body.hasClass(page+'-open')){
			toplevel_items.removeClass('active');
			item.parent('.navmenu__item').addClass('active');
		}
	} else {
		toplevel_items.removeClass('active');
	}
}

function loadPage(e) {
	e.preventDefault();
	var page = $(this).data('page');
	toplevelCheck($(this));
	if (!body.hasClass(page+'-open')){
		target.slideToggle(function(){
			target.load('page--' + page + '.html', function(){
				if (page == 'ventajas' || page == 'quees') {
					ventajasPage();
				}
				target.slideToggle();
				body.removeClass();
				body.addClass(page+'-open');
			})
		});
	}
}

function startPage() {
	target.load('page--start.html', function(){
		setTimeout(function(){
			target.slideToggle();
		},500)
	});
	body.addClass('start-open');
}

function ventajasPage () {
	$('.first-feature').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible && visiblePartY == 'both') {
			$(this).addClass('inview');
			var k = 1;
			$(this).siblings('.feature, .spec').each(function(i, val){
				setTimeout(function(){
					$(val).addClass('inview');
				}, k*125);
				k++;
			});
			$(this).unbind('inview');
			setTimeout(function(){
				$('.feature, .spec').on('click', function(){
					if ($(this).siblings().hasClass('active')) {
						$(this).siblings().removeClass('active');
						$(this).toggleClass('active');
					} else {
						$(this).toggleClass('active');
					}
				});
			}, 1500);
		}
	});
}

function loadButtons () {
	$('.first-button').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible && visiblePartY == 'both') {
			$(this).addClass('inview');
			var k = 1;
			$(this).parent('.col-md-3').siblings().children('.highlight__item').each(function(i, val){
				setTimeout(function(){
					$(val).addClass('inview');
				}, k*250);
				k++;
			});
			$(this).unbind('inview');
		}
	});
}


function loadOffmenu () {
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
}

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