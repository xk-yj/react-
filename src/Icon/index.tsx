import React, { FC, memo } from 'react';
import icons from '../util/IconPath';
import { IconProps } from './interface';

const Icon: FC<IconProps> = ({ name, size, path, className }) => {
  let style = {
    width: '16px',
    height: '16px',
  };

  if (size) {
    if (typeof size === 'string') {
      if (size.includes('%') || size.includes('px')) {
        style.width = size;
        style.height = size;
      }
    } else if (size * 1) {
      style.width = size + 'px';
      style.height = size + 'px';
    }
  }

  if (path) {
    return <img src={path} className={className ? className : ''} style={style} alt="Icon" />;
  }
  if (Object.keys(icons).includes(name)) {
    return (
      <>
        <img src={icons[name]} className={className ? className : ''} style={style} alt="Icon" />
      </>
    );
  }
  return null;
};

export default Icon;
