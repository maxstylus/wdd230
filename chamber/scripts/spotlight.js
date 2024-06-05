document.addEventListener("DOMContentLoaded", () => {

    const url = 'https://maxstylus.github.io/wdd230/chamber/data/members.json';
    const spotlightContainer1 = document.getElementById('spotlight-one');
    //const spotlightContainer2 = document.getElementById('spotlight-two');
    //const spotlightContainer3 = document.getElementById('spotlight-three');

    //let variables = [spotlightContainer1, spotlightContainer2, spotlightContainer3];

    async function getMemberData() {
        const response = await fetch(url);
        const data = await response.json();
        /* console.table(data.prophets); // temporary testing of data retreival */
        displaySpotlight(data.members);
    }


    const displaySpotlight = (members) => {

        // Filter members with Gold or Silver membership
        const filteredMembers = members.filter(member => member.membership === 'Gold' || member.membership === 'Silver');

        // Select a random member from the filtered list
        const randomMember = filteredMembers[Math.floor(Math.random() * filteredMembers.length)];

        // Create the HTML content for the spotlight one
        spotlightContainer1.innerHTML = `
            <img src="${randomMember.imageSrc}" alt="${randomMember.name}">
            <h2>${randomMember.name}</h2>
            <p>Membership: ${randomMember.membership}</p>
        `;
    }
    
    getMemberData();
    
    console.table(getMemberData()); // temporary testing of data retreival */
});


/*
        members.forEach((members) => {
          // Create elements to add to the div.cards element
          let card = document.createElement('section');
          let fullName = document.createElement('h2'); // fill in the blank
          
          let dob = document.createElement('p');
          let pob = document.createElement('p');
          let portrait = document.createElement('img');
      
          // Build the h2 content out to show the prophet's full name
          fullName.textContent = `${member.name} ${member.lastname}`; // fill in the blank
          
          // Get Date of Birth
          dob.textContent = `Date of Birth: ${member.birthdate}`;
    
          // Get Place of Birth
          pob.textContent = `Place of Birth: ${member.birthplace}`;
    
          // Build the image portrait by setting all the relevant attributes
          portrait.setAttribute('src', member.imageurl);
          portrait.setAttribute('alt', `Portrait of ${member.name} ${member.lastname}`); // fill in the blank
          portrait.setAttribute('loading', 'lazy');
          portrait.setAttribute('width', '340');
          portrait.setAttribute('height', '440');
      
          // Append the section(card) with the created elements
          card.appendChild(fullName); //fill in the blank
          card.appendChild(dob);
          card.appendChild(pob);
          card.appendChild(portrait);
      
          cards.appendChild(card);
    
        }); // end of arrow function and forEach loop */