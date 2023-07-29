import React, { useState } from 'react';
import { Dropdownprops } from './interface';
import style from './dropdown.less';

const Dropdown: React.FC<Dropdownprops> = ({
  type,
  size,
  trigger = 'hover',
  option,
  value = '下拉菜单',
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 添加状态控制菜单的显示和隐藏

  const options = [
    { value: 'option1', label: 'Option' },
    { value: 'option2', label: 'Option' },
    { value: 'option3', label: 'Option' },
  ];

  if (size === 'small') {
    size = '12px';
  } else if (size === 'medium') {
    size = '16px';
  } else if (size === 'large') {
    size = '22px';
  }

  return (
    <div>
      <div
        className={style.dropdown}
        onMouseEnter={trigger == 'hover' ? () => setIsMenuOpen(true) : undefined} // 鼠标移入时设置菜单显示
        onMouseLeave={trigger == 'hover' ? () => setIsMenuOpen(false) : undefined} // 鼠标移出时设置菜单隐藏
        onClick={trigger == 'click' ? () => setIsMenuOpen(!isMenuOpen) : undefined} // 点击时切换菜单显示状态
      >
        {type === 'button' ? <button className={style.btn}>{value}</button> : <span>{value}</span>}
        {isMenuOpen && ( // 根据菜单显示状态决定是否渲染ul
          <ul className={style.menu} style={type == 'button' ? { top: '34px' } : undefined}>
            {options.map((option) => (
              <li
                key={option.value}
                className={style.item}
                style={{ display: 'block', fontSize: size }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
