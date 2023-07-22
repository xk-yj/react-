import React from 'react';
import InputNumber from '../index';
export default function InputNumberDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', userSelect: 'none' }}>
      <InputNumber max={10} value={1} min={0} controlsPosition="center" disabled={true} />
      <InputNumber max={10} value={1} min={0} controlsPosition="left" disabled={true} />
      <InputNumber max={10} value={1} min={0} controlsPosition="rigth" disabled={true} />
    </div>
  );
}
