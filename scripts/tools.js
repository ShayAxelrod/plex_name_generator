function removeSpecialChars(str) {
    str = str.replace(':', '');
    str = str.replace('-', ' ');
    str = str.replace("–", '');
    str = str.replace("'", '');
    return str;
}

function plexStyle(title, year, id) {
    return `${title} (${year}) {${id}}`;
}

function copyAndNotify(document, content, anchor) {
    navigator.clipboard.writeText(content)
        .then(() => {
            const notification = document.createElement('div');
            notification.textContent = 'Copied!';
            notification.style.backgroundColor = '#4CAF50';
            notification.style.color = '#FFF';
            notification.style.padding = '0px 5px';
            notification.style.marginLeft = '10px';
            notification.style.borderRadius = '5px';
            notification.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.2)';
            notification.style.fontFamily = 'Arial, sans-serif';
            anchor.appendChild(notification);
            setTimeout(() => {
                anchor.removeChild(notification)
            }, 1500);
        })
        .catch(err => {
            console.error("Failed to copy text: ", err);
        })
}

function createPlexElement(document, content) {
    var anchor = document.createElement('div');
    anchor.classList.add("color-secondary-text", "type--caption");
    anchor.style.display = "flex";
    anchor.style.flexDirection = "row";
    anchor.style.justifyContent = "left";
    anchor.style.alignItems = "center";

    var icon = document.createElement('img');
    icon.src = chrome.runtime.getURL('/images/image(6)_no_bg_32.png');
    icon.style.width = '20px';
    icon.style.height = '20px';
    anchor.appendChild(icon);

    var txt = document.createElement('a');
    txt.textContent = ' ' + content;
    txt.style.paddingLeft = '5px';
    anchor.appendChild(txt);
    
    icon.addEventListener('click', (event) => {
        copyAndNotify(document, content, anchor);
    })
    txt.addEventListener('click', (event) => {
        copyAndNotify(document, content, anchor);
    })
    icon.addEventListener('mouseenter', function() {
        icon.style.cursor = 'pointer';
    });
    txt.addEventListener('mouseenter', function() {
        txt.style.cursor = 'pointer';
    });
        icon.addEventListener('mouseleave', function() {
        icon.style.cursor = 'auto'; // Set to 'auto' to use the default cursor
    });
    txt.addEventListener('mouseleave', function() {
        txt.style.cursor = 'auto'; // Set to 'auto' to use the default cursor
    });

    return anchor;
}