export default function cards() {
	const cardsElements = document.querySelectorAll('.js-slider-cards');
	const timeout = 150;

	for (let index = 0; index < cardsElements.length; index++) {
		const cards = cardsElements[index].querySelector('.js-slider-cards-items');
		const cardItems = cardsElements[index].querySelectorAll('.js-slider-cards-item');
		const pagination = cardsElements[index].querySelector('.js-slider-cards-pagination');
		const cardLength = cards.querySelectorAll(".js-slider-cards-item").length;
		let cardsHeight = 0;

		let touchstartX = 0;
		let touchstartY = 0;
		let touchendX = 0;
		let touchendY = 0;

		const cardsButtonPrev = cardsElements[index].querySelector('.js-slider-cards-prev');
		const cardsButtonNext = cardsElements[index].querySelector('.js-slider-cards-next');

		setHeightCards();

		window.addEventListener('resize', () => {
			setHeightCards();
		});

		if (cardsButtonNext) {
			cardsButtonNext.addEventListener('click', () => {
				navCards();
			});
		}

		if (cardsButtonPrev) {
			cardsButtonPrev.addEventListener('click', () => {
				navCards(false, 'prev');
			});
		}

		if (pagination) {
			const paginationItems = pagination.querySelectorAll('.js-slider-cards-pagination-item');

			for (let i = 0; i < paginationItems.length; i++) {
				const paginationItem = paginationItems[i];

				paginationItem.addEventListener('click', () => {
					if (!paginationItem.classList.contains('is-active')) {
						const activeIndex = paginationItem.getAttribute('data-index');

						if (activeIndex) {
							navCards(Number(activeIndex));
						}
					}
				});
			}
		}

		if (cards) {
			cards.addEventListener('touchstart', function(event) {
				touchstartX = event.changedTouches[0].screenX;
				touchstartY = event.changedTouches[0].screenY;
			}, false);

			cards.addEventListener('touchend', function(event) {
				touchendX = event.changedTouches[0].screenX;
				touchendY = event.changedTouches[0].screenY;

				if (handleGesture() === 'left') {
					navCards();
				}

				if (handleGesture() === 'right') {
					navCards(false, 'prev');
				}
			}, false); 
		}

		function setHeightCards() {
			if (cards) {
				cardsHeight = 0;
				cards.style.removeProperty('height');
				
				cardItems.forEach((cardItem) => {
					const cardItemHeight = cardItem.getBoundingClientRect().height;
	
					if (cardItemHeight > cardsHeight) {
						cardsHeight = cardItemHeight;
					}
				});
				
				cards.style.height = cardsHeight + 'px';
			}
		}

		function navCards(activeIndex, direction) {
			const prependList = function() {
				if(cards.querySelector('.js-slider-cards-item.is-active')) {
					const slicedCard = cards.querySelector('.js-slider-cards-item.transformThis');

					if (slicedCard) {
						slicedCard.classList.remove('transformThis', 'is-active');
						cards.append(slicedCard);
					}
				}
			}

			const currentCard = cards.querySelector('.js-slider-cards-item.is-active');
			const lastCard = cards.querySelector('.js-slider-cards-item:last-child');

			if (currentCard) {
				const currentCardIndex = Number(currentCard.getAttribute('data-slide'));
				let activeCardIndex = 0;
				
				if (typeof currentCardIndex === 'number') {
					activeCardIndex = direction === 'prev' ? currentCardIndex - 1 : currentCardIndex + 1;
				}

			

				if (activeCardIndex < 0) {
					activeCardIndex = cardLength - 1;
				} else if (currentCardIndex >= cardLength - 1 && direction !== 'prev') {
					activeCardIndex =  0;
				}

				const activeCard = typeof activeIndex === 'number' ? cards.querySelector(`.js-slider-cards-item[data-slide="${activeIndex}"]`) : cards.querySelector(`.js-slider-cards-item[data-slide="${activeCardIndex}"]`);

				if (activeCard) {
					currentCard.after(activeCard);
					activeCard.classList.add('is-active');
				}

				if (currentCard) {
					currentCard.classList.remove('is-active');
					currentCard.classList.add('transformThis');
				}
			}

			setTimeout(function(){
				prependList(); 
			}, timeout);

			if (pagination) {
				const activeCard = cards.querySelector(".js-slider-cards-item.is-active");
				const paginationIndex = activeCard ? activeCard.getAttribute('data-slide') : null;

				if (paginationIndex) {
					let currentPaginationItem = pagination.querySelector('.js-slider-cards-pagination-item.is-active');
					let nextPaginationItem = pagination.querySelector(`.js-slider-cards-pagination-item[data-index="${Number(paginationIndex)}"]`);

					if (currentPaginationItem) {
						currentPaginationItem.classList.remove('is-active');
					}

					if (nextPaginationItem) {
						nextPaginationItem.classList.add('is-active');
					}
				}
			}
		}

		function handleGesture() {
			const touchX = touchendX - touchstartX;
			const touchY = Math.abs(touchendY - touchstartY);

			if (touchY <= 30 && touchX < 0 && Math.abs(touchX) >= 40) {
				return 'left';
			}

			if (touchY <= 30 && touchX > 0 && Math.abs(touchX) >= 40) {
				return 'right';
			}
			
			if (touchendY < touchstartY) {
				return 'up';
			}
			
			if (touchendY > touchstartY) {
				return 'down';
			}
			
			if (touchendY === touchstartY) {
				return 'tap';
			}
		}
	}
}
