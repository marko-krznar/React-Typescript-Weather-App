import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { BsCloudSun } from "react-icons/bs";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

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
          Current Weather
        </h1>
      </header>

      <div className="max-w-2xl px-8 py-4 mx-auto mb-12 bg-white/[.2] rounded-lg shadow-md">
        <div className="flex justify-center items-center">
          <BsCloudSun className="text-9xl px-4" />
          <div className="px-4">
            <p className="text-4xl">{weatherInfo.weather.main.temp}° C</p>
            <h2 className="text-base">
              {location.locations[0].name}, {location.locations[0].country}
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex align-center flex-col px-4">
            <div className="text-center text-2xl">
              <FaTemperatureHigh className="inline" />
            </div>
            <p>{weatherInfo.weather.main.temp_min}° C</p>
          </div>
          <div className="flex align-center flex-col px-4">
            <div className="text-center text-2xl">
              <FaTemperatureLow className="inline" />
            </div>
            <p>{weatherInfo.weather.main.temp_max}° C</p>
          </div>
        </div>
      </div>

      {/* <div className="p-6">
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
      </div> */}
    </div>
  );
}

export default App;
