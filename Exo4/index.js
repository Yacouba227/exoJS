// console.log(chanson);
// Structure de Chanson:
// - auteur: string
// - titre: string
// - paroles : [Couplet, Couplet, ...]
// Structure de Couplet:
// id : string
// type : string
// chanteur : string
// contenu: tableau contenant les lignes du couplet
// 1.
const pageTitle = document.createElement('h1');
const titleText = document.createTextNode(chanson.titre)
const small = document.createElement('small');
small.textContent = `${chanson.auteur} - `;
pageTitle.appendChild(small);
pageTitle.appendChild(titleText);
document.body.appendChild(pageTitle)
// 2.
const contenuParoles = document.createElement('div');
contenuParoles.classList.add('paroles');
chanson.paroles.forEach(parole => {
    const paragraphe = document.createElement('p');
    paragraphe.classList.add(parole.type);
    paragraphe.innerHTML = parole.contenu.join('<br>');
    contenuParoles.appendChild(paragraphe);
});
document.body.appendChild(contenuParoles);
// 3.
const footer = document.createElement('footer');
const codeloccol = document.createTextNode(`© Copyright 2023 - Codeloccol`);
footer.appendChild(codeloccol);
document.body.appendChild(footer);
// 4.
//Pour la creation du checkbox
const versetElements = document.querySelectorAll('.verset');
versetElements.forEach(versetElement => {
    const contenuPargraphe = versetElement.innerHTML;
    const spanContenu = document.createElement('span');
    spanContenu.classList.add('contenu');
    spanContenu.innerHTML = contenuPargraphe;
    versetElement.innerHTML = '';
    versetElement.appendChild(spanContenu);
    const span = document.createElement('span');
    span.classList.add('hidden', 'definition');
    span.textContent = '[verset]';
    const br = document.createElement('br');
    versetElement.prepend(br);
    versetElement.prepend(span);
});


const label1 = document.createElement('label');
const checbox1 = document.createElement('input');
checbox1.type = 'checkbox';
checbox1.id = 'masquer-refrains';
const text1 = document.createTextNode('Masquer les refrains');
label1.appendChild(checbox1);
label1.appendChild(text1);
label1.after(pageTitle);
label1.style.fontSize = '18px';
document.body.insertBefore(label1, contenuParoles);
//Pour le label 2
const label2 = document.createElement('label');
const checbox2 = document.createElement('input');
checbox2.id = 'masquer-paroles';
checbox2.type = 'checkbox';
const text2 = document.createTextNode('Masquer les paroles');
label2.appendChild(checbox2);
label2.appendChild(text2);
label2.after(pageTitle);
label2.style.fontSize = '18px';
label2.style.marginLeft = '12px';
document.body.insertBefore(label2, contenuParoles);
//Pour masquer les paroles
const masquer_paroles = document.querySelector('#masquer-paroles');
const paroles = document.querySelector('.paroles');
masquer_paroles.addEventListener('click', function (e) {
    if (e.target.checked) {
        paroles.style.display = 'none';
        masquer_paroles.nextSibling.nodeValue = 'Afficher les paroles';
    } else {
        paroles.style.display = 'block';
        masquer_paroles.nextSibling.nodeValue = 'Masquer les paroles'
    }
});
//Pour masquer les refrains
const versets = document.querySelectorAll('.verset');
const masque_refrain = document.querySelector('#masquer-refrains');
const definitions = document.querySelectorAll('.definition');
const contenus = document.querySelectorAll('.contenu');
masque_refrain.addEventListener('click', function (e) {
    if (e.target.checked) {
        masque_refrain.nextSibling.nodeValue = 'Afficher les refrains';
        for (let i = 1; i < definitions.length; i++) {
            definitions[i].classList.remove('hidden');
            contenus[i].classList.add('hidden');

            definitions[i].addEventListener('mouseenter', ()=>{
                contenus[i].classList.remove('hidden');
            });
            definitions[i].addEventListener('mouseleave', ()=>{
                contenus[i].classList.add('hidden');
            });
        }
    } else {;
        masque_refrain.nextSibling.nodeValue = 'Masquer les refrains';
        for (let i = 1; i < definitions.length; i++) {
            definitions[i].classList.add('hidden');
            contenus[i].classList.remove('hidden');
        }
    }
});
//espace entre les paragraphes
const par = document.querySelectorAll('p');
par.forEach(par => {
    par.setAttribute('style', 'margin:0');
});