// welcome
function writing() {
  const dynamicText = document.querySelector("#dynamic-text");
  const myText = [
    "Frontend Web Developer.",
    "Passionate about build interactive web application.",
  ];
  let textIndex = 0;
  let charIndex = 0;
  function writeChar() {
    if (charIndex < myText[textIndex].length) {
      dynamicText.innerHTML = myText[textIndex].substring(0, charIndex + 1);
      charIndex++;
      setTimeout(writeChar, 100);
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
  "HTML&CSS",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "JS&ES6",
  "React",
  "TypeScript",
  "Git&GitHub",
  "APIs&Axios",
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
    name: "E-Commerce",
    descrp: "Based on React Js & Redux",
    image: "./images/project10.jpg",
    codeLink: "https://github.com/MohamedOsama2001/E-Commerce",
    demoLink: "https://e-commerce-liard-xi-49.vercel.app/",
    tools: "React",
  },
  {
    id: "2",
    name: "Dynamic weather app",
    descrp: "Based on React JS",
    image: "./images/project7.jpg",
    codeLink: "https://github.com/MohamedOsama2001/weather-app",
    demoLink: "https://weather-app-opal-psi.vercel.app/",
    tools: "React",
  },
  {
    id: "3",
    name: "ShoppingCart",
    descrp: "Based on JavaScript",
    image: "./images/project4.jpg",
    codeLink: "https://github.com/MohamedOsama2001/online-shopping",
    demoLink: "https://mohamedosama2001.github.io/online-shopping/",
    tools: "JavaScript",
  },
  {
    id: "4",
    name: "To do List",
    descrp: "Based on JavaScript",
    image: "./images/project6.jpg",
    codeLink: "https://github.com/MohamedOsama2001/To-Do-List",
    demoLink: "https://mohamedosama2001.github.io/To-Do-List/",
    tools: "JavaScript",
  },
  {
    id: "5",
    name: "Egypt Tourism",
    descrp: "Based on Bootstrap",
    image: "./images/project3.jpg",
    codeLink: "https://github.com/MohamedOsama2001/Egypt-Tourism",
    demoLink: "https://mohamedosama2001.github.io/Egypt-Tourism/",
    tools: "Bootstrap",
  },
  {
    id: "6",
    name: "Rocker",
    descrp: "Based on HTML5 & CSS3",
    image: "./images/project2.jpg",
    codeLink: "https://github.com/MohamedOsama2001/2nd_frontend_project",
    demoLink: "https://mohamedosama2001.github.io/2nd_frontend_project/",
    tools: "HTML5&CSS3",
  },
  {
    id: "7",
    name: "VivaDecor",
    descrp: "Based on HTML5 & CSS3",
    image: "./images/project5.jpg",
    codeLink: "https://github.com/MohamedOsama2001/LandingPage/",
    demoLink: "https://mohamedosama2001.github.io/LandingPage/",
    tools: "HTML5&CSS3",
  },
  {
    id: "8",
    name: "landing page",
    descrp: "Based on HTML & CSS",
    image: "./images/project1.png",
    codeLink: "https://github.com/MohamedOsama2001/FirstFrontendProject",
    demoLink: "https://mohamedosama2001.github.io/FirstFrontendProject/",
    tools: "HTML&CSS",
  },
];
let toolsUSed = ["HTML&CSS", "HTML5&CSS3", "Bootstrap", "JavaScript", "React"];
let projectDiv = document.querySelector(".projects-content .row");
let filterButtons = document.querySelector(".filter-butttons");
const drawButtons = (buttons) => {
  let button = buttons.map((item) => {
    return `
    <button class='btn btn-outline-light filter-button' data-tool=${item}>${item}</button>
    `;
  });
  filterButtons.innerHTML += button.join("");
};
drawButtons(toolsUSed);
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
                      href=${item.codeLink}
                      target="_blank"
                    >
                      <i class="fab fa-github"></i> Code
                    </a>
                    <a
                      class="btn btn-light ms-3"
                      href=${item.demoLink}
                      target="_blank"
                    >
                      <i class="fas fa-link"></i> Link
                    </a>
                  </div>
                </div>
              </div>
        `;
  });
  projectDiv.innerHTML = proj.join("");
}
drawProjects(projects);
const allProjectsBtn=document.querySelector('.all-btn')
allProjectsBtn.onclick = ()=> drawProjects(projects)
//////////////////////////////////////////////////////
//filter function
const filterProjects = (tool) => {
  const filteredProjects = projects.filter((item) => item.tools === tool);
  drawProjects(filteredProjects);
};
const addFilterEventListeners = () => {
  const filterButtons = document.querySelectorAll(".filter-button");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tool = button.getAttribute("data-tool");
      filterProjects(tool);
    });
  });
};
addFilterEventListeners();
