const showSearchClearButton = () => {
    const chatSearchClearButton = document.getElementById('clear-input-button');

    chatSearchClearButton.style.display = 'block';
};
const hideSearchClearButton = () => {
    const chatSearchClearButton = document.getElementById('clear-input-button');

    chatSearchClearButton.style.display = 'none';
};

const showSearchMessagesButton = () => {
    const searchMessagesButton = document.getElementById(
        'search-message-button'
    );

    searchMessagesButton.style.display = 'block';
};

const hideSearchMessagesButton = () => {
    const searchMessagesButton = document.getElementById(
        'search-message-button'
    );

    searchMessagesButton.style.display = 'none';
};

const changeSearchMessageKeyword = newKeyword => {
    const messageKeywordContainer = document.getElementById(
        'search-keyword-container'
    );
    let trimedKeyword = newKeyword;
    const MAX_KEYWORD_LENGTH = 8;

    if (newKeyword.length > MAX_KEYWORD_LENGTH) {
        trimedKeyword = newKeyword.substring(0, MAX_KEYWORD_LENGTH - 1) + '...';
    }

    if (messageKeywordContainer) {
        messageKeywordContainer.innerHTML = `"${trimedKeyword}"`;
    }
};

const chatSearchInputHandler = event => {
    const chatSearchClearButton = document.getElementById('clear-input-button');

    if (chatSearchClearButton) {
        const keyword = event.target.value;

        changeSearchMessageKeyword(keyword);

        if (keyword) {
            showSearchClearButton();
            showSearchMessagesButton();
        } else {
            hideSearchClearButton();
            hideSearchMessagesButton();
        }
    }
};

const clearChatSearchInput = () => {
    const chatSearchBox = document.getElementById('chat-search-input');

    // TODO: Delegate this to input event of search-box
    hideSearchClearButton();
    hideSearchMessagesButton();

    chatSearchBox.value = '';
};

document
    .getElementById('chat-search-input')
    .addEventListener('input', chatSearchInputHandler);

document
    .getElementById('clear-input-button')
    .addEventListener('click', clearChatSearchInput);
