// La premiere question
const h1 = document.createElement('h1')
const small = document.createElement('small')
small.innerHTML = chanson.auteur + ' - '
h1.appendChild(small)
h1.innerHTML += chanson.titre
document.body.appendChild(h1)
// La deuxieme question
const checkBoxRefrain = document.createElement('input')
checkBoxRefrain.type = 'checkbox'
checkBoxRefrain.id = 'masquer-refrains'
checkBoxRefrain.value = 'Masquer les refrains'
const label = document.createElement('label')
label.appendChild(checkBoxRefrain)
label.appendChild(document.createTextNode(checkBoxRefrain.value));
document.body.appendChild(label)
const checkBoxParoles = document.createElement('input')
checkBoxParoles.type = 'checkbox'
checkBoxParoles.id = 'masquer-paroles'
checkBoxParoles.value = 'Masquer les paroles'
const label_paroles = document.createElement('label')
label_paroles.appendChild(checkBoxParoles)
label_paroles.appendChild(document.createTextNode(checkBoxParoles.value))
label_paroles.style.marginLeft = '10px'
document.body.appendChild(label_paroles)
const divParoles = document.createElement('div')
divParoles.classList.add('paroles')
for (let i = 0; i < chanson.paroles.length; i++) {
  const couplets = chanson.paroles[i];
  const paragraph = document.createElement('p')
  paragraph.classList.add(couplets.type)
  const span = document.createElement('span')
  paragraph.appendChild(span)
  for (let j = 0; j < couplets.contenu.length; j++) {
    const contenu = couplets.contenu[j];
    span.appendChild(document.createTextNode(contenu))
    if (j < contenu.length) {
      span.appendChild(document.createElement('br'))
    }
  }
  divParoles.appendChild(paragraph)
}
document.body.appendChild(divParoles)
const versetClasse = document.querySelectorAll('.verset')
versetClasse.forEach((elemet) => {
  const versetElement = document.createElement('p')
  versetElement.classList.add('maClasse')
  versetElement.classList.add('hidden')
  versetElement.textContent = '[Refrain]'
  elemet.appendChild(versetElement)

})
// La troisieme question
let footer = document.createElement("footer");
let texte = document.createTextNode("© Copyright 2023 - Codeloccol");
footer.appendChild(texte);
document.body.appendChild(footer);
// La quatrieme question suite 
const versetElementClasse = document.querySelectorAll('.contenuVersetElement')
const checkBoxRefrainId = document.getElementById('masquer-refrains')
const versetContenu = document.querySelectorAll('.verset span')
const maClasse = document.querySelectorAll('.maClasse')
const checkBoxParolesId = document.getElementById('masquer-paroles')
const parolesId = document.querySelector('.paroles')
checkBoxParolesId.addEventListener('click', (event) => {
  if (event.target.checked) {
    parolesId.style.display = 'none'
    checkBoxParolesId.parentElement.childNodes[1].textContent = "Afficher les paroles"
  } else {
    parolesId.style.display = 'block'
    checkBoxParolesId.parentElement.childNodes[1].textContent = "Masquer les paroles"
  }
})
checkBoxRefrainId.addEventListener('click', (event) => {
  for (let i = 1; i < versetClasse.length; i++) {
    if (event.target.checked) {
      versetContenu[i].classList.add('hidden')
      maClasse[i].classList.remove('hidden')
      checkBoxRefrainId.parentElement.childNodes[1].textContent = "Afficher les refrains"
      maClasse[i].addEventListener('mouseenter', () => {
        versetContenu[i].classList.remove('hidden')
      })
      maClasse[i].addEventListener('mouseleave', () => {
        versetContenu[i].classList.add('hidden')
      })
    } else {
      versetContenu[i].classList.remove('hidden')
      maClasse[i].classList.add('hidden')
      checkBoxRefrainId.parentElement.childNodes[1].textContent = "Masquer les refrains"
    }
  }
})


