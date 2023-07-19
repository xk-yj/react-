import React from 'react';
import Switch from '../index';

export default function SwitchDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Switch />
      <Switch value={true} />
    </div>
  );
}
