import React, { FC, memo } from 'react';
import Css from './index.module.less';
import { CardProps } from './interface';

const Card: FC<CardProps> = memo(
  ({ title, extra, bodyStyle, shadow, width, height, border, children }) => {
    shadow = shadow ? shadow : 'always';
    title = title ? title : null;
    extra = extra ? extra : null;
    let style: any = {
      width: '300px',
      border: '1px solid #b1b3b8',
    };

    if (width) {
      style.width = width;
    }
    if (height) {
      style.height = height;
    }
    if (border) {
      style.border = border;
    }

    return (
      <div className={Css['Card']} style={style as any}>
        <div className={Css[shadow as any]}>
          <div
            className={Css['header']}
            style={{ opacity: title == null && extra == null ? 0 : 1 }}
          >
            <div className={Css['left']}>
              <p>{title}</p>
            </div>
            <div className={Css['right']}>{extra}</div>
          </div>
          <div style={bodyStyle}>{children}</div>
        </div>
      </div>
    );
  },
);

export default Card;
