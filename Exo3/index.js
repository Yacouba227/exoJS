// La premiere question
const masquer_paroles = document.querySelector('#masquer-paroles');
const paroles = document.querySelector('#paroles');
const barre = document.querySelector('hr');
masquer_paroles.addEventListener('click', function (e) {
  if (e.target.checked) {
    paroles.style.display = 'none';
    barre.style.display = 'none';
    masquer_paroles.nextSibling.nodeValue = 'Afficher les paroles'
  } else {
    paroles.style.display = 'block';
    barre.style.display = 'block';
    masquer_paroles.nextSibling.nodeValue = 'Masquer les paroles'
  }
});
//La dexieme question
const refrain = document.querySelectorAll('.refrain');
const masque_refrain = document.querySelector('#masquer-refrains');
const definition = document.getElementsByClassName('definition');
const contenu = document.getElementsByClassName('contenu');
masque_refrain.addEventListener("click", function (e) {
  for (let i = 1; i < refrain.length; i++) {
    if (e.target.checked) {
      contenu[i].style.display = "none";
      definition[i].style.display = 'block';
      masque_refrain.nextSibling.nodeValue = 'Afficher les refrains';
    } else {
      contenu[i].style.display = "block";
      masque_refrain.nextSibling.nodeValue = 'Masquer les refrains';
      definition[i].style.display = 'none';
    }
  }
});
// La troisieme question
for (let i = 1; i < definition.length; i++) {
  definition[i].addEventListener('mouseenter', function () {
    definition[i].style.display = 'none';
    contenu[i].style.display = 'block';
  });
  definition[i].addEventListener('mouseleave', function () {
    contenu[i].style.display = 'none';
    definition[i].style.display = 'inline-block';
  });
}
// La quatrieme question
const paragraph = document.querySelectorAll('p');
paragraph.forEach(paragraph => {
  paragraph.setAttribute('style', 'margin:0');
});