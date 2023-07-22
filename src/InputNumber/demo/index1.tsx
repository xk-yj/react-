import React from 'react';
import InputNumber from '../index';
export default function InputNumberDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', userSelect: 'none' }}>
      <InputNumber max={10} value={1} min={0} />
    </div>
  );
}
