import React from 'react';
import Radio from '../Radio';

export default function index5() {
  let radio = 'radio7';
  return (
    <div style={{ display: 'flex' }}>
      <Radio value={radio} label={13} border={true} size={'medium'}>
        备选项
      </Radio>
      <Radio defaultValue={16} value={radio} label={16} border={true} size={'small'}>
        备选项
      </Radio>
      <Radio value={radio} label={19} border={true} size={'mini'}>
        备选项
      </Radio>
    </div>
  );
}
