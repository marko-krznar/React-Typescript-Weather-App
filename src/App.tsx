import React from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import ForecastWeather from "./components/ForecastWeather";

const App = () => {
    return (
        <div className="App px-4">
            <CurrentWeather />
            <ForecastWeather />
        </div>
    );
};

export default App;
