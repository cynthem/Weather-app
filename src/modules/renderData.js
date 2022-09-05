import * as utilities from './utilities.js';

function renderCurrentWeather(data, units) {
    
    const cityName = document.querySelector('.center-location');
    cityName.textContent = data.name;

    const dateTime = document.querySelector('.center-date');
    dateTime.textContent = utilities.formateDateTime(data.current.dt, data.timezone_offset);

    const weatherName = document.querySelector('.center-weather');
    weatherName.textContent = utilities.titleCase(data.current.weather[0].description);

    const weatherImage = document.querySelector('.center-image');
    weatherImage.innerHTML = utilities.weatherIcon(data.current.weather[0].icon);

    const temperature = document.querySelector('.center-temp');
    temperature.textContent = `${Math.round(data.current.temp)}°`;

    const highTemp = document.querySelector('.high');
    highTemp.textContent = `${Math.round(data.daily[0].temp.max)}°`;

    const lowTemp = document.querySelector('.low');
    lowTemp.textContent = `${Math.round(data.daily[0].temp.min)}°`;

    const feelsLike = document.querySelector('.feel-details');
    feelsLike.textContent = `${Math.round(data.current.feels_like)}°`;

    let precipUnits = 'in';
    let precipHeight = data.daily[0].rain ? data.daily[0].rain / 2.54 : 0;

    if (units === 'metric') {
        precipUnits = 'cm';
        precipHeight = data.daily[0].rain ? data.daily[0].rain : 0;
    }

    const precipitation = document.querySelector('.precip-details');
    precipitation.textContent = `${Math.round(precipHeight * 10) / 10} ${precipUnits}`;

    const chanceRain = document.querySelector('.rain-details');
    chanceRain.textContent = `${data.daily[0].pop} %`;

    const humidity = document.querySelector('.humid-details');
    humidity.textContent = `${data.current.humidity}%`;

    let speedUnit = 'mph';
    let currentSpeed = data.current.wind_speed;

    if (units === 'metric') {
        speedUnit = 'km/h';
        currentSpeed = data.current.wind_speed *= 3.6;
    }

    const windSpeed = document.querySelector('.wind-details');
    windSpeed.textContent = `${Math.round(currentSpeed * 10) / 10} ${speedUnit}`;

    const uvIndex = document.querySelector('.uv-details');
    uvIndex.textContent = data.current.uvi;

    const sunrise = document.querySelector('.sunrise-details');
    sunrise.textContent = utilities.formatSunTimes(data.current.sunrise, data.timezone_offset);

    const sunset = document.querySelector('.sunset-details');
    sunset.textContent = utilities.formatSunTimes(data.current.sunset, data.timezone_offset);
}

