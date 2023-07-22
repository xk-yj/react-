import React from 'react';
import InputNumber from '../index';
export default function InputNumberDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', userSelect: 'none' }}>
      <InputNumber max={10} value={1} min={0} controlsPosition="center" width={200} height={50} />
      <InputNumber max={10} value={1} min={0} controlsPosition="left" width={200} height={60} />
      <InputNumber max={10} value={1} min={0} controlsPosition="rigth" width={300} height={70} />
    </div>
  );
}
