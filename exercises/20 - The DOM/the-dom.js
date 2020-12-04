/* const p = document.querySelector('p');
const divs = document.querySelectorAll('div');
console.log(p);
console.log(divs);
const heading = document.querySelector('h2');
console.dir(heading.innerText);
console.log(heading.innerHTML);
console.log(heading.outerHTML);

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

pizzaList.insertAdjacentText('afterbegin', '🍕');
*/
// Classes:
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.toggle('round');
console.log(pic.classList);

function toggleRound() {
    pic.classList.toggle('round');
}

pic.addEventListener('dblclick', toggleRound);

pic.alt = 'Cute Pup'; // setter
console.log(pic.alt); // getter
console.log(pic.naturalWidth); // getter
// pic.setAttribute('alt', 'really cute pup');
// console.log(pic.getAttribute('alt'));

const custom = document.querySelector('.custom');
console.log(custom.dataset);

window.addEventListener('load', function () {
    alert(`Welcome ${custom.dataset.name} `);
});
