const addDropdowTogglerArrow = toggler => {
    const togglerArrow = document.createElement('div');
    addClassToElement(togglerArrow, 'toggler-arrow');

    const arrowIcon = document.createElement('i');
    addClassToElement(arrowIcon, 'material-icons');
    arrowIcon.innerHTML = 'keyboard_arrow_left';

    togglerArrow.appendChild(arrowIcon);
    toggler.appendChild(togglerArrow);
};

const changeTogglerArrow = (dropdown, isOpened) => {
    const toggler = dropdown.getElementsByClassName('dropdown-toggle')[0];
    const togglerArrow = toggler.getElementsByTagName('i')[0];

    if (isOpened) {
        togglerArrow.innerHTML = 'keyboard_arrow_down';
    } else {
        togglerArrow.innerHTML = 'keyboard_arrow_left';
    }
};

const dropdowns = document.getElementsByClassName('dropdown-menu');

for (const dropdown of dropdowns) {
    const itemContainer = dropdown.getElementsByClassName('dropdown-items')[0];
    const toggler = dropdown.getElementsByClassName('dropdown-toggle')[0];

    addDropdowTogglerArrow(toggler);

    itemContainer.addEventListener('click', e => e.stopPropagation());
    dropdown.addEventListener('click', () => {
        if (hasClass(dropdown, 'showed')) {
            removeClassFromElement(dropdown, 'showed');
            changeTogglerArrow(dropdown, false);
        } else {
            addClassToElement(dropdown, 'showed');
            changeTogglerArrow(dropdown, true);
        }
    });
}
