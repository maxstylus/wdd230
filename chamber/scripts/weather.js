// Weather section
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// 3 Day Forecast section 
const forecast1 = document.querySelector('#forecast-one');
const forecast2 = document.querySelector('#forecast-two');
const forecast3 = document.querySelector('#forecast-three');


let api_key = 'c6729828dbc30c929bc2b84f68ef45c5';
let lat = 44.81;
let lon = -73.08;
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
    console.log(currentTemp.innerHTML);

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 

    let desc = data.weather[0].description;    
    console.log(desc); //testing

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `${desc}`); // fill in the blank

    captionDesc.textContent = `${desc}`;

}

// ----- 3 Day Forecast

const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${api_key}`;


async function apiFetch2() {
    try {
        const response = await fetch(url2);
        if (response.ok) {
            const data2 = await response.json();
            console.log(data2); //For testing only
            displayResults2(data2);

        } else {
            throw Error(await response.text());
        }
      } catch (error2) {
        console.error(error2);
      }
}

apiFetch2();

function displayResults2(data2) {

    console.log(data2.list[7].main.temp)
    console.log(data2.list[15].main.temp)
    console.log(data2.list[23].main.temp)  

    // Every day multiplied by 8 segments because data is returned in 3hr increments. 
    forecast1.innerHTML = `${data2.list[7].main.temp}&deg;F`; 
    forecast2.innerHTML = `${data2.list[15].main.temp}&deg;F`; 
    forecast3.innerHTML = `${data2.list[23].main.temp}&deg;F`; 

}