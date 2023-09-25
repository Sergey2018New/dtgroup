/*
     --------------- 
	|   HEADER SEARCH   |
	  ---------------
*/

export default function headerSearchForm(maxWidth = 991) {
    const searchForm = document.querySelector('.js-search-form');
    const searchOpen = document.querySelector('.js-search-button-open');

    if (!searchForm) return;
    
    const searchFormButton = searchForm.querySelector('.js-search-form-button');
    const searchFormInput = searchForm.querySelector('.js-search-form-input');
    const searchFormClose = searchForm.querySelector('.js-search-form-close');
    const searchFormBackdrop = searchForm.querySelector('.js-search-form-backdrop');

    if (searchFormButton) {
        searchFormButton.addEventListener('click', () => {
            if (window.innerWidth > maxWidth) {
                if (!searchForm.classList.contains('is-active')) {
                    openSearchForm();
                }
            }
        });
    }

    if (searchOpen) {
        searchOpen.addEventListener('click', () => {
            if (!searchForm.classList.contains('is-active')) {
                openSearchForm();
            }
            
            setTimeout(() => {
                focusInput();
            }, 400);
        });
    }

    if (searchFormClose) {
        searchFormClose.addEventListener('click', () => {
            closeSearchForm();
        });
    }

    if (searchFormBackdrop) {
        searchFormBackdrop.addEventListener('click', () => {
            closeSearchForm();
        });
    }

    searchForm.addEventListener('blur', () => {
        closeSearchForm();
    });

    document.addEventListener('keydown', (e) => {
        if (document.activeElement.closest('.js-search-form') && (e.key === 'Escape' || e.code === 'Escape')) {
            closeSearchForm();
            return;
        }
    });

    document.addEventListener('click', (event) => {
        if (window.innerWidth > maxWidth) {
            const target = event.target;

            if (!target.closest('.js-search-form') && !target.classList.contains('js-search-form')) {
                closeSearchForm();
                return;
            }
        }
    });

    
	window.addEventListener('scroll', closeSearchForm);

    function openSearchForm() {
        const lockPaddingValue = window.innerWidth - document.body.offsetWidth + 'px';
        searchForm.classList.add('is-active');

        if (searchFormButton) {
            const ariaLabelCurrent =  searchFormButton.getAttribute('aria-label');
            const ariaLabelSubmit =  searchFormButton.getAttribute('data-aria-label');
    
            searchFormButton.setAttribute('aria-label', ariaLabelSubmit);
            searchFormButton.setAttribute('data-aria-label', ariaLabelCurrent);
        }

	    document.documentElement.style.setProperty('--lock-padding-right', lockPaddingValue);
        document.body.classList.add('is-search-active');

        

        setTimeout(() => {
            searchFormButton ? searchFormButton.setAttribute('type', 'submit') : '';
            focusInput();
        }, 100);
    }

    function closeSearchForm() {
        searchForm.classList.remove('is-active');
        searchFormButton ? searchFormButton.setAttribute('type', 'button') : '';

        document.documentElement.style.removeProperty('--lock-padding-right');
		document.body.classList.remove('is-search-active');
    }

    function focusInput() {
        if (searchFormInput) {
            searchFormInput.focus();
        }
    }
}