import { useState } from 'react';

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([]);

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * props.anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVotes = () => {
    const newVotes = [...votes];
    newVotes[selected] = (newVotes[selected] || 0) + 1
    setVotes(newVotes)
  };


  const anecdoteWithMostVotes = () => {
    let maxVotes = -1;
    let maxVotedAnecdote = '';
    
    for(let anecdote in votes){
      if(votes[anecdote] > maxVotes){
        maxVotes = votes[anecdote];
        maxVotedAnecdote = props.anecdotes[anecdote];
      };
    };

    return maxVotedAnecdote;
  };

  return (
    <idv>
      <div>{props.anecdotes[selected]}</div>
      <h5>Anécdota con más votos</h5>
      <div>{anecdoteWithMostVotes() || 'No hay votos aún'}</div>
      <div>Votos: {votes[selected] || 0}</div>
      <button onClick={handleNextAnecdote}>Siguiente Anecdota⬆🖥️</button>
      <button onClick={handleVotes}>Votar👍</button>
    </idv>
  );
};


const anecdotes = [
  'Si duele, hazlo más a menudo',
  'Agregar personal a un proyecto de software atrasado lo atrasa más',
  'El primer 90 por ciento del código representa el primer 90 por ciento del tiempo de desarrollo... El 10 por ciento restante del código representa el otro 90 por ciento del tiempo de desarrollo',
  'Cualquier tonto puede escribir código que una computadora pueda entender. Los buenos programadores escriben código que los humanos pueden entender',
  'La optimización prematura es la raíz de todo mal',
  'Depurar es el doble de difícil que escribir el código en primer lugar. Por lo tanto, si escribes el código lo más ingeniosamente posible, por definición, no eres lo suficientemente inteligente para depurarlo'
];

export { App, anecdotes };
