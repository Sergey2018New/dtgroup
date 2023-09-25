/*
     --------------- 
	|   HEADER divisions   |
	  ---------------
*/

export default function headerDivisions(maxWidth = 991) {
    const divisions = document.querySelector('.js-header-divisions');

    if (!divisions) return;
    
    const divisionsButton = divisions.querySelector('.js-header-divisions-button');

    const divisionsClose = divisions.querySelector('.js-header-divisions-close');
    const divisionsBackdrop = divisions.querySelector('.js-header-divisions-backdrop');

    divisions.addEventListener('mouseenter', (e) => {
        if (window.innerWidth > maxWidth) {
            openDivisions();
        }
    }); 

    divisions.addEventListener('mouseleave', (e) => {
        if (window.innerWidth > maxWidth) {
            closeDivisions();
        }
    }); 


    if (divisionsButton) {
        divisionsButton.addEventListener('click', () => {
            if (!divisions.classList.contains('is-active')) {
                openDivisions();
            } else {
                closeDivisions();
            }
        });
    }

    if (divisionsClose) {
        divisionsClose.addEventListener('click', () => {
            closeDivisions();
        });
    }

    if (divisionsBackdrop) {
        divisionsBackdrop.addEventListener('click', () => {
            closeDivisions();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (document.activeElement.closest('.js-header-divisions') && (e.key === 'Escape' || e.code === 'Escape')) {
            closeDivisions();
            return;
        }
    });

    document.addEventListener('click', (event) => {
        const target = event.target;

        if (!target.closest('.js-header-divisions') && !target.classList.contains('js-header-divisions')) {
            closeDivisions();
            return;
        }
    });
    
	window.addEventListener('scroll', closeDivisions);

    function openDivisions() {
        const lockPaddingValue = window.innerWidth - document.body.offsetWidth + 'px';
        divisions.classList.add('is-active');

	    if (window.innerWidth <= maxWidth) {
            document.documentElement.style.setProperty('--lock-padding-right', lockPaddingValue);
        }

        document.body.classList.add('is-divisions-active');
    }

    function closeDivisions() {
        divisions.classList.remove('is-active');
        
	    if (window.innerWidth <= maxWidth) {
            document.documentElement.style.removeProperty('--lock-padding-right');
        }

		document.body.classList.remove('is-divisions-active');
    }
}