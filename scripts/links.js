const baseURL = "https://maxstylus.github.io/wdd230/";
const linksURL = "https://maxstylus.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data); // Testing only

    displayLinks(data);
  }

  function displayLinks(weeks) {
    let linkMenu = document.querySelector("ul");
    weeks.weeks.forEach((week) => {
        let listElement = document.createElement("li");
        listElement.textContent = `${week.week}: `;
        linkMenu.appendChild(listElement);

        week.links.forEach((link) => {
            let linkElement = document.createElement("a");
            linkElement.setAttribute('href', link.url);
            linkElement.textContent = link.title;

            listElement.appendChild(linkElement);
        });    
    });
  }
  

