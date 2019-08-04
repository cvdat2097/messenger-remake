const chatsHeader = document.getElementById('chats-header');
const chatsFinder = document.getElementById('chats-finder');

let shadowHidden = true;

chatsFinder.addEventListener('scroll', e => {
    if (e.srcElement.scrollTop !== 0) {
        if (shadowHidden) {
            removeClassFromElement(chatsHeader, 'hide-shadow');
            shadowHidden = false;
        }
    } else {
        addClassToElement(chatsHeader, 'hide-shadow');
        shadowHidden = true;
    }
});
