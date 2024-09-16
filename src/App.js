import React, { useEffect, useState } from "react";
import WeatherSections from "./components/WeatherSections";
import axios from "axios";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const apiKey = "8ee633956bad6ae1965b557a94ecfcba";

  const cities = [
    { name: "New York", id: "5128581" },
    { name: "London", id: "2643743" },
    { name: "Alaska", id: "5879092" },
    { name: "Eilat", id: "295277" },
  ];

  useEffect(() => {
    const fetchWeatherData = async () => {
      const weatherResults = await Promise.all(
        cities.map(async (city) => {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?id=${city.id}&units=metric&appid=${apiKey}`
          );
          return {
            name: city.name,
            description: response.data.weather[0].description,
            temperature: response.data.main.temp,
            feelsLike: response.data.main.feels_like,
            humidity: response.data.main.humidity,
          };
        })
      );
      setWeatherData(weatherResults);
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="App">
      <h1>Weather App</h1>
      {weatherData.length > 0 ? (
        <WeatherSections places={weatherData} />
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default App;
