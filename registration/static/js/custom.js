//custom.js
(function ($) {
    "use strict";

    // Owl Carousel initialization
    $('.owl-show-events').owlCarousel({
        items: 4,
        loop: true,
        dots: true,
        nav: true,
        autoplay: true,
        margin: 30,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 4 }
        }
    });

    // Countdown Timer
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    let countDown = new Date('Mar 31, 2025 09:30:00').getTime();
    let x = setInterval(function () {
        let now = new Date().getTime(),
            distance = countDown - now;

        let daysElem = document.getElementById('days');
        let hoursElem = document.getElementById('hours');
        let minutesElem = document.getElementById('minutes');
        let secondsElem = document.getElementById('seconds');

        if (daysElem && hoursElem && minutesElem && secondsElem) {
            daysElem.innerText = Math.floor(distance / day);
            hoursElem.innerText = Math.floor((distance % day) / hour);
            minutesElem.innerText = Math.floor((distance % hour) / minute);
            secondsElem.innerText = Math.floor((distance % minute) / second);
        }

        // Stop the countdown if the date has passed
        if (distance < 0) {
            clearInterval(x);
            console.log("Countdown finished!");
        }
    }, second);

    // Tabs initialization
    $(function () {
        $("#tabs").tabs();
    });

    // Schedule Filter
    $('.schedule-filter li').on('click', function () {
        var tsfilter = $(this).data('tsfilter');
        $('.schedule-filter li').removeClass('active');
        $(this).addClass('active');
        if (tsfilter === 'all') {
            $('.schedule-table').removeClass('filtering');
            $('.ts-item').removeClass('show');
        } else {
            $('.schedule-table').addClass('filtering');
            $('.ts-item').each(function () {
                $(this).removeClass('show');
                if ($(this).data('tsmeta') === tsfilter) {
                    $(this).addClass('show');
                }
            });
        }
    });

    // Scroll Reveal Animation Initialization
    if (typeof ScrollReveal !== 'undefined') {
        window.sr = ScrollReveal();
        sr.reveal('.reveal', {
            duration: 1000,
            origin: 'bottom',
            distance: '50px'
        });
    } else {
        console.warn("ScrollReveal is not defined. Please include the library.");
    }

	if ($('.menu-trigger').length) {
		$(".menu-trigger").on('click', function () {
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}

    // Page Loading Animation
    $(window).on('load', function () {
        $('#js-preloader').addClass('loaded');
    });

    // Window Resize Mobile Menu Fix
    $(window).on('resize', function () {
        mobileNav();
    });

    function mobileNav() {
        var width = $(window).width();
        $('.submenu').on('click', function () {
            if (width < 767) {
                $('.submenu ul').removeClass('active');
                $(this).find('ul').toggleClass('active');
            }
        });
    }

})(window.jQuery);

