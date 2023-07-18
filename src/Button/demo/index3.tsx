import React from 'react';
import Button from '../index';

export default function ButtonDemo2() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button type="primary" width={100} height={50} radius={10}>基础按钮</Button>
      <Button type="success" width={130} height={60} radius={20}>成功按钮</Button>
      <Button type="danger" width={150} height={65} radius={30}>危险按钮</Button>
      <Button type="warning" width={180} height={70} radius={40}>警告按钮</Button>
      <Button type="info" width={200} height={75} radius={50}>信息按钮</Button>
    </div>
  );
}