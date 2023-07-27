import React from 'react';
import Avatar from '..';

export default function AvatarDemo2() {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Avatar
          size="lg"
          src="https://avatars.githubusercontent.com/u/12124478?v=4&size=64"
        ></Avatar>
        <Avatar
          size="md"
          src="https://avatars.githubusercontent.com/u/12124478?v=4&size=64"
        ></Avatar>
        <Avatar
          size="sm"
          src="https://avatars.githubusercontent.com/u/12124478?v=4&size=64"
        ></Avatar>
        <Avatar
          size="xs"
          src="https://avatars.githubusercontent.com/u/12124478?v=4&size=64"
        ></Avatar>
      </div>
      <br />
      <hr />
      <div style={{ display: 'flex' }}>
        <Avatar
          circle={true}
          src="https://avatars.githubusercontent.com/u/12124478?v=4&size=64"
        ></Avatar>
        <Avatar src="https://avatars.githubusercontent.com/u/29560987?v=4&size=64"></Avatar>
        <Avatar src="https://avatars.githubusercontent.com/u/2797600" circle></Avatar>
        <Avatar src="https://avatars.githubusercontent.com/u/2883231?v=4&size=64"></Avatar>

        <Avatar src="https://avatars.githubusercontent.com/u/26999792?v=4&size=64"></Avatar>
        <Avatar src="https://avatars.githubusercontent.com/u/69044080?v=4&size=64"></Avatar>
        <Avatar src="https://avatars.githubusercontent.com/u/24516654?v=4&size=64"></Avatar>
        <Avatar src="https://avatars.githubusercontent.com/u/15975785?v=4&size=64"></Avatar>
        <Avatar src="https://avatars.githubusercontent.com/u/23313167?v=4&size=64"></Avatar>
      </div>
    </div>
  );
}
