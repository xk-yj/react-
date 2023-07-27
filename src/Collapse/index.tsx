import React, { useState, FC, memo, useRef, useMemo } from 'react';
import Css from './index.module.less';
import { CollapseProps, CollapseStyle, NativeButtonProps } from './interface';
import Icon from '../Icon';
const Button: FC<CollapseProps & CollapseStyle> = memo(
  ({ items, disabled, height, width, onChange, type }) => {
    if (!type && type !== 'ghost' && type !== 'small' && type !== 'large') {
      type = 'Collapse_one';
    }

    const content: any = useRef<Array<HTMLDivElement | null>>([]);
    let [num, setNum] = useState(0);
    function chang(index: any, data: any) {
      if (!disabled) {
        if (content.current[index]?.style.height == '') {
          content.current[index].style.height = height + 'px';

          return onChange ? onChange(data) : null;
        }
        if (content.current[index]?.style.height == height + 'px') {
          content.current[index].style.height = '';
        }
      }
      if (disabled) {
        setNum(index);
      }
      return onChange ? onChange(data) : null;
    }
    return (
      <div className={Css['Collapse']}>
        {items.map((item: any, index: any) => {
          return (
            <>
              {
                <div className={Css[type]}>
                  <div className={Css['title']} onClick={() => chang(index, item.key)} style={{}}>
                    {item.label}{' '}
                    <Icon
                      name="arrow-rightjiantou-you2"
                      className={[Css['icon'], disabled && index === num ? Css['action'] : ''].join(
                        ' ',
                      )}
                    />{' '}
                  </div>
                  <div
                    className={Css['content']}
                    ref={(el) => (content.current[index] = el)}
                    style={disabled ? { height: num == index ? height + 'px' : '0' } : undefined}
                  >
                    {item.children}
                  </div>
                </div>
              }
            </>
          );
        })}
      </div>
    );
  },
);

export default Button;
