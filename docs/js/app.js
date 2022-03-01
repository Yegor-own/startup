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

	function ibg() {
		$.each($('.ibg'), function(index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
	}
	ibg();
});