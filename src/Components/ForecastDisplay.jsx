import React from "react";

const ForecastDisplay = ({ dailyForecst }) => {
  return (
    <div className="forecast-display">
      <h2>5 Days Forecast</h2>
      <div className="forecast-days-container">
        {dailyForecst.map((day, index) => {
          return (
            <div key={index} className="forecast-day">
              <p>{new Date(day?.dt_txt).toDateString()}</p>
              {day.weather[0]?.icon && (
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt={day?.weather[0]?.description}
                />
              )}

              <p>Temperature: {Math.round(day?.main?.temp - 273.15)} °C</p>
              <p>Feels Like: {Math.round(day?.main?.feels_like - 273.15)} °C</p>
              <p>Humidity: {day?.main.humidity} %</p>
              <p>Weather: {day?.weather[0]?.description}</p>
              <p>Wind Speed: {day?.wind?.speed} m/s</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForecastDisplay;
