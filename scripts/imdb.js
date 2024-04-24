//import { removeSpecialChars,
 //        plexStyle,
  //       createPlexElement
   //      } from './tools.js'

console.log("running")

function checkPageType(titleSection) {
    const list_elem = titleSection.querySelector('ul');
    const children = list_elem.children.length;
    const isSeries = children > 3 ? true : false;
    return isSeries;
}

const titleSection = document.querySelector('h1').parentElement;
const isSeries = checkPageType(titleSection);

const title_elem = titleSection.querySelector('h1').firstElementChild;
let title = "NoTitle";
if (title_elem)
    title = removeSpecialChars(title_elem.textContent);
console.log(`title: ${title}`);

let year_elem = titleSection.querySelector('ul').firstElementChild;
if (isSeries)
    year_elem = year_elem.nextElementSibling;
year = "0000";
if (year_elem)
    year = year_elem.textContent.split('–')[0];
console.log(`year: ${year}`);

const id_elem = year_elem.querySelector('a');
id = "tt00";
if (id)
    id = id_elem.getAttribute("href").match(/tt\d+/)[0];
console.log(`id: ${id}`);

const content = plexStyle(title, year, `imdb-${id}`);
const plex_elem = createPlexElement(document);

console.log(span);
