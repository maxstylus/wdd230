document.addEventListener("DOMContentLoaded", () => {

    
    function storeCurrentTime() {
        // Get the current date and time in milliseconds
        const currentTime = Date.now();

        // Store the current date and time in localStorage
        localStorage.setItem('currentTime', currentTime);

        // Retrieve and display the stored value
        const storedTime = localStorage.getItem('currentTime');
        console.log(`Stored Time: ${storedTime}`);

        // Convert the stored time back to a Date object if needed
        const date = new Date(parseInt(storedTime));
        console.log(`Stored Time as Date: ${date}`);
    }

    // Call the function on page load
    window.onload = storeCurrentTime;

});