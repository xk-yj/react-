import React, { FC, memo } from 'react';
import Css from '../index.module.less';
import { ColProps } from './interface';

const CheckboxGroup: FC<ColProps> = memo(({ grow, style = {}, className, gutter, children }) => {
  let colStyle = {
    ...style,
    width: grow ? (grow <= 10 ? grow * 10 + '%' : 0) : 0,
    margin: '0 0',
  };

  if (gutter) {
    if (typeof gutter === 'string') {
      if (gutter.includes('%')) {
        colStyle.margin = `0 ${parseInt(gutter) / 2 + '%'}`;
      } else if (gutter.includes('px')) {
        colStyle.margin = `0 ${parseInt(gutter) / 2 + 'px'}`;
      }
    } else if (gutter * 1) {
      colStyle.margin = `0 ${gutter / 2 + 'px'}`;
    }
  } else {
    colStyle.margin = `0 0`;
  }

  return (
    <div className={[Css['col'], className ? className : ''].join(' ')} style={colStyle}>
      {children}
    </div>
  );
});

export default CheckboxGroup;
