import React from 'react';

export const PersonForm = ({ addPerson, handleNewNumber, newNumber, handleChangeName, newName }) => {
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