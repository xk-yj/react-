import React from 'react';
import Button from '../../Button';
import MessageBox from '../index';
export default function LinkDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <MessageBox messageMain={<h1>html标签</h1>} useHTMLString={true}>
        <Button type="text">弹窗</Button>
      </MessageBox>
    </div>
  );
}
