import React, { useMemo } from "react";
import WeatherCard from "../components/WeatherCards";

const APIKey = "8fb50a254d1d00c642f7408ac5294de5";

function Home() {
  // weatherType value changes which is why it is stored in memo
  const {
    cloudiness,
    currentTemp,
    highTemp,
    humiditiy,
    lowTemp,
    weatherType,
    windSpeed,
  } = useMemo(() => {
    return {
      cloudiness: 100,
      currentTemp: "76",
      highTemp: "80",
      humidity: 100,
      lowTemp: "80",
      weatherType: "Cloudy",
      windSpeed: "10mph",
    };
  }, []);
  return (
    <main className="App">
      <header className="Title">Weather App</header>
      <WeatherCard
        cloudiness={cloudiness}
        currentTemp={currentTemp}
        highTemp={highTemp}
        humiditiy={humiditiy}
        lowTemp={lowTemp}
        weatherType={weatherType}
        windSpeed={windSpeed}
      />
    </main>
  );
}

export default Home;
