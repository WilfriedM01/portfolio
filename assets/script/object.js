const projects = [
  {
    id: "card1",
    title: "Tonic",
    title1: "Tonic",
    company: "CANOPY",
    company1: "CANOPY",
    icon: "./assets/icons/modal_git_icon.svg",
    icon1: "./assets/icons/modal_export_icon.svg",
    specialization: "Back End Dev",
    specialization1: "Back End Dev",
    year: "2015",
    year1: "2015",
    description:
      'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: {
      tech1: "html",
      tech4: "Ruby on rials",
      tech2: "css",
      tech3: "javaScript",
    },
    details: "See project",
    imageMobile: "./assets/img/cards/card1.png",
    imageDesktop: "./assets/img/cards/card1.png",
    live: "https://wilfriedm01.github.io/",
    source: "https://github.com/WilfriedM01/portfolio.git",
  },
  {
    id: "card2",
    title: "Multi-Post",
    title1: "Multi-Post",
    company: "CANOPY",
    company1: "FACEBOOK",
    icon: "./assets/icons/modal_git_icon.svg",
    icon1: "./assets/icons/modal_export_icon.svg",

    specialization: "Back End Dev",
    specialization1: "Full Stack Dev",
    year: "2015",
    year1: "2015",
    description:
      'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: {
      tech1: "html",
      tech4: "Ruby on rials",
      tech2: "css",
      tech3: "javaScript",
    },
    details: "See project",
    imageMobile: "./assets/img/cards/card2.png",
    imageDesktop: "./assets/img/cards/card2.png",
    live: "https://wilfriedm01.github.io/",
    source: "https://github.com/WilfriedM01/portfolio.git",
  },
  {
    id: "card3",
    title: "Tonic",
    title1: "Facebook 360",
    company: "CANOPY",
    company1: "FACEBOOK 360",
    icon: "./assets/icons/modal_git_icon.svg",
    icon1: "./assets/icons/modal_export_icon.svg",

    specialization: "Back End Dev",
    specialization1: "Full Stack Dev",
    year: "2015",
    year1: "2015",
    description:
      'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    technologies: {
      tech1: "html",
      tech4: "Ruby on rials",
      tech2: "css",
      tech3: "javaScript",
    },
    details: "See project",
    imageMobile: "./assets/img/cards/card3.png",
    imageDesktop: "./assets/img/cards/card3.png",
    live: "https://wilfriedm01.github.io/",
    source: "https://github.com/WilfriedM01/portfolio.git",
  },
  {
    id: "card4",
    title: "Multi-Post<br>Stories",
    title1: "Uber Navigation",
    company: "CANOPY",
    company1: "Uber",
    icon: "./assets/icons/modal_git_icon.svg",
    icon1: "./assets/icons/modal_export_icon.svg",
    specialization: "Back End Dev",
    specialization1: "Lead Developer",
    year: "2015",
    year1: "2018",
    description:
      'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: {
      tech1: "html",
      tech4: "Ruby on rials",
      tech2: "css",
      tech3: "javaScript",
    },
    details: "See project",
    imageMobile: "./assets/img/cards/card4.png",
    imageDesktop: "./assets/img/cards/card4.png",
    live: "https://wilfriedm01.github.io/",
    source: "https://github.com/WilfriedM01/portfolio.git",
  },
];
// Work section data structure
const Worksection = document.querySelector(".work-cards");
projects.forEach((project) => {
  const cardDiv = document.createElement("div");
  cardDiv.innerHTML = `
  <a href="#" class="article-link opacity"
        ><section class="articles">
          <article class="article-item ${project.id}">
            <p class="sub-item">
              <img
                src="${project.imageDesktop}"
                alt=""
                class="article-img"
              />
            </p>
            <div class="article-content">
              <h2 class="article-title">${project.title}</h2>
              <h3>${project.company} <span>&bull; ${project.specialization} &bull; ${project.year}</span></h3>
              <p class="article-text">
              ${project.description1}
              </p>
              <ul class="article-tags">
                <li class="article-tag ok">${project.technologies.tech1}</li>
                <li class="article-tag">${project.technologies.tech2}</li>
                <li class="article-tag">${project.technologies.tech3}</li>
              </ul>
              <button class="article-btn button_see_2" id="${project.id}">${project.details}</button>
            </div>
          </article>
        </section></a
      >
  `;
  Worksection.append(cardDiv);
});

