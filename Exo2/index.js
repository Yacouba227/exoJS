// 1
const supclasse = document.querySelectorAll('.red');
for(let i = 0; i < supclasse.length; i++){
    supclasse[i].classList.remove('red');
    supclasse[i].classList.add('blue');
}
// 2
const monParagraphe = document.querySelectorAll('.refrain');
for(let i = 0; i < monParagraphe.length; i++){
    monParagraphe[i].classList.add('italic');
}
// 3
const blueclaire = document.querySelectorAll('.blue');
for(let i = 0; i < blueclaire.length; i++){
     blueclaire[i].setAttribute('style', 'background-color: #6495ED;');
}
// 4
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => {
  paragraph.style.margin = '0';
});