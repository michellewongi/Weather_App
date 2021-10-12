import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSun,
  faCloudRain,
  faSnowflake,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

function changeColor() {
  let nav = document.querySelectorAll("a");
  return Array.from(nav).forEach((nav) => (nav.style.color = "white"));
}

function WeatherImage({ weatherType }) {
  switch (weatherType) {
    case "Clouds":
      return (
        (document.body.style.backgroundImage =
          "url('https://media.giphy.com/media/mno6BJfy8USic/source.gif')"),
        (document.body.style.backgroundRepeat = "no-repeat"),
        (document.body.style.backgroundSize = "100% 100%"),
        (<FontAwesomeIcon icon={faCloud} />)
      );
    case "Clear":
      return (
        (document.body.style.backgroundImage =
          "url('https://media.giphy.com/media/paMdZlRXlc96o/giphy.gif')"),
        (document.body.style.backgroundRepeat = "no-repeat"),
        (document.body.style.backgroundSize = "100% 100%"),
        (<FontAwesomeIcon icon={faSun} />)
      );
    case "Snow":
      return (
        (document.body.style.backgroundImage =
          "url('https://media.giphy.com/media/bGaOdqeqYQKc0/giphy.gif)"),
        (document.body.style.backgroundRepeat = "no-repeat"),
        (document.body.style.backgroundSize = "100% 100%"),
        (<FontAwesomeIcon icon={faSnowflake} />)
      );
    case "Drizzle":
    case "Rain":
      return (
        (document.body.style.backgroundImage =
          "url('https://i.gifer.com/AcU9.gif')"),
        (document.body.style.backgroundRepeat = "no-repeat"),
        (document.body.style.backgroundSize = "100% 100%"),
        (document.body.style.color = "white"),
        changeColor(),
        (<FontAwesomeIcon icon={faCloudRain} />)
      );
    case "Fog":
    case "Haze":
      return (
        (document.body.style.backgroundImage =
          "url('https://media.giphy.com/media/xT9GEpwYcYtwrqjdQc/giphy.gif')"),
        (document.body.style.backgroundRepeat = "no-repeat"),
        (document.body.style.backgroundSize = "100% 100%"),
        (<FontAwesomeIcon icon={faSmog} />)
      );
    default:
      return <FontAwesomeIcon icon={faSun} />;
  }
}

export default WeatherImage;
