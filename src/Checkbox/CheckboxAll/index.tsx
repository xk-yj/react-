import React, { useMemo, FC, memo, useEffect, useState, useRef } from 'react';
import Css from '../Checkbox.module.less';
import { CheckboxProps, NativeCheckboxProps } from './interface';
import Icon from '../../Icon';

const Checkbox: FC<CheckboxProps & NativeCheckboxProps> = memo((props) => {
  let { autoFocus, checked, defaultChecked, disabled, onChange } = props;

  defaultChecked = !defaultChecked ? false : defaultChecked;
  let [check, setChecked] = useState(defaultChecked);

  disabled = !disabled ? false : disabled;

  // 值改变触发
  function changeValue(e: any) {
    setChecked(!check); // 异步
    return onChange ? onChange(e, { checked: !check }) : null;
  }

  return (
    <div className={Css['checkbox']}>
      <span className={[check ? Css['checked'] : '', Css['check']].join(' ')}>
        <input
          type="checkbox"
          disabled={disabled}
          checked={check || checked}
          onChange={(e) => changeValue(e)}
          name=""
          id=""
        />
      </span>
      {props.children}
    </div>
  );
});

export default Checkbox;
