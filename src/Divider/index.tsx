import React, { FC, memo } from 'react';
import Css from './index.module.less';
import { DividerProps } from './interface';

const Divider: FC<DividerProps> = memo(({ title, direction, contentPosition }) => {
  title = title ? title : null;
  direction = direction ? direction : 'horizontal';
  contentPosition = contentPosition ? contentPosition : 'center';

  let leftNum = null;
  let rightNum = null;

  if (contentPosition == 'left') {
    leftNum = 20;
    rightNum = 80;
  }

  if (contentPosition == 'right') {
    leftNum = 80;
    rightNum = 20;
  }

  if (contentPosition == 'center') {
    leftNum = 50;
    rightNum = 50;
  }

  return (
    <div className={Css['divider']}>
      <div
        style={{ display: direction == 'horizontal' ? 'flex' : 'none' }}
        className={Css['horizontal']}
      >
        <hr style={{ width: leftNum + '%' }} color={'#b1b3b8'} />
        <p style={{ display: title ? 'block' : 'none' }}>{title}</p>
        <hr style={{ width: leftNum + '%' }} color={'#b1b3b8'} />
      </div>
      <div
        style={{ display: direction == 'vertical' ? 'inline-block' : 'none' }}
        className={Css['vertical']}
      >
        <span>|</span>
      </div>
    </div>
  );
});

export default Divider;
