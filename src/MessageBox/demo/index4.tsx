import React from 'react';
import Button from '../../Button';
import MessageBox from '../index';
export default function LinkDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <MessageBox
        handleSubmit={() => {
          alert('提交');
        }}
      >
        <Button type="text">弹窗</Button>
      </MessageBox>
    </div>
  );
}
