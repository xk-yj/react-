import React, { FC, useState } from 'react';
import { TabProps } from './interface';
import './Tab.module.less';
import Icon from '../Icon';
const Tab: FC<TabProps> = (props) => {
  const { closable, tags, compile } = props;

  const [tabs, setTabs] = useState(
    tags
      ? tags
      : [
          { id: 1, type: 'Tab1', content: '标签1' },
          { id: 2, type: 'Tab2', content: '标签2' },
          { id: 3, type: 'Tab3', content: '标签3' },
          { id: 4, type: 'Tab4', content: '标签4' },
          { id: 5, type: 'Tab1', content: '标签5' },
        ],
  );

  const handleClick = (id: any) => {
    const newTabs = tabs.filter((item: any) => item.id !== id);
    setTabs(newTabs);
  };

  const [Timer, setTimer] = useState(6);
  const InputChange = (e: any) => {
    if (e.target.value.trim() !== '') {
      let date = new Date();
      setTimer(Number(date));
      const data = {
        id: Timer,
        type: 'Tab1',
        content: `${e.target.value}`,
      };
      tabs.push(data);
      e.target.value = '';
    }
    e.target.classList.remove('action');
  };
  const DownEnter = (e: any) => {
    if (e.key === 'Enter') {
      let date = new Date();
      setTimer(Number(date));
      const data = {
        id: Timer,
        type: 'Tab1',
        content: `${e.target.value}`,
      };
      tabs.push(data);
      e.target.value = '';
    }
  };

  return (
    <div className="TabBox">
      {tabs.map((item: any) => (
        <div key={item.id} className={item.type}>
          <p style={{ margin: '0 10px' }}>{item.content}</p>
          {closable ? (
            <div
              style={{ margin: '0 10px', fontSize: '15px', cursor: 'pointer' }}
              onClick={() => handleClick(item.id)}
            >
              {' '}
              <Icon name="closeguanbi" size={12} />{' '}
            </div>
          ) : null}
        </div>
      ))}
      {compile ? (
        <input
          className="inputText"
          type="text"
          onFocus={(e) => {
            e.target.classList.add('action');
          }}
          onBlur={(e) => InputChange(e)}
          onKeyDown={(e) => DownEnter(e)}
        />
      ) : null}
    </div>
  );
};

export default Tab;
