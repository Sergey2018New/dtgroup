/* Awards Tab menu */
const awardsTabItems = document.querySelectorAll('.js-awards-tab-item');
const awardsItems = document.querySelector('.js-awards-items');

for (let i = 0; i < awardsTabItems.length; i += 1) {
    const tabItem = awardsTabItems[i];

    tabItem.addEventListener('click', (event) => {
        const tabItemActive = document.querySelector('.js-awards-tab-item.is-active');

        if (tabItemActive) {
            tabItemActive.classList.remove('is-active');
        }

        if (awardsItems) {
            awardsItems.classList.toggle('is-timeline');
        }

        tabItem.classList.add('is-active');

        event.preventDefault();
    });
}
