import React from "react";
import "./WeatherSections.css";

function WeatherSections({ places }) {
  return (
    <div className="weather-sections">
      {places.map((place, index) => (
        <div className="weather-section" key={index}>
          <h2>{place.name}</h2>
          <p>
            <strong>תיאור:</strong> {place.description}
          </p>{" "}
          <p>
            <strong>טמפרטורה:</strong> {place.temperature}°C
          </p>{" "}
          <p>
            <strong>:טמפרטורה המורגשת</strong> {place.feelsLike}°C
          </p>{" "}
          <p>
            <strong>לחות:</strong> {place.humidity}%
          </p>{" "}
        </div>
      ))}
    </div>
  );
}

export default WeatherSections;
