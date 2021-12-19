import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const CountryDetail = () => {
  const location = useLocation();
  const { detail } = location.state;
  const [val, setVal] = useState([]);
  const [weather, setWeather] = useState("");

  useEffect(() => {
    const res = async () => {
      const url = `https://restcountries.com/v3.1/name/${detail}`;
      const data = await fetch(url)
        .then((response) => response.json())
        .then((ret) => ret);
      setVal(data[0]);
    };
    res();
  }, [detail]);

  const handleWeather = async () => {
    const url1 = `http://api.weatherstack.com/current?access_key=a5dcb08cb0f618e8383e21a7596b3c3a&query=${val.capital}`;
    const res = await axios.get(url1).then((response) => response.data.current);
    setWeather(res);
    console.log(res);
  };

  return (
    <>
      {" "}
      <div className="countryItems">
        <h2>
          Capital : <span className="countryVal">{val.capital}</span>
        </h2>
        <h2>
          Population : <span className="countryVal">{val.population}</span>
        </h2>
        <h2>
          Lating : <span className="countryVal">{val.latlng}</span>
        </h2>
        <h2 className="countryVal4">
          Flag : <span className="countryFlag">{val.flag}</span>
        </h2>
        <button type="button" className="button2" onClick={handleWeather}>
          Capital Weather
        </button>
      </div>
      {weather && (
        <div className="weatherItems">
          <img src={weather.weather_icons} alt="pic" />
          <h2>
            Temperature :{" "}
            <span className="countryVal">{weather.temperature}</span>
            {""}
            <sup className="countryVal">&deg;c</sup>
          </h2>
          <h2>
            Humidity : <span className="countryVal">{weather.humidity}%</span>
          </h2>
          <h2>
            Pressure : <span className="countryVal">{weather.humidity}hPa</span>
          </h2>
          <h2>
            UV Index : <span className="countryVal">{weather.uv_index}</span>
          </h2>
          <h2>
            Wind :{" "}
            <span className="countryVal">
              {weather.wind_speed}kph {weather.wind_dir}
            </span>
          </h2>
        </div>
      )}
    </>
  );
};

export default CountryDetail;
