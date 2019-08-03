const importModule = filePath => {
    const scriptElement = document.createElement('script');
    scriptElement.src = filePath;

    document.body.appendChild(scriptElement);
};

importModule('./js/chats/search-box.js');
