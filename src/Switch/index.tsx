import React, { useEffect, useRef, useState, FC, memo } from 'react';
import Css from './index.module.less';
import { SwitchProps } from './interface';

const Switch: FC<SwitchProps> = memo(({ width, height, disabled, value = false, handleClick }) => {
  let [flag, setFlag] = useState(value);
  let [left, setLeft]: any = useState(0);
  const switchRef: any = useRef(null);

  const handle = () => {
    if (!disabled) {
      setFlag(!flag);
      let state = {
        value: !flag,
      };
      if (handleClick) {
        return handleClick(state);
      }
    }
  };

  let switchStyle = {
    width: '75px',
    height: '35px',
    borderRadius: '35px',
  };

  if (width) {
    if (typeof width === 'string') {
      if (width.includes('%') || width.includes('px')) {
        switchStyle.width = width;
      }
    } else if (width * 1) {
      switchStyle.width = width + 'px';
    }
  }

  if (height) {
    if (typeof height === 'string') {
      if (height.includes('%') || height.includes('px')) {
        switchStyle.height = height;
        switchStyle.borderRadius = parseInt(height) + 'px';
      }
    } else if (height * 1) {
      switchStyle.height = height + 'px';
      switchStyle.borderRadius = height + 'px';
    }
  }

  useEffect(() => {
    setLeft(switchRef.current.clientWidth - parseInt(switchStyle.height) + 'px');
  }, []);

  let className = [
    Css['switch'],
    flag ? Css['action'] : '',
    disabled && !flag ? Css['disabled1'] : '',
    disabled && flag ? Css['disabled2'] : '',
  ].join(' ');

  return (
    <div
      className={className}
      style={switchStyle}
      ref={switchRef}
      onClick={() => {
        handle();
      }}
    >
      <span
        style={{
          left: flag ? left : '2px',
          width: parseInt(switchStyle.height) - 4 + 'px',
          height: parseInt(switchStyle.height) - 4 + 'px',
        }}
      ></span>
    </div>
  );
});

export default Switch;
