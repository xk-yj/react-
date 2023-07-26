import React, { useMemo, FC, memo } from 'react';
import Css from './input.module.less';
import { InputProps, InputStyle, NativeInputProps } from './interface';
const Input: FC<InputProps & NativeInputProps> = memo(
  ({
    type,
    width,
    height,
    bordered,
    defaultValue,
    value,
    disabled,
    inputBorder,
    handleChange,
    handleBlur,
    handleFcus,
  }) => {
    let style = {
      width: '120px',
      height: '34px',
    };

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

    let className: any = [
      !bordered ? Css['bordered'] : '',
      !inputBorder ? Css['inputBorder'] : '',
      disabled ? Css['disabled'] : '',
    ].join(' ');

    return (
      <div className={Css['input']}>
        <input
          type={type ? type : 'text'}
          placeholder={defaultValue ? defaultValue : '请输入内容'}
          disabled={disabled}
          className={className}
          style={style}
          value={value}
          onChange={(e) => (handleChange ? handleChange({ value: e.currentTarget.value }) : null)}
          onBlur={() => {
            handleBlur ? handleBlur({ value: e.currentTarget.value }) : null;
          }}
          onFocus={() => {
            handleFcus ? handleFcus({ value: e.currentTarget.value }) : null;
          }}
        />
      </div>
    );
  },
);

export default Input;
