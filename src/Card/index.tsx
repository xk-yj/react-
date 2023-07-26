import React, { useMemo, FC, memo, useEffect, useState, useRef } from 'react';
import Css from './Card.module.less';
import { CardProps, CardStyle, NativeCardProps } from './interface';

const Card: FC<CardProps & NativeCardProps> = memo((props) => {
  let { title, extra, bodyStyle, shadow, width, height, border } = props;

  shadow = shadow ? shadow : 'always';
  title = title ? title : null;
  extra = extra ? extra : null;

  const cardSize = useMemo(() => {
    var size: CardStyle = {
      width: '300px',
      border: '1px solid #ccc',
    };
    if (width) {
      size.width = width;
    }
    if (height) {
      size.height = height;
    }
    if (border) {
      size.border = border;
    }
    return size;
  }, [width, height, border]);

  return (
    <div className={Css['Card']} style={cardSize as any}>
      <div className={Css[shadow as any]}>
        <div className={Css['header']} style={{ opacity: title == null && extra == null ? 0 : 1 }}>
          <div className={Css['left']}>
            <p>{title}</p>
          </div>
          <div className={Css['right']}>{extra}</div>
        </div>
        <div style={bodyStyle}>{props.children}</div>
      </div>
    </div>
  );
});

export default Card;
