import React from "react";
import { Weather } from "./Weather.";

export const CountryDetailsView = ({ country }) => {
    return (
        <div>
            <h2>{country.name.common}</h2>
            <img src={country.flags[1]} alt='singleCountry.name.common' />
            <h3>Languages: </h3>
            <ul>
                {Object.values(country.languages).map(language => (<li key={country.cca3}>{language}</li>))}
            </ul>
            <h3>Capital: </h3>
            <ul>
                {Object.values(country.capital).map(capital => (<li key={country.cca3}>{capital}</li>))}
            </ul>
            <h3>Population: </h3>
            <p>{country.population}</p>
            <h3>Weather in {country.capital}</h3>
            <Weather city={country.capital}/>
        </div>
    )
}; 