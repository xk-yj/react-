import React, { useState } from 'react';
import Radio from '../Radio';

export default function index1() {
  return (
    <div style={{ display: 'flex' }}>
      <Radio defaultValue={'1'} value={'radio'} label={1}>
        备选项
      </Radio>
      <Radio value={'radio'} label={2}>
        备选项
      </Radio>
    </div>
  );
}
