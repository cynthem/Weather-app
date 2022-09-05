function searchFormData() {

    const input = document.querySelector('.search-input');
    const city = input.value;

    if (city) {
        return city.replace(/(\s+$|^\s+)/g, '').replace(/(,\s+)/g, ',').replace(/(\s+,)/g, ',').replace(/\s+/g, '+');
    }
    return '';
}

function coordinatesUrl(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=a0edb149c3730e0823adf6965fdd3a09`;
}

function forecastUrl(coordinates, units) {
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,alerts&units=${units}&appid=a0edb149c3730e0823adf6965fdd3a09`;
}

async function getCoordinates(url) {
    const response = await fetch(url);
    const weatherData = await response.json();
    const { coord } = weatherData;
    coord.name = weatherData.name;
    coord.country = weatherData.sys.country;
    return coord;
}

async function getForecast(url) {
    const response = await fetch(url);
    const forecastData = await response.json();
    return forecastData;
}

export {
    searchFormData,
    coordinatesUrl,
    forecastUrl,
    getCoordinates,
    getForecast
};