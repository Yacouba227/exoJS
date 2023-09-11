// -console.log(datas);
// Structure de datas:
// - fullname: string
// - profil: string
// - email : string
// - description : string
// - socials : [Social, Social, ...]
// - works : [Work, Work, ...]
// - experience : [Experience, Experience, ...]

// Structure de Social:
// name : string
// url : string
// link : string

// Structure de Work:
// name: string,
// url: string,
// technology: [Techo, Techno, ...],
// preview: string

// Structure de Experience:
// name: string,
// link: string,
// technology: [Techo, Techno, ...]

// 1.
const fullName = document.getElementById('fullName');
fullName.textContent = datas.fullname;
// 2.
const profil = document.getElementById('profil');
profil.textContent = datas.profil;
// 3.
const description = document.getElementById('description');
description.textContent = datas.description;
// 4.
const picture = document.getElementById('picture');
picture.src = datas.picture;
// 5.
const social = document.querySelectorAll('.socials');
const sociall = datas.socials;
for (let i = 0; i < social.length; i++) {
  social[i].textContent = "";
  //console.log(social[i]);
  sociall.forEach(element => {
    let li = document.createElement('li');
    social[i].append(li);
    let a = document.createElement('a');
    a.href = element.url;
    li.append(a);
    let img = document.createElement('img');
    img.src = element.link;
    img.alt = element.name;
    a.append(img);
  });
}
// 6.
const worksElement = document.getElementById("works");
for (const work of datas.works) {
  const colDiv = document.createElement("div");
  colDiv.classList.add("col-xl-4", "col-lg-4", "col-sm-6", "col-12", "my-2");
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "h-100");
  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.src = work.preview;
  img.alt = work.name;
  const cardBodyDiv = document.createElement("div");
  cardBodyDiv.classList.add("card-body", "w-100", "px-0");
  const h2 = document.createElement("h2");
  h2.classList.add("card-title", "mt-0", "mb-4", "text-center");
  h2.textContent = work.name;
  const ul = document.createElement("ul");
  ul.classList.add("list-unstyled", "w-100", "d-flex", "justify-content-center", "flex-wrap");
  for (const technology of work.technology) {
    const li = document.createElement("li");
    li.innerHTML = `<span class="card-link">${technology}</span>`;
    ul.appendChild(li);
  }
  const rowDiv = document.createElement("div");
  rowDiv.classList.add("row", "w-100");
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("d-flex", "justify-content-center");
  const a = document.createElement("a");
  a.href = work.url;
  a.classList.add("text-decoration-none", "px-4", "py-3", "mt-2", "rounded",);
  a.textContent = "See Project";
  buttonDiv.appendChild(a);
  rowDiv.appendChild(buttonDiv);
  cardBodyDiv.appendChild(h2);
  cardBodyDiv.appendChild(ul);
  cardBodyDiv.appendChild(rowDiv);
  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBodyDiv);
  colDiv.appendChild(cardDiv);
  worksElement.appendChild(colDiv);
}
// 7.
const experiencesElement = document.getElementById("experiences");
for (const experience of datas.experiences) {
  const colDiv = document.createElement("div");
  colDiv.classList.add("col-xl-4", "col-lg-4", "col-sm-6", "col-12", "my-2");
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "h-100");
  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.src = experience.link;
  img.alt = experience.name;
  const cardBodyDiv = document.createElement("div");
  cardBodyDiv.classList.add("card-body", "w-100", "px-0");
  const h2 = document.createElement("h2");
  h2.classList.add("card-title", "mt-0", "mb-4", "text-center");
  h2.textContent = experience.name;
  const ul = document.createElement("ul");
  ul.classList.add("list-unstyled", "w-100", "d-flex", "justify-content-center", "flex-wrap");
  for (const technology of experience.technology) {
    const li = document.createElement("li");
    li.innerHTML = `<span class="card-link">${technology}</span>`;
    ul.appendChild(li);
  }
  cardBodyDiv.appendChild(h2);
  cardBodyDiv.appendChild(ul);
  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBodyDiv);
  colDiv.appendChild(cardDiv);
  experiencesElement.appendChild(colDiv);
}
// 8.
const mailElement = document.getElementById("mail");
mailElement.textContent = datas.email;