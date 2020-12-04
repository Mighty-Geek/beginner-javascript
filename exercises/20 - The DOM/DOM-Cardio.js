// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);
// make an unordered list
const ul = `
<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>
`;
// add three list items with the words "one, two three" in them
// put that list into the above wrapper
div.innerHTML = ul;
// create an image
const img = document.createElement('img');
// set the source to an image
img.src =
    'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg';
// set the width to 250
img.width = 250;
img.height = 250;
// add a class of cute
img.classList.add('Cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy';
// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
<div class= "myDIV">
    <p>Hallo ich bin albert zweistein</p>
    <p>ich bin wirklich intelligent</p>
</div>`;
// put this div before the unordered list from above
const ulElement = div.querySelector('ul');

ulElement.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning
const myDIV = div.querySelector('.myDIV');
console.log(myDIV);
myDIV.children[1].classList.add('warning');
// remove the first paragraph
myDIV.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
    const html = `
    <div class= "PlayerCard">
        <h2>${name} - ${age}</h2>
        <p><p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
        7}. That would be a tall dog!</p>
        <button class = "delete" type = "button">&times; Delete</button>
    </div>
    `;
    return html;
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be {AGEINDOGYEARS}. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('Cards');

// Have that function make 4 cards
let cardsHTML = generatePlayerCard('amy', 18, 345);

// append those cards to the div
cardsHTML += generatePlayerCard('wes', 24, 543);

cardsHTML += generatePlayerCard('mal', 24, 543);

cardsHTML += generatePlayerCard('matthi', 24, 543);

cards.innerHTML = cardsHTML;
// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');

// make out delete function
function deleteCard(event) {
    const buttonThatGotClicked = event.currentTarget;
    // buttonThatGotClicked.parentElement.remove();
    buttonThatGotClicked.closest('.playerCard').remove();
    // console.log(event.currentTarget);
    // console.log('Delete Card! TODO');
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
