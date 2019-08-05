const importModule = filePath => {
    const scriptElement = document.createElement('script');
    scriptElement.src = filePath;

    document.body.appendChild(scriptElement);
};

importModule('./js/chats/search-box.js');
importModule('./js/chats/chat-menu.js');
importModule('./js/chats/chat-header.js');
importModule('./js/messenger/messenger-menu.js');
importModule('./js/messenger/messenger-composer.js');