function renderDailyForecast(data) {
    const dayOne = document.querySelector('.day-1-title');
    const dayOneIcon = document.querySelector('.day-1-icon');
    const dayOneHigh = document.querySelector('.day-1-high');
    const dayOneLow = document.querySelector('.day-1-low');
    dayOne.textContent = utilities.formatDay(data.daily[1].dt, data.timezone_offset);
    dayOneIcon.innerHTML = utilities.smallIcon(data.daily[1].weather[0].icon);
    dayOneHigh.textContent = `${Math.round(data.daily[1].temp.max)}°`;
    dayOneLow.textContent = `${Math.round(data.daily[1].temp.min)}°`;

    const dayTwo = document.querySelector('.day-2-title');
    const dayTwoIcon = document.querySelector('.day-2-icon');
    const dayTwoHigh = document.querySelector('.day-2-high');
    const dayTwoLow = document.querySelector('.day-2-low');
    dayTwo.textContent = utilities.formatDay(data.daily[2].dt, data.timezone_offset);
    dayTwoIcon.innerHTML = utilities.smallIcon(data.daily[2].weather[0].icon);
    dayTwoHigh.textContent = `${Math.round(data.daily[2].temp.max)}°`;
    dayTwoLow.textContent = `${Math.round(data.daily[2].temp.min)}°`;

    const dayThree = document.querySelector('.day-3-title');
    const dayThreeIcon = document.querySelector('.day-3-icon');
    const dayThreeHigh = document.querySelector('.day-3-high');
    const dayThreeLow = document.querySelector('.day-3-low');
    dayThree.textContent = utilities.formatDay(data.daily[3].dt, data.timezone_offset);
    dayThreeIcon.innerHTML = utilities.smallIcon(data.daily[3].weather[0].icon);
    dayThreeHigh.textContent = `${Math.round(data.daily[3].temp.max)}°`;
    dayThreeLow.textContent = `${Math.round(data.daily[3].temp.min)}°`;

    const dayFour = document.querySelector('.day-4-title');
    const dayFourIcon = document.querySelector('.day-4-icon');
    const dayFourHigh = document.querySelector('.day-4-high');
    const dayFourLow = document.querySelector('.day-4-low');
    dayFour.textContent = utilities.formatDay(data.daily[4].dt, data.timezone_offset);
    dayFourIcon.innerHTML = utilities.smallIcon(data.daily[4].weather[0].icon);
    dayFourHigh.textContent = `${Math.round(data.daily[4].temp.max)}°`;
    dayFourLow.textContent = `${Math.round(data.daily[4].temp.min)}°`;

    const dayFive = document.querySelector('.day-5-title');
    const dayFiveIcon = document.querySelector('.day-5-icon');
    const dayFiveHigh = document.querySelector('.day-5-high');
    const dayFiveLow = document.querySelector('.day-5-low');
    dayFive.textContent = utilities.formatDay(data.daily[5].dt, data.timezone_offset);
    dayFiveIcon.innerHTML = utilities.smallIcon(data.daily[5].weather[0].icon);
    dayFiveHigh.textContent = `${Math.round(data.daily[5].temp.max)}°`;
    dayFiveLow.textContent = `${Math.round(data.daily[5].temp.min)}°`;

    const daySix = document.querySelector('.day-6-title');
    const daySixIcon = document.querySelector('.day-6-icon');
    const daySixHigh = document.querySelector('.day-6-high');
    const daySixLow = document.querySelector('.day-6-low');
    daySix.textContent = utilities.formatDay(data.daily[6].dt, data.timezone_offset);
    daySixIcon.innerHTML = utilities.smallIcon(data.daily[6].weather[0].icon);
    daySixHigh.textContent = `${Math.round(data.daily[6].temp.max)}°`;
    daySixLow.textContent = `${Math.round(data.daily[6].temp.min)}°`;

    const daySeven = document.querySelector('.day-7-title');
    const daySevenIcon = document.querySelector('.day-7-icon');
    const daySevenHigh = document.querySelector('.day-7-high');
    const daySevenLow = document.querySelector('.day-7-low');
    daySeven.textContent = utilities.formatDay(data.daily[7].dt, data.timezone_offset);
    daySevenIcon.innerHTML = utilities.smallIcon(data.daily[7].weather[0].icon);
    daySevenHigh.textContent = `${Math.round(data.daily[7].temp.max)}°`;
    daySevenLow.textContent = `${Math.round(data.daily[7].temp.min)}°`;
}

