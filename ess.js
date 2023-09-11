// Récupere la case "masquer les paroles"
/*
const checkboxParoles = document.querySelectorAll('.intro'); // à compléter, ce code ne fonctionne pas

// Récupère le div contenant les paroles
const divParoles = document.querySelectorAll('#paroles'); //

// Attache une fonction à l'évènement "click" sur checkboxParoles
checkboxParoles.addEventListener('click', function (event) {
  // cette fonction est executée lorsque l'utilisateur clique sur checkboxParoles

  // event.target contient l'élément cliqué (ici checkboxParoles dans notre cas)
  if (event.target.checked) {
    // la case vient d'être cochée

  } else {
    // la case vient d'être decochée

  }
});
*/


// La premiere question


//document.addEventListener("click", function (event) {
  const checkboxParoles = document.querySelector('#masquer-paroles');
  const divParoles = document.getElementById('paroles');
  let barre = document.querySelector('hr');
  // const checkboxRefrain = document.querySelectorAll('.refrain');
  checkboxParoles.addEventListener('change', function (event) {
    if (event.target.checked) {
      divParoles.style.display = "none";
      checkboxParoles.nextSibling.nodeValue = 'Afficher les paroles'
      barre.setAttribute('style', 'display:none');
    } else {
      divParoles.style.display = "block";
      barre.setAttribute('style', 'display:block');
      // checkboxRefrain.style.display = "block";
      checkboxParoles.nextSibling.nodeValue = 'Masquer les paroles';
    }
  });
  //});
  
  
  //La deuxieme question
  
  const checkboxRefrain = document.querySelectorAll('.refrain');
  const masque_parol = document.querySelector('#masquer-refrains');
  const hiden = document.getElementsByClassName('hidden');
  const ctn = document.getElementsByClassName('contenu');
  //let bar = document.querySelector('hr');
  masque_parol.addEventListener("click", function (event) {
  
    for (let i = 0; i < checkboxRefrain.length; i++) {
      console.log(checkboxRefrain[i]);
      if (event.target.checked) {
        ctn[i].style.display = "none";
        hiden[i].setAttribute('style', 'display: inline');
        masque_parol.nextSibling.nodeValue = 'Afficher les refrains'
        barre.setAttribute('style', 'display:none');
        // console.log(masque_parol.nextSibling.nodeValue);
      } else {
        barre.setAttribute('style', 'display:block');
        ctn[i].style.display = "block";
        masque_parol.nextSibling.nodeValue = 'Masquer les refrains'
        hiden[i].setAttribute('style', 'display: none');
      }
    }
  });
  
  //La troisieme question
  //masque_parol.textContent = document.getElementsByClassName('.hidden');
  masque_parol.addEventListener('click', function (event) {
    // cette fonction est executée lorsque l'utilisateur clique sur checkboxParoles
    const refrains = document.querySelectorAll('.refrain .contenu');
    for (const refrain of refrains) {
    const parentRefrain = refrain.parentElement;
    const definition = parentRefrain.querySelector('.definition');
    const contenu = parentRefrain.querySelector('.contenu');
    //const def = definition.textContent;
    // event.target contient l'élément cliqué (ici checkboxParoles dans notre cas)
    if (event.target.checked) {
      
      // la case vient d'être cochée
      definition.addEventListener('mouseenter', function () {
        
        this.style.display = 'none';
        contenu.style.display = 'block';
      });
      definition.addEventListener('mouseleave', function () {
        this.style.display = 'inline-block';
        contenu.style.display = 'none';
      });
    } else {
      // la case vient d'être decochée
      definition.addEventListener('mouseenter', function () {
      
        this.style.display = '';
        contenu.style.display = '';
      });
      definition.addEventListener('mouseleave', function () {
        this.style.display = '';
        contenu.style.display = '';
      });
    }
  }
  });
  //La quatrieme question
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
      paragraph.style.margin = '0';
    });
  