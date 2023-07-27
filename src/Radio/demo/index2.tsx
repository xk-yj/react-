import React from 'react';
import Radio from '../Radio';

export default function index1() {
  return (
    <div style={{ display: 'flex' }}>
      <Radio value={'radio1'} label={'禁用'} disabled={true}>
        禁用
      </Radio>
    </div>
  );
}
