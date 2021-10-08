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
        (document.body.style.backgroundSize = "cover"),
        (<FontAwesomeIcon icon={faCloud} />)
      );
    case "Clear":
      return (
        (document.body.style.backgroundImage =
          "url('https://media.giphy.com/media/QmH77NDL04OX5vWQZE/giphy.gif')"),
        (document.body.style.backgroundRepeat = "no-repeat"),
        (document.body.style.backgroundSize = "cover"),
        (<FontAwesomeIcon icon={faSun} />)
      );
    case "Snow":
      return (
        (document.body.style.backgroundImage =
          "url('https://media.giphy.com/media/bGaOdqeqYQKc0/giphy.gif)"),
        (document.body.style.backgroundRepeat = "no-repeat"),
        (document.body.style.backgroundSize = "cover"),
        (<FontAwesomeIcon icon={faSnowflake} />)
      );
    case ("Rain", "Drizzle"):
      return (
        (document.body.style.backgroundImage =
          "url('https://i.gifer.com/AcU9.gif')"),
        (document.body.style.backgroundRepeat = "no-repeat"),
        (document.body.style.backgroundSize = "cover"),
        (document.body.style.color = "white"),
        changeColor(),
        (<FontAwesomeIcon icon={faCloudRain} />)
      );
    case "Haze":
      return (
        (document.body.style.backgroundImage =
          "url('https://i.gifer.com/GCum.gif')"),
        (document.body.style.backgroundRepeat = "no-repeat"),
        (document.body.style.backgroundSize = "cover"),
        (<FontAwesomeIcon icon={faSmog} />)
      );
    default:
      return <FontAwesomeIcon icon={faSun} />;
  }
}

export default WeatherImage;
