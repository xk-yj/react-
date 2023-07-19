import React from 'react';
import Button from '../index';

export default function ButtonDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button type="primary" disabled={true}>
        基础按钮
      </Button>
      <Button type="success" disabled={true}>
        成功按钮
      </Button>
      <Button type="danger" disabled={true}>
        危险按钮
      </Button>
      <Button type="warning" disabled={true}>
        警告按钮
      </Button>
      <Button type="info" disabled={true}>
        信息按钮
      </Button>
    </div>
  );
}
