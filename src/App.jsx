import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import Display from './Display';

export default function App() {
  const [name, setName] = useState("");
  const [weather, setWeather] = useState([]);
  const API_KEY = "21805bff7224936fa25d6cec016a0a4b";

  const ChangeHandler = (data) => {
    setName(data);
  };

  const fetchWeather = async () => {
    if (name !== "") {
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}&units=metric`;
      const response = await fetch(API);
      const data = await response.json();
    
      setWeather([
        {
          id: data.id,
          cityname: data.name,
          icon: data.weather[0].icon,
          temperature: data.main.temp,
        },
      ]);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [name]);

  return (
    <div className="container">
      <SearchBox ChangeHandler={ChangeHandler} />
      <Display weather={weather} />
    </div>
  );
}
