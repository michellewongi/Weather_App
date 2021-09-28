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
      <p>
        WeatherType: <strong>{weatherType}</strong>
      </p>
      <p>
        cloudiness: <strong>{cloudiness}</strong>
      </p>
      <p>
        currentTemp: <strong>{currentTemp}</strong>
      </p>
      <p>
        highTemp: <strong>{highTemp}</strong>
      </p>
      <p>
        humiditiy: <strong>{humiditiy}</strong>
      </p>
      <p>
        lowTemp: <strong>{lowTemp}</strong>
      </p>
      <p>
        windSpeed: <strong>{windSpeed}</strong>
      </p>
    </section>
  );
}

export default WeatherCard;
