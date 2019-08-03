let activedChatMenu = [];
let inactivedChatStates = [];

const deactiveAllChatMenus = () => {
    if (activedChatMenu.length && inactivedChatStates.length) {
        activedChatMenu.forEach(chatMenu => {
            chatMenu.className = chatMenu.className.replace(
                /\schat-menu-active/g,
                ''
            );
        });

        inactivedChatStates.forEach(inactivedChatState => {
            for (const state of inactivedChatState) {
                state.className = state.className.replace(
                    /\schat-state-inactive/g,
                    ''
                );
            }
        });

        activedChatMenu = [];
        inactivedChatStates = [];
    }
};

const activeChatMenu = (chatMenu, chatStates) => {
    chatMenu.className += ' chat-menu-active';
    activedChatMenu.push(chatMenu);

    for (const state of chatStates) {
        state.className += ' chat-state-inactive';
    }
    inactivedChatStates.push(chatStates);
};

const deactiveChatMenu = (chatMenu, chatStates) => {
    chatMenu.className = chatMenu.className.replace(/\schat-menu-active/g, '');

    for (const state of chatStates) {
        state.className = state.className.replace(/\schat-state-inactive/g, '');
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
