import React from "react";
import WeatherImage from "./WeatherImage";

function WeatherCard({
  cloudiness,
  currentTemp,
  highTemp,
  humidity,
  lowTemp,
  weatherType = "Unknown",
  windSpeed,
}) {
  return (
    <section className="WeatherCard">
      <p className="currentTemp">
        <div className="WeatherImageWrapper">
          <WeatherImage weatherType={weatherType}></WeatherImage>
        </div>
        Currently<strong>{currentTemp}°</strong>
      </p>
      <p className="weather-type">
        Weather Type: <strong> {weatherType}</strong>
      </p>
      <p className="cloudiness">
        Cloudiness: <strong> {cloudiness}%</strong>
      </p>
      <p className="humidity">
        Humidity: <strong> {humidity}%</strong>
      </p>
      <div className="highlow">
        <p className="high">
          High: <strong> {highTemp}°</strong>
        </p>
        <p className="low">
          Low: <strong> {lowTemp}°</strong>
        </p>
      </div>
      <p className="wind">
        Wind Speed: <strong> {windSpeed} mph</strong>
      </p>
    </section>
  );
}

export default WeatherCard;
