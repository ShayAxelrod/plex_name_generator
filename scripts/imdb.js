const titleSection = document.querySelector('h1').parentElement;

const title_elem = titleSection.querySelector('h1');
let title = "NoTitle";
if (title_elem)
    title = removeSpecialChars(title_elem.textContent);

let year_elem = titleSection.querySelector('ul').firstElementChild;
while (!year_elem.textContent.match(/\b\d{4}(?:-\d{4})?\b/g)) {
    year_elem = year_elem.nextElementSibling;
}
year = "0000";
if (year_elem)
    year = year_elem.textContent.split('–')[0];

const id_elem = year_elem.querySelector('a');
id = "tt00";
if (id)
    id = id_elem.getAttribute("href").match(/tt\d+/)[0];

const content = plexStyle(title, year, `imdb-${id}`);
const plex_elem = createPlexElement(document, content);
title_elem.insertAdjacentElement('afterend', plex_elem);