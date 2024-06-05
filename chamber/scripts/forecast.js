const forecast = document.querySelector('#forecast');

// let api_key = 'c6729828dbc30c929bc2b84f68ef45c5';
//let lat = 44.81;
//let lon = -73.08;
//let cnt = 3;
//let units = 'imperial';

const forecast_url = `api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=${units}&appid=${apiKey}`

/* const forecast_url = `api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}units=${units}&cnt=${cnt}&appid=${api_key}`; */

async function apiFetch() {
    try {
        const response = await fetch(forecast_url);
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

    const daily = data.daily.slice(0, 3); // Get the forecast for the next 3 days

    daily.forEach((day, index) => {
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        const temp = day.temp.day.toFixed(1);
        const weatherDescription = day.weather[0].description;
        const weatherIcon = `http://openweathermap.org/img/wn/${day.weather[0].icon}.png`;

        const forecastDay = document.createElement('div');
        forecastDay.classList.add('forecast-day');
        forecastDay.innerHTML = `
            <h3>${dayName}</h3>
            <img src="${weatherIcon}" alt="${weatherDescription}">
            <p>${temp}°C</p>
            <p>${weatherDescription}</p>
        `;

        console.log(forecastDay);

        /* forecast.appendChild(forecastDay); */
    });
}

    /*

        forecast.innerHTML = `${data.list.temp}&deg;F`;
    console.log(currentTemp.innerHTML);

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    let dayOne = data.weather[0].description;    
    console.log(desc); //testing

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `${desc}`); // fill in the blank

    captionDesc.textContent = `${desc}`;

    // 3 day forecast
    const daily = data.daily.slice(0,3);
    console.log("Daily");
    
    */


