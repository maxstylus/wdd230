document.addEventListener("DOMContentLoaded", () => {

    /*
    If this is the user's first visit, display "Welcome! Let us know if you have any questions.".
    If the amount of time between visits is less than a day, display "Back so soon! Awesome!".
    Otherwise, display the number of days in a message like this: "You last visited n days ago.", where n is the actual, whole number of days between visits. If the number of days is 1, then change the language to "day" not "days".
    */


    window.addEventListener("load", () => {
        console.log("The entire page has loaded");
        const discoverPageVisitContainer = document.getElementById('discover-pg-visits');       

        const visits = document.createElement('p');

        // Use this to clear localStorage for testing
        //localStorage.removeItem('currentTime');
    
        const currentTime = Date.now();
        const lastTime = getStoredTime();
        const twentyFourHoursFromNow = currentTime + 24 * 60 * 60 * 1000;
        const daysFromLastVisit = calculateDaysDifference(Number(lastTime), currentTime);

        if (lastTime === null) {
            visits.textContent = "";
            visits.textContent = "Welcome! Let us know if you have any questions.";

        } else if ((lastTime - currentTime) < twentyFourHoursFromNow) {
            visits.textContent = "";
            visits.textContent = "Back so soon! Awesome!";
        } else {
            visits.textContent = "";
            visits.textContent = `You last visited ${daysFromLastVisit.toFixed(2)} days ago.`; 
        }

        setVisitTime(currentTime);
        discoverPageVisitContainer.appendChild(visits);
        
    });

    function setVisitTime(time) {
        // Set current date and time in localStorage
        localStorage.setItem('currentTime', time);
    }

    function getStoredTime() {
        // Retrieve and display the stored value
        return localStorage.getItem('currentTime');        
    }

    function calculateDaysDifference(previousTimestamp, currentTimestamp) {
        const msInADay = 24 * 60 * 60 * 1000;
        return (currentTimestamp - previousTimestamp) / msInADay;
    }

});