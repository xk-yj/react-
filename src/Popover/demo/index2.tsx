import React from 'react';
import Popover from '..';
import Button from '../../Button';

export default function () {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Popover placement="top">
        <Button>hover</Button>
      </Popover>
      <Popover placement="rigth">
        <Button>hover</Button>
      </Popover>
      <Popover placement="left">
        <Button>hover</Button>
      </Popover>
      <Popover placement="bottom">
        <Button>hover</Button>
      </Popover>
    </div>
  );
}
