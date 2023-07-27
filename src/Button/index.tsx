import React, { FC, memo } from 'react';
import Css from './index.module.less';
import { ButtonProps } from './interface';

const Button: FC<ButtonProps> = memo(
  ({ type, children, width, height, radius, handleClick, disabled }) => {
    let style = {
      width: '',
      height: '',
      borderRadius: '',
    };

    if (
      !type &&
      type !== 'danger' &&
      type !== 'warning' &&
      type !== 'success' &&
      type !== 'text' &&
      type !== 'info'
    ) {
      type = 'primary';
    }

    if (width) {
      if (typeof width === 'string') {
        if (width.includes('%') || width.includes('px')) {
          style.width = width;
        }
      } else if (width * 1) {
        style.width = width + 'px';
      }
    } else {
      style.width = '100px';
    }

    if (height) {
      if (typeof height === 'string') {
        if (height.includes('%') || height.includes('px')) {
          style.height = height;
        }
      } else if (height * 1) {
        style.height = height + 'px';
      }
    } else {
      style.height = '45px';
    }

    if (radius) {
      if (typeof radius === 'string') {
        if (radius.includes('%') || radius.includes('px')) {
          style.borderRadius = radius;
        }
      } else if (radius * 1) {
        style.borderRadius = radius + 'px';
      }
    }

    let className = [Css[type], disabled ? Css['disabled'] : ''].join(' ');

    return (
      <div className={Css.button}>
        <button
          style={style}
          className={className}
          onClick={
            !disabled
              ? () => {
                  handleClick ? handleClick() : null;
                }
              : () => {}
          }
        >
          <span>{children ? children : '按钮'}</span>
        </button>
      </div>
    );
  },
);

export default Button;
