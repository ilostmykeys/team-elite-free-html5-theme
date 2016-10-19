$(document).ready(function(){

	// MAIN-NAVIGATION - TOGGLER

	var mainNav = $('#main-nav');

	var effectType = 'slide';
		// Default menu reveal effect : slide
		// Other options: puff, slide

	var effectDirection = 'right';
		// Default menu reveal direction : right
		// Other options: left, right, up, down

	$('#toggle-nav').click(function(){

		mainNav.toggle(effectType, { direction: effectDirection }, 400);

	});

	$(window).resize(function(){


		// Check if window's width is greater than 950.
		// Show main-navigation if true.
		// Prevents menu from staying hidden after changing
		// viewport's width.
		
		pageWidth = $(document).width();

		if ( pageWidth >= 950 ) {

			$('#main-nav').show('fast');
			$('#main-n')

		}
			
	});

	// Prevent both menu and toggler from staying hidden
	// by checking if main-navigation is visible every 2 seconds.

	setInterval(function(){

		// If not visible
		if ( !mainNav.is(':visible') ) {
			
			$('#toggle-nav').show('slide', 100);

		}

	}, 2000);

	// STICKY-MENU ! FEATURE

	// Set 'stickyMenu' variable to 'false' if you want to disable this feature.
	stickyMenu = true;

	// Check if page === index, if not, prepend some
	// linebreaks to prevent the menu from overlapping any content.
	// It's not wrong if it works, right ?
	if ( !$('#main-header').hasClass('index-page') ) {
		$('body').prepend('<br><br><br>');
	}

	if ( stickyMenu === true ) {
		$('#main-header').css({
			'position'     :'fixed',
			'zIndex'       :'99',
		});
	}

	// BACK TO THE TOP ! FEATURE.

	// Set 'backTop' variable to 'false' if you want to disable this feature.
	var backTop = true;

	var backTop_btn = $('.backTop');

	backTop_btn.on('click', function(){

		$('html, body').animate({
			scrollTop: 0
		}, 500);

	});

	if ( backTop === true ) {

		// Every time the user scrolls, run this function to get his position.
		$(window).scroll(function(){

			var scroll = $(window).scrollTop();

			// Reveal the backTop button if the user scrolls for more than 500 pixels.
			if ( scroll >= 500 ) {
				backTop_btn.show('puff', 200);
			// Hide the backTop button as soon as the user is back on top.
			} else {
					backTop_btn.hide('puff', 200);
			}

		});

	}

});