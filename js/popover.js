const closeAllPopoverBodies = () => {
    const popovers = document.getElementsByClassName('popover-body');

    for (const popover of popovers) {
        popover.style.display = 'none';
    }
};

const togglePopoverBody = (event, popoverBody) => {
    if (popoverBody) {
        if (
            !popoverBody.style.display ||
            popoverBody.style.display === 'none'
        ) {
            popoverBody.style.display = 'block';
        } else {
            popoverBody.style.display = 'none';
        }
    }

    event.stopPropagation();
};

const createPopoverTriangle = (popover, popoverBody, triangleClassName) => {
    // Create triangle
    if (popoverBody) {
        const popoverTriangle = document.createElement('div');

        popoverTriangle.setAttribute('class', triangleClassName);
        popoverBody.appendChild(popoverTriangle);

        popoverTriangle.style.left =
            popover.offsetWidth / 2 - popoverTriangle.offsetWidth / 2;
    }
};

const popovers = document.getElementsByClassName('popover');
for (const popover of popovers) {
    const popoverBodyId = popover.getAttribute('popover-body-id');
    const popoverBody = document.getElementById(popoverBodyId);

    if (popoverBody) {
        popover.addEventListener('click', e =>
            togglePopoverBody(e, popoverBody)
        );
        popoverBody.addEventListener('click', e => e.stopPropagation());

        createPopoverTriangle(popover, popoverBody, 'popover-triangle');
        createPopoverTriangle(
            popover,
            popoverBody,
            'popover-triangle-backdrop'
        );
    }
}

document
    .getElementsByTagName('body')[0]
    .addEventListener('click', closeAllPopoverBodies);
