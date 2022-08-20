import React, { useState, useEffect } from "react";

export const PopUp = ({ min, setMin, max, setMax, setTab }) => {
  const [status, setStatus] = useState("loading");
  const [weatherData, setWeatherData] = useState({
    name: "Praha",
    weather: "",
    icon: "",
    temp: "",
  });

  const api_key = `${process.env.REACT_APP_WEATHER_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Prague&lang=cz&units=metric&appid=${api_key}`
        );
        if (response.status !== 200) {
          throw new Error(
            "Unexpected error occured while accessing API endpoint."
          );
        }
        const data = await response.json();
        setWeatherData((prev) => ({
          ...prev,
          weather: data.weather[0].description,
          icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
          temp: Math.floor(data.main.temp),
        }));
        setStatus("success");
      } catch (err) {
        console.log(err);
        setStatus("error");
      }
    };
    fetchData();
  }, [api_key]);

  const getOutcome = () => {
    if (min <= max) {
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
        {status === "loading" && (
          <p style={{ marginRight: "15px" }}>Načítání počasí...</p>
        )}
        {status === "success" && (
          <>
            <p>
              {weatherData.name}, {weatherData.temp} °C, {weatherData.weather}
            </p>
            <img src={weatherData.icon} alt="weather-icon" />
          </>
        )}
        {status === "error" && (
          <p style={{ marginRight: "15px" }}>Data o počasí nenačtena</p>
        )}
      </div>
      <h1>{getOutcome()}</h1>
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
