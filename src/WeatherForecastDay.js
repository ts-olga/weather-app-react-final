import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    let day = days[date.getDay()];

    return day;
  }
  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="forecast-temperature">
        <span className="forecast-temp-max">
          {" "}
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="forecast-temp-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
