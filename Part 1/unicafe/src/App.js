import React, { useState } from 'react';

export const App = () => {
  // Component for statistics
  const StatisticLine = ({ text, value }) => {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    );
  };

  // Component for button event triggering
  const Button = ({ text, handleClick }) => {
    return (
      <button onClick={handleClick}>{text}</button>
    );
  };

  //states for buttons
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // buttons event handles
  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  // calculating statistics formule
  const total = good + neutral + bad;
  const average = (good - bad) / total || 0;
  const positivePercentage = (good / total) * 100 || 0;


  // rendering
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" handleClick={handleGoodClick} />
      <Button text="Neutral" handleClick={handleNeutralClick} />
      <Button text="Bad" handleClick={handleBadClick} />

      {total === 0 ? (
        <p>No Feedback Given Yet</p>
      ) : (
        <div>
          <h2>Statistics</h2>
          <table>
            <tbody>
              <StatisticLine text="Good" value={good} />
              <StatisticLine text="Neutral" value={neutral} />
              <StatisticLine text="Bad" value={bad} />
              <StatisticLine text="Total" value={total} />
              <StatisticLine text="Avergae Score" value={average} />
              <StatisticLine text="Positive Porcentaje" value={`${positivePercentage}%`} />
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

