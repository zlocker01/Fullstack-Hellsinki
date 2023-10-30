import React from 'react';
import { useState } from 'react';

const Filter = ({ searchTerm, handleNewSearch }) => {
      return (
        <div>
        Search Contact: <input 
        value={searchTerm}
        onChange={handleNewSearch}
        />
        </div>
      );
};

const PersonForm = ({ addPerson, handleNewNumber, newNumber, handleChangeName, newName }) => {
  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handleChangeName}
          />
          <br/>
          number: <input 
          value={newNumber}
          onChange={handleNewNumber}
          />
        </div>

        <div>
          <button>add</button>
        </div>
        
      </form>
    </div>
  );
};

const Persons = ({ filteredPersons }) => {
  return (
    <ul>
      {filteredPersons.map(person => (
        <li key={person.name}>
          {person.name} - {person.number}
        </li>
      ))}
    </ul>
  );
};


export const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);

  // hooks states
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  //event handles
  function handleChangeName(e) {
    setNewName(e.target.value);
  };

  function handleNewNumber(e) {
    setNewNumber(e.target.value);
  };

  function handleNewSearch(e) {
    setSearchTerm(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();
    
    const newPerson = { name: newName, number: newNumber };

    if (persons.some(person => person.name === newName) || persons.some(person => person.number === newNumber)) {
      alert(`${newName} ya está en la guía telefónica.`);
    } else {
      setPersons([...persons, newPerson]);
    }

    setNewName('');
    setNewNumber('');
  };

  const filteredPersons = persons.filter( person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    <div>
      <h2>Phonebook</h2>

      {/* component for filter */}
      <Filter 
        searchTerm={searchTerm} 
        handleNewSearch={handleNewSearch}
      />

      <h3>Add a New Contact</h3>

      {/* component for add persons */}
      <PersonForm 
      addPerson={addPerson}
      newName={newName}
      handleChangeName={handleChangeName}
      newNumber={newNumber}
      handleNewNumber={handleNewNumber}
      />

      <h2>Numbers</h2>

      {/* component for contacts info */}
      <Persons 
      filteredPersons={filteredPersons}
      />

    </div>
  );
};