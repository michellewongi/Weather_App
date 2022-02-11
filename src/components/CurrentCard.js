import React from "react";
import WeatherImage from "./WeatherImage";

function CurrentCard({ cloud, currentTem, high, humid, low, type, wind }) {
  return (
    <section className="WeatherCard">
      <p className="currentTemp">
        <div className="WeatherImageWrapper">
          <WeatherImage weatherType={type}></WeatherImage>
        </div>
        Currently<strong>{currentTem}°</strong>
      </p>
      <p className="weather-type">
        Weather Type: <strong> {type}</strong>
      </p>
      <p className="cloudiness">
        Cloudiness: <strong> {cloud}%</strong>
      </p>
      <p className="humidity">
        Humidity: <strong> {humid}%</strong>
      </p>
      <div className="highlow">
        <p className="high">
          High: <strong> {high}°</strong>
        </p>
        <p className="low">
          Low: <strong> {low}°</strong>
        </p>
      </div>
      <p className="wind">
        Wind Speed: <strong> {wind} mph</strong>
      </p>
    </section>
  );
}

export default CurrentCard;
