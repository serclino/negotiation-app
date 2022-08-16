import React, { useState, useEffect } from "react";

export const PopUp = ({ min, setMin, max, setMax, setTab }) => {
  const [weatherData, setWeatherData] = useState({
    name: "Praha",
    weather: "",
    icon: "",
    temp: "",
  });
  
  const api_key = `${process.env.REACT_APP_WEATHER_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Prague&lang=cz&units=metric&appid=${api_key}`
      );
      const data = await response.json();
      setWeatherData((prev) => ({
        ...prev,
        weather: data.weather[0].description,
        icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
        temp: Math.floor(data.main.temp),
      }));
    };
    fetchData();
  }, [api_key]);

  const getOutcome = (min, max) => {
    if (min < max || min === max) {
      return "Úspěch! 🤝";
    } else {
      return "Nevyšlo to... 😟";
    }
  };

  const reset = () => {
    setMin(null);
    setMax(null);
    setTab("zaměstnavatel");
  };

  return (
    <div className="popup">
      <div className="weather">
        {!weatherData.weather ? (
          <p style={{ marginRight: "15px" }}>Načítání počasí...</p>
        ) : (
          <>
            <p>
              {weatherData.name}, {weatherData.temp} °C, {weatherData.weather}
            </p>
            <img src={weatherData.icon} alt="weather-icon" />
          </>
        )}
      </div>
      <h1>{getOutcome(min, max)}</h1>
      <p>
        Max. nabídka zaměstnavatele: <br /> <b>{max} Kč</b>
      </p>
      <p>
        Min. očekávaná mzda zaměstnance: <br /> <b>{min} Kč</b>
      </p>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
};
