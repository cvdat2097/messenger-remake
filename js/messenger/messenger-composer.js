const expandMediaBtn = document.getElementById('expand-media-button');
const inputMedia = document.getElementById('input-media');

expandMediaBtn.addEventListener('click', () => {
    if (hasClass(expandMediaBtn, 'expanded')) {
        removeClassFromElement(expandMediaBtn, 'expanded');
        removeClassFromElement(inputMedia, 'expanded');
    } else {
        addClassToElement(expandMediaBtn, 'expanded');
        addClassToElement(inputMedia, 'expanded');
    }
});
