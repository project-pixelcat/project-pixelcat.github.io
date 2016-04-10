'use strict';

;(function () {
	// greet
	console.log('meow~~~');

	// share
	var $ = document.querySelector.bind(document);
	var $$ = document.querySelectorAll.bind(document);

	// nav slider
	var navSlider = $('.nav-slider');
	var navSliderDone = false;[].forEach.call($$('.nav-anchor'), function (el) {
		if (el.classList.contains('active')) {
			positionNavSlider(el);
			navSliderDone = true;
		}
		el.addEventListener('mouseover', function () {
			if (navSliderDone) {
				positionNavSlider(el);
			}
		}, false);
		el.addEventListener('mouseleave', function () {
			var width = navSlider.getAttribute('data-old-width');
			var transform = navSlider.getAttribute('data-old-transform');
			navSlider.style.width = width;
			navSlider.style.transform = transform;
		}, false);
	});

	function positionNavSlider(el) {
		var width = el.clientWidth;
		var left = el.offsetLeft;
		navSlider.style.width = width + 'px';
		navSlider.style.transform = 'translateX(' + left + 'px)';

		var oldWidth = navSlider.style.width;
		var oldTransform = navSlider.style.transform;
		var attrWidth = navSlider.getAttribute('data-old-width');
		var attrTransform = navSlider.getAttribute('data-old-transform');
		if (!attrWidth || !attrTransform) {
			navSlider.setAttribute('data-old-width', oldWidth);
			navSlider.setAttribute('data-old-transform', oldTransform);
		}
	}
})();