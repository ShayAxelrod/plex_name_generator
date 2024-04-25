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
    var anchor = document.createElement('div');
    anchor.classList.add("color-secondary-text", "type--caption");
    anchor.style.display = "flex";
    anchor.style.flexDirection = "row";
    anchor.style.justifyContent = "left";
    anchor.style.alignItems = "center";

    var txt = document.createElement('a');
    txt.textContent = ' ' + content;
    txt.style.paddingLeft = '5px';
    txt.addEventListener('click', (event) => {
        navigator.clipboard.writeText(content);
    })
    txt.addEventListener('mouseenter', function() {
        txt.style.cursor = 'pointer';
    });
    txt.addEventListener('mouseleave', function() {
        txt.style.cursor = 'auto'; // Set to 'auto' to use the default cursor
    });

    var icon = document.createElement('img');
    icon.src = chrome.runtime.getURL('/images/image(6)_no_bg_32.png');
    icon.style.width = '20px';
    icon.style.height = '20px';
    icon.addEventListener('click', (event) => {
        navigator.clipboard.writeText(content);
    })
    icon.addEventListener('mouseenter', function() {
        icon.style.cursor = 'pointer';
    });
    icon.addEventListener('mouseleave', function() {
        icon.style.cursor = 'auto'; // Set to 'auto' to use the default cursor
    });

    anchor.appendChild(icon);
    anchor.appendChild(txt);

    title_elem.insertAdjacentElement('afterend', anchor);
}