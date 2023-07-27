import React from 'react';
import Avatar from '..';

export default function AvatarDemo2() {
  return (
    <div style={{ display: 'flex' }}>
      <Avatar style={{ background: 'grey' }} circle={true}>
        HG
      </Avatar>
      <Avatar style={{ background: 'black' }}>ka</Avatar>
      <Avatar circle style={{ background: '#ffc83d' }}>
        ka
      </Avatar>
      <Avatar style={{ background: '#93505b' }}>YYD</Avatar>
    </div>
  );
}
