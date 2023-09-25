/*
     ----------------
	|  HEADER  MENU  |
	 ----------------
*/

export default function headerMenu(maxWidth = 991, delay = 300) {
    /* 
		@param  {number} delay - menu opening time (also needs to be changed in CSS)
		@param  {number} maxWidth - the maximum width of the browser at which the nested menu fires when clicked
	*/

    const menu = document.querySelector('.js-menu');

    if (!menu) return;
    
    const menuBurger = menu.querySelector('.js-menu-burger');
    const menuPopup = menu.querySelector('.js-menu-popup');
    const menuBackdrop = document.querySelector('.js-menu-backdrop');
    const menuClose = menu.querySelector('.js-menu-close');
    const menuDropdownItems = menu.querySelectorAll('.js-menu-dropdown');
    let isMenu = true;

    menuDropdownItems.forEach(item => {
        const menuLink = item.querySelector('.js-menu-link');
        const submenu = item.querySelector('.js-menu-submenu');

        if (submenu && menuLink) {
            menuLink.addEventListener('click', (e) => {
                e.preventDefault();

                if (window.innerWidth <= maxWidth) {
                    isMenu = false;
                    
                    if (submenu.style.maxHeight) {
                        submenu.style.maxHeight = `${submenu.scrollHeight}px`;
                        submenu.style.maxHeight = null;
                    } else {
                        submenu.style.maxHeight = `${submenu.scrollHeight}px`;
                    }

                    item.classList.toggle('is-active');

                    setTimeout(() => {
                        isMenu = true;
                    }, 300);
                } else {
                    hideActiveMenu(item);

                    if (!item.classList.contains('is-active')) {
                        item.classList.add('is-active');
                        menuLink.setAttribute('aria-expanded', "true");
                    } else {
                        item.classList.remove('is-active')
                        menuLink.setAttribute('aria-expanded', "false");

                        if (submenu.style.maxHeight) {
                            submenu.style.maxHeight = null;
                        }
                    }
                }

                

                return false;
            }); 

            item.addEventListener('mouseenter', (e) => {
                if (window.innerWidth > maxWidth) {
                    hideActiveMenu();
                    item.classList.add('is-active');
                }
            }); 
            
            item.addEventListener('mouseleave', (e) => {
                if (window.innerWidth > maxWidth) {
                    item.classList.remove('is-active');

                    if (submenu.style.maxHeight) {
                        submenu.style.maxHeight = null;
                    }
                }
            }); 

            document.addEventListener('click', (event) => {
                if (window.innerWidth > maxWidth) {
                    const target = event.target;

                    if (!target.closest('.js-menu-dropdown') && !target.classList.contains('js-menu-dropdown')) {
                        hideActiveMenu();
                        return;
                    }
                }
            });

            document.addEventListener('keydown', (e) => {
                if (document.activeElement.closest('.js-menu-dropdown') && (e.key === 'Escape' || e.code === 'Escape')) {
                    hideActiveMenu();
                    return;
                }
            });
        }
    });

    if (menuBurger) {
        menuBurger.addEventListener('click', () => {
            if (menuBurger.classList.contains('is-active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    if (menuClose) {
        menuClose.addEventListener('click', () => {
            closeMenu();
        });
    }

    if (menuBackdrop) {
        menuBackdrop.addEventListener('click', () => {
            closeMenu();
        });
    }

    function openMenu () {
        if (isMenu) {
            isMenu = false;

            if (menuBurger) {
                menuBurger.classList.add('is-active');
            }

            if (menuBackdrop) {
                menuBackdrop.classList.add('is-active');
            }
            
            if (menuPopup) {
                menuPopup.classList.add('is-visible');

                setTimeout(() => {
                    menuPopup.classList.add('is-active');
                }, 1);
            }
    
            document.body.classList.add('is-menu-active');

            setTimeout(() => {
                isMenu = true;
            }, delay);
        }
    }

    function closeMenu () {
        if (isMenu) {
            isMenu = false;

            if (menuBurger) {
                menuBurger.classList.remove('is-active');
            }

            if (menuBackdrop) {
                menuBackdrop.classList.remove('is-active');
            }
            
            if (menuPopup) {
                menuPopup.classList.remove('is-active');

                setTimeout(() => {
                    menuPopup.classList.remove('is-visible');
                }, delay);
            }
            
            document.body.classList.remove('is-menu-active');

            setTimeout(() => {
                isMenu = true;
            }, delay);
        }
    }

    function hideActiveMenu(currentItem) {
        const activeItem = document.querySelector('.js-menu-dropdown.is-active');

        if (activeItem && activeItem !== currentItem) {
            const submenu = activeItem.querySelector('.js-menu-submenu');
            activeItem.classList.remove('is-active');

            if (submenu.style.maxHeight) {
                submenu.style.maxHeight = null;
            }
        }
    }
}
