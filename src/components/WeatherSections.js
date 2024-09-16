import React from "react";
import { FaSun, FaCloud, FaSnowflake } from "react-icons/fa";
import { LuFerrisWheel } from "react-icons/lu";
import { FaSnowboarding } from "react-icons/fa";
import { TbBeach } from "react-icons/tb";
import "./WeatherSections.css";

const getCityIcon = (cityName) => {
  switch (cityName) {
    case "ניו יורק":
      return <div>🗽</div>;
    case "לונדון":
      return <LuFerrisWheel color="lightgrey" size={80} />;
    case "אלסקה":
      return <FaSnowboarding color="darkblue" size={80} />;
    case "אילת":
      return <TbBeach color="yellow" size={80} />;
    default:
      return null;
  }
};

const getWeatherIcon = (feelsLike) => {
  if (feelsLike > 30) {
    return <FaSun color="orange" size={40} />; // Sun icon for hot weather
  } else if (feelsLike >= 20 && feelsLike <= 30) {
    return <FaCloud color="gray" size={40} />; // Cloud icon for moderate weather
  } else {
    return <FaSnowflake color="lightblue" size={40} />; // Snowflake icon for cold weather
  }
};

function WeatherSections({ places }) {
  return (
    <div className="weather-sections">
      {places.map((place, index) => (
        <div className="weather-section" key={index}>
          <div className="weather-icon">{getWeatherIcon(place.feelsLike)}</div>{" "}
          <div className="city-icon">{getCityIcon(place.name)}</div>{" "}
          <div className="weather-content">
            <h2>{place.name}</h2>
            <p className="description">{place.description}</p>{" "}
            {/* Description */}
            <div className="weather-details">
              <p>
                <strong>טמפרטורה:</strong> {place.temperature}°C
              </p>{" "}
              <p>
                <strong>טמפרטורה מורגשת:</strong> {place.feelsLike}°C
              </p>{" "}
              <p>
                <strong>לחות:</strong> {place.humidity}%
              </p>{" "}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WeatherSections;
