import React from 'react';
import Button from '../../Button';
import MessageBox from '../index';
export default function LinkDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <MessageBox messageTitle={'自定义标题'} messageMain={'自定义内容'}>
        <Button type="text">弹窗</Button>
      </MessageBox>
    </div>
  );
}
