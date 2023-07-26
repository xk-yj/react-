import React from 'react';
import Checkbox from '../CheckboxAll';

export default function index1() {
  const onChange = (e: any, checked: any) => {
    console.log(e);
    console.log(checked);
  };

  return (
    <div>
      <Checkbox defaultChecked={true} disabled={false} onChange={onChange}>
        多选框
      </Checkbox>
    </div>
  );
}
