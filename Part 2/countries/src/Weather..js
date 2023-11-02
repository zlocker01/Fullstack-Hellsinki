import React, { useState, useEffect } from "react";
import axios from "axios";

export const Weather = ({ city }) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  
  const api = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
  const [weatherreport, setweatherreport] = useState([]);

  const hook2 = () => {
    axios.get(api).then((response) => {
      setweatherreport(response.data);
    });
  };
  
  useEffect(hook2, [api]);
  console.log(weatherreport);
  return (
    <div>
      <div>
        <b>Temperature is: </b> {weatherreport?.current?.temperature} Celsius
      </div>
      <div>
        <img
          alt="Sky view"
          src={weatherreport?.current?.weather_icons}
          height="50"
          width="50"
        />
      </div>
      <div>
        <b>Wind: </b>
        {weatherreport?.current?.wind_speed} MPH Direction{" "}
        {weatherreport?.current?.wind_dir}
      </div>
    </div>
  );
};
