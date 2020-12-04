// const item = document.querySelector('.item');

// const width = 500;
// const src = `https://picsum.photos/${width}`;
// const desc = `Cute Pup <img onload="alert('HACKED')" src="https://picsum.photos/50"/>`;
// const myHTML = `
//   <div class="wrapper">
//     <h2>Cute ${desc}</h2>
//     <img src="${src}" alt="${desc}"/>
//   </div>
// `;

// // turn a string into a DOM element
// const myFragment = document.createRange().createContextualFragment(myHTML);

// document.body.appendChild(myFragment);

console.log(`it work's`);
const item = document.querySelector('.item2');

item.innerHTML = `<ul>
<li>Stuhl</li>
<li>Tisch</li>
`;
console.log(item.innerHTML);
const desc = `Cute puppy<img onload="alert('HACKED')" 
src = "https://picsum.photos/50/"/> 
`;
const width = 200;
const src = `https://picsum.photos/${width}`;
const myHTML = `
<div class = "wrapper">
  <h2>${desc}</h2>
  <img src = "${src}" alt = "${desc}">
</div>
`;

//  turn a string into DOM:

const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);
