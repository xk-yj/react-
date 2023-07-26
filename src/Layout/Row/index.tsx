import React, { FC, memo } from 'react';
import Css from '../index.module.less';
import { RowProps } from './interface';

const CheckboxGroup: FC<RowProps> = memo(({ justify, align, children, style = {}, className }) => {
  let rowStyle = {
    ...style,
    justifyContent: 'start',
    alignItems: 'state',
  };

  if (
    justify !== 'start' &&
    justify !== 'end' &&
    justify !== 'center' &&
    justify !== 'space-around' &&
    justify !== 'space-between'
  ) {
    justify = 'start';
  }
  rowStyle.justifyContent = justify;

  if (align !== 'start' && align !== 'center' && align !== 'end') {
    align = 'state';
  }
  rowStyle.alignItems = align;

  return (
    <div className={[Css['row'], className ? className : ''].join(' ')} style={rowStyle}>
      {children}
    </div>
  );
});

export default CheckboxGroup;
