import React from 'react';
import Button from '../index';

export default function ButtonDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button type="primary" forbidden={true}>基础按钮</Button>
      <Button type="success" forbidden={true}>成功按钮</Button>
      <Button type="danger" forbidden={true}>危险按钮</Button>
      <Button type="warning" forbidden={true}>警告按钮</Button>
      <Button type="info" forbidden={true}>信息按钮</Button>
    </div>
  );
}