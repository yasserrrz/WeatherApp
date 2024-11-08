# Weather App

A simple, responsive weather application built with React that allows users to search for a city's weather information, including the current weather and a forecast for the next few days.

## Features

- **City-based Search**: Users can enter a city name to retrieve weather data.
- **Current Weather Display**: Shows temperature, humidity, and wind speed.
- **5-Day Forecast**: Displays daily weather forecast at noon for five upcoming days using helper function called getDailyForecst(data).
- **Error Handling**: Provides user-friendly error messages if the city is not found or if the API fails.
- **Responsive Design**: Works smoothly on both desktop and mobile screens.
- **Stylish UI**: Styled with SCSS for a clean and modern look (as much as possible :'D).

## Tech Stack

- **Frontend**: React, SCSS
- **API**: [OpenWeatherMap API](https://openweathermap.org/api) for weather data
- **Deployment**: Vercel for hosting

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yasserrrz/WeatherApp.git
   cd weather-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Environment Variables**

   Create a `.env` file in the root directory and add your OpenWeatherMap API key:

   ```plaintext
   REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key 
   ```

## Usage

To start the app locally:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

To deploy the app on Vercel:

1. Go to your Vercel dashboard and create a new project, linking it to your GitHub repository.
2. Add the environment variable in Vercel’s dashboard:
   - `REACT_APP_WEATHER_API_KEY` with your OpenWeatherMap API key.
3. Deploy the project.

## Code Overview

### `App.js`

The main component that manages the application's state and handles the API requests.

- **`handleSearch`**: Fetches weather data for the entered city and sets the data to display.
- **`getDailyForecast`**: Extracts a daily forecast for the next 5 days, focusing on data at noon for each day; 
   this function take the data and return the only the 12 pm weather without duplication , becaues the api provide the forecast weather every 3 hours/day .

### Components

- **SearchBar**: Allows users to input a city name and search for weather data.
- **WeatherDisplay**: Displays current weather information.
- **ForecastDisplay**: Shows a brief 5-day weather forecast.

## Folder Structure

```
weather-app/
├── public/
├── src/
│   ├── Components/
│   │   ├── SearchBar.js
│   │   ├── WeatherDisplay.js
│   │   └── ForecastDisplay.js
│   ├── App.js
│   ├── App.scss
│   └── index.js
├── .env.example
└── README.md
```

## Potential Improvements

- Add more detailed weather information, such as hourly forecasts.
- Enable geolocation for a more personalized experience.
- Provide the option for different measurement units (e.g., Celsius/Fahrenheit).

## Troubleshooting

If you experience issues with the environment variables:

- Double-check the variable naming in the `.env` file and ensure it matches `REACT_APP_WEATHER_API_KEY`.
- Ensure you’ve redeployed the app after changing environment variables on Vercel.

## License

This project is just testing for Appgain company
