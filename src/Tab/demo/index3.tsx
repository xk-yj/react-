import React from 'react';
import Tab from '..';
export default function TabDemo() {
  const data = [
    { id: 1, type: 'Tab1', content: '标签1' },
    { id: 2, type: 'Tab2', content: '标签2' },
    { id: 3, type: 'Tab3', content: '标签3' },
    { id: 4, type: 'Tab4', content: '标签4' },
  ];
  return (
    <div>
      <Tab closable compile tags={data}></Tab>
    </div>
  );
}
