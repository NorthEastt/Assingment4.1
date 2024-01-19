const informationPerson = [
  {
    name: "Teav Chhun Nan",
    position: "Dean",
    description:
      " Mr.Chhunnan used to work as Dean College of Science and Technology over 18 years universities, He got involved in Electronics and Telecommunications, Computer Science and Information Technology.<br>Background Educations<br>1994: Studied at Royal Phnom Penh University Department Mathematics.<br>2002: Engineer of Electronics and Telecommunications, Department of Electronics and Telecommunications Hanoi University of Technology.<br>2004: Master of Sciences Electronics and Telecommunications, Department of Electronics and Telecommunications Hanoi University of Technology",
    img: "../images/faculty Member/1.jpeg",
    id: 1,
  },
  {
    name: "Sreang Kosal",
    position: "Lecturer",
    description:
      "2009 Master Degree of Science in Information Technology and Engineering at Royal University of Phnom Penh (RUPP)<br>2003 Bachelor Degree of Science in Computer Science and Engineering at Royal University of Phnom Penh (RUPP).<br>Mr.Kosal used to work as IT Officer for the Communicable Disease Control Department /   Ministry of Health, Part time Instructor for the University of Cambodia (UC) College of Sciences and Technology.",
    img: "../images/faculty Member/2.png",
    id: 2,
  },
  {
    name: "Chhay Buntha",
    position: "Lecturer",
    description:
      "2011: Digital Convergence Technology and Policy Seoul, South Korea.Master of Technology in Computer Technology (Base on Networking).<br>2010:At Indian Institute of Technology Delhi(IITD), India.<br>2009: English Fluency and IT Skill training at CMC, Ltd New Delhi, India.<br>2008: International Leadership Skills, Phnom Penh, Cambodia.<br>2007: Bachelor degree at BBU in Network Technology. Phnom Penh, Cambodia.<br>Mr.Buntha used to work an Internet Gateway technical support (DIX/IIX).Open connection port (VLAN) for leased line customers through fiber optic. (CISCO router and Zyxel switch).Support to leased line customers.IT-Coordinator at University of Cambodia.",
    img: "../images/faculty Member/3.png",
    id: 3,
  },
  {
    name: "Vichhaiy SEREY",
    position: "Lecturer",
    description:
      "With 9 years of working experience in IT field, Vichhaiy is currently working as DevSecOps team lead at the leading bank in Cambodia and is also a part-time IT lecturer at University of Cambodia. He graduated master of science in computer science from one of the top university in Thailand. He holds many professional certifications including OCI Security 2021 Associate, CySA+, SC-200 and CDP.  His research interests are in data mining, IoT and Cybersecurity. ",
    img: "../images/faculty Member/4.jpg",
    id: 4,
  },
  {
    name: "Ngim Bunny",
    position: "Lecturer",
    description:
      "Senior Web Developer specializing in back end development.Experienced with all stages of the development cycle for dynamic web.<br>projects. Well-versed in numerous programming languages including HTML5, PHP OOP, JavaScript, CSS, MySQL, Ajax and Json. - Own POS System – Present<br>- Software Team Leader – Jan,2022 -  dcX Co,. Ltd<br>- Project Freelancer – Sept 2022<br>- Project Manager – Jan,2010 - 2022",
    img: "../images/faculty Member/5.jpg",
    id: 5,
  },
];
const informationPerson1 = [
  {
    name: "Teav Chhun Nan",
    position: "Dean",
    description:
      " Mr.Chhunnan used to work as Dean College of Science and Technology over 18 years universities, He got involved in Electronics and Telecommunications, Computer Science and Information Technology.<br>Background Educations<br>1994: Studied at Royal Phnom Penh University Department Mathematics.<br>2002: Engineer of Electronics and Telecommunications, Department of Electronics and Telecommunications Hanoi University of Technology.<br>2004: Master of Sciences Electronics and Telecommunications, Department of Electronics and Telecommunications Hanoi University of Technology",
    img: "../images/faculty Member/1.jpeg",
    id: 1,
  },
  {
    name: "Sreang Kosal",
    position: "Lecturer",
    description:
      "2009 Master Degree of Science in Information Technology and Engineering at Royal University of Phnom Penh (RUPP)<br>2003 Bachelor Degree of Science in Computer Science and Engineering at Royal University of Phnom Penh (RUPP).<br>Mr.Kosal used to work as IT Officer for the Communicable Disease Control Department /   Ministry of Health, Part time Instructor for the University of Cambodia (UC) College of Sciences and Technology.",
    img: "../images/faculty Member/2.png",
    id: 2,
  },
  {
    name: "Chhay Buntha",
    position: "Lecturer",
    description:
      "2011: Digital Convergence Technology and Policy Seoul, South Korea.Master of Technology in Computer Technology (Base on Networking).<br>2010:At Indian Institute of Technology Delhi(IITD), India.<br>2009: English Fluency and IT Skill training at CMC, Ltd New Delhi, India.<br>2008: International Leadership Skills, Phnom Penh, Cambodia.<br>2007: Bachelor degree at BBU in Network Technology. Phnom Penh, Cambodia.<br>Mr.Buntha used to work an Internet Gateway technical support (DIX/IIX).Open connection port (VLAN) for leased line customers through fiber optic. (CISCO router and Zyxel switch).Support to leased line customers.IT-Coordinator at University of Cambodia.",
    img: "../images/faculty Member/3.png",
    id: 3,
  },
  {
    name: "Vichhaiy SEREY",
    position: "Lecturer",
    description:
      "With 9 years of working experience in IT field, Vichhaiy is currently working as DevSecOps team lead at the leading bank in Cambodia and is also a part-time IT lecturer at University of Cambodia. He graduated master of science in computer science from one of the top university in Thailand. He holds many professional certifications including OCI Security 2021 Associate, CySA+, SC-200 and CDP.  His research interests are in data mining, IoT and Cybersecurity. ",
    img: "../images/faculty Member/4.jpg",
    id: 4,
  },
  {
    name: "Ngim Bunny",
    position: "Lecturer",
    description:
      "Senior Web Developer specializing in back end development.Experienced with all stages of the development cycle for dynamic web.<br>projects. Well-versed in numerous programming languages including HTML5, PHP OOP, JavaScript, CSS, MySQL, Ajax and Json. - Own POS System – Present<br>- Software Team Leader – Jan,2022 -  dcX Co,. Ltd<br>- Project Freelancer – Sept 2022<br>- Project Manager – Jan,2010 - 2022",
    img: "../images/faculty Member/5.jpg",
    id: 5,
  },
];
const displayInformation = document.querySelector(".display-information");
const allInformation = document.querySelector(".display-information");
const topName = document.querySelector(".top-name");
const name = document.querySelector(".name");
const description = document.querySelector(".description");
const fecultyMember = document.querySelector(".feculty-member");
const articleWrapper = document.querySelector(".article-wrapper");
const newPersoninformation1 = [...informationPerson];

