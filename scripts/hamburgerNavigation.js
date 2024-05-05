const hamburgerElement = document.querySelector('#hamburgerButton');
const navElement = document.querySelector('#animateHamburger');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});