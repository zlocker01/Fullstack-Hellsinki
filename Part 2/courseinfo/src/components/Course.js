import React from 'react';
import { Header } from './Header';
import { Content } from './Content';

export const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};
