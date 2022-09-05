import fromUnixTime from 'date-fns/fromUnixTime';

function titleCase(words) {
    const eachWord = words.toLowerCase().split(' ');
    for (let i = 0; i < eachWord.length; i++) {
        eachWord[i] = eachWord[i].charAt(0).toUpperCase() + eachWord[i].substring(1);
    }
    return eachWord.join(' ');
}

function checkTime(unix, offset) {
    
}

function formatSunTimes(unix, offset) {
    const date = fromUnixTime(unix + offset).toUTCString();
    let hour = date.slice(17, 19);
    let minute = date.slice(20, 22);
    let amPm;

    if (hour > 11) {
        amPm = 'pm';
    } else {
        amPm = 'am';
    }

    if (hour > 12) {
        hour -= 12;
    }

    if (hour === '0') {
        hour = 12;
    }

    if (hour < 10 && amPm === 'am') {
        hour = hour.slice(1, 2);
    }
    console.log(hour - 1)
    const tempinfo = `${hour}:${minute} ${amPm}`;
    return `${hour}:${minute} ${amPm}`;
}

function formatDay(unix, offset) {
    const date = fromUnixTime(unix + offset).toUTCString();
    let day = date.slice(0, 3);

    if (day === 'Mon') {
        day = 'Monday';
    } else if (day === 'Tue') {
        day = 'Tuesday'
    } else if (day === 'Wed') {
        day = 'Wednesday'
    } else if (day === 'Thu') {
        day = 'Thursday'
    } else if (day === 'Fri') {
        day = 'Friday'
    } else if (day === 'Sat') {
        day = 'Saturday'
    } else if (day === 'Sun') {
        day = 'Sunday'
    }

    return day;
}

function formatTime(unix, offset) {
    const date = fromUnixTime(unix + offset).toUTCString();
    let hour = date.slice(17, 19);
    let amPm;

    if (hour > 11) {
        amPm = 'pm';
    } else {
        amPm = 'am';
    }

    if (hour > 12) {
        hour -= 12;
    }

    if (hour === '0') {
        hour = 12;
    }

    if (hour < 10 && amPm === 'am') {
        hour = hour.slice(1, 2);
    }

    return `${hour} ${amPm}`;
}

function formateDateTime(unix, offset) {
    const date = fromUnixTime(unix + offset).toUTCString();
    let month = date.slice(8, 11);
    let day = date.slice(5, 7);
    let hour = date.slice(17, 19);
    let minute = date.slice(20, 22);
    let suffix;
    let amPm;


    if (day < 10) {
        day = day.slice(1);
    }

    if (day.slice(-1) === '1' && day.slice(-1) !== '11') {
        suffix = 'st';
    } else if (day.slice(-1) === '2' && day.slice(-1) !== '12') {
        suffix = 'nd';
    } else if (day.slice(-1) === '3' && day.slice(-1) !== '13') {
        suffix = 'rd';
    } else {
        suffix = 'th';
    }

    if (hour > 11) {
        amPm = 'pm';
    } else {
        amPm = 'am';
    }

    if (hour > 12) {
        hour -= 12;
    }

    if (hour === '0') {
        hour = 12;
    }

    if (hour < 10 && amPm === 'am') {
        hour = hour.slice(1, 2);
    }

    return `${hour}:${minute} ${amPm}, ${month} ${day}${suffix}`;
}

function weatherIcon(code) {
    if (code === '01d') {
        return `<img src="https://openweathermap.org/img/wn/01d@4x.png">`
    }
    if (code === '01n') {
        return `<img src="https://openweathermap.org/img/wn/01n@4x.png">`
    }
    if (code === '02d') {
        return `<img src="https://openweathermap.org/img/wn/02d@4x.png">`
    }
    if (code === '02n') {
        return `<img src="https://openweathermap.org/img/wn/02n@4x.png">`
    }
    if (code === '03d' || code === '03n') {
        return `<img src="https://openweathermap.org/img/wn/03d@4x.png">`
    }
    if (code === '04d' || code === '04n') {
        return `<img src="https://openweathermap.org/img/wn/04d@4x.png">`
    }
    if (code === '09d' || code === '09n') {
        return `<img src="https://openweathermap.org/img/wn/09d@4x.png">`
    }
    if (code === '10d') {
        return `<img src="https://openweathermap.org/img/wn/10d@4x.png">`
    }
    if (code === '10n') {
        return `<img src="https://openweathermap.org/img/wn/10n@4x.png">`
    }
    if (code === '11d' || code === '11n') {
        return `<img src="https://openweathermap.org/img/wn/11d@4x.png">`
    }
    if (code === '13d' || code === '13n') {
        return `<img src="https://openweathermap.org/img/wn/13d@4x.png">`
    }
    if (code === '50d' || code === '50n') {
        return `<img src="https://openweathermap.org/img/wn/50d@4x.png">`
    }
    return '';
}

function smallIcon(code) {
    if (code === '01d') {
        return `<img class="small-icon" src="https://openweathermap.org/img/wn/01d@2x.png">`
    }
    if (code === '01n') {
        return `<img class="small-icon" src="https://openweathermap.org/img/wn/01n@2x.png">`
    }
    if (code === '02d') {
        return `<img class="small-icon" src="https://openweathermap.org/img/wn/02d@2x.png">`
    }
    if (code === '02n') {
        return `<img class="small-icon" src="https://openweathermap.org/img/wn/02n@2x.png">`
    }
    if (code === '03d' || code === '03n') {
        return `<img class="small-icon" src="https://openweathermap.org/img/wn/03d@2x.png">`
    }
    if (code === '04d' || code === '04n') {
        return `<img class="small-icon" src="https://openweathermap.org/img/wn/04d@2x.png">`
    }
    if (code === '09d' || code === '09n') {
        return `<img class="small-icon" src="https://openweathermap.org/img/wn/09d@2x.png">`
    }
    if (code === '10d') {
        return `<img class="small-icon" src="https://openweathermap.org/img/wn/10d@2x.png">`
    }
    if (code === '10n') {
        return `<img class="small-icon" src="https://openweathermap.org/img/wn/10n@2x.png">`
    }
    if (code === '11d' || code === '11n') {
        return `<img class="small-icon" src="https://openweathermap.org/img/wn/11d@2x.png">`
    }
    if (code === '13d' || code === '13n') {
        return `<img class="small-icon" src="https://openweathermap.org/img/wn/13d@2x.png">`
    }
    if (code === '50d' || code === '50n') {
        return `<img class="small-icon" src="https://openweathermap.org/img/wn/50d@2x.png">`
    }
    return '';
}

export { 
    titleCase, 
    formatSunTimes, 
    formatDay,
    formatTime,
    formateDateTime, 
    weatherIcon,
    smallIcon
};