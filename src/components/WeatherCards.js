import React from "react";

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
        <strong>{currentTemp}°</strong>
      </p>
      <div className="other-info">
        <p className="weather-type">
          Weather Type: <strong> {weatherType}</strong>
        </p>
        <p className="cloudiness">
          Cloudiness: <strong> {cloudiness}</strong>
        </p>
        <p className="high">
          High: <strong> {highTemp}</strong>
        </p>
        <p className="humidity">
          Humidity: <strong> {humidity}</strong>
        </p>
        <p className="low">
          Low: <strong> {lowTemp}</strong>
        </p>
        <p className="wind">
          Wind Speed: <strong> {windSpeed}</strong>
        </p>
      </div>
    </section>
  );
}

export default WeatherCard;
