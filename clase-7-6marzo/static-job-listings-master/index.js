const url = "./data.json";
const d = document;
let contenido = "";
let jobsData = [];
const container = d.createElement("section");
container.classList.add("container");

const getJobsJson = async () => {
  try {
    console.log("json");
    const res = await fetch(url);
    const data = await res.json();
    jobsData = data;
    console.log(jobsData);
    showData(data);
  } catch (error) {
    console.log(error);
  }
};

getJobsJson();

const showData = (data) => {
  if (data) {
    data.forEach((element) => {
      contenido += `<div class= "card-job">  <img src="${element.logo}" alt="${
        element.company
      }">
        <h4>${element.new ? `new` : ""}</h4>
        <h3>${element.position}</h3>
        <h3>${element.company}</h3> `;
      contenido += `<div class= "languages">`;
      element.languages.map((language) => {
        contenido += `<div class="language">${language}</div>`;
      });
      contenido += `</div></div>`;
    });
  }

  container.innerHTML = contenido || "";
  d.body.insertAdjacentElement("afterend", container);
  return;
};

d.addEventListener("click", (e) => {
  if (e.target.matches("python")) {
    const newFilter = e.target.textContent;

    console.log(newFilter);
  }
});
