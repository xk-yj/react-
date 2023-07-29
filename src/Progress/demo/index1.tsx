import React from 'react';
import Progress from '..';
import '../Progress.module.less';
export default function ProgressDemo() {
  return (
    <div>
      <Progress></Progress>
      <Progress percent={30}></Progress>
      <Progress percent={50} status="fail"></Progress>
      <Progress percent={70} status="active"></Progress>
      <Progress percent={100} status="success"></Progress>
    </div>
  );
}
