function removeSpecialChars(str) {
    str = str.replace(':', '');
    str = str.replace('-', ' ');
    str = str.replace("'", '');
    return str;
}

function plexStyle(title, year, id) {
    return `${title} (${year}) {${id}}`;
}

function createPlexElement(document) {
    const paragraph = document.createElement("p");
    const span = document.createElement("span");
    const btn = document.createElement("Button");
    const txt = document.createElement("p");
    paragraph.classList.add("color-secondary-text", "type--caption");
    //btn.setAttribute("type", "image");
    //btn.innerHTML = '<img src = "/plex_logo.png" />';
    btn.textContent = '📋Copy';
    btn.addEventListener('click', (event) => {
        navigator.clipboard.writeText(content);
    })
    txt.textContent = content;
    titleSection.insertAdjacentElement('afterbegin', paragraph);
    paragraph.insertAdjacentElement('afterend', span);
    span.insertAdjacentElement('afterend', btn);
    span.insertAdjacentElement('afterend', txt);
    return paragraph;
}