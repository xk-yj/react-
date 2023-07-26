import React from 'react';
import Popover from '..';
import Button from '../../Button';

export default function () {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Popover
        trigger="hover"
        title={<h5>自定义标题</h5>}
        content={
          <div style={{ textAlign: 'center' }}>
            <h3>确定删除吗</h3>
            <Button type="text">取消</Button>
            <Button>确定</Button>
          </div>
        }
        width={300}
      >
        <Button>hover</Button>
      </Popover>
    </div>
  );
}
