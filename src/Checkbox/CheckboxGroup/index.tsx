import React, { useMemo, FC, memo, useEffect, useState, useRef } from 'react';
import Css from '../index.module.less';
import { CheckboxGroupProps } from './interface';

const CheckboxGroup: FC<CheckboxGroupProps> = memo(({ disabled, options, onChange }) => {
  disabled = disabled ? disabled : false;
  options = options ? options : [];

  let [list, setlist] = useState(options);

  function onChangeList(e: any, item: any) {
    let newList: any = [];
    list.forEach((el: any) => {
      newList.push(el);
      if (el == item) {
        newList[newList.length - 1].checked = !el.checked;
      }
    });
    setlist(newList);
    return onChange ? onChange(newList) : null;
  }

  return (
    <div>
      {list.map((item: any) => {
        return (
          <label>
            <span className={[item.checked ? Css['checked'] : '', Css['check']].join(' ')}>
              <input
                type="checkbox"
                key={item.title}
                checked={item.checked}
                disabled={disabled}
                onChange={(e: any) => onChangeList(e, item)}
              />
            </span>
            {item.title}
          </label>
        );
      })}
    </div>
  );
});

export default CheckboxGroup;
