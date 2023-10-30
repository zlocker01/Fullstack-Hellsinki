import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CountryDetailsView } from './CountryDetailsView';

export function CountrieSearch() {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3/all')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error('Error ❌', error);
      });
  }, []);


  const handleSearch = () => {
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredCountries);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Buscar un país"
      />
      <button onClick={handleSearch}>Filter Countries</button>

      {showDetails ? (
        <CountryDetailsView country={selectedCountry} />
      ) : (
        <ul>
          {searchResults.map((country) => (
            <li key={country.cca3}>
              {country.name.common}
              <button
                onClick={() => {
                  setSelectedCountry(country);
                  setShowDetails(true);
                }}
              >
                Show
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}



