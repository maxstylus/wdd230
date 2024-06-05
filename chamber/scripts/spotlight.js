document.addEventListener("DOMContentLoaded", () => {

    const url = 'https://maxstylus.github.io/wdd230/chamber/data/members.json';
    const spotlightContainer1 = document.getElementById('spotlight-one');
    const spotlightContainer2 = document.getElementById('spotlight-two');

    async function getMemberData() {
        const response = await fetch(url);
        const data = await response.json();
        displaySpotlight1(data.members);
        displaySpotlight2(data.members);
    }


    const displaySpotlight1 = (members) => {

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

    
    const displaySpotlight2 = (members) => {

        // Filter members with Gold or Silver membership
        const filteredMembers = members.filter(member => member.membership === 'Gold' || member.membership === 'Silver');

        // Select a random member from the filtered list
        const randomMember = filteredMembers[Math.floor(Math.random() * filteredMembers.length)];

        // Create the HTML content for the spotlight one
        spotlightContainer2.innerHTML = `
            <img src="${randomMember.imageSrc}" alt="${randomMember.name}">
            <h2>${randomMember.name}</h2>
            <p>Membership: ${randomMember.membership}</p>
        `;
    }
   
    getMemberData();
    
    console.table(getMemberData()); // temporary testing of data retreival */
});