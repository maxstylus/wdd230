const darkModeBtn = document.querySelector('#darkBtn');
const background = document.querySelector('.background');

darkModeBtn.addEventListener('click', () => {
    background.classList.toggle('dark');
});