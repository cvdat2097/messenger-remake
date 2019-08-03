// TODO: Enhance this mechanism
// ISSUES: New chat-container continously added (via lazy loading); chat-menu toggled
let activeChatMenu = null;
let inactiveChatStates = [];

const chatPropertyButtons = document.getElementsByClassName('chat-property');
for (const btn of chatPropertyButtons) {
    const chatMenu = btn.getElementsByClassName('chat-menu')[0];
    const chatStates = btn.getElementsByClassName('chat-state');

    btn.addEventListener('click', () => {
        chatMenu.className += ' chat-menu-active';
        activeChatMenu = chatMenu;

        for (const state of chatStates) {
            state.className += ' chat-state-inactive';
        }
        inactiveChatStates = chatStates;
    });
}

document.body.addEventListener('click', () => {
    activeChatMenu.className = activeChatMenu.className.replace(
        /\schat-menu-active/g,
        ''
    );

    for (const state of inactiveChatStates) {
        state.className = state.className.replace(/\schat-state-inactive/g, '');
    }
});
