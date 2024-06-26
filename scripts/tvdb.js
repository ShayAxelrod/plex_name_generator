const xpath_title = '//*[@id="series_title"]'
const title_elem = document.evaluate(xpath_title, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
const title = removeSpecialChars(title_elem.textContent);

const xpath = '//*[@id="series_basic_info"]/ul'
const ul_elem = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
let id_elem = ul_elem.firstElementChild;
while (!id_elem.firstElementChild.textContent.match(/TheTVDB.com (Movie|Series) ID/g)) {
    id_elem = id_elem.nextElementSibling;
}
const id = id_elem.querySelector('span').textContent;

let year_elem = ul_elem.firstElementChild;
while (!year_elem.firstElementChild.textContent.match(/(Released|First Aired)/g)) {
    year_elem = year_elem.nextElementSibling;
}
const year = year_elem.textContent.match(/\b\d{4}\b/)[0];

const content = plexStyle(title, year, `tvdb-${id}`);
const plex_elem = createPlexElement(document, content);
title_elem.insertAdjacentElement('afterend', plex_elem);
title_elem.style.marginBottom = 0;