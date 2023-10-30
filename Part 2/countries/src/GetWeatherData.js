// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { CountryDetailsView } from './CountryDetailsView';

// export const GetWeatherData = ({country}) => {
//     console.log(country.capital);
//     const [weather, setWeather] = useState([]);
    
//     useEffect(() => {
//         axios
//         .get('http://api.weatherstack.com/&{capital}')
//         .then((response) => {
//             setWeather(response.data);
//         })
//         .catch((error) => {
//         console.error('Error ❌', error);
//         });
//     }, []);

//     console.log(weather);

// };