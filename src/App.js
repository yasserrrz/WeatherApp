import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import WeatherDisplay from './Components/WeatherDisplay';
import ForecastDisplay from './Components/ForecastDisplay';
import './App.scss';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 
  const getDailyForecst = (data) => {
    const dailyData = [];
    const days = new Set();

    data.list.forEach((item) => {
      const date = new Date(item.dt_txt);
      const day = date.getDate()
      console.log("day" , day);
      console.log("date getHours" , date.getHours());

      if (date.getHours() === 12 && !days.has(day)) {
        dailyData.push(item);
        days.add(day);
      }
    })

    return dailyData;
  };



  const handleSearch = async () => {
    if (!city) {
      setError("Please enter a city.");
      return;
    }
    setError(null);
    setLoading(true)

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
    
      setWeatherData({
        current: response.data,
        dailyForecst:  getDailyForecst(response?.data)
      });
    } catch (err) {
      if (err.response.data.message) {

        setError(err.response.data.message);
      } else {

        setError("Couldn't fetch weather data. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="search-container">
        <h1>Weather App</h1>
        <SearchBar setError={setError} city={city} setCity={setCity} handleSearch={handleSearch} />
      </div>

      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          {error && <div className="error-message">{error}</div>}
          {weatherData && (
            <>
              <WeatherDisplay weatherData={weatherData.current} />
              <ForecastDisplay dailyForecst={weatherData.dailyForecst} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;
