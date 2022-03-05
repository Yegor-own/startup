$(document).ready(function() {
	$('.header__burger, .header__link').click(function() {
		$('.header__burger,.header__list').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$(window).scroll(function() {
		var target = $(this).scrollTop();
		if(target == 0) {
			$('.header__nav').removeClass('scroll');
		} else {
			$('.header__nav').addClass('scroll');
		}
	});

	let windowInnerWidth = window.innerWidth;
	let slides = 4;
	if (windowInnerWidth <= 1024) {
		slides = 3;
		if (windowInnerWidth <= 768) {
			slides = 2;
			if (windowInnerWidth <= 647) {
				slides = 1;
			}
		}
	}
	$('.about-us__slider').slick({
		slidesToShow: slides,
		infinite: false,
	});
	$('.blog-slider__body').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		infinite: true,
	});
});