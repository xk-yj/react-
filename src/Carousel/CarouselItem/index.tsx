import React, { FC, memo } from 'react';
import Css from '../index.module.less';
import { CarouselItemlProps } from './interface';

const CarouselItem: FC<CarouselItemlProps> = memo(({ children, className, style }) => {
  return (
    <div className={[Css['carousel_item'], className].join(' ')} style={style}>
      {children}
    </div>
  );
});

export default CarouselItem;
