// welcome
function writing() {
  const dynamicText = document.querySelector("#dynamic-text");
  const myText = [
    "FullStack Web Developer.",
    "Frontend Web Developer.",
    "Backend Web Developer.",
  ];
  let textIndex = 0;
  let charIndex = 0;
  function writeChar() {
    if (charIndex < myText[textIndex].length) {
      dynamicText.innerHTML = myText[textIndex].substring(0, charIndex + 1);
      charIndex++;
      setTimeout(writeChar, 200);
    } else {
      setTimeout(delChar, 1400);
    }
  }
  function delChar() {
    if (charIndex >= 0) {
      dynamicText.innerHTML = myText[textIndex].substring(0, charIndex);
      charIndex--;
      setTimeout(delChar, 50);
    } else {
      textIndex = (textIndex + 1) % myText.length;
      setTimeout(writeChar, 500);
    }
  }
  writeChar();
}
writing();
//////////////////////////////////////////////////////////////////////////////////////
//skills
const skills = [
  "HTML",
  "CSS",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "JS&ES6",
  "React",
  "Git&GitHub",
  "APIs&Axios",
  "Node.js",
  "Express.js",
  "Mongodb",
];
const chunkSkills = (array, size) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

const skillChunks = chunkSkills(skills, 3);
let carouselIndicators = document.querySelector(".carousel-indicators");
function darwIndicators(skills) {
  let indicator = skills.map((_, index) => {
    return `
        <button
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide-to=${index}
                    class=${index === 0 ? "active" : ""}
                  ></button>
        `;
  });
  carouselIndicators.innerHTML = indicator.join("");
}
darwIndicators(skillChunks);
//////////////////////////////
let carouselInner = document.querySelector(".carousel-inner");
function drawInnerSkills(skills) {
  let innerSkills = skills
    .map((chunk, index) => {
      let skillCards = chunk
        .map((skill, skillIndex) => {
          return `
                <div class="skills-card col-lg-4 col-md-6 col-sm-12">
                    <div class="skills-card-head">
                        <div class="skills-percent">${skill}</div>
                    </div>
                </div>
            `;
        })
        .join("");

      return `
            <div class="carousel-item ${index === 0 ? "active" : ""}">
                <div class="container">
                    <div class="row">
                        ${skillCards}
                    </div>
                </div>
            </div>
        `;
    })
    .join("");

  carouselInner.innerHTML = innerSkills;
}
drawInnerSkills(skillChunks);
/////////////////////////////////////////////////////////////////////////////
//projects
let projects = [
  {
    id: "1",
    name: "landing page",
    descrp: "Based on HTML & CSS",
    image: "./images/project1.png",
    codeLink: "https://github.com/MohamedOsama2001/FirstFrontendProject",
    demoLink: "https://mohamedosama2001.github.io/FirstFrontendProject/",
  },
  {
    id: "2",
    name: "Rocker",
    descrp: "Based on HTML5 & CSS3",
    image: "./images/project2.jpg",
    codeLink: "https://github.com/MohamedOsama2001/2nd_frontend_project",
    demoLink: "https://mohamedosama2001.github.io/2nd_frontend_project/",
  },
  {
    id: "3",
    name: "Egypt Tourism",
    descrp: "Based on Bootstrap",
    image: "./images/project3.jpg",
    codeLink: "https://github.com/MohamedOsama2001/Egypt-Tourism",
    demoLink: "https://mohamedosama2001.github.io/Egypt-Tourism/",
  },
  {
    id: "4",
    name: "ShoppingCart",
    descrp: "Based on Java Script",
    image: "./images/project4.jpg",
    codeLink: "https://github.com/MohamedOsama2001/online-shopping",
    demoLink: "https://mohamedosama2001.github.io/online-shopping/",
  },
  {
    id: "5",
    name: "VivaDecor",
    descrp: "Based on HTML5 & CSS3",
    image: "./images/project5.jpg",
    codeLink: "https://github.com/MohamedOsama2001/LandingPage/",
    demoLink: "https://mohamedosama2001.github.io/LandingPage/",
  },
  {
    id: "6",
    name: "To do List",
    descrp: "Based on Java Script",
    image: "./images/project6.jpg",
    codeLink: "https://github.com/MohamedOsama2001/To-Do-List",
    demoLink: "https://mohamedosama2001.github.io/To-Do-List/",
  },
  {
    id: "7",
    name: "Dynamic weather app",
    descrp: "Based on React JS",
    image: "./images/project7.jpg",
    codeLink: "https://github.com/MohamedOsama2001/weather-app",
    demoLink: "https://weather-app-opal-psi.vercel.app/",
  },
  {
    id: "8",
    name: "Exclusive",
    descrp: "E-Commerce based on React JS",
    image: "./images/project8.jpg",
    codeLink: "https://github.com/MohamedOsama2001/Exclusive",
    demoLink: "https://exclusive-jade.vercel.app/",
  },
  {
    id: "9",
    name: "Indo Bursa",
    descrp: "Freelancing Project like OLX based on React JS & Laraval APIs",
    image: "./images/project9.jpg",
    codeLink: "https://github.com/MohamedOsama2001/indo_boursa",
    demoLink: "https://exclusive-jade.vercel.app/",
  },
];
let projectDiv = document.querySelector(".projects-content .row");
function drawProjects(projects) {
  let proj = projects.map((item) => {
    return `
        <div class="col-lg-6 col-md-6 col-sm-12 mb-5">
                <div class="projects-item">
                  <img src=${item.image}>
                  <div class="image-overlay text-light text-center">
                    <h4>${item.name}</h4>
                    <p class="my-5">${item.descrp}</p>
                    <a
                      class="btn btn-dark"
                      href=${item.demoLink}
                      target="_blank"
                    >
                      Visit
                    </a>
                  </div>
                </div>
              </div>
        `;
  });
  projectDiv.innerHTML=proj.join("")
}
drawProjects(projects)
