const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

let api_key = 'c6729828dbc30c929bc2b84f68ef45c5';
let lat = 49.75;
let lon = 6.64;
let units = 'imperial';

const url = `https://api.openweathermap.org/data/2.5/weather?units=${units}&lat=${lat}&lon=${lon}&appid=${api_key}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //For testing only
            displayResults(data);

        } else {
            throw Error(await response.text());
        }
      } catch (error) {
        console.error(error);
      }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    let desc = data.weather[0].description;
    console.log(desc); //testing

    weatherIcon.setAttribute('src', iconsrc);
    portrait.setAttribute('alt', `${desc}`); // fill in the blank

    captionDesc.textContent = `${desc}`;

}