function renderHourlyForecast(data) {
    const hour1 = document.querySelector('.hour-1-title');
    const hour1Icon = document.querySelector('.hour-1-icon');
    const hour1Temp = document.querySelector('.hour-1-temp');
    hour1.textContent = utilities.formatTime(data.hourly[1].dt, data.timezone_offset);
    hour1Icon.innerHTML = utilities.smallIcon(data.hourly[1].weather[0].icon);
    hour1Temp.textContent = `${Math.round(data.hourly[1].temp)}°`;

    const hour2 = document.querySelector('.hour-2-title');
    const hour2Icon = document.querySelector('.hour-2-icon');
    const hour2Temp = document.querySelector('.hour-2-temp');
    hour2.textContent = utilities.formatTime(data.hourly[2].dt, data.timezone_offset);
    hour2Icon.innerHTML = utilities.smallIcon(data.hourly[2].weather[0].icon);
    hour2Temp.textContent = `${Math.round(data.hourly[2].temp)}°`;

    const hour3 = document.querySelector('.hour-3-title');
    const hour3Icon = document.querySelector('.hour-3-icon');
    const hour3Temp = document.querySelector('.hour-3-temp');
    hour3.textContent = utilities.formatTime(data.hourly[3].dt, data.timezone_offset);
    hour3Icon.innerHTML = utilities.smallIcon(data.hourly[3].weather[0].icon);
    hour3Temp.textContent = `${Math.round(data.hourly[3].temp)}°`;

    const hour4 = document.querySelector('.hour-4-title');
    const hour4Icon = document.querySelector('.hour-4-icon');
    const hour4Temp = document.querySelector('.hour-4-temp');
    hour4.textContent = utilities.formatTime(data.hourly[4].dt, data.timezone_offset);
    hour4Icon.innerHTML = utilities.smallIcon(data.hourly[4].weather[0].icon);
    hour4Temp.textContent = `${Math.round(data.hourly[4].temp)}°`;

    const hour5 = document.querySelector('.hour-5-title');
    const hour5Icon = document.querySelector('.hour-5-icon');
    const hour5Temp = document.querySelector('.hour-5-temp');
    hour5.textContent = utilities.formatTime(data.hourly[5].dt, data.timezone_offset);
    hour5Icon.innerHTML = utilities.smallIcon(data.hourly[5].weather[0].icon);
    hour5Temp.textContent = `${Math.round(data.hourly[5].temp)}°`;

    const hour6 = document.querySelector('.hour-6-title');
    const hour6Icon = document.querySelector('.hour-6-icon');
    const hour6Temp = document.querySelector('.hour-6-temp');
    hour6.textContent = utilities.formatTime(data.hourly[6].dt, data.timezone_offset);
    hour6Icon.innerHTML = utilities.smallIcon(data.hourly[6].weather[0].icon);
    hour6Temp.textContent = `${Math.round(data.hourly[6].temp)}°`;

    const hour7 = document.querySelector('.hour-7-title');
    const hour7Icon = document.querySelector('.hour-7-icon');
    const hour7Temp = document.querySelector('.hour-7-temp');
    hour7.textContent = utilities.formatTime(data.hourly[7].dt, data.timezone_offset);
    hour7Icon.innerHTML = utilities.smallIcon(data.hourly[7].weather[0].icon);
    hour7Temp.textContent = `${Math.round(data.hourly[7].temp)}°`;

    const hour8 = document.querySelector('.hour-8-title');
    const hour8Icon = document.querySelector('.hour-8-icon');
    const hour8Temp = document.querySelector('.hour-8-temp');
    hour8.textContent = utilities.formatTime(data.hourly[8].dt, data.timezone_offset);
    hour8Icon.innerHTML = utilities.smallIcon(data.hourly[8].weather[0].icon);
    hour8Temp.textContent = `${Math.round(data.hourly[8].temp)}°`;

    const hour9 = document.querySelector('.hour-9-title');
    const hour9Icon = document.querySelector('.hour-9-icon');
    const hour9Temp = document.querySelector('.hour-9-temp');
    hour9.textContent = utilities.formatTime(data.hourly[9].dt, data.timezone_offset);
    hour9Icon.innerHTML = utilities.smallIcon(data.hourly[9].weather[0].icon);
    hour9Temp.textContent = `${Math.round(data.hourly[9].temp)}°`;

    const hour10 = document.querySelector('.hour-10-title');
    const hour10Icon = document.querySelector('.hour-10-icon');
    const hour10Temp = document.querySelector('.hour-10-temp');
    hour10.textContent = utilities.formatTime(data.hourly[10].dt, data.timezone_offset);
    hour10Icon.innerHTML = utilities.smallIcon(data.hourly[10].weather[0].icon);
    hour10Temp.textContent = `${Math.round(data.hourly[10].temp)}°`;

    const hour11 = document.querySelector('.hour-11-title');
    const hour11Icon = document.querySelector('.hour-11-icon');
    const hour11Temp = document.querySelector('.hour-11-temp');
    hour11.textContent = utilities.formatTime(data.hourly[11].dt, data.timezone_offset);
    hour11Icon.innerHTML = utilities.smallIcon(data.hourly[11].weather[0].icon);
    hour11Temp.textContent = `${Math.round(data.hourly[11].temp)}°`;

    const hour12 = document.querySelector('.hour-12-title');
    const hour12Icon = document.querySelector('.hour-12-icon');
    const hour12Temp = document.querySelector('.hour-12-temp');
    hour12.textContent = utilities.formatTime(data.hourly[12].dt, data.timezone_offset);
    hour12Icon.innerHTML = utilities.smallIcon(data.hourly[12].weather[0].icon);
    hour12Temp.textContent = `${Math.round(data.hourly[12].temp)}°`;

    const hour13 = document.querySelector('.hour-13-title');
    const hour13Icon = document.querySelector('.hour-13-icon');
    const hour13Temp = document.querySelector('.hour-13-temp');
    hour13.textContent = utilities.formatTime(data.hourly[13].dt, data.timezone_offset);
    hour13Icon.innerHTML = utilities.smallIcon(data.hourly[13].weather[0].icon);
    hour13Temp.textContent = `${Math.round(data.hourly[13].temp)}°`;

    const hour14 = document.querySelector('.hour-14-title');
    const hour14Icon = document.querySelector('.hour-14-icon');
    const hour14Temp = document.querySelector('.hour-14-temp');
    hour14.textContent = utilities.formatTime(data.hourly[14].dt, data.timezone_offset);
    hour14Icon.innerHTML = utilities.smallIcon(data.hourly[14].weather[0].icon);
    hour14Temp.textContent = `${Math.round(data.hourly[14].temp)}°`;

    const hour15 = document.querySelector('.hour-15-title');
    const hour15Icon = document.querySelector('.hour-15-icon');
    const hour15Temp = document.querySelector('.hour-15-temp');
    hour15.textContent = utilities.formatTime(data.hourly[15].dt, data.timezone_offset);
    hour15Icon.innerHTML = utilities.smallIcon(data.hourly[15].weather[0].icon);
    hour15Temp.textContent = `${Math.round(data.hourly[15].temp)}°`;

    const hour16 = document.querySelector('.hour-16-title');
    const hour16Icon = document.querySelector('.hour-16-icon');
    const hour16Temp = document.querySelector('.hour-16-temp');
    hour16.textContent = utilities.formatTime(data.hourly[16].dt, data.timezone_offset);
    hour16Icon.innerHTML = utilities.smallIcon(data.hourly[16].weather[0].icon);
    hour16Temp.textContent = `${Math.round(data.hourly[16].temp)}°`;

    const hour17 = document.querySelector('.hour-17-title');
    const hour17Icon = document.querySelector('.hour-17-icon');
    const hour17Temp = document.querySelector('.hour-17-temp');
    hour17.textContent = utilities.formatTime(data.hourly[17].dt, data.timezone_offset);
    hour17Icon.innerHTML = utilities.smallIcon(data.hourly[17].weather[0].icon);
    hour17Temp.textContent = `${Math.round(data.hourly[17].temp)}°`;

    const hour18 = document.querySelector('.hour-18-title');
    const hour18Icon = document.querySelector('.hour-18-icon');
    const hour18Temp = document.querySelector('.hour-18-temp');
    hour18.textContent = utilities.formatTime(data.hourly[18].dt, data.timezone_offset);
    hour18Icon.innerHTML = utilities.smallIcon(data.hourly[18].weather[0].icon);
    hour18Temp.textContent = `${Math.round(data.hourly[18].temp)}°`;

    const hour19 = document.querySelector('.hour-19-title');
    const hour19Icon = document.querySelector('.hour-19-icon');
    const hour19Temp = document.querySelector('.hour-19-temp');
    hour19.textContent = utilities.formatTime(data.hourly[19].dt, data.timezone_offset);
    hour19Icon.innerHTML = utilities.smallIcon(data.hourly[19].weather[0].icon);
    hour19Temp.textContent = `${Math.round(data.hourly[19].temp)}°`;

    const hour20 = document.querySelector('.hour-20-title');
    const hour20Icon = document.querySelector('.hour-20-icon');
    const hour20Temp = document.querySelector('.hour-20-temp');
    hour20.textContent = utilities.formatTime(data.hourly[20].dt, data.timezone_offset);
    hour20Icon.innerHTML = utilities.smallIcon(data.hourly[20].weather[0].icon);
    hour20Temp.textContent = `${Math.round(data.hourly[20].temp)}°`;

    const hour21 = document.querySelector('.hour-21-title');
    const hour21Icon = document.querySelector('.hour-21-icon');
    const hour21Temp = document.querySelector('.hour-21-temp');
    hour21.textContent = utilities.formatTime(data.hourly[21].dt, data.timezone_offset);
    hour21Icon.innerHTML = utilities.smallIcon(data.hourly[21].weather[0].icon);
    hour21Temp.textContent = `${Math.round(data.hourly[21].temp)}°`;

    const hour22 = document.querySelector('.hour-22-title');
    const hour22Icon = document.querySelector('.hour-22-icon');
    const hour22Temp = document.querySelector('.hour-22-temp');
    hour22.textContent = utilities.formatTime(data.hourly[22].dt, data.timezone_offset);
    hour22Icon.innerHTML = utilities.smallIcon(data.hourly[22].weather[0].icon);
    hour22Temp.textContent = `${Math.round(data.hourly[22].temp)}°`;

    const hour23 = document.querySelector('.hour-23-title');
    const hour23Icon = document.querySelector('.hour-23-icon');
    const hour23Temp = document.querySelector('.hour-23-temp');
    hour23.textContent = utilities.formatTime(data.hourly[23].dt, data.timezone_offset);
    hour23Icon.innerHTML = utilities.smallIcon(data.hourly[23].weather[0].icon);
    hour23Temp.textContent = `${Math.round(data.hourly[23].temp)}°`;

    const hour24 = document.querySelector('.hour-24-title');
    const hour24Icon = document.querySelector('.hour-24-icon');
    const hour24Temp = document.querySelector('.hour-24-temp');
    hour24.textContent = utilities.formatTime(data.hourly[24].dt, data.timezone_offset);
    hour24Icon.innerHTML = utilities.smallIcon(data.hourly[24].weather[0].icon);
    hour24Temp.textContent = `${Math.round(data.hourly[24].temp)}°`;
}

export default function renderWeatherData(data, units) {
    renderCurrentWeather(data, units);
    renderDailyForecast(data);
    renderHourlyForecast(data);
}