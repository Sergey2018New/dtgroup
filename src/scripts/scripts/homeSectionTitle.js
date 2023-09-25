/* Home title */
const homeSectionTitle = document.querySelector('.js-home-title');

if (homeSectionTitle) {
    const titleBeforeText = homeSectionTitle.getAttribute('data-text-before');
    let titleText = homeSectionTitle.textContent;

    if (titleBeforeText && titleBeforeText !== '') {
        titleText = titleText.replace(titleBeforeText, '').trim();
        homeSectionTitle.innerHTML = `<span>${titleBeforeText}</span> ${titleText}`
    }

    homeSectionTitle.classList.add('is-show');
}
