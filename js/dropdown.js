const dropdowns = document.getElementsByClassName('dropdown-menu');

for (const dropdown of dropdowns) {
    const itemContainer = dropdown.getElementsByClassName('dropdown-items')[0];

    itemContainer.addEventListener('click', e => e.stopPropagation());

    dropdown.addEventListener('click', () => {
        if (hasClass(itemContainer, 'showed')) {
            removeClassFromElement(itemContainer, 'showed');
        } else {
            addClassToElement(itemContainer, 'showed');
        }
    });
}
