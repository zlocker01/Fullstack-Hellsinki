import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({coursename}) => <h1>{coursename}</h1>;

const Part = ({name,exercises}) => {
  return (
    <p>{name} {exercises}</p>
  );
};

const Content = ({parts}) => {
  const [part1, part2, part3] = parts;
  return (
    <>
    <Part name = {part1.name} exercises={part1.exercises}/>
    <Part name = {part2.name} exercises={part2.exercises}/>
    <Part name = {part3.name} exercises={part3.exercises}/>
    </>
  );
};

const Total = ({parts}) => {
  const [part1, part2, part3]= parts;
  return (
    <p>Number of exercises - {part1.exercises+part2.exercises+part3.exercises}</p>
  )
};

const App = () => {
  const course = {
  name : "Half Stack application development",
  parts : [
    {
    name: "Fundamentals of React",
    exercises: 10
  },
  {
    name: "Using props to pass data",
    exercises: 7
  },
  {
    name: "State of a component",
    exercises: 14
  }
  ]
};

  return (
    <div>
      <Header coursename={course.name}/>
      <Content parts={course.parts}  />
      <Total parts={course.parts}    />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

