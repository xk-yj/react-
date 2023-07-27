import React, { useMemo, FC, memo, useEffect, useState, useRef } from 'react';
import Css from './index.module.less';
import { RadioGroupProps, NativeRadioGroupProps } from './interface';

const RadioGroupButton: FC<RadioGroupProps & NativeRadioGroupProps> = memo((props) => {
  let { value, defaultValue, label, disabled, size, onchange } = props;

  useEffect(() => {
    let input = document.getElementsByTagName('input');

    Array.from(input).forEach((item) => {
      if (defaultValue == item.id) {
        ChangeColor(item);
      }
    });
  }, []);

  size = size ? size : 'medium';
  disabled = disabled ? disabled : false;

  function radioChange(e: any) {
    if (e.target.nodeName === 'INPUT') {
      ChangeColor(e.target);
      return onchange ? onchange() : null;
    }
  }

  function ChangeColor(el: any) {
    let labels = document.getElementsByTagName('label');

    Array.from(labels).forEach((item: any) => {
      if (item.previousElementSibling.name == value) {
        if (item == el.nextSibling) {
          item.style.color = 'white';
          item.parentElement.style.border = '1px solid blue';
          item.parentElement.style.backgroundColor = 'blue';
        } else {
          if (item.previousElementSibling.disabled) {
            item.style.color = '#ccc';
          } else {
            item.style.color = '#000';
          }
          item.parentElement.style.border = '1px solid #ccc';
          item.parentElement.style.backgroundColor = 'transparent';
        }
      }
    });
  }

  return (
    <div className={Css['radioGroupButton']}>
      <div className={Css[size as any]} onClick={(e: any) => radioChange(e)}>
        <input
          type="radio"
          name={value}
          id={label}
          disabled={disabled}
          style={{ display: 'none' }}
        />
        <label htmlFor={label} style={{ color: disabled ? '#ccc' : '#000' }}>
          {label}
        </label>
      </div>
    </div>
  );
});

export default RadioGroupButton;
