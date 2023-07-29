import React, { useState } from 'react';
import Progress from '..';
import '../Progress.module.less';
import Button from '../../Button';
export default function ProgressDemo() {
  const [percent, setPercent] = useState(30);
  let decline = () => {
    let value = Math.max(percent - 10, 0);
    setPercent(value);
  };
  let increase = () => {
    let value = Math.min(percent + 10, 100);
    setPercent(value);
  };
  return (
    <div>
      <Button handleClick={decline}>-</Button>
      <Button handleClick={increase}>+</Button>
      <Progress percent={percent} status="success"></Progress>
    </div>
  );
}
