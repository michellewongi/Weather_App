import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSun,
  faCloudRain,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

function WeatherImage({ weatherType }) {
  let nav = document.querySelectorAll("a");
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
    case "Rain":
      return (
        (document.body.style.backgroundImage =
          "url('https://i.gifer.com/AcU9.gif')"),
        (document.body.style.backgroundRepeat = "no-repeat"),
        (document.body.style.backgroundSize = "cover"),
        (document.body.style.color = "white"),
        (nav[0].style.color = "white"),
        (nav[1].style.color = "white"),
        (nav[2].style.color = "white"),
        (nav[3].style.color = "white"),
        (<FontAwesomeIcon icon={faCloudRain} />)
      );
    default:
      return <FontAwesomeIcon icon={faSun} />;
  }
}

export default WeatherImage;
