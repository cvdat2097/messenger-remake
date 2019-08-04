let activedChatMenu = [];
let inactivedChatStates = [];

const deactiveAllChatMenus = () => {
    if (activedChatMenu.length && inactivedChatStates.length) {
        activedChatMenu.forEach(chatMenu => {
            removeClassFromElement(chatMenu, 'chat-menu-active');
        });

        inactivedChatStates.forEach(inactivedChatState => {
            for (const state of inactivedChatState) {
                removeClassFromElement(state, 'chat-state-inactive');
            }
        });

        activedChatMenu = [];
        inactivedChatStates = [];
    }
};

const activeChatMenu = (chatMenu, chatStates) => {
    addClassToElement(chatMenu, 'chat-menu-active');
    activedChatMenu.push(chatMenu);

    for (const state of chatStates) {
        addClassToElement(state, 'chat-state-inactive');
    }
    inactivedChatStates.push(chatStates);
};

const deactiveChatMenu = (chatMenu, chatStates) => {
    removeClassFromElement(chatMenu, 'chat-menu-active');

    for (const state of chatStates) {
        removeClassFromElement(state, 'chat-state-inactive');
    }
};

const chatPropertyButtons = document.getElementsByClassName('chat-property');
for (const btn of chatPropertyButtons) {
    const chatMenu = btn.getElementsByClassName('chat-menu')[0];
    const chatStates = btn.getElementsByClassName('chat-state');

    btn.addEventListener('click', () => {
        if (chatMenu.className.indexOf('chat-menu-active') !== -1) {
            deactiveChatMenu(chatMenu, chatStates);
        } else {
            deactiveAllChatMenus();
            activeChatMenu(chatMenu, chatStates);
        }
    });
}

document.body.addEventListener('click', () => {
    deactiveAllChatMenus();
});
