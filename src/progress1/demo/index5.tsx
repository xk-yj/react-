import React from 'react';
import Prog from '../index';

const example = () => {
  return (
    <div>
      <Prog percentage={100} type="circle" />
      <Prog percentage={50} type="circle" color="yellow" />
      <Prog percentage={30} type="circle" color="green" />
    </div>
  );
};

export default example;
