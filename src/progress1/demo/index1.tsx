import React from 'react';
import Prog from '../index';

const example = () => {
  return (
    <div>
      <Prog percentage={100} />
      <Prog percentage={80} color="green" />
      <Prog percentage={70} color="yellow" />
      <Prog percentage={60} color="red" />
      <Prog percentage={50} color="pink" />
    </div>
  );
};

export default example;
