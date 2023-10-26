import React from "react";
import { Part } from './Part';

export const Content = ({ parts }) => {
    const totalExercises = parts.reduce((sum, parts) => sum + parts.exercises, 0);
    
    return (
        <div>
            { parts.map( part => ( <Part key={part.id} part={part}/> ))}
            
            <p><strong>Total of { totalExercises } exercises.</strong></p>
        </div>
    );

};