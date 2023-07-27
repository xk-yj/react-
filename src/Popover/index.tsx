import React, { FC, memo, useState, useRef, useEffect } from 'react';
import Css from './index.module.less';
import { PopoverProps } from './interface';
const Input: FC<PopoverProps> = memo(({ title, content, width, children, trigger, placement }) => {
  let [show, setShow] = useState(false);
  let [style, setStyle] = useState({});
  const popover: any = useRef(null);

  if (trigger !== 'click' && trigger !== 'focus' && trigger !== 'hover') {
    trigger = 'hover';
  }

  useEffect(() => {
    console.log(popover.current.clientWidth / 2 + 'px');
    if (placement === 'left') {
      setStyle({
        top: '-50%',
        right: width ? width + 'px' : 100 + 'px',
        width: width ? width + 'px' : '100px',
      });
    } else if (placement === 'rigth') {
      setStyle({
        top: '-50%',
        left: width ? width + 'px' : 100 + 'px',
        width: width ? width + 'px' : '100px',
      });
    } else if (placement === 'top') {
      setStyle({
        bottom: popover.current.clientHeight + 'px',
        left: 0 + 'px',
        width: width ? width + 'px' : '100px',
      });
    } else {
      setStyle({
        top: popover.current.clientHeight + 'px',
        left: 0 + 'px',
        width: width ? width + 'px' : '100px',
      });
    }
  }, []);

  return (
    <div
      className={Css['popover']}
      onClick={() => {
        trigger === 'click' ? setShow(!show) : null;
      }}
      onMouseDown={() => {
        trigger === 'focus' ? setShow(true) : null;
      }}
      onMouseUp={() => {
        trigger === 'focus' ? setShow(false) : null;
      }}
      onMouseMove={() => {
        trigger === 'hover' ? setShow(true) : null;
      }}
      onMouseOut={() => {
        trigger === 'hover' ? setShow(false) : null;
      }}
      ref={popover}
    >
      {children ? children : ''}
      <div className={[Css['popover_main'], show ? Css['show'] : ''].join(' ')} style={style}>
        <div className={Css['title']}>{title ? title : '标题'}</div>
        <div className={Css['content']}>{content ? content : '这是一段内容'}</div>
      </div>
    </div>
  );
});

export default Input;
