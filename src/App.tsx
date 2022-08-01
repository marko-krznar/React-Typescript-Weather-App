import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { BsSunset, BsSunrise, BsWind } from "react-icons/bs";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

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
    weather: [
      {
        main: string;
        description: string;
        icon: string;
      }
    ];
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
    sys: {
      sunrise: number;
      sunset: number;
    };
    wind: {
      speed: number;
      deg: number;
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
      weather: [
        {
          main: "",
          description: "",
          icon: "",
        },
      ],
      main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0,
      },
      sys: {
        sunrise: 0,
        sunset: 0,
      },
      wind: {
        speed: 0,
        deg: 0,
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

  return (
    <div className="App px-4">
      <header className="App-header">
        <h1 className="font-bold leading-tight text-5xl mt-12 mb-12 text-center text-white">
          Current Weather
        </h1>
      </header>

      <div className="max-w-2xl px-8 py-4 mx-auto mb-12 bg-white/[.2] rounded-lg shadow-md backdrop-blur-lg text-white">
        <div className="flex justify-center items-center pt-6">
          <img
            src={`https://openweathermap.org/img/wn/${weatherInfo?.weather?.weather[0]?.icon}@4x.png`}
            alt={`${weatherInfo.weather.weather[0].description}`}
          />
          <div className="px-4">
            <p className="text-5xl font-bold">
              {weatherInfo.weather.main.temp}° C
            </p>
            <h2 className="text-base flex items-center mt-2">
              <IoLocationOutline className="mr-2" />
              {location.locations[0].name}, {location.locations[0].country}
            </h2>
          </div>
        </div>
        <div className="flex justify-center pb-4">
          <div className="flex align-center flex-col px-4">
            <div className="text-center text-2xl">
              <BsSunrise className="inline" />
            </div>
            <p className="font-bold">
              {new Date(
                weatherInfo.weather.sys.sunrise * 1000
              ).toLocaleTimeString()}
            </p>
          </div>
          <div className="flex align-center flex-col px-4">
            <div className="text-center text-2xl">
              <FaTemperatureHigh className="inline" />
            </div>
            <p className="font-bold">{weatherInfo.weather.main.temp_min}° C</p>
          </div>
          <div className="flex align-center flex-col px-4">
            <div className="text-center text-2xl">
              <BsWind className="inline" />
            </div>
            <p className="font-bold">
              {(weatherInfo.weather.wind.speed * 3.6).toFixed(2)} km/h
            </p>
          </div>
          <div className="flex align-center flex-col px-4">
            <div className="text-center text-2xl">
              <FaTemperatureLow className="inline" />
            </div>
            <p className="font-bold">{weatherInfo.weather.main.temp_max}° C</p>
          </div>
          <div className="flex align-center flex-col px-4">
            <div className="text-center text-2xl">
              <BsSunset className="inline" />
            </div>
            <p className="font-bold">
              {new Date(
                weatherInfo.weather.sys.sunset * 1000
              ).toLocaleTimeString()}
            </p>
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
