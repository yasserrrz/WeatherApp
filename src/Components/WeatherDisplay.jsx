import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div className="weather-display">
      <h2>Current Weather in {weatherData?.city?.name}</h2>
      {weatherData?.list[0]?.weather[0]?.icon && (
        <img
          src={`https://openweathermap.org/img/wn/${weatherData?.list[0]?.weather[0]?.icon}@2x.png`}
          alt={weatherData?.list[0]?.weather[0]?.description}
        />
      )}
      <p>
        Temperature: {Math.round(weatherData?.list[0]?.main?.temp - 273.15)} °C
      </p>
      <p>Humidity: {weatherData?.list[0]?.main?.humidity} %</p>
      <p>Wind Speed: {weatherData?.list[0]?.wind?.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
