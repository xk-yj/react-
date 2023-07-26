import React, { useState } from 'react';
import Checkbox from '../CheckboxAll';
import Button from '../../Button';

export default function index2() {
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const toggleChecked = () => {
    setChecked(!checked);
  };
  const toggleDisable = () => {
    setDisabled(!disabled);
  };

  return (
    <div>
      <Checkbox disabled={disabled} checked={checked}></Checkbox>
      <div style={{ display: 'flex' }}>
        <Button handleClick={() => toggleChecked()}>选中</Button>
        <Button type="info" handleClick={() => toggleDisable()}>
          禁用
        </Button>
      </div>
    </div>
  );
}
