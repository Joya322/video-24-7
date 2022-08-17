//------accessing child node
/* const checkChild = document.getElementById("domContainer");

console.log(checkChild.childNodes);
console.log(checkChild.childNodes[3]);
console.log(checkChild.childNodes[4].nextSibling);

console.log(checkChild.firstChild);
console.log(checkChild.lastChild);

const domContainer = document.querySelector("#domContainer"); */


//-------creating an element by js
/* const domContainer = document.querySelector("#domContainer ul");
console.log(domContainer);

const li = document.createElement("li");
li.innerText = "create element by js";
// console.log(li);
domContainer.appendChild(li);

const li2 = document.createElement("li");
li2.innerText = "created another HTML element by js";
domContainer.appendChild(li2); */

//------check parent node
const domContainer = document.querySelector("#domContainer ul");
const parent = domContainer.parentNode;
console.log(parent);

const grandParent = parent.parentNode;
console.log(grandParent);

const greatGrandParent = grandParent.parentNode;
console.log(greatGrandParent);

const greatGreatGrandParent = greatGrandParent.parentNode;
console.log(greatGreatGrandParent);

const greatGreatGreatGrandParent = greatGreatGrandParent.parentNode;
console.log(greatGreatGreatGrandParent);

const noMoreGrandParent = greatGreatGreatGrandParent.parentNode;
console.log(noMoreGrandParent);