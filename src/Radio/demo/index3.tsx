import React from 'react';
import Radio from '../Radio';
import RadioGroupButton from '../RadioGroupButton';

export default function index3() {
  let radio = 'radio2';
  return (
    <div>
      <Radio defaultValue={3} value={radio} label={3}>
        备选项
      </Radio>
      <Radio value={radio} label={6}>
        备选项
      </Radio>
      <Radio value={radio} label={9}>
        备选项
      </Radio>
    </div>
  );
}
