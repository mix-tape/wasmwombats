// ==========================================================================
//
//  Scripts
//    Initialisers, configuration and interactions
//
// ==========================================================================

// --------------------------------------------------------------------------
//   Variables
// --------------------------------------------------------------------------



// --------------------------------------------------------------------------
//   Breakpoints
// --------------------------------------------------------------------------

enquire.register("screen and (max-width: 480px)", {

	match : function() {

	},

	unmatch : function() {

	}

});


// --------------------------------------------------------------------------
//   General
// --------------------------------------------------------------------------

$(function() {

	// --------------------------------------------------------------------------
	//   Initialise
	// --------------------------------------------------------------------------

	FastClick.attach(document.body);

	$( '.swipebox' ).swipebox();

	$('#swipebox-overlay').click(function() {
		$('.swipebox').closeSlide();
	});

	// --------------------------------------------------------------------------
	//   Global
	// --------------------------------------------------------------------------

	$('a[href="#"]').addClass('fauxlink').click(function(event) {
		event.preventDefault();
	});


	// --------------------------------------------------------------------------
	//   Hero Slider
	// --------------------------------------------------------------------------

	if ($('#hero').length > 0) {

		// http://kenwheeler.github.io/slick/#settings

		$('#hero').slick({
			autoplay: true,
			slidesToShow: 1,
			lazyLoad: 'progressive',
			speed: 600,
			dots: true
		});

	}


	// --------------------------------------------------------------------------
	//   Menu effects
	// --------------------------------------------------------------------------

	var menuToggle = '<div id="menu-toggle" class="icon"></div>',
			siteOverlay = '<div class="site-overlay"></div>';

	//if (!$('.site-overlay').length) $('body').prepend(siteOverlay); // Un-comment for side menu

	if (!$('#menu-toggle').length) $('#header-content').prepend(menuToggle);

	$('#menu-toggle').click(function() {

		$('html').toggleClass('js-nav');
		$('#nav-wrapper').focus();

		($(this).text() === "") ? $(this).text("") : $(this).text("");

	});

	$('#main-nav li').hoverIntent( {


	over: function() {

		$(this).children('.sub-menu').show(0, function() {
			$(this).css("overflow","visible");
		});
		if ($(this).children('.sub-menu').length) {
			$(this).addClass('active');
		}
	}, timeout: 200,


	out: function() {

		$(this).children('.sub-menu').delay(200).hide(0, function() {
			$(this).parent().removeClass('active');
		}).css("overflow","visible");


	} });


	$('#main-nav li .sub-menu').parent('li').addClass('menu-parent');

	$('.current-menu-item').closest('.menu-parent').addClass('current-menu-parent');

	$('.site-overlay').click(function(event) {

		if ($('html').hasClass('js-nav')) {

			event.stopPropagation();

		 	$('html').removeClass('js-nav');

		 	event.preventDefault();
		}

	});


	// --------------------------------------------------------------------------
	//   Hero Slider
	// --------------------------------------------------------------------------

	if ($('.slideshow').length > 0) {

		$(".slideshow").slick({
			autoplay: true,
			slidesToShow: 1,
			lazyLoad: 'progressive',
			speed: 600,
		});

	}

	// --------------------------------------------------------------------------
	//   Gallery
	// --------------------------------------------------------------------------

	// if ($('section.gallery').length > 0) {

	// 	$("section.gallery").slick({
	// 		autoplay: true,
	// 		slidesToShow: 1,
	// 		lazyLoad: 'progressive',
	// 		speed: 600,
	// 		slide: 'figure'
	// 	});

	// }

	// --------------------------------------------------------------------------
	//   Tabs / Accordion
	// --------------------------------------------------------------------------

	$('.accordion-tabs').children('.header-and-content').first().children('a').addClass('is-active')
		.next().addClass('is-open').show();

	$('.accordion-tabs').on('click', '.header-and-content > a', function(event) {

		if (!$(this).hasClass('is-active')) {

			event.preventDefault();
			$('.accordion-tabs .is-open').removeClass('is-open').hide();
			$(this).next().toggleClass('is-open').toggle();
			$('.accordion-tabs').find('.is-active').removeClass('is-active');
			$(this).addClass('is-active');

		} else {

			event.preventDefault();

		}

	});


	// --------------------------------------------------------------------------
	//   Accordion
	// --------------------------------------------------------------------------

	$('.accordion > .header-and-content > a').click(function() {
		console.log('click');
		$(this).next('.content').slideToggle(300, 'easeInOutExpo');
		$(this).toggleClass('active');
	});


	// --------------------------------------------------------------------------
	//   Stop auto scrolling on user override
	// --------------------------------------------------------------------------

	if(window.addEventListener) document.addEventListener('DOMMouseScroll', stopScroll, false);
		document.onmousewheel = stopScroll;

	function stopScroll() {
		$('html, body').stop(true, false);	// Stops and dequeue's animations
	}


	// --------------------------------------------------------------------------
	//   ScrollTo
	// --------------------------------------------------------------------------

	function scrollTo(anchor) {

		$('html, body').stop().animate({

			scrollTop: $(anchor).offset().top

		}, 1200,'easeInOutExpo');

	}


	// --------------------------------------------------------------------------
	//   Hash Scroll
	// --------------------------------------------------------------------------

	if (window.location.hash && $(window.location.hash).length) {
		setTimeout(function() {
		  if (location.hash) {
		    window.scrollTo(0, 0);
		  }
		}, 1);

		setTimeout(
			function(){
				scrollTo(window.location.hash);
			}, 400);
	}


	// --------------------------------------------------------------------------
	//   Infinite scroll
	// --------------------------------------------------------------------------

	if ($('body').not('.paged').is('.archive, .blog')) {

		var ias = $.ias({
			container:	'#content',
			item:				'.post',
			pagination: '.paging',
			next:				'.paging a.next',
			delay:			'1000',

		});

		ias.extension(new IASTriggerExtension({
			html:	'<div class="ias-trigger" style="text-align: center; cursor: pointer;"><a data-no-instant>{text}</a></div>'
		}));
		ias.extension(new IASSpinnerExtension());
		ias.extension(new IASNoneLeftExtension());
		ias.extension(new IASPagingExtension());


		ias.on('pageChange', function(pageNum, scrollOffset, url) {
			history.pushState(null, null, url);
		});

	}

});


// --------------------------------------------------------------------------
//   Helpers
// --------------------------------------------------------------------------

var hasParent = function(el, id)
{
	if (el) {
		do {
			if (el.id === id) {
				return true;
			}
			if (el.nodeType === 9) {
				break;
			}
		}
		while((el = el.parentNode));
	}
	return false;
};

var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) {
			uniqueId = "Don't call this twice without a uniqueId";
		}
		if (timers[uniqueId]) {
			clearTimeout (timers[uniqueId]);
		}
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();
