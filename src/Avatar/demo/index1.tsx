import React from 'react';
import Avatar from '..';

export default function AvatarDemo() {
  return (
    <div style={{ display: 'flex' }}>
      <Avatar
        circle={true}
        size="lg"
        src="https://avatars.githubusercontent.com/u/14308293"
      ></Avatar>
      <Avatar size="lg" src="https://avatars.githubusercontent.com/u/10924138"></Avatar>
    </div>
  );
}
