import React, { useMemo, FC, memo, useEffect, useState, useRef } from 'react';
import Css from './NavMenu.module.less';
import { NavMenuProps, NativeNavMenuProps } from './interface';
import Icon from '../Icon';
const NavMenu: FC<NavMenuProps & NativeNavMenuProps> = memo((props) => {
  let { mode, data, menuWidth } = props;
  let lis = useRef();
  mode = mode ? mode : 'vertical';

  useEffect(() => {
    if (mode == 'horizontal') {
      let li = lis.current.children;
      li[0].classList.add(Css['active']);
    }
  });
  function ChangeBGC(index: any, disable: boolean, e?: any) {
    if (e.target.parentNode.parentNode.parentNode.className == Css['Subelement']) {
      if (lis.current) {
        let li = lis.current.children;
        Array.from(li).forEach((item: any) => {
          item.classList.remove(Css['active']);
        });
        li[1].classList.add(Css['active']);
      }
    }

    if (e) {
      e.stopPropagation();
    }
    if (mode == 'horizontal') {
      if (lis.current) {
        let li = lis.current.children;
        if (li[index] == e.target.parentNode.parentNode || li[index] == e.target.parentNode) {
          if (!disable) {
            Array.from(li).forEach((item: any) => {
              item.classList.remove(Css['active']);
            });
            li[index].classList.add(Css['active']);
          }
        }
      }
    }
  }
  let sumHeight = 0;
  function show(e: any) {
    e.stopPropagation();
    if (mode == 'vertical') {
      if (e.target.nextElementSibling) {
        let ul = e.target.nextElementSibling;
        sumHeight = ul.children.length * 56;
        if (ul.style.height == '') {
          ul.style.height = sumHeight + 'px';
          // ul.style.transition = 'all 3s'
        } else {
          ul.style.height = '';
        }

        if (ul.parentNode.parentNode.className == Css['Subelement']) {
          let ul2 = ul.parentNode.parentNode;
          let height2 = ul2.children.length * 56;
          let height = Number(ul2.style.height.split('px')[0]);
          if (height == height2) {
            ul2.style.height = height + sumHeight + 'px';
          } else {
            ul2.style.height = height - sumHeight + 'px';
          }
        }
      }
    }
  }

  let css = Css['horizontal'];
  if (mode == 'horizontal ') {
    css = Css['horizontal'];
  }
  if (mode == 'vertical') {
    css = Css['vertical'];
  }

  console.log(Css['disable']);

  // 递归调用
  function html(list: any, className?: any, ref?: any) {
    return (
      <ul className={className} ref={ref}>
        {list.map((item: any, index: any) => {
          let disable = item.disable ? item.disable : false;
          if (item.children) {
            let css = Css['Subelement'];
            return (
              <li onClick={(e: any) => show(e)} className={disable ? Css['disable'] : null}>
                <p>
                  {' '}
                  <span>
                    {' '}
                    <Icon name={item.icon} />
                  </span>
                  <span>{item.title}</span>
                </p>
                {html(item.children, css)}
              </li>
            );
          } else {
            return (
              <li
                onClick={(e) => ChangeBGC(index, disable, e)}
                className={disable ? Css['disable'] : null}
              >
                <p>
                  {' '}
                  <span>
                    <Icon name={item.icon} />
                  </span>
                  <span>{item.title}</span>
                </p>
              </li>
            );
          }
        })}
      </ul>
    );
  }

  return (
    <div className={Css['NavMenu']} style={{ width: menuWidth ? menuWidth : null }}>
      {html(data, css, lis)}
    </div>
  );
});

export default NavMenu;
