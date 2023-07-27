import React, { FC, memo, useMemo } from 'react';
import { LoadingProps } from './interface';
import Css from './index.module.less';

const Loading: FC<LoadingProps> = memo((props) => {
  const { size, text, center, backColor } = props;
  const LoadingStyle = useMemo(() => {
    if (!size && size !== 'lg' && size !== 'md' && size !== 'sm' && size !== 'xs') {
      return 'md';
    }

    return size as any;
  }, [size]);
  const Center = useMemo(() => {
    if (!center) {
      return '';
    }
    return 'center ';
  }, [center]);
  const bgColor = useMemo(() => {
    let Color = {
      background: '',
    };
    if (backColor) {
      Color.background = backColor;
    }
    return Color;
  }, [center]);
  return (
    <div className={[Css[LoadingStyle], Css['default']].join(' ')} style={bgColor}>
      <div className={[Css[Center], Css['el']].join(' ')}>
        <span className={Css['loader']}></span>
        <p>{text}</p>
      </div>
    </div>
  );
});

export default Loading;