// Modal content
const body = document.querySelector("body");
const seeProject = document.querySelectorAll(".button_see_2");
seeProject.forEach((button) =>
  button.addEventListener("click", (button) => {
    const { id } = button.target;
    const pop = projects.find((button) => button.id === id);
    const modal = document.createElement("div");
    modal.className = "modal";
    const popup = document.createElement("div");
    popup.innerHTML = `
  <div class="model model_2 model_3 model_4">
<div class="model-main">
  <div class="sub-div">
    <div class="title-links-closeButton">
      <div class="title-links-closeButton-title">
        <h2>${pop.title}</h2>
        <div class="icon-container">
          <i class="fa-regular fa-x fa-x-button" id="desktop-id"></i>
        </div>
      </div>
      <div class="title-links-closeButton-title-links">
      <h2 class="article-title"></h2>
        <li class="li-1"><a href="" class="detail-1">${pop.company}&bull;</a></li>

        <li class="li-1"><a href="" class="detail-2">${pop.specialization} &bull;</a></li>

        <li class="li-1"><a href="" class="detail-3">${pop.year}</a></li>
      </div>
    </div>
    <div class="img-sub-div">
      <img src="${pop.imageDesktop}" alt="sub-div1" class="img-height">
    </div>
    <div class="information-row-three">
      <div class="p-information-row">
        <p>${pop.description1}</p>
      </div>
      <div class="linkAndButtons">
        <ul class="technologies-desktop-component tec-link">
          <li><a href="" class="tecnologia_1 tec">${pop.technologies.tech1}</a></li>
          <li><a href="" class="tecnologia_2 tec">${pop.technologies.tech2}</a></li>
          <li><a href="" class="tecnologia_3 tec">${pop.technologies.tech3}</a></li>
          <li><a href="" class="tecnologia_3 tec">${pop.technologies.tech4}</a></li>
        </ul>
        <ul
          class="technologies-desktop-component tec-link"
          id="tecnologia_container_two"
        >
          <li><a href="" class="tecnologia_4 tec"></a></li>
        </ul>
        <div class="tec-linkss">
          <img src="" alt="" class="" />
        </div>
        <div class="SeeLive-SeeResources">
          <div class="botton-desktop-see">
            <a href="${pop.live}"><button class="btn btn1"><i>See Live </i><img src="${pop.icon1}"></button></a>
          </div>
          <div class="botton-desktop-see">
            <a href="${pop.source}"><button class="btn btn2" id="${pop.id}"><i>See source</i><img src="${pop.icon}"></button></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  `;
    modal.appendChild(popup);
    body.append(modal);
    // Close the popup
    const desktopIdContainer = document.getElementById("desktop-id");
    function closeModels() {
      modal.style.display = "none";
      body.style.overflow = "auto";
    }
    desktopIdContainer.addEventListener("click", closeModels);
  })
);

// Const variables

const buttonSee = document.querySelectorAll(".button_see_2");

const model = document.getElementsByClassName("modal");
const mainBody = document.querySelector(".main_body");

// funtions

function openModel() {
  model[0].style.display = "block";
  mainBody.style.overflow = "hidden";
}
function openModel2() {
  model[1].style.display = "block";
  mainBody.style.overflow = "hidden";
}
function openModel3() {
  model[2].style.display = "block";
  mainBody.style.overflow = "hidden";
}
function openModel4() {
  model[3].style.display = "block";
  mainBody.style.overflow = "hidden";
}

// EventListener

buttonSee[0].addEventListener("click", openModel);
buttonSee[1].addEventListener("click", openModel2);
buttonSee[2].addEventListener("click", openModel3);
buttonSee[3].addEventListener("click", openModel4);
// buttonSee.forEach((e) => e.addEventListener("click", openModel));
