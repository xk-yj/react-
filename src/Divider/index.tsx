import React, { useMemo, FC, memo, useEffect, useState, useRef } from 'react';
import Css from './Divider.module.less';
import { DividerProps, NativeDividerProps } from './interface';

const Divider: FC<DividerProps & NativeDividerProps> = memo((props) => {
  let { title, direction, contentPosition } = props;

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
        <hr align={'center'} width={leftNum + '%'} color={'#ccc'} size={1} />
        <p style={{ display: title ? 'block' : 'none' }}>{title}</p>
        <hr align={'center'} width={rightNum + '%'} color={'#ccc'} size={1} />
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
