import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import WeatherCard from "../components/WeatherCards";
import CurrentCard from "../components/CurrentCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const APIKey = "8fb50a254d1d00c642f7408ac5294de5";

function fahrenheit(kelvin) {
  let newTemp = Math.floor((kelvin - 273) * (9 / 5) + 32);
  return newTemp;
}

function Home() {
  const [city, setCity] = useState();
  const [cityName, setCityName] = useState();
  const [weatherData, setWeatherData] = useState();
  const [long, setLong] = useState();
  const [lat, setLat] = useState();
  const [currentData, setCurrentData] = useState();
  const [errorMsg, setErrorMsg] = useState();

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

  const geoURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&appid=${APIKey}`;

  const getCity = () => {
    axios
      .get(URL)
      .then(function (response) {
        setWeatherData(response.data);
      })
      .catch(function (err) {
        console.warn(err);
        setErrorMsg(err);
      });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        setLat(latitude);
        setLong(longitude);
      });
    }
  });

  useEffect(() => {
    if (currentData) {
      const title = currentData.timezone.split("_").join(" ");
      setCityName(title.slice(title.indexOf("/") + 1));
    } else if (weatherData) {
      setCityName(city.split("+").join(" "));
    }
  });

  const getCurrentLocation = () => {
    axios
      .get(geoURL)
      .then(function (response) {
        setCurrentData(response.data);
      })
      .catch(function (err) {
        console.warn(err);
      });
  };

  function handleChange(e) {
    if (e.target.value.indexOf(" ") > -1) {
      setCity(e.target.value.split(" ").join("+"));
    } else {
      setCity(e.target.value);
    }
  }

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

  const { cloud, currentTem, high, humid, low, type, wind } = useMemo(() => {
    if (!currentData) return {};
    return {
      cloud: currentData.current.clouds,
      currentTem: fahrenheit(currentData.current.temp),
      high: fahrenheit(currentData.daily[0].temp.max),
      humid: currentData.current.humidity,
      low: fahrenheit(currentData.daily[0].temp.min),
      type: currentData.current.weather[0].main,
      wind: currentData.current.wind_speed,
    };
  }, [currentData]);

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
          }}
        >
          search
        </button>
      </header>

      <div className="Error">
        {errorMsg ? <p>Location not found</p> : <></>}
      </div>

      <section className="CurrentLocation">
        <button className="current-btn" onClick={() => getCurrentLocation()}>
          <FontAwesomeIcon icon={faLocationDot} />
        </button>
      </section>

      <section className="WeatherForecast">
        <h1 className="city-name">{cityName}</h1>
        {!currentData ? (
          <WeatherCard
            cloudiness={cloudiness}
            currentTemp={currentTemp}
            highTemp={highTemp}
            humidity={humidity}
            lowTemp={lowTemp}
            weatherType={weatherType}
            windSpeed={windSpeed}
          />
        ) : (
          <CurrentCard
            cloud={cloud}
            currentTem={currentTem}
            high={high}
            humid={humid}
            low={low}
            type={type}
            wind={wind}
          />
        )}
      </section>
    </main>
  );
}

export default Home;
