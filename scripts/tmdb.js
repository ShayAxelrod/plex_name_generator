const titleSection = document.querySelector('h2').parentElement;
const title_elem = titleSection.firstElementChild;

const title = removeSpecialChars(title_elem.firstElementChild.textContent);
const year = title_elem.firstElementChild.nextElementSibling.textContent.match(/\b\d{4}\b/)[0];
const id = title_elem.firstElementChild.getAttribute("href").match(/\d+/)[0];

const content = plexStyle(title, year, `tmdb-${id}`);
const plex_elem = createPlexElement(document, content);
title_elem.insertAdjacentElement('beforebegin', plex_elem);