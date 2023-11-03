import React from 'react';

export const Persons = ({ filteredPersons, onDelete }) => {
  const handleDelete = person => {
    const confirmDeletion = window.confirm(`Are you sure about to delete ${person.name}?`);
    if (confirmDeletion) {
      onDelete(person);
    }
  };

    return (
      <ul>
        {filteredPersons.map(person => (
          <li key={person.name}>
            {person.name} - {person.number}
            <button onClick={() => handleDelete(person)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };