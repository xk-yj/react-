import React, { useState } from 'react';
import CheckboxAll from '../CheckboxAll';
import CheckboxGroup from '../CheckboxGroup';

export default function index1() {
  let [checkAll, setcheckAll] = useState(false);

  let [defaultValue, setDefaultValue] = useState([
    {
      title: 'Apple',
      checked: true,
    },
    {
      title: 'Pear',
      checked: false,
    },
    {
      title: 'Orange',
      checked: true,
    },
  ]);

  // 全选
  function onCheckAllChange(e: any, value: any) {
    setcheckAll(value.checked);
    let newDefaultValue: any = [];
    defaultValue.forEach((v) => {
      v.checked = !checkAll;
      newDefaultValue.push(v);
    });
    setDefaultValue(newDefaultValue);
  }

  function onChange(list: any) {
    let value = list.every((v: any) => v.checked);
    setcheckAll(value);
  }

  return (
    <div>
      <CheckboxAll checked={checkAll} onChange={onCheckAllChange}>
        Check all
      </CheckboxAll>
      <CheckboxGroup disabled={false} options={defaultValue} onChange={onChange}></CheckboxGroup>
    </div>
  );
}
