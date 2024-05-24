// const todayDisplay = document.querySelector(".toay"); 
const visitsDisplay = document.querySelector("#visitNum");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = 'This is your first visit!';
}

// increment the number of visits
numVisits++;

// Update number of visits
localStorage.setItem("visits-ls", numVisits);

// Show today's date
//todayDisplay.textContent = Date.now();


