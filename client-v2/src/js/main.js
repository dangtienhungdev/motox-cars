/*-----------------------------------------------------------------

Template Name: Remons - Booking Rental HTML Template<
Author: Pixydrops
Author URI: https://themeforest.net/user/pixydrops/portfolio
Version: 1.0.0
Description: Remons - Booking Rental HTML Template<

-------------------------------------------------------------------
Js TABLE OF CONTENTS
-------------------------------------------------------------------

01. header
02. animated text with swiper slider
03. magnificPopup
04. counter up
05. wow animation
06. nice select
07. swiper slider
08. search popup
09. preloader
10. Gsap

------------------------------------------------------------------*/

(function ($) {
	'use strict';

	$(document).ready(function () {
		//>> Mobile Menu Js Start <<//
		$('#mobile-menu').meanmenu({
			meanMenuContainer: '.mobile-menu',
			meanScreenWidth: '1199',
			meanExpand: ['<i class="far fa-plus"></i>'],
		});

		//>> Sidebar Toggle Js Start <<//
		$('.offcanvas__close,.offcanvas__overlay').on('click', function () {
			$('.offcanvas__info').removeClass('info-open');
			$('.offcanvas__overlay').removeClass('overlay-open');
		});
		$('.sidebar__toggle').on('click', function () {
			$('.offcanvas__info').addClass('info-open');
			$('.offcanvas__overlay').addClass('overlay-open');
		});

		//>> Body Overlay Js Start <<//
		$('.body-overlay').on('click', function () {
			$('.offcanvas__area').removeClass('offcanvas-opened');
			$('.df-search-area').removeClass('opened');
			$('.body-overlay').removeClass('opened');
		});

		//>> Sticky Header Js Start <<//

		$(window).scroll(function () {
			if ($(this).scrollTop() > 250) {
				$('#header-sticky').addClass('sticky');
			} else {
				$('#header-sticky').removeClass('sticky');
			}
		});

		//>> Hero Slider 1 Start <<//
		const sliderActive2 = '.hero-slider';
		const sliderInit2 = new Swiper(sliderActive2, {
			loop: true,
			slidesPerView: 1,
			effect: 'fade',
			speed: 3000,
			autoplay: {
				delay: 6000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.image-array-left',
				prevEl: '.image-array-right',
			},
		});

		function animated_swiper(selector, init) {
			const animated = function animated() {
				$(selector + ' [data-animation]').each(function () {
					let anim = $(this).data('animation');
					let delay = $(this).data('delay');
					let duration = $(this).data('duration');
					$(this)
						.removeClass('anim' + anim)
						.addClass(anim + ' animated')
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration,
						})
						.one('animationend', function () {
							$(this).removeClass(anim + ' animated');
						});
				});
			};
			animated();
			init.on('slideChange', function () {
				$(sliderActive2 + ' [data-animation]').removeClass('animated');
			});
			init.on('slideChange', animated);
		}
		animated_swiper(sliderActive2, sliderInit2);

		//>> Hero Slider 2 Start <<//
		const sliderActive1 = '.hero-slider-2';
		const sliderInit1 = new Swiper(sliderActive1, {
			loop: true,
			slidesPerView: 1,
			effect: 'fade',
			speed: 2000,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.image-array-left',
				prevEl: '.image-array-right',
			},
		});
		// content animation when active start here
		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + ' [data-animation]').each(function () {
					let anim = $(this).data('animation');
					let delay = $(this).data('delay');
					let duration = $(this).data('duration');
					$(this)
						.removeClass('anim' + anim)
						.addClass(anim + ' animated')
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration,
						})
						.one('animationend', function () {
							$(this).removeClass(anim + ' animated');
						});
				});
			};
			animated();
			init.on('slideChange', function () {
				$(sliderActive1 + ' [data-animation]').removeClass('animated');
			});
			init.on('slideChange', animated);
		}
		animated_swiper(sliderActive1, sliderInit1);
		//>> Hero Slider End <<//

		//>> Hero Slider 1 Start <<//
		const sliderActive3 = '.hero-slider-3';
		const sliderInit3 = new Swiper(sliderActive3, {
			loop: true,
			slidesPerView: 1,
			effect: 'fade',
			speed: 3000,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.image-array-left',
				prevEl: '.image-array-right',
			},
		});

		function animated_swiper(selector, init) {
			const animated = function animated() {
				$(selector + ' [data-animation]').each(function () {
					let anim = $(this).data('animation');
					let delay = $(this).data('delay');
					let duration = $(this).data('duration');
					$(this)
						.removeClass('anim' + anim)
						.addClass(anim + ' animated')
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration,
						})
						.one('animationend', function () {
							$(this).removeClass(anim + ' animated');
						});
				});
			};
			animated();
			init.on('slideChange', function () {
				$(sliderActive3 + ' [data-animation]').removeClass('animated');
			});
			init.on('slideChange', animated);
		}
		animated_swiper(sliderActive3, sliderInit3);

		//>> Video Popup Start <<//
		$('.img-popup').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true,
			},
		});

		$('.img-popup-2').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true,
			},
		});

		$('.video-popup').magnificPopup({
			type: 'iframe',
			callbacks: {},
		});

		//>> Counterup Start <<//
		$('.count').counterUp({
			delay: 15,
			time: 4000,
		});

		//>> Wow Animation Start <<//
		new WOW().init();

		//>> Nice Select Start <<//
		$('select').niceSelect();

		//>> Car Rentals Slider Start <<//
		if ($('.car-rentals-slider').length > 0) {
			const carRentalsSlider = new Swiper('.car-rentals-slider', {
				spaceBetween: 30,
				speed: 1000,
				loop: true,

				navigation: {
					nextEl: '.array-prev',
					prevEl: '.array-next',
				},
				breakpoints: {
					1599: {
						slidesPerView: 4,
					},
					1199: {
						slidesPerView: 3,
					},
					991: {
						slidesPerView: 2,
					},
					767: {
						slidesPerView: 2,
					},
					575: {
						slidesPerView: 1,
					},
					0: {
						slidesPerView: 1,
					},
				},
			});
		}

		if ($('.car-rentals-slider-2').length > 0) {
			const carRentalsSlider2 = new Swiper('.car-rentals-slider-2', {
				spaceBetween: 30,
				speed: 1000,
				loop: true,
				navigation: {
					nextEl: '.array-prev',
					prevEl: '.array-next',
				},
				breakpoints: {
					1199: {
						slidesPerView: 3,
					},
					991: {
						slidesPerView: 2,
					},
					767: {
						slidesPerView: 2,
					},
					575: {
						slidesPerView: 1,
					},
					0: {
						slidesPerView: 1,
					},
				},
			});
		}

		//>> Brand Rentals Slider Start <<//
		if ($('.brand-slider').length > 0) {
			const brandSlider = new Swiper('.brand-slider', {
				spaceBetween: 30,
				speed: 2000,
				loop: true,
				autoplay: {
					delay: 2000,
					disableOnInteraction: false,
				},
				navigation: {
					nextEl: '.array-prev-2',
					prevEl: '.array-next-2',
				},
				breakpoints: {
					1399: {
						slidesPerView: 6,
					},
					1199: {
						slidesPerView: 5,
					},
					991: {
						slidesPerView: 4,
					},
					767: {
						slidesPerView: 3,
					},
					575: {
						slidesPerView: 1,
					},
					0: {
						slidesPerView: 1,
					},
				},
			});
		}

		//>> Testimonial Slider Start <<//
		if ($('.testimonial-slider').length > 0) {
			const testimonialSlider = new Swiper('.testimonial-slider', {
				spaceBetween: 30,
				speed: 2000,
				loop: true,
				autoplay: {
					delay: 2000,
					disableOnInteraction: false,
				},
				pagination: {
					el: '.dot',
					clickable: true,
				},
				breakpoints: {
					1199: {
						slidesPerView: 3,
					},
					991: {
						slidesPerView: 2,
					},
					767: {
						slidesPerView: 2,
					},
					575: {
						slidesPerView: 1,
					},
					0: {
						slidesPerView: 1,
					},
				},
			});
		}

		if ($('.testimonial-slider-2').length > 0) {
			const testimonialSlider2 = new Swiper('.testimonial-slider-2', {
				spaceBetween: 30,
				speed: 2000,
				loop: true,
				autoplay: {
					delay: 2000,
					disableOnInteraction: false,
				},
				navigation: {
					nextEl: '.array-prev',
					prevEl: '.array-next',
				},
			});
		}

		if ($('.testimonial-slider-3').length > 0) {
			const testimonialSlider3 = new Swiper('.testimonial-slider-3', {
				spaceBetween: 30,
				speed: 2000,
				loop: true,
				autoplay: {
					delay: 2000,
					disableOnInteraction: false,
				},

				navigation: {
					nextEl: '.array-prev',
					prevEl: '.array-next',
				},
			});
		}

		//>> Car Slider Slider Start <<//
		if ($('.car-slider').length > 0) {
			const carSlider = new Swiper('.car-slider', {
				spaceBetween: 20,
				speed: 2000,
				loop: true,
				autoplay: {
					delay: 1000,
					disableOnInteraction: false,
				},
				breakpoints: {
					1399: {
						slidesPerView: 6,
					},
					1199: {
						slidesPerView: 5,
					},
					991: {
						slidesPerView: 4,
					},
					767: {
						slidesPerView: 3,
					},
					575: {
						slidesPerView: 1,
					},
					0: {
						slidesPerView: 1,
					},
				},
			});
		}

		//>> Scroll Js Start <<//
		const scrollPath = document.querySelector('.scroll-up path');
		const pathLength = scrollPath.getTotalLength();
		scrollPath.style.transition = scrollPath.style.WebkitTransition = 'none';
		scrollPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		scrollPath.style.strokeDashoffset = pathLength;
		scrollPath.getBoundingClientRect();
		scrollPath.style.transition = scrollPath.style.WebkitTransition =
			'stroke-dashoffset 10ms linear';

		const updatescroll = function () {
			let scrolltotal = $(window).scrollTop();
			let height = $(document).height() - $(window).height();
			let scrolltotalheight = pathLength - (scrolltotal * pathLength) / height;
			scrollPath.style.strokeDashoffset = scrolltotalheight;
		};
		updatescroll();

		$(window).scroll(updatescroll);
		const offset = 50;
		const duration = 950;

		$(window).on('scroll', function () {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-up').addClass('active-scroll');
			} else {
				jQuery('.scroll-up').removeClass('active-scroll');
			}
		});

		$('.scroll-up').on('click', function (event) {
			event.preventDefault();
			jQuery('html, body').animate(
				{
					scrollTop: 0,
				},
				duration
			);
			return false;
		});

		//>> Search Popup Start <<//
		const $searchWrap = $('.search-wrap');
		const $navSearch = $('.nav-search');
		const $searchClose = $('#search-close');

		$('.search-trigger').on('click', function (e) {
			e.preventDefault();
			$searchWrap.animate({ opacity: 'toggle' }, 500);
			$navSearch.add($searchClose).addClass('open');
		});

		$('.search-close').on('click', function (e) {
			e.preventDefault();
			$searchWrap.animate({ opacity: 'toggle' }, 500);
			$navSearch.add($searchClose).removeClass('open');
		});

		function closeSearch() {
			$searchWrap.fadeOut(200);
			$navSearch.add($searchClose).removeClass('open');
		}

		$(document.body).on('click', function (e) {
			closeSearch();
		});

		$('.search-trigger, .main-search-input').on('click', function (e) {
			e.stopPropagation();
		});

		//>> Gsap Start <<//

		if ($('.car-sale-wrapper').length > 0) {
			const car = gsap.timeline({
				scrollTrigger: {
					trigger: '.car-sale-wrapper',
					scrub: 1,
					end: '+=1000',
				},
			});
			car.to('.car-shape', { xPercent: 20, ease: 'none' });
		}

		if ($('.cta-car-booking-items').length > 0) {
			const car = gsap.timeline({
				scrollTrigger: {
					trigger: '.cta-car-booking-items',
					scrub: 1,
					end: '+=1000',
				},
			});
			car.to('.car-image', { xPercent: -20, ease: 'none' });
		}

		$(function () {
			$(
				'#datepicker, #datepicker2, #datepicker3, #datepicker4, #datepicker5, #datepicker6, #datepicker7, #datepicker8, #datepicker9, #datepicker10, #datepicker11'
			).datepicker({
				autoclose: true,
				todayHighlight: true,
			});
		});
	}); // End Document Ready Function

	function loader() {
		$(window).on('load', function () {
			// Animate loader off screen
			$('.preloader').addClass('loaded');
			$('.preloader').delay(600).fadeOut();
		});
	}

	loader();
})(jQuery); // End jQuery
