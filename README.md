# Mausam - A Real-Time Weather App 🌤️

Mausam is a clean, simple, and responsive web application that provides real-time weather information for any city around the globe. It uses the user's geolocation to display local weather automatically and features a dynamic UI that reflects the current conditions.

### ➡️ **[View Live Demo](https://sankalpdev.github.io/mausam-weather-app/)**
<img width="1919" height="864" alt="image" src="https://github.com/user-attachments/assets/1c69d128-6b65-4433-8d10-b1376bae1914" />


## Features

  * **City Search**: Get up-to-date weather for any city by using the search functionality.
  * **Geolocation**: Automatically fetches and displays weather data for your current location on page load (requires browser permission).
  * **Detailed Weather Data**: Provides essential information at a glance:
      * Temperature (in Celsius)
      * Humidity (%)
      * Wind Speed (m/s)
      * Cloud Coverage (%)
  * **Dynamic Icons**: Displays official OpenWeatherMap icons that visually represent the current weather conditions (e.g., clear sky, clouds, rain).
  * **Loading & Error States**: A loading spinner provides feedback during API calls, and user-friendly error messages are shown for invalid input or failed requests.
  * **Fully Responsive**: The layout is optimized for a seamless experience on both desktop and mobile devices.

## Technologies Used

  * **HTML5**: For the structure and content of the application.
  * **CSS3**: For styling, layout (Flexbox), and responsiveness.
  * **JavaScript (ES6+)**: For application logic, handling user events, and making API requests using the `fetch` API with async/await.
  * **OpenWeatherMap API**: Used as the source for all weather data.

## Local Setup and Installation

To run this project on your local machine, follow these steps:

#### 1\. Clone the Repository

Clone this project to your local machine using Git:

```bash
git clone https://github.com/SankalpDev/mausam-weather-app.git
cd mausam-weather-app
```

#### 2\. Get Your API Key

This application requires an API key from OpenWeatherMap to function.

  * Go to the [OpenWeatherMap website](https://openweathermap.org/) and create a free account.
  * Navigate to the 'API keys' tab on your user dashboard.
  * Copy your unique, default API key.

#### 3\. Create the `config.js` File

In the root directory of the project, create a new file named `config.js`.

#### 4\. Add Your API Key to the Config File

Inside `config.js`, add the following line of code, pasting your API key where indicated:

```javascript
const apiKey = 'YOUR_API_KEY_HERE';
```

#### 5\. Open in Your Browser

You can now open the `index.html` file directly in any web browser to run the application locally.

## Future Improvements

  * **5-Day Forecast**: Extend functionality to display a 5-day weather forecast in addition to the current weather.
  * **Unit Conversion**: Add a toggle to switch temperature units between Celsius and Fahrenheit.
  * **Search History**: Store recent searches in local storage to allow users to quickly check previously searched cities.
  * **Improved UI/UX**: Add more detailed weather information like "Feels like" temperature, UV index, and sunrise/sunset times.