//

function setInformationToNewArray() {
  newPersoninformation2 = newPersoninformation1.map((personal) => {
    if (personal.description.length > 50) {
      personal.description = personal.description.slice(0, 50) + "...";
      return {
        name: personal.name,
        position: personal.position,
        description: personal.description,
        img: personal.img,
        id: personal.id,
      };
    }
  });
}
setInformationToNewArray();

function sendInformation() {
  articleWrapper.innerHTML = newPersoninformation2.map(
    ({ name, position, description, img, id }) => {
      return `<article number="${id}">
    <div class="img1-container">
      <img src="${img}" alt="${name}" />
    </div>
    <div class="text">
      <p>${name}</p>
      <p class="position">${position}</p>
      <p class="information">
        ${description}
      </p>
    </div>
  </article>`;
    }
  );
}
sendInformation();

function showPersonalInformation() {
  displayInformation.innerHTML = ` <p class="top-name">
    YOU ARE HERE: HOME / / <span>MEAS SOVANN</span>
  </p>
  <h3 class="name">name</h3>
  <p class="description">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ipsa
    consequatur numquam maiores a accusantium voluptatibus ut, harum
    nobis quibusdam reprehenderit odit veritatis, enim magni quis
    ducimus culpa? Earum, deleniti.
  </p>`;
}
const articleWrappers = document.querySelectorAll(".article-wrapper>article");
articleWrappers.forEach((e) => {
  e.addEventListener("click", (ev) => {
    toTop.click();
    const index = e.getAttribute("number");
    displayInformation.innerHTML = `<article class="article1">
    <p class="top-name">
      YOU ARE HERE: HOME / / <span class="spaning-element">${
        informationPerson1[index - 1].name
      }</span>
    </p>
    <h3 class="name">${informationPerson1[index - 1].name}</h3>
    <p class="description">
    ${informationPerson1[index - 1].description}
    </p>
  </article>`;
  });
});
