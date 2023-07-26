import React from 'react';
import Popover from '..';
import Button from '../../Button';

export default function () {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Popover trigger="hover">
        <Button>hover</Button>
      </Popover>
      <Popover trigger="click">
        <Button>click</Button>
      </Popover>
      <Popover trigger="focus">
        <Button>focus</Button>
      </Popover>
    </div>
  );
}
