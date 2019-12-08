$(function () {

	$('.icon-th-list').on('click', function () {
		$('.products__item').addClass('list')
		$('.icon-th-list').addClass('btn--active')
		$('.icon-th-large').removeClass('btn--active')
	})

	$('.icon-th-large').on('click', function () {
		$('.products__item').removeClass('list')
		$('.icon-th-large').addClass('btn--active')
		$('.icon-th-list').removeClass('btn--active')	
	})

	$(".rate-star").rateYo({
		fullStar: true,
		starWidth: "12px",
		ratedFill: "#ffa726",
		spacing: "2px",
		readOnly: true
	});

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 1000,
		from: 0,
		to: 600,
		prefix: "$"
	});

	var mixer = mixitup('.products__inner-box', {
		selectors: {
			target: '.products__item'
		},
		animation: {
			duration: 300
		}
	});

	$('.product-slider__inner').slick({
		slidesToScroll: 4,
		slidesToShow: 4,
		arrows: false,
		dots: true,
		dotsClass: 'product-slider__dots'
	})

})