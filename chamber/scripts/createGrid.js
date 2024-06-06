document.addEventListener("DOMContentLoaded", () => {
    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");
    const display = document.querySelector("article");

    gridbutton.addEventListener("click", () => {
        console.log("gridbutton");
        display.classList.add("grid");
        display.classList.remove("list");
    });

    listbutton.addEventListener("click", () => {
        console.log("listbutton");

        display.classList.add("list");
        display.classList.remove("grid");
    });
});