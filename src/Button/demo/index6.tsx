import React from 'react';
import Button from '../index';

export default function ButtonDemo3() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button handleClick={() => {alert('点击了')}}>基础按钮</Button>
    </div>
  );
}
