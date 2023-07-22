import React from 'react';
import Icon from '../index';
import icons from '../../util/IconPath';
export default function IconDemo1() {
  let iconNames = [];
  for (const key in icons) {
    iconNames.push(key);
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      {iconNames.map((item, index) => {
        return (
          <div
            style={{
              padding: '20px 0',
              textAlign: 'center',
              width: '18%',
              backgroundColor: '#e5e7eb',
              marginBottom: '10px',
            }}
          >
            <Icon key={index} name={item} size={20} />
            <p style={{ fontSize: '12px' }}>{item}</p>
          </div>
        );
      })}
    </div>
  );
}
