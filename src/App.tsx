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

  useEffect(() => {
    axios
      .get(`${url}geo/1.0/direct?q=Zagreb&limit=5&appid=${apiKey}`)
      .then((res) => {
        setLocation({ ...location, locations: res.data });
        console.log(res.data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather app</h1>
      </header>
      <p>Town: {location.locations[0].name}</p>
      <p>Country: {location.locations[0].country}</p>
    </div>
  );
}

export default App;
