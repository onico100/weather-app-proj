import React from "react";
import "./WeatherSections.css";

function WeatherSections({ places }) {
  return (
    <div className="weather-sections">
      {places.map((place, index) => (
        <div className="weather-section" key={index}>
          <h2>{place.name}</h2>
          <p>
            <strong>Description:</strong> {place.description}
          </p>
          <p>
            <strong>Temperature:</strong> {place.temperature}°C
          </p>
          <p>
            <strong>Feels Like:</strong> {place.feelsLike}°C
          </p>
          <p>
            <strong>Humidity:</strong> {place.humidity}%
          </p>
        </div>
      ))}
    </div>
  );
}

export default WeatherSections;
