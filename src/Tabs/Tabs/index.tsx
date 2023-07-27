import React, { useEffect, useRef, useState, FC, memo } from 'react';
import Css from '../index.module.less';
import { TabsProps } from './interface';

const Tabs: FC<TabsProps> = memo(({ type, className, value, handleClick, children }) => {
  let [val, setVal] = useState(children[0].props.name);
  const tabs_main: any = useRef(null);
  const border_bottom: any = useRef(null);
  const navs: any = useRef(null);
  children = Array.isArray(children) ? children : [children];

  if (type !== 'card' && type !== 'border_card') {
    type = 'text';
  }

  const handleChange = (e: any, value: any) => {
    border_bottom.current.style.width = e.target.parentNode.clientWidth + 'px';
    border_bottom.current.style.left = e.target.offsetLeft + 'px';
    setVal(value);
    children.forEach((item: any, index: any) => {
      if (item.props.name === value) {
        tabs_main.current.childNodes[index].className = Css['tab_pane'] + ' ' + Css['show'];
      } else {
        tabs_main.current.childNodes[index].className = Css['tab_pane'];
      }
    });
    return handleClick ? handleClick(e, value) : null;
  };

  useEffect(() => {
    tabs_main.current.childNodes[0].className =
      tabs_main.current.childNodes[0].className + ' ' + Css['show'];
    border_bottom.current.style.width = navs.current.childNodes[0]
      ? navs.current.childNodes[0].clientWidth + 'px'
      : '0px';

    if (!value) {
      setVal(children[0].props.name);
    }
  }, []);

  return (
    <div
      className={[
        Css['tabs'],
        type === 'border_card' ? Css['border'] : '',
        className ? className : '',
      ].join(' ')}
    >
      <div className={[Css['navs'], Css[type]].join(' ')} ref={navs}>
        {children.map((item: any, index: any) => {
          if (item.props.name) {
            return (
              <div
                className={[Css['nav_item'], item.props.name === val ? Css['action'] : ''].join(
                  ' ',
                )}
                onClick={(e) => {
                  handleChange(e, item.props.name);
                }}
              >
                <span>{item.props.name}</span>
              </div>
            );
          }
        })}
        {children[0].props.name ? (
          <div className={Css['border_bottom']} ref={border_bottom}></div>
        ) : (
          ''
        )}
      </div>

      <div className={Css['tabs_main']} ref={tabs_main}>
        {children}
      </div>
    </div>
  );
});

export default Tabs;
