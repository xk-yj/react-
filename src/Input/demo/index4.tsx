import React from 'react';
import Input from '..';

export default function InputDemo4() {
  return (
    <div>
      <Input
        defaultValue="自定义事件"
        handleChange={({ value }: any) => {
          console.log(value);
        }}
      ></Input>
    </div>
  );
}
