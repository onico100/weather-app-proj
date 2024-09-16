import React from "react";
import WeatherSections from "./components/WeatherSections";
import "./App.css";

function App() {
  const places = [
    {
      name: "Place 1",
      description: "Sunny",
      temperature: 30,
      feelsLike: 32,
      humidity: 45,
    },
    {
      name: "Place 2",
      description: "Cloudy",
      temperature: 22,
      feelsLike: 24,
      humidity: 60,
    },
    {
      name: "Place 3",
      description: "Rainy",
      temperature: 18,
      feelsLike: 18,
      humidity: 85,
    },
    {
      name: "Place 4",
      description: "Windy",
      temperature: 25,
      feelsLike: 23,
      humidity: 50,
    },
  ];

  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSections places={places} />
    </div>
  );
}

export default App;
