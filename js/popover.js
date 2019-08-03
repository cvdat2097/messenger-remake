const closeAllPopoverBodies = () => {
    const popovers = document.getElementsByClassName('popover-body');

    for (const popover of popovers) {
        popover.style.display = 'none';
    }
};

const togglePopoverBody = popoverBodyId => {
    const popoverBody = document.getElementById(popoverBodyId);

    if (popoverBody) {
        if (
            !popoverBody.style.display ||
            popoverBody.style.display === 'none'
        ) {
            closeAllPopoverBodies();
            popoverBody.style.display = 'block';
        } else {
            popoverBody.style.display = 'none';
        }
    }
};

const createPopoverTriangle = (popover, popoverBodyId, triangleClassName) => {
    // Create triangle
    const popoverBody = document.getElementById(popoverBodyId);

    if (popoverBody) {
        const popoverTriangle = document.createElement('div');

        popoverTriangle.setAttribute('class', triangleClassName);
        popoverBody.appendChild(popoverTriangle);

        popoverTriangle.style.left = popover.offsetWidth / 2 - 8;
    }
};

const popovers = document.getElementsByClassName('popover');
for (const popover of popovers) {
    const popoverBodyId = popover.getAttribute('popover-body-id');
    const popoverBody = document.getElementById(popoverBodyId);

    if (popoverBody) {
        popover.addEventListener('click', e => {
            e.stopPropagation();
            togglePopoverBody(popoverBodyId);
        });

        createPopoverTriangle(popover, popoverBodyId, 'popover-triangle');
        createPopoverTriangle(
            popover,
            popoverBodyId,
            'popover-triangle-backdrop'
        );
    }
}

document.body.addEventListener('click', closeAllPopoverBodies);
