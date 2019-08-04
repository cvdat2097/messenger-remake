const conversationMenuBtn = document.getElementById('conversation-menu-button');
const messengerMenu = document.getElementById('messenger-menu');

conversationMenuBtn.addEventListener('click', () => {
    if (conversationMenuBtn.className.indexOf('active') !== -1) {
        removeClassFromElement(messengerMenu, 'messenger-menu-opened');
        removeClassFromElement(conversationMenuBtn, 'active');
    } else {
        addClassToElement(messengerMenu, 'messenger-menu-opened');
        addClassToElement(conversationMenuBtn, 'active');
    }
});
