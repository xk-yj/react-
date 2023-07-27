import React from 'react';
import Card from '..';
import Button from '../../Button';

export default function index1() {
  return (
    <div>
      <Card
        title={'卡片名称'}
        shadow={'hover'}
        extra={<Button type="text">操作按钮</Button>}
        bodyStyle={{ padding: '12px' }}
      >
        <p>列表内容1</p>
        <p>列表内容2</p>
        <p>列表内容3</p>
        <p>列表内容4</p>
      </Card>
    </div>
  );
}
