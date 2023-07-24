import React from 'react';
import Button from '../../Button';
import MessageBox from '../index';
export default function LinkDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <MessageBox>
        <Button type="text">弹窗</Button>
      </MessageBox>
    </div>
  );
}
