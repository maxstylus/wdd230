document.addEventListener("DOMContentLoaded", () => {
    const url = '../chamber/data/members.json'; 

    fetch(url)
    .then(response => response.json())
    .then(spotlightData => {

        function loadSpotlight(member, containerId) {
            // Create image element
            const img = new Image();
            img.src = member.imageSrc;
            img.alt = member.name;

            // Create name element
            const name = document.createElement('h2');
            name.textContent = member.name;

            // Show Membership Level
            const membership = document.createElement('p');
            membership.textContent = `Membership: ${member.membership}`;

            // Get spotlight container and clear previous content
            const spotlightContainer = document.getElementById(containerId);
            spotlightContainer.innerHTML = '';

            // Append elements to spotlight container
            spotlightContainer.appendChild(img);
            spotlightContainer.appendChild(name);
            spotlightContainer.appendChild(membership);

            // Ensure image is fully loaded
            img.addEventListener('load', () => {
                console.log(`Image ${img.src} loaded successfully`);
            });

            img.addEventListener('error', () => {
                console.error(`Failed to load image ${img.src}`);
            });
        }

        // Filter out only gold and silver members
        const eligibleMembers = spotlightData.members.filter(member => 
            member.membership === "Gold" || member.membership === "Silver"
        );

        if (eligibleMembers.length < 2) {
            console.error('Not enough eligible members found');
            return;
        }

        // Select two random eligible members
        const randomIndices = [];
        while (randomIndices.length < 2) {
            const randomIndex = Math.floor(Math.random() * eligibleMembers.length);
            if (!randomIndices.includes(randomIndex)) {
                randomIndices.push(randomIndex);
            }
        }

        const selectedMembers = randomIndices.map(index => eligibleMembers[index]);

        loadSpotlight(selectedMembers[0], 'spotlight-one'); // Load first spotlight
        loadSpotlight(selectedMembers[1], 'spotlight-two'); // Load second spotlight
    })
    .catch(error => {
        console.error('Error fetching spotlight data:', error);
    });
});

    