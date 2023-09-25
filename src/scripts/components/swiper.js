import Swiper, { Keyboard, Navigation, Pagination, EffectFade, EffectCards, EffectCoverflow, FreeMode } from 'swiper';
/*
	Swiper
	https://swiperjs.com/swiper-api
*/

new Swiper('.js-slider-blog', {
	modules: [Keyboard, FreeMode],
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	speed: 400,
	freeMode: {
		enabled: true,
		// sticky: true,
	  },
	slidesPerView: 'auto',
	spaceBetween: 20,
	loop: false,
	breakpoints: {
		576: {
			slidesPerView: 'auto',
		  	spaceBetween: 40,
		},
		992: {
		  slidesPerView: 3,
		  spaceBetween: 40,
		},
		1200: {
		  slidesPerView: 3,
		  spaceBetween: 60,
		  
		}
	}
});

new Swiper('.js-slider-gallery', {
	modules: [Keyboard, FreeMode, Navigation],
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	speed: 400,
	freeMode: {
		enabled: true,
	  },
	slidesPerView: 'auto',
	spaceBetween: 10,
	loop: false,
	navigation: {
		prevEl: '.js-slider-gallery-prev',
		nextEl: '.js-slider-gallery-next'
	  },
	breakpoints: {
		992: {
			freeMode: {
				enabled: false,
				// sticky: true,
			  },
		},
	}
});

new Swiper('.js-slider-who-is-working', {
	modules: [Keyboard, FreeMode, Navigation], 
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	speed: 400,
	freeMode: {
		enabled: true,
		// sticky: true,
	  },
	slidesPerView: 'auto',
	slidesPerGroup: 4,
	spaceBetween: 20,
	
	loop: false,
	navigation: {
		prevEl: '.js-slider-who-is-working-prev',
		nextEl: '.js-slider-who-is-working-next'
	  },
	breakpoints: {
		768: {
			spaceBetween: 40,
			slidesPerGroup: 3,
		},
		1200: {
			spaceBetween: 60,
			slidesPerGroup: 3,
		},
		1341: {
			spaceBetween: 60,
			slidesPerGroup: 4,
		},
	}
});

new Swiper('.js-slider-partners', {
	modules: [Keyboard, Navigation, FreeMode], 
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	// speed: 400,
	slidesPerView: 2,
	slidesPerGroup: 2,
	spaceBetween: 10,
	loop: false,
	navigation: {
		prevEl: '.js-slider-partners-prev',
		nextEl: '.js-slider-partners-next'
	},
	freeMode: {
		enabled: true,
		// sticky: true,
	},
	breakpoints: {
		480: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
		576: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
		992: {
			slidesPerView: 5,
			slidesPerGroup: 5,
		},
		1200: {
			slidesPerView: 6,
			slidesPerGroup: 6,
		},
	}
});

new Swiper('.js-liked-articles', {
	modules: [Keyboard, FreeMode],
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	speed: 400,
	freeMode: {
		enabled: true,
		// sticky: true,
	  },
	slidesPerView: 'auto',
	spaceBetween: 20,
	loop: false,
	breakpoints: {
		576: {
			slidesPerView: 'auto',
		  	spaceBetween: 40,
		},
		992: {
		  slidesPerView: 2,
		  spaceBetween: 40,
		},
		1200: {
		  slidesPerView: 2,
		  spaceBetween: 60,
		},
	},
});

new Swiper('.js-photos-slider', {
	modules: [Keyboard, FreeMode, Navigation],
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	speed: 400,
	slidesPerView: 1,
	spaceBetween: 10,
	loop: false,
	navigation: {
		prevEl: '.js-photos-slider-prev',
		nextEl: '.js-photos-slider-next',
	},
});
