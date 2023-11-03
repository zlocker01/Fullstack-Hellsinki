import React from 'react';

export const Filter = ({ searchTerm, handleNewSearch }) => {
    return (
        <div>
        Search Contact: <input 
        value={searchTerm}
        onChange={handleNewSearch}
        />
        </div>
    );
};