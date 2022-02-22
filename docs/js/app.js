$(document).ready(function() {
	$('.header__burger').click(function() {
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
	if (windowInnerWidth <= 768) {
		slides = 2;
		if (windowInnerWidth <= 425) {
			slides = 1;
		}
	}
	$('.about-us__slider').slick({
		slidesToShow: slides,
		infinite: false,
	});
});