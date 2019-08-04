const addClassToElement = (element, classname) => {
    element.className += ` ${classname}`;
};

const removeClassFromElement = (element, classname) => {
    element.className = element.className.replace(
        new RegExp(` ${classname}`, 'g'),
        ''
    );
};
