import React from 'react';
import Prog from '../index';

const example = () => {
  return (
    <div>
      <Prog percentage={100} />
      <Prog percentage={80} strokeheight={10} color="green" />
      <Prog percentage={70} color="yellow" strokeheight={14} />
    </div>
  );
};

export default example;
