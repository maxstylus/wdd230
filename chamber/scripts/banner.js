document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("banner");
    const closeButton = document.getElementById("close-btn");

    const today = new Date().getDay(); 
    
    // Monday = 1, Tuesday = 2, Wednesday = 3
    if (today === 1 || today === 2 || today === 3) { 
        banner.style.display = "block";
    }

    closeButton.addEventListener("click", () => {
        banner.style.display = "none";
    });
});