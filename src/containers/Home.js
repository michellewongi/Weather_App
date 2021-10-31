import React, { useEffect, useMemo, useState } from "react";
//axios allows you to make HTTP requests
import axios from "axios";
// import { useLocation } from "react-router";
import WeatherCard from "../components/WeatherCards";

const APIKey = "8fb50a254d1d00c642f7408ac5294de5";

// URL search parameters
// localhost:3000/?city=paris
// Abstract away URL Search Params here to make it easier to use
// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

function fahrenheit(kelvin) {
  let newTemp = Math.floor((kelvin - 273) * (9 / 5) + 32);
  return newTemp;
}

function Home() {
  const [city, setCity] = useState();
  const [cityName, setCityName] = useState();
  const [weatherData, setWeatherData] = useState();

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

  function handleChange(e) {
    if (e.target.value.indexOf(" ") > -1) {
      setCity(e.target.value.split(" ").join("+"));
    } else {
      setCity(e.target.value);
    }
  }

  function setName() {
    setCityName(city.split("+").join(" "));
  }

  const getCity = () => {
    // Get weather data from weather API
    axios
      .get(URL)
      .then(function (response) {
        setWeatherData(response.data);
      })
      .catch(function (error) {
        console.warn(error);
      });
  };

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
        <input
          className="searchbar"
          type="text"
          placeholder="Name of city (e.g. Austin"
          onChange={handleChange}
        />
        <button
          className="searchbtn"
          onClick={() => {
            getCity();
            setName();
          }}
        >
          search
        </button>
      </header>
      <h1 className="city-name">{cityName}</h1>
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
