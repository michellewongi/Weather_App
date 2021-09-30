import React, { useEffect, useMemo, useState } from "react";
//axios allows you to make HTTP requests
import axios from "axios";
import { useLocation } from "react-router";
import WeatherCard from "../components/WeatherCards";

const APIKey = "8fb50a254d1d00c642f7408ac5294de5";

// URL search parameters
// localhost:3000/?city=paris
// Abstract away URL Search Params here to make it easier to use
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function fahrenheit(kelvin) {
  let newTemp = Math.floor((kelvin - 273) * (9 / 5) + 32);
  return newTemp;
}

function Home() {
  const [city, setCity] = useState();
  const [weatherData, setWeatherData] = useState();
  let query = useQuery();

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

  useEffect(() => {
    const cityValue = query.get("city");
    setCity(cityValue);
  }, [query]);

  useEffect(() => {
    // Get weather data from weather API
    if (city) {
      axios
        .get(URL)
        .then(function (response) {
          setWeatherData(response.data);
        })
        .catch(function (error) {
          console.warn(error);
        });
    }
  }, [URL, city]);

  // weatherType value changes which is why it is stored in memo
  const {
    cloudiness,
    currentTemp,
    highTemp,
    humidity,
    lowTemp,
    weatherType,
    windSpeed,
  } = useMemo(() => {
    if (!weatherData) return {};
    // this is where we process data
    return {
      cloudiness: weatherData.clouds.all,
      currentTemp: fahrenheit(weatherData.main.temp),
      highTemp: fahrenheit(weatherData.main.temp_max),
      humidity: weatherData.main.humidity,
      lowTemp: fahrenheit(weatherData.main.temp_min),
      weatherType: weatherData.weather[0].main,
      windSpeed: weatherData.wind.speed,
    };
  }, [weatherData]);
  return (
    <main className="App">
      <header>
        <h3 className="nav">Cities</h3>
        <div className="cities">
          <p>
            <a href="/?city=Paris">Paris</a>
          </p>
          <p>
            <a href="/?city=Tokyo">Tokyo</a>
          </p>
        </div>
      </header>
      <h1 className="city-name">{city}</h1>
      <WeatherCard
        cloudiness={cloudiness}
        currentTemp={currentTemp}
        highTemp={highTemp}
        humidity={humidity}
        lowTemp={lowTemp}
        weatherType={weatherType}
        windSpeed={windSpeed}
      />
    </main>
  );
}

export default Home;
