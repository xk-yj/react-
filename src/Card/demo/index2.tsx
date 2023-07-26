import React from 'react';
import Card from '..';

export default function index1() {
  return (
    <div>
      <Card shadow={'hover'} bodyStyle={{ padding: '12px' }}>
        <p>列表内容1</p>
        <p>列表内容2</p>
        <p>列表内容3</p>
        <p>列表内容4</p>
      </Card>
    </div>
  );
}
