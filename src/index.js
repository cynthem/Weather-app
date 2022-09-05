import * as apiFunctions from './modules/api.js';
import renderWeather from './modules/renderData.js';
import { checkTime } from './modules/utilities.js';

const htmlBody = document.querySelector('body');
// Search form
const searchInput = document.querySelector('.search-input');
const searchError = document.querySelector('.error');
const searchBtn = document.querySelector('.fa-magnifying-glass');
// Degrees toggle
const degreesFahrenheit = document.querySelector('.fahrenheit');
const degreesCelsius = document.querySelector('.celsius');
// Forecast toggle
const dailyBtn = document.querySelector('.daily-btn');
const dailyContainer = document.querySelector('.daily-container');
const hourlyBtn = document.querySelector('.hourly-btn');
const hourlyArrows = document.querySelector('.hourly-arrows');
const hourlyLeft = document.querySelector('.fa-angles-left');
const hourlyRight = document.querySelector('.fa-angles-right');
const hourlyContainer = document.querySelector('.hourly-container');
const hourlyOne = document.querySelector('.hourly-section-1');
const hourlyTwo = document.querySelector('.hourly-section-2');
const hourlyThree = document.querySelector('.hourly-section-3');

let units = 'imperial';
let unitChanged = false;
let currentCity = 'seattle';

htmlBody.style.visibility = 'hidden';

function renderTimeStyles(data) {
    const timing = checkTime(data.current.sunrise, data.current.sunset, data.timezone_offset);
}

async function getWeatherData(unit, initialLoad = false) {
    try {
        let city;

        if (initialLoad) {
            city = 'seattle';
        } else {
            city = apiFunctions.searchFormData();
        }

        if (!city) {
            return;
        }

        if (unitChanged) {
            city = currentCity;
        }

        currentCity = city;

        const getCoordinatesUrl = apiFunctions.coordinatesUrl(city);
        const coordinates = await apiFunctions.getCoordinates(getCoordinatesUrl);

        const getForecastUrl = apiFunctions.forecastUrl(coordinates, unit);
        const weatherData = await apiFunctions.getForecast(getForecastUrl);
        console.log(weatherData)
        weatherData.name = coordinates.name;
        weatherData.country = coordinates.country;

        searchError.style.display = 'none';

        renderWeather(weatherData, unit);
        renderTimeStyles(weatherData);

        initialLoad = false;

        htmlBody.style.visibility = 'visible';

    } catch (err) {
        searchError.style.display = 'block';
    }

    searchInput.value = '';
}

getWeatherData(units, true);


// Search form

searchBtn.addEventListener('click', () => {getWeatherData(units)});

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        getWeatherData(units);
    }
});


// Degrees toggle

degreesFahrenheit.addEventListener('click', async () => {
    if (units === 'imperial') {
        return;
    } else if (units === 'metric') {
        units = 'imperial';
        unitChanged = true;
        await getWeatherData(units, true);
        degreesCelsius.classList.remove('selected-degrees');
        degreesFahrenheit.classList.add('selected-degrees');
    }
});

degreesCelsius.addEventListener('click', async () => {
    if (units === 'metric') {
        return;
    } else if (units === 'imperial') {
        units = 'metric';
        unitChanged = true;
        await getWeatherData(units, true);
        degreesFahrenheit.classList.remove('selected-degrees');
        degreesCelsius.classList.add('selected-degrees');
    }
});


// Forecast toggles

dailyBtn.addEventListener('click', () => {
    if (dailyBtn.classList.contains('selected-forecast-night')) {
        return;
    } else {
        dailyBtn.classList.add('selected-forecast-night');
        hourlyBtn.classList.remove('selected-forecast-night');
        hourlyArrows.classList.remove('hourly-open');
        dailyContainer.classList.add('selected-daily');
        hourlyContainer.classList.remove('selected-hourly');
    }
});

hourlyBtn.addEventListener('click', () => {
    if (hourlyBtn.classList.contains('selected-forecast-night')) {
        return;
    } else {
        hourlyBtn.classList.add('selected-forecast-night');
        dailyBtn.classList.remove('selected-forecast-night');
        hourlyArrows.classList.add('hourly-open');
        dailyContainer.classList.remove('selected-daily');
        hourlyContainer.classList.add('selected-hourly');
        if (hourlyOne.classList.contains('hourly-section-open')) {
            return;
        } else if (hourlyTwo.classList.contains('hourly-section-open')) {
            hourlyTwo.classList.remove('hourly-section-open');
            hourlyOne.classList.add('hourly-section-open');
        } else if (hourlyThree.classList.contains('hourly-section-open')) {
            hourlyThree.classList.remove('hourly-section-open');
            hourlyOne.classList.add('hourly-section-open');
        }
    }
});

hourlyLeft.addEventListener('click', () => {
    if (hourlyOne.classList.contains('hourly-section-open')) {
        return;
    } else if (hourlyTwo.classList.contains('hourly-section-open')) {
        hourlyTwo.classList.remove('hourly-section-open');
        hourlyOne.classList.add('hourly-section-open');
    } else if (hourlyThree.classList.contains('hourly-section-open')) {
        hourlyThree.classList.remove('hourly-section-open');
        hourlyTwo.classList.add('hourly-section-open');
    }
});

hourlyRight.addEventListener('click', () => {
    if (hourlyThree.classList.contains('hourly-section-open')) {
        return;
    } else if (hourlyOne.classList.contains('hourly-section-open')) {
        hourlyOne.classList.remove('hourly-section-open');
        hourlyTwo.classList.add('hourly-section-open');
    } else if (hourlyTwo.classList.contains('hourly-section-open')) {
        hourlyTwo.classList.remove('hourly-section-open');
        hourlyThree.classList.add('hourly-section-open');
    }
});