;(function () {
	// greet
	console.log('meow~~~')

	// share
	const $ = document.querySelector.bind(document)
	const $$ = document.querySelectorAll.bind(document)

	// nav slider
	const navSlider = $('.nav-slider')
	let navSliderDone = false

	;[].forEach.call($$('.nav-anchor'), (el) => {
		if (el.classList.contains('active')) {
			positionNavSlider(el)
			navSliderDone = true
		}
		el.addEventListener('mouseover', () => {
			if (navSliderDone) {
				positionNavSlider(el)
			}
		}, false)
		el.addEventListener('mouseleave', () => {
			const width = navSlider.getAttribute('data-old-width')
			const transform = navSlider.getAttribute('data-old-transform')
			navSlider.style.width = width
			navSlider.style.transform = transform
		}, false)
	})

	function positionNavSlider(el) {
		const width = el.clientWidth
		const left = el.offsetLeft
		navSlider.style.width = `${width}px`
		navSlider.style.transform = `translateX(${left}px)`

		const oldWidth = navSlider.style.width
		const oldTransform = navSlider.style.transform
		const attrWidth = navSlider.getAttribute('data-old-width')
		const attrTransform = navSlider.getAttribute('data-old-transform')
		if (!attrWidth || !attrTransform) {
			navSlider.setAttribute('data-old-width', oldWidth)
			navSlider.setAttribute('data-old-transform', oldTransform)
		}
	}
})();
