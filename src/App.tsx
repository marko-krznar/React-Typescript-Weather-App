import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

interface ILocation {
  locations: [
    {
      name: string;
      country: string;
    }
  ];
}

interface IWeather {
  weather: {
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
  };
}

function App() {
  const url = "https://api.openweathermap.org/";
  const apiKey = "bfd14f25f12b27477818a553e86af0d4";

  const [location, setLocation] = useState<ILocation>({
    locations: [
      {
        name: "",
        country: "",
      },
    ],
  });

  const [weatherInfo, setWeatherInfo] = useState<IWeather>({
    weather: {
      main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0,
      },
    },
  });

  useEffect(() => {
    axios
      .get(`${url}geo/1.0/direct?q=Zagreb&limit=5&appid=${apiKey}`)
      .then((res) => {
        setLocation({ ...location, locations: res.data });
      });
    axios
      .get(
        `${url}data/2.5/weather?lat=45.8131847&lon=15.9771774&units=metric&appid=${apiKey}`
      )
      .then((res) => {
        setWeatherInfo({ weather: res.data });
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather app</h1>
      </header>
      <p>Town: {location.locations[0].name}</p>
      <p>Country: {location.locations[0].country}</p>
      <div className="card">
        <p>Temp: {weatherInfo.weather.main.temp}</p>
        <p>Feels like: {weatherInfo.weather.main.feels_like}</p>
        <p>Min temp: {weatherInfo.weather.main.temp_min}</p>
        <p>Max temp: {weatherInfo.weather.main.temp_max}</p>
        <p>Pressure: {weatherInfo.weather.main.pressure}</p>
        <p>Humidity: {weatherInfo.weather.main.humidity}</p>
      </div>
    </div>
  );
}

export default App;
