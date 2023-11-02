import React, { useState, useEffect } from "react";
import axios from "axios";

export const Weather = ({ city }) => { 
  const apiKey = process.env.REACT_APP_API_KEY;
  const location = city[0];
  const api = `http://api.weatherstack.com/current${apiKey}${location}`;

  const [weatherReport, setweatherReport] = useState([]);

  const hook2 = () => {
  axios.get(api)
    .then((response) => {
      setweatherReport(response.data);
    });
  };
  
  useEffect(hook2, [api]);
  console.log(api);
  return (
    <div>
      <div>
        <b>Temperature is: </b> {weatherReport.current.temperature} Celsius
      </div>
      <div>
        <img
          alt="Sky view"
          src={weatherReport.current.weather_icons}
          height="50"
          width="50"
        />
      </div>
      <div>
        <b>Wind: </b>
        {weatherReport.current.wind_speed} MPH Direction{" "}
        {weatherReport.current.wind_dir}
      </div>
    </div>
  );
};
