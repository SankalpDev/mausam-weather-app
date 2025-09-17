document.addEventListener('DOMContentLoaded', () => {
    const weatherForm = document.getElementById('weatherForm');
    const cityInput = document.getElementById('cityInput');
    const loader = document.getElementById('loader');
    const errorMessage = document.getElementById('errorMessage');
    // No need to set a default image here anymore, it will be set by the API call.

    weatherForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather(`weather?q=${city}`);
        }
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetchWeather(`weather?lat=${latitude}&lon=${longitude}`);
            },
            () => {
                // If geolocation fails, fetch a default city like London
                fetchWeather(`weather?q=London`);
                errorMessage.textContent = "Geolocation denied. Showing weather for London.";
            }
        );
    } else {
        // If geolocation is not supported, fetch a default city
        fetchWeather(`weather?q=London`);
    }
});

async function fetchWeather(endpoint) {
    const loader = document.getElementById('loader');
    const weatherInfo = document.querySelector('.weather-info');
    const errorMessage = document.getElementById('errorMessage');

    loader.style.display = 'block';
    weatherInfo.style.display = 'none';
    errorMessage.textContent = '';

    const url = `https://api.openweathermap.org/data/2.5/${endpoint}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found. Please try again.');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        displayError(error.message);
    } finally {
        loader.style.display = 'none';
        weatherInfo.style.display = 'block';
    }
}

function displayWeather(data) {
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temperature').textContent = `🌡️ Temperature: ${data.main.temp} °C`;
    document.getElementById('humidity').textContent = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').textContent = `💨 Wind Speed: ${data.wind.speed} m/s`;
    document.getElementById('clouds').textContent = `☁️ Cloud Coverage: ${data.clouds.all}%`;
    
    // Pass the icon code to the update function
    updateWeatherVisual(data.weather[0].icon);
}

function displayError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    document.getElementById('cityName').textContent = '';
    document.getElementById('temperature').textContent = '';
    document.getElementById('humidity').textContent = '';
    document.getElementById('wind').textContent = '';
    document.getElementById('clouds').textContent = '';
    // Optionally hide the icon on error
    document.getElementById('weatherIcon').style.display = 'none';
}

function updateWeatherVisual(iconCode) {
    const weatherIcon = document.getElementById('weatherIcon');
    // Use the official OpenWeatherMap icons
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    weatherIcon.style.display = 'block'; // Make sure the icon is visible
}