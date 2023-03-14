const API_KEY = "9e0e693263a9ec1b855aec5c97513b71";
const CITY = "Tampere";


const showForecast = (data) =>{
    const temp = data.list[0].main.temp;

    const weatherIcon = data.list[0].weather[0].icon;
    const weatherDescription = data.list[0].weather[0].main;
    const feelsTemp = data.list[0].main.feels_like;
    
    document.getElementById('weather-description').innerHTML = weatherDescription;
    document.getElementById('temp-weather-icon').src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
    document.getElementById('temp').innerHTML = temp + "°C";
    document.getElementById('feels-temp').innerHTML = "Feels like: " + feelsTemp + "°C";
}


const fetchWeather = async() => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${CITY}&appid=${API_KEY}`);

        const data = await response.json();
        console.log(data);
        showForecast(data);


    } catch (error) {
        console.log(error);
    }
}

fetchWeather();