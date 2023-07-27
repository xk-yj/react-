import React, { useState, FC, memo } from 'react';
import Css from './index.module.less';
import { InputNumberProps } from './interface';

const InputNumber: FC<InputNumberProps> = memo(
  ({ value, min, max, width, height, disabled, change, blur, focus, controlsPosition }) => {
    let [num, setNum] = useState(value ? value : 0);
    let [active, setActive] = useState(false);

    let style = {
      width: '150px',
      height: '45px',
    };

    let position = '';

    if (!max) {
      max = 99999999;
    }

    if (!min) {
      min = 0;
    }

    if (controlsPosition === 'left') {
      position = 'left';
    } else if (controlsPosition === 'rigth') {
      position = 'rigth';
    }

    if (width) {
      if (typeof width === 'string') {
        if (width.includes('%') || width.includes('px')) {
          style.width = width;
        }
      } else if (width * 1) {
        style.width = width + 'px';
      }
    }

    if (height) {
      if (typeof height === 'string') {
        if (height.includes('%') || height.includes('px')) {
          style.height = height;
        }
      } else if (height * 1) {
        style.height = height + 'px';
      }
    }

    const minus = () => {
      if (num <= min) {
        setNum(min);
      } else if (!disabled) {
        setNum(num - 1);
      }
      return change ? change({ value: num }) : null;
    };

    const add = () => {
      if (num >= max) {
        setNum(max);
      } else if (!disabled) {
        setNum(num + 1);
      }
      return change ? change({ value: num }) : null;
    };

    const handleFocus = () => {
      setActive(true);
      return focus ? focus({ value: num }) : null;
    };

    const handleBlur = () => {
      setActive(false);
      return blur ? blur({ value: num }) : null;
    };

    let className = [
      Css['input_number'],
      disabled ? Css['disabled'] : '',
      !disabled ? Css['defaule'] : '',
      position ? Css[position] : '',
      active ? Css['active'] : '',
    ].join(' ');

    return (
      <div className={className} style={style}>
        <span
          className={Css.minus}
          onClick={() => {
            minus();
          }}
        ></span>
        <input
          className={Css.input}
          disabled={disabled}
          type="text"
          min={min}
          max={max}
          value={num}
          onBlur={() => {
            handleBlur();
          }}
          onFocus={() => {
            handleFocus();
          }}
        />
        <span
          className={Css.add}
          onClick={() => {
            add();
          }}
        ></span>
      </div>
    );
  },
);
export default InputNumber;
