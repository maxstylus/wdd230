const baseURL = "https://maxstylus.github.io/wdd230/";
const linksURL = "https://maxstylus.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data); // Testing only

    displayLinks(data.weeks);
  }

  getLinks();

  function displayLinks(weeks) {
    let linkMenu = document.querySelector("section.card.activities ul");

    weeks.forEach((week) => {
        let listElement = document.createElement("li");
        listElement.textContent = `${week.week}: `;

        let space = document.createElement("br");

        linkMenu.appendChild(listElement);
        linkMenu.appendChild(space);


        week.links.forEach((link) => {
            let linkElement = document.createElement("a");

            linkElement.setAttribute('href', link.url);
            linkElement.textContent = ` ${link.title} |`;

            listElement.appendChild(linkElement);
            
        });    
        
    });
  }
  

