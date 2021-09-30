import React from "react";

function WeatherCard({
  cloudiness,
  currentTemp,
  highTemp,
  humiditiy,
  lowTemp,
  weatherType = "Unknown",
  windSpeed,
}) {
  return (
    <section className="WeatherCard">
      <p className="currentTemp">
        Current Temp: <strong>{currentTemp}</strong>
      </p>
      <p>
        Weather Type: <strong>{weatherType}</strong>
      </p>
      <p>
        Cloudiness: <strong>{cloudiness}</strong>
      </p>
      <p>
        High Temp: <strong>{highTemp}</strong>
      </p>
      <p>
        Humiditiy: <strong>{humiditiy}</strong>
      </p>
      <p>
        Low Temp: <strong>{lowTemp}</strong>
      </p>
      <p>
        Wind Speed: <strong>{windSpeed}</strong>
      </p>
    </section>
  );
}

export default WeatherCard;
