$(function () {

	var mixer = mixitup('.products__inner-box', {
		selectors: {
			target: '.products__item'
		},
		animation: {
			duration: 300
		}
	});

	$(".rate-star").rateYo({
		fullStar: true,
		starWidth: "12px",
		ratedFill: "#ffa726",
		spacing: "2px",
		readOnly: true
	});
	
	$('.product-slider__inner').slick({
		slidesToScroll: 4,
		slidesToShow: 4,
		arrows: false,
		dots: true,
		dotsClass: 'product-slider__dots'
	})

})