const chatsHeader = document.getElementById('chats-header');
const chatsFinder = document.getElementById('chats-finder');

let shadowHidden = true;

chatsFinder.addEventListener('scroll', e => {
    if (e.srcElement.scrollTop !== 0) {
        if (shadowHidden) {
            chatsHeader.className = chatsHeader.className.replace(
                /hide-shadow/g,
                ''
            );
            shadowHidden = false;
        }
    } else {
        chatsHeader.className = chatsHeader.className + ' hide-shadow';
        shadowHidden = true;
    }
});
