import React, { FC, memo } from 'react';
import Css from './index.module.less';
import Icon from '../Icon';
import { BacktopProps } from './interface';

const Backtop: FC<BacktopProps> = memo(({ right, bottom, topClick, children, show, className }) => {
  let style: any = {
    right: right ? right : '80px',
    bottom: bottom ? bottom : '200px',
    display: show ? 'block' : 'none',
  };

  function Top() {
    if (topClick) {
      topClick();
    }

    window.scrollTo({
      top: document.body.offsetTop,
      behavior: 'smooth',
    });
  }

  return (
    <div
      className={[Css.backtop, className ? className : ''].join(' ')}
      onClick={() => {
        Top();
      }}
      style={style}
    >
      {children || <Icon name={'arrow-single-updanjiantou-shang'} />}
    </div>
  );
});

export default Backtop;
