import React from 'react';
import Button from '../index';

export default function ButtonDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button type="primary" >基础按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="danger">危险按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="info">信息按钮</Button>
    </div>
  );
}
