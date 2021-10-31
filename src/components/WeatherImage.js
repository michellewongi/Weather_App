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
          "url('https://media.giphy.com/media/zrqT3kn77BlKv4mrHm/giphy.gif')"),
        (document.body.style.backgroundRepeat = "no-repeat"),
        (document.body.style.backgroundSize = "cover"),
        (<FontAwesomeIcon icon={faCloud} />)
      );
    case "Clear":
      return (
        (document.body.style.backgroundImage =
          "url('https://i2.wp.com/www.coloradoboulevard.net/wp-content/uploads/2015/05/weather-sunny-day-gif.gif?fit=700%2C477&ssl=1')"),
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
    case "Drizzle":
    case "Rain":
      return (
        (document.body.style.backgroundImage =
          "url('https://i.gifer.com/AcU9.gif')"),
        (document.body.style.backgroundRepeat = "no-repeat"),
        (document.body.style.backgroundSize = "cover"),
        (document.body.style.color = "white"),
        changeColor(),
        (<FontAwesomeIcon icon={faCloudRain} />)
      );
    case "Fog":
    case "Haze":
    case "Mist":
      return (
        (document.body.style.backgroundImage =
          "url('https://64.media.tumblr.com/6622c9771471078d4d770314159c0c4e/tumblr_owycmlBWBm1vxekw4o1_500.gifv')"),
        (document.body.style.backgroundRepeat = "no-repeat"),
        (document.body.style.backgroundSize = "cover"),
        (<FontAwesomeIcon icon={faSmog} />)
      );
    default:
      return <FontAwesomeIcon icon={faSun} />;
  }
}

export default WeatherImage;
