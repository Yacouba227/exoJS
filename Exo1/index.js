// 1.
const body = document.body;
body.firstElementChild.textContent = 'Never Gonna Give You Up';
// 2.
const couplet1 = document.getElementsByClassName('couplet');
for (let i = 0; i < couplet1.length; i++) {
  console.log(couplet1[i].textContent);
  couplet1[i].firstChild.remove(); 
}
// 3.

const couplettout = document.querySelectorAll('.refrain');
for (let i = 0; i < couplettout.length; i++){
  const  uniqueArr = [...new Set(couplettout[i].textContent.split('\n'))];
  couplettout[i].innerHTML = '';
   for (let j = 0; j < uniqueArr.length; j++) {
     couplettout[i].innerHTML += `${uniqueArr[j]} <br>`;        
   }
  //couplettout[i].innerHTML = uniqueArr.join('<br>');
}


// 4.
const element = document.getElementById('erreur');
element.remove();
// 5.
let footer = document.createElement("footer");
let texte = document.createTextNode("© Copyright 2023 - HALIDOU YACOUBOU");
footer.appendChild(texte);
document.body.appendChild(footer);


/* 
for (let i = 1; i <= 100; i++) {
  console.log(`${i%3 === 0 ? "Fizz": ""}${i%5 === 0 ? "Buzz" : ""} ${i}`)
} */