import React from 'react';
import Avatar from '..';

export default function AvatarDemo3() {
  return (
    <div style={{ display: 'flex' }}>
      <Avatar
        circle={true}
        src="https://xsgames.co/randomusers/assets/avatars/pixel/51.jpg"
      ></Avatar>
      <Avatar src="https://avatars.githubusercontent.com/u/9625224" alt="图片走丢喽"></Avatar>
      <Avatar src="https://avatars.githubusercontent.com/u/2797600" circle></Avatar>
      <Avatar src="https://avatars.githubusercontent.com/u/2883231?v=4&size=64"></Avatar>
    </div>
  );
}
