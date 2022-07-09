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

interface IFiveDayWeather {
  fiveDayWeather: [
    {
      dt_txt: string;
      weather: [
        {
          main: string;
          description: string;
        }
      ];
    }
  ];
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

  const [fiveDayWeatherInfo, setFiveDayWeatherInfo] = useState<IFiveDayWeather>(
    {
      fiveDayWeather: [
        {
          dt_txt: "",
          weather: [
            {
              main: "",
              description: "",
            },
          ],
        },
      ],
    }
  );

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
    axios
      .get(`${url}data/2.5/forecast?q=Zagreb&units=metric&appid=${apiKey}`)
      .then((res) => {
        setFiveDayWeatherInfo({ fiveDayWeather: res.data.list });
      });
  }, []);

  // console.log(fiveDayWeatherInfo);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="font-bold leading-tight text-5xl mt-12 mb-12 text-center">
          Weather app
        </h1>
      </header>

      <div className="max-w-2xl px-8 py-4 mx-auto mb-12 bg-white rounded-lg shadow-md">
        Current Weather Data
        <h2 className="text-2xl font-bold">
          {location.locations[0].name}, {location.locations[0].country}
        </h2>
        <p>Temp: {weatherInfo.weather.main.temp}</p>
        <p>Feels like: {weatherInfo.weather.main.feels_like}</p>
        <p>Min temp: {weatherInfo.weather.main.temp_min}</p>
        <p>Max temp: {weatherInfo.weather.main.temp_max}</p>
        <p>Pressure: {weatherInfo.weather.main.pressure}</p>
        <p>Humidity: {weatherInfo.weather.main.humidity}</p>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">5 day weather forecast</h2>
        <ul className="flex flex-wrap">
          {fiveDayWeatherInfo.fiveDayWeather.map((item, i) => {
            return (
              <li
                className="max-w-xs px-8 py-4 mx-auto bg-white rounded-lg shadow-md my-2 flex-auto"
                key={i}
              >
                <span className="block">{item.dt_txt}</span>
                <span className="block">{item.weather[0].main}</span>
                <span className="block">{item.weather[0].description}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